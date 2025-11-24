(function ($) {
  "use strict";

  // Subscription Modal Show
  var show = function () {
    $("#subscriptionModal").modal("show");
  };
  // Preloader
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow", function () {
      $(this).remove();
    });
    var timer = window.setTimeout(show, 15000);
  });

  // Background-images
  $("[data-background]").each(function () {
    $(this).css({
      "background-image": "url(" + $(this).data("background") + ")",
    });
  });

  //  Search Form Open
  $("#searchOpen").on("click", function () {
    $(".search-wrapper").toggleClass("open");
    $(".search-btn").toggleClass("search-close");
  });

  //  Cart Open
  $("#cartOpen").on("click", function () {
    $(".cart-wrapper").addClass("open");
  });
  $("#cartClose").on("click", function () {
    $(".cart-wrapper").removeClass("open");
  });

  //Hero Slider
  $(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 7500,
    lazyLoad: "progressive",
    speed: 100,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    prevArrow: "<button type='button' class='prevArrow'></button>",
    nextArrow: "<button type='button' class='nextArrow'></button>",
    dots: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".hero-slider").slickAnimation();

  // deal timer
  var dealYear = $("#simple-timer").attr("data-year");
  var dealMonth = $("#simple-timer").attr("data-month");
  var dealDay = $("#simple-timer").attr("data-day");
  var dealHour = $("#simple-timer").attr("data-hour");
  $("#simple-timer").syotimer({
    year: dealYear,
    month: dealMonth,
    day: dealDay,
    hour: dealHour,
    minute: 0,
  });

  // sale timer
  var saleYear = $("#sale-timer").attr("data-year");
  var saleMonth = $("#sale-timer").attr("data-month");
  var saleDay = $("#sale-timer").attr("data-day");
  var saleHour = $("#sale-timer").attr("data-hour");
  $("#sale-timer").syotimer({
    year: saleYear,
    month: saleMonth,
    day: saleDay,
    hour: saleHour,
    minute: 0,
  });

  // Count Down JS
  $("#comingSoon").syotimer({
    year: 2019,
    month: 5,
    day: 9,
    hour: 20,
    minute: 30,
  });

  // instafeed
  if ($("#instafeed").length !== 0) {
    var userId = $("#instafeed").attr("data-userId");
    var accessToken = $("#instafeed").attr("data-accessToken");
    var userFeed = new Instafeed({
      get: "user",
      userId: userId,
      resolution: "low_resolution",
      accessToken: accessToken,
      limit: 6,
      template:
        '<div class="col-lg-2 col-md-3 col-sm-4 col-6 px-0 mb-4"><div class="instagram-post mx-2"><img class="img-fluid w-100" src="{{image}}" alt="instagram-image"><ul class="list-inline text-center"><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-heart mr-2"></i>{{likes}}</a></li><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-comments mr-2"></i>{{comments}}</a></li></ul></div></div>',
    });
    userFeed.run();
  }

  // image zoom
  $(".image-zoom")
    .wrap("<span></span>")
    .css("display", "block")
    .parent()
    .zoom({
      on: "click",
      url: $(this).find("img").attr("data-zoom"),
    });

  // touchspin
  $("input[name='quantity']").TouchSpin({
    verticalbuttons: true,
    initval: 1,
    verticalupclass: "angle-up",
    verticaldownclass: "angle-down",
  });
  $("input[name='cart-quantity']").TouchSpin({
    initval: 40,
  });

  // nice select
  $("select").niceSelect();

  // checked
  $(".label").click(function () {
    $(this).find(".size-checkbox").toggleClass("checked");
  });

  // bootstrap slider range
  $(".range-track").slider({});
  $(".range-track").on("slide", function (slideEvt) {
    $(".value").text("$" + slideEvt.value[0] + " - " + "$" + slideEvt.value[1]);
  });

  // tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // sticky-menu
  var navbar = $("#navbar");
  var mainWrapper = $(".main-wrapper");
  var sticky = navbar.offset().top;
  $(window).scroll(function () {
    if ($(document).scrollTop() >= sticky) {
      navbar.addClass("sticky");
      mainWrapper.addClass("main-wrapper-section");
    } else {
      navbar.removeClass("sticky");
      mainWrapper.removeClass("main-wrapper-section");
    }
  });
})(jQuery);

let hideTimeout;

// Buttons
const nextBtn = document.querySelector(".swiper-button-next-cust");
const prevBtn = document.querySelector(".swiper-button-prev-cust");

// Function to show buttons
function showButtons() {
  nextBtn.classList.remove("swiper-button-hidden");
  prevBtn.classList.remove("swiper-button-hidden");

  // Reset timer
  clearTimeout(hideTimeout);

  // Hide after 2 seconds of inactivity
  hideTimeout = setTimeout(() => {
    nextBtn.classList.add("swiper-button-hidden");
    prevBtn.classList.add("swiper-button-hidden");
  }, 2000);
}

// Detect user activity
document.addEventListener("mousemove", showButtons);
document.addEventListener("touchmove", showButtons);
document.addEventListener("wheel", showButtons);

// Initially hide after load
hideTimeout = setTimeout(() => {
  nextBtn.classList.add("swiper-button-hidden");
  prevBtn.classList.add("swiper-button-hidden");
}, 2000);
