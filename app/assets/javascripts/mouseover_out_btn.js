$(function() {
  var message_btn;
  $('.message').mouseover(function() {
    message_btn = $(this).find('.message__upper-info__menu')
    message_btn.show();
    message_btn.css("display", "flex")
  })
  $('.message').mouseout(function() {
    message_btn = $(this).find('.message__upper-info__menu')
    message_btn.hide();
  })
});