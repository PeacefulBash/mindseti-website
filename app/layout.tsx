import type { Metadata, Viewport } from "next";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "@fontsource-variable/source-serif-4/wght-italic.css";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const description =
  "Motivation and leadership programmes for schools in Eswatini: student motivation, prefect training, teacher team-building and parents' workshops.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Mindset.i | Motivation and leadership programmes for Eswatini schools", template: "%s | Mindset.i" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Mindset.i | Inspire change. Awaken potential.",
    description,
    locale: "en_SZ",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#033b44",
  width: "device-width",
  initialScale: 1,
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Mbabane", addressCountry: "SZ" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-lime focus:px-4 focus:py-3 focus:font-display focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </body>
    </html>
  );
}
