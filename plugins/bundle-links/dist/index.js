// Local Quartz v5 transformer: resolve basename wikilinks to page-bundle slugs.
//
// Posts are stored as page bundles -- `content/2025/my-post/my-post.md` with the
// post's images in `content/2025/my-post/img/`. Quartz's `slugifyFilePath`
// collapses a `<folder>/<folder>` tail to `<folder>/index`, which keeps the
// published URL identical to the old flat layout (`/2025/my-post/`).
//
// The side effect is that CrawlLinks' `shortest` strategy can no longer find
// these pages: it matches a single-segment target against the LAST segment of
// each slug, and every bundled post now ends in `index`. So `[[my-post]]`, which
// Obsidian resolves fine, falls through to a root-level `/my-post`.
//
// This runs before CrawlLinks and rewrites such hrefs to the folder form
// (`./2025/my-post/`), which `shortest` does resolve. Source markdown keeps
// plain `[[my-post]]` wikilinks so Obsidian keeps working.
//
// Matching is done on a loosened form of both sides (lowercased, every run of
// non-alphanumerics folded to a single dash). That also repairs links to titles
// containing punctuation, where the wikilink slug and the file slug disagree --
// e.g. `Obsidian : Sharpen your thinking` yields `obsidian--sharpen-your-thinking`
// from the wikilink but `obsidian-:-sharpen-your-thinking` from the file path.
//
// Hand-authored compiled output (no build step), matching the other local plugins.
import { visit } from "unist-util-visit";

const canonical = (s) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

/** Map the canonical basename of every page bundle to its folder slug. */
function buildBundleIndex(allSlugs) {
  const byName = new Map();
  for (const slug of allSlugs) {
    const segments = slug.split("/");
    if (segments.length < 2 || segments.at(-1) !== "index") continue;
    const key = canonical(segments.at(-2));
    if (!key) continue;
    // An ambiguous name is left alone rather than guessed at.
    byName.set(key, byName.has(key) ? null : segments.slice(0, -1).join("/") + "/");
  }
  return byName;
}

const BundleLinks = () => ({
  name: "BundleLinks",
  htmlPlugins(ctx) {
    return [
      () => (tree) => {
        const bundles = buildBundleIndex(ctx.allSlugs ?? []);
        if (bundles.size === 0) return;

        visit(tree, "element", (node) => {
          if (node.tagName !== "a") return;
          const href = node.properties?.href;
          if (typeof href !== "string" || href.length === 0) return;
          if (href.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) {
            return;
          }

          const anchorAt = href.indexOf("#");
          const anchor = anchorAt === -1 ? "" : href.slice(anchorAt);
          let target = anchorAt === -1 ? href : href.slice(0, anchorAt);

          const relative = target.startsWith("./");
          target = target.replace(/^\.\//, "");
          // Only bare basenames are ambiguous; a path already names its folder.
          if (target.length === 0 || target.includes("/")) return;

          const resolved = bundles.get(canonical(decodeURIComponent(target)));
          if (!resolved) return;

          node.properties.href = (relative ? "./" : "") + resolved + anchor;
        });
      },
    ];
  },
});

export default BundleLinks;
