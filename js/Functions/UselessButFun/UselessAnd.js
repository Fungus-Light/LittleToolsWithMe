let uselesscount=0;
//$("#useless-and-content").text("你已经点了"+uselesscount+"次");

$("#useless-and-click").click(function(){
	uselesscount++;
	$("#useless-and-content").text("你已经点了"+uselesscount+"次");
	if(uselesscount==10){
		alert("你获得了成就————轻而易举");
		AddAchievement("轻而易举");
	}else if(uselesscount==50){
		alert("你获得了成就————有点无聊");
		AddAchievement("有点无聊");
	}else if(uselesscount==100){
		alert("你获得了成就————还挺执着");
		AddAchievement("还挺执着");
	}else if(uselesscount==200){
		alert("你获得了成就————略表敬佩");
		AddAchievement("略表敬佩");
	}else if(uselesscount==500){
		alert("你获得了成就————渐入佳境");
		AddAchievement("渐入佳境");
	}else if(uselesscount==1000){
		alert("你获得了成就————登堂入室");
		AddAchievement("登堂入室");
	}else if(uselesscount==2000){
		alert("你获得了成就————开宗立派");
		AddAchievement("开宗立派");
	}else if(uselesscount==5000){
		alert("你获得了成就————独孤求败");
		AddAchievement("独孤求败");
	}else if(uselesscount==10000){
		alert("你获得了成就————超凡入圣");
		AddAchievement("超凡入圣");
	}else if(uselesscount==20000){
		alert("你获得了成就————羽化升仙");
		AddAchievement("羽化升仙");
	}else if(uselesscount==50000){
		alert("你获得了成就————玉皇大帝");
		AddAchievement("玉皇大帝");
	}else if(uselesscount==100000){
		alert("你获得了成就————元始天尊，没有更多成就了");
		AddAchievement("原始天尊");
	}
	
});

function AddAchievement(_message){
	let temp=document.createElement("h5");
	temp.innerText=_message;
	temp.style.setProperty('color','#D84315');
	document.getElementById("useless-android").appendChild(temp);
}