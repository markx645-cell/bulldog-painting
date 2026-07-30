/* =========================================================================
   Bulldog Painting — vanilla JS, no dependencies.
   Sticky-header shadow · mobile menu · nav dropdowns · process steps ·
   review carousel · FAQ accordion.
   ========================================================================= */
(function () {
  'use strict';

  var mqDesktop = window.matchMedia('(min-width: 901px)');

  /* ---------- sticky header shadow ---------- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  var mobileCta = document.querySelector('.mobile-only-cta');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    if (mobileCta) mobileCta.hidden = !open;
  }

  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });

  // close the menu when a link inside it is followed
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a') && !mqDesktop.matches) setMenu(false);
  });

  // reset state when crossing the breakpoint, so a menu left open on mobile
  // does not strand the desktop layout
  function syncBreakpoint() {
    if (mqDesktop.matches) {
      setMenu(false);
      closeDropdowns();
    }
  }
  if (mqDesktop.addEventListener) mqDesktop.addEventListener('change', syncBreakpoint);
  else mqDesktop.addListener(syncBreakpoint);

  /* ---------- nav dropdowns ---------- */
  var dropdownBtns = Array.prototype.slice.call(document.querySelectorAll('[data-dropdown]'));

  function closeDropdowns(except) {
    dropdownBtns.forEach(function (btn) {
      var item = btn.parentElement;
      if (item === except) return;
      item.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  dropdownBtns.forEach(function (btn) {
    var item = btn.parentElement;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !item.classList.contains('open');
      closeDropdowns(item);
      item.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });

    // hover only counts on desktop; on touch the click handler drives it
    item.addEventListener('mouseenter', function () {
      if (!mqDesktop.matches) return;
      closeDropdowns(item);
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    });
    item.addEventListener('mouseleave', function () {
      if (!mqDesktop.matches) return;
      item.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function () {
    closeDropdowns();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDropdowns();
      if (!mqDesktop.matches) setMenu(false);
    }
  });

  /* ---------- process steps ----------
     EDIT: step copy lives here, in the same order as the buttons. */
  var STEPS = [
    {
      title: 'Free Estimate & Game Plan',
      body: 'We walk the job with you, measure it, and flag the repairs that have to happen before any paint. You leave with a written, itemised scope — no verbal numbers and no pressure to sign on the spot.'
    },
    {
      title: 'Tough Prep & Protection',
      body: 'Furniture wrapped, floors papered, landscaping covered. Then the unglamorous part: wash, scrape, sand, fill, caulk and spot-prime every bare patch. This is the stage that decides how the finish looks in year eight.'
    },
    {
      title: 'Premium Application',
      body: 'Premium coatings, two full coats unless we tell you otherwise in writing, and every ceiling, corner and transition cut by hand. Straight lines come from a steady brush, not from tape.'
    },
    {
      title: 'Daily Communication',
      body: 'A named crew lead on site start to finish, a short end-of-day update on what got done and what is next, and the site swept before anyone leaves. You are never left guessing.'
    },
    {
      title: 'Final Walkthrough & Sign-Off',
      body: 'We walk the whole job with you, punch-list anything you spot, and put it right before we invoice. The written workmanship warranty is handed over on that visit.'
    }
  ];

  var stepBtns = Array.prototype.slice.call(document.querySelectorAll('.step-btn'));
  var stepTitle = document.getElementById('stepTitle');
  var stepBody = document.getElementById('stepBody');

  stepBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var i = Number(btn.getAttribute('data-step'));
      var step = STEPS[i];
      if (!step) return;
      stepBtns.forEach(function (b) {
        b.setAttribute('aria-selected', String(b === btn));
      });
      stepTitle.textContent = step.title;
      stepBody.textContent = step.body;
    });
  });

  /* ---------- review carousel ----------
     Page-by-page, using however many cards are in the HTML. Add or remove
     <article class="review"> blocks freely — nothing here is hardcoded. */
  var track = document.getElementById('reviewsTrack');
  var prev = document.getElementById('revPrev');
  var next = document.getElementById('revNext');

  if (track && prev && next) {
    var page = 0;

    function perView() {
      var w = window.innerWidth;
      if (w <= 640) return 1;
      if (w <= 1024) return 2;
      return 3;
    }

    function pages() {
      var count = track.querySelectorAll('.review').length;
      return Math.max(1, Math.ceil(count / perView()));
    }

    function render() {
      var total = pages();
      if (page > total - 1) page = total - 1;
      if (page < 0) page = 0;
      // each page shifts by the full viewport width plus one gap
      track.style.transform = 'translateX(calc(' + -page * 100 + '% - ' + page * 24 + 'px))';
      prev.disabled = page === 0;
      next.disabled = page >= total - 1;
    }

    prev.addEventListener('click', function () {
      page -= 1;
      render();
    });
    next.addEventListener('click', function () {
      page += 1;
      render();
    });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(render, 120);
    });

    render();
  }

  /* ---------- FAQ accordion ---------- */
  Array.prototype.slice.call(document.querySelectorAll('.faq-q')).forEach(function (q) {
    q.addEventListener('click', function () {
      var open = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', String(!open));
    });
  });
})();
