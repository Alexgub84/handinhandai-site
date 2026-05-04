// Hero — eyebrow + 2-line headline + sub + CTA pair
function Hero({ eyebrow, title, sub, primary, secondary, children }) {
  return (
    <section className="hiha-hero">
      {eyebrow && <div className="hiha-eyebrow hiha-hero-eyebrow">{eyebrow}</div>}
      <h1 className="hiha-hero-title">
        {title.split("\n").map((line, i, a) => (
          <React.Fragment key={i}>{line}{i < a.length-1 && <br/>}</React.Fragment>
        ))}
      </h1>
      {sub && <p className="hiha-hero-sub">{sub}</p>}
      {(primary || secondary) && (
        <div className="hiha-cta-pair hiha-hero-cta">
          {primary && <PrimaryButton>{primary}</PrimaryButton>}
          {secondary && <SecondaryButton>{secondary}</SecondaryButton>}
        </div>
      )}
      {children}
    </section>
  );
}
Object.assign(window, { Hero });
