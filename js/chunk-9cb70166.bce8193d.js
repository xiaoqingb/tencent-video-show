(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cb70166"],{"16d8":function(t,i,n){},"2ea6":function(t,i,n){"use strict";var e=n("16d8"),a=n.n(e);a.a},"306d":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"list-title"}},[t._t("default")],2)},a=[],s={name:"ListTitle"},o=s,r=(n("8f0a"),n("2877")),c=Object(r["a"])(o,e,a,!1,null,"2ad817a9",null);i["a"]=c.exports},"45df":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"wrapper"},[n("swiper",{attrs:{id:"swiper-container",options:t.swiperOption}},[t._l(t.content,(function(i){return n("swiper-slide",{key:i.id,staticClass:"slide-item"},[n("img",{attrs:{src:i.img,alt:""}}),n("p",[t._v(t._s(i.summary))])])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},a=[],s={name:"BigSwiper",props:{content:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"fraction",autoplay:2e3,speed:150},autoplay:!0,loop:!0}}}},o=s,r=(n("fa25"),n("2877")),c=Object(r["a"])(o,e,a,!1,null,"4b0e8200",null);i["a"]=c.exports},"50ab":function(t,i,n){},"69a1":function(t,i,n){"use strict";var e=n("f477"),a=n.n(e);a.a},"8f0a":function(t,i,n){"use strict";var e=n("50ab"),a=n.n(e);a.a},a9d0:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"small-img"}},[n("ul",{staticClass:"video-list"},t._l(t.smallVideoList,(function(i){return n("li",{key:i.id,class:{video:!i.isBig&&!i.isLong,largeimg:i.isBig,longimg:i.isLong},on:{click:function(i){return t.play()}}},[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:i.img,alt:""}}),0!==i.score?n("span",{staticClass:"label"},[t._v(t._s(i.score))]):t._e()]),n("p",{staticClass:"video-title"},[t._v(" "+t._s(i.name)+" ")]),n("p",{staticClass:"video-decoration"},[t._v(" "+t._s(i.summary)+" ")])])})),0),n("div",{staticClass:"refresh"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"sync-alt"}}),n("span",[t._v("换一换")])],1)])},a=[],s={name:"SmallImg",props:{content:Array,refresh:Boolean},data:function(){return{smallVideoList:this.content}},created:function(){},methods:{play:function(){this.$router.push({name:"Play"})}}},o=s,r=(n("69a1"),n("2877")),c=Object(r["a"])(o,e,a,!1,null,"ddb21344",null);i["a"]=c.exports},b4be:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"comic"}},[n("div",{staticClass:"swiper"},[n("big-swiper",{attrs:{content:t.bigFrameContent}})],1),n("ul",t._l(t.videoList,(function(i,e){return n("li",{key:e},[n("list-title",[t._v(t._s(t.titleList[e]))]),n("small-img",{attrs:{content:t.videoList[e],refresh:t.whetherRefresh[e]}})],1)})),0)])},a=[],s=n("45df"),o=n("a9d0"),r=n("306d"),c={name:"Comic",components:{BigSwiper:s["a"],SmallImg:o["a"],ListTitle:r["a"]},data:function(){return{bigFrameContent:[{id:0,url:"http://puui.qpic.cn/tv/0/495751817_1080607/0",content:"【毒战生死线2】缉毒警枪林弹雨中血拼毒贩"},{id:1,url:"http://puui.qpic.cn/tv/0/491919038_1080607/0",content:"【受益人·会员免费】大鹏设局“英雄救美”"},{id:2,url:"http://puui.qpic.cn/tv/0/487815824_1080607/0",content:"【挑灯斩蛇录】有妖气！上古巨蛇重现人间"},{id:3,url:"http://puui.qpic.cn/tv/0/389928029_1080607/0",content:"【鬼吹灯之怒晴湘西】盗大墓！破僵尸！战巨兽！"},{id:4,url:"http://puui.qpic.cn/tv/0/481929242_1080607/0",content:"【大约在冬季】酸了！霍建华马思纯虐爱"}],videoList:[],titleList:["重磅热播","精挑好货，不可错过","首播影院❤️超燃大片刷不停","这些必看高分电影，你错过了几部？","92届奥斯卡提名揭晓，是时候回顾历届佳作了！"],whetherRefresh:[!0,!0,!1,!0,!0]}},methods:{getData:function(){var t=this;this.axios.get("https://www.shuipingguo.com/getvideo/?type=4").then((function(i){t.bigFrameContent=i.data.data[0].list,t.videoList[0]=i.data.data[1].list,t.videoList[1]=i.data.data[2].list,console.log(i)})).catch((function(t){console.log(t)}))}},created:function(){this.getData()}},l=c,u=(n("2ea6"),n("2877")),d=Object(u["a"])(l,e,a,!1,null,"881de702",null);i["default"]=d.exports},d930:function(t,i,n){},f477:function(t,i,n){},fa25:function(t,i,n){"use strict";var e=n("d930"),a=n.n(e);a.a}}]);
//# sourceMappingURL=chunk-9cb70166.bce8193d.js.map