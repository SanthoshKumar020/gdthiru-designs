import styles from "../design.module.css";
import Nav from "../Nav";
import { firm, aboutText, whyUs } from "../../content";

export const metadata = { title: "About the Firm | GD Thiru & Co." };

export default function About() {
  return (
    <div className={styles.page}>
      <Nav />
      <section className={styles.pageHero}>
        <h1>About the Firm</h1>
        <p>A Chennai law firm for UK and US immigration — regulated, plain-spoken, careful.</p>
      </section>
      <section className={styles.section}>
        {aboutText.map((t) => (
          <p key={t.slice(0, 24)} style={{ fontSize: 17, lineHeight: 1.7, color: "#444" }}>{t}</p>
        ))}
        <div className={styles.trustRow} style={{ marginTop: 28 }}>
          {firm.badges.map((b) => <span key={b}>✓ {b}</span>)}
        </div>
      </section>
      <section className={styles.why}>
        <p className={styles.eyebrow}>Why GD Thiru &amp; Co.</p>
        <h2>How we work</h2>
        <div className={styles.whyGrid}>
          {whyUs.map((w) => (
            <article key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.cta}>
        <h2>Start with a consultation</h2>
        <p>{firm.address} · {firm.hours}</p>
        <a className={styles.btnPrimary} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
      </section>
      <footer className={styles.footer}>
        <p><strong>{firm.name}</strong> — {firm.tagline}</p>
        <p>{firm.address}</p>
      </footer>
    </div>
  );
}
