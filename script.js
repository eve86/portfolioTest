$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".header-in").addClass("header-in-add");
    $(".header-logo").addClass("header-logo-add");
    $(".header-list-item").addClass("header-list-item-add");
  } else {
    $(".header-in").removeClass("header-in-add");
    $(".header-logo").removeClass("header-logo-add");
    $(".header-list-item").removeClass("header-list-item-add");
  }
});

$(window).scroll(function () {
  $('.about-left').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('about-left-add');
    }
  });
});

$(window).scroll(function () {
  $('.about-right').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('about-rigth-add');
    }
  });
});

$(window).scroll(function () {
  $('.works-item').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('works-item-add');
    }
  });
});
