# lauracerezo.com

Thal's website. Writing and art. It's a [Jekyll](https://jekyllrb.com) site
hosted free on GitHub Pages — GitHub rebuilds it automatically every time
something is pushed to `main`, so there's no "deploy" step to remember.

---

## Adding a new piece of writing

1. Make a file in the `_posts/` folder.
2. Name it `YYYY-MM-DD-title-with-dashes.md` — the date is how it gets ordered.
3. Put this at the top, between the dashed lines:

   ```
   ---
   title: What It's Called
   subtitle: Optional one-liner shown under the title and in lists.
   tags: [essays]
   ---
   ```

4. Write below it in [Markdown](https://www.markdownguide.org/cheat-sheet/).
5. Commit and push. It's live in about a minute.

**Not ready yet?** Put it in a `_drafts/` folder instead (no date needed in the
filename). Drafts never publish.

## Adding art

1. Put the image file in `assets/images/art/`.
2. Add a block to the top of `_data/art.yml`:

   ```yaml
   - title: Study in Two Reds
     image: /assets/images/art/two-reds.jpg
     alt: Two overlapping red shapes on a cream field
     year: 2026
     medium: Ink and gouache on paper
     note: Optional line of context.
     featured: true   # also show it on the homepage
   ```

Only `title` and `image` are required. `alt` is the description read aloud by
screen readers — worth writing for every piece.

Resize photos to about **1600px on the long edge** before adding them, and save
as JPG. Full-resolution camera files make the page slow to load.

## Changing the look

Everything visual is in one file: `assets/css/main.css`. The colors and fonts
are defined in the `:root` block at the very top — change those few values and
the whole site changes with them. Dark mode colors are right below, in the
`@media (prefers-color-scheme: dark)` block.

## Changing the words that aren't posts

| What | Where |
| --- | --- |
| Homepage headline and blurb | `index.md` |
| About page | `about.md` |
| Site title, tagline, social links, email | `_config.yml` |
| Header / nav links | `_includes/nav.html` |
| Footer | `_includes/footer.html` |

---

## Running it on your own computer

Only needed if you want to see changes before pushing them. Requires Ruby.

```sh
bundle install          # once, the first time
bundle exec jekyll serve --livereload --drafts
```

Then open <http://localhost:4000>. It rebuilds as you save.

## How it gets published

- Push to `main` → GitHub Pages builds and publishes it.
- The `CNAME` file points the site at **lauracerezo.com**. Don't delete it.
- One-time setup in the repo's **Settings → Pages**: set the source to
  *Deploy from a branch* → `main` / `/ (root)`, then set the custom domain to
  `lauracerezo.com` and tick **Enforce HTTPS** once the certificate is ready.
- DNS at the domain registrar needs to point at GitHub:
  - `A` records for `lauracerezo.com` → `185.199.108.153`, `185.199.109.153`,
    `185.199.110.153`, `185.199.111.153`
  - `CNAME` record for `www` → `lauracerezo-com.github.io`

## What's in here

```
_config.yml          site-wide settings
index.md             homepage
writing.md           the list of all posts
art.md               the gallery
about.md             about page
_posts/              one file per piece of writing
_data/art.yml        the list of artwork
_layouts/            page shells (default, page, post, home)
_includes/           reused bits (head, nav, footer, art figure)
assets/css/main.css  all the styling
assets/js/lightbox.js  click-to-enlarge on the art page
assets/images/       images, with art/ inside it
CNAME                the custom domain
```
