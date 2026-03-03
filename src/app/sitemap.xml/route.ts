const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kochukovblume.com";

const routes = [
  "",
  "/about",
  "/services",
  "/contact",
  "/schedule-consultation",
  "/privacy",
  "/terms",
  "/sitemap",
];

export async function GET() {
  const now = new Date().toISOString();

  const urls = routes
    .map((route) => {
      const loc = `${baseUrl}${route}`;
      const changefreq = route === "" ? "weekly" : "monthly";
      const priority = route === "" ? "1.0" : "0.7";

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${now}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
