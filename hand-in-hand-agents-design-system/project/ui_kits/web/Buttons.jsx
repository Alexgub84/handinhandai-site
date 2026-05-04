// HIHA UI Kit — atomic Buttons (primary CTA, secondary, language pill)
// Loaded as Babel JSX. Components attach to window for cross-script use.

function PrimaryButton({ children = "Talk to Us", href = "#", icon = true }) {
  return (
    <a href={href} className="hiha-btn-primary">
      {icon && <img src="../../assets/icon-whatsapp.svg" alt="" />}
      <span>{children}</span>
    </a>
  );
}

function SecondaryButton({ children = "Schedule a Call", href = "#", icon = true }) {
  return (
    <a href={href} className="hiha-btn-secondary">
      {icon && <img src="../../assets/icon-call.svg" alt="" />}
      <span>{children}</span>
    </a>
  );
}

function LangPill({ value = "EN 🇬🇧" }) {
  return (
    <button className="hiha-btn-lang" type="button">
      <span>{value}</span>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
        <path d="M1 1L5 5L9 1" stroke="rgb(105,117,134)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function CTAPair({ primary = "Talk to Us", secondary = "Schedule a Call" }) {
  return (
    <div className="hiha-cta-pair">
      <PrimaryButton>{primary}</PrimaryButton>
      <SecondaryButton>{secondary}</SecondaryButton>
    </div>
  );
}

Object.assign(window, { PrimaryButton, SecondaryButton, LangPill, CTAPair });
