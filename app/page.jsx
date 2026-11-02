import Link from "next/link";
import "./globals.css";

const designs = [
  { n: 1, name: "Classic", style: "Navy & gold, traditional law firm", desc: "Serif headlines, gold rules, formal and authoritative. The safe, classic choice for a law firm." },
  { n: 2, name: "Clean", style: "Light & modern, bold hero", desc: "White space, one strong accent colour, clear cards. Confident and easy to read on a phone." },
  { n: 3, name: "Premium Dark", style: "Dark charcoal & gold, heritage feel", desc: "Dark, elegant and expensive-looking. Suits a firm that wants to feel established and exclusive." },
  { n: 4, name: "Emerald", style: "Deep emerald & warm ivory, amber accent", desc: "Modern, confident and trustworthy. Deep green, warm ivory backgrounds, amber highlights, image-led hero." },
  { n: 5, name: "Terracotta", style: "Warm cream, deep ink, terracotta accent", desc: "Friendly boutique feel with rounded cards and soft colours, still professional. Warm, approachable, easy to read." },
];

export default function Hub() {
  return (
    <main className="hub">
      <p className="hubEyebrow">GD Thiru &amp; Co. — Advocates &amp; Solicitors, Chennai</p>
      <h1>Website design options</h1>
      <p className="hubSub">
        Five different homepage styles for the new website, built with the firm&apos;s content.
        Open any design, pick the one you like, and that style becomes the full website.
      </p>
      <div className="hubGrid">
        {designs.map((d) => (
          <Link key={d.n} className="hubCard" href={`/design-${d.n}`}>
            <span className="hubNum">Design {d.n}</span>
            <h2>{d.name}</h2>
            <p className="hubStyle">{d.style}</p>
            <p>{d.desc}</p>
            <span className="hubLink">Open design {d.n} →</span>
          </Link>
        ))}
      </div>
      <p className="hubNote">
        Content note: practice areas follow the firm&apos;s own list from gdthiru.com, with
        scrapped UK visa categories (Tier 1, Tier 2, Tier 4, Tier 5, EEA) updated to their
        current routes. The testimonial is the firm&apos;s real client testimonial from
        gdthiru.com. US routes are shown as options for the firm to confirm. Images are web
        photos used as mockups — the final site should use licensed photos or the firm&apos;s
        own photos.
      </p>
    </main>
  );
}
