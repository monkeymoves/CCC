import { getCollection } from "astro:content";

export async function GET() {
  const site = import.meta.env.SITE ?? "https://celticcoastcreations.co.uk";
  const pieces = await getCollection("portfolio");
  const staticPages = ["/", "/portfolio/", "/contact/", "/cookies/", "/thanks/"];
  const urls = [
    ...staticPages,
    ...pieces.map((piece) => `/portfolio/${piece.slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((path) => `  <url><loc>${site}${path}</loc></url>`)
      .join("\n") +
    `\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
