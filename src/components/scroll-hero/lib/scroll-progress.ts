export function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Progress 0..1 across a pinned section. The section is `pinHeight` tall and
 * the inner stage is sticky at top:0 so the user scrolls `pinHeight - viewport`
 * pixels before the section releases.
 */
export function sectionProgress(
  scrollY: number,
  sectionTop: number,
  sectionHeight: number,
  viewportHeight: number,
): number {
  const scrollable = Math.max(sectionHeight - viewportHeight, 1);
  return clamp((scrollY - sectionTop) / scrollable, 0, 1);
}
