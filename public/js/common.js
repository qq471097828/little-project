//模块化的处理的代码
require.config({
	baseUrl: '/public/',
	paths: {
		jquery: "assets/jquery/jquery.min",
		bootstrap: "assets/bootstrap/js/bootstrap.min",
		cookie: "assets/jquery-cookie/jquery.cookie",
		nprogress: "assets/nprogress/nprogress",
		echarts: "assets/echarts/echarts.min",
		template : "assets/artTemplate/template",
		tool : "js/tool"
	},
	shim : {
		bootstrap : {
			deps : ['jquery']
		}
	}
});

require(["jquery", "template","tool","cookie"], function($,template,tool) {
	// 控制左侧导航菜单的显示和隐藏
	$('.navs ul').prev('a').on('click', function() {
		$(this).next().slideToggle();
	});
	// 没有登录的时候跳转到登录页面
	var flag = $.cookie('PHPSESSID');
	var Url = location.pathname;
	if(Url != "/index/login") {
		if(!flag) {
			location.href = '/index/login';
		}
	}
	
	//利用模板字符串的方法来解析页面的内容
	if($.cookie('logInfo')){
		var obj = JSON.parse($.cookie('logInfo'));
		var templateStr = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
		var rander = template.compile(templateStr);
		var html = rander(obj);
		$(".aside .profile").html(html);
	}
})