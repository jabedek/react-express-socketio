(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),u=n(7),i=n(8),o=n(11),m=n(10),s=n(5),h=(n(26),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"logo"},"cyber chat")))}),E=function(e){return function(t){Object(o.a)(a,t);var n=Object(m.a)(a);function a(){return Object(u.a)(this,a),n.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(e,this.props))}}]),a}(r.a.Component)},p=n(9),f=E((function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{class:"gradient-bg"},r.a.createElement(p.b,{to:"./chat"},r.a.createElement("button",{variant:"raised"},"My chat")),r.a.createElement(p.b,{to:"./list"},r.a.createElement("button",{variant:"raised"},"My list"))))})),b=E((function(){return r.a.createElement("div",null,"chat")})),d=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getList=function(){fetch("/api/getList").then((function(e){return e.json()})).then((function(e){return a.setState({list:e})}))},a.state={list:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){var e=this.state.list;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"List of Items"),e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("div",null,e)}))):r.a.createElement("div",null,r.a.createElement("h2",null,"No List Items Found")))}}]),n}(r.a.Component),v=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=function(){return r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:f}),r.a.createElement(s.a,{exact:!0,path:"/chat",component:b}),r.a.createElement(s.a,{exact:!0,path:"/list",component:d})))};return r.a.createElement(s.c,null,r.a.createElement(e,null))}}]),n}(r.a.Component);l.a.render(r.a.createElement(p.a,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1a4d1a82.chunk.js.map