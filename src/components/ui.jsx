import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const P = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  back: "M19 12H5M11 18l-6-6 6-6",
  pin: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  cal: "M7 3v4M17 3v4M4 9h16M5.5 5h13A1.5 1.5 0 0 1 20 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-12A1.5 1.5 0 0 1 5.5 5z",
  check: "M5 12.5l4.5 4.5L19 7.5",
  star: "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z",
};
export function Icon({ name, className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={P[name]} />
    </svg>
  );
}

/* Gentle rise on scroll. Content is visible from the first frame. */
export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div className={className} initial={{ y: 18 }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}

/* Every section opens the same way: label, title, optional lead — aligned to one left edge. */
export function SectionHead({ label, title, lead, aside }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
      <div className="max-w-2xl">
        <p className="t-label !text-red">{label}</p>
        <h2 className="t-h2 mt-3">{title}</h2>
      </div>
      {(lead || aside) && <div className="max-w-md lg:pb-1">{lead && <p className="t-lead">{lead}</p>}{aside}</div>}
    </Reveal>
  );
}

export function SubHead({ title, meta }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
      <h3 className="t-h3">{title}</h3>
      {meta && <span className="t-small">{meta}</span>}
    </div>
  );
}

export function Avatar({ name, size = "h-10 w-10 text-[13px]" }) {
  const ini = name.replace(/^(Mr|Ms|Dr)\.\s*/, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return <span className={`grid flex-none place-items-center rounded-full bg-navy font-bold text-white ${size}`}>{ini}</span>;
}

export function PageBar({ back, backTo = "/", backState, right }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
      <Link to={backTo} state={backState} className="inline-flex items-center gap-2 text-[14px] font-semibold text-muted transition hover:text-navy">
        <Icon name="back" /> {back}
      </Link>
      {right && <span className="t-label !text-navy">{right}</span>}
    </div>
  );
}

export function PrevNext({ prev, next, base, titleOf }) {
  const Card = ({ item, dir }) =>
    item ? (
      <Link to={`${base}/${item.id}`} className={`card-link block min-w-0 p-5 ${dir === "next" ? "sm:text-right" : ""}`}>
        <span className="t-label">{dir === "next" ? "Next →" : "← Previous"}</span>
        <span className={`mt-1.5 block truncate text-[16px] font-semibold text-ink ${/[ऀ-ॿ]/.test(titleOf(item)) ? "font-deva" : "font-display"}`}>{titleOf(item)}</span>
      </Link>
    ) : (
      <span className="hidden sm:block" />
    );
  return (
    <nav className="mx-auto mt-10 grid max-w-[820px] gap-3 sm:grid-cols-2" aria-label="More">
      <Card item={prev} dir="prev" />
      <Card item={next} dir="next" />
    </nav>
  );
}
