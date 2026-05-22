import { useEffect, useRef, useState } from "react";
import type { Scenario } from "./data/scenarios";

type Props = { scenario: Scenario };

const MIN_MS = 1100;
const MAX_MS = 3500;

/**
 * Loader-as-story. Holds the page for 1.1–3.5s. Fakes preload progress so
 * the bar feels organic. Below MIN we hold for narrative; past MAX we
 * release regardless of network.
 */
export default function CinematicLoader({ scenario }: Props) {
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);
  const startedRef = useRef(Date.now());

  useEffect(() => {
    document.body.classList.add("is-loading-film");

    let raf = 0;
    const tick = () => {
      const elapsed = Date.now() - startedRef.current;
      const t = Math.min(1, elapsed / MAX_MS);
      // Ease so the bar fills fast at first then slows
      const eased = 1 - Math.pow(1 - t, 1.6);
      setPct(Math.round(eased * 100));

      if (elapsed >= MIN_MS && document.readyState === "complete") {
        setHidden(true);
        document.body.classList.remove("is-loading-film");
        return;
      }
      if (elapsed >= MAX_MS) {
        setPct(100);
        setHidden(true);
        document.body.classList.remove("is-loading-film");
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setHidden(true);
      document.body.classList.remove("is-loading-film");
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("is-loading-film");
    };
  }, []);

  return (
    <div
      className={`cinematic-loader ${hidden ? "is-hidden" : ""}`}
      role="status"
      aria-live="polite"
      aria-hidden={hidden}
    >
      <div className="cinematic-loader__inner">
        <p className="cinematic-loader__kicker">{scenario.loader.kicker}</p>
        <div
          className="cinematic-loader__title"
          aria-label={`${scenario.loader.line1} ${scenario.loader.line2}`}
        >
          <span>{scenario.loader.line1}</span>
          <span>{scenario.loader.line2}</span>
        </div>
        <p className="cinematic-loader__aside">{scenario.loader.aside}</p>
        <div className="cinematic-loader__bar" aria-hidden="true">
          <span style={{ width: `${pct}%` }} />
        </div>
        <p className="cinematic-loader__meta">
          <span>{pct}%</span> {scenario.loader.meta}
        </p>
      </div>
    </div>
  );
}
