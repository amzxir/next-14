import "./globals.css";

export const metadata = {
  title: "next js 14",
  description: "next js 14 cache course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
