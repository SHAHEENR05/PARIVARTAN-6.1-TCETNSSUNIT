import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { magazine as M, logo, projects, articles, poems } from "../site";
import { PageBar, Icon } from "../components/ui";

export default function About() {
  const major = projects.filter((p) => p.kind === "major").length;
  const inside = [
    [projects.length, "Projects", `${major} major and ${projects.length - major} minor projects, from blood donation and CPR training to tree plantation and Tiranga Yatra.`, "text-red"],
    [1, "Faculty perspective", "Dr. Monalisa Bhattacharjee on the Bonbibi tradition of the Sundarbans and what it teaches about living alongside nature.", "text-leaf"],
    [articles.length, "Student articles", "5 technical and 15 non-technical articles by NSS volunteers, including 2 in Hindi and 2 in Marathi.", "text-navy"],
    [poems.length, "Poems", "Written by volunteers in English, Hindi and Marathi.", "text-marigold"],
  ];

  return (
    <div className="wrap py-10 sm:py-14">
      <PageBar back="Back to highlights" right="About the magazine" />

      <motion.article initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto mt-12 max-w-[820px]">
        <h1 className="t-h1">About <span className="masthead brand-ink font-normal">{M.name}</span></h1>
        <p className="mt-4 text-[16px] font-semibold text-body">{M.volume} · {M.issue} · Academic Year {M.year} · Presented by <span className="text-navy">{M.presenter}</span></p>

        <div className="card mt-10 px-6 py-8 sm:px-10 sm:py-10">
          <p className="font-display text-[22px] font-medium leading-[1.55] text-ink sm:text-[24px]">
            <span className="masthead text-navy">{M.name}</span>, Volume 6, Issue 1.0, is the magazine of the {M.unit}.
          </p>
          <div className="mt-6 space-y-5 text-[17px] leading-[1.85] text-body">
            <p>
              It is built around the theme <span className="font-display font-semibold italic text-ink">“{M.theme}”</span>: a pledge to nature and a choice for change. It treats care for the environment not as a one-day campaign but as a daily commitment, where every sapling planted, every street cleaned and every conversation about water, waste or health moves us a step closer to the change we want to see.
            </p>
            <p>
              Across its pages, the magazine records twenty-five projects in health, environment, society and education, alongside a faculty perspective, twenty student articles and eight poems in English, Hindi and Marathi. Together they show how a unit of young engineers lived the NSS motto, <span className="font-semibold text-ink">“Not Me But You”</span>, and what that service taught them.
            </p>
          </div>
        </div>


        <h2 className="t-h3 mt-14">Inside this issue</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {inside.map(([n, t, d, c]) => (
            <div key={t} className="card p-6">
              <p className={`font-display text-[44px] font-semibold leading-none ${c}`}>{n}</p>
              <p className="t-card mt-3">{t}</p>
              <p className="t-body mt-1">{d}</p>
            </div>
          ))}
        </div>

        <div className="card mt-10 flex flex-wrap items-center justify-between gap-6 p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <img src={logo.tcet} alt="TCET logo" className="h-12 w-auto" />
            <img src={logo.nss} alt="NSS logo" className="h-12 w-12" />
            <div>
              <p className="font-semibold text-ink">{M.unit}</p>
              <p className="t-small">National Service Scheme · “Not Me But You”</p>
            </div>
          </div>
          <Link to="/" className="btn-solid">Read the highlights <Icon name="arrow" /></Link>
        </div>
      </motion.article>
    </div>
  );
}
