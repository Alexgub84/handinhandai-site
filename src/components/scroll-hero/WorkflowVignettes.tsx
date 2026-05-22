import { useEffect, useRef } from "react";
import type { Scenario } from "./data/scenarios";
import { sectionProgress } from "./lib/scroll-progress";

type Props = { scenario: Scenario };

/**
 * Chapter 4: 5 vignette cards, each owning a scroll range. As progress passes
 * its [start, end), the card animates in (opacity + translateY + scale) and
 * the previous one animates out. Visually stacked in the same spot for
 * "the camera doesn't move; the content does" feel.
 */
export default function WorkflowVignettes({ scenario }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const vignettesRef = useRef<HTMLElement[]>([]);
  const rafIdRef = useRef(0);
  const lastProgressRef = useRef(-1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      vignettesRef.current.forEach((v) => v.classList.add("is-active"));
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

      scenario.vignettes.items.forEach((item, i) => {
        const el = vignettesRef.current[i];
        if (!el) return;
        const active = progress >= item.start && progress < item.end;
        el.classList.toggle("is-active", active);
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
    <section ref={sectionRef} className="ch-vignettes" aria-label={scenario.vignettes.title}>
      <div className="ch-vignettes__stage">
        <div className="ch-vignettes__copy">
          <p className="ch-vignettes__kicker">{scenario.vignettes.kicker}</p>
          <h2 className="ch-vignettes__title">{scenario.vignettes.title}</h2>
        </div>

        <div className="vignette-stack">
          {scenario.vignettes.items.map((item, i) => (
            <article
              key={item.id}
              ref={(el) => {
                if (el) vignettesRef.current[i] = el;
              }}
              className={`vignette ${i === 0 ? "is-active" : ""}`}
              data-start={item.start}
              data-end={item.end}
            >
              <span className="vignette__num" aria-hidden="true">{item.num}</span>
              <p className="vignette__kicker">{item.kicker}</p>
              <h3 className="vignette__title">{item.title}</h3>
              <p className="vignette__body">{item.body}</p>
              {item.chip && <span className="vignette__chip">{item.chip}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
