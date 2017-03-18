//模块化的处理的代码
require.config({
	baseUrl: '/public/',
	paths: {
		jquery: "assets/jquery/jquery.min",
		bootstrap: "assets/bootstrap/js/bootstrap.min",
		cookie: "assets/jquery-cookie/jquery.cookie",
		nprogress: "assets/nprogress/nprogress",
		echarts: "assets/echarts/echarts.min"
	}
});

require(["jquery", "cookie"], function($) {
	
	// 控制左侧导航菜单的显示和隐藏
	$('.navs ul').prev('a').on('click', function() {
		$(this).next().slideToggle();
	});
	// var pathname = location.pathname;
	// 没有登录的时候跳转到登录页面
	var flag = $.cookie('PHPSESSID');
	var Url = location.pathname;
	if(Url != "/index/login") {
		if(!flag) {
			location.href = '/index/login';
		}
	}
	
	
	//登陆成功获取数据的操作
	var obj = JSON.parse($.cookie('logInfo'));
	$('.aside .profile img').attr('src', obj.tc_avatar);
	$('.aside .profile h4').html(obj.tc_name);
})