import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "ブログです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
