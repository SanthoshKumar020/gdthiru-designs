import styles from "./design.module.css";
import { firm, hero, practiceAreas, moreAreas, whyUs, steps, testimonials, faqs, images, destinations } from "../content";
import SafeImg from "../components/SafeImg";

export const metadata = { title: "Design 3 — Premium Dark | GD Thiru & Co." };

export default function Design3() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>{firm.name}</span>
        <nav className={styles.nav}>
          <a href="#practice">Practice Areas</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <SafeImg className={`${styles.heroImg} heroImgAnim`} src={images.ladyJustice.src} alt={images.ladyJustice.alt} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Advocates &amp; Solicitors — Est. Chennai</p>
          <h1>{hero.title}</h1>
          <p className={styles.heroSub}>{hero.sub}</p>
          <div className={styles.heroCtas}>
            <a className={styles.btnGold} href="#contact">{hero.cta}</a>
            <a className={styles.btnLine} href={firm.phoneLink}>{firm.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <div className={styles.goldLine} />

      <section id="practice" className={styles.section}>
        <p className={styles.eyebrow}>Practice Areas</p>
        <h2>Visa routes we handle</h2>
        <div className={styles.cards}>
          {practiceAreas.map((p, i) => (
            <article key={p.title} className={styles.card}>
              <span className={styles.cardIndex}>0{i + 1}</span>
              <p className={styles.cardCode}>{p.code}</p>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
        <p className={styles.more}>{moreAreas}</p>
      </section>

      <section id="why" className={styles.why}>
        <p className={styles.eyebrow}>Why GD Thiru &amp; Co.</p>
        <h2>Quiet confidence, careful work</h2>
        <div className={styles.whyGrid}>
          {whyUs.map((w) => (
            <article key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>How it works</p>
        <h2>Four steps, no confusion</h2>
        <div className={styles.steps}>
          {steps.map((s) => (
            <article key={s.n}>
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.quotes}>
        {testimonials.map((t) => (
          <blockquote key={t.who}>
            <p>“{t.quote}”</p>
            <cite>— {t.who}</cite>
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

      <section className={styles.section}>
        <p className={styles.eyebrow}>Where our clients go</p>
        <h2>From Chennai to America</h2>
        <div className={styles.strip}>
          {destinations.map((d) => (
            <figure key={d.place} className="imgHover">
              <SafeImg src={images[d.img].src} alt={images[d.img].alt} loading="lazy" />
              <figcaption><strong>{d.place}</strong><span>{d.note}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.cta}>
        <p className={styles.eyebrow}>Begin today</p>
        <h2>Start with a consultation</h2>
        <p>{firm.address}</p>
        <p>{firm.hours}</p>
        <a className={styles.btnGold} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
      </section>

      <footer className={styles.footer}>
        <p>{firm.name} · {firm.tagline}</p>
        <p>{firm.badges.join(" · ")}</p>
      </footer>
    </div>
  );
}
