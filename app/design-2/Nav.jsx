"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./design.module.css";
import { firm } from "../content";

const links = [
  { href: "/design-2", label: "Home" },
  { href: "/design-2/practice-areas", label: "Practice Areas" },
  { href: "/design-2/about", label: "About" },
  { href: "/design-2/faq", label: "FAQ" },
  { href: "/design-2/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
    <header className={styles.header}>
      <Link className={styles.brand} href="/design-2" style={{ textDecoration: "none", color: "inherit" }}>
        <span className={styles.logo}>GD THIRU <em>&amp; CO</em></span>
      </Link>
      <button type="button" className={styles.hamburger} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? "✕" : "☰"}
      </button>
      <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={pathname === l.href ? styles.active : ""}>
            {l.label}
          </Link>
        ))}
        <Link className={styles.navCta} href="/design-2/contact" onClick={() => setOpen(false)}>
          Book consultation
        </Link>
      </nav>
    </header>
    <a className={styles.callBar} href={firm.phoneLink}>📞 Call {firm.phoneDisplay}</a>
    </>
  );
}
