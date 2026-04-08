(function () {
  var pages = [
    { href: '01-install-kiro-ide.html', label: '安裝 Kiro' },
    { href: '02-install-nodejs-python.html', label: 'Node / Python' },
    { href: '03-kiro-ide-overview.html', label: 'Kiro 介面' },
    { href: '04-mcp-tavily.html', label: 'MCP' },
    { href: '05-hook-translation.html', label: 'Hook' },
    { href: '06-steering-profit-analysis.html', label: 'Steering' },
    { href: '07-steering-vs-hook.html', label: '比較' },
    { href: '08-yt-video-analysis.html', label: 'YT 分析' },
    { href: '09-ai-workflow-trends.html', label: '趨勢' },
    { href: '10-survey.html', label: '問卷' }
  ];

  var currentFile = location.pathname.split('/').pop();
  var currentIdx = -1;
  pages.forEach(function (p, i) { if (p.href === currentFile) currentIdx = i; });

  var nav = document.createElement('nav');
  nav.className = 'page-map';
  nav.setAttribute('aria-label', '課程路徑圖');

  pages.forEach(function (p, i) {
    if (i > 0) {
      var sep = document.createElement('span');
      sep.className = 'page-map-sep';
      sep.textContent = '›';
      nav.appendChild(sep);
    }

    var a = document.createElement('a');
    a.href = p.href;
    a.className = 'page-map-item';
    if (i < currentIdx) {} // no special class
    else if (i === currentIdx) a.classList.add('current');

    var num = document.createElement('span');
    num.className = 'page-map-num';
    num.textContent = (i + 1);

    a.appendChild(num);
    a.appendChild(document.createTextNode(p.label));
    nav.appendChild(a);
  });

  var container = document.querySelector('.container');
  if (container) container.insertBefore(nav, container.firstChild);
})();
