import styles from "./design.module.css";
import Nav from "./Nav";
import { firm, hero, practiceAreas, moreAreas, whyUs, steps, testimonials, faqs, images, destinations } from "../content";
import SafeImg from "../components/SafeImg";

export const metadata = { title: "Design 5 — Editorial | GD Thiru & Co." };

export default function Design5() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <p className={styles.kicker}>Immigration Law — United Kingdom · United States</p>
        <h1 className="heroTextAnim">{hero.title}</h1>
        <figure className={`${styles.heroFigure} imgHover`}>
          <SafeImg className="heroImgAnim" src={images.nycSkyline.src} alt={images.nycSkyline.alt} />
          <figcaption>New York City — where many of our clients begin their American story.</figcaption>
        </figure>
        <div className={styles.heroRow}>
          <p>{hero.sub}</p>
          <div>
            <a className={styles.btnDark} href="#contact">{hero.cta}</a>
            <p className={styles.heroMeta}>{firm.hours}<br />{firm.address}</p>
          </div>
        </div>
      </section>

      <section id="practice" className={styles.section}>
        <p className={styles.secNum}>01</p>
        <h2>Practice Areas</h2>
        <div className={styles.areaList}>
          {practiceAreas.map((p) => (
            <article key={p.title}>
              <span>{p.code}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.more}>{moreAreas}</p>
      </section>

      <section className={styles.parallax} style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6)), url(${images.supremeCourt.src})` }}>
        <div className={styles.parallaxInner}>
          <h2>The law, in plain language.</h2>
          <p>Complicated rules, explained simply — and handled properly.</p>
          <a href="/design-5/contact">Book a consultation →</a>
        </div>
      </section>

      <section id="why" className={styles.section}>
        <p className={styles.secNum}>02</p>
        <h2>The Firm</h2>
        <p className={styles.standfirst}>
          A Chennai law firm practising immigration law — regulated, plain-spoken, and careful
          with the details that decide cases.
        </p>
        <div className={styles.whyGrid}>
          {whyUs.map((w) => (
            <article key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </article>
          ))}
        </div>
        <p className={styles.badges}>{firm.badges.join(" — ")}</p>
      </section>

      <section id="process" className={styles.section}>
        <p className={styles.secNum}>03</p>
        <h2>The Process</h2>
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

      <section className={styles.section}>
        <p className={styles.secNum}>04</p>
        <h2>In Their Words</h2>
        <div className={styles.quotes}>
          {testimonials.map((t) => (
            <blockquote key={t.who}>
              <p>“{t.quote}”</p>
              <cite>{t.who}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.secNum}>05</p>
        <h2>Questions, Answered</h2>
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
        <p className={styles.secNum}>06</p>
        <h2>Where Our Clients Go</h2>
        <div className={styles.strip}>
          {destinations.map((d) => (
            <figure key={d.place} className="imgHover">
              <SafeImg src={images[d.img].src} alt={images[d.img].alt} loading="lazy" />
              <figcaption><strong>{d.place}</strong><span>{d.note}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.closing}>
        <p className={styles.secNum}>07</p>
        <h2>Start with a consultation.</h2>
        <p>{firm.address}</p>
        <p>{firm.hours}</p>
        <a className={styles.btnDark} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
      </section>

      <footer className={styles.footer}>
        <p>{firm.name} · {firm.tagline}</p>
      </footer>
    </div>
  );
}
