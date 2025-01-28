/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function ($) {
  "use strict";

  var top_header = $(".parallax-content");
  top_header.css({ "background-position": "center center" });

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({
      "background-position": "center calc(50% + " + st * 0.5 + "px)",
    });
  });

  // Active page highlighting
  $(".fixed-side-navbar .nav-link").each(function () {
    if ($(this).attr("href") === window.location.pathname.split("/").pop()) {
      $(this).addClass("active");
    }
  });

  $(".tabgroup > div").hide();
  $(".tabgroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  var owl = $("#owl-testimonials");
  owl.owlCarousel({
    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000,
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
  });
});

// Add this to your JavaScript
$(document).ready(function() {
    $('.nav-toggle').click(function(e) {
        e.stopPropagation(); // Prevents click from bubbling up
        $('.nav-item').not($(this).parent()).removeClass('active');
        $(this).parent('.nav-item').toggleClass('active');
    });

    // Close submenu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.fixed-side-navbar').length) {
            $('.nav-item').removeClass('active');
        }
    });
});
