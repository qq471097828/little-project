require(["jquery", "cookie"], function($) {
	console.log("login")
	$('#loginForm').submit(function() {
		var formData = $(this).serialize();
		//后台交互数据进行数据交换
		$.ajax({
			type: 'post',
			// url : 'http://api.studyit.com/login'
			url: '/api/login',
			data: formData,
			dataType: 'json',
			success: function(data) {
				if(data.code == 200) {
					// console.log(data.result);
					var logInfo = JSON.stringify(data.result);
					// 实现cookie数据的跨页面共享
					$.cookie('logInfo', logInfo, { path: '/' });
					location.href = '/index/index';
				}

			},
			error: function(data) {
				alert("用户名密码错误");
				console.log(data.responseText);
			}
		});

		return false; //阻止默认行为
	});
})