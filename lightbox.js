(function () {
  // create overlay
  var overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  var img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  // click any screenshot image to open
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (target.tagName === 'IMG' && target.closest('.screenshot')) {
      img.src = target.src;
      img.alt = target.alt;
      overlay.classList.add('active');
    }
  });

  // click overlay to close
  overlay.addEventListener('click', function () {
    overlay.classList.remove('active');
  });

  // ESC to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('active');
  });
})();
