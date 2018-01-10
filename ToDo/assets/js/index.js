$("li").click(function(){
	$(this).css(".completed");
});


$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").click(function(){

});

$("#container").click(function(){

});

$("body").click(function(){

});