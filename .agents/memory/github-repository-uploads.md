---
name: GitHub repository uploads
description: Replit GitHub connector behavior when creating a new repository and uploading an existing workspace.
---

When creating a new repository through the GitHub connector, initialize the empty repository with one contents commit before using the Git Data API. Upload blobs sequentially or in very small paced batches; concurrent blob creation can trigger connector-side 429 throttling even when GitHub's core rate limit is unused.

**Why:** The connector can reject Git Data API blob creation against an entirely empty repository, and its proxy throttles bursts independently of GitHub's reported API quota.

**How to apply:** Create a temporary initializer commit, then build the complete tree and commit on top of it. Use retry/backoff for blob uploads and verify the final recursive tree and latest commit afterward.