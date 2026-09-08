---
name: GitHub tree uploads
description: Durable constraint for mirroring a workspace through GitHub's Git Trees REST API.
---

When creating a GitHub tree with deletion entries, include `mode: "100644"` and `type: "blob"` alongside `sha: null`; omitting either field causes GitHub to reject the entire tree.

**Why:** GitHub validates deletion entries as tree items even though their blob SHA is null, so a structurally incomplete deletion item fails before a commit can be created.

**How to apply:** Keep tree writes serialized and validate the tree response before creating the commit and moving the branch ref.