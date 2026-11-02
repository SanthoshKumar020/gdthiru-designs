export const firm = {
  name: "GD THIRU & CO",
  tagline: "Advocates & Solicitors",
  phoneDisplay: "+91 9884123673",
  phoneLink: "tel:+919884123673",
  whatsappLink: "https://wa.me/919884123673?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20UK%20immigration%20services.",
  email: "gdthiru@gmail.com",
  landline: "044-28172118",
  landlineLink: "tel:+914428172118",
  address: "Spencer Plaza, Shop G-90, Ground Floor, Phase-II, 769 Anna Salai, Chennai 600 002",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=GD+Thiru+%26+Co.+Spencer+Plaza+Anna+Salai+Chennai+600002",
  directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Spencer+Plaza+Anna+Salai+Chennai+600002",
  hours: "Monday – Saturday, 9:00 AM – 7:30 PM",
  badges: ["SRA Regulated", "Member, Law Society of England & Wales", "Chennai, India"],
};

export const hero = {
  title: "UK immigration, handled with care.",
  sub: "Clear advice, honest timelines, and applications prepared properly, the first time. From Chennai, we advise on UK immigration matters.",
  cta: "Book a consultation",
};

export const practiceAreas = [
  { code: "Appeals", title: "Appeals & Judicial Review", desc: "Challenging refusals and unlawful decisions — appeals and judicial review of Home Office decisions." },
  { code: "Work", title: "Skilled Worker Visa", desc: "Work in the UK with a licensed sponsor. Eligibility, sponsorship and filing, handled end to end." },
  { code: "Founder", title: "Innovator Founder Visa", desc: "For entrepreneurs with an innovative, viable and scalable business idea endorsed for the UK." },
  { code: "Student", title: "Student Visa", desc: "Study at a licensed UK institution, with dependants and post-study routes explained clearly." },
  { code: "Family", title: "Settlement & Family Visas", desc: "Settlement and family routes, including spouse, dependant and long-residence cases." },
  { code: "Citizenship", title: "British Citizenship & Ancestry", desc: "British nationality and citizenship applications, plus Ancestry and Right of Abode claims." },
];

export const moreAreas = "Also covered: UK visit and business visitor visas, Temporary Worker routes, EU Settlement Scheme family permits, Overseas Domestic Worker visas, British nationality, Ancestry and Right of Abode.";

export const whyUs = [
  { title: "Regulated & accountable", desc: "A law firm, not an agent. Your case is handled under professional regulation, with client money and data treated properly." },
  { title: "Honest timelines", desc: "No guaranteed outcomes, no false promises. You hear the real chances, the real timeline and the real cost, up front." },
  { title: "Documents done right", desc: "Most refusals come from weak evidence. We build your file carefully before anything is submitted." },
  { title: "One point of contact", desc: "You speak to the person handling your case, not a call centre. Updates in plain language, at every step." },
];

export const steps = [
  { n: "1", title: "Consultation", desc: "Tell us your goal. We assess eligibility and the right route." },
  { n: "2", title: "Document plan", desc: "A clear checklist of exactly what evidence is needed." },
  { n: "3", title: "Prepare & file", desc: "Your application is drafted, checked and submitted." },
  { n: "4", title: "Decision & beyond", desc: "Interview prep, decision follow-up, and next steps." },
];

export const images = {
  supremeCourt: {
    src: "/images/courthouse.jpg",
    alt: "Law books and classical busts in a legal library",
  },
  ladyJustice: {
    src: "/images/legal-books.jpg",
    alt: "Lady Justice statue holding scales",
  },
  lawyerClient: {
    src: "/images/client-consultation.jpg",
    alt: "A client signing paperwork during a consultation",
  },
  reviewingPapers: {
    src: "/images/case-documents.jpg",
    alt: "Carefully reviewing case paperwork at a desk",
  },
  office: {
    src: "/images/office.jpg",
    alt: "Light-filled modern professional office",
  },
};

