/* Tiny click-to-enlarge for the art grid. No dependencies.
   Any <a data-lightbox href="image.jpg"> opens in an overlay instead of
   navigating. With JS off, the links still work — they just open the file. */
(function () {
  var links = document.querySelectorAll("a[data-lightbox]");
  if (!links.length || !window.HTMLDialogElement) return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close">&times;</button>' +
    '<img alt="">' +
    '<p class="lightbox-caption"></p>';
  document.body.appendChild(dialog);

  var img = dialog.querySelector("img");
  var caption = dialog.querySelector(".lightbox-caption");

  function open(link) {
    var full = link.getAttribute("href");
    var inner = link.querySelector("img");
    img.src = full;
    img.alt = inner ? inner.alt : "";
    caption.textContent = link.getAttribute("data-caption") || "";
    dialog.showModal();
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey) return; // let new-tab work
      event.preventDefault();
      open(link);
    });
  });

  dialog.querySelector(".lightbox-close").addEventListener("click", function () {
    dialog.close();
  });

  // Click the backdrop (anywhere that isn't the image) to dismiss.
  dialog.addEventListener("click", function (event) {
    if (event.target !== img) dialog.close();
  });

  // Free the memory when closed; Esc is handled by <dialog> for free.
  dialog.addEventListener("close", function () {
    img.removeAttribute("src");
  });
})();
