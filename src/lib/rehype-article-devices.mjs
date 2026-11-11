/**
 * Rehype plugin: makes the three article design devices apply to ordinary
 * Markdown, not only to hand-authored HTML (issue #111). See
 * docs/specs/article-page-design.md sections 5-7 and
 * src/styles/home/article.css for the classes and values this produces.
 *
 *   - Inline code (single backticks) -> `<span class="art-term">` (section
 *     6, the isolated Latin-term chip). A fenced code block
 *     (`<pre><code>`) is left alone — this device is for a short term
 *     inside a sentence, not a code sample.
 *   - A blockquote (`> `) -> `<aside class="art-aside">` (section 5, the
 *     one light editorial line per section). A single inner paragraph is
 *     unwrapped so the text sits directly inside the `<aside>`, matching
 *     the approved specimen (local/design/article-page.html), which never
 *     nests a `<p>` inside its asides.
 *   - A GFM table -> the real `<table class="art-table">`, wrapped in
 *     `.art-table-scroll` for tablet/desktop, PLUS a generated
 *     `.art-cards` stacked-definition-list fallback for narrow screens
 *     (section 7). Built from the table's own structure: the first column
 *     is read as the row label (promoted to `<th scope="row">`, matching
 *     the spec's binding RTL rule), every other header becomes one card
 *     (its header text is the card title), and each body row becomes one
 *     `dt`/`dd` pair inside every card. This is the only card shape the
 *     design spec documents — a feature-by-option comparison table, the
 *     approved specimen's own table — so a table with no header/body split,
 *     or with only one column, is wrapped for horizontal scroll but gets no
 *     card fallback generated, rather than guessing at a structure that
 *     was never specified.
 *
 * Wired in astro.config.mjs (`markdown.rehypePlugins`) so it runs at build
 * time over every article's rendered body — no client-side JavaScript, no
 * HTML an author has to hand-write.
 *
 * Local-dev gotcha: Astro's content layer caches each article's rendered
 * body in `node_modules/.astro/data-store.json`, keyed on the source
 * Markdown only — editing this file (or astro.config.mjs) does NOT bust
 * that cache. After changing this plugin, delete
 * `node_modules/.astro/data-store.json` (or `rm -rf .astro
 * node_modules/.astro`) before rebuilding locally to see the new output. A
 * fresh `npm ci` (CI, a new clone) has no such cache and always re-renders.
 */
import { visit } from 'unist-util-visit';

/** @param {{ type?: string }} node */
function isElement(node) {
  return Boolean(node) && node.type === 'element';
}

/**
 * @param {{ properties?: Record<string, unknown> }} node
 * @param {string} className
 */
function addClassName(node, className) {
  const existing = node.properties?.className;
  const classes = Array.isArray(existing) ? [...existing] : existing ? [String(existing)] : [];
  if (!classes.includes(className)) classes.push(className);
  node.properties = { ...node.properties, className: classes };
}

/** @param {{ tagName?: string }} node */
function filterElements(children) {
  return (children || []).filter(isElement);
}

/** Concatenates every text node under `node`, ignoring markup — used to match
 * a declared `parts[].heading` (plain text) against a rendered H2's content
 * regardless of any inline device inside it (a term chip, bold, a link). */
function textContent(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value ?? '';
  if (Array.isArray(node.children)) return node.children.map(textContent).join('');
  return '';
}

/**
 * Builds the `.art-table-scroll` wrapper (always) and the `.art-cards`
 * fallback (when the table has a header/body split with at least one data
 * column) for one `<table>` node, mutating the table in place.
 */
function buildTableReplacement(table) {
  addClassName(table, 'art-table');

  const tableWrap = {
    type: 'element',
    tagName: 'div',
    properties: { className: ['art-table-scroll'] },
    children: [table],
  };

  const thead = table.children.find((c) => isElement(c) && c.tagName === 'thead');
  const tbody = table.children.find((c) => isElement(c) && c.tagName === 'tbody');
  if (!thead || !tbody) {
    return { tableWrap, cardsWrap: null };
  }

  const headerRow = filterElements(thead.children).find((c) => c.tagName === 'tr');
  const headerCells = headerRow ? filterElements(headerRow.children).filter((c) => c.tagName === 'th') : [];
  headerCells.forEach((cell) => {
    cell.properties = { ...cell.properties, scope: 'col' };
  });
  const columnHeaders = headerCells.slice(1);

  const bodyRows = filterElements(tbody.children).filter((c) => c.tagName === 'tr');
  // Promote each row's first cell to a real row header — the spec's
  // binding RTL rule ("table row headers are <th scope="row">, text-align
  // right") — and reuse it as every card's `dt` text below.
  for (const row of bodyRows) {
    const first = filterElements(row.children)[0];
    if (first && first.tagName === 'td') {
      first.tagName = 'th';
      first.properties = { ...first.properties, scope: 'row' };
    }
  }

  if (columnHeaders.length === 0) {
    return { tableWrap, cardsWrap: null };
  }

  const cards = columnHeaders.map((headerCell, columnIndex) => {
    const dlChildren = [];
    for (const row of bodyRows) {
      const cells = filterElements(row.children);
      const rowLabel = cells[0];
      const dataCell = cells[columnIndex + 1];
      if (!rowLabel || !dataCell) continue;
      dlChildren.push({ type: 'element', tagName: 'dt', properties: {}, children: rowLabel.children });
      dlChildren.push({ type: 'element', tagName: 'dd', properties: {}, children: dataCell.children });
    }
    return {
      type: 'element',
      tagName: 'div',
      properties: { className: ['art-card'] },
      children: [
        {
          type: 'element',
          tagName: 'header',
          properties: {},
          children: [{ type: 'element', tagName: 'h3', properties: {}, children: headerCell.children }],
        },
        { type: 'element', tagName: 'dl', properties: {}, children: dlChildren },
      ],
    };
  });

  const cardsWrap = { type: 'element', tagName: 'div', properties: { className: ['art-cards'] }, children: cards };
  return { tableWrap, cardsWrap };
}

export function rehypeArticleDevices() {
  return (tree) => {
    // Inline code -> Latin-term chip.
    visit(tree, 'element', (node, _index, parent) => {
      if (node.tagName === 'code' && isElement(parent) && parent.tagName !== 'pre') {
        node.tagName = 'span';
        addClassName(node, 'art-term');
      }
    });

    // Blockquote -> aside. mdast-util-to-hast puts whitespace-only text
    // nodes around the inner <p> (the newline after `>` and before the
    // closing fence), so "exactly one element child" has to ignore those,
    // not require an exactly-one-length children array.
    visit(tree, 'element', (node) => {
      if (node.tagName === 'blockquote') {
        node.tagName = 'aside';
        addClassName(node, 'art-aside');
        const elementChildren = filterElements(node.children);
        const onlyWhitespaceAroundIt = node.children.every(
          (c) => isElement(c) || (c.type === 'text' && /^\s*$/.test(c.value ?? ''))
        );
        if (elementChildren.length === 1 && elementChildren[0].tagName === 'p' && onlyWhitespaceAroundIt) {
          node.children = elementChildren[0].children;
        }
      }
    });

    // Table -> wrapped table + generated card fallback. Collected first,
    // replaced afterwards (reverse index order) so splicing one node into
    // two doesn't disturb the traversal in progress.
    const tables = [];
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'table' && parent && typeof index === 'number') {
        tables.push({ node, index, parent });
      }
    });
    for (const { node, index, parent } of tables.reverse()) {
      const { tableWrap, cardsWrap } = buildTableReplacement(node);
      parent.children.splice(index, 1, ...(cardsWrap ? [tableWrap, cardsWrap] : [tableWrap]));
    }
  };
}

