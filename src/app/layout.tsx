import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { ToastProvider } from "@heroui/toast";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://jonas-miederer.de";
const TITLE = "Jonas Miederer — Solutions Architect & Software Engineer";
const DESCRIPTION = "Personal website of Jonas Miederer, Solutions Architect at AWS with a passion for serverless, scalable systems, and software engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Jonas Miederer", url: SITE_URL }],
  creator: "Jonas Miederer",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Jonas Miederer",
    locale: "en_US",
    type: "profile",
    firstName: "Jonas",
    lastName: "Miederer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jonas Miederer",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  jobTitle: "Solutions Architect",
  worksFor: { "@type": "Organization", name: "Amazon Web Services", url: "https://aws.amazon.com" },
  sameAs: [
    "https://www.linkedin.com/in/jonas-miederer/",
    "https://github.com/jonasmiederer",
  ],
  knowsAbout: ["Cloud Architecture", "AWS", "Serverless", "Software Engineering", "Python", "TypeScript", "AI/ML", "Kubernetes"],
  award: ["Mercedes-Benz Innovation Award", "RedHat Hackfest 2023"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={`purple-dark text-foreground bg-background font-sans antialiased ${inter.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <ToastProvider />
          {children}
        </Providers>
        <Script src="https://cloud.umami.is/script.js" data-website-id="3df5ab65-8047-436b-9d07-b20c9429efe1" strategy="lazyOnload" />
      </body>
    </html>
  );
}
