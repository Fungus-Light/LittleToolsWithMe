let jrrpCount=1;

$("#roll-it").click(function(){
	let content=$("#roll-content").val();
	//console.log(content);
	if(content.length<=0){
		alert("没有理由的话请打一个空格哦！")
	}else{
		let result=Math.floor(Math.random() * (100 - 1+1)) + 1;
		//console.log(result);
		//$("#dice-it-result").text("因为"+content+",你roll出了"+result);
		alert("因为"+content+",你roll出了"+result);
	}
});

$("#dice-it-btn").click(function(){
	let mod=$("#dice-it-mod").val();
	console.log(mod);
	if(mod<=0){
		alert("请选择模块哦！！");
	}else{
		let result=Math.floor(Math.random() * (100 - 1+1)) + 1;
		let oldresult=plus.storage.getItem('jrrp');
		if(CheckIfNewDay()==true||oldresult==null){
			jrrpCount=1;
		}else{
			jrrpCount=0;
		}
		
		if(jrrpCount==1){
			alert("你今天的人品值是："+result);
			plus.storage.setItem('jrrp',result.toString());
			jrrpCount==0;
		}else{
			alert("你今天的人品值是："+oldresult);
		}
		//alert("你今天的人品值是："+result);
	}
});

function CheckIfNewDay(){
		let oldday=plus.storage.getItem('jrrp-day');
		console.log(oldday);
		let today=new Date();
		let currentDay=today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
		if(oldday==null||oldday!=currentDay){
			plus.storage.setItem('jrrp-day',currentDay.toString());
			return true;
		}else{
			return false;
		}
}
