import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import favIcon from "@/../public/actusGo.png";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Actus Go",
  description: "Empower local businesses to thrive in a global market. By gamifying the shopping experience, we’re rewriting the rules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description ?? ""} />
        <link rel="icon" href={favIcon.src} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
