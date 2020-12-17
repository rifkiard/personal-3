
$(function () {
  var aboutOffset = $("#about").offset().top - 70,
    educationOffset = $("#education").offset().top - 70,
    portfolioOffset = $("#portfolio").offset().top - 70,
    contactOffset = $("#contact").offset().top - 70;

  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll < 1) {
      $(".navbar").removeClass("active");
    } else {
      $(".navbar").addClass("active");
    }
  });

  if ($(window).scrollTop() < 1) {
    $(".navbar").removeClass("active");
  } else {
    $(".navbar").addClass("active");
  }

  var $container = $(".portfolio-wrapper").isotope({
    itemSelector: ".portfolio-item",
    filter: "*",
    percentPosition: true,
    layoutMode: "masonry"
  });

  $container.imagesLoaded().progress(function () {
    $container.isotope("layout");
  });

  $(".portfolio-filter").on("click", "button", function () {
    var filter = $(this).data("filter");
    $container.isotope({
      filter: filter
    });

    $(this)
      .parent()
      .find("button")
      .removeClass("btn-primary").addClass("btn-outline-primary");
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");
  });

  $(".navbar-toggle").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".navbar-menu-outer").removeClass("active");
      $(".navbar-close").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".navbar-menu-outer").addClass("active");
      $(".navbar-close").addClass("active");
    }
  });

  $(".navbar-close").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".navbar-menu-outer").removeClass("active");
      $(".navbar-toggle").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".navbar-menu-outer").addClass("active");
      $(".navbar-toggle").addClass("active");
    }
  });

  $("[data-toggle='section']").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    if (target == "#") {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - 60,
        },
        500
      );
    }
  });

  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();

    $(".navbar-menu li a").removeClass("active");
    if (scroll < aboutOffset) {
      $(".navbar-menu li a[href='#']").addClass("active");
    } else if (scroll < educationOffset) {
      $(".navbar-menu li a[href='#about']").addClass("active");
    } else if (scroll < portfolioOffset) {
      $(".navbar-menu li a[href='#education']").addClass("active");
    } else if (scroll < contactOffset) {
      $(".navbar-menu li a[href='#portfolio']").addClass("active");
    } else {
      $(".navbar-menu li a[href='#contact']").addClass("active");
    }
  });

  if ($(window).scrollTop < aboutOffset) {
    $(".navbar-menu li a[href='#']").addClass("active");
  } else if ($(window).scrollTop < educationOffset) {
    $(".navbar-menu li a[href='#about']").addClass("active");
  } else if ($(window).scrollTop < portfolioOffset) {
    $(".navbar-menu li a[href='#education']").addClass("active");
  } else if ($(window).scrollTop < contactOffset) {
    $(".navbar-menu li a[href='#portfolio']").addClass("active");
  } else {
    $(".navbar-menu li a[href='#contact']").addClass("active");
  }
});

$(window).on("load", function () {
  AOS.init({
    once: true,
  });
});
