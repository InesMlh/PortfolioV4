# Locale contract

The runtime uses the typed `src/data/locales.ts` catalog so the four supported languages share one checked `Translation` shape, including arrays and the small controlled HTML fragments used by the editorial headings.

The files in this directory are the stable file-per-locale contract requested for future extraction to JSON-only loading or a translation platform. When a fifth language is added, add its `common.json` file and extend the `Language` union/catalog.