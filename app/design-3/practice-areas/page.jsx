import styles from "../design.module.css";
import Nav from "../Nav";
import Footer from "../Footer";
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
      <section className={styles.section} style={{ paddingBottom: 0 }}>
        <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 720 }}>
          Every case is different. G D Thiru &amp; Co. specializes in UK immigration law, and the
          routes below follow the firm&apos;s own list from gdthiru.com, updated to current Home
          Office route names. US routes are listed separately, on request.
        </p>
      </section>
      <section className={styles.section}>
        <div className={styles.cards}>
          {practiceAreas.map((p, i) => (
            <article key={p.title} className={styles.card}>
              <span className={styles.cardIndex}>0{i + 1}</span>
              <p className={styles.cardCode}>{p.code}</p>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p>{practiceDetail[p.title]}</p>
            </article>
          ))}
        </div>
        <p className={styles.more}>{moreAreas}</p>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>United States — on request</p>
        <h2>US immigration routes</h2>
        <div className={styles.cards}>
          {usAreas.map((p) => (
            <article key={p.title} className={styles.card}>
              <p className={styles.cardCode}>{p.code}</p>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p>{p.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.cta}>
        <p className={styles.eyebrow}>Begin today</p>
        <h2>Not sure which route fits you?</h2>
        <p>{firm.address}</p>
        <p>{firm.hours}</p>
        <a className={styles.btnGold} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
      </section>
      <Footer />
    </div>
  );
}
