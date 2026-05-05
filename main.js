(function() {
    /* ── 1. SCROLL PROGRESS BAR ──────────────────────────────── */
    var prog = document.getElementById('scroll-progress');
    var isCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    window.addEventListener('scroll', function() {
        var s = document.documentElement;
        var pct = (window.scrollY / (s.scrollHeight - s.clientHeight)) * 100;
        if (prog) prog.style.width = pct + '%';
    }, { passive: true });

    /* ── 2. HEADER SCROLL ────────────────────────────────────── */
    var header = document.getElementById('header');
    var announceBar = document.querySelector('.announce-bar');
    var barH = announceBar ? announceBar.offsetHeight : 36;
    var scrollPending = false;
    window.addEventListener('scroll', function() {
        if (!scrollPending) {
            scrollPending = true;
            requestAnimationFrame(function() {
                header.classList.toggle('scrolled', window.scrollY > barH + 40);
                document.body.classList.toggle('scrolled', window.scrollY > barH + 40);
                scrollPending = false;
            });
        }
    }, { passive: true });

    /* ── 3. FADE-UP INTERSECTION OBSERVER ───────────────────── */
    var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.fade-up').forEach(function(el) { io.observe(el); });

    /* ── 4. DATA-REVEAL OBSERVER ─────────────────────────────── */
    var ioR = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) {
                e.target.classList.add('revealed');
                ioR.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function(el) { ioR.observe(el); });

    /* ── 5. COUNT-UP NUMBER TICKER ───────────────────────────── */
    var countIo = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (!e.isIntersecting) return;
            var el = e.target;
            var target = parseInt(el.dataset.target, 10);
            var suffix = el.dataset.suffix || '';
            var duration = 1800;
            var start = performance.now();
            function tick(now) {
                var p = Math.min((now - start) / duration, 1);
                var ease = 1 - Math.pow(1 - p, 4);
                el.textContent = Math.floor(ease * target).toLocaleString() + suffix;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            countIo.unobserve(el);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.count-up').forEach(function(el) { countIo.observe(el); });

    /* ── 6. MOBILE NAV — hamburger morph to X ───────────────── */
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    function toggleNav() {
        var isOpen = nav.classList.toggle('show');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    hamburger.addEventListener('click', toggleNav);
    hamburger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleNav(); }
    });
    document.querySelectorAll('#nav a').forEach(function(a) {
        a.addEventListener('click', function() {
            nav.classList.remove('show');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    /* ── 7. FLOATING PARTICLES ───────────────────────────────── */
    function injectParticles(container, count) {
        if (isCoarsePointer) return;
        var dxOpts = [-14,-10,-6,6,10,14];
        var dyOpts = [-20,-16,-12,-8,8,12];
        for (var i = 0; i < count; i++) {
            var p = document.createElement('span');
            p.className = 'particle';
            var size = (3 + Math.random() * 4).toFixed(1);
            var op = (0.10 + Math.random() * 0.10).toFixed(2);
            var dx = dxOpts[Math.floor(Math.random()*dxOpts.length)];
            var dy = dyOpts[Math.floor(Math.random()*dyOpts.length)];
            p.style.cssText =
                '--x:' + (10 + Math.random()*80).toFixed(0) + '%;' +
                '--y:' + (10 + Math.random()*80).toFixed(0) + '%;' +
                '--size:' + size + 'px;' +
                '--op:' + op + ';' +
                '--dur:' + (6 + Math.random()*6).toFixed(1) + 's;' +
                '--delay:' + (Math.random()*4).toFixed(1) + 's;' +
                '--dx:' + dx + 'px;--dy:' + dy + 'px;';
            container.appendChild(p);
        }
    }
    var heroRight = document.getElementById('heroRight');
    if (heroRight) injectParticles(heroRight, 6);

    /* ── 8. ANNOUNCE BAR + MARQUEE SEAMLESS LOOP ────────────── */
    ['announceTrack', 'marqueeTrack'].forEach(function(id) {
        var track = document.getElementById(id);
        if (track) {
            var clone = track.cloneNode(true);
            clone.removeAttribute('id');
            track.parentElement.appendChild(clone);
        }
    });

    /* ── 9. SERVICE CARD SPOTLIGHT (magic-card) ─────────────── */
    document.querySelectorAll('.service-card').forEach(function(card) {
        if (isCoarsePointer) return;
        card.addEventListener('pointermove', function(e) {
            var r = card.getBoundingClientRect();
            card.style.setProperty('--cx', (e.clientX - r.left) + 'px');
            card.style.setProperty('--cy', (e.clientY - r.top) + 'px');
        });
        card.addEventListener('pointerleave', function() {
            card.style.setProperty('--cx', '-999px');
            card.style.setProperty('--cy', '-999px');
        });
    });

    /* ── 10. REVIEW CARD SPOTLIGHT ──────────────────────────── */
    document.querySelectorAll('.review-card').forEach(function(card) {
        if (isCoarsePointer) return;
        card.addEventListener('pointermove', function(e) {
            var r = card.getBoundingClientRect();
            card.style.setProperty('--cx', (e.clientX - r.left) + 'px');
            card.style.setProperty('--cy', (e.clientY - r.top) + 'px');
        });
        card.addEventListener('pointerleave', function() {
            card.style.setProperty('--cx', '-999px');
            card.style.setProperty('--cy', '-999px');
        });
    });

    /* ── 11. STORE MAP TILT — removed (tilt disabled for B2B professionalism) */

    /* ── 12. GLARE HOVER (private label + product images) ────── */
    document.querySelectorAll('.glare-hover').forEach(function(el) {
        if (isCoarsePointer) return;
        el.addEventListener('pointermove', function(e) {
            var r = el.getBoundingClientRect();
            el.style.setProperty('--gx', ((e.clientX - r.left) / r.width * 100) + '%');
            el.style.setProperty('--gy', ((e.clientY - r.top) / r.height * 100) + '%');
        });
        el.addEventListener('pointerenter', function() { el.classList.add('glare-active'); });
        el.addEventListener('pointerleave', function() { el.classList.remove('glare-active'); });
    });

    /* ── 13. SEO HERO RULE INJECTION ─────────────────────────── */
    document.querySelectorAll('.seo-hero h1').forEach(function(h1) {
        var rule = document.createElement('div');
        rule.className = 'hero-rule';
        h1.insertAdjacentElement('afterend', rule);
    });

    /* ── 14. FAQ STAGGER INDICES ─────────────────────────────── */
    document.querySelectorAll('.faq-card').forEach(function(card, i) {
        card.style.setProperty('--i', i);
        card.classList.add('fade-up');
        io.observe(card);
    });

    /* ── 15. NON-CRITICAL TRACKING ─────────────────────────── */
    function loadExternalTracking() {
        if (document.querySelector('script[data-tracking-id="tk_8a2f3af5f9a141eaa24515664c828e74"]')) return;
        var s = document.createElement('script');
        s.src = 'https://link.gohayde.com/js/external-tracking.js';
        s.async = true;
        s.dataset.trackingId = 'tk_8a2f3af5f9a141eaa24515664c828e74';
        s.dataset.debug = 'true';
        document.body.appendChild(s);
    }
    window.addEventListener('load', function() {
        var schedule = window.requestIdleCallback || function(cb) { return setTimeout(cb, 2500); };
        schedule(loadExternalTracking, { timeout: 5000 });
    }, { once: true });

})();
