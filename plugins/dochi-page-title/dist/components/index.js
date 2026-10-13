// Local Quartz v5 component plugin: PageTitle with the dochigarden mark.
// Replaces github:quartz-community/page-title so the sidebar title shows the
// studio's hedgehog-and-sprout logo (master: khy07181/dochigarden brand/) before
// the site title. Hand-authored compiled output (no build step); preact is an
// external singleton, matching how official quartz-community plugins are bundled.
import { h } from "preact"

var page_title_css = `.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title a {
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
}

.page-title .mark {
  height: 0.95em;
  width: auto;
  flex: none;
  color: var(--dark);
}

.page-title .sprout { stroke: #5E7A52; }
:root[saved-theme="dark"] .page-title .sprout { stroke: #9DB58C; }
`

var mark =
  '<svg class="mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 46" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><g fill="currentColor" stroke="currentColor"><path d="M16 43A26 26 0 0 1 68 43ZM12.89 35.74L3.19 33.32M17.13 26.22L8.84 20.63M24.37 18.73L18.49 10.64M33.73 14.16L30.97 4.55M44.09 13.07L44.79 3.1M54.2 15.59L58.27 6.46M62.84 21.42L69.79 14.23M68.96 29.85L77.95 25.47" fill="none" stroke-width="3.2"/><circle cx="55" cy="32" r="2.6" stroke="none"/></g><g class="sprout"><path d="M97 43L97 25.4M97 30.2C97 25.4 100.2 22.2 105 22.2C105 27 101.8 30.2 97 30.2ZM97 33.4C97 28.6 93.8 25.4 89 25.4C89 30.2 92.2 33.4 97 33.4Z" fill="none" stroke-width="3.2"/></g></svg>'

function pathToRoot(slug) {
  var rootPath = slug
    .split("/")
    .filter((x) => x !== "")
    .slice(0, -1)
    .map(() => "..")
    .join("/")
  return rootPath.length === 0 ? "." : rootPath
}

var PageTitle = ({ fileData, cfg, displayClass }) =>
  h(
    "h2",
    { class: ["page-title", displayClass].filter(Boolean).join(" ") },
    h(
      "a",
      { href: pathToRoot(fileData.slug) },
      h("span", { style: "display:contents", dangerouslySetInnerHTML: { __html: mark } }),
      cfg?.pageTitle ?? "Untitled",
    ),
  )
PageTitle.css = page_title_css

var PageTitle_default = () => PageTitle
export { PageTitle_default as PageTitle }
