import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} | Fire Extinguisher Inspection & Service`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Fire extinguisher inspection, maintenance, recharge, and refill across Canada. Call to book a visit.",
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
  email: SITE.email,
  areaServed: "CA",
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
      </body>
    </html>
  );
}
