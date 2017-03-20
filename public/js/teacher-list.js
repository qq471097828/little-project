require(["jquery", "template", "tool", "bootstrap","cookie"], function($, template,tool) {
	//loading的写法
	tool.modalShow();
	tool.addActive();
	//动态加载教师的列表请求数据
	$.ajax({
		type: "get",
		url: "/api/teacher",
		async: true,
		dataType: "json",
		success: function(data) {
			if(data.code == 200) {
				var obj = { lists: data.result };
				var html = template("teacherList", obj);
				$('#teachersInfo').html(html);

				//加载完成了为操作的列表开始绑定一系列操作
				$(".btn-handler").find("a :eq(0)").click(function() {
					var tcId = $(this).attr("data-tcid");
					$.ajax({
						type: "get",
						url: "/api/teacher/view",
						data: { tc_id: tcId },
						async: true,
						dataType: "json",
						success: function(data) {
							console.log(data.result);
							data.result.tc_hometown = data.result.tc_hometown.split("|").join(" ");
							var htmlStr = template("teacherInfo", data.result);
							$("#teachermsg").html(htmlStr);
							$("#teacherModal").modal()

						}
					});
				});
				//注销操作
				//启用时1注销是0
				$(".btn-handler").find("a :eq(2)").click(function() {
					var tcId = $(this).attr("data-tcId");
					var tcStatus = $(this).attr("data-status");
					var that = this;
					console.log(tcId)
					$.ajax({
						type: "post",
						url: "/api/teacher/handle",
						data: {
							tc_id: tcId,
							tc_status: tcStatus,
						},
						dataType: "json",
						success: function(data) {
							$(that).attr("data-status", data.result.tc_status);
							if(data.result.tc_status == 0) {
								$(that).html("注销");
							} else {
								$(that).html("启用");
							}
						}

					});
				});

			}
		}
	});

});