(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4119517a"],{1665:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"select"}},[e("div",{staticClass:"swiper"},[e("big-swiper",{attrs:{content:t.bigFrameContent}})],1),e("ul",t._l(t.videoList,(function(i,n){return e("li",{key:n},[e("list-title",[t._v(t._s(t.titleList[n]))]),e("small-img",{attrs:{content:t.videoList[n],refresh:t.whetherRefresh[n]}})],1)})),0)])},a=[],s=e("45df"),r=e("a9d0"),c=e("306d"),o={name:"Select",components:{BigSwiper:s["a"],SmallImg:r["a"],ListTitle:c["a"]},data:function(){return{bigFrameContent:[{id:0,url:"http://puui.qpic.cn/tv/0/496599893_1080607/0",content:"【将夜2·独播】过年相亲！请照这个标准来"},{id:1,url:"http://puui.qpic.cn/tv/0/494787305_1080607/0",content:"【新世界·首播】孙红雷结识民国五美闯北平"},{id:2,url:"http://puui.qpic.cn/tv/0/496424457_1080607/0",content:"【蓬莱间·更新】这是严肃的诊疗现场！真的"},{id:3,url:"http://puui.qpic.cn/tv/0/490724865_1080607/0",content:"【梦回】宫中传出流言，四爷十三福晋有染？"},{id:4,url:"http://puui.qpic.cn/tv/0/496449885_1080607/0",content:"【庆余年】超前看结局 第二季的伏笔你get了吗"}],videoList:[],titleList:["猜你会追","重磅♨LPL春季赛：eStar拿下首胜","同步剧场","少儿精选剧场","热门综艺☀《终极高手2》即将开播"],whetherRefresh:[!1,!0,!1,!0,!0]}},methods:{getData:function(){var t=this;this.axios.get("https://www.shuipingguo.com/getvideo/?type=1").then((function(i){t.bigFrameContent=i.data.data[0].list,t.videoList[0]=i.data.data[1].list,t.videoList[1]=i.data.data[2].list}))}},created:function(){this.getData()}},l=o,u=(e("94bb"),e("2877")),p=Object(u["a"])(l,n,a,!1,null,"63535133",null);i["default"]=p.exports},"306d":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"list-title"}},[t._t("default")],2)},a=[],s={name:"ListTitle"},r=s,c=(e("8f0a"),e("2877")),o=Object(c["a"])(r,n,a,!1,null,"2ad817a9",null);i["a"]=o.exports},"45df":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{id:"swiper-container",options:t.swiperOption}},[t._l(t.content,(function(i){return e("swiper-slide",{key:i.id,staticClass:"slide-item"},[e("img",{attrs:{src:i.img,alt:""}}),e("p",[t._v(t._s(i.summary))])])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},a=[],s={name:"BigSwiper",props:{content:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"fraction",autoplay:2e3,speed:150},autoplay:!0,loop:!0}}}},r=s,c=(e("fa25"),e("2877")),o=Object(c["a"])(r,n,a,!1,null,"4b0e8200",null);i["a"]=o.exports},"50ab":function(t,i,e){},"5b82":function(t,i,e){},"8f0a":function(t,i,e){"use strict";var n=e("50ab"),a=e.n(n);a.a},"8f1a":function(t,i,e){"use strict";var n=e("5b82"),a=e.n(n);a.a},"94bb":function(t,i,e){"use strict";var n=e("9cdb"),a=e.n(n);a.a},"9cdb":function(t,i,e){},a9d0:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"small-img"}},[e("ul",{staticClass:"video-list"},t._l(t.smallVideoList,(function(i){return e("li",{key:i.id,staticClass:"item",class:{video:!i.isBig&&!i.isLong,largeimg:i.isBig,longimg:i.isLong},on:{click:function(i){return t.play()}}},[e("div",{staticClass:"img-container"},[e("img",{attrs:{src:i.img,alt:""}}),0!==i.score?e("span",{staticClass:"label"},[t._v(t._s(i.score))]):t._e()]),e("p",{staticClass:"video-title"},[t._v(" "+t._s(i.name)+"sss ")]),e("p",{staticClass:"video-decoration"},[t._v(" "+t._s(i.summary)+" ")])])})),0),e("div",{staticClass:"refresh"},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"sync-alt"}}),e("span",[t._v("换一换")])],1)])},a=[],s={name:"SmallImg",props:{content:Array,refresh:Boolean},data:function(){return{smallVideoList:this.content}},created:function(){},methods:{play:function(){this.$router.push({name:"Play"})}}},r=s,c=(e("8f1a"),e("2877")),o=Object(c["a"])(r,n,a,!1,null,"f59bcbe6",null);i["a"]=o.exports},d930:function(t,i,e){},fa25:function(t,i,e){"use strict";var n=e("d930"),a=e.n(n);a.a}}]);
//# sourceMappingURL=chunk-4119517a.55cf6f07.js.map