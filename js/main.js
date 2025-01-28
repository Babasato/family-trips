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

// Selects all elements with class 'nav-link' and loops through each one
document.querySelectorAll('.nav-link').forEach(link => {
    // Adds a click event listener to each nav link
    link.addEventListener('click', function(e) {
        // Prevents the default immediate navigation behavior
        e.preventDefault();
        
        // Gets the destination URL from the href attribute
        const href = this.getAttribute('href');
        
        // Sets a timer for 300 milliseconds (0.3 seconds)
        setTimeout(() => {
            // After the delay, navigates to the stored URL
            window.location.href = href;
        }, 300); // 300ms is enough time for users to see the hover effect
    });
});


