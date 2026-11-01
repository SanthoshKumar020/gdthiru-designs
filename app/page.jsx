import Link from "next/link";
import "./globals.css";

const designs = [
  {
    n: 1,
    name: "Classic",
    style: "Navy & gold · Traditional law firm",
    desc: "Serif headlines, gold rules, formal and authoritative. The safe, classic choice that signals trust and heritage.",
  },
  {
    n: 2,
    name: "Clean",
    style: "Light & modern · Bold hero",
    desc: "Generous white space, one strong accent colour, clear cards. Confident and effortless on every screen size.",
  },
  {
    n: 3,
    name: "Premium Dark",
    style: "Charcoal & gold · Heritage feel",
    desc: "Dark, elegant and exclusive. Designed for a firm that wants to feel established and high-end from the first glance.",
  },
  {
    n: 4,
    name: "Professional Blue",
    style: "Trust blue · Consultation-first",
    desc: "Blue throughout, clear CTAs, built to convert visitors into consultation calls with clarity and confidence.",
  },
  {
    n: 5,
    name: "Editorial",
    style: "Minimal · Magazine layout",
    desc: "Lots of white space, large serif headlines, numbered sections. Quiet, refined, and distinctly modern.",
  },
];

export default function Hub() {
  return (
    <main className="hub">
      <p className="hubEyebrow">GD Thiru &amp; Co. — Advocates &amp; Solicitors, Chennai</p>
      <h1>Website design options</h1>
      <p className="hubSub">
        Five carefully crafted homepage directions for the new site, using the firm&apos;s real content.
        Open any design, experience the full flow, and choose the style that best represents the practice.
      </p>
      <div className="hubGrid">
        {designs.map((d) => (
          <Link key={d.n} className="hubCard" href={`/design-${d.n}`}>
            <span className="hubNum">Design {d.n}</span>
            <h2>{d.name}</h2>
            <p className="hubStyle">{d.style}</p>
            <p>{d.desc}</p>
            <span className="hubLink">
              Open design {d.n}
              <span aria-hidden="true"> →</span>
            </span>
          </Link>
        ))}
      </div>
      <p className="hubNote">
        Content note: practice areas follow the firm&apos;s own list from gdthiru.com, with
        retired UK visa categories updated to current routes. The testimonial is a real client
        quote from the firm&apos;s site. US routes are presented as options for confirmation.
        Images are stock mockups — the final site should use licensed or firm-owned photography.
      </p>
    </main>
  );
}
