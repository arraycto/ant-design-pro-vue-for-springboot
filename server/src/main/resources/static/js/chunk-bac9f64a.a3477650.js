(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bac9f64a"],{"0359":function(t,e,a){"use strict";var i=a("577a"),r=a.n(i);r.a},"577a":function(t,e,a){},6194:function(t,e,a){"use strict";var i=a("c212"),r=a.n(i);r.a},84962:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("br"),a("h2",[t._v("# Trend 组件 ")]),a("a-divider",[t._v(" 正常 ")]),a("a-card",[a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("工资")]),t._v("\n      5%\n    ")]),a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("工作量")]),t._v("\n      50%\n    ")]),a("trend",{attrs:{flag:"down"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("身体状态")]),t._v("\n      50%\n    ")])],1),a("a-divider",[t._v(" 颜色反转 ")]),a("a-card",{staticStyle:{"margin-bottom":"3rem"}},[a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up","reverse-color":!0}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("工资")]),t._v("\n      5%\n    ")]),a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down","reverse-color":!0}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("工作量")]),t._v("\n      50%\n    ")])],1),a("h2",[t._v("# AvatarList 组件 ")]),a("a-divider",[t._v(" AvatarList ")]),a("a-card",{staticStyle:{"margin-bottom":"3rem"}},[a("avatar-list",{attrs:{"max-length":3}},[a("avatar-list-item",{attrs:{tips:"Jake",src:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"}}),a("avatar-list-item",{attrs:{tips:"Andy",src:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}})],1),a("a-divider",{staticStyle:{margin:"0 16px"},attrs:{type:"vertical"}}),a("avatar-list",{attrs:{size:"mini"}},[a("avatar-list-item",{attrs:{tips:"Jake",src:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"}}),a("avatar-list-item",{attrs:{tips:"Andy",src:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}})],1)],1),a("h2",[t._v("# CountDown 组件 ")]),a("a-divider",[t._v(" CountDown ")]),a("a-card",{staticStyle:{"margin-bottom":"3rem"}},[a("count-down",{staticStyle:{"font-size":"2rem"},attrs:{target:(new Date).getTime()+3e6,"on-end":t.onEndHandle}}),a("a-divider",{staticStyle:{margin:"0 16px"},attrs:{type:"vertical"}}),a("count-down",{staticStyle:{"font-size":"2rem"},attrs:{target:(new Date).getTime()+1e4,"on-end":t.onEndHandle2}})],1),a("h2",[t._v("# Ellipsis 组件 ")]),a("a-divider",[t._v(" Ellipsis ")]),a("a-card",{staticStyle:{"margin-bottom":"3rem"}},[a("ellipsis",{attrs:{length:100,tooltip:""}},[t._v("\n      There were injuries alleged in three cases in 2015, and a\n      fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.\n    ")])],1),a("h2",[t._v("# NumberInfo 组件 ")]),a("a-divider",[t._v(" NumberInfo ")]),a("a-card",[a("number-info",{attrs:{"sub-title":function(){return"Visits this week"},total:12321,status:"up","sub-total":17.1}})],1)],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner"},[i("img",{staticStyle:{width:"64px",height:"64px"},attrs:{alt:"Vue logo",src:a("cf05")}}),i("h3",{staticStyle:{"margin-top":"1rem"}},[t._v("Welcome to Your Vue.js App")])])}],s=a("611e"),n=a("6042"),o=a.n(n),l=a("41b2"),c=a.n(l),u=a("0c63"),p={name:"AAvatar",props:{prefixCls:{type:String,default:"ant-avatar"},shape:{validator:function(t){return["circle","square"].includes(t)},default:"circle"},size:{validator:function(t){return"number"===typeof t||["small","large","default"].includes(t)},default:"default"},src:String,srcSet:String,icon:String,alt:String,loadError:Function},data:function(){return{isImgExist:!0,scale:1}},mounted:function(){var t=this;this.prevChildren=this.$slots["default"],this.prevState=c()({},this.$data),this.$nextTick(function(){t.setScale()})},updated:function(){var t=this;(this.preChildren!==this.$slots["default"]||this.prevState.scale!==this.$data.scale&&1===this.$data.scale||this.prevState.isImgExist!==this.$data.isImgExist)&&this.$nextTick(function(){t.setScale()}),this.preChildren=this.$slots["default"],this.prevState=c()({},this.$data)},methods:{setScale:function(){var t=this.$refs.avatarChildren;if(t){var e=t.offsetWidth,a=this.$el.getBoundingClientRect().width;this.scale=a-8<e?(a-8)/e:1,this.$forceUpdate()}},handleImgLoadError:function(){var t=this.$props.loadError,e=t?t():void 0;!1!==e&&(this.isImgExist=!1)}},render:function(){var t,e,a=arguments[0],i=this.$props,r=i.prefixCls,s=i.shape,n=i.size,l=i.src,p=i.icon,m=i.alt,f=i.srcSet,h=this.$data,d=h.isImgExist,v=h.scale,g=(t={},o()(t,r+"-lg","large"===n),o()(t,r+"-sm","small"===n),t),b=c()(o()({},r,!0),g,(e={},o()(e,r+"-"+s,s),o()(e,r+"-image",l&&d),o()(e,r+"-icon",p),e)),y="number"===typeof n?{width:n+"px",height:n+"px",lineHeight:n+"px",fontSize:p?n/2+"px":"18px"}:{},S=this.$slots["default"];if(l&&d)S=a("img",{attrs:{src:l,srcSet:f,alt:m},on:{error:this.handleImgLoadError}});else if(p)S=a(u["a"],{attrs:{type:p}});else{var z=this.$refs.avatarChildren;if(z||1!==v&&z){var x="scale("+v+") translateX(-50%)",T={msTransform:x,WebkitTransform:x,transform:x},_="number"===typeof n?{lineHeight:n+"px"}:{};S=a("span",{class:r+"-string",ref:"avatarChildren",style:c()({},_,T)},[S])}else S=a("span",{class:r+"-string",ref:"avatarChildren"},[S])}return a("span",{on:this.$listeners,class:b,style:y},[S])},install:function(t){t.component(p.name,p)}},m=p,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return""!==t.tips?a("tooltip",[a("template",{slot:"title"},[t._v(t._s(t.tips))]),a("avatar",{attrs:{size:t.avatarSize,src:t.src}})],2):a("avatar",{attrs:{size:t.avatarSize,src:t.src}})},h=[],d=a("f933"),v={name:"AvatarItem",components:{Avatar:m,Tooltip:d["a"]},props:{tips:{type:String,default:"",required:!1},src:{type:String,default:""}},data:function(){return{size:this.$parent.size}},computed:{avatarSize:function(){return"mini"!==this.size&&this.size||20}},watch:{"$parent.size":function(t){this.size=t}}},g=v,b=a("2877"),y=Object(b["a"])(g,f,h,!1,null,null,null),S=y.exports;function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(function(t){return t.tag||t.text&&""!==t.text.trim()})}function x(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var T,_,w={AvatarItem:S,name:"AvatarList",components:{Avatar:m,AvatarItem:S},props:{prefixCls:{type:String,default:"ant-pro-avatar-list"},size:{type:[String,Number],default:"default"},maxLength:{type:Number,default:0},excessItemsStyle:{type:Object,default:function(){return{color:"#f56a00",backgroundColor:"#fde3cf"}}}},data:function(){return{}},methods:{getItems:function(t){var e,a=this.$createElement,i=(e={},x(e,"".concat(this.prefixCls,"-item"),!0),x(e,"".concat(this.size),!0),e);this.maxLength>0&&(t=t.slice(0,this.maxLength),t.push(a(m,{attrs:{size:this.size},style:this.excessItemsStyle},["+".concat(this.maxLength)])));var r=t.map(function(t){return a("li",{class:i},[t])});return r}},render:function(){var t,e=arguments[0],a=this.$props,i=a.prefixCls,r=a.size,s=(t={},x(t,"".concat(i),!0),x(t,"".concat(r),!0),t),n=z(this.$slots.default),o=n&&n.length?e("ul",{class:"".concat(i,"-items")},[this.getItems(n)]):null;return e("div",{class:s},[o])}},E=w,C=Object(b["a"])(E,T,_,!1,null,null,null),$=C.exports,j=(a("84962"),$),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("\n  "+t._s(t._f("format")(t.lastTime))+"\n")])},k=[];function N(t){return 1*t<10?"0".concat(t):t}var A,L,D={name:"CountDown",props:{format:{type:Function,default:void 0},target:{type:[Date,Number],required:!0},onEnd:{type:Function,default:function(){return{}}}},data:function(){return{dateTime:"0",originTargetTime:0,lastTime:0,timer:0,interval:1e3}},filters:{format:function(t){var e=36e5,a=6e4,i=Math.floor(t/e),r=Math.floor((t-i*e)/a),s=Math.floor((t-i*e-r*a)/1e3);return"".concat(N(i),":").concat(N(r),":").concat(N(s))}},created:function(){this.initTime(),this.tick()},methods:{initTime:function(){var t=0,e=0;this.originTargetTime=this.target;try{e="[object Date]"===Object.prototype.toString.call(this.target)?this.target:new Date(this.target).getTime()}catch(a){throw new Error("invalid target prop")}t=e-(new Date).getTime(),this.lastTime=t<0?0:t},tick:function(){var t=this,e=this.onEnd;this.timer=setTimeout(function(){t.lastTime<t.interval?(clearTimeout(t.timer),t.lastTime=0,"function"===typeof e&&e()):(t.lastTime-=t.interval,t.tick())},this.interval)}},beforeUpdate:function(){this.originTargetTime!==this.target&&this.initTime()},beforeDestroy:function(){clearTimeout(this.timer)}},O=D,K=Object(b["a"])(O,I,k,!1,null,"7171107d",null),Z=K.exports,F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split("").reduce(function(t,e){var a=e.charCodeAt(0);return a>=0&&a<=128?t+1:t+2},0)},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,a=0;return t.split("").reduce(function(t,i){var r=i.charCodeAt(0);return a+=r>=0&&r<=128?1:2,a<=e?t+i:t},"")},q={name:"Ellipsis",components:{Tooltip:d["a"]},props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean},length:{type:Number,required:!0},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{getStrDom:function(t,e){var a=this.$createElement;return a("span",[X(t,this.length)+(e>this.length?"...":"")])},getTooltip:function(t,e){var a=this.$createElement;return a(d["a"],[a("template",{slot:"title"},[t]),this.getStrDom(t,e)])}},render:function(){var t=this.$props,e=t.tooltip,a=t.length,i=this.$slots.default.map(function(t){return t.text}).join(""),r=F(i),s=e&&r>a?this.getTooltip(i,r):this.getStrDom(i,r);return s}},H=q,J=Object(b["a"])(H,A,L,!1,null,null,null),B=J.exports,U=B,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:[t.prefixCls]},[t._t("subtitle",[a("div",{class:[t.prefixCls+"-subtitle"]},[t._v(t._s("string"===typeof t.subTitle?t.subTitle:t.subTitle()))])]),a("div",{staticClass:"number-info-value"},[a("span",[t._v(t._s(t.total))]),a("span",{staticClass:"sub-total"},[t._v("\n      "+t._s(t.subTotal)+"\n      "),a("icon",{attrs:{type:"caret-"+t.status}})],1)])],2)},R=[],W={name:"NumberInfo",props:{prefixCls:{type:String,default:"ant-pro-number-info"},total:{type:Number,required:!0},subTotal:{type:Number,required:!0},subTitle:{type:[String,Function],default:""},status:{type:String,default:"up"}},components:{Icon:u["a"]},data:function(){return{}}},M=W,Y=(a("6194"),Object(b["a"])(M,V,R,!1,null,"419231b0",null)),P=Y.exports,G=P,Q=j.AvatarItem,tt={name:"Home",components:{NumberInfo:G,Ellipsis:U,CountDown:Z,Trend:s["a"],AvatarList:j,AvatarListItem:Q},data:function(){return{targetTime:(new Date).getTime()+39e5}},methods:{onEndHandle:function(){this.$message.success("CountDown callback!!!")},onEndHandle2:function(){this.$notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})}}},et=tt,at=(a("0359"),Object(b["a"])(et,i,r,!1,null,"544ca2f6",null));e["default"]=at.exports},c212:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.c9241552.png"}}]);
//# sourceMappingURL=chunk-bac9f64a.a3477650.js.map