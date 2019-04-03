$(function() {
  $('.message__upper-info__edit-message').on('click', function(e) {
    // var message_element = $(this).parents('.message');
    // var message_id = message_element.attr("data-id");
    // var url = location.href + "/" + message_id;
    // console.log(url);   
    var InlineEdit = $(this).parents('.message');
    var input_element = '<input class="message__InlineEdit-input" type="text" value="">';
      var button_element = '<ul class="message__InlineEdit-buttons"><li class="message__InlineEdit-cancel"><i class="fa  fa-times"></i></li><li class="message__InlineEdit-save"><i class="fa fa-check-circle"></i></li></ul>'; //Save/Cancel floating buttons
      InlineEdit.addClass('InlineEdit-active').empty().append(input_element).append(button_element).find('input').focus();


    // $.ajax({
    //   url: url,
    //   type: "POST",
    //   data: {'id': message_id,'content': content,
    //   '_method': 'patch'} ,
    //   dataType: 'json'
    // })
    // .done(function(data) {
    //   message_element.remove();
    // })
    
    // .fail(function() {
    //   alert('message destroy error');
    // })
  // }
  });
});