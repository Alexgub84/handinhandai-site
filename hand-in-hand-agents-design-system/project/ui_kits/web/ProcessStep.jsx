// ProcessStep — numbered green-tinted step card (compact + tall variants)
function ProcessStep({ n, title, body, variant = "compact" }) {
  if (variant === "tall") {
    return (
      <div className="hiha-step-tall">
        <div className="hiha-step-num">{n}</div>
        <div className="hiha-step-title">{title}</div>
        {body && <div className="hiha-step-body">{body}</div>}
      </div>
    );
  }
  return (
    <div className="hiha-step-compact">
      <div className="hiha-step-num">{n}</div>
      <div className="hiha-step-title">{title}</div>
    </div>
  );
}

// ToolChip — floating white tile with green left bar (Automate CRM, Generate Reports, Auto Replies)
function ToolChip({ children, style }) {
  return <div className="hiha-tool-chip" style={style}>{children}</div>;
}

Object.assign(window, { ProcessStep, ToolChip });
