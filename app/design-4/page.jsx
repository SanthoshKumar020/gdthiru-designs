import styles from "./design.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { firm, hero, practiceAreas, moreAreas, whyUs, steps, testimonials, faqs, images, destinations } from "../content";
import { PulsatingButton } from "../components/ui/pulsating-button";
import SafeImg from "../components/SafeImg";

export const metadata = { title: "Design 4 — Professional Blue | GD Thiru & Co." };

function EnquiryBar() {
  return (
    <div className={styles.enquiry}>
      <span>Questions about your visa? Talk to the firm directly.</span>
      <a href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
    </div>
  );
}

export default function Design4() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <SafeImg className={`${styles.heroImg} heroImgAnim`} src={images.statueOfLiberty.src} alt={images.statueOfLiberty.alt} />
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} heroTextAnim`}>
          <h1>{hero.title}</h1>
          <p>{hero.sub}</p>
          <div className={styles.heroCtas}>
            <PulsatingButton href="#contact" pulseColor="#f59e0b" duration="1.5s" className="bg-white px-7 py-3.5 rounded-md font-bold text-[#1e40af] no-underline hover:opacity-90 transition">
              {hero.cta}
            </PulsatingButton>
            <a className={styles.btnOutline} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
          </div>
          <p className={styles.heroHours}>{firm.hours} · {firm.address}</p>
        </div>
      </section>



      <EnquiryBar />

      <section id="practice" className={styles.section}>
        <h2>Visa routes we handle</h2>
        <p className={styles.sectionSub}>UK and US routes, explained in plain language at your consultation.</p>
        <div className={styles.cards}>
          {practiceAreas.map((p) => (
            <article key={p.title} className={styles.card}>
              <span className={styles.cardFlag}>{p.code}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href="#contact">Ask about this route →</a>
            </article>
          ))}
        </div>
        <p className={styles.more}>{moreAreas}</p>
      </section>

      <EnquiryBar />

      <section className={styles.parallax} style={{ backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.6), rgba(30, 64, 175, 0.6)), url(${images.goldenGate.src})` }}>
        <div className={styles.parallaxInner}>
          <h2>Questions about your visa? Talk to the firm directly.</h2>
          <p>No call centres. No waiting. Your case, your lawyer.</p>
          <a href="/design-4/contact">Book a consultation →</a>
        </div>
      </section>

      <section id="why" className={styles.why}>
        <h2>Why clients choose GD Thiru &amp; Co.</h2>
        <div className={styles.whyGrid}>
          {whyUs.map((w) => (
            <article key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </article>
          ))}
        </div>
        <div className={styles.badges}>
          {firm.badges.map((b) => <span key={b}>{b}</span>)}
        </div>
      </section>

      <section className={styles.section}>
        <h2>How it works</h2>
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
        <div className={styles.quoteFeature}>
          <div className={styles.quoteImg}>
            <img src={images.reviewingPapers.src} alt={images.reviewingPapers.alt} loading="lazy" width="800" height="600" />
          </div>
          <blockquote>
            <p>“{testimonials[0].quote}”</p>
            <cite>{testimonials[0].who}</cite>
            <p style={{ fontSize: 13, opacity: 0.8 }}>{firm.badges.join(" • ")}</p>
            <a href={firm.phoneLink} style={{ color: "#1e40af", fontWeight: "bold" }}>
              Book a consultation →
            </a>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Common questions</h2>
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
        <h2>Where our clients go</h2>
        <p className={styles.sectionSub}>From Chennai to America — the destinations our clients dream about.</p>
        <div className={styles.strip}>
          {destinations.map((d) => (
            <a key={d.place} href={d.maps} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}><figure className="imgHover">
              <SafeImg src={images[d.img].src} alt={images[d.img].alt} loading="lazy" />
              <figcaption><strong>{d.place}</strong><span>{d.note}</span></figcaption>
            </figure></a>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.cta}>
        <h2>Start with a consultation</h2>
        <p>{firm.address}</p>
        <p>{firm.hours}</p>
        <a className={styles.btnWhite} href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
      </section>

      <Footer />
    </div>
  );
}
