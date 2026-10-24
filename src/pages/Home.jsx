import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { magazine as M, logo, council, achievements, faculty, articles, poems, projects, isDeva, langCode, pad } from "../site";
import { Icon, Reveal, SectionHead, SubHead, Avatar } from "../components/ui";

const Section = ({ id, children, tint = false }) => (
  <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${tint ? "border-y border-line bg-white" : ""}`}>
    <div className="wrap">{children}</div>
  </section>
);

/* ------------------------------------------------------------------ HERO */
function Hero() {
  const up = (d) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease: [0.2, 0.7, 0.2, 1] } });
  const stats = [[projects.length, "Projects"], [articles.length, "Articles"], [poems.length, "Poems"]];
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"
        style={{ background: "radial-gradient(60% 50% at 20% 10%, rgba(44,48,130,.10), transparent 70%), radial-gradient(50% 45% at 85% 20%, rgba(212,42,60,.08), transparent 70%), radial-gradient(60% 40% at 50% 100%, rgba(31,122,77,.06), transparent 70%)" }} />
      <div className="wrap relative flex flex-col items-center pb-20 pt-14 text-center sm:pb-24 sm:pt-20">
        <motion.div {...up(0)} className="flex items-center gap-6 rounded-full border border-line bg-white px-6 py-3 shadow-card">
          <img src={logo.tcet} alt="Thakur College of Engineering and Technology logo" className="h-14 w-auto sm:h-16" />
          <span className="h-10 w-px bg-line" />
          <img src={logo.nss} alt="National Service Scheme logo" className="h-14 w-14 sm:h-16 sm:w-16" />
        </motion.div>

        <motion.h1 {...up(0.08)} className="masthead brand-ink mt-8 text-[88px] sm:text-[140px] lg:text-[164px]">{M.name}</motion.h1>

        <motion.p {...up(0.16)} className="mt-1 font-display text-[22px] font-medium italic leading-snug text-ink sm:text-[30px]">{M.theme}</motion.p>

        <motion.p {...up(0.22)} className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[14px] font-bold uppercase tracking-[0.14em] text-body">
          <span>{M.volume}</span><span className="text-red">•</span><span>{M.issue}</span><span className="text-red">•</span><span>Academic Year {M.year}</span>
        </motion.p>
        <motion.p {...up(0.28)} className="mt-3 text-[16px] font-medium text-body">
          Presented by <span className="font-bold text-navy">{M.presenter}</span>
        </motion.p>

        <motion.div {...up(0.34)} className="mt-12 grid w-full max-w-[560px] grid-cols-3 gap-3">
          {stats.map(([n, l]) => (
            <div key={l} className="card px-3 py-5">
              <div className="font-display text-[40px] font-semibold leading-none text-ink sm:text-[48px]">{n}</div>
              <div className="t-label mt-2">{l}</div>
            </div>
          ))}
        </motion.div>

        <motion.button {...up(0.4)} onClick={() => document.getElementById("council").scrollIntoView({ behavior: "smooth" })} className="btn-solid mt-10">
          Begin reading <Icon name="arrow" className="h-4 w-4 rotate-90" />
        </motion.button>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- COUNCIL */
function Council() {
  const Group = ({ title, names, strong }) => (
    <div>
      <p className="t-label">{title}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {names.map((n) => (
          <li key={n} className={`rounded-[10px] px-3 py-2 text-[14.5px] font-semibold ${strong ? "bg-navy-soft text-navy" : "border border-line bg-canvas text-ink"}`}>{n}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <Section id="council" tint>
      <Reveal className="mb-10 sm:mb-12">
        <h2 className="t-h2">TCET NSS UNIT</h2>
        <p className="mt-2 font-display text-[22px] font-semibold text-red sm:text-[24px]">{M.year}</p>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:items-start">
        <Reveal className="overflow-hidden rounded-[22px] border border-line bg-white shadow-photo">
          <img src="./img/council.jpg" alt="TCET NSS UNIT Programme Officers and Council Members 2026-27" className="block h-auto w-full" />
        </Reveal>
        <Reveal delay={0.05} className="card flex flex-col gap-7 p-6 sm:p-8">
          <Group title="Programme Officers" names={council.officers} strong />
          <Group title="Deputy Programme Officers" names={council.deputies} strong />
          <Group title="Council Members" names={council.members} />
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- LITERARY */
function Faculty() {
  const f = faculty;
  return (
    <div className="mb-16">
      <SubHead title="Faculty Perspective" />
      <Reveal>
        <Link to={`/faculty/${f.id}`} className="card-link group grid overflow-hidden lg:grid-cols-[1.3fr_1fr]">
          <div className="p-7 sm:p-10">
            <span className="tag-leaf">Faculty article</span>
            <h4 className="mt-5 font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.015em] text-ink sm:text-[34px]">{f.title}</h4>
            <div className="mt-6 flex items-center gap-3">
              <Avatar name={f.author} />
              <div><p className="font-semibold text-ink">{f.author}</p><p className="t-small">{f.role}</p></div>
            </div>
            <p className="t-body mt-6 max-w-xl">{f.overview}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-navy">
              Read the full article <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
          <div className="flex items-center border-t border-line bg-leaf-soft p-7 sm:p-10 lg:border-l lg:border-t-0">
            <blockquote className="font-display text-[21px] font-medium italic leading-[1.5] text-ink sm:text-[23px]">
              <span className="block font-display text-[56px] leading-[0.5] text-leaf">“</span>
              {f.pull}
            </blockquote>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}

function Articles() {
  const [f, setF] = useState("All");
  const tabs = [["All", "All"], ["Technical", "Technical"], ["Non-Technical", "Non-technical"], ["Hindi", "हिन्दी"], ["Marathi", "मराठी"]];
  const list = articles.map((a, i) => ({ ...a, n: i + 1 })).filter((a) => f === "All" || a.cat === f || a.lang === f);
  return (
    <div className="mb-16">
      <SubHead title="Student Articles" meta="20 articles · 5 technical · 15 non-technical · 2 in Hindi · 2 in Marathi" />
      <div className="mb-6 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter articles">
        {tabs.map(([k, t]) => (
          <button key={k} role="tab" aria-selected={f === k} onClick={() => setF(k)}
            className={`rounded-full border px-4 py-2 text-[13.5px] font-semibold transition ${f === k ? "border-navy bg-navy text-white" : "border-line bg-white text-body hover:border-navy/40"}`}>
            {t}
          </button>
        ))}
        <span className="t-small ml-auto">{list.length} shown</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((a) => (
          <Link key={a.id} to={`/article/${a.id}`} className="card-link group flex flex-col p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="t-label !text-navy">Article {pad(a.n)}</span>
              <div className="flex gap-1.5">
                <span className={a.cat === "Technical" ? "tag-red" : "tag-plain"}>{a.cat}</span>
                {a.lang !== "English" && <span className="tag-gold">{a.lang}</span>}
              </div>
            </div>
            <h4 lang={langCode(a.lang)} className={`mt-4 ${isDeva(a.title) ? "t-card-deva" : "t-card"}`}>{a.title}</h4>
            <p className="mt-1.5 text-[14px] font-semibold text-muted">{a.author}</p>
            <p className="t-body mt-3 flex-1">{a.overview}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold text-navy">Read article <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Poems() {
  return (
    <div>
      <SubHead title="Poems" meta="8 poems · English, Hindi and Marathi" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {poems.map((p, i) => (
          <Link key={p.id} to={`/poem/${p.id}`} className="card-link group flex flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="t-label !text-red">Poem {pad(i + 1)}</span>
              <span className="tag-plain">{p.lang}</span>
            </div>
            <h4 lang={langCode(p.lang)} className={`mt-4 ${isDeva(p.title) ? "t-card-deva" : "t-card italic"}`}>{p.title}</h4>
            <p className="mt-1.5 text-[14px] font-semibold text-muted">{p.author}</p>
            <p className="t-body mt-3 flex-1">{p.summary}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold text-navy">Read poem <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Literary() {
  return (
    <Section id="literary">
      <SectionHead label="Literary Contributions" title="Words from our faculty and volunteers"
        lead="A faculty perspective, twenty student articles and eight poems. Open any piece to read it in full." />
      <Faculty />
      <Articles />
      <Poems />
    </Section>
  );
}

/* ---------------------------------------------------------- ACHIEVEMENTS */
function Achievements() {
  const tone = ["text-red", "text-leaf", "text-navy", "text-marigold"];
  return (
    <Section id="achievements" tint>
      <SectionHead label="Achievements" title="Milestones that made a difference" />
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.04} className="card flex gap-6 p-6 sm:p-8">
            <div className="w-[96px] flex-none border-r border-line pr-5 sm:w-[112px]">
              <p className={`font-display text-[44px] font-semibold leading-none sm:text-[52px] ${tone[i]}`}>{a.value}</p>
              <p className="t-label mt-2">{a.unit}</p>
            </div>
            <div className="min-w-0">
              <h3 className="t-card">{a.title}</h3>
              <p className="t-body mt-2">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- PROJECTS */
function ProjectRow({ p }) {
  return (
    <Link to={`/project/${p.id}`} className="card-link group flex items-start gap-4 p-5">
      <span className="num">{pad(p.no)}</span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <h4 className="t-card">{p.name}</h4>
          {p.badge && <span className="tag-gold"><Icon name="star" className="h-3 w-3" />{p.badge}</span>}
        </div>
        {p.date && <p className="mt-1 text-[13px] font-semibold text-muted">{p.date}{p.venue ? ` · ${p.venue}` : ""}</p>}
        <p className="t-body mt-1.5 line-clamp-2">{p.desc}</p>
      </div>
      <Icon name="arrow" className="mt-2.5 h-5 w-5 flex-none text-muted transition group-hover:translate-x-1 group-hover:text-navy" />
    </Link>
  );
}

function Projects() {
  const major = projects.filter((p) => p.kind === "major");
  const minor = projects.filter((p) => p.kind === "minor");
  return (
    <Section id="projects">
      <SectionHead label="Projects" title={`${projects.length} projects, one spirit of service`}
        lead={`${major.length} major and ${minor.length} minor projects. Open any project to know more.`} />
      <SubHead title="Major Projects" meta={`${pad(1)} – ${pad(major.length)}`} />
      <div className="grid gap-3 lg:grid-cols-2">{major.map((p) => <ProjectRow key={p.id} p={p} />)}</div>
      <div className="mt-14">
        <SubHead title="Minor Projects" meta={`${pad(major.length + 1)} – ${pad(projects.length)}`} />
        <div className="grid gap-3 lg:grid-cols-2">{minor.map((p) => <ProjectRow key={p.id} p={p} />)}</div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Council />
      <Literary />
      <Achievements />
      <Projects />
    </>
  );
}
