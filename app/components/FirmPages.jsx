import { aboutText, extraFaqs, faqs, firm, images, steps, whyUs } from "../content";

function PageHero({ eyebrow, title, description, image, alt, design }) {
  return (
    <header className="firm-hero">
      <div className="firm-hero-copy">
        <p className="firm-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="firm-hero-description">{description}</p>
        <a className="firm-button" href={firm.phoneLink}>Talk to our team <span aria-hidden="true">→</span></a>
      </div>
      <figure className="firm-hero-image">
        <img src={image} alt={alt} fetchPriority={design === "5" ? "high" : "auto"} />
        <figcaption>{firm.name} · Chennai</figcaption>
      </figure>
    </header>
  );
}

function CallToAction({ title = "A clear first conversation can help.", description = "Tell us what you are hoping to do. We will explain how to arrange a consultation." }) {
  return (
    <section className="firm-closing">
      <div>
        <p className="firm-eyebrow">Speak with the firm</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a className="firm-button" href={firm.phoneLink}>Call {firm.phoneDisplay}</a>
    </section>
  );
}

export function FirmAbout({ design }) {
  return (
    <main className="firm-page" data-design={design}>
      <PageHero
        eyebrow="The firm · Chennai"
        title="Clear advice for important decisions."
        description="A Chennai-based practice specializing in UK immigration matters for individuals and families."
        image={images.supremeCourt.src}
        alt={images.supremeCourt.alt}
        design={design}
      />
      <section className="firm-section firm-about-copy">
        <div className="firm-section-heading">
          <p className="firm-eyebrow">About GD Thiru &amp; Co.</p>
          <h2>Careful work. Straight answers.</h2>
        </div>
        <div className="firm-about-text">
          {aboutText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="firm-badges">
            {firm.badges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        </div>
      </section>
      <section className="firm-section firm-values">
        <div className="firm-section-heading">
          <p className="firm-eyebrow">What clients can expect</p>
          <h2>Good guidance begins with good listening.</h2>
        </div>
        <div className="firm-value-grid">
          {whyUs.map((item, index) => (
            <article key={item.title}>
              <span className="firm-card-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="firm-section firm-process">
        <div className="firm-section-heading">
          <p className="firm-eyebrow">A considered process</p>
          <h2>Know what happens next.</h2>
        </div>
        <ol className="firm-step-grid">
          {steps.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>
      <CallToAction />
    </main>
  );
}

export function FirmFaq({ design }) {
  const allFaqs = [...faqs, ...extraFaqs];
  return (
    <main className="firm-page" data-design={design}>
      <PageHero
        eyebrow="A useful place to start"
        title="Questions, answered plainly."
        description="A few things people often want to know before speaking with the firm."
        image={images.ladyJustice.src}
        alt={images.ladyJustice.alt}
        design={design}
      />
      <section className="firm-section firm-faq-section">
        <div className="firm-section-heading">
          <p className="firm-eyebrow">Frequently asked</p>
          <h2>Start with the question on your mind.</h2>
        </div>
        <div className="firm-faq-grid">
          {allFaqs.map((item, index) => (
            <details className="firm-faq-item" key={item.q}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CallToAction title="Have a question about your situation?" description="Call the office to arrange a conversation about your circumstances and the next step." />
    </main>
  );
}

export function FirmContact({ design }) {
  return (
    <main className="firm-page" data-design={design}>
      <PageHero
        eyebrow="Contact · Chennai"
        title="Let’s talk through your next step."
        description="Call, email or visit the office at Spencer Plaza on Anna Salai."
        image={images.office.src}
        alt={images.office.alt}
        design={design}
      />
      <section className="firm-section firm-contact-section">
        <div className="firm-section-heading">
          <p className="firm-eyebrow">Get in touch</p>
          <h2>Reach the firm directly.</h2>
          <p>At your consultation, we can understand your circumstances and explain what information may be useful to bring.</p>
        </div>
        <div className="firm-contact-grid">
          <article className="firm-contact-card">
            <span className="firm-contact-icon" aria-hidden="true">⌖</span>
            <h3>Visit the office</h3>
            <p>{firm.address}</p>
            <a href={firm.directionsLink} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          </article>
          <article className="firm-contact-card">
            <span className="firm-contact-icon" aria-hidden="true">↗</span>
            <h3>Call or email</h3>
            <p><a href={firm.phoneLink}>{firm.phoneDisplay}</a></p>
            <p>Landline: <a href={firm.landlineLink}>{firm.landline}</a></p>
            <p><a href={`mailto:${firm.email}`}>{firm.email}</a></p>
          </article>
          <article className="firm-contact-card">
            <span className="firm-contact-icon" aria-hidden="true">◷</span>
            <h3>Office hours</h3>
            <p>{firm.hours}</p>
            <p>Call ahead to arrange a suitable time to speak with the firm.</p>
          </article>
        </div>
        <div className="firm-map-wrap">
          <iframe
            title="Map to GD Thiru & Co., Spencer Plaza, Chennai"
            src="https://www.openstreetmap.org/export/embed.html?bbox=80.2414%2C13.0512%2C80.2814%2C13.0712&layer=mapnik&marker=13.061285%2C80.261452"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
      <CallToAction title="We’re here when you’re ready." description={`${firm.hours} · ${firm.address}`} />
    </main>
  );
}
