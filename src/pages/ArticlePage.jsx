import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { articles, faculty, isDeva, langCode, pad } from "../site";
import { PageBar, PrevNext, Avatar } from "../components/ui";
import NotFound from "./NotFound";

export default function ArticlePage({ kind }) {
  const { id } = useParams();
  const list = kind === "faculty" ? [faculty] : articles;
  const i = list.findIndex((a) => a.id === id);
  if (i < 0) return <NotFound />;
  const a = list[i];
  const deva = isDeva(a.title);

  const paras = a.text;
  const body = a.pull
    ? [...paras.slice(0, 2).map((t, k) => <p key={k}>{t}</p>),
       <blockquote key="q" className="my-10 border-l-4 border-leaf pl-6 font-display text-[22px] font-medium italic leading-[1.45] text-ink">“{a.pull}”</blockquote>,
       ...paras.slice(2).map((t, k) => <p key={k + 9}>{t}</p>)]
    : paras.map((t, k) => <p key={k}>{t}</p>);

  return (
    <div className="wrap py-10 sm:py-14">
      <PageBar back="Literary contributions" backState={{ to: "literary" }}
        right={kind === "faculty" ? "Faculty perspective" : `Article ${pad(i + 1)} of ${list.length}`} />

      <motion.article initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
        className="card mx-auto mt-12 max-w-[820px] px-6 py-10 sm:px-14 sm:py-14" lang={langCode(a.lang || "English")}>
        <div className="flex flex-wrap gap-2">
          {kind === "faculty" ? <span className="tag-leaf">Faculty article</span> : <span className={a.cat === "Technical" ? "tag-red" : "tag-plain"}>{a.cat}</span>}
          {a.lang && a.lang !== "English" && <span className="tag-gold">{a.lang}</span>}
        </div>
        <h1 className={`mt-5 ${deva ? "font-deva text-[34px] font-semibold leading-[1.35] text-ink sm:text-[44px]" : "t-h1"}`}>{a.title}</h1>
        <div className="mt-7 flex items-center gap-3 border-b border-line pb-7">
          <Avatar name={a.author} />
          <div><p className="font-semibold text-ink">{a.author}</p><p className="t-small">{a.role || "NSS Volunteer"}</p></div>
        </div>
        <div className={`reader mt-9 ${deva ? "deva" : ""}`}>{body}</div>
      </motion.article>

      {kind === "article" && <PrevNext prev={list[i - 1]} next={list[i + 1]} base="/article" titleOf={(x) => x.title} />}
    </div>
  );
}
