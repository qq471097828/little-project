require(["jquery","template","cookie","bootstrap"],function($,template){
	//动态加载教师的列表
	$.ajax({
		type:"get",
		url:"/api/teacher",
		async:true,
		dataType : "json",
		success : function(data){
			if(data.code == 200) {
				var obj = {lists : data.result};
				var html = template("teacherList", obj);
				$('#teacherInfo').html(html);
				
				//加载完成了为操作的列表开始绑定一系列操作
			}
		}
	});
});
