"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./design.module.css";
import { firm } from "../content";

const links = [
  { href: "/design-4", label: "Home" },
  { href: "/design-4/practice-areas", label: "Practice Areas" },
  { href: "/design-4/about", label: "About" },
  { href: "/design-4/faq", label: "FAQ" },
  { href: "/design-4/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.brand} href="/design-4" style={{ textDecoration: "none", color: "inherit" }}>{firm.name} <small>{firm.tagline}</small></Link>
        <button type="button" className={styles.hamburger} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? "✕" : "☰"}
        </button>
        <a className={styles.headerCall} href={firm.phoneLink}>📞 {firm.phoneDisplay}</a>
      </header>
      <nav className={`${styles.navBar} ${open ? styles.navOpen : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={pathname === l.href ? styles.active : ""}>
            {l.label}
          </Link>
        ))}
      </nav>
      <a className={styles.callBar} href={firm.phoneLink}>📞 Call {firm.phoneDisplay}</a>
    </>
  );
}
