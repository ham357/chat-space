$(function(){
  var message_id;
  var messagesField = $('.messages');

  function buildMESSAGE(message) {
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

  function update(){ 
    ($('.message')[0]) ? message_id = $('.message:last').data('id'):message_id = 0;

    $.ajax({ 
      url: location.href, 
      type: 'GET',
      data: { 
        message: { id: message_id } 
      },
      dataType: 'json' 
    })
    .done(function(data) {
      $.each(data, function(i, data){ 
        var html = buildMESSAGE(data); 
        messagesField.append(html);
        messagesField.animate({scrollTop:$(".messages")[0].scrollHeight});
      });

    })
    .fail(function() {
      alert('message_update error');
    })
    .always(function(){ 
    });
    }
  
    if (window.location.href.indexOf("messages") !== -1){
    setInterval(update, 5000);
    }

});