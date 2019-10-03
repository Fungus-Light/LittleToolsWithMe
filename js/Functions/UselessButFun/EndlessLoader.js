$("#endless-load-rotate").hide();
$("#endless-load-pg2").hide();

let percent=0;
let Timer=null;
let Speed=0;
$("#endless-load-content").text("下载进度"+percent+"%		下载速度："+Speed+"Kbps");

$("#endless-load-reload").click(function(){
	percent=0;
	Speed=0;
	$("#endless-load-content").text("下载进度"+percent+"%		下载速度："+Speed+"Kbps");
	$("#endless-load-bar").css('width',percent.toString()+"%");
	$("#endless-load-rotate").hide();
	$("#endless-load-pg1").show();
	$("#endless-load-pg2").hide();
	
	if(Timer!=null){
		clearInterval(Timer);
	}
	
	Timer=setInterval(function(){
		percent++;
		Speed=Math.floor(Math.random() * (256 - 3+1)) + 1;
		$("#endless-load-content").text("下载进度"+percent+"%		下载速度："+Speed+"Kbps");
		$("#endless-load-bar").css('width',percent.toString()+"%");
		if(percent==100){
			clearInterval(Timer);
			Speed=0;
			alert("下载失败，请重试");
			$("#endless-load-rotate").show();
			$("#endless-load-pg1").hide();
			$("#endless-load-pg2").show();
			$("#endless-load-content").text("联机检查错误中");
		}
		
	},1000)
})
