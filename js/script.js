//Mobile menu
$('.header__menu').click(function() {
  $(this).toggleClass('header__menu--close');
  $('.menu').slideToggle();
})
