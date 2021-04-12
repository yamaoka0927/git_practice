$(function() {
  $('.layout_head_menu').on('click', function() {
    $(this).children('ul').toggle();
  });

  $('.layout_head_menu').children('ul').children().on('click', function() {
    var section = '[data-section="' + $(this).data('menu-section') + '"]';
    var position = Number($(section).offset().top) - 95;
    $('body,html').animate({
      scrollTop: position
    }, 500, 'swing');
  });
});