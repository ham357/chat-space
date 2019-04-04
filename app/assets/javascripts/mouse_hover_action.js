$(function() {
  var message_element;
  var message_menu_element;
  var current_user_id = $('.side-header__box__user-name').attr("data-current_user_id");

  function message_btn_build() {
    var html = '<ul class="message__upper-info__menu"><li class="message__upper-info__edit-message"><i class="fa fa-pencil-square-o"></i></li><li class="message__upper-info__destroy-message"><i class="fa fa-times"></i></li></ul>';
    message_element.append(html);
  }  
  $(document).on({
    "mouseenter": function(){
      if(!$('.InlineEdit-active')[0]) {
        var message_user_id = $(this).attr("data-user_id");
        if (current_user_id == message_user_id){
          message_element = $(this).find('.message__upper-info');
          message_btn_build();
        }
      }
    },
    "mouseleave": function(){
      message_menu_element = $(this).find('.message__upper-info__menu');
      message_menu_element.remove();
    }
  }, ".message");

});