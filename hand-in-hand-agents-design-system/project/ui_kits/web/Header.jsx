// Header — sticky frosted-glass nav, 1064px wide, 188px gutters
function Header({ route, setRoute }) {
  const links = [
    { id: "home",     label: "Home" },
    { id: "services", label: "Services - Products" },
    { id: "about",    label: "About" },
  ];
  return (
    <header className="hiha-header">
      <div className="hiha-header-bar">
        <a className="hiha-header-logo" href="#" onClick={(e)=>{e.preventDefault();setRoute("home");}}>
          <span className="hiha-logo-disc" aria-hidden />
        </a>
        <nav className="hiha-header-nav">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
               className={"hiha-nav-link" + (route===l.id ? " is-active" : "")}
               onClick={(e)=>{e.preventDefault();setRoute(l.id);}}>
              {l.label}
            </a>
          ))}
        </nav>
        <LangPill />
      </div>
    </header>
  );
}
Object.assign(window, { Header });
