(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,n){e.exports=n(234)},171:function(e,t,n){},208:function(e,t,n){e.exports=n.p+"static/media/1.584a327d.jpg"},221:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n(27),o=n(37),i=n(128),u=n(60),p={collSpan:!1,path:"/home",title:"\u9996\u9875",panes:[{title:"\u9996\u9875",key:"/home"}],authList:[{title:"\u4e2a\u4eba\u4e2d\u5fc3",path:"/auth"},{title:"\u8bbe\u7f6e\u4e2d\u5fc3",path:"/setting"},{title:"\u9000\u51fa",path:"/login"}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COLLSPAN":return Object(u.a)({},e,{collSpan:!e.collSpan});case"ACTIVEDROUTER":var n=t.payload,a=n.title,l=n.key;return e.panes.filter(function(e){return e.title===a}).length<1&&e.panes.push(t.payload),Object(u.a)({},e,{path:l,title:a,panes:e.panes});case"CHANGEKEY":return Object(u.a)({},e,{path:t.payload});case"REMOVETAG":var r=t.payload,c=r.newPanes,o=r.path;return Object(u.a)({},e,{panes:c,path:o});case"CLEARTAGS":return Object(u.a)({},e,{panes:[{title:"\u9996\u9875",key:"/home"}],path:"/home",title:"\u9996\u9875"});default:return e}},h=Object(o.combineReducers)({layout:s}),m=Object(o.createStore)(h,Object(i.composeWithDevTools)(Object(o.applyMiddleware)())),d=n(43),f=n(38),y=(n(71),n(30)),b=n(49),E=n(50),g=n(53),v=n(51),k=n(54),O=(n(110),n(113)),j=(n(162),n(131)),S=(n(164),n(134)),C=(n(166),n(79)),P=(n(107),n(11)),w=(n(96),n(28)),A=(n(171),function(e){return{type:"ACTIVEDROUTER",payload:e}}),I=function(e){return{type:"REMOVETAG",payload:e}},T=function(){return{type:"CLEARTAGS"}},N=y.a.Header,R=n(208),z=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).clickHandle=function(e){var t=e.key,a=e.domEvent.target.innerText;"/login"!==t?(m.dispatch(A({title:a,key:t})),n.props.history.push(t)):(m.dispatch(T()),localStorage.removeItem("path"),localStorage.removeItem("title"),n.props.history.push("/login"))},n.menu=function(){return l.a.createElement(w.b,{onClick:n.clickHandle},n.props.authList.map(function(e){return l.a.createElement(w.b.Item,{key:e.path},e.title)}))},n}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toggle,n=e.collSpan,a=e.title;return l.a.createElement(N,{className:"header"},l.a.createElement("div",{className:"left-box"},l.a.createElement(P.a,{className:"trigger",onClick:t,type:n?"menu-unfold":"menu-fold"}),l.a.createElement(C.a,null,l.a.createElement(C.a.Item,null,l.a.createElement(P.a,{type:"home"})),l.a.createElement(C.a.Item,null,a))),l.a.createElement("div",null,l.a.createElement(S.a,{count:99,className:"bandge"},l.a.createElement(P.a,{type:"notification",style:{fontSize:26},theme:"filled"})),l.a.createElement(O.a,{overlay:this.menu},l.a.createElement(j.a,{size:45,shape:"circle",src:R}))))}}]),t}(a.PureComponent),H=Object(c.b)(function(e){return e.layout},function(e){return{toggle:function(){e({type:"COLLSPAN"})}}})(Object(f.f)(z)),G=(n(221),[{title:"\u9996\u9875",path:"/home",icon:"home"},{title:"\u89d2\u8272\u7ba1\u7406",icon:"user",children:[{title:"\u7528\u6237\u7ba1\u7406",path:"/user/addUser"},{title:"\u4ea4\u6613\u6743\u9650",path:"/user/purview"},{title:"\u7528\u6237\u8d44\u6e90",path:"/user/source"}]},{title:"\u865a\u62df\u8d27\u5e01\u7ba1\u7406",icon:"slack",children:[{title:"\u6570\u5b57\u8d27\u5e01",path:"/currency/create"},{title:"\u865a\u62df\u5e01\u6743\u9650",path:"/currency/authority"}]},{title:"\u8d44\u6e90\u7ba1\u7406",icon:"radar-chart",children:[{title:"\u6bd4\u7279\u5e01\u8d44\u6e90",path:"/source/btb"}]},{title:"\u7edf\u8ba1\u5206\u6790",icon:"area-chart",children:[{title:"\u7528\u6237\u603b\u6536\u76ca",path:"/analyze/allAnalys"},{title:"\u865a\u62df\u8d27\u5e01\u6536\u76ca",path:"/analyze/btIncome"},{title:"\u865a\u62df\u8d27\u5e01\u5e02\u503c",path:"/analyze/marketValue"}]},{title:"\u4ea4\u6613\u8bb0\u5f55",icon:"sketch",children:[{title:"\u6628\u65e5\u4ea4\u6613\u8bb0\u5f55",path:"/record/yestodayTrande"}]}]),K=y.a.Sider,L=w.b.SubMenu;var M=Object(c.b)(function(e){return e.layout},function(e){return{menuHandleClick:function(t){var n=t.key,a=t.domEvent.target.innerText;localStorage.setItem("path",n),localStorage.setItem("title",a),e(A({title:a,key:n}))}}})(Object(f.f)(function(e){var t=e.collSpan,n=e.menuHandleClick,a=e.path;return l.a.createElement("div",null,l.a.createElement("div",{className:"logo",style:t?{width:55}:{width:"100%"}},t?l.a.createElement("div",null,l.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"icon"})):l.a.createElement("div",null,l.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"icon"}),l.a.createElement("h1",null,"SZHB-Admin"))),l.a.createElement(K,{className:"sidebar",collapsed:t,collapsible:!0,trigger:null},l.a.createElement(w.b,{onSelect:n,theme:"light",mode:"inline",defaultSelectedKeys:[a]},function e(t){return t.map(function(t){return t.children?l.a.createElement(L,{title:l.a.createElement("span",null,l.a.createElement(P.a,{type:t.icon}),l.a.createElement("span",null,t.title)),key:t.title},e(t.children)):l.a.createElement(w.b.Item,{title:t.title,key:t.path},l.a.createElement(d.b,{to:t.path,className:"link"},t.icon?l.a.createElement(P.a,{type:t.icon}):null,l.a.createElement("span",null,t.title)))})}(G))))})),x=(n(146),n(95)),V=(n(223),n(224),y.a.Content),D=function(e){return l.a.createElement(V,{className:"container"},e.children)},U=x.a.TabPane,B=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).onEdit=function(e){var t,a=n.props,l=a.path,r=a.panes,c=a.history;r.forEach(function(n,a){n.key===e&&(t=a-1)});var o=r.filter(function(t){return t.key!==e});o.length&&l===e&&(l=t>=0?o[t].key:o[0].key),m.dispatch(I({path:l,newPanes:o})),c.push(l)},n.tabclick=function(e){n.props.history.push(e)},n}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onChange,a=e.path,r=e.panes;return l.a.createElement(x.a,{hideAdd:!0,onChange:n,activeKey:a,type:"editable-card",onEdit:this.onEdit,tabBarGutter:0,onTabClick:this.tabclick},r.map(function(e,n){return l.a.createElement(U,{tab:e.title,key:e.key,closable:n},l.a.createElement(D,null," ",t))}))}}]),t}(a.PureComponent),q=Object(c.b)(function(e){return e.layout},function(e){return{onChange:function(t){e({type:"CHANGEKEY",payload:t})}}})(Object(f.f)(B)),J=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("path"),t=localStorage.getItem("title");e&&t?this.props.goPage(e,t):this.props.history.replace("/home")}},{key:"render",value:function(){return l.a.createElement(y.a,null,l.a.createElement(M,null),l.a.createElement(y.a,null,l.a.createElement(H,null),l.a.createElement(q,null,this.props.children)))}}]),t}(a.PureComponent),W=Object(c.b)("",function(e){return{goPage:function(t,n){e(A({title:n,key:t}))}}})(Object(f.f)(J)),Y=(n(148),n(126)),Z=n(16),F=n.n(Z),Q=function(){return l.a.createElement(Y.a,null)},X=F()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(5),n.e(12)]).then(n.bind(null,937))},loading:Q}),$=F()({loader:function(){return n.e(13).then(n.bind(null,938))},loading:Q}),_=[{path:"/home",component:F()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(8)]).then(n.bind(null,949))},loading:Q})},{path:"/user/addUser",component:F()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,939))},loading:Q})},{path:"/user/purview",component:F()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(10)]).then(n.bind(null,940))},loading:Q})},{path:"/user/source",component:F()({loader:function(){return n.e(19).then(n.bind(null,941))},loading:Q})},{path:"/source/btb",component:F()({loader:function(){return n.e(18).then(n.bind(null,942))},loading:Q})},{path:"/analyze/allAnalys",component:F()({loader:function(){return n.e(15).then(n.bind(null,943))},loading:Q})},{path:"/record/yestodayTrande",component:F()({loader:function(){return n.e(17).then(n.bind(null,944))},loading:Q})},{path:"/currency/create",component:F()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(11)]).then(n.bind(null,945))},loading:Q})},{path:"/currency/authority",component:F()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,946))},loading:Q})},{path:"/analyze/btIncome",component:F()({loader:function(){return n.e(14).then(n.bind(null,947))},loading:Q})},{path:"/analyze/marketValue",component:F()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,948))},loading:Q})}],ee=function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/login",exact:!0,component:X,keylength:"/login"}),l.a.createElement(f.a,{render:function(){return l.a.createElement(W,null,l.a.createElement(f.c,null,_.map(function(e,t){return l.a.createElement(f.a,{path:e.path,component:e.component,key:t})})))}}),l.a.createElement(f.a,{component:$}))))},te=(n(233),function(){return l.a.createElement(c.a,{store:m},l.a.createElement(ee,null))});Object(r.render)(l.a.createElement(te,null),document.getElementById("root"))}},[[150,7,9]]]);
//# sourceMappingURL=main.8a6a67f1.chunk.js.map