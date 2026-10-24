import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { magazine as M, logo } from "../site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-xl" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <div className="wrap flex min-h-[78px] items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-5" aria-label="Parivartan, home">
          <span className="masthead brand-ink flex-none text-[30px] sm:text-[40px]">{M.name}</span>
          <span className="hidden h-10 w-px flex-none bg-line sm:block" />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-[12.5px] font-semibold italic leading-snug text-ink sm:text-[15px]">{M.theme}</span>
            <span className="mt-1 block whitespace-nowrap text-[11.5px] font-semibold text-body sm:text-[13px]">
              {M.volume} <span className="text-red">·</span> {M.issue} <span className="text-red">·</span> {M.year}
              <span className="hidden md:inline"> <span className="text-red">·</span> Presented by <span className="text-navy">{M.presenter}</span></span>
            </span>
            <span className="mt-0.5 block whitespace-nowrap text-[11.5px] font-semibold text-body md:hidden">Presented by <span className="text-navy">{M.presenter}</span></span>
          </span>
        </Link>
        <NavLink to="/about"
          className={({ isActive }) => `flex-none rounded-full border px-3 py-1.5 text-[13px] sm:px-4 sm:py-2 sm:text-[13.5px] font-semibold transition ${isActive ? "border-navy bg-navy text-white" : "border-line bg-white text-ink hover:border-navy/40"}`}>
          About
        </NavLink>
      </div>
    </header>
  );
}

export function Footer() {
  const links = [["council", "TCET NSS UNIT"], ["literary", "Literary Contributions"], ["achievements", "Achievements"], ["projects", "Projects"]];
  return (
    <footer className="mt-24 border-t border-line bg-wash">
      <div className="wrap py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.tcet} alt="TCET logo" className="h-12 w-auto" />
              <img src={logo.nss} alt="NSS logo" className="h-12 w-12" />
            </div>
            <p className="masthead brand-ink mt-5 text-[52px]">{M.name}</p>
            <p className="mt-1 font-display text-[17px] font-semibold italic text-ink">{M.theme}</p>
            <p className="mt-1 font-deva text-[15px] text-muted" lang="hi">{M.themeDeva}</p>
          </div>
          <div>
            <p className="t-label">This edition</p>
            <ul className="mt-4 space-y-2 text-[15px] text-body">
              <li>{M.volume} · {M.issue}</li>
              <li>Academic Year {M.year}</li>
              <li>Presented by {M.presenter}</li>
            </ul>
          </div>
          <div>
            <p className="t-label">Explore</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {links.map(([id, t]) => (
                <li key={id}><Link to="/" state={{ to: id }} className="text-body transition hover:text-navy">{t}</Link></li>
              ))}
              <li><Link to="/about" className="text-body transition hover:text-navy">About Parivartan</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-small">{M.unit} · {M.college}, {M.place}</p>
          <p className="font-display text-[21px] font-bold text-ink">Not Me But You <span className="mx-1 text-line">|</span> <span className="text-red">Jai Hind!</span></p>
        </div>
      </div>
    </footer>
  );
}

export function ScrollManager() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (pathname === "/" && state?.to) {
      const t = setTimeout(() => document.getElementById(state.to)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}
