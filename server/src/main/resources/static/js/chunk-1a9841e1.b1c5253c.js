(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a9841e1"],{"0a42":function(t,e,s){},"3d04":function(t,e,s){"use strict";var a=s("0a42"),n=s.n(a);n.a},df55:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page-layout",{attrs:{title:t.title}},[s("a-card",{attrs:{bordered:!1}},[s("detail-list",{attrs:{title:"退款申请"}},[s("detail-list-item",{attrs:{term:"取货单号"}},[t._v("1000000000")]),s("detail-list-item",{attrs:{term:"状态"}},[t._v("已取货")]),s("detail-list-item",{attrs:{term:"销售单号"}},[t._v("1234123421")]),s("detail-list-item",{attrs:{term:"子订单"}},[t._v("3214321432")])],1),s("a-divider",{staticStyle:{"margin-bottom":"32px"}}),s("detail-list",{attrs:{title:"用户信息"}},[s("detail-list-item",{attrs:{term:"用户姓名"}},[t._v("付小小")]),s("detail-list-item",{attrs:{term:"联系电话"}},[t._v("18100000000")]),s("detail-list-item",{attrs:{term:"常用快递"}},[t._v("菜鸟仓储")]),s("detail-list-item",{attrs:{term:"取货地址"}},[t._v("浙江省杭州市西湖区万塘路18号")]),s("detail-list-item",{attrs:{term:"备注"}},[t._v("\t无")])],1),s("a-divider",{staticStyle:{"margin-bottom":"32px"}}),s("div",{staticClass:"title"},[t._v("退货商品")]),s("s-table",{staticStyle:{"margin-bottom":"24px"},attrs:{columns:t.goodsColumns,data:t.loadGoodsData}}),s("div",{staticClass:"title"},[t._v("退货进度")]),s("s-table",{staticStyle:{"margin-bottom":"24px"},attrs:{columns:t.scheduleColumns,data:t.loadScheduleData},scopedSlots:t._u([{key:"status",fn:function(e){return[s("a-badge",{attrs:{status:e,text:t._f("statusFilter")(e)}})]}}])})],1)],1)},n=[],r=s("795b"),i=s.n(r),o=s("b445"),u=s("e8c4"),l=s("c16f"),d=s("92fa"),c=s.n(d),m=s("1098"),p=s.n(m),h=s("41b2"),f=s.n(h),b=s("6042"),g=s.n(b),y=s("4d91"),C=s("4d26"),v=s.n(C),x=s("b488"),S=s("daa3"),N=s("0464"),k=s("7b05");function D(t){return t?t.toString().split("").reverse().map(function(t){return Number(t)}):[]}var w={prefixCls:y["a"].string.def("ant-scroll-number"),count:y["a"].any,component:y["a"].string,title:y["a"].oneOfType([y["a"].number,y["a"].string,null]),displayComponent:y["a"].any,className:y["a"].object},$={mixins:[x["a"]],props:w,data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(t){var e=this;this.sCount!==t&&(this.lastCount=this.sCount,this.setState({animateStarted:!0},function(){setTimeout(function(){e.setState({animateStarted:!1,sCount:t},function(){e.$emit("animated")})},5)}))}},methods:{getPositionByNum:function(t,e){if(this.animateStarted)return 10+t;var s=D(this.sCount)[e],a=D(this.lastCount)[e];return this.sCount>this.lastCount?s>=a?10+t:20+t:s<=a?10+t:t},renderNumberList:function(t){for(var e=this.$createElement,s=[],a=0;a<30;a++){var n=t===a?"current":"";s.push(e("p",{key:a.toString(),class:n},[a%10]))}return s},renderCurrentNumber:function(t,e){var s=this.$createElement,a=this.getPositionByNum(t,e),n=this.animateStarted||void 0===D(this.lastCount)[e],r={transition:n?"none":void 0,msTransform:"translateY("+100*-a+"%)",WebkitTransform:"translateY("+100*-a+"%)",transform:"translateY("+100*-a+"%)"};return s("span",{class:this.prefixCls+"-only",style:r,key:e},[this.renderNumberList(a)])},renderNumberElement:function(){var t=this,e=this.sCount;return!e||isNaN(e)?e:D(e).map(function(e,s){return t.renderCurrentNumber(e,s)}).reverse()}},render:function(){var t=arguments[0],e=this.prefixCls,s=this.title,a=this.component,n=void 0===a?"sup":a,r=this.displayComponent,i=this.className;if(r)return Object(k["a"])(r,{class:e+"-custom-component"});var o=Object(S["n"])(this,!0),u=Object(N["a"])(this.$props,["count","component","prefixCls","displayComponent"]),l={props:f()({},u),attrs:{title:s},style:o,class:v()(e,i)};return o&&o.borderColor&&(l.style.boxShadow="0 0 0 1px "+o.borderColor+" inset"),t(n,l,[this.renderNumberElement()])}},I=s("94eb"),O=s("dd3d"),_={count:y["a"].any,showZero:y["a"].bool,overflowCount:y["a"].number,dot:y["a"].bool,prefixCls:y["a"].string,scrollNumberPrefixCls:y["a"].string,status:y["a"].oneOf(["success","processing","default","error","warning"]),text:y["a"].string,offset:y["a"].array,numberStyle:y["a"].object.def({}),title:y["a"].string},j={name:"ABadge",props:Object(S["q"])(_,{prefixCls:"ant-badge",scrollNumberPrefixCls:"ant-scroll-number",showZero:!1,dot:!1,overflowCount:99}),methods:{getBadgeClassName:function(){var t,e=this.$props,s=e.prefixCls,a=e.status,n=Object(S["c"])(this.$slots["default"]);return v()(s,(t={},g()(t,s+"-status",!!a),g()(t,s+"-not-a-wrapper",!n.length),t))},isZero:function(){var t=this.getNumberedDispayCount();return"0"===t||0===t},isDot:function(){var t=this.$props,e=t.dot,s=t.status,a=this.isZero();return e&&!a||s},isHidden:function(){var t=this.$props.showZero,e=this.getDispayCount(),s=this.isZero(),a=this.isDot(),n=null===e||void 0===e||""===e;return(n||s&&!t)&&!a},getNumberedDispayCount:function(){var t=this.$props.overflowCount,e=this.badgeCount,s=e>t?t+"+":e;return s},getDispayCount:function(){var t=this.isDot();return t?"":this.getNumberedDispayCount()},getScollNumberTitle:function(){var t=this.$props.title,e=this.badgeCount;return t||("string"===typeof e||"number"===typeof e?e:void 0)},getStyleWithOffset:function(){var t=this.$props,e=t.offset,s=t.numberStyle;return e?f()({right:-parseInt(e[0],10)+"px",marginTop:Object(O["a"])(e[1])?e[1]+"px":e[1]},s):s},renderStatusText:function(){var t=this.$createElement,e=this.$props,s=e.prefixCls,a=e.text,n=this.isHidden();return n||!a?null:t("span",{class:s+"-status-text"},[a])},renderDispayComponent:function(){var t=this.badgeCount,e=t;if(e&&"object"===("undefined"===typeof e?"undefined":p()(e)))return Object(k["a"])(e,{style:this.getStyleWithOffset()})},renderBadgeNumber:function(){var t,e=this.$createElement,s=this.$props,a=s.prefixCls,n=s.scrollNumberPrefixCls,r=s.status,i=this.badgeCount,o=this.getDispayCount(),u=this.isDot(),l=this.isHidden(),d=(t={},g()(t,a+"-dot",u),g()(t,a+"-count",!u),g()(t,a+"-multiple-words",!u&&i&&i.toString&&i.toString().length>1),g()(t,a+"-status-"+r,!!r),t);return l?null:e($,{attrs:{prefixCls:n,"data-show":!l,className:d,count:o,displayComponent:this.renderDispayComponent(),title:this.getScollNumberTitle()},directives:[{name:"show",value:!l}],style:this.getStyleWithOffset(),key:"scrollNumber"})}},render:function(){var t,e=arguments[0],s=this.prefixCls,a=this.status,n=this.text,r=this.$slots,i=Object(S["c"])(r["default"]),o=Object(S["g"])(this,"count");Array.isArray(o)&&(o=o[0]),this.badgeCount=o;var u=this.renderBadgeNumber(),l=this.renderStatusText(),d=v()((t={},g()(t,s+"-status-dot",!!a),g()(t,s+"-status-"+a,!!a),t));if(!i.length&&a)return e("span",c()([{on:this.$listeners},{class:this.getBadgeClassName(),style:this.getStyleWithOffset()}]),[e("span",{class:d}),e("span",{class:s+"-status-text"},[n])]);var m=Object(I["a"])(i.length?s+"-zoom":"");return e("span",c()([{on:this.$listeners},{class:this.getBadgeClassName()}]),[i,e("transition",m,[u]),l])}},T=l["a"].Item,B={components:{PageLayout:o["a"],ABadge:j,DetailList:l["a"],DetailListItem:T,STable:u["a"]},data:function(){return{goodsColumns:[{title:"商品编号",dataIndex:"id",key:"id"},{title:"商品名称",dataIndex:"name",key:"name"},{title:"商品条码",dataIndex:"barcode",key:"barcode"},{title:"单价",dataIndex:"price",key:"price",align:"right"},{title:"数量（件）",dataIndex:"num",key:"num",align:"right"},{title:"金额",dataIndex:"amount",key:"amount",align:"right"}],loadGoodsData:function(){return new i.a(function(t){t({data:[{id:"1234561",name:"矿泉水 550ml",barcode:"12421432143214321",price:"2.00",num:"1",amount:"2.00"},{id:"1234562",name:"凉茶 300ml",barcode:"12421432143214322",price:"3.00",num:"2",amount:"6.00"},{id:"1234563",name:"好吃的薯片",barcode:"12421432143214323",price:"7.00",num:"4",amount:"28.00"},{id:"1234564",name:"特别好吃的蛋卷",barcode:"12421432143214324",price:"8.50",num:"3",amount:"25.50"}],pageSize:10,pageNo:1,totalPage:1,totalCount:10})}).then(function(t){return t})},scheduleColumns:[{title:"时间",dataIndex:"time",key:"time"},{title:"当前进度",dataIndex:"rate",key:"rate"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作员ID",dataIndex:"operator",key:"operator"},{title:"耗时",dataIndex:"cost",key:"cost"}],loadScheduleData:function(){return new i.a(function(t){t({data:[{key:"1",time:"2017-10-01 14:10",rate:"联系客户",status:"processing",operator:"取货员 ID1234",cost:"5mins"},{key:"2",time:"2017-10-01 14:05",rate:"取货员出发",status:"success",operator:"取货员 ID1234",cost:"1h"},{key:"3",time:"2017-10-01 13:05",rate:"取货员接单",status:"success",operator:"取货员 ID1234",cost:"5mins"},{key:"4",time:"2017-10-01 13:00",rate:"申请审批通过",status:"success",operator:"系统",cost:"1h"},{key:"5",time:"2017-10-01 12:00",rate:"发起退货申请",status:"success",operator:"用户",cost:"5mins"}],pageSize:10,pageNo:1,totalPage:1,totalCount:10})}).then(function(t){return t})}}},filters:{statusFilter:function(t){var e={processing:"进行中",success:"完成",failed:"失败"};return e[t]}},computed:{title:function(){return this.$route.meta.title}}},P=B,E=(s("3d04"),s("2877")),Z=Object(E["a"])(P,a,n,!1,null,"b07fb006",null);e["default"]=Z.exports}}]);
//# sourceMappingURL=chunk-1a9841e1.b1c5253c.js.map