// inview
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  function t() {
    var t,
      n,
      i = { height: d.innerHeight, width: d.innerWidth };
    return (
      i.height ||
        ((t = a.compatMode),
        (!t && e.support.boxModel) ||
          ((n = "CSS1Compat" === t ? h : a.body),
          (i = { height: n.clientHeight, width: n.clientWidth }))),
      i
    );
  }
  function n() {
    return {
      top: d.pageYOffset || h.scrollTop || a.body.scrollTop,
      left: d.pageXOffset || h.scrollLeft || a.body.scrollLeft,
    };
  }
  function i() {
    if (f.length) {
      var i = 0,
        l = e.map(f, function (e) {
          var t = e.data.selector,
            n = e.$element;
          return t ? n.find(t) : n;
        });
      for (o = o || t(), r = r || n(); i < f.length; i++)
        if (e.contains(h, l[i][0])) {
          var a = e(l[i]),
            d = { height: a[0].offsetHeight, width: a[0].offsetWidth },
            c = a.offset(),
            u = a.data("inview");
          if (!r || !o) return;
          c.top + d.height > r.top &&
          c.top < r.top + o.height &&
          c.left + d.width > r.left &&
          c.left < r.left + o.width
            ? u || a.data("inview", !0).trigger("inview", [!0])
            : u && a.data("inview", !1).trigger("inview", [!1]);
        }
    }
  }
  var o,
    r,
    l,
    f = [],
    a = document,
    d = window,
    h = a.documentElement;
  (e.event.special.inview = {
    add: function (t) {
      f.push({ data: t, $element: e(this), element: this }),
        !l && f.length && (l = setInterval(i, 250));
    },
    remove: function (e) {
      for (var t = 0; t < f.length; t++) {
        var n = f[t];
        if (n.element === this && n.data.guid === e.guid) {
          f.splice(t, 1);
          break;
        }
      }
      f.length || (clearInterval(l), (l = null));
    },
  }),
    e(d).bind("scroll resize scrollstop", function () {
      o = r = null;
    }),
    !h.addEventListener &&
      h.attachEvent &&
      h.attachEvent("onfocusin", function () {
        r = null;
      });
});

// pagetop
$(function () {
  var pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
});

// hamburger
(function ($) {
  var $nav = $("#navArea");
  var $btn = $(".toggle-btn");
  var $mask = $("#mask");
  var open = "open";
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
})(jQuery);

// fadeUp
$(function () {
  $(".fade").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass("is-animation");
      }
    }
  );
});

// gnav-sp-menu-guest
jQuery(function ($) {
  $(".gnav-sp-menu-guest ul").css("display", "none");
  $(".gnav-sp-menu-guest span").click(function () {
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
});
