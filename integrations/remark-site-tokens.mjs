// Remark plugin: replaces {{PHONE}}, {{TEL}} and {{WHATSAPP}} in blog post Markdown (text and
// link URLs) with the values from src/data/site.ts, so a post never hardcodes the number.
// astro.config.ts passes the values in as plain strings. Because they are part of the Astro config,
// changing the number in site.ts also invalidates Astro's cached copy of the rendered posts.
export default function remarkSiteTokens(options = {}) {
  const tokens = options.tokens ?? {};
  const fill = (s) => (typeof s === 'string' ? s.replace(/\{\{[A-Z]+\}\}/g, (t) => tokens[t] ?? t) : s);
  const walk = (node) => {
    if ('value' in node) node.value = fill(node.value);
    if ('url' in node) node.url = fill(node.url);
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}
