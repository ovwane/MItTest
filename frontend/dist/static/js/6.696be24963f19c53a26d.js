webpackJsonp([6],{"0ves":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"LinksDetails",methods:{openUrl:function(){this.$route.query.links&&window.open(this.$route.query.links)}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("mt-header",{staticStyle:{height:"60px","font-size":"20px","z-index":"1000"},attrs:{title:this.$route.query.remarks}},[r("router-link",{attrs:{slot:"left",to:"/Resource"},slot:"left"},[r("mt-button",{attrs:{icon:"back"}},[r("i",{staticStyle:{"font-style":"normal"}},[t._v("返回")])])],1)],1),t._v(" "),r("mt-cell",{attrs:{title:"名称:",value:this.$route.query.remarks}}),t._v(" "),r("mt-cell",{attrs:{title:"密码:",value:this.$route.query.password}}),t._v(" "),r("div",{staticStyle:{border:"1px solid #606266","border-radius":"5px",margin:"10px"},on:{click:t.openUrl}},[r("div",{staticStyle:{margin:"10px"}},[r("div",{staticStyle:{"font-weight":"bold"}},[t._v("地址:")]),t._v("\n      "+t._s(this.$route.query.links?this.$route.query.links:"空")+"\n    ")])])],1)},staticRenderFns:[]};var n=r("VU/8")(i,s,!1,function(t){r("bgnw")},"data-v-9c43e65c",null);e.default=n.exports},bgnw:function(t,e){}});