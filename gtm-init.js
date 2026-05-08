window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

(function(){
  function loadGtag() {
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;
    gtag('js', new Date());
    gtag('config', 'G-B3WP9WJW4L');
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-B3WP9WJW4L';
    s.async = true;
    document.head.appendChild(s);
  }
  window.addEventListener('load', function() {
    var schedule = window.requestIdleCallback || function(cb) { return setTimeout(cb, 1500); };
    schedule(loadGtag, { timeout: 4000 });
  }, { once: true });
})();
