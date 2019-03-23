$(function() {
  function buildHTML(message) {
    var html = `<div class="message" data-id="${ message.id }">
  <div class="message__upper-info">
    <p class="message__upper-info__talker">
      ${ message.name }
    </p>
    <p class="message__upper-info__date">
      ${ message.created_at}
    </p>
  </div>`

  if (message.content!=""){
    html += `<div class="message__text">
    <p class="lower-message__content">
      ${ message.content }
    </p>
  </div>`
  }

  if (message.image!=null){
    html += `<div class="message__text">
    <img src='${ message.image }', class='lower-message__image'>
  </div>`
  }
  
    return html;

  }  

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var textField = $('.form__message');
    var imgField = $('#message_image');
    var messagesField = $('.messages');
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      if (Object.keys(data).length !== 0){
      var html = buildHTML(data);
      messagesField.append(html);
      $('#new_message').get(0).reset();
      messagesField.animate({scrollTop:$(".messages")[0].scrollHeight});
      }else{
        flashField = $('.flash-box');
        flashField.empty();
        var html = `<div class="alert">メッセージを入力してくだい</div>`
        flashField.append(html);
      }
    })
    .fail(function() {
      alert('message error');
    })
    .always(function(){
      $(".form__submit").removeAttr("disabled");
    });
  });

});