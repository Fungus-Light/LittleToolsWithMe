let questionLine = new Array();
let answerLine = new Array();

let current=0;

//$("#game-bar").hide();
$("#new-game").click(function() {
	window.location.reload();
});

//start game
$("#start-game").click(function() {
	let level = parseInt(document.getElementById("level-select").value);
	console.log(level);
	switch (level) {
		default:
		case 0:
			alert("请选择难度！！！");
			return;
		case 1:
		case 2:
		case 3:
		case 4:
			GenerateGame(level);
			$("#select-bar").hide();
			$("#game-bar").show();
	}
});

function GenerateGame(level) {
	switch (level) {
		case 1:
			SetStaticInfo("游戏难度：⑨", "- 20以内四则运算", "答题区写本题答案");
			GenerateQuestion(1, 0);
			GameGo(15);
			break;
		case 2:
			SetStaticInfo("游戏难度：⑨⑨", "- 20以内四则运算", "答题区写上1题答案");
			GenerateQuestion(1, 1);
			GameGo(15);
			break;
		case 3:
			SetStaticInfo("游戏难度：⑨⑨⑨", "- 50以内四则运算", "答题区写上2题答案");
			GenerateQuestion(2, 2);
			GameGo(15);
			break;
		case 4:
			SetStaticInfo("游戏难度：⑨⑨⑨⑨", "- 50以内四则运算", "答题区写上3题答案");
			GenerateQuestion(2, 3);
			GameGo(15);
			break;
		default:
			alert("传入了非法的参数");
			break;
	}
}

function SetStaticInfo(levelmessage, questiontip, answertip) {
	$("#game-level").text(levelmessage);
	$("#question-tip").text(questiontip);
	$("#answer-tip").text(answertip)
}

function GenerateQuestion(questionlevel, offset) {
	questionLine = new Array();
	answerLine = new Array();
	let tempquestionline = new Array();
	let tempanswerline = new Array();
	for (let i = 0; i < 30; i++) {
		let tempQuestion = {
			num1: 0,
			num2: 0,
			op: "+"
		};
		let tempAnswer={
			iswait:false,
			V:0
		}
		if(questionlevel==1){
			tempQuestion.num1=Math.floor(Math.random() * (20 - 1+1))+1;
			tempQuestion.num2=Math.floor(Math.random() * (20 - 1+1))+1;
		}else if(questionlevel==2){
			tempQuestion.num1=Math.floor(Math.random() * (50 - 1+1))+1;
			tempQuestion.num2=Math.floor(Math.random() * (50 - 1+1))+1;
		}else{
			alert("传入非法参数");
		}
		let tempop=Math.floor(Math.random() * (3 - 0+1));
		tempAnswer.iswait=false;
		
		switch(tempop){
			case 0://+
				tempQuestion.op="+";
				tempAnswer.V=tempQuestion.num1+tempQuestion.num2;
				break;
			case 1://-
				tempQuestion.op="-";
				if(tempQuestion.num1<tempQuestion.num2){
					let _t=tempQuestion.num1;
					tempQuestion.num1=tempQuestion.num2;
					tempQuestion.num2=_t;
				}
				tempAnswer.V=tempQuestion.num1-tempQuestion.num2;
				break;
			case 2://*
				tempQuestion.op="×";
				tempAnswer.V=tempQuestion.num1*tempQuestion.num2;
				break;
			case 3:// /
				tempQuestion.op="÷";
				tempAnswer.V=tempQuestion.num1*tempQuestion.num2;
				let t_v=tempQuestion.num1;
				tempQuestion.num1=tempAnswer.V;
				tempAnswer.V=t_v;
				break;
		}
		tempquestionline.push(tempQuestion);
		tempanswerline.push(tempAnswer);
	}
	
	if(offset>=0){
		if(offset>0){
			for(let i=0;i<offset;i++){
				let waitAnswer="wait";
				answerLine.push(waitAnswer);
			}
			
			for(let i=0;i<30;i++){
				questionLine.push(tempquestionline[i]);
				answerLine.push(tempanswerline[i]);
			}
			
			for(let i=0;i<offset;i++){
				questionLine.push(tempquestionline[i]);
			}
			
		}else{
			questionLine=tempquestionline;
			answerLine=tempanswerline;
		}
	}else{
		alert("传入非法参数");
	}
	
	let end="$";
	questionLine.push(end);
	answerLine.push(end);
	
	//console.log(questionLine);
	//console.log(answerLine);
}

function GameGo(interval){
	let pretime=5;
	$("#time-left").text("距离开始还剩："+pretime+"s");
	$("#question").text("游戏即将开始");
	let preTimer=setInterval(function(){
		pretime--;
		$("#time-left").text("距离开始还剩："+pretime+"s");
		if(pretime<=0){
			clearInterval(preTimer);
			GameLoop(interval);
		}
	},1000);
}

function GameLoop(interval){
	console.log("real game");
	// for(let ){
		
	// }
}

function GoNext(){
	
}
