// Shared copy-button behavior for all prompt blocks.
// Markup convention:
//   <div class="code-block-wrapper">
//     <button class="copy-btn" data-copy-target="#someId">...</button>
//     <div class="code-block"><pre id="someId">...</pre></div>
//   </div>
// Any element with .copy-btn and a data-copy-target selector will be auto-wired.

(function () {
    var COPY_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    var CHECK_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><polyline points="20 6 9 17 4 12"/></svg>';

    function resetBtn(btn) {
        btn.innerHTML = COPY_ICON + '複製';
        btn.classList.remove('copied');
    }

    function flashCopied(btn) {
        btn.innerHTML = CHECK_ICON + '已複製';
        btn.classList.add('copied');
        setTimeout(function () { resetBtn(btn); }, 1500);
    }

    function handleClick(btn) {
        var sel = btn.getAttribute('data-copy-target');
        if (!sel) return;
        var target = document.querySelector(sel);
        if (!target) return;
        var text = target.textContent;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () { flashCopied(btn); });
        } else {
            // Fallback for older browsers
            var ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); flashCopied(btn); } catch (e) {}
            document.body.removeChild(ta);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btns = document.querySelectorAll('.copy-btn[data-copy-target]');
        for (var i = 0; i < btns.length; i++) {
            (function (btn) {
                // Initialize icon if empty
                if (!btn.innerHTML.trim()) resetBtn(btn);
                btn.addEventListener('click', function () { handleClick(btn); });
            })(btns[i]);
        }
    });
})();
