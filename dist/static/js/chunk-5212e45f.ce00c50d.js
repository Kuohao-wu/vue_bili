(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5212e45f"],{"0474":function(t,e,a){},"3ad6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{attrs:{user_img:t.model.user_img}}),a("div",{staticClass:"detail_info"},[a("div",{staticClass:"video"},[a("video",{staticStyle:{width:"100%"},attrs:{controls:"",src:t.aitem.content}})]),a("div",{staticClass:"detail_info_text"},[a("div",[void 0!=t.aitem.category?a("span",[t._v(t._s(t.aitem.category.title))]):t._e(),a("span",[t._v(t._s(t.aitem.name))])]),a("div",[void 0!=t.aitem.userinfo?a("span",[t._v(t._s(t.aitem.userinfo.name))]):t._e(),a("span",[t._v("156万次观看")]),a("span",[t._v("5100弹幕")]),a("span",[t._v(t._s(t.aitem.date))])]),a("div",[a("p",[a("van-icon",{attrs:{name:"star-o",size:"5.556vw"}}),a("span",[t._v("收藏")])],1),a("p",[a("van-icon",{attrs:{name:"down",size:"5.556vw"}}),a("span",[t._v("缓存")])],1),a("p",[a("van-icon",{attrs:{name:"shrink",size:"5.556vw"}}),a("span",[t._v("分享")])],1)])]),a("div",{staticClass:"detail-parent"},t._l(t.commendlist,(function(t){return a("detail",{key:t.id,staticClass:"detail-item",attrs:{item:t}})})),1),a("div",{staticClass:"comment-parent"},[a("comment",{attrs:{userinfo:t.model}})],1)])],1)},n=[],r=(a("96cf"),a("1da1")),i=a("0790"),c=a("864a"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[t._m(0),a("div",{staticClass:"comment-user"},[a("img",{attrs:{src:t.userinfo.user_img,alt:""}}),a("input",{ref:"input",attrs:{type:"text",placeholder:"说点什么吧"}}),a("button",{on:{click:t.issueComment}},[t._v("发表")])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"comment-title"},[a("span",[t._v("评论")]),a("span",[t._v("(4000)")])])}],l={name:"Comment",props:["userinfo"],methods:{issueComment:function(){}}},u=l,A=(a("733a"),a("2877")),g=Object(A["a"])(u,o,m,!1,null,"58211675",null),d=g.exports,C={name:"Article",data:function(){return{model:[],aitem:{},commendlist:{},comment:[]}},created:function(){this.selectUser(),this.selectArticle(),this.selectCommend()},methods:{selectUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/user/"+localStorage.getItem("id"));case 2:a=e.sent,t.model=a.data[0];case 4:case"end":return e.stop()}}),e)})))()},selectArticle:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/article/"+t.$route.params.id);case 2:a=e.sent,t.aitem=a.data[0];case 4:case"end":return e.stop()}}),e)})))()},selectCommend:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/commend");case 2:a=e.sent,t.commendlist=a.data;case 4:case"end":return e.stop()}}),e)})))()},selectComment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/comment");case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}}),e)})))()}},watch:{$route:function(){this.selectArticle(),this.selectCommend()}},components:{NavBar:i["a"],Detail:c["a"],Comment:d}},p=C,Q=(a("7ea1"),Object(A["a"])(p,s,n,!1,null,"73990d57",null));e["default"]=Q.exports},"4c26":function(t,e){t.exports="data:image/png;base64,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"},"733a":function(t,e,a){"use strict";var s=a("b97b"),n=a.n(s);n.a},"7ea1":function(t,e,a){"use strict";var s=a("0474"),n=a.n(s);n.a},"864a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item",on:{click:t.pathConfirm}},[s("div",{staticClass:"imgparent"},[s("img",{staticStyle:{width:"100%",height:"100px"},attrs:{src:t.item.img,alt:""}}),s("div",{staticClass:"bottom"},[t._m(0),s("div",[s("img",{attrs:{src:a("4c26"),alt:""}}),s("span",{staticClass:"comment"},[t._v(t._s(t.item.commentlen?t.item.commentlen:"66万"))])])])]),s("p",[t._v(" "+t._s(t.item.name)+" ")])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:a("df84"),alt:""}}),s("span",[t._v("1598")])])}],r={props:["item"],methods:{pathConfirm:function(){this.$route.path!="/article/"+this.item.id&&this.$router.push("/article/"+this.item.id)}}},i=r,c=(a("af76"),a("2877")),o=Object(c["a"])(i,s,n,!1,null,"45665177",null);e["a"]=o.exports},af76:function(t,e,a){"use strict";var s=a("d9de"),n=a.n(s);n.a},b97b:function(t,e,a){},d9de:function(t,e,a){},df84:function(t,e,a){t.exports=a.p+"static/img/play.7976dd36.png"}}]);
//# sourceMappingURL=chunk-5212e45f.ce00c50d.js.map