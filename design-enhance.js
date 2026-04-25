(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll('section .container > *, .service-card, .faq-card, .content-grid > *, .scent-grid > *, .pl-grid > *, .raw-grid > *, .store-grid > *, .footer-grid');
  revealTargets.forEach(function (el, index) {
    if (!el.hasAttribute('data-taste-reveal')) {
      el.setAttribute('data-taste-reveal', '');
      el.style.transitionDelay = Math.min(index % 6, 5) * 70 + 'ms';
    }
  });

  document.querySelectorAll('.scent-grid img, .pl-grid img, .raw-grid img, .store-img img, .content-grid img, .service-card').forEach(function (el) {
    el.setAttribute('data-taste-image', '');
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

  var heroImage = document.querySelector('.hero-bg-img');
  window.addEventListener('scroll', function () {
    var y = window.scrollY || 0;
    if (heroImage) {
      heroImage.style.transform = 'scale(' + (1.04 + Math.min(y, 700) / 7000).toFixed(3) + ') translateY(' + (y * 0.05).toFixed(1) + 'px)';
    }
  }, { passive: true });
}());
