import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, img, pad } from "../site";
import { Icon, PageBar, PrevNext } from "../components/ui";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { id } = useParams();
  const i = projects.findIndex((p) => p.id === id);
  if (i < 0) return <NotFound />;
  const p = projects[i];
  const major = p.kind === "major";

  return (
    <div className="wrap py-10 sm:py-14">
      <PageBar back="All projects" backState={{ to: "projects" }} right={`${major ? "Major" : "Minor"} project ${pad(p.no)} of ${projects.length}`} />

      <motion.article initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto mt-12 max-w-[960px]">
        <header className="mx-auto max-w-read text-center">
          {p.badge && <span className="tag-gold mb-4"><Icon name="star" className="h-3.5 w-3.5" />{p.badge}</span>}
          <h1 className="t-h1">{p.name}</h1>
          {major && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-semibold text-body">
              <span className="inline-flex items-center gap-2"><Icon name="cal" className="h-4 w-4 text-red" />{p.date}</span>
              {p.venue && <span className="inline-flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-red" />{p.venue}</span>}
            </div>
          )}
        </header>

        <div className="mt-10 flex justify-center">
          {p.imgs.map((name) => (
            <figure key={name} className="overflow-hidden rounded-[20px] border border-line bg-white p-2 shadow-photo">
              <img src={img(name)} alt={p.name} className="block h-auto max-h-[72vh] w-auto max-w-full rounded-[14px]" />
            </figure>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-read">
          {major ? (
            <>
              <blockquote className="mb-10 border-l-4 border-red pl-6 font-display text-[22px] font-medium italic leading-[1.45] text-ink sm:text-[24px]">
                “{p.quote}”
              </blockquote>
              <div className="reader">{p.text.map((t, k) => <p key={k}>{t}</p>)}</div>
            </>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {[["Objective", p.obj, "text-navy", "bg-navy-soft"], ["Outcome", p.out, "text-leaf", "bg-leaf-soft"]].map(([h, list, c, bg]) => (
                <div key={h} className="card p-6">
                  <span className={`tag ${bg} ${c}`}>{h}</span>
                  <ul className="mt-4 space-y-3">
                    {list.map((t) => (
                      <li key={t} className="flex gap-3 text-[16px] leading-[1.65] text-body">
                        <Icon name="check" className={`mt-1 h-5 w-5 flex-none ${c}`} />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.article>

      <PrevNext prev={projects[i - 1]} next={projects[i + 1]} base="/project" titleOf={(x) => x.name} />
    </div>
  );
}
