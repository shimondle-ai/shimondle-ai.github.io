(function () {
  var root = document.documentElement;
  var KEY = "shimondle-theme";
  var toggle = document.getElementById("theme-toggle");

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function preferLight() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#fbfaf6" : "#14122a");
    if (toggle) {
      var going = theme === "light" ? "dark" : "light";
      toggle.setAttribute("aria-label", "Switch to " + going + " theme");
      toggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    }
  }

  apply(stored() || (preferLight() ? "light" : "dark"));

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  function onScroll() {
    document.body.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var targets = document.querySelectorAll(".section-head, .shots, .app-grid, .card, .studio-inner, .footer-brand");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = el.parentElement ? Array.prototype.slice.call(el.parentElement.children) : [];
        var i = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(i, 4) * 60 + "ms";
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  }
})();
