import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dhruv Vedwal | Full Stack Product Engineer",
  description: "A premium interactive engineering portfolio showcasing scalable SaaS systems, real-time architecture, event-driven backends, and AI-powered workflows by Dhruv Vedwal.",
  keywords: [
    "Dhruv Vedwal",
    "Full Stack Engineer",
    "Product Engineer",
    "SaaS Architect",
    "Event-Driven Backend",
    "Real-time Systems",
    "Next.js Developer",
    "Node.js Expert",
    "WebSockets",
    "BullMQ"
  ],
  authors: [{ name: "Dhruv Vedwal" }],
  creator: "Dhruv Vedwal",
  metadataBase: new URL("https://dhruv.systems"),
  openGraph: {
    title: "Dhruv Vedwal | Full Stack Product Engineer",
    description: "Interactive systems engineering portfolio presenting architectural narratives, event-driven pipelines, and high-performance full-stack delivery.",
    url: "https://dhruv.systems",
    siteName: "Dhruv Systems Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Vedwal | Full Stack Product Engineer",
    description: "A premium interactive engineering portfolio centered around engineering storytelling, system architecture, and product metrics.",
    creator: "@dhruv_systems",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cormorantGaramond.variable} font-sans antialiased text-foreground bg-background selection:bg-primary/30 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            {/* Ambient background grids & glows */}
            <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-20" />
            <div className="fixed inset-0 glow-overlay pointer-events-none z-0" />
            
            <Header />
            
            <main className="flex-grow z-10 pt-[73px] md:pt-[88px] relative">
              {children}
            </main>
            
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
