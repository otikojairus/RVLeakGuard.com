import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoServicePage } from "@/components/SeoServicePage";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildMetaDescription,
  buildPageTitle,
} from "@/lib/page-seo-content";
import { allPages, citySuffixes, getPageBySlug } from "@/lib/pages";
import { slugBase } from "@/lib/content";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  const isLocal = !page.area.includes("National");
  const serviceBase = slugBase(page.slug, citySuffixes);
  const title = buildPageTitle(page, serviceBase, isLocal);
  const description = buildMetaDescription(page, serviceBase, isLocal);
  const url = `https://${SITE.domain}/${slug}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const isLocal = !page.area.includes("National");

  return (
    <>
      <SeoServicePage page={page} isLocal={isLocal} />
      <SiteFooter />
    </>
  );
}
