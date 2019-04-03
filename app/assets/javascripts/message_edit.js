$(function() {
  var InlineEdit;
  var values = {
    id: "",
    name: "",
    created_at: "",
    content: "",
    image:""
  }
  
  function reBuild(message) {
    var html = `<div class="message__upper-info">
    <p class="message__upper-info__talker">
      ${ message.name }
    </p>
    <p class="message__upper-info__date">
      ${ message.created_at}
    </p>
  </div><div class="message__text">`

  if (message.content!=""){
    html += `<p class="lower-message__content">${ message.content }</p>`
  }

  if (message.image!=null){
    html += `<img src='${ message.image }', class='lower-message__image'>`
  }

  html += '</div>'

  InlineEdit.removeClass('InlineEdit-active').empty().append(html);
  }  
  $(document).on("click", ".message__InlineEdit-cancel", function () {
    reBuild(values);  
  });

  $(document).on("click", ".message__InlineEdit-save", function () {

    var url = location.href + "/" + values.id;
    var input = InlineEdit.find('input').val();

      $.ajax({
        url: url,
        type: "POST",
        data: {'id': values.id,
        'content': input,
        '_method': 'PATCH'} ,
        dataType: 'json'
      })
      .done(function(data) {
        var html = reBuild(data);
      })
      
      .fail(function() {
        alert('message edit error');
      })
    
  });

  $('.message__upper-info__edit-message').on('click', function() {
    InlineEdit = $(this).parents('.message');
    values = {
      id: InlineEdit.attr("data-id"),
      name: InlineEdit.find('.message__upper-info__talker').text(),
      created_at: InlineEdit.find('.message__upper-info__date').text(),
      content: InlineEdit.find('.lower-message__content').text(),
      image: InlineEdit.find('.lower-message__image').attr("src")
    }
    var input_element = '<input class="message__InlineEdit-input" type="text" value="'+values.content+'">';
      var button_element = '<ul class="message__InlineEdit-buttons"><li class="message__InlineEdit-cancel"><i class="fa  fa-times"></i></li><li class="message__InlineEdit-save"><i class="fa fa-check-circle"></i></li></ul>';
      InlineEdit.addClass('InlineEdit-active').empty().append(input_element).append(button_element).find('input').focus();
  });
});