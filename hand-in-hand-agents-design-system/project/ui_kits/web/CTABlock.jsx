// CTABlock — bottom-of-page "Talk to Us" + dot row
function CTABlock({ title, sub, primary = "Talk to Us", secondary = "Schedule a Call" }) {
  return (
    <section className="hiha-cta-block">
      <div className="hiha-cta-dots" aria-hidden>
        <span className="hiha-cta-dot" style={{ background: "var(--hiha-orange)" }} />
        <span className="hiha-cta-dot" style={{ background: "var(--hiha-green)", marginLeft: -12 }} />
        <span className="hiha-cta-dot" style={{ background: "var(--hiha-blue)",   marginLeft: -12 }} />
      </div>
      <h2 className="hiha-cta-title">
        {title.split("\n").map((line, i, a) => (
          <React.Fragment key={i}>{line}{i<a.length-1 && <br/>}</React.Fragment>
        ))}
      </h2>
      {sub && <p className="hiha-cta-sub">{sub}</p>}
      <div className="hiha-cta-pair">
        <PrimaryButton>{primary}</PrimaryButton>
        <SecondaryButton>{secondary}</SecondaryButton>
      </div>
    </section>
  );
}

// Footer — black plate with logo, nav, ctas
function Footer() {
  return (
    <footer className="hiha-footer">
      <div className="hiha-footer-row">
        <span className="hiha-logo-disc hiha-footer-logo" aria-hidden />
        <div className="hiha-footer-meta">
          <div className="hiha-footer-wordmark">Hand in Hand Agents</div>
          <div className="hiha-footer-line">© 2025 Hand in Hand Agents</div>
          <div className="hiha-footer-line">Email: contact@handinhandagents.com</div>
        </div>
        <nav className="hiha-footer-nav">
          {["Home","Services","Products","About"].map(t=>(
            <a key={t} href="#" className="hiha-footer-link">{t}</a>
          ))}
        </nav>
        <div className="hiha-footer-right">
          <LangPill />
          <div className="hiha-cta-pair" style={{ marginTop: 16 }}>
            <PrimaryButton>Talk to Us</PrimaryButton>
            <SecondaryButton>Schedule a Call</SecondaryButton>
          </div>
        </div>
      </div>
      <div className="hiha-footer-tag">
        <div>Always here and available for any questions</div>
        <div>We are building your team an effective Teammate</div>
      </div>
    </footer>
  );
}

Object.assign(window, { CTABlock, Footer });
