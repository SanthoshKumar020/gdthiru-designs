import styles from "../design.module.css";
import Nav from "../Nav";
import { firm, faqs, extraFaqs } from "../../content";

export const metadata = { title: "FAQ | GD Thiru & Co." };

export default function Faq() {
  const all = [...faqs, ...extraFaqs];
  return (
    <div className={styles.page}>
      <Nav />
      <section className={styles.pageHero}>
        <h1>Common Questions</h1>
        <p>Straight answers before you call. Anything else — just ask us directly.</p>
      </section>
      <section className={styles.section}>
        <div className={styles.faqs}>
          {all.map((f) => (
            <article key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.cta}>
        <h2>Still have a question?</h2>
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
