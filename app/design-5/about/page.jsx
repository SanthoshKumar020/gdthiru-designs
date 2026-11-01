import styles from "../design.module.css";
import Nav from "../Nav";
import Footer from "../Footer";
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
        <p className={styles.standfirst}>{aboutText[0]}</p>
        {aboutText.slice(1).map((t) => (
          <p key={t.slice(0, 24)} style={{ fontSize: 16, lineHeight: 1.65, color: "#555" }}>{t}</p>
        ))}
        <p className={styles.badges}>{firm.badges.join(" — ")}</p>
      </section>
      <section className={styles.section}>
        <p className={styles.secNum}>How we work</p>
        <h2>Why GD Thiru &amp; Co.</h2>
        <div className={styles.whyGrid}>
          {whyUs.map((w) => (
            <article key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.closing}>
        <p className={styles.secNum}>Next step</p>
        <h2>Start with a consultation.</h2>
        <p>{firm.address}</p>
        <p>{firm.hours}</p>
        <a className={styles.btnDark} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
      </section>
      <Footer />
    </div>
  );
}
