$(".func-mod").hide();
$(".func-mod[mod-id='00']").show();

$(".func-switcher").click(function(){
	$('.sidenav').sidenav('close');
	$(".func-mod").hide();
	var key= $(this).attr("call-id");
	console.log(key);
	console.log($(".func-mod[mod-id='"+key+"']"));
	$(".func-mod[mod-id='"+key+"']").show();
});


// $("#view-code").click(function(){
// 	plus.webview.create('https://github.com/Fungus-Light');
// });