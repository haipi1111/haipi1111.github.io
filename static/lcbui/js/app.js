(function(e){function t(t){for(var o,a,c=t[0],l=t[1],u=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);h&&h(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},i={app:0},r=[];function c(e){return l.p+"static/lcbui/js/"+({}[e]||e)+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-2d4f9dcd":1,"chunk-52441e3e":1,"chunk-7614fc1b":1,"chunk-76a2623a":1,"chunk-7c1bb9c2":1,"chunk-9d4cedfe":1,"chunk-fe12a8be":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="static/lcbui/css/"+({}[e]||e)+".css",i=l.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===i))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],s=u.getAttribute("data-href");if(s===o||s===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],h.parentNode.removeChild(h),n(r)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=r);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var p=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}i[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var h=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("a33e")},"164e":function(e,t){e.exports=echarts},2333:function(e,t,n){"use strict";var o=n("397d"),a=n.n(o);a.a},"2f74":function(e,t,n){},"397d":function(e,t,n){},5498:function(e,t,n){"use strict";var o=n("f81e"),a=n.n(o);a.a},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},6389:function(e,t){e.exports=VueRouter},"63e0":function(e,t){},7371:function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},"9c0c":function(e,t,n){},"9e9f":function(e,t,n){"use strict";var o=n("c3c6"),a=n.n(o);a.a},a33e:function(e,t,n){"use strict";n.r(t);var o=n("8bbf"),a=n.n(o),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],c={data:function(){return{}},created:function(){}},l=c,u=(n("5c0b"),n("2877")),s=Object(u["a"])(l,i,r,!1,null,null,null),p=s.exports,h=n("6389"),f=n.n(h),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nice-layout"},[n("div",{staticClass:"nice-layout-body"},[n("div",{staticClass:"nice-layout-fuild"},[n("keep-alive",[n("router-view",{staticClass:"nice-anim nice-anim-upbit"})],1)],1),n("div",{staticClass:"r"},[n("el-col",[n("el-button",{attrs:{type:"warning",size:"small",round:""},on:{click:function(t){return e.switchPages()}}},[e._v(e._s(1==e.oldIndex?"股票":"基金"))])],1)],1),n("nice-footer")],1)])},m=[],g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nice-footer"},[n("p",[n("span",[e._v("理财 管家")])])])}],b={data:function(){return{}},components:{},computed:{},watch:{},methods:{},created:function(){},mounted:function(){}},v=b,w=(n("9e9f"),Object(u["a"])(v,g,y,!1,null,"50abec30",null)),x=w.exports,k={data:function(){return{oldIndex:1,tagsList:[],collapse:!1,screenWidth:document.body.clientWidth}},components:{niceFooter:x},computed:{isCollapse:{get:function(){return this.screenWidth<768},set:function(){}}},watch:{screenWidth:function(e){e<768?(this.collapse=!0,this.$bus.emit("collapse",this.collapse)):(this.collapse=!1,this.$bus.emit("collapse",this.collapse))}},methods:{switchPages:function(){1==this.oldIndex?(this.$router.replace("/gupiao"),this.oldIndex=2):(this.$router.replace("/fund"),this.oldIndex=1)},getTagList:function(){var e=this;this.$bus.on("tags",(function(t){console.log(t);for(var n=[],o=0,a=t.length;o<a;o++)t[o].name&&n.push(t[o].name);e.tagsList=n}))},changeCollapse:function(e){this.collapse=!this.collapse,this.$bus.emit("collapse",this.collapse)}},created:function(){this.getTagList()},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.screenWidth=document.body.clientWidth}))}},_=k,S=(n("5498"),Object(u["a"])(_,d,m,!1,null,"69b3ceae",null)),C=S.exports,A={path:"*",name:"404",meta:{title:"404"},component:function(e){n.e("chunk-7c1bb9c2").then(function(){var t=[n("2754")];e.apply(null,t)}.bind(this)).catch(n.oe)}},L=[{path:"/login",name:"login",meta:{title:"登录",isLogin:!0},component:function(e){n.e("chunk-52441e3e").then(function(){var t=[n("033a")];e.apply(null,t)}.bind(this)).catch(n.oe)}}],N=[{path:"/",redirect:{name:"gupiao"},meta:{title:"主页",keepAlive:!0},component:C,children:[{path:"gupiao",meta:{title:"股票",keepAlive:!0},name:"gupiao",component:function(e){Promise.all([n.e("chunk-2d4f9dcd"),n.e("chunk-2d230a54")]).then(function(){var t=[n("ecbb")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"fund",meta:{title:"基金",keepAlive:!0},name:"fund",component:function(e){Promise.all([n.e("chunk-2d4f9dcd"),n.e("chunk-2d0cc435")]).then(function(){var t=[n("4cd4")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/components",meta:{title:"组件",requiresAuth:!0},name:"components",component:C,children:[{path:"grid",meta:{title:"栅格布局",requiresAuth:!0,name:"components_grid"},component:function(e){n.e("chunk-76a2623a").then(function(){var t=[n("f425")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"button",meta:{title:"按钮",requiresAuth:!0,name:"components_button"},component:function(e){n.e("chunk-9d4cedfe").then(function(){var t=[n("7843")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"nav",meta:{title:"菜单导航",requiresAuth:!0,name:"components_nav"},component:function(e){n.e("chunk-fe12a8be").then(function(){var t=[n("4beb")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/components/form",meta:{title:"表单",requiresAuth:!0},component:function(e){n.e("chunk-2d0df834").then(function(){var t=[n("89da")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"form",children:[{path:"element",meta:{title:"基础表单",requiresAuth:!0,name:"components_form_element"},component:function(e){n.e("chunk-7614fc1b").then(function(){var t=[n("632f")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"group",meta:{title:"组合表单",requiresAuth:!0,name:"components_form_group"},component:function(e){n.e("chunk-2d21d18d").then(function(){var t=[n("d09d")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}]},{path:"/pages",meta:{title:"页面",requiresAuth:!0},name:"pages",component:C,children:[{path:"404",meta:{title:"404页面不存在",requiresAuth:!0,name:"pages_404"},component:function(e){n.e("chunk-7c1bb9c2").then(function(){var t=[n("2754")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],T=[A].concat(L,N);a.a.use(f.a);var E=new f.a({routes:T,scrollBehavior:function(){return{x:0,y:0}}});E.beforeEach((function(e,t,n){document.title="".concat(e.meta.title);var o=localStorage.getItem("login_name"),a=localStorage.getItem("login_pass");o&&a||"/login"===e.path?n():n("/login")}));var M=E,O=n("2f62"),$=n("63e0"),j={getCityFn:function(e){return e.zsZf}},z=j,D={loginStatu:null,userInfo:"nuldddl",zsZf:{shZf:"-",szZf:"-",hs300zf:"-",hszf:"-",lsdkzf:"-",dqszf:"-",bp500zf:"-"},fundInfo:{allYk:"-",allZf:"-",allMoney:"-",upCangwei:"-",downCangwei:"-",downMoney:"-",upMoney:"-",surpTran:{0:{name:"-",code:"-",allZf:"-",allYk:"-",syYk:"-",surMoney:"-",surNum:"-",canSaleNum:"-",buyDay:"-",curZf:"-",curYk:"-",maxDown:"-"}},tranRecod:{0:{id:"-",code:"-",name:"-",date:"-",type:"-",money:"-",num:"-",pice:"-"}},itemCi:[{name:"-",code:"-",canGz:!0,canJz:!0}],canBuyTj:[{name:"-",maxDowns:[0,0,0]}]},gupiaoInfo:{allYk:"-",allZf:"-",allMoney:"-",upCangwei:"-",downCangwei:"-",downMoney:"-",upMoney:"-",surpTran:{0:{name:"-",code:"-",allZf:"-",allYk:"-",syYk:"-",surMoney:"-",surNum:"-",canSaleNum:"-",buyDay:"-",curZf:"-",curYk:"-",maxDown:"-"}},tranRecod:{0:{id:"-",code:"-",name:"-",date:"-",type:"-",money:"-",num:"-",pice:"-"}},itemCi:[{name:"-",code:"-",canGz:!0,canJz:!0}],canBuyTj:[{name:"-",maxDowns:[0,0,0]}]}},P=D,I={setTranRecode:function(e,t){var n=t.type,o=t.data,a="";for(var i in a="fund"==n?e.fundInfo.tranRecod:e.gupiaoInfo.tranRecod,o){var r={};r.code=o[i]._code,r.id=o[i]._id,r.money=o[i]._money,r.name=o[i]._name,r.num=o[i]._num,r.date=o[i]._time,r.pice=o[i]._tran_pice,r.type=o[i]._tran_type,a[i]=r}"fund"==n?this.set(e,fundInfo,a):this.set(e,gupiaoInfo,a)}},q=I,V=n("b054"),R=n.n(V);a.a.use(O["a"]);var F=!1,Z=new O["a"].Store({actions:$,getters:z,state:P,mutations:q,strict:F,plugins:F?[R()()]:[]}),W=n("b828"),Y=n("7212"),B=n.n(Y),K=n("164e"),U=function(e){Object.defineProperties(e.prototype,{$chart:{get:function(){return{linFund:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["SUN","MON","TUE","WED","THU","FRI","SAT"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{name:"听歌量",symbol:"none",type:"line",smooth:!0,areaStyle:{normal:{}},itemStyle:{normal:{color:"#17B3A3"}},data:[100,100,100,100,100,100,100]}],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){},a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.chart=K["init"](document.getElementById(e)),this.chart.clear(),this.chart.on("click",o);var r={animation:!1,tooltip:{trigger:"item",position:a?[0,0]:null,alwaysShowContent:!1,formatter:function(e){return e.seriesName.replace(",","</br>")+"</br>当前 : "+e.value},confine:!0,axisPointer:{snap:!0,type:"cross",axis:"auto",label:{precision:"2",fontWeight:"bold"}}},legend:{selector:[{type:"inverse",title:"反选"}],show:i,formatter:function(e){return i?e.split(":")[0].replace("天弘","").replace("国泰","").replace("华宝","").replace("中证","").replace("广发",""):""}},grid:{left:"1%",right:"1%",top:"1%",bottom:"-4%",textStyle:{color:"#a3afb7"},containLabel:!0},xAxis:{type:"category",show:!1,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{textStyle:{color:"#a3afb7"}},boundaryGap:!1,data:t},yAxis:{type:"value",show:!0,axisLine:{show:!0},axisTick:{show:!0},splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{textStyle:{color:"#a3afb7"}}},series:n};this.chart.setOption(r,!0),this.chart.resize()},bar:function(e,t,n){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={animation:!1,xAxis:t,grid:{tooltip:{show:!0,trigger:"axis"},show:!1,left:"1%",right:"0%",top:"25%",bottom:"-18%",textStyle:{color:"#a3afb7"},containLabel:!0},tooltip:{show:o,trigger:"none",alwaysShowContent:!1,position:["75%","10%"],axisPointer:{snap:!0,axis:"x",label:{precision:"2",fontWeight:"bold"}}},yAxis:{name:"产品销量",type:"value",nameTextStyle:{verticalAlign:"bottom",align:"left"},nameGap:31,inverse:!1,interval:3,show:!0,axisLine:{show:!0},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{textStyle:{color:"#a3afb7"}}},series:n};e.setOption(a,!0),e.resize()}}}}})},G={install:U},J=function(e){Object.defineProperties(e.prototype,{$utils:{get:function(){return{myCompare:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,o){var a=n[e],i=o[e];return isNaN(Number(a))||isNaN(Number(i))||(a=Number(a),i=Number(i)),t?a-i:i-a}},myKeepTwoDecimal:function(e){var t=parseFloat(e);return!isNaN(t)&&(t=Math.round(100*e)/100,t)},myKeepZeroDecimal:function(e){var t=parseFloat(e);return!isNaN(t)&&(t=Math.round(1*e)/1,t)},myKeepFourDecimal:function(e){var t=parseFloat(e);return!isNaN(t)&&(t=Math.round(1e4*e)/1e4,t)},formatDataToStr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t},getWorkDate:function(e){var t=new Date;return t},getUrlToClient:function(){return"http://127.0.0.1:5000/"},getUrlToServe:function(){return"http://127.0.0.1:9000/"}}}}})},H={install:J},Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-select",style:"width:"+e.width},[n("el-select",{staticStyle:{width:"100%"},attrs:{disabled:e.disabled,placeholder:"请选择",size:e.width?"":e.size},on:{change:e.changeValue},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e.list.length>7?n("el-input",{staticClass:"select-input",attrs:{placeholder:"请输入内容"},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):e._e(),e._l(e.filterList(e.inputValue),(function(t,o){return n("el-option",{key:o||t[e.optionKey],attrs:{label:t[e.optionLabel],value:t[e.optionValue]}})}))],2)],1)},X=[],ee={data:function(){return{value:"",inputValue:""}},props:{disabled:{type:Boolean},width:{type:String},size:{type:String,default:"medium"},list:{type:Array},optionKey:{type:String},optionLabel:{default:"name",type:String},optionValue:{default:"id",type:String}},components:{},computed:{},watch:{},methods:{changeValue:function(e){this.inputValue="",this.$emit("changeValue",e)},filterList:function(e){var t=this;return""==e?this.list:this.list.filter((function(n){if(n[t.optionLabel].includes(e))return n}))}},created:function(){},mounted:function(){}},te=ee,ne=(n("2333"),Object(u["a"])(te,Q,X,!1,null,null,null)),oe=ne.exports,ae=(n("a83d"),n("bbe3"),n("b068"),n("7371"),n("2f74"),{echats_1:null,echats_2:null,echats_3:null,getAge:function(e){return(new Date).getFullYear()-e}}),ie=ae;a.a.prototype.$myEcharts=ie,a.a.config.productionTip=!1,a.a.use(W["a"]),a.a.use(G),a.a.use(H),a.a.use(B.a),a.a.component("inputSelect",oe),new a.a({router:M,store:Z,render:function(e){return e(p)}}).$mount("#app")},a83d:function(e,t,n){},b068:function(e,t,n){},c3c6:function(e,t,n){},cebe:function(e,t){e.exports=axios},f81e:function(e,t,n){}});