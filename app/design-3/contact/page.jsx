import styles from "../design.module.css";
import Nav from "../Nav";
import Footer from "../Footer";
import { firm } from "../../content";

export const metadata = { title: "Contact | GD Thiru & Co." };

export default function Contact() {
  return (
    <div className={styles.page}>
      <Nav />
      <section className={styles.pageHero}>
        <h1>Contact Us</h1>
        <p>Call us, or visit the office on Anna Salai, Chennai.</p>
      </section>
      <section className={styles.section} style={{ paddingBottom: 0 }}>
        <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 720 }}>
          G D Thiru &amp; Co. is a law firm specializing in UK Immigration Laws, with its head
          office in Chennai. At your consultation we assess your route, explain timelines and
          fees honestly, and give you a clear document checklist.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 720 }}>
          It helps to bring your passport, any previous refusal letters, and the key dates of
          your case.
        </p>
      </section>
      <section className={styles.section}>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Visit the office</h3>
            <p>{firm.address}</p>
          </article>
          <article className={styles.card}>
            <h3>Call us</h3>
            <p><a href={firm.phoneLink} style={{ color: "#d4af37" }}>{firm.phoneDisplay}</a></p>
            <p>Tap to call from your phone.</p>
          </article>
          <article className={styles.card}>
            <h3>Office hours</h3>
            <p>{firm.hours}</p>
          </article>
        </div>
        <div style={{ marginTop: 28 }}>
          <iframe
            title="Map to GD Thiru & Co., Spencer Plaza, Chennai"
            src="https://www.openstreetmap.org/export/embed.html?bbox=80.2414%2C13.0512%2C80.2814%2C13.0712&layer=mapnik&marker=13.061285%2C80.261452"
            style={{ width: "100%", height: 360, border: 0 }}
            loading="lazy"
          />
          <p className={styles.more}>Spencer Plaza, Anna Salai, Chennai — view larger map on OpenStreetMap.</p>
        </div>
      </section>
      <section className={styles.cta}>
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
