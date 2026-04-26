(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('taste-ready');

  var revealTargets = document.querySelectorAll('section .container > *, .service-card, .faq-card, .content-grid > *, .scent-grid > *, .pl-grid > *, .raw-grid > *, .store-grid > *, .footer-grid, table, .seo-hero-content');
  revealTargets.forEach(function (el, index) {
    if (!el.hasAttribute('data-taste-reveal')) {
      el.setAttribute('data-taste-reveal', '');
      el.style.transitionDelay = Math.min(index % 7, 6) * 64 + 'ms';
    }
  });

  document.querySelectorAll('.scent-grid img, .pl-grid img, .raw-grid img, .store-img img, .content-grid img, .blog-article img, .service-card').forEach(function (el) {
    el.setAttribute('data-taste-image', '');
  });

  document.querySelectorAll('.services-grid, .faq-grid, .footer-grid, .content-grid').forEach(function (grid) {
    grid.setAttribute('data-taste-grid', '');
  });

  document.querySelectorAll('.section-dark, .scent-section, .raw-section, .store-section, .reviews-section').forEach(function (section) {
    section.setAttribute('data-taste-stage', '');
  });

  if (reduceMotion) {
    document.querySelectorAll('[data-taste-reveal], [data-taste-image]').forEach(function (el) {
      el.classList.add('taste-visible');
      el.style.transitionDelay = '0ms';
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('taste-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('[data-taste-reveal], [data-taste-image]').forEach(function (el) {
    observer.observe(el);
  });

  var progress = document.getElementById('scroll-progress');
  var header = document.querySelector('.header');
  var ticking = false;

  function updateScrollState() {
    var doc = document.documentElement;
    var y = window.scrollY || doc.scrollTop || 0;
    var max = Math.max(1, doc.scrollHeight - doc.clientHeight);
    var pct = y / max;
    if (progress) {
      progress.style.transform = 'scaleX(' + pct.toFixed(4) + ')';
      progress.setAttribute('aria-valuenow', Math.round(pct * 100));
    }
    if (header) {
      header.classList.toggle('scrolled', y > 44);
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateScrollState);
    }
  }, { passive: true });
  updateScrollState();

  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav a, .footer-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.charAt(0) !== '/') return;
    var linkPath = href.replace(/\/$/, '') || '/';
    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('.service-card, .faq-card, .review-card, .section-bg > .container > div[style*="grid"] > div, .section-white > .container > div[style*="grid"] > div, .section-soft > .container > div[style*="grid"] > div').forEach(function (card) {
    card.addEventListener('pointermove', function (event) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (event.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (event.clientY - rect.top) + 'px');
    });
    card.addEventListener('pointerleave', function () {
      card.style.setProperty('--mx', '-200px');
      card.style.setProperty('--my', '-200px');
    });
  });

  document.querySelectorAll('.hamburger').forEach(function (button) {
    button.addEventListener('click', function () {
      button.classList.toggle('active');
    });
  });
}());
