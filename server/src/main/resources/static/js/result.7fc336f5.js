(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["result"],{"3ada":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-card",{attrs:{bordered:!1}},[i("result",{attrs:{"is-success":!0,description:t.description,title:t.title}},[i("template",{slot:"action"},[i("a-button",{attrs:{type:"primary"}},[t._v("返回列表")]),i("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("查看项目")]),i("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("打印")])],1),i("div",[i("div",{staticStyle:{"font-size":"16px",color:"rgba(0, 0, 0, 0.85)","font-weight":"500","margin-bottom":"20px"}},[t._v("项目名称")]),i("a-row",{staticStyle:{"margin-bottom":"16px"}},[i("a-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:6}},[i("span",{staticStyle:{color:"rgba(0, 0, 0, 0.85)"}},[t._v("项目 ID：")]),t._v("\n          20180724089\n        ")]),i("a-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:6}},[i("span",{staticStyle:{color:"rgba(0, 0, 0, 0.85)"}},[t._v("负责人：")]),t._v("\n          曲丽丽是谁？\n        ")]),i("a-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:12}},[i("span",{staticStyle:{color:"rgba(0, 0, 0, 0.85)"}},[t._v("生效时间：")]),t._v("\n          2016-12-12 ~ 2017-12-12\n        ")])],1),i("a-steps",{attrs:{current:1,direction:t.isMobile()&&t.directionType.vertical||t.directionType.horizontal,progressDot:""}},[i("a-step",[i("span",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},slot:"title"},[t._v("创建项目")]),i("template",{slot:"description"},[i("div",{staticStyle:{fontSize:"12px",color:"rgba(0, 0, 0, 0.45)",position:"relative",left:"42px"},attrs:{slot:"description"},slot:"description"},[i("div",{staticStyle:{margin:"8px 0 4px"}},[t._v("\n                曲丽丽\n                "),i("a-icon",{staticStyle:{"margin-left":"8px"},attrs:{type:"dingding-o"}})],1),i("div",[t._v("2016-12-12 12:32")])])])],2),i("a-step",{attrs:{title:"部门初审"}},[i("span",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},slot:"title"},[t._v("部门初审")]),i("template",{slot:"description"},[i("div",{staticStyle:{fontSize:"12px",color:"rgba(0, 0, 0, 0.45)",position:"relative",left:"42px"},attrs:{slot:"description"},slot:"description"},[i("div",{staticStyle:{margin:"8px 0 4px"}},[t._v("\n                周毛毛\n                "),i("a-icon",{staticStyle:{"margin-left":"8px",color:"#00A0E9"},attrs:{type:"dingding-o"}})],1),i("div",[i("a",{attrs:{href:""}},[t._v("催一下")])])])])],2),i("a-step",{attrs:{title:"财务复核"}},[i("span",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},slot:"title"},[t._v("财务复核")])]),i("a-step",{attrs:{title:"完成"}},[i("span",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},slot:"title"},[t._v("完成")])])],1)],1)],2)],1)},a=[],n=(i("cadf"),i("551c"),i("097d"),i("9a3d")),r=i("ac0d"),l={horizontal:"horizontal",vertical:"vertical"},o={name:"Success",components:{Result:n["a"]},mixins:[r["b"]],data:function(){return{title:"提交成功",description:"提交结果页用于反馈一系列操作任务的处理结果，\n 如果仅是简单操作，使用 Message 全局提示反馈即可。\n 本文字区域可以展示简单的补充说明，如果有类似展示\n “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。",directionType:l}}},c=o,p=i("2877"),d=Object(p["a"])(c,s,a,!1,null,"1b253efe",null);e["default"]=d.exports},"881d":function(t,e,i){"use strict";var s=i("f2aa"),a=i.n(s);a.a},"9a3d":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"result"},[i("div",[i("a-icon",{class:{icon:!0,success:t.isSuccess,error:!t.isSuccess},attrs:{type:t.isSuccess?"check-circle":"close-circle"}})],1),t.title?i("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t.description?i("div",{staticClass:"description"},[t._v(t._s(t.description))]):t._e(),t.content?i("div",{staticClass:"content"},[t._t("default")],2):t._e(),i("div",{staticClass:"action"},[t._t("action")],2)])},a=[],n={name:"Result",props:{isSuccess:{type:Boolean,default:!1},title:{type:String,default:""},description:{type:String,default:""},content:{type:Boolean,default:!0}}},r=n,l=(i("881d"),i("2877")),o=Object(l["a"])(r,s,a,!1,null,"833e4bc6",null);e["a"]=o.exports},f2aa:function(t,e,i){},f32b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-card",{attrs:{bordered:!1}},[i("result",{attrs:{"is-success":!1,title:t.title,description:t.description}},[i("template",{slot:"action"},[i("a-button",{attrs:{type:"primary"}},[t._v("返回修改")])],1),i("div",[i("div",{staticStyle:{"font-size":"16px",color:"rgba(0, 0, 0, 0.85)","font-weight":"500","margin-bottom":"16px"}},[t._v("\n        您提交的内容有如下错误：\n      ")]),i("div",{staticStyle:{"margin-bottom":"16px"}},[i("a-icon",{staticStyle:{color:"#f5222d","margin-right":"8px"},attrs:{type:"close-circle-o"}}),t._v("\n        您的账户已被冻结\n        "),i("a",{staticStyle:{"margin-left":"16px"}},[t._v("立即解冻 "),i("a-icon",{attrs:{type:"right"}})],1)],1),i("div",[i("a-icon",{staticStyle:{color:"#f5222d","margin-right":"8px"},attrs:{type:"close-circle-o"}}),t._v("\n        您的账户还不具备申请资格\n        "),i("a",{staticStyle:{"margin-left":"16px"}},[t._v("立即升级 "),i("a-icon",{attrs:{type:"right"}})],1)],1)])],2)],1)},a=[],n=i("9a3d"),r={name:"Error",components:{Result:n["a"]},data:function(){return{title:"提交失败",description:"请核对并修改以下信息后，再重新提交。"}}},l=r,o=i("2877"),c=Object(o["a"])(l,s,a,!1,null,"7f687f10",null);e["default"]=c.exports}}]);
//# sourceMappingURL=result.7fc336f5.js.map