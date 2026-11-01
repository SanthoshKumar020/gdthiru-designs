"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./design.module.css";
import { firm } from "../content";

const links = [
  { href: "/design-1", label: "Home" },
  { href: "/design-1/practice-areas", label: "Practice Areas" },
  { href: "/design-1/about", label: "About" },
  { href: "/design-1/faq", label: "FAQ" },
  { href: "/design-1/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className={styles.topbar}>
        <span>{firm.address}</span>
        <a href={firm.phoneLink}>{firm.phoneDisplay}</a>
      </div>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.monogram}>GT</span>
          <span>
            <strong>{firm.name}</strong>
            <small>{firm.tagline}</small>
          </span>
        </div>
        <button type="button" className={styles.hamburger} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? "✕" : "☰"}
        </button>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={pathname === l.href ? styles.active : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
