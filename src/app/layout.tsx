import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ToastProvider } from "@heroui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi, it's me 🤙",
  description: "Nice to see you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="3df5ab65-8047-436b-9d07-b20c9429efe1"></script>
      </head>
      <body className="purple-dark text-foreground bg-background bg-background font-sans antialiased" >
        <Providers>
          <ToastProvider />
          {children}
        </Providers>
      </body>
    </html>
  );
}
