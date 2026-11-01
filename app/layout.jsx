export const metadata = {
  title: "GD Thiru & Co. — Website Designs",
  description: "Five homepage design options for GD Thiru & Co., Advocates & Solicitors, Chennai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
