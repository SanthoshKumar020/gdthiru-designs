import ScrollAnimations from "./components/ScrollAnimations";
import WhatsAppButton from "./components/WhatsAppButton";
import "./tailwind.css";
import "./reveal.css";
import "./components/site-shared.css";
import "./components/practice-areas.css";
import "./components/firm-pages.css";

export const metadata = {
  title: "GD Thiru & Co. — Website Designs",
  description: "Five homepage design options for GD Thiru & Co., Advocates & Solicitors, Chennai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ScrollAnimations />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
