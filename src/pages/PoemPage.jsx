import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { poems, isDeva, langCode, pad } from "../site";
import { PageBar, PrevNext } from "../components/ui";
import NotFound from "./NotFound";

export default function PoemPage() {
  const { id } = useParams();
  const i = poems.findIndex((p) => p.id === id);
  if (i < 0) return <NotFound />;
  const p = poems[i];
  const deva = isDeva(p.title);
  const face = deva ? "font-deva" : "font-display";

  return (
    <div className="wrap py-10 sm:py-14">
      <PageBar back="Literary contributions" backState={{ to: "literary" }} right={`Poem ${pad(i + 1)} of ${poems.length}`} />

      <motion.article initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
        className="card mx-auto mt-12 max-w-[820px] px-4 py-12 text-center sm:px-14 sm:py-16" lang={langCode(p.lang)}>
        <span className="tag-plain">{p.lang}</span>
        <h1 className={`mt-5 text-[32px] font-semibold leading-[1.25] text-ink sm:text-[46px] ${face} ${deva ? "" : "italic tracking-[-0.015em]"}`}>{p.title}</h1>
        <span className="mx-auto mt-7 block h-[3px] w-12 rounded-full bg-red" />
        <div className="mt-9 space-y-7">
          {p.stanzas.map((s, k) => (
            <p key={k} className={`text-[16px] leading-[1.85] text-body sm:text-[19px] ${face}`}>
              {s.map((line, j) => <span key={j} className="block">{line}</span>)}
            </p>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-xs border-t border-line pt-7">
          <p className="font-display text-[21px] font-semibold text-ink">{p.author}</p>
          <p className="mt-1.5 text-[12px] font-bold uppercase tracking-[0.22em] text-red">NSS Volunteer</p>
        </div>
      </motion.article>

      <PrevNext prev={poems[i - 1]} next={poems[i + 1]} base="/poem" titleOf={(x) => x.title} />
    </div>
  );
}
