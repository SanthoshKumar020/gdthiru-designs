import styles from "../design.module.css";
import Nav from "../Nav";
import Footer from "../Footer";
import { firm, routeSections, moreAreas } from "../../content";

export const metadata = { title: "Practice Areas | GD Thiru & Co." };

export default function PracticeAreas() {
  const ukRoutes = routeSections.filter((r) => r.group === "UK");
  const usRoutes = routeSections.filter((r) => r.group === "US");
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
        <nav className="anchorNav">
          <span>On this page:</span>
          {routeSections.map((r) => (
            <a key={r.slug} href={`#${r.slug}`}>
              {r.title}
            </a>
          ))}
        </nav>
        <p style={{ fontSize: 13, opacity: 0.75, maxWidth: 720 }}>
          General information only — not legal advice for your case. Outcomes depend on individual circumstances.
        </p>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>United Kingdom</p>
        <h2>UK immigration routes</h2>
        <div className="routeList">
          {ukRoutes.map((r) => (
            <article key={r.slug} id={r.slug} className={styles.card}>
              <p className={styles.cardCode}>{r.code}</p>
              <h3>{r.title}</h3>
              <p>
                <strong>{r.answer}</strong>
              </p>
              {r.detail.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
              <ul>
                {r.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <a href={firm.phoneLink} style={{ color: "#d4af37", fontWeight: "bold" }}>
                Book a consultation about this route →
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>United States — on request</p>
        <h2>US immigration routes</h2>
        <div className="routeList">
          {usRoutes.map((r) => (
            <article key={r.slug} id={r.slug} className={styles.card}>
              <p className={styles.cardCode}>{r.code}</p>
              <h3>{r.title}</h3>
              <p>
                <strong>{r.answer}</strong>
              </p>
              {r.detail.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
              <ul>
                {r.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <a href={firm.phoneLink} style={{ color: "#d4af37", fontWeight: "bold" }}>
                Book a consultation about this route →
              </a>
            </article>
          ))}
        </div>
        <p className={styles.more}>{moreAreas}</p>
      </section>
      <section className={styles.cta}>
        <p className={styles.eyebrow}>Begin today</p>
        <h2>Not sure which route fits you?</h2>
        <p>{firm.address}</p>
        <p>{firm.hours}</p>
        <a className={styles.btnGold} href={firm.phoneLink}>
          Call {firm.phoneDisplay}
        </a>
      </section>
      <Footer />
    </div>
  );
}
