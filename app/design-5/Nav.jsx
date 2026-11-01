"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./design.module.css";
import { firm } from "../content";

const links = [
  { href: "/design-5", label: "Home" },
  { href: "/design-5/practice-areas", label: "Practice Areas" },
  { href: "/design-5/about", label: "About" },
  { href: "/design-5/faq", label: "FAQ" },
  { href: "/design-5/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header className={styles.header}>
        <span className={styles.date}>Chennai, India</span>
        <Link className={styles.brand} href="/design-5" style={{ textDecoration: "none", color: "inherit" }}>{firm.name}</Link>
        <span className={styles.headerRight}>
          <a className={styles.headerCall} href={firm.phoneLink}>{firm.phoneDisplay}</a>
          <button type="button" className={styles.hamburger} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? "✕" : "☰"}
          </button>
        </span>
      </header>
      <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
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
