$(function(){
  var search_list = $("#user-search-result");
  var preWord = "";

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${ user.name }</p>
    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
  </div>`
    
      search_list.append(html);
   }

   function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${ msg }</p>
    </div>`
    
    search_list.append(html);
  }

   $(document).on("click", ".chat-group-user__btn--add", function () {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
    <input name='group[user_ids][]' type='hidden' value='${ $(this).attr("data-user-id")}'>
    <p class='chat-group-user__name'>${ $(this).attr("data-user-name") }</p>
    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
  </div>`

    $("#add-chat-member").append(html);
    $(this).parent().remove();

   });

   $(document).on("click", ".js-remove-btn", function () {

   $(this).parent().remove();

  });

    $('#user-search-field').on("keyup", function () {
      var input = $("#user-search-field").val();
      var Word = input;
      
      if (Word !== preWord){
        $.ajax({
          type: 'GET',
          url: '/users',
          data: { keyword: input },
          dataType: 'json'
        })
    
        .done(function(users){
          $("#user-search-result").empty();
          var search_target = $('.chat-group-user__name').text();
          if (users.length !== 0){
            if(input !== ""){
              users.forEach(function(user,index){
                if (search_target.indexOf(user.name) == -1){
                  appendUser(user);
                }else if(index == users.length - 1){
                  appendErrMsgToHTML("一致するユーザーはいません");
                }
              });
            }
          }
          else{
            appendErrMsgToHTML("一致するユーザーはいません");
          }
        })
        .fail(function(){
          alert('ユーザー検索に失敗しました');
        })
      }
      preWord = Word;
    });
  });