"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./design.module.css";
import { firm } from "../content";

const links = [
  { href: "/design-3", label: "Home" },
  { href: "/design-3/practice-areas", label: "Practice Areas" },
  { href: "/design-3/about", label: "About" },
  { href: "/design-3/faq", label: "FAQ" },
  { href: "/design-3/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <span className={styles.brand}>{firm.name}</span>
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
  );
}
