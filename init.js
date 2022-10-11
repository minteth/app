var canvas, context, screenH, screenW, MetaPortalFilterArray = [], MetaPortalFilterCondition = "and";
!function (t) {
  "use strict";
  var e = false, a = new Date, n = 0, i = {init: function () {
    i.ready(), i.menuCenter(), i.imgToSVG(), i.BgImg(), i.totopFixer(), i.slider(), i.headerFixer(), i.fn_cs_counter(), i.video(), i.collection(), i.contactForm(), i.totopScroll(), i.seachSomething(), i.walletAndLeftNavOpener(), i.resizeWalletAndLeftNav(), i.headerAnchor(), i.isotope(), i.qnt(), i.countdown(), i.hold(), i.filterItems(), i.applyFilter(), i.navSubMenu(), i.roadmapSwiper(), i.floww(), i.accordion(), i.hero4Swiper(), i.rippleEffect(), i.fullSlider();
  }, fullSlider: function () {
    t(".fn_cs_full_slider .swiper-container").each(function () {
      var e = t(this), a = "Y", n = "horizontal";
      "horizontal" === n && (a = "X");
      var i = 1;
      t("body").hasClass("rtl") && (i = -1);
      var o = {loop: true, speed: 1500, autoplay: {delay: 5e3, disableOnInteraction: false}, navigation: {nextEl: e.closest(".fn_cs_full_slider").find(".next"), prevEl: e.closest(".fn_cs_full_slider").find(".prev")}, slidesPerView: 1, direction: n, loopAdditionalSlides: 10, watchSlidesProgress: true, on: {init: function () {
        this.autoplay.stop();
      }, imagesReady: function () {
        this.autoplay.start();
      }, progress: function () {
        for (var e = 0; e < this.slides.length; e++) {
          var n, o = this.slides[e].progress * (0.5 * this.width) * i;
          t(this.slides[e]).find(".abs_img").css({transform: "translate" + a + "(" + o + "px)"});
        }
      }, touchStart: function () {
        for (var t = this, e = 0; e < t.slides.length; e++) t.slides[e].style.transition = "";
      }, setTransition: function (t) {
        for (var e = this, a = 0; a < e.slides.length; a++) e.slides[a].style.transition = t + "ms", e.slides[a].querySelector(".abs_img").style.transition = t + "ms";
      }}};
      new Swiper(e, o);
    });
  }, rippleEffect: function () {
    t("#ripple").length && t("#ripple").ripples({resolution: 500, dropRadius: 20, perturbance: 0.04});
  }, hero4Swiper: function () {
    t(".fn_cs_hero_slider .swiper-container").each(function () {
      var e = t(this);
      new Swiper(e, {loop: true, speed: 1e3, autoplay: {delay: 3e3, disableOnInteraction: false}, slidesPerView: "auto", spaceBetween: 50, direction: "horizontal", loopAdditionalSlides: 10, watchSlidesProgress: true});
    });
  }, accordion: function () {
    t(".fn_cs_accordion").each(function () {
      var e = t(this);
      e.find(".active").each(function () {
        t(this).find(".acc_content").slideDown(300);
      }), e.find(".acc_header").off().on("click", function () {
        var e = t(this).closest(".acc_item");
        return e.hasClass("active") ? e.removeClass("active").find(".acc_content").slideUp(300) : (e.siblings(".active").removeClass("active").find(".acc_content").slideUp(300), e.addClass("active").find(".acc_content").slideDown(300)), false;
      });
    });
  }, floww: function () {
    i.BgImg(), t(".frenify_cards_gallery").each(function () {
      var e = t(this), a = e.find("ul"), n = a.children("li");
      if (n.length < 5) return false;
      i.floww_change_slide(1, e), n.on("click", function () {
        var a = t(this).index() + 1;
        i.floww_change_slide(a, e);
      }), i.floww_start_autoplay(a, e);
    });
  }, floww_start_autoplay: function (t, e) {
    var a = null;
    clearInterval(a), a = setInterval(function () {
      var a = t.find(".current").index() + 2;
      i.floww_change_slide(a, e);
    }, 5e3);
  }, floww_change_slide: function (t, e) {
    var a = e.find("ul").children("li"), n = a.length;
    t = (t + n) % n;
    var o = a.eq(t - 1);
    if (!o.hasClass("current")) {
      a.removeClass("current next1 next2 prev1 prev2 next3 prev3"), o.addClass("current");
      var r = (t + 1) % n, s = (t + 2) % n, l = (t + 3) % n, c = (t - 1 + n) % n, d = (t - 2 + n) % n, f = (t - 3 + n) % n;
      a.eq(r - 1).addClass("next1"), a.eq(s - 1).addClass("next2"), a.eq(c - 1).addClass("prev1"), a.eq(d - 1).addClass("prev2"), n > 6 && (a.eq(l - 1).addClass("next3"), a.eq(f - 1).addClass("prev3")), i.floww_calc_call(e);
    }
  }, flow_calc: function (t) {
    var e = t.width(), a = t.data("initial-width"), n = t.data("ratio"), i = 20, o = (e - (i *= 2)) / 2 > a ? a : (e - i) / 2, r = o * n + i, s = t.find("ul"), l = s.children("li");
    s.height(r + "px"), l.find(".img_holder img").css({width: o + "px", height: r - i + "px"}), l.css({width: o + "px", height: r + "px"});
    var c = e / 2 - o / 2, d = c + o / 2.5, f = d + o / 2.5, p = c - o / 2.5;
    l.css({left: "50%", transform: "scale(0)"}), s.find(".current").css({left: c + "px", top: 0, transform: "scale(1) translateZ(0) rotate(0)"}), s.find(".next1").css({left: d + "px", top: "90px", transform: "scale(1) translateZ(0) rotate(15deg)"}), s.find(".next2").css({left: f + "px", top: "240px", transform: "scale(1) translateZ(0) rotate(30deg)"}), s.find(".prev1").css({left: p + "px", top: "90px", transform: "scale(1) translateZ(0) rotate(-15deg)"}), s.find(".prev2").css({left: p - o / 2.5 + "px", top: "240px", transform: "scale(1) translateZ(0) rotate(-30deg)"}), l.length > 6 && (s.find(".prev3").css({left: p - o / 2.5 + "px", top: "360px", transform: "scale(1) translateZ(0) rotate(-45deg)"}), s.find(".next3").css({left: f + o / 2.5 + "px", top: "360px", transform: "scale(1) translateZ(0) rotate(45deg)"}));
  }, floww_calc_call: function (e) {
    void 0 === e ? t(".frenify_cards_gallery").each(function () {
      e = t(this), i.flow_calc(e);
    }) : i.flow_calc(e);
  }, roadmapSwiper: function () {
    t(".fn_cs_roadmap .swiper-container").each(function () {
      var e = t(this), a = new Swiper(e, {loop: false, speed: 1500, autoplay: {delay: 5e3, disableOnInteraction: false}, slidesPerView: 4, spaceBetween: 40, direction: "horizontal", loopAdditionalSlides: 10, watchSlidesProgress: true, breakpoints: {768: {slidesPerView: 1}, 1040: {slidesPerView: 2}, 1200: {slidesPerView: 3}, 1400: {slidesPerView: 4}}}), n = 100 / (a.params.loop ? a.slides.length - 2 : a.slides.length), o = e.closest(".fn_cs_roadmap").find(".step_in");
      i.roadmapStep(a, o, n), a.on("slideChange", function () {
        i.roadmapStep(this, o, n);
      });
    });
  }, roadmapStep: function (t, e, a) {
    var n, i = parseInt(t.currentBreakpoint);
    switch (i) {
      case 1400:
      case 1040:
      default:
        n = 4;
        break;
      case 1200:
        n = 3;
        break;
      case 768:
        n = 1;
    }
    e.css({width: (t.activeIndex + n) * a + "%"});
  }, translateVal: function (t) {
    return t.style.transform.match(/translate3d\((.+)px,(.+)px,(.+)px\)/)[1];
  }, menuCenter: function () {
    var e = t(".header .trigger_logo"), a = t(".header .wallet"), n = t(".header .nav"), i = 0, o = 0;
    e.length && (i = parseInt(e.width())), a.length && (o = parseInt(a.width())), i < o ? n.css({paddingLeft: o - i + "px"}) : n.css({paddingRight: i - o + "px"}), n.css({opacity: 1});
  }, navSubMenu: function () {
    t(".metaportal_fn_leftnav .nav_holder a").off().on("click", function () {
      var e = t(this), a = e.siblings(".sub-menu"), o = t(".metaportal_fn_leftnav .nav_holder .icon").html();
      if (a.length) return e.parent().siblings().children("a").removeClass("active"), e.addClass("active"), n++, a.find(">li>.prev").length || a.prepend('<li><a href="#" class="prev"><span class="creative_link">' + o + e.text() + "</span></a></li>"), t(".metaportal_fn_leftnav .nav_holder > ul").css({transform: "translateX(-" + 100 * n + "%)"}), i.previousItems(), false;
    });
  }, previousItems: function () {
    t(".metaportal_fn_leftnav .nav_holder .prev").off().on("click", function () {
      return n--, t(".metaportal_fn_leftnav .nav_holder > ul").css({transform: "translateX(-" + 100 * n + "%)"}), false;
    });
  }, isotopeCollection: function () {
    t(".grid").isotope({itemSelector: "li", layoutMode: "fitRows"});
  }, applyFilter: function () {
    i.isotopeCollection(), t(".metaportal_fn_filters .checkbox").off().on("click", function () {
      var e = t(this), a = e.closest(".metaportal_fn_collection"), n = a.find(".metaportal_fn_result_box"), o = e.data("id"), r = e.data("category"), s = e.find(".text").text(), l = n.find(".filter_count span");
      if (e.hasClass("selected")) {
        e.removeClass("selected"), a.find('.result_item[data-id="' + o + '"]').remove(), 0 === n.find(".result_item").length && (n.find(".clear_all").remove(), n.find(".condition_trigger").remove(), MetaPortalFilterCondition = "and"), e.find('input[type="checkbox"]').prop("checked", ""), l.text(parseInt(l.text()) - 1);
        var c = MetaPortalFilterArray.indexOf(o);
        -1 !== c && MetaPortalFilterArray.splice(c, 1);
      } else e.addClass("selected"), 0 === n.find(".result_item").length && n.append('<a href="#" class="clear_all">Clear All</a><a href="#" class="condition_trigger" data-and-text="' + n.data("and-text") + '" data-or-text="' + n.data("or-text") + '"><span class="text">' + n.data("and-text") + '</span><span class="icon"></span></a>'), n.find(".clear_all").before('<div class="result_item" data-id="' + o + '"><a href="#" title="Remove Filter">' + r + ": <span>" + s + '</span><img src="svg/cancel.svg" alt="" class="fn__svg"></a></div>'), e.find('input[type="checkbox"]').prop("checked", "checked"), l.text(parseInt(l.text()) + 1), MetaPortalFilterArray.push(o), i.imgToSVG(), i.removeFilter();
      return i.recallGridAfterFiltering(), false;
    }), i.removeFilter();
  }, recallGridAfterFiltering: function (e) {
    var a = t(".grid").isotope({itemSelector: "li", layoutMode: "fitRows"});
    if ("clear" === e) return a.isotope({filter: "*"}), MetaPortalFilterArray = [], MetaPortalFilterCondition = "and", false;
    var n = "";
    0 === MetaPortalFilterArray.length ? n = "*" : "or" === MetaPortalFilterCondition ? (t.each(MetaPortalFilterArray, function (t, e) {
      n += ".id" + e + ",";
    }), n = n.slice(0, -1)) : t.each(MetaPortalFilterArray, function (t, e) {
      n += ".id" + e;
    }), a.isotope({filter: n});
  }, removeFilter: function () {
    t(".metaportal_fn_result_box .result_item a").off().on("click", function () {
      var e = t(this), a = e.closest(".metaportal_fn_collection"), n = e.closest(".result_item"), o = a.find(".metaportal_fn_result_box"), r = n.data("id"), s = o.find(".filter_count span");
      n.remove(), a.find('.metaportal_fn_filters .checkbox[data-id="' + r + '"]').removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), s.text(parseInt(s.text()) - 1), 0 === o.find(".result_item").length && (o.find(".clear_all").remove(), o.find(".condition_trigger").remove(), MetaPortalFilterCondition = "and");
      var l = MetaPortalFilterArray.indexOf(r);
      return -1 !== l && MetaPortalFilterArray.splice(l, 1), i.recallGridAfterFiltering(), false;
    }), t(".metaportal_fn_result_box .clear_all").off().on("click", function () {
      var e = t(this), a = e.closest(".metaportal_fn_collection"), n = a.find(".metaportal_fn_filters"), o = a.find(".metaportal_fn_result_box");
      return o.find(".filter_count span").text(0), o.find(".result_item").remove(), e.remove(), o.find(".condition_trigger").remove(), n.find(".checkbox").removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), i.recallGridAfterFiltering("clear"), false;
    }), t(".metaportal_fn_result_box .condition_trigger").off().on("click", function () {
      var e = t(this), a = e.find(".text");
      return e.hasClass("opened") ? (e.removeClass("opened"), a.fadeOut(function () {
        a.text(e.data("and-text")), a.fadeIn();
      }), MetaPortalFilterCondition = "and") : (e.addClass("opened"), a.fadeOut(function () {
        a.text(e.data("or-text")), a.fadeIn();
      }), MetaPortalFilterCondition = "or"), i.recallGridAfterFiltering(), false;
    });
  }, filterItems: function () {
    t(".metaportal_fn_filters .filter_item.opened").each(function () {
      t(this).find(".filter_item__content").slideDown(300);
    }), t(".filter_item__header a").off().on("click", function () {
      var e = t(this).closest(".filter_item");
      return e.hasClass("opened") ? (e.removeClass("opened"), e.find(".filter_item__content").slideUp(300)) : (e.addClass("opened"), e.find(".filter_item__content").slideDown(300)), false;
    });
  }, hold: function () {
    var e = t("#social,.metaportal_fn_search");
    t(window).scrollTop() < t(window).height() && e.addClass("hold"), t(window).on("scroll", function () {
      t(window).scrollTop() < t(window).height() && e.addClass("hold");
    }), function () {
      var a;
      function n() {
        e.addClass("hold");
      }
      function i() {
        t(window).scrollTop() > t(window).height() && (clearTimeout(a), a = setTimeout(n, 2e3), e.removeClass("hold"));
      }
      window.onload = i, document.onmousemove = i, document.onkeypress = i;
    }();
  }, countdown: function () {
    t(".metaportal_fn_countdown").each(function () {
      var e = t(this), a = e.data("type");
      if ("due_date" === a) var n = new Date(e.data("date")).getTime(); else if ("ever" === a) var i = 86400 * parseInt(e.data("days")), o = 3600 * parseInt(e.data("hours")), r = 60 * parseInt(e.data("minutes")), s = parseInt(e.data("seconds")), l = i + o + r + s;
      var c = e.parent();
      e.hasClass("boxed") && (e.after('<div class="metaportal_fn_boxed_countdown"><ul><li class="days"><div class="item"><div class="count"><h3 class="fn__gradient_title"></h3></div><span>Days</span></div></li><li class="hours"><div class="item"><div class="count"><h3 class="fn__gradient_title"></h3></div><span>Hours</span></div></li><li class="minutes"><div class="item"><div class="count"><h3 class="fn__gradient_title"></h3></div><span>Minutes</span></div></li><li class="seconds"><div class="item"><div class="count"><h3 class="fn__gradient_title"></h3></div><span>Seconds</span></div></li></ul></div>'), e.remove()), "due_date" === a ? setInterval(function () {
        var t = (new Date).getTime(), a = n - t, i = Math.floor(a / 864e5), o = Math.floor(a % 864e5 / 36e5), r = Math.floor(a % 36e5 / 6e4), s = Math.floor(a % 6e4 / 1e3);
        if (e.hasClass("boxed")) i = i < 10 ? "0" + i : i, o = o < 10 ? "0" + o : o, r = r < 10 ? "0" + r : r, s = s < 10 ? "0" + s : s, c.find(".days h3").text(i), c.find(".hours h3").text(o), c.find(".minutes h3").text(r), c.find(".seconds h3").text(s); else {
          var l = "";
          i > 0 && (l += i + "d: "), l += o + "h: " + r + "m: " + s + "s", e.text(l);
        }
      }, 1e3) : "ever" === a && setInterval(function () {
        if (i = Math.floor(l / 86400), o = Math.floor(l % 86400 / 3600), r = Math.floor(l % 3600 / 60), s = Math.floor(l % 60), e.hasClass("boxed")) i = i < 10 ? "0" + i : i, o = o < 10 ? "0" + o : o, r = r < 10 ? "0" + r : r, s = s < 10 ? "0" + s : s, c.find(".days h3").text(i), c.find(".hours h3").text(o), c.find(".minutes h3").text(r), c.find(".seconds h3").text(s); else {
          var t = "";
          i > 0 && (t += i + "d: "), t += o + "h: " + r + "m: " + s + "s", e.text(t);
        }
        l--;
      }, 1e3);
    });
  }, qnt: function () {
    t(".qnt .decrease").off().on("click", function () {
      var e = t(this).closest(".qnt").find(".summ"), a = parseInt(e.text());
      a >= 2 && a--, e.text(a);
      var n = a * e.data("price") - e.data("price");
      return e.closest(".mint_list").find(".total_price").html(n), false;
    }), t(".qnt .increase").off().on("click", function () {
      var e = t(this).closest(".qnt").find(".summ"), a = parseInt(e.text());
      a++, e.text(a);
      var n = a * e.data("price") - e.data("price");
      return e.closest(".mint_list").find(".total_price").html(n), false;
    });
  }, isotope: function () {
    t(".fn-isotope").isotope({itemSelector: ".isotope-item", masonry: {}});
  }, headerAnchor: function () {
    t(".header .nav a").on("click", function () {
      var e = t(this);
      t(e.attr("href")).length && t("html, body").animate({scrollTop: t(e.attr("href")).offset().top}, 1e3);
    });
  }, resizeWalletAndLeftNav: function () {
    var e = t(".metaportal_fn_walletbox").height();
    t(".metaportal_fn_walletbox .walletbox").css({minHeight: e});
    var a = t(".metaportal_fn_leftnav").height();
    t(".metaportal_fn_leftnav .navbox").css({minHeight: a});
  }, ready: function () {
    t(".metaportal_fn_walletbox, .metaportal_fn_wallet_closer, .metaportal_fn_leftnav, .metaportal_fn_leftnav_closer").removeClass("ready");
  }, walletAndLeftNavOpener: function () {
    var e = t(".metaportal_fn_walletbox"), a = t(".metaportal_fn_wallet_closer,.metaportal_fn_walletbox .fn__closer");
    t(".wallet_opener").on("click", function () {
      return e.addClass("active"), a.addClass("active"), false;
    }), a.on("click", function () {
      return e.removeClass("active"), a.removeClass("active"), false;
    });
    var n = t(".metaportal_fn_leftnav"), i = t(".metaportal_fn_leftnav_closer,.metaportal_fn_leftnav .fn__closer");
    t(".header .trigger,.metaportal_fn_mobnav .social_trigger .trigger").on("click", function () {
      return n.addClass("active"), i.addClass("active"), false;
    }), i.on("click", function () {
      return n.removeClass("active"), i.removeClass("active"), false;
    });
    var o = t(".metaportal_fn_mobnav .mob_mid .trigger"), r = t(".metaportal_fn_mobnav .mob_bot");
    o.on("click", function () {
      return o.hasClass("active") ? (o.removeClass("active"), r.slideUp(300)) : (o.addClass("active"), r.slideDown(300)), false;
    });
  }, preloader: function () {
    if (e) return false;
    e = true;
    var n = new Date - a, i = 2e3;
    n < i ? i -= n : i = 0, setTimeout(function () {
      t(".metaportal_fn_preloader").addClass("ready");
    }, i);
  }, seachSomething: function () {
    var e = t(".metaportal_fn_search"), a = t(".metaportal_fn_searchbox"), n = t(".metaportal_fn_search_closer"), i = a.find("input"), o = a.find("a");
    e.on("click", function () {
      return a.hasClass("active") ? (a.removeClass("active"), n.removeClass("active")) : (a.addClass("active"), n.addClass("active"), i.val(""), setTimeout(function () {
        i[0].focus();
      }, 100)), false;
    }), n.on("click", function () {
      return a.removeClass("active"), n.removeClass("active"), false;
    }), i.on("keypress", function (t) {
      "Enter" === t.key && (t.preventDefault(), o.trigger("click"));
    }), o.on("click", function () {
      var e = t(".metaportal_fn_searchbox input").val();
      return window.find(e), a.removeClass("active"), n.removeClass("active"), false;
    });
  }, totopScroll: function () {
    t(".metaportal_fn_totop").off().on("click", function (e) {
      e.preventDefault();
      var a = (t(window).scrollTop() - t(window).height()) / 2;
      return a < 500 && (a = 500), a > 1500 && (a = 1500), t("html, body").animate({scrollTop: 0}, a), false;
    });
  }, contactForm: function () {
    t(".contact_form #send_message").on("click", function () {
      var e = t(".contact_form #name").val(), a = t(".contact_form #email").val(), n = t(".contact_form #tel").val(), i = t(".contact_form #subject").val(), o = t(".contact_form #message").val(), r = t(".contact_form .returnmessage").data("success");
      return t(".contact_form .returnmessage").empty(), "" === e || "" === a || "" === o ? t(".contact_form .empty_notice").slideDown(500).delay(2e3).slideUp(500) : t.post("modal/contact.html", {ajax_name: e, ajax_email: a, ajax_subject: i, ajax_message: o, ajax_tel: n}, function (e) {
        t(".contact_form .returnmessage").append(e), t(".contact_form .returnmessage span.contact_error").length ? t(".contact_form .returnmessage").slideDown(500).delay(2e3).slideUp(500) : (t(".contact_form .returnmessage").append("<span class='contact_success'>" + r + "</span>"), t(".contact_form .returnmessage").slideDown(500).delay(4e3).slideUp(500)), "" === e && t("#contact_form")[0].reset();
      }), false;
    });
  }, collection: function () {
    t(".fn_cs_collection").each(function () {
      var e = t(this), a = e.find(".item").length;
      setInterval(function () {
        for (var t = Math.floor(Math.random() * a), n = Math.floor(Math.random() * a); n === t;) n = Math.floor(Math.random() * a);
        var i = e.find(".item").eq(t), o = e.find(".item").eq(n), r = i.find("input").val(), s = o.find("input").val();
        i.addClass("ready"), o.addClass("ready"), setTimeout(function () {
          i.find("input").val(s), i.find(".abs_img").css({backgroundImage: "url(" + s + ")"}), o.find("input").val(r), o.find(".abs_img").css({backgroundImage: "url(" + r + ")"}), i.removeClass("ready"), o.removeClass("ready");
        }, 500);
      }, 2e3);
    });
  }, video: function () {
    t(".popup-youtube, .popup-vimeo").each(function () {
      t(this).magnificPopup({disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false});
    }), t(".popup-soundcloud").magnificPopup({type: "image", gallery: {enabled: true}});
  }, fn_cs_counter: function () {
    t(".fn_cs_counter").each(function () {
      var e = t(this);
      e.waypoint({handler: function () {
        e.hasClass("stop") || e.addClass("stop").countTo({refreshInterval: 50, formatter: function (t, e) {
          return t.toFixed(e.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, "");
        }});
      }, offset: "90%"});
    });
  }, headerFixer: function () {
    var e = t("body"), a = t(".header"), n = t(window).scrollTop();
    n > 10 ? a.addClass("active") : a.removeClass("active"), n > 300 ? e.addClass("totop-active") : e.removeClass("totop-active");
  }, slider: function () {
    t(".fn_cs_slider").each(function () {
      var e = t(this), a = e.find(".slider_top"), n = e.find(".slider_content"), o = 2, r = setInterval(function () {
        o++, o = i.sliderDo(a, n, o);
      }, 6e3);
      e.find(".slider_nav .prev").off().on("click", function () {
        return clearInterval(r), o--, o = i.sliderDo(a, n, o), r = setInterval(function () {
          o++, o = i.sliderDo(a, n, o);
        }, 6e3), false;
      }), e.find(".slider_nav .next").off().on("click", function () {
        return clearInterval(r), o++, o = i.sliderDo(a, n, o), r = setInterval(function () {
          o++, o = i.sliderDo(a, n, o);
        }, 6e3), false;
      }), e.find(".slider_top li").off().on("click", function () {
        var e = t(this).attr("class");
        if ("next" === e) o++; else {
          if ("prev" !== e) return false;
          o--;
        }
        return clearInterval(r), o = i.sliderDo(a, n, o), r = setInterval(function () {
          o++, o = i.sliderDo(a, n, o);
        }, 6e3), false;
      });
    });
  }, sliderDo: function (t, e, a) {
    var n = t.find("li").length;
    a > n && (a -= n);
    var i = a - 1, o = a - 2, r = a + 1, s = a + 2;
    return i > n && (i -= n), o > n && (o -= n), r > n && (r -= n), s > n && (s -= n), i < 1 && (i += n), o < 1 && (o += n), a < 1 && (a += n), r < 1 && (r += n), s < 1 && (s += n), t.find("li").removeClass("prev prev2 active next next2"), t.find('li[data-index="' + o + '"]').addClass("prev2"), t.find('li[data-index="' + i + '"]').addClass("prev"), t.find('li[data-index="' + a + '"]').addClass("active"), t.find('li[data-index="' + r + '"]').addClass("next"), t.find('li[data-index="' + s + '"]').addClass("next2"), a;
  }, totopFixer: function () {
    var e = t(".metaportal_fn_totop .totop_inner").width();
    t(".metaportal_fn_totop").css({height: e + "px"});
  }, imgToSVG: function () {
    t("img.fn__svg").each(function () {
      var e = t(this), a = e.attr("class"), n = e.attr("src");
      t.get(n, function (n) {
        var i = t(n).find("svg");
        void 0 !== a && (i = i.attr("class", a + " replaced-svg")), e.replaceWith(i);
      }, "xml");
    });
  }, BgImg: function () {
    t("*[data-bg-img]").each(function () {
      var e = t(this), a = e.attr("data-bg-img"), n = e.data("bg-img");
      void 0 !== a && e.css({backgroundImage: "url(" + n + ")"});
    });
  }};
  t(document).ready(function () {
    i.init(), setTimeout(function () {
      i.isotope(), i.isotopeCollection();
    }, 150);
  }), t(window).on("resize", function () {
    i.floww_calc_call(), i.resizeWalletAndLeftNav(), i.totopFixer(), i.isotope(), i.isotopeCollection(), i.roadmapSwiper();
  }), t(window).on("load", function () {
    i.preloader(), i.isotope(), i.isotopeCollection(), setTimeout(function () {
      i.isotope(), i.isotopeCollection();
    }, 200);
  }), t(window).on("scroll", function () {
    i.headerFixer();
  }), window.addEventListener("load", function () {
    i.preloader();
  });
}(jQuery);
var stars = [], fps = 50, numStars = 2e3;
function FrenifyRunStars() {
  "use strict";
  if (!$("#space").length) return false;
  screenH = $(".canvas_bg").outerHeight(), screenW = $(window).outerWidth(), (canvas = $("#space")).attr("height", screenH), canvas.attr("width", screenW), context = canvas[0].getContext("2d");
  for (var t = 0; t < numStars; t++) {
    var e = Math.round(Math.random() * screenW), a = Math.round(Math.random() * screenH), n = 1 + 2 * Math.random(), i = Math.random(), o = new Star(e, a, n, i);
    stars.push(o);
  }
  setInterval(animate, 1e3 / fps);
}
function animate() {
  "use strict";
  context.clearRect(0, 0, screenW, screenH), $.each(stars, function () {
    this.draw(context);
  });
}
function Star(t, e, a, n) {
  "use strict";
  this.x = parseInt(t), this.y = parseInt(e), this.length = parseInt(a), this.opacity = n, this.factor = 1, this.increment = 0.03 * Math.random();
}
$("document").ready(function () {
  "use strict";
  FrenifyRunStars();
}), Star.prototype.draw = function () {
  "use strict";
  context.rotate(1 * Math.PI / 10), context.save(), context.translate(this.x, this.y), this.opacity > 1 ? this.factor = -1 : this.opacity <= 0 && (this.factor = 1, this.x = Math.round(Math.random() * screenW), this.y = Math.round(Math.random() * screenH)), this.opacity += this.increment * this.factor, context.beginPath();
  for (var t = 5; t--;) context.lineTo(0, this.length), context.translate(0, this.length), context.rotate(2 * Math.PI / 10), context.lineTo(0, -this.length), context.translate(0, -this.length), context.rotate(-(6 * Math.PI / 10));
  context.lineTo(0, this.length), context.closePath(), context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")", context.shadowBlur = 5, context.shadowColor = "#ffff33", context.fill(), context.restore();
};
