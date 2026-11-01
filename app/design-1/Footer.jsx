import Link from "next/link";
import styles from "./design.module.css";
import { firm } from "../content";

const links = [
  { href: "/design-1", label: "Home" },
  { href: "/design-1/practice-areas", label: "Practice Areas" },
  { href: "/design-1/about", label: "About" },
  { href: "/design-1/faq", label: "FAQ" },
  { href: "/design-1/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "28px 48px", justifyContent: "space-between", maxWidth: 1080, margin: "0 auto", textAlign: "left" }}>
        <div style={{ maxWidth: 320 }}>
          <strong>{firm.name}</strong>
          <p>{firm.tagline}</p>
          <p>{firm.badges.join(" · ")}</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", marginTop: 0 }}>Pages</p>
          <p>
            {links.map((l, i) => (
              <span key={l.href}>
                {i > 0 ? " · " : null}
                <Link href={l.href}>{l.label}</Link>
              </span>
            ))}
          </p>
        </div>
        <div style={{ maxWidth: 320 }}>
          <p style={{ marginTop: 0 }}><a href={firm.mapsLink} target="_blank" rel="noreferrer">{firm.address}</a></p>
          <p><a href={firm.phoneLink}>{firm.phoneDisplay}</a></p>
          <p>{firm.hours}</p>
        </div>
      </div>
      <p style={{ marginTop: 28, opacity: 0.75 }}>© 2026 {firm.name} · Website design preview</p>
    </footer>
  );
}
