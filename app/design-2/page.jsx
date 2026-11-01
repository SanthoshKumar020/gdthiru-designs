import styles from "./design.module.css";
import { firm, hero, practiceAreas, moreAreas, whyUs, steps, testimonials, faqs } from "../content";

export const metadata = { title: "Design 2 — Clean | GD Thiru & Co." };

export default function Design2() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logo}>GD Thiru <em>&amp; Co.</em></span>
        </div>
        <nav className={styles.nav}>
          <a href="#practice">Practice Areas</a>
          <a href="#why">Why Us</a>
          <a href="#process">Process</a>
          <a className={styles.navCta} href="#contact">Book consultation</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>Immigration law · Chennai</p>
          <h1>{hero.title}</h1>
          <p className={styles.heroSub}>{hero.sub}</p>
          <div className={styles.heroCtas}>
            <a className={styles.btnPrimary} href="#contact">{hero.cta} →</a>
            <a className={styles.btnText} href={firm.phoneLink}>or call {firm.phoneDisplay}</a>
          </div>
          <div className={styles.trustRow}>
            {firm.badges.map((b) => <span key={b}>✓ {b}</span>)}
          </div>
        </div>
      </section>

      <section id="practice" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>Practice Areas</p>
            <h2>Visa routes we handle</h2>
          </div>
          <p className={styles.sectionNote}>{moreAreas}</p>
        </div>
        <div className={styles.cards}>
          {practiceAreas.map((p) => (
            <article key={p.title} className={styles.card}>
              <span className={styles.cardTag}>{p.code} Visa</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className={styles.cardArrow}>Learn more →</span>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className={styles.why}>
        <p className={styles.eyebrow}>Why GD Thiru &amp; Co.</p>
        <h2>Straight answers, careful work</h2>
        <div className={styles.whyGrid}>
          {whyUs.map((w) => (
            <article key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className={styles.section}>
        <p className={styles.eyebrow}>How it works</p>
        <h2>Four steps, no confusion</h2>
        <ol className={styles.steps}>
          {steps.map((s) => (
            <li key={s.n}>
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.quotes}>
        {testimonials.map((t) => (
          <blockquote key={t.who}>
            <p>“{t.quote}”</p>
            <cite>{t.who}</cite>
          </blockquote>
        ))}
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>Common questions</p>
        <h2>Before you call</h2>
        <div className={styles.faqs}>
          {faqs.map((f) => (
            <article key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.cta}>
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
