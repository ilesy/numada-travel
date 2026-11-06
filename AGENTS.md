# Project conventions
- All routes using Layout receive shared self-referencing canonical and social metadata from PageMetadata; content pages override only their unique copy or structured data, avoiding duplicate canonical tags.
- Mark static fallback title/description/social tags as Helmet-managed so client navigation replaces them rather than accumulating duplicate tags.
- Keep sitemap coverage in the existing static XML file; include published content only and preserve timestamps of unknown provenance.
- Do not serve React source under public/src; it can override Vite's compiled module URLs and cause a blank screen.