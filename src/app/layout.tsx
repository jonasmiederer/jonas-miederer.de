import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { ToastProvider } from "@heroui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonas Miederer — Cloud Architect & Software Engineer",
  description: "Personal website of Jonas Miederer, Cloud Architect at AWS with a passion for serverless, scalable systems, and software engineering.",
  openGraph: {
    title: "Jonas Miederer — Cloud Architect & Software Engineer",
    description: "Personal website of Jonas Miederer, Cloud Architect at AWS with a passion for serverless, scalable systems, and software engineering.",
    url: "https://jonas-miederer.de",
    siteName: "Jonas Miederer",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://jonas-miederer.de/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={`purple-dark text-foreground bg-background font-sans antialiased ${inter.className}`}>
        <Providers>
          <ToastProvider />
          {children}
        </Providers>
        <Script src="https://cloud.umami.is/script.js" data-website-id="3df5ab65-8047-436b-9d07-b20c9429efe1" strategy="lazyOnload" />
      </body>
    </html>
  );
}
