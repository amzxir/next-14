import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "next js 14",
  description: "next js 14 crash course",
};

const vazirFont = localFont({
  src: "../public/font/Vazirmatn-Regular.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200 ${vazirFont.className}`}>
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
