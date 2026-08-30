---
title: Starting Somewhere
subtitle: The first post, which exists mostly to prove the machine works.
tags: [notes]
---

This is a real post. It lives at `_posts/2026-08-30-starting-somewhere.md`, and
the only reason it appears on the site is that the file is in that folder with
that name. Delete it whenever you want.

## How writing here works

Make a new file in `_posts/`. Name it `YYYY-MM-DD-some-title.md`. Start it with
a little block of settings between two lines of dashes:

```
---
title: What I Called It
subtitle: An optional second line, shown under the title and in lists.
tags: [essays, ink]
---
```

Then write. Plain sentences are fine. If you want *emphasis* you wrap it in
asterisks, if you want a link you write it like
[this](https://en.wikipedia.org/wiki/Markdown).

> Long quotes get pulled out and set apart like this, with a red line down the
> side.

To put an image inside a post, drop the file in `assets/images/` and write:

```
![What the picture shows](/assets/images/your-file.jpg)
```

## Drafts

If something isn't ready, put it in a folder called `_drafts/` instead — no
date needed in the filename. It won't publish. When you run the site locally
with `bundle exec jekyll serve --drafts` you can see drafts while you work.

That's the whole system. Everything else is decoration.
