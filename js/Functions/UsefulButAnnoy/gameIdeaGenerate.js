//你可以修改这个文件来添加更多内容

let amount=[
    '',
    '一个',
    '几个',
    '一群',
    '很少几个',
    '为数不多的',
    '超级多的',
    '难以计数的',
    '少得可怜的'
]

let importance=[
    '画面',
    '音乐',
    '玩法',
    '氪金',
    '故事',
    '打击感',
    '思想深度',
    '趣味性'
]

let mood=[
    '悲伤的',
    '轻松的',
    '愉快的',
    '滑稽的',
    '无聊的',
    '出人意料的',
    '大快人心的',
    '令人困惑的',
    '十分欢乐的',
    '嘲讽意味的',
    '相当枯燥的',
    '不可名状的',
    '极度压抑的',
    '肾上腺素狂增的',
    '令人脸红的',
    '令人感动落泪的'
]

let type=[
    '射击游戏',
    '动作游戏',
    '解密游戏',
    '美少女游戏',
    '音乐游戏',
    '角色扮演游戏',
    '赛车游戏',
    '策略游戏',
    '平台跳跃游戏',
    '抽卡游戏',
    '休闲游戏',
    '一刀九十九级游戏',
    '棋牌游戏',
    '智力游戏',
    '弱智游戏',
    '体感游戏',
    '开放世界游戏'
]

let character=[
    '学生',
    '科学家',
    '老人',
    '冒险家',
    '商人',
    '摇滚巨星',
    '赛车手',
    '无名小卒',
    '将军',
    '大兵',
    '外星人',
    '动物',
    '猫',
    '清洁工',
    '狙击手',
    '勇者',
    '恶龙',
    '俄罗斯套娃',
    '机器人',
    '杂鱼',
    '精英怪',
    '大BOSS',
    '网络主播',
    '带明星',
    '狗粉丝',
    '奶奶'
]

let character_description=[
    '',
    '乐观的',
    '消极的',
    '睿智的',
    '疯狂的',
    '极度谨慎的',
    '消极怠工的',
    '深思熟虑的',
    '十分美丽的',
    '引人注目的'
]

let theme=[
    '友情',
    '权力斗争',
    '爱情',
    '单相思',
    '商场风云',
    '科技',
    '职场沉浮',
    '反战',
    '政治宣传',
    '纯粹的爱',
    '宗教',
    '终极真理',
    '自我意识',
    '家庭',
    '蒸汽朋克',
    '赛博朋克',
    '纯粹的逗乐',
    '科技爆炸',
    '太空歌剧',
    '历史风云'
]

let art=[
    '像素风',
    '波普艺术',
    '体素风格',
    '低多边形',
    'AAA级画质',
    '卡通渲染',
    '水墨画',
    '美漫画风',
    '3渲2'
]

let items=[
    '卷轴',
    '定情信物',
    '上古神器',
    '魔法书',
    '手枪',
    '食物',
    '未来战甲',
    '仙女棒',
    '薯片',
    '历史遗迹',
    '儿童玩具',
    '手机',
    '计算机',
    '汽车',
    '宇宙飞船',
    'UFO',
    '蔬菜',
    '女士内衣',
    '发光的石头'
]

let place=[
    '古代王国',
    '中世纪欧洲',
    '上古地球',
    '未来城市',
    '末世废土',
    '八十年代东海岸',
    '现代城市',
    '银河系',
    '火星',
    '外太空',
    '古代中国',
    '仙境福地',
    '闹鬼城堡',
    '童话世界',
    '梦境中',
    '普通商品房',
    '大别墅'
]

let actions=[
    '运送',
    '保护',
    '学习',
    '研究',
    '攻击',
    '摧毁',
    '追求',
    '思考',
    '占领',
    '拳打',
    '探索'
]

function GetRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function SetContent(content){
    document.getElementById("gen-content").innerText=content;
}

function GetTheme(){
    return theme[GetRandom(0,theme.length-1)]
}

function GetCharactor(){
    let num=amount[GetRandom(0,amount.length-1)];
    let cha=character[GetRandom(0,character.length-1)];
    let des=character_description[GetRandom(0,character_description.length-1)];
    return num+des+cha;
}

function GetItem(){
    let num=amount[GetRandom(0,amount.length-1)];
    let ite=items[GetRandom(0,items.length-1)];
    return num+ite; 
}

function GetGoal(){
    let act=actions[GetRandom(0,actions.length-1)];
    let select=GetRandom(0,1);
    if(select==0){
        return act+GetItem();
    }else{
        return act+GetCharactor();
    }
}

function GetPlace(){
    return place[GetRandom(0,place.length-1)];
}

function GetMood(){
    return mood[GetRandom(0,mood.length-1)];
}

function GetType(){
    return type[GetRandom(0,type.length-1)];
}

function GetArt(){
    return art[GetRandom(0,art.length-1)];
}

function GetImportance(){
    return importance[GetRandom(0,importance.length-1)];
}

function Generate(){
    let template=GetRandom(0,3);
    switch(template){
        case 0:
            return '一款发生在'+GetPlace()+'的'+GetMood()+GetType()+'，主题是'+GetTheme()+'，你将要演扮演'+GetCharactor()+GetGoal();
        case 1:
            return '一款拥有'+GetArt()+'画面的'+GetType()+'，为了展现'+GetTheme()+'，以及传达了'+GetMood()+'的情绪';
        case 2:
            return '发生在'+GetPlace()+'，'+GetCharactor()+GetGoal()+'的讲述关于'+GetTheme()+'的'+GetType();
        case 3:
            return '一款注重于'+GetImportance()+'的'+GetMood()+GetType()+'，游戏的主题是'+GetTheme();
        default:
            return '一款发生在'+GetPlace()+'的'+GetMood()+GetType()+'，主题是'+GetTheme()+'，你将要演扮演'+GetCharactor()+GetGoal();
    }
}

$('#idea-gen-click').click(function(){
	GeneratorClick()
})

function GeneratorClick(){
    SetContent(Generate());
}