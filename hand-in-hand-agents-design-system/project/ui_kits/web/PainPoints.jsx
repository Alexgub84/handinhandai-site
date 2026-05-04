// SolutionPill — gradient section opener, "Customer Interactions"
function SolutionPill({ children, style }) {
  return <div className="hiha-solution-pill" style={style}>{children}</div>;
}

// PainPoint — single white pill capsule
function PainPoint({ children }) {
  return <span className="hiha-pain-pill">{children}</span>;
}

// PainPointGrid — staggered rows of capsules. Pass items[][] (rows of strings).
function PainPointGrid({ rows }) {
  return (
    <div className="hiha-painpoint-grid">
      {rows.map((row, ri) => (
        <div className="hiha-painpoint-row" key={ri}
             style={{ marginLeft: ri % 2 === 0 ? 0 : -24 }}>
          {row.map((p, i) => <PainPoint key={i}>{p}</PainPoint>)}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { SolutionPill, PainPoint, PainPointGrid });