export const destinations = [
  { img: "reviewingPapers", place: "Start with the facts", note: "We understand your history and priorities before discussing the available routes." },
  { img: "lawyerClient", place: "Build a clear plan", note: "Know what evidence, timings and next steps to expect before anything is filed." },
  { img: "office", place: "Stay informed", note: "Get practical updates and a direct point of contact as your matter progresses." },
];

export const routeSections = [
  {
    slug: "appeals",
    group: "UK",
    code: "Appeals",
    title: "Appeals",
    answer: "If the Home Office refuses your case and you have a right of appeal, the First-tier Tribunal can overturn the decision — but only on the grounds the law allows, and deadlines are strict.",
    detail: [
      "Under section 82(1) of the Nationality, Immigration and Asylum Act 2002, an appeal may be brought on the grounds in section 84: that the decision is not in accordance with the Immigration Rules, is unlawful discrimination under the Equality Act 2010, breaches the Human Rights Act 1998, or that a discretion in the Rules should have been exercised differently — or that removal would breach the UK's obligations under the Refugee Convention or the appellant's Convention rights.",
      "Under section 86, the tribunal must decide every ground raised. If it fails to do so, that can be an error of law and the basis for an onward appeal. The tribunal allows the appeal if the decision was not in line with the law or discretion should have been exercised differently; otherwise it must dismiss it.",
    ],
    points: [
      "Appeal grounds include: not in accordance with the Immigration Rules; unlawful discrimination; Human Rights Act breach; discretion exercised wrongly; removal breaching Refugee Convention rights.",
      "We review every refusal on its merits first — sometimes a fresh application is stronger than an appeal.",
      "Act immediately after a refusal: appeal deadlines are strict and missing one can end the case.",
    ],
  },
  {
    slug: "judicial-review",
    group: "UK",
    code: "Judicial Review",
    title: "Judicial Review",
    answer: "When there is no right of appeal, or all appeals are exhausted, the High Court or Upper Tribunal can review whether a public body's decision was lawful.",
    detail: [
      "Judicial review challenges the lawfulness of a decision, action or failure to act by a public body or government department. It can also challenge secondary legislation, the Immigration Rules or policy, and the compatibility of an Act of Parliament with Convention rights.",
      "It is different from an appeal: the court does not normally substitute what it thinks is the 'correct' decision — it decides only whether the decision made was lawful. Judicial review is not a statutory right of appeal and is only likely to proceed when appeal routes are exhausted or none exists.",
    ],
    points: [
      "Use it when there is no appeal, or every appeal has been exhausted.",
      "The question is lawfulness, not whether the judge would have decided differently.",
      "We check first whether an appeal exists — judicial review is the last resort, not the first step.",
    ],
  },
  {
    slug: "skilled-worker",
    group: "UK",
    code: "Work",
    title: "Skilled Worker Visa",
    answer: "Work in the UK for an employer licensed by the Home Office, in an eligible skilled job, with a certificate of sponsorship.",
    detail: [
      "This route replaced Tier 2 General and Intra-Company Transfer. You need a skilled job offer from a licensed sponsor, a certificate of sponsorship, and you must meet the skill, salary and English language requirements for the role.",
      "We check the sponsor licence, the job and the salary first, then prepare the application and evidence so nothing is left to chance. The route can lead to settlement after five years.",
    ],
    points: [
      "Licensed sponsor and certificate of sponsorship required.",
      "Job, salary and English requirements checked before filing.",
      "Dependants can usually come with you; settlement is possible after five years.",
    ],
  },
  {
    slug: "innovator-founder",
    group: "UK",
    code: "Founder",
    title: "Innovator Founder Visa",
    answer: "For entrepreneurs with an innovative, viable and scalable business idea, endorsed by an approved endorsing body.",
    detail: [
      "The idea must be innovative, viable and scalable, and endorsed before you apply. We help you shape the business plan and the endorsement case first, so the application stands on a strong endorsement.",
      "This is the current entrepreneur route: the former Tier 1 Entrepreneur and Investor routes are closed. You must be actively involved in running the business.",
    ],
    points: [
      "Endorsement comes first — the business idea must be innovative, viable and scalable.",
      "A credible business plan is part of the endorsement case.",
      "You must be actively involved in the business, not a passive investor.",
    ],
  },
  {
    slug: "student",
    group: "UK",
    code: "Student",
    title: "Student Visa",
    answer: "Study at a licensed UK institution with a Confirmation of Acceptance for Studies (CAS).",
    detail: [
      "This route replaced Tier 4. You must be a genuine student with a valid CAS, meet the English language requirement, and show you can maintain yourself financially. Some postgraduate subjects also need ATAS clearance.",
      "We cover the application, the finances evidence, and dependant and post-study options in plain language, so you know exactly what the Home Office will ask for.",
    ],
    points: [
      "Valid CAS from a licensed sponsor institution.",
      "Genuine student test, English requirement and maintenance funds.",
      "ATAS clearance for relevant postgraduate subjects.",
      "Dependant and post-study options explained before you apply.",
    ],
  },
  {
    slug: "settlement-family",
    group: "UK",
    code: "Family",
    title: "Settlement & Family Visas",
    answer: "Join and settle with family in the UK — most commonly as a partner or parent, on the five-year route to settlement under Appendix FM.",
    detail: [
      "This covers entry clearance, leave to remain, further leave and indefinite leave to remain for partners — fiancé(e), spouse, civil partner, unmarried or same-sex partner of a British citizen or settled person — and for parents of a British or settled child living in the UK.",
      "Applications turn on a genuine relationship, financial requirements and English language. We build the file around the evidence the Home Office actually weighs, and we also advise on long-residence cases.",
    ],
    points: [
      "Five-year partner and parent routes under Appendix FM.",
      "Genuine relationship, financial and English requirements.",
      "Bereaved partners and parents of British or settled children included.",
      "Long-residence settlement where it applies.",
    ],
  },
  {
    slug: "citizenship-ancestry",
    group: "UK",
    code: "Citizenship",
    title: "British Citizenship & Ancestry",
    answer: "Naturalisation as a British citizen, Ancestry visas for Commonwealth citizens with a UK-born grandparent, and Right of Abode claims.",
    detail: [
      "You can apply for citizenship by naturalisation if you are 18 or over, of good character, meet the English and Life in the UK requirements, and meet the residence rules — usually five years in the UK, no more than 450 days outside it in that time, no more than 90 days outside in the last 12 months, and settlement held for the last 12 months. Naturalisation is a matter of law, not an entitlement, and the Home Secretary has discretion.",
      "Under UK Ancestry, a Commonwealth citizen with a grandparent born in the United Kingdom and Islands — or, if born before 31 March 1922, in what is now the Republic of Ireland, or on a British registered ship or aircraft — who intends to work in the UK can be given five years' leave and then apply for settlement. Right of Abode, under the Immigration Act 1971, exempts British citizens and certain Commonwealth citizens from immigration control entirely.",
    ],
    points: [
      "Naturalisation: 18+, good character, English + Life in the UK, five years' residence, 450/90-day absence limits, 12 months' settlement.",
      "Ancestry: Commonwealth citizen, UK-born grandparent by blood or adoption, intending to work.",
      "Right of Abode: live and work without restriction, no permission needed to enter.",
    ],
  },
  {
    slug: "visitor",
    group: "UK",
    code: "Visitor",
    title: "Visit & Business Visitor Visas",
    answer: "Come to the UK as a genuine visitor — for a holiday, family visit or permitted business activities — with a clear main reason for the trip.",
    detail: [
      "Visitors can do several activities on one trip, but you must be able to explain your main reason at application and on entry, and show adequate funds for the trip. The Home Office judges genuineness from your circumstances, stated purpose, travel history, compliance record and funds.",
      "Business visitors can attend meetings, conferences and similar permitted activities, but cannot work in the UK. Extensions need a clear reason and funds for the extra time.",
    ],
    points: [
      "Genuine visitor test: purpose, funds, travel history and ties.",
      "Permitted business activities only — no UK work.",
      "Supporting documents must back up what the application says.",
      "Extensions need a clear reason and extra funds.",
    ],
  },
  {
    slug: "temporary-worker",
    group: "UK",
    code: "Temporary Worker",
    title: "Temporary Worker Visas",
    answer: "Short-term work in the UK under one of five Temporary Worker subcategories, with a licensed sponsor.",
    detail: [
      "This route replaced Tier 5. The subcategories are Creative and Sporting, Charity Workers, Religious Workers, Government Authorised Exchange and International Agreement.",
      "These are temporary routes, not settlement routes. We check the subcategory, the sponsor and the role before filing, so a short placement is not refused on a technicality.",
    ],
    points: [
      "Five subcategories: Creative & Sporting, Charity, Religious, Government Authorised Exchange, International Agreement.",
      "Licensed sponsor required.",
      "Temporary by design — not a route to settlement.",
    ],
  },
  {
    slug: "euss-family",
    group: "UK",
    code: "EU Settlement",
    title: "EU Settlement Scheme Family Permits",
    answer: "Join an EU, EEA or Swiss family member living in the UK, and then secure status under the EU Settlement Scheme.",
    detail: [
      "This is the current route for family members of EU citizens, replacing the old EEA Family Permit. Applications are made from outside the UK, and once here you apply for status under the EU Settlement Scheme before any permit expires.",
      "We advise who qualifies — spouses, civil partners, children, dependent parents and other dependent relatives — and what evidence proves the relationship and the EU citizen's residence.",
    ],
    points: [
      "Replaces the old EEA Family Permit.",
      "Apply from outside the UK, then secure EUSS status.",
      "Covers spouses, partners, children, dependent parents and other dependent relatives.",
    ],
  },
];

