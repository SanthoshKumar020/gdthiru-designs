import styles from "../design.module.css";
import Nav from "../Nav";
import { firm, practiceAreas, practiceDetail, moreAreas, usAreas } from "../../content";

export const metadata = { title: "Practice Areas | GD Thiru & Co." };

export default function PracticeAreas() {
  return (
    <div className={styles.page}>
      <Nav />
      <section className={styles.pageHero}>
        <h1>Practice Areas</h1>
        <p>UK and US immigration routes, explained clearly — and handled end to end.</p>
      </section>
      <section className={styles.section}>
        <div className={styles.cards}>
          {practiceAreas.map((p) => (
            <article key={p.title} className={styles.card}>
              <span className={styles.cardFlag}>{p.code}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p>{practiceDetail[p.title]}</p>
              <a href="/design-4/contact">Ask about this route →</a>
            </article>
          ))}
        </div>
        <p className={styles.more}>{moreAreas}</p>
      </section>
      <section className={styles.section}>
        <p className={styles.sectionSub}>United States — on request</p>
        <h2>US immigration routes</h2>
        <div className={styles.cards}>
          {usAreas.map((p) => (
            <article key={p.title} className={styles.card}>
              <span className={styles.cardFlag}>{p.code}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p>{p.detail}</p>
              <a href="/design-4/contact">Ask about this route →</a>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.cta}>
        <h2>Not sure which route fits you?</h2>
        <p>{firm.address}</p>
        <p>{firm.hours}</p>
        <a className={styles.btnWhite} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
      </section>
      <footer className={styles.footer}>
        <p><strong>{firm.name}</strong> — {firm.tagline}</p>
      </footer>
    </div>
  );
}
