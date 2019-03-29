$(function() {
  var destroy_btn_element = $('.message__upper-info__destroy-message');
  destroy_btn_element.on('click', function(e) {
    var deleteConfirm = confirm('削除してよろしいでしょうか？');
    if(deleteConfirm == true) {
      e.preventDefault();
      var message_element = $(this).parents('.message');
      var message_id = message_element.attr("data-id");
      var url = location.href + "/" + message_id;
      console.log(url);

    $.ajax({
      url: url,
      type: "POST",
      data: {'id': message_id,
      '_method': 'DELETE'} ,
      dataType: 'json'
    })
    .done(function(data) {
      message_element.remove();
    })
    
    .fail(function() {
      alert('message destroy error');
    })
  }
  });
});