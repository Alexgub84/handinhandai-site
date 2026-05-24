import { useEffect, useRef } from "react";
import type { Scenario } from "./data/scenarios";
import { sectionProgress } from "./lib/scroll-progress";

type Props = { scenario: Scenario };

/**
 * Chapters 2–7 as ONE pinned scroll-scrub film (issue #20).
 *
 * Everything after the hero lives in a single sticky stage. A persistent orb
 * is the constant backdrop; the chapter copy cross-fades in place as the user
 * scrolls a single progress timeline — instead of marching through six
 * full-screen text slides. Same "the camera doesn't move, the content does"
 * feel as the hero, carried across the whole page.
 *
 * The stage exposes the current beat on `data-film-chapter` (consumed by the
 * E2E test and handy for debugging). Reduced-motion reveals every chapter
 * statically with no scroll binding.
 */

/** Chapter bands across the film, 0..1. Order = render order. */
const BEATS = [
  { id: "reveal", start: 0.0, end: 0.16 },
  { id: "bespoke", start: 0.16, end: 0.33 },
  { id: "vignettes", start: 0.33, end: 0.64 },
  { id: "engineering", start: 0.64, end: 0.77 },
  { id: "process", start: 0.77, end: 0.9 },
  { id: "cta", start: 0.9, end: 1.01 },
] as const;

const VIG_BAND = BEATS.find((b) => b.id === "vignettes")!;

/** Even sub-ranges for the vignette cards inside the vignettes band. */
function vignetteRange(i: number, count: number): { start: number; end: number } {
  const span = (VIG_BAND.end - VIG_BAND.start) / count;
  const start = VIG_BAND.start + i * span;
  return { start, end: start + span };
}

export default function StoryFilm({ scenario }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<Record<string, HTMLElement>>({});
  const vigRef = useRef<HTMLElement[]>([]);
  const rafIdRef = useRef(0);
  const lastProgressRef = useRef(-1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      Object.values(layersRef.current).forEach((el) => el.classList.add("is-active"));
      vigRef.current.forEach((el) => el && el.classList.add("is-active"));
      const orb = orbRef.current;
      if (orb) orb.style.setProperty("--film-p", "1");
      if (stageRef.current) stageRef.current.dataset.filmChapter = "all";
      return;
    }

    const update = () => {
      rafIdRef.current = 0;
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!section || !stage) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const p = sectionProgress(
        window.scrollY,
        sectionTop,
        section.offsetHeight,
        window.innerHeight,
      );

      if (Math.abs(p - lastProgressRef.current) < 0.0008) return;
      lastProgressRef.current = p;

      let activeId = BEATS[0].id as string;
      for (const beat of BEATS) {
        const on = p >= beat.start && p < beat.end;
        const el = layersRef.current[beat.id];
        if (el) el.classList.toggle("is-active", on);
        if (on) activeId = beat.id;
      }
      stage.dataset.filmChapter = activeId;

      // Vignette cards cross-fade within the vignettes band.
      const count = scenario.vignettes.items.length;
      vigRef.current.forEach((el, i) => {
        if (!el) return;
        const { start, end } = vignetteRange(i, count);
        el.classList.toggle("is-active", p >= start && p < end);
      });

      // Orb stays alive: slow drift driven by overall progress.
      if (orbRef.current) orbRef.current.style.setProperty("--film-p", p.toFixed(4));
    };

    const requestUpdate = () => {
      if (rafIdRef.current) return;
      rafIdRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [scenario]);

  const setLayer = (id: string) => (el: HTMLElement | null) => {
    if (el) layersRef.current[id] = el;
  };

  return (
    <section ref={sectionRef} className="ch-film" aria-label="Story">
      <div ref={stageRef} className="ch-film__stage" data-film-chapter="reveal">
        <div className="ch-film__grid" aria-hidden="true" />
        <div ref={orbRef} className="orb ch-film__orb" aria-hidden="true" />

        {/* Chapter 2 — Reveal */}
        <article
          ref={setLayer("reveal")}
          className="film-layer is-active"
          data-chapter="reveal"
        >
          <div className="film-layer__inner">
            <p className="slide__kicker">{scenario.reveal.kicker}</p>
            <h2>{scenario.reveal.title}</h2>
            <p className="slide__lede">{scenario.reveal.lede}</p>
            <p className="slide__body">{scenario.reveal.body}</p>
          </div>
        </article>

        {/* Chapter 3 — Bespoke */}
        <article ref={setLayer("bespoke")} className="film-layer" data-chapter="bespoke">
          <div className="film-layer__inner">
            <p className="slide__kicker">{scenario.bespoke.kicker}</p>
            <h2>{scenario.bespoke.title}</h2>
            <p className="slide__body">{scenario.bespoke.body}</p>
            <div className="bespoke-diagram" aria-hidden="true">
              {scenario.bespoke.nodes.slice(0, 2).map((node) => (
                <div key={node} className="bespoke-diagram__node">
                  {node}
                </div>
              ))}
              <div className="bespoke-diagram__node bespoke-diagram__node--center">
                {scenario.bespoke.center}
              </div>
              {scenario.bespoke.nodes.slice(2).map((node) => (
                <div key={node} className="bespoke-diagram__node">
                  {node}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Chapter 4 — Vignettes (persistent title + cross-fading cards) */}
        <article
          ref={setLayer("vignettes")}
          className="film-layer film-layer--vignettes"
          data-chapter="vignettes"
        >
          <div className="film-vignettes__copy">
            <p className="ch-vignettes__kicker">{scenario.vignettes.kicker}</p>
            <h2 className="ch-vignettes__title">{scenario.vignettes.title}</h2>
          </div>
          <div className="vignette-stack">
            {scenario.vignettes.items.map((item, i) => (
              <article
                key={item.id}
                ref={(el) => {
                  if (el) vigRef.current[i] = el;
                }}
                className={`vignette ${i === 0 ? "is-active" : ""}`}
                data-vignette={item.id}
              >
                <span className="vignette__num" aria-hidden="true">
                  {item.num}
                </span>
                <p className="vignette__kicker">{item.kicker}</p>
                <h3 className="vignette__title">{item.title}</h3>
                <p className="vignette__body">{item.body}</p>
                {item.chip && <span className="vignette__chip">{item.chip}</span>}
              </article>
            ))}
          </div>
        </article>

        {/* Chapter 5 — Engineering */}
        <article
          ref={setLayer("engineering")}
          className="film-layer"
          data-chapter="engineering"
        >
          <div className="film-layer__inner">
            <p className="slide__kicker">{scenario.engineering.kicker}</p>
            <h2>{scenario.engineering.title}</h2>
            <p className="slide__lede">{scenario.engineering.body}</p>
          </div>
        </article>

        {/* Chapter 6 — Process */}
        <article ref={setLayer("process")} className="film-layer" data-chapter="process">
          <div className="film-layer__inner">
            <p className="slide__kicker">{scenario.process.kicker}</p>
            <h2>{scenario.process.title}</h2>
            <p className="slide__lede">{scenario.process.body}</p>
            <div className="process-grid">
              {scenario.process.steps.map((step) => (
                <article key={step.num} className="process-step">
                  <span className="process-step__num" aria-hidden="true">
                    {step.num}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </article>

        {/* Chapter 7 — CTA */}
        <article
          ref={setLayer("cta")}
          className="film-layer film-layer--cta"
          data-chapter="cta"
        >
          <div className="film-layer__inner">
            <p className="slide__kicker">{scenario.cta.kicker}</p>
            <h2>{scenario.cta.title}</h2>
            <p className="slide__lede">{scenario.cta.body}</p>
            <a className="slide__cta" href={scenario.cta.href}>
              {scenario.cta.button} <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
