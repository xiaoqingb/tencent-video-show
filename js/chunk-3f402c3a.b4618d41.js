(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f402c3a"],{"02ae":function(t,i,n){"use strict";var e=n("fb33"),a=n.n(e);a.a},"306d":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"list-title"}},[t._t("default")],2)},a=[],s={name:"ListTitle"},r=s,o=(n("8f0a"),n("2877")),c=Object(o["a"])(r,e,a,!1,null,"2ad817a9",null);i["a"]=c.exports},"45df":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"wrapper"},[n("swiper",{attrs:{id:"swiper-container",options:t.swiperOption}},[t._l(t.content,(function(i){return n("swiper-slide",{key:i.id,staticClass:"slide-item"},[n("img",{attrs:{src:i.img,alt:""}}),n("p",[t._v(t._s(i.summary))])])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},a=[],s={name:"BigSwiper",props:{content:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"fraction",autoplay:2e3,speed:150},autoplay:!0,loop:!0}}}},r=s,o=(n("fa25"),n("2877")),c=Object(o["a"])(r,e,a,!1,null,"4b0e8200",null);i["a"]=c.exports},"50ab":function(t,i,n){},"69a1":function(t,i,n){"use strict";var e=n("f477"),a=n.n(e);a.a},"8f0a":function(t,i,n){"use strict";var e=n("50ab"),a=n.n(e);a.a},"97be":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"tv"}},[n("div",{staticClass:"swiper"},[n("big-swiper",{attrs:{content:t.bigFrameContent}})],1),n("ul",t._l(t.videoList,(function(i,e){return n("li",{key:e},[n("list-title",[t._v(t._s(t.titleList[e]))]),n("small-img",{attrs:{content:t.videoList[e],refresh:t.whetherRefresh[e]}})],1)})),0)])},a=[],s=n("45df"),r=n("a9d0"),o=n("306d"),c={name:"TV",components:{BigSwiper:s["a"],SmallImg:r["a"],ListTitle:o["a"]},data:function(){return{bigFrameContent:[{id:0,url:"http://puui.qpic.cn/tv/0/496599893_1080607/0",content:"【将夜2·独播】过年相亲！请照这个标准来"},{id:1,url:"http://puui.qpic.cn/tv/0/494787305_1080607/0",content:"【新世界·首播】孙红雷结识民国五美闯北平"},{id:2,url:"http://puui.qpic.cn/tv/0/496424457_1080607/0",content:"【蓬莱间·更新】这是严肃的诊疗现场！真的"},{id:3,url:"http://puui.qpic.cn/tv/0/490724865_1080607/0",content:"【梦回】宫中传出流言，四爷十三福晋有染？"},{id:4,url:"http://puui.qpic.cn/tv/0/496449885_1080607/0",content:"【庆余年】超前看结局 第二季的伏笔你get了吗"}],videoList:[],titleList:["猜你会追","重磅♨LPL春季赛：eStar拿下首胜","同步剧场","少儿精选剧场","热门综艺☀《终极高手2》即将开播"],whetherRefresh:[!1,!0,!1,!0,!0]}},methods:{getData:function(){var t=this;this.axios.get("https://www.shuipingguo.com/getvideo/?type=2").then((function(i){t.bigFrameContent=i.data.data[0].list,t.videoList[0]=i.data.data[1].list,t.videoList[1]=i.data.data[2].list,console.log(i)})).catch((function(t){console.log(t)}))}},created:function(){this.getData()}},l=c,u=(n("02ae"),n("2877")),p=Object(u["a"])(l,e,a,!1,null,"834c4d38",null);i["default"]=p.exports},a9d0:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"small-img"}},[n("ul",{staticClass:"video-list"},t._l(t.smallVideoList,(function(i){return n("li",{key:i.id,class:{video:!i.isBig&&!i.isLong,largeimg:i.isBig,longimg:i.isLong},on:{click:function(i){return t.play()}}},[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:i.img,alt:""}}),0!==i.score?n("span",{staticClass:"label"},[t._v(t._s(i.score))]):t._e()]),n("p",{staticClass:"video-title"},[t._v(" "+t._s(i.name)+" ")]),n("p",{staticClass:"video-decoration"},[t._v(" "+t._s(i.summary)+" ")])])})),0),n("div",{staticClass:"refresh"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"sync-alt"}}),n("span",[t._v("换一换")])],1)])},a=[],s={name:"SmallImg",props:{content:Array,refresh:Boolean},data:function(){return{smallVideoList:this.content}},created:function(){},methods:{play:function(){this.$router.push({name:"Play"})}}},r=s,o=(n("69a1"),n("2877")),c=Object(o["a"])(r,e,a,!1,null,"ddb21344",null);i["a"]=c.exports},d930:function(t,i,n){},f477:function(t,i,n){},fa25:function(t,i,n){"use strict";var e=n("d930"),a=n.n(e);a.a},fb33:function(t,i,n){}}]);
//# sourceMappingURL=chunk-3f402c3a.b4618d41.js.map