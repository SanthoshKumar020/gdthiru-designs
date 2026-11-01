export default function FlightPath({ className }) {
  const d = "M 70 175 C 220 55, 330 55, 450 105 S 700 35, 830 65";
  return (
    <div className={className}>
      <p style={{ textAlign: "center", margin: "0 0 8px", fontWeight: 600 }}>One journey, handled end to end.</p>
      <svg viewBox="0 0 900 230" role="img" aria-label="Flight route from Chennai to London and New York" style={{ width: "100%", maxWidth: 900, height: "auto", display: "block", margin: "0 auto" }}>
        <path d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" opacity="0.9" />
        <g>
          <polygon points="0,0 26,8 0,16 6,8" fill="currentColor" />
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path={d} />
        </g>
        <circle cx="70" cy="175" r="10" fill="currentColor" opacity="0.2" />
        <circle cx="70" cy="175" r="5" fill="currentColor" />
        <circle cx="450" cy="105" r="10" fill="currentColor" opacity="0.2" />
        <circle cx="450" cy="105" r="5" fill="currentColor" />
        <circle cx="830" cy="65" r="10" fill="currentColor" opacity="0.2" />
        <circle cx="830" cy="65" r="5" fill="currentColor" />
        <text x="70" y="205" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600">Chennai</text>
        <text x="450" y="140" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600">London</text>
        <text x="830" y="100" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600">New York</text>
      </svg>
    </div>
  );
}
