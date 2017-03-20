define(["jquery"],function(){
	var tool = {
		modalShow : function(){
			$(document).ajaxStart(function(){
				$(".overlay").show();
				console.log(1)
			});
			$(document).ajaxStop(function(){
				$(".overlay").hide();
				console.log(2)
			});
		},
		addActive : function(){
			var pathname = location.pathname;
			$(".navs a[href = '"+pathname+"']").addClass("active");
		}
	};
	return tool;
	
})