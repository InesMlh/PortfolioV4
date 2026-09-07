---
name: Portfolio preview loading
description: Initial loading behavior for the portfolio preview and visual verification.
---

The portfolio should render its first meaningful screen immediately; a fully opaque loading overlay can make Replit preview screenshots look blank while the app itself is already running. If an intro is needed, keep it short and translucent/non-blocking.

**Why:** Preview capture happens near initial page load, so a long or delayed overlay hides the actual route and makes runtime verification misleading.

**How to apply:** Keep any future intro animation short and non-blocking, and verify both the root and a nested route with screenshots after visual changes.