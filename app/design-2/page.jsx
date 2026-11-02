import styles from "./design.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { firm, hero, practiceAreas, moreAreas, whyUs, steps, testimonials, faqs, images, destinations } from "../content";
import { Marquee } from "../components/ui/marquee";
import SafeImg from "../components/SafeImg";

export const metadata = { title: "Design 2 — Clean | GD Thiru & Co." };

export default function Design2() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={`${styles.heroText} heroTextAnim`}>
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
          <div className={`${styles.heroImage} imgHover`}>
            <SafeImg className="heroImgAnim" src={images.lawyerClient.src} alt={images.lawyerClient.alt} />
          </div>
        </div>
      </section>

      <Marquee className="bg-[#1d4ed8] py-3.5 text-white">
        {practiceAreas.map((a) => (
          <span key={a.title} className="whitespace-nowrap font-semibold pr-10">
            {a.title} ✦
          </span>
        ))}
      </Marquee>

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

      <section className={styles.parallax} style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${images.ladyJustice.src})` }}>
        <div className={styles.parallaxInner}>
          <h2>One firm. One clear plan.</h2>
          <p>UK immigration advice, handled carefully from our Chennai office.</p>
          <a href="/design-2/contact">Book a consultation →</a>
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
        <div className={styles.quoteFeature}>
          <div className={styles.quoteImg}>
            <img src={images.reviewingPapers.src} alt={images.reviewingPapers.alt} loading="lazy" width="800" height="600" />
          </div>
          <blockquote>
            <p>“{testimonials[0].quote}”</p>
            <cite>{testimonials[0].who}</cite>
            <p style={{ fontSize: 13, opacity: 0.8 }}>{firm.badges.join(" • ")}</p>
            <a href={firm.phoneLink} style={{ color: "#1d4ed8", fontWeight: "bold" }}>
              Book a consultation →
            </a>
          </blockquote>
        </div>
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
        <p className={styles.eyebrow}>A considered process</p>
        <h2>One clear step at a time</h2>
        <div className={styles.strip}>
          {destinations.map((d) => (
            <a key={d.place} href="/design-2/contact" style={{ textDecoration: "none", color: "inherit" }}><figure className="imgHover">
              <SafeImg src={images[d.img].src} alt={images[d.img].alt} loading="lazy" />
              <figcaption><strong>{d.place}</strong><span>{d.note}</span></figcaption>
            </figure></a>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.cta}>
        <h2>Start with a consultation</h2>
        <p>{firm.address} · {firm.hours}</p>
        <a className={styles.btnPrimary} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
      </section>

      <Footer />
    </div>
  );
}
