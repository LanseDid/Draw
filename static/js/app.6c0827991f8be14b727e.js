webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},a=i("VU/8")({name:"app"},n,!1,function(t){i("w+I5")},null,null).exports,s=i("/ocq"),c={data:function(){return{drawArr:["100","100","200","200","200","200","300","300"],i:0,num:0,imgTitle:["我只是一个无辜的饭团子","来嘛，亲一口就不要吃我了","隔壁那个饭团子都吓尿了","我可香了","你瞅啥！","我是国宝，你不能吃我","你不要用这么火辣的眼神看着我，我不喜欢女人"],initArr:[],currentTit:"",drawNum:localStorage.getItem("drawNum")}},mounted:function(){document.getElementsByClassName("drawMain")[0].style.height=window.screen.height-80+"px",null==localStorage.getItem("drawNum")&&localStorage.setItem("drawNum",3),this.init(),this.drawArr.sort(this.randomSort),console.log(this.drawArr)},methods:{init:function(){for(var t=0;t<8;t++){var e=Math.floor(7*Math.random()),i={src:"url(./static/images/draw"+e+".png)",title:this.imgTitle[e],flag:!0};this.initArr.push(i)}this.currentTit=this.initArr[0].title,document.getElementsByClassName("rice")[0].style.backgroundImage=this.initArr[0].src},nextDraw:function(){this.num++,this.i=this.num%8,this.currentTit=this.initArr[this.i].title,document.getElementsByClassName("rice")[0].style.backgroundImage=this.initArr[this.i].src,this.initArr[this.i].flag?document.getElementsByClassName("lickBtn")[0].disabled=!1:document.getElementsByClassName("lickBtn")[0].disabled=!0},lickRice:function(){if(document.getElementsByClassName("rice")[0].style.backgroundImage="url(./static/images/lick.png)",this.drawNum<=0)return this.currentTit="你肚子怎么辣么大哦，还想舔我",!1;var t=Math.floor(4*Math.random());this.currentTit=0===t?"完了，我被舔了，她不是对我有意思吧":1===t?"卧槽，别舔我，我对口水过敏!!!":2===t?"MaMa，救命啊！！":"我昨天没洗澡。。。你别这样"},eatRice:function(){var t=this;return 0!=t.initArr[t.i].flag&&(t.drawNum<=0?(alert("阿宝，这次已经抽完咯，快去对饭饭说点好听的~"),!1):(t.drawNum--,localStorage.setItem("drawNum",t.drawNum),t.currentTit="阿宝吃掉饭团，获得"+t.drawArr[t.i]+"元代金券",document.getElementsByClassName("lickBtn")[0].disabled=!0,document.getElementsByClassName("rice")[0].style.backgroundImage="url(./static/images/eat.png)",void(t.initArr[t.i]={src:"url(./static/images/eat.png)",title:"阿宝吃掉饭团，获得"+t.drawArr[t.i]+"元代金券",flag:!1})))},randomSort:function(t,e){return Math.random()>.5?-1:1}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"drawMain"},[t._m(0),t._v(" "),i("div",{staticClass:"inner"},[i("div",{staticClass:"box"},[i("div",{staticClass:"rice"}),t._v(" "),i("div",{staticClass:"tip"},[i("p",[t._v(t._s(t.i+1)+"号饭团:")]),t._v("\n        "+t._s(t.currentTit)+"\n      ")])])]),t._v(" "),i("div",{staticClass:"btnDiv"},[i("button",{on:{click:t.nextDraw}},[t._v("下一团")]),t._v(" "),i("button",{on:{click:t.eatRice}},[t._v("吃了X"+t._s(t.drawNum))]),t._v(" "),i("button",{staticClass:"lickBtn",on:{click:t.lickRice}},[t._v("舔一口")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[this._v("\n    规则说明："),e("br"),this._v("\n    1. 一共有8个饭团，2个100,4个200,2个300"),e("br"),this._v("\n    2. 一共有三次抽奖机会"),e("br"),this._v("\n    3.点击“吃”按钮，吃掉对应饭团，获取饭团内的奖励\n  ")])}]},u=i("VU/8")(c,l,!1,null,null,null).exports;r.a.use(s.a);var o=new s.a({routes:[{path:"/",component:u}]});i("t+Gu");r.a.config.productionTip=!1,new r.a({el:"#app",router:o,template:"<App/>",components:{App:a}})},"t+Gu":function(t,e){},"w+I5":function(t,e){}},["NHnr"]);