define(['jquery'], function($) {
	$('#login-form').on('submit', function() {
    //这里的this是form原生对象,对form进行包装，才可以调用jq的方法
    // console.log($(this).serialize());
    // console.log($(this).serializeArray());

    $.ajax({
      url: '/v6/login',
      type: 'post',
      data: $(this).serialize(),
      success: function(data) {
        if(data.code === 200){
          location.href = '/'
        }
      },
      error: function(){
        alert(arguments[2]);
      }
    });
      //阻止表单默认提交
    return false;
  })

});
