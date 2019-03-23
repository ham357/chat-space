$(function(){
  var message_id = $('.message:last').data('id');
  var pre_message_id = message_id;

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

  $(function(){
    setInterval(update, 5000);
  });
  function update(){ 
    var messagesField = $('.messages');

    if($('.message')[0]){ 
      message_id = $('.message:last').data('id');
    } else { 
      var message_id = 0 
    }

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
      });
      if (pre_message_id !== message_id){
        messagesField.animate({scrollTop:$(".messages")[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    })
    .always(function(){ 
      
      pre_message_id = message_id;

    });
    }
  
});