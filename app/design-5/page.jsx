import styles from "./design.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { firm, hero, practiceAreas, moreAreas, whyUs, steps, testimonials, faqs, images, destinations } from "../content";
import SafeImg from "../components/SafeImg";

export const metadata = { title: "Design 5 — Terracotta | GD Thiru & Co." };

export default function Design5() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <video className={styles.heroVideo} src="/videos/london-hero.mp4" poster={images.office.src} autoPlay muted loop playsInline />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <p className={styles.heroKicker}>Immigration Law — United Kingdom</p>
          <h1>{hero.title}</h1>
          <p>{hero.sub}</p>
          <div className={styles.heroCtas}>
            <a className={styles.btnPrimary} href="#contact">{hero.cta}</a>
            <a className={styles.btnOutline} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
          </div>
          <div className={styles.heroBadges}>
            {firm.badges.map((b) => <span key={b}>{b}</span>)}
          </div>
          <p className={styles.heroMeta}>{firm.hours}<br />{firm.address}</p>
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

      <section className={styles.parallax} style={{ backgroundImage: `linear-gradient(rgba(43, 33, 24, 0.72), rgba(154, 52, 18, 0.55)), url(${images.supremeCourt.src})` }}>
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
          <div className={styles.quoteFeature}>
            <div className={styles.quoteImg}>
              <SafeImg src={images.lawyerClient.src} alt={images.lawyerClient.alt} loading="lazy" width="800" height="600" />
            </div>
            <blockquote>
              <p>“{testimonials[0].quote}”</p>
              <cite>{testimonials[0].who}</cite>
              <p style={{ fontSize: 13, opacity: 0.8 }}>{firm.badges.join(" • ")}</p>
              <a href={firm.phoneLink} style={{ color: "#c2410c", fontWeight: "bold" }}>
                Book a consultation →
              </a>
            </blockquote>
          </div>
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
        <h2>How We Guide Each Case</h2>
        <div className={styles.strip}>
          {destinations.map((d) => (
            <a key={d.place} href="/design-5/contact" style={{ textDecoration: "none", color: "inherit" }}><figure className="imgHover">
              <SafeImg src={images[d.img].src} alt={images[d.img].alt} loading="lazy" />
              <figcaption><strong>{d.place}</strong><span>{d.note}</span></figcaption>
            </figure></a>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.closing}>
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
