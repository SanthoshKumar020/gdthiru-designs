import styles from "./design.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { firm, hero, practiceAreas, moreAreas, whyUs, steps, testimonials, faqs, images, destinations } from "../content";
import { BentoGrid, BentoCard } from "../components/ui/bento-grid";
import SafeImg from "../components/SafeImg";

export const metadata = { title: "Design 3 — Premium Dark | GD Thiru & Co." };

export default function Design3() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <SafeImg className={`${styles.heroImg} heroImgAnim`} src={images.ladyJustice.src} alt={images.ladyJustice.alt} />
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroContent} heroTextAnim`}>
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
        <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-auto">
          {practiceAreas.map((p, i) => (
            <BentoCard
              key={p.title}
              name={p.title}
              description={`${p.code} · ${p.desc}`}
              background={
                i === 0 ? (
                  <div className="-m-6 mb-4">
                    <img src={images.supremeCourt.src} alt={images.supremeCourt.alt} className="h-60 w-full object-cover" loading="lazy" />
                  </div>
                ) : undefined
              }
              href="/design-3/practice-areas"
              cta="Explore routes"
              className={
                i === 0
                  ? "md:col-span-2 md:row-span-2 border-[#2a2d33] bg-[#121417] text-white"
                  : "md:col-span-1 border-[#2a2d33] bg-[#121417] text-white"
              }
            />
          ))}
        </BentoGrid>
        <p className={styles.more}>{moreAreas}</p>
      </section>

      <section className={styles.parallax} style={{ backgroundImage: `linear-gradient(rgba(10, 11, 13, 0.62), rgba(10, 11, 13, 0.62)), url(${images.supremeCourt.src})` }}>
        <div className={styles.parallaxInner}>
          <h2>Quiet confidence, careful work.</h2>
          <p>Your case deserves a firm that prepares, not one that promises.</p>
          <a href="/design-3/contact">Book a consultation →</a>
        </div>
      </section>

      <section id="why" className={styles.why}>
        <p className={styles.eyebrow}>Why GD Thiru &amp; Co.</p>
        <h2>Why clients choose this firm</h2>
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
        <div className={styles.quoteFeature}>
          <div className={styles.quoteImg}>
            <img src={images.lawyerClient.src} alt={images.lawyerClient.alt} loading="lazy" width="800" height="600" />
          </div>
          <blockquote>
            <p>“{testimonials[0].quote}”</p>
            <cite>— {testimonials[0].who}</cite>
            <p style={{ fontSize: 13, opacity: 0.8 }}>{firm.badges.join(" • ")}</p>
            <a href={firm.phoneLink} style={{ color: "#d4af37", fontWeight: "bold" }}>
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
        <h2>Careful work, from the first conversation</h2>
        <div className={styles.strip}>
          {destinations.map((d) => (
            <a key={d.place} href="/design-3/contact" style={{ textDecoration: "none", color: "inherit" }}><figure className="imgHover">
              <SafeImg src={images[d.img].src} alt={images[d.img].alt} loading="lazy" />
              <figcaption><strong>{d.place}</strong><span>{d.note}</span></figcaption>
            </figure></a>
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

      <Footer />
    </div>
  );
}
