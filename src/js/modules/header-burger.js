$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".header,.menu,.burger,.btn").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.menu__link,.logo,.btn').click(function (event) {
    $(".header,.menu,.burger,.btn").removeClass('active');
    $('body').removeClass('lock');
  });
});
