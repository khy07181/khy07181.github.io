// Local Quartz v5 page type: render page-bundle posts as content pages.
//
// Posts are stored as page bundles -- `content/2025/my-post/my-post.md` -- and
// Quartz collapses the `<folder>/<folder>` tail to `<folder>/index` (see
// bundle-links). folder-page claims every slug ending in `/index` and outranks
// content-page, so each post was rendered as a folder: no graph, backlinks or
// table of contents (byPageType.folder empties the right sidebar) and a stray
// "0 items under this folder." under the post.
//
// This page type outranks folder-page for bundles only, and renders them with
// content-page's body and the `content` layout. Real folder pages (2025/, 2026/)
// are untouched.
//
// Hand-authored compiled output (no build step), matching the other local plugins.
// The body is content-page's own component, imported from its installed copy.
import { ContentBody } from "../../../.quartz/plugins/content-page/dist/index.js";

const stripExt = (name) => name.replace(/\.[^./]+$/, "");

/** `2025/My Post/My Post.md` is a bundle: the file is named after its folder. */
function isBundle(filePath) {
  if (typeof filePath !== "string") return false;
  const parts = filePath.split(/[\\/]/);
  if (parts.length < 2) return false;
  return stripExt(parts.at(-1)) === parts.at(-2);
}

const bundleMatcher = ({ slug, fileData }) =>
  slug.endsWith("/index") && isBundle(fileData?.relativePath ?? fileData?.filePath);

const BundlePage = () => ({
  name: "BundlePage",
  // folder-page is 10; anything above it wins for the slugs this matches
  priority: 20,
  match: bundleMatcher,
  layout: "content",
  body: ContentBody,
});

export default BundlePage;
export { BundlePage };
