(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d966522"],{"306d":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"list-title"}},[t._t("default")],2)},l=[],c={name:"ListTitle"},a=c,p=(e("8f0a"),e("2877")),s=Object(p["a"])(a,n,l,!1,null,"2ad817a9",null);i["a"]=s.exports},"45df":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{id:"swiper-container",options:t.swiperOption}},[t._l(t.content,(function(i){return e("swiper-slide",{key:i.id,staticClass:"slide-item"},[e("img",{attrs:{src:i.img,alt:""}}),e("p",[t._v(t._s(i.summary))])])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},l=[],c={name:"BigSwiper",props:{content:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"fraction",autoplay:2e3,speed:150},autoplay:!0,loop:!0}}}},a=c,p=(e("fa25"),e("2877")),s=Object(p["a"])(a,n,l,!1,null,"4b0e8200",null);i["a"]=s.exports},"50ab":function(t,i,e){},"69a1":function(t,i,e){"use strict";var n=e("f477"),l=e.n(n);l.a},"8f0a":function(t,i,e){"use strict";var n=e("50ab"),l=e.n(n);l.a},a9d0:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"small-img"}},[e("ul",{staticClass:"video-list"},t._l(t.smallVideoList,(function(i){return e("li",{key:i.id,class:{video:!i.isBig&&!i.isLong,largeimg:i.isBig,longimg:i.isLong},on:{click:function(i){return t.play()}}},[e("div",{staticClass:"img-container"},[e("img",{attrs:{src:i.img,alt:""}}),0!==i.score?e("span",{staticClass:"label"},[t._v(t._s(i.score))]):t._e()]),e("p",{staticClass:"video-title"},[t._v(" "+t._s(i.name)+" ")]),e("p",{staticClass:"video-decoration"},[t._v(" "+t._s(i.summary)+" ")])])})),0),e("div",{staticClass:"refresh"},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"sync-alt"}}),e("span",[t._v("换一换")])],1)])},l=[],c={name:"SmallImg",props:{content:Array,refresh:Boolean},data:function(){return{smallVideoList:this.content}},created:function(){},methods:{play:function(){this.$router.push({name:"Play"})}}},a=c,p=(e("69a1"),e("2877")),s=Object(p["a"])(a,n,l,!1,null,"ddb21344",null);i["a"]=s.exports},d930:function(t,i,e){},e9d7:function(t,i,e){"use strict";var n=e("fcf0"),l=e.n(n);l.a},f36f:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"music"}},[e("div",{staticClass:"swiper"},[e("big-swiper",{attrs:{content:t.bigFrameContent}})],1),e("ul",t._l(t.videoList,(function(i,n){return e("li",{key:n},[e("list-title",[t._v(t._s(t.titleList[n]))]),e("small-img",{attrs:{content:t.videoList[n],refresh:t.whetherRefresh[n]}})],1)})),0)])},l=[],c=e("45df"),a=e("a9d0"),p=e("306d"),s={name:"Music",components:{BigSwiper:c["a"],SmallImg:a["a"],ListTitle:p["a"]},data:function(){return{bigFrameContent:[{id:0,url:"http://puui.qpic.cn/tv/0/495751817_1080607/0",content:"【毒战生死线2】缉毒警枪林弹雨中血拼毒贩"},{id:1,url:"http://puui.qpic.cn/tv/0/491919038_1080607/0",content:"【受益人·会员免费】大鹏设局“英雄救美”"},{id:2,url:"http://puui.qpic.cn/tv/0/487815824_1080607/0",content:"【挑灯斩蛇录】有妖气！上古巨蛇重现人间"},{id:3,url:"http://puui.qpic.cn/tv/0/389928029_1080607/0",content:"【鬼吹灯之怒晴湘西】盗大墓！破僵尸！战巨兽！"},{id:4,url:"http://puui.qpic.cn/tv/0/481929242_1080607/0",content:"【大约在冬季】酸了！霍建华马思纯虐爱"}],videoList:[[{id:0,url:"http://puui.qpic.cn/tv/0/496375489_498280/0",title:"挑灯斩蛇录·聊斋新番",content:"人妖合体！巨蛇疯狂吃人",labelType:3,label:7.9},{id:1,url:"http://puui.qpic.cn/tv/0/491817941_498280/0",title:"受益人·会员免费",content:"大鹏“杀妻骗保”猛追柳岩",labelType:3,label:7.8},{id:2,url:"http://puui.qpic.cn/tv/0/494214669_498280/0",title:"好医生",content:"良医救人分秒必争",labelType:3,label:8.4},{id:3,url:"http://puui.qpic.cn/tv/0/494214669_498280/0",title:"毒战生死线2·新片首播",content:"MC九局变缉毒警围剿毒贩",labelType:3,label:7.6},{id:4,url:"http://puui.qpic.cn/tv/0/496313699_498280/0",title:"大约在冬季",content:"霍建华撩妹神句学起来",labelType:3,label:7.8},{id:5,url:"http://puui.qpic.cn/tv/0/470816962_498280/0",title:"我和我的祖国",content:"假小子张子枫霸气打遍全班",labelType:3,label:7.7}],[{id:0,url:"http://puui.qpic.cn/vcover_hz_pic/0/eptnjnuul2vb0hx1575861891/0",title:"搭错车",content:"酒干倘卖无",labelType:3,label:8.8},{id:1,url:"http://puui.qpic.cn/vcover_hz_pic/0/29trop8s2ipr3es1557732793/0",title:"末代皇帝溥仪的传奇人生",content:"末代皇帝溥仪的传奇人生",labelType:3,label:9.4},{id:2,url:"http://puui.qpic.cn/vcover_hz_pic/0/c4b3sc3sz8wsruz1548831891/0",title:"英雄本色2",content:"周润发、张国荣再战江湖",labelType:3,label:8.9},{id:3,url:"http://puui.qpic.cn/vcover_hz_pic/0/3k0pikhlunqinuv1570507433/0",title:"哈利波特3阿兹卡班的囚徒",content:"“摄魂怪”初登场",labelType:3,label:9},{id:4,url:"http://puui.qpic.cn/vcover_hz_pic/0/noq1qof29bwdeil1557746775/0",title:"秋天的童话",content:"香港经典爱情片",labelType:3,label:8.9},{id:5,url:"http://puui.qpic.cn/vcover_hz_pic/0/x7dra43dggxthim1557801418/0",title:"虎!虎!虎!",content:"真实还原日均偷袭珍珠港",labelType:3,label:8.8},{id:6,url:"http://puui.qpic.cn/vcover_hz_pic/0/cndp6wr7p8j5r6jt1444742588.jpg/0",title:"纵横四海",content:"周润发张国荣组神偷CP",labelType:3,label:9.2},{id:7,url:"http://puui.qpic.cn/vcover_hz_pic/0/zwqybzsk6m1ahnxt1451464236.jpg/0",title:"背靠背，脸对脸",content:"深切问诊官场炎凉",labelType:3,label:9.4}],[{id:0,url:"http://puui.qpic.cn/tv/0/496328288_1080607/0",title:"法医秦明之血色婚礼",content:"婚礼现场新娘遭神秘血祭",isBig:!0,labelType:3,label:7.7},{id:1,url:"http://puui.qpic.cn/tv/0/495825670_498280/0",title:"鬼吹灯之怒晴湘西",content:"大墓竟藏暴虐金甲蜈蚣！",labelType:3,label:6.9},{id:2,url:"http://puui.qpic.cn/tv/0/496334023_498280/0",title:"触不可及·美版",content:"跨越种族跨越贫富的真友谊",labelType:3,label:8.8}],[{id:0,url:"http://puui.qpic.cn/vcover_vt_pic/0/fccs0pg7l7cr44d1548644262/220",title:"马语者",content:"人与马的感情交流",labelType:3,label:8.5,isLong:!0},{id:1,url:"http://puui.qpic.cn/vcover_vt_pic/0/b6tvuhykvjzhbtq1552300970/220",title:"独家新闻",content:"斯嘉丽化身记者查凶案",labelType:3,label:8.2,isLong:!0},{id:2,url:"http://puui.qpic.cn/vcover_vt_pic/0/0k89cbc5x5j5q4o1572321059/220",title:"超体",content:"女王斯嘉丽大战崔岷植",labelType:3,label:8.4,isLong:!0}]],titleList:["重磅热播","精挑好货，不可错过","首播影院❤️超燃大片刷不停","这些必看高分电影，你错过了几部？","92届奥斯卡提名揭晓，是时候回顾历届佳作了！"],whetherRefresh:[!0,!0,!1,!0,!0]}}},r=s,u=(e("e9d7"),e("2877")),o=Object(u["a"])(r,n,l,!1,null,"e159ef12",null);i["default"]=o.exports},f477:function(t,i,e){},fa25:function(t,i,e){"use strict";var n=e("d930"),l=e.n(n);l.a},fcf0:function(t,i,e){}}]);
//# sourceMappingURL=chunk-4d966522.575b8a7f.js.map