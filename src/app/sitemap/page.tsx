import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Kochukov & Blume",
  description:
    "Browse all public pages on Kochukov & Blume's website.",
};

type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

type LinkGroup = {
  title: string;
  links: LinkItem[];
};

const linkGroups: LinkGroup[] = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/", description: "Firm overview and highlights" },
      { label: "About", href: "/about", description: "Our story and attorneys" },
      {
        label: "Services",
        href: "/services",
        description: "Legal services for individuals and businesses",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with our legal team",
      },
      {
        label: "Schedule Consultation",
        href: "/schedule-consultation",
        description: "Book a consultation with our attorneys",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        href: "/privacy",
        description: "How personal information is processed and protected",
      },
      {
        label: "Terms of Service",
        href: "/terms",
        description: "Terms governing website use and service access",
      },
      {
        label: "Sitemap",
        href: "/sitemap",
        description: "Index of all public pages",
      },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Kochukov & Blume
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Sitemap
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Browse all publicly accessible pages on our website.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {linkGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="mb-5 border-l-4 border-slate-900 pl-4 text-xl font-semibold text-slate-900">
                {group.title}
              </h2>

              <ul className="space-y-4">
                {group.links.map((item) => (
                  <li key={item.href} className="rounded-lg border border-slate-200 p-4">
                    <Link
                      href={item.href}
                      className="text-base font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                    >
                      {item.label}
                    </Link>
                    {item.description && (
                      <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
