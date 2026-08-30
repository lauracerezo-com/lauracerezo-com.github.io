---
title: Art
permalink: /art/
width: wide
subtitle: Click anything to see it big.
---

{% if site.data.art.size == 0 %}
Nothing hung on these walls yet.
{% else %}
<div class="art-grid">
  {%- for piece in site.data.art %}
  {% include art-figure.html piece=piece %}
  {%- endfor %}
</div>
{% endif %}

<script src="{{ '/assets/js/lightbox.js' | relative_url }}" defer></script>
