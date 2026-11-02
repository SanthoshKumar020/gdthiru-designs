import Link from "next/link";

export default function OfficialLogo({ href, design }) {
  return (
    <Link
      className={`official-logo official-logo--${design}`}
      href={href}
      aria-label="GD Thiru & Co. — Advocates & Solicitors"
    >
      <img src="/images/gd-thiru-official-logo.png" alt="GD Thiru & Co. Advocates & Solicitors" />
    </Link>
  );
}
