/**
 * Generiert sitemap.xml aus src/data/contents – Watermelon Pattern
 */
import { writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const base = "https://example.com";
const routes = ["/", "/components", "/office", "/agent"];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${base}${r}</loc></url>`).join("\n")}
</urlset>`;

writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml);
console.log("sitemap.xml geschrieben");
