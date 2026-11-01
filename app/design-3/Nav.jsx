"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./design.module.css";
import { firm, routeSections } from "../content";

const base = "/design-3";
const ukVisas = routeSections.filter((r) => r.group === "UK" && r.slug !== "appeals" && r.slug !== "judicial-review");
const usVisas = routeSections.filter((r) => r.group === "US");
const challenges = routeSections.filter((r) => r.slug === "appeals" || r.slug === "judicial-review");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(null);
  const pathname = usePathname();
  const onPractice = pathname.startsWith(`${base}/practice-areas`);
  const dropBtnStyle = onPractice
    ? { fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: "4px" }
    : undefined;

  const dropPanel = dropOpen && (
    <div className="dropPanel">
      <div className="dropGroup">
        <h4>UK visas</h4>
        {ukVisas.map((r) => (
          <Link key={r.slug} href={`${base}/practice-areas#${r.slug}`} onClick={() => setDropOpen(false)}>
            {r.title}
          </Link>
        ))}
      </div>
      <div className="dropGroup">
        <h4>US visas</h4>
        {usVisas.map((r) => (
          <Link key={r.slug} href={`${base}/practice-areas#${r.slug}`} onClick={() => setDropOpen(false)}>
            {r.title}
          </Link>
        ))}
      </div>
      <div className="dropGroup">
        <h4>Challenges</h4>
        {challenges.map((r) => (
          <Link key={r.slug} href={`${base}/practice-areas#${r.slug}`} onClick={() => setDropOpen(false)}>
            {r.title}
          </Link>
        ))}
      </div>
      <div className="dropFoot">
        <Link href={`${base}/practice-areas`} onClick={() => setDropOpen(false)}>
          View all practice areas →
        </Link>
      </div>
    </div>
  );

  const overlay = open && (
    <div className="overlay" style={{ "--m-bg": "#121417", "--m-fg": "#f5f2ea", "--m-acc": "#d4af37", "--m-callfg": "#121417" }}>
      <div className="overlayTop">
        <span className="overlayBrand">{firm.name}</span>
        <button type="button" className="overlayClose" aria-label="Close menu" onClick={() => setOpen(false)}>
          ✕
        </button>
      </div>
      <nav className="overlayLinks">
        <Link href={base} onClick={() => setOpen(false)}>
          Home
        </Link>
        <div style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7, marginTop: 20 }}>
          Practice Areas
        </div>
        <button type="button" className="accBtn" aria-expanded={accOpen === "uk"} onClick={() => setAccOpen(accOpen === "uk" ? null : "uk")}>
          <span>UK visas</span>
          <span>{accOpen === "uk" ? "−" : "+"}</span>
        </button>
        {accOpen === "uk" && (
          <div className="accPanel">
            {ukVisas.map((r) => (
              <Link key={r.slug} href={`${base}/practice-areas#${r.slug}`} onClick={() => setOpen(false)}>
                {r.title}
              </Link>
            ))}
          </div>
        )}
        <button type="button" className="accBtn" aria-expanded={accOpen === "us"} onClick={() => setAccOpen(accOpen === "us" ? null : "us")}>
          <span>US visas</span>
          <span>{accOpen === "us" ? "−" : "+"}</span>
        </button>
        {accOpen === "us" && (
          <div className="accPanel">
            {usVisas.map((r) => (
              <Link key={r.slug} href={`${base}/practice-areas#${r.slug}`} onClick={() => setOpen(false)}>
                {r.title}
              </Link>
            ))}
          </div>
        )}
        <button type="button" className="accBtn" aria-expanded={accOpen === "ch"} onClick={() => setAccOpen(accOpen === "ch" ? null : "ch")}>
          <span>Challenges</span>
          <span>{accOpen === "ch" ? "−" : "+"}</span>
        </button>
        {accOpen === "ch" && (
          <div className="accPanel">
            {challenges.map((r) => (
              <Link key={r.slug} href={`${base}/practice-areas#${r.slug}`} onClick={() => setOpen(false)}>
                {r.title}
              </Link>
            ))}
          </div>
        )}
        <Link href={`${base}/practice-areas`} onClick={() => setOpen(false)}>
          All practice areas
        </Link>
        <Link href={`${base}/about`} onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href={`${base}/faq`} onClick={() => setOpen(false)}>
          FAQ
        </Link>
        <Link href={`${base}/contact`} onClick={() => setOpen(false)}>
          Contact
        </Link>
      </nav>
      <div className="overlayFoot">
        <a className="overlayCall" href={firm.phoneLink}>
          📞 Call {firm.phoneDisplay}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.brand} href="/design-3" style={{ textDecoration: "none", color: "inherit" }}>
          {firm.name}
        </Link>
        <button type="button" className={styles.hamburger} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? "✕" : "Menu ☰"}
        </button>
        <nav className={styles.nav}>
          <Link href="/design-3" className={pathname === "/design-3" ? styles.active : ""}>
            Home
          </Link>
          <div className="dropWrap">
            <button type="button" className="dropBtn" aria-expanded={dropOpen} onClick={() => setDropOpen((o) => !o)} style={dropBtnStyle}>
              Practice Areas ▾
            </button>
            {dropPanel}
          </div>
          <Link href="/design-3/about" className={pathname === "/design-3/about" ? styles.active : ""}>
            About
          </Link>
          <Link href="/design-3/faq" className={pathname === "/design-3/faq" ? styles.active : ""}>
            FAQ
          </Link>
          <Link href="/design-3/contact" className={pathname === "/design-3/contact" ? styles.active : ""}>
            Contact
          </Link>
        </nav>
      </header>
      {overlay}
      <a className={styles.callBar} href={firm.phoneLink}>
        📞 Call {firm.phoneDisplay}
      </a>
    </>
  );
}
