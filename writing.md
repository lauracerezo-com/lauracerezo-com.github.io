---
title: Writing
permalink: /writing/
subtitle: Essays, notes, and whatever else needed saying.
---

{% if site.posts.size == 0 %}
Nothing here yet. Soon.
{% else %}
<ul class="post-list post-list-full">
  {%- for post in site.posts %}
  <li class="post-list-item">
    <a class="post-list-link" href="{{ post.url | relative_url }}">
      <span class="post-list-title">{{ post.title }}</span>
      <time class="post-list-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
    </a>
    {%- if post.subtitle %}<p class="post-list-excerpt">{{ post.subtitle }}</p>
    {%- else %}<p class="post-list-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>{% endif %}
  </li>
  {%- endfor %}
</ul>
{% endif %}
