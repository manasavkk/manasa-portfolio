window.addEventListener('load', function() {
    ['work.html', 'sidequests.html', 'case-study/'].forEach(function(url) {
      var l = document.createElement('link');
      l.rel = 'prefetch'; l.href = url;
      document.head.appendChild(l);
    });
  });