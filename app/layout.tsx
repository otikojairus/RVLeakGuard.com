import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StickyCallBar } from "@/components/StickyCallBar";
import { SITE } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} | RV Water Damage Repair & Leak Help`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "RV and camper water damage repair — roof leaks, soft floors, mould, and plumbing. Call to book help across Canada.",
  openGraph: {
    siteName: SITE.name,
    locale: "en_CA",
    type: "website",
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: `https://${SITE.domain}`,
  telephone: SITE.phoneTel,
  areaServed: "CA",
  openingHours: "Mo-Su 00:00-23:59",
  description: SITE.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <StickyCallBar />
      </body>
    </html>
  );
}