export const extraFaqs = [
  { q: "How much will my case cost?", a: "Fees depend on the route and the complexity of your case. At your consultation we explain the full fee structure up front — no hidden charges, no surprises later." },
  { q: "What documents will I need?", a: "It depends on your route. After the consultation you receive a clear checklist of exactly what evidence is needed, and we review everything before it is submitted." },
  { q: "Can I consult by phone if I am not in Chennai?", a: "Yes. Consultations can be arranged by phone or in person at the Chennai office. Call us and we will fix a time that works for you." },
];

export const aboutText = [
  "G D Thiru & Co. is a Chennai-based law firm specializing in UK immigration. The firm is regulated by the Solicitors Regulation Authority and is a member of the Law Society of England & Wales.",
  "Its work includes UK work, student, family, settlement and citizenship routes, as well as appeals and judicial review.",
  "Immigration cases are personal. Behind every application is a job, a family or a future. The firm aims to explain the available options clearly, prepare each case carefully and keep clients informed throughout.",
  "From its office at Spencer Plaza on Anna Salai, Chennai, the firm advises individuals and families in India and abroad. Each matter starts with understanding the client's circumstances and the evidence available.",
];

export const testimonials = [
  { quote: "Thiru has been working on our family's immigration case. We passed through a hurdle couple of years ago successfully. We are going through a last one. He went through all the steps thoroughly with great patience. I am really impressed with his service. I would happily recommend to anyone who would want to deal with their immigration case.", who: "Kiruthika Sureshkumar" },
];

export const faqs = [
  { q: "How long does a visa application take?", a: "It depends on the route and the consulate. At your consultation we give you the current, realistic timeline for your category." },
  { q: "What if my visa was refused before?", a: "A refusal is not the end. We review the refusal reasons, fix the weak points, and advise whether a fresh application or a review is stronger." },
  { q: "What immigration matters does the firm handle?", a: "The firm specializes in UK immigration, including work, study, family, settlement, citizenship, appeals and judicial review matters." },
];
