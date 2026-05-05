window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
function loadGoogleAnalytics(){
  if (document.querySelector('script[data-analytics-id="G-B3WP9WJW4L"]')) return;
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-B3WP9WJW4L';
  script.async = true;
  script.dataset.analyticsId = 'G-B3WP9WJW4L';
  script.onload = function(){
    gtag('js', new Date());
    gtag('config', 'G-B3WP9WJW4L');
  };
  document.head.appendChild(script);
}
window.addEventListener('load', function(){
  var schedule = window.requestIdleCallback || function(callback) { return setTimeout(callback, 2500); };
  schedule(loadGoogleAnalytics, { timeout: 5000 });
}, { once: true });