/**
 * Rehype plugin: wraps each declared `parts[]` entry's content in
 * `<section data-track-section="<id>">` (issue #174). Runs AFTER
 * `rehypeArticleDevices` in `astro.config.mjs`'s `rehypePlugins` list, so a
 * part that contains a GFM table wraps the table's already-rewritten
 * `.art-table-scroll` / `.art-cards` pair, not the raw `<table>` — that
 * ordering was verified against both skill guides (see the issue's
 * acceptance run) to leave the table transform untouched.
 *
 * A part's range runs from its own H2 up to the next DECLARED H2 (or the
 * end of the body) — an undeclared H2 in between stays inside the
 * preceding declared part's section, exactly as the design ruling asks.
 * Matching is done on each H2's rendered text content (so an inline device
 * inside the heading — a term chip, bold — doesn't break the match)
 * against the frontmatter's exact `heading` string, trimmed.
 *
 * Enforcement that every declared heading actually exists, and that no two
 * parts share an id, is NOT this plugin's job — that is
 * `scripts/check-articles.mjs`, which fails the build with a readable
 * message. This plugin only wraps what it can match; an unmatched part is
 * silently skipped here (the build-level check is what turns that into a
 * failure, not a silent fallback the reader would never notice).
 */
export function rehypeArticleParts() {
  return (tree, file) => {
    const parts = file?.data?.astro?.frontmatter?.parts;
    if (!Array.isArray(parts) || parts.length === 0) return;

    const children = tree.children;
    const boundaries = [];
    for (const part of parts) {
      if (!part || typeof part.id !== 'string' || typeof part.heading !== 'string') continue;
      const wantedText = part.heading.trim();
      const index = children.findIndex(
        (node) => isElement(node) && node.tagName === 'h2' && textContent(node).trim() === wantedText
      );
      if (index === -1) continue;
      boundaries.push({ index, id: part.id });
    }
    if (boundaries.length === 0) return;
    boundaries.sort((a, b) => a.index - b.index);

    const newChildren = [];
    let cursor = 0;
    for (let i = 0; i < boundaries.length; i += 1) {
      const { index, id } = boundaries[i];
      if (index > cursor) newChildren.push(...children.slice(cursor, index));
      const end = i + 1 < boundaries.length ? boundaries[i + 1].index : children.length;
      newChildren.push({
        type: 'element',
        tagName: 'section',
        properties: { dataTrackSection: id },
        children: children.slice(index, end),
      });
      cursor = end;
    }
    if (cursor < children.length) newChildren.push(...children.slice(cursor));
    tree.children = newChildren;
  };
}

/**
 * Rehype plugin: emits one empty marker element,
 * `<div data-handoff-slot hidden></div>`, immediately after the declared
 * hinge part's closing `</section>` (issue #185, Ruling 1 + Ruling 2). Runs
 * AFTER `rehypeArticleParts` in `astro.config.mjs`'s `rehypePlugins` list —
 * it looks for a top-level `<section data-track-section>` node, which only
 * exists once that plugin has already wrapped the declared parts.
 *
 * Reads `handoffAfter` off the same `file.data.astro.frontmatter` object
 * `rehypeArticleParts` reads `parts` from — Astro's markdown pipeline
 * attaches the entry's parsed frontmatter there before running the
 * configured `rehypePlugins`, so every plugin in the list sees the same
 * object `rehypeArticleParts` already relies on.
 *
 * Nothing else in the body changes: no section is renamed, split, grouped,
 * or reordered. `ArticleLayout.astro` is the only consumer of this marker —
 * it splits the rendered body HTML string on it in true document order (no
 * CSS `order`) and mounts `<SkillHandoff>` between the two halves.
 *
 * `scripts/check-articles.mjs` is what turns a `handoffAfter` value with no
 * matching part into a build failure; this plugin stays silent on an
 * unmatched value, the same convention `rehypeArticleParts` already uses
 * for an unmatched `parts[].heading`.
 */
export function rehypeArticleHandoffMarker() {
  return (tree, file) => {
    const handoffAfter = file?.data?.astro?.frontmatter?.handoffAfter;
    if (typeof handoffAfter !== 'string' || handoffAfter === '') return;

    const children = tree.children;
    const index = children.findIndex(
      (node) => isElement(node) && node.tagName === 'section' && node.properties?.dataTrackSection === handoffAfter
    );
    if (index === -1) return;

    const marker = {
      type: 'element',
      tagName: 'div',
      properties: { dataHandoffSlot: true, hidden: true },
      children: [],
    };
    tree.children = [...children.slice(0, index + 1), marker, ...children.slice(index + 1)];
  };
}
