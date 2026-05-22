import { useEffect, useRef } from "react";
import type { Scenario } from "./data/scenarios";
import { clamp, lerp, sectionProgress, smoothstep } from "./lib/scroll-progress";

type Props = {
  scenario: Scenario;
};

/**
 * Chapter 1: tabs/apps drift chaotically across the screen, then collapse
 * into a single glowing orb as the visitor scrolls. Three scene-copy blocks
 * fade in/out over the same scroll range.
 *
 * The whole effect is a single pinned section with a sticky stage. JS writes
 * --story-progress on <html> once per RAF; CSS reads it for the progress bar.
 * Per-card transforms are written to inline style — fewer than 12 cards keeps
 * the loop cheap.
 */
export default function ChaosToOrb({ scenario }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const scenesRef = useRef<HTMLElement[]>([]);
  const rafIdRef = useRef(0);
  const lastProgressRef = useRef(-1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Reveal all scenes statically. Show orb. No scroll binding.
      scenesRef.current.forEach((s) => s.classList.add("is-active"));
      const orb = orbRef.current;
      if (orb) {
        orb.style.setProperty("--orb-opacity", "1");
        orb.style.setProperty("--orb-scale", "1");
      }
      return;
    }

    const update = () => {
      rafIdRef.current = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const progress = sectionProgress(
        window.scrollY,
        sectionTop,
        section.offsetHeight,
        window.innerHeight,
      );

      if (Math.abs(progress - lastProgressRef.current) < 0.0008) return;
      lastProgressRef.current = progress;

      document.documentElement.style.setProperty(
        "--story-progress",
        `${(progress * 100).toFixed(2)}%`,
      );
      document.body.classList.toggle("has-scrolled", progress > 0.015);

      // Cards: drift outward (entropy) → collapse to centre → fade out
      const entropyT = smoothstep(0, 0.36, progress);
      const collapseT = smoothstep(0.36, 0.7, progress);
      const fadeT = smoothstep(0.62, 0.82, progress);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const startX = +(card.dataset.startX || 0);
        const startY = +(card.dataset.startY || 0);
        const startRot = +(card.dataset.startRot || 0);

        // entropy: gentle outward drift + rotation
        const driftScale = lerp(0.6, 1.0, entropyT);
        const driftX = startX * driftScale;
        const driftY = startY * driftScale;
        const driftRot = startRot * lerp(0.4, 1.0, entropyT);

        // collapse: pull toward 0,0
        const x = lerp(driftX, 0, collapseT);
        const y = lerp(driftY, 0, collapseT);
        const rot = lerp(driftRot, 0, collapseT);
        const scale = lerp(1, 0.2, collapseT);

        // stagger fade per card by index
        const cardFadeStart = 0.6 + (i % 5) * 0.012;
        const cardFade = 1 - smoothstep(cardFadeStart, cardFadeStart + 0.16, progress);

        const opacity = lerp(1, 0, fadeT) * cardFade;

        card.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px), 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        card.style.opacity = opacity.toFixed(3);
      });

      // Orb: appears as cards collapse, peaks, stays
      const orbAppear = smoothstep(0.5, 0.78, progress);
      const orbScale = lerp(0.4, 1.0, orbAppear);
      if (orbRef.current) {
        orbRef.current.style.setProperty("--orb-opacity", orbAppear.toFixed(3));
        orbRef.current.style.setProperty("--orb-scale", orbScale.toFixed(3));
      }

      // Scenes: discrete activation based on data-start / data-end
      scenesRef.current.forEach((scene) => {
        const start = +(scene.dataset.start || 0);
        const end = +(scene.dataset.end || 1);
        const active = progress >= start && progress < end;
        scene.classList.toggle("is-active", active);
      });
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

  return (
    <section ref={sectionRef} className="ch-chaos" aria-label="Hero">
      <div className="ch-chaos__stage">
        <div className="ch-chaos__grid" aria-hidden="true" />

        <div className="ch-chaos__canvas" aria-hidden="true">
          {scenario.chaos.apps.map((app, i) => (
            <div
              key={app.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="app-card"
              data-tone={app.tone}
              data-start-x={app.startX}
              data-start-y={app.startY}
              data-start-rot={app.startRot}
              style={{
                top: "50%",
                left: "50%",
                transform: `translate3d(-50%, -50%, 0) rotate(${app.startRot}deg) scale(1)`,
                opacity: 1,
              }}
            >
              <span className="app-card__dot" aria-hidden="true" />
              {app.label}
            </div>
          ))}

          <div ref={orbRef} className="orb" aria-hidden="true" />
        </div>

        <div className="ch-chaos__copy">
          {scenario.chaos.scenes.map((scene, i) => (
            <article
              key={scene.step}
              ref={(el) => {
                if (el) scenesRef.current[i] = el;
              }}
              className={`scene ${i === 0 ? "is-active" : ""}`}
              data-step={scene.step}
              data-label={scene.label}
              data-start={scene.start}
              data-end={scene.end}
            >
              <h1>{scene.headline}</h1>
              {scene.body && <p>{scene.body}</p>}
            </article>
          ))}
        </div>

        <span className="scroll-note" aria-hidden="true">
          {scenario.chaos.scrollHint}
        </span>

        <div className="film-progress" aria-hidden="true">
          <span className="film-progress__line" />
        </div>
      </div>
    </section>
  );
}
