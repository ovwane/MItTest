webpackJsonp([9],{hBBo:function(t,e){},m96D:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"companyDetails",mounted:function(){console.log(this.$route.query)}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("mt-header",{staticStyle:{height:"60px","font-size":"20px","z-index":"1000"},attrs:{title:this.$route.query.CompanyName}},[a("router-link",{attrs:{slot:"left",to:"/blackList"},slot:"left"},[a("mt-button",{attrs:{icon:"back"}},[a("i",{staticStyle:{"font-style":"normal"}},[t._v("返回")])])],1)],1),t._v(" "),a("mt-cell",{attrs:{title:"名称:",value:this.$route.query.CompanyName}}),t._v(" "),a("mt-cell",{attrs:{title:"地址:",value:this.$route.query.CompanyAddress}}),t._v(" "),a("mt-cell",{attrs:{title:"时间:",value:this.$route.query.createTime}}),t._v(" "),a("mt-cell",{attrs:{title:"内容:"}}),t._v(" "),a("div",{staticStyle:{margin:"10px"}},[t._v("\n    "+t._s(this.$route.query.ComplainData)+"\n  ")])],1)},staticRenderFns:[]};var n=a("VU/8")(r,l,!1,function(t){a("hBBo")},"data-v-271d9a34",null);e.default=n.exports}});