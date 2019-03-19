$(function(){
  // var search_list = $(".listview.js-lazy-load-images");
  
    $('#user-search-field').on("keyup", function () {
      var input = $("#user-search-field").val();
      console.log(input)
  
      // $.ajax({
      //   type: 'GET',
      //   url: '/products/search',
      //   data: { keyword: input },
      //   dataType: 'json'
      // })
  
      // .done(function(products){
      //   $(".listview.js-lazy-load-images").empty();
      //   if (products.length !== 0){
      //     products.forEach(function(product){
      //       appendProduct(product);
      //     });
      //   }
      //   else{
      //     appendErrMsgToHTML("一致する映画はありません");
      //   }
      // })
      // .fail(function(){
      //   alert('映画検索に失敗しました');
      // })
    });
  });