(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(1),r=t.n(s),c=t(4),o=t.n(c),a=(t(13),t(5)),i=t(6),h=t(2),l=t(8),u=t(7),d=(t(14),t(15),t(16),t(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{src:"https://robohash.org/"+e.monster.id+"?set=set2&size=180x180",alt:"monster"}),Object(d.jsx)("h2",{children:e.monster.name}),Object(d.jsx)("p",{children:e.monster.email})]})},m=function(e){return console.log(e.name),Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(j,{monster:e},e.id)}))})},b=(t(18),function(e){var n=e.placeholder,t=e.handleChange;return Object(d.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(a.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(n){return n.json().then((function(n){return e.setState({monsters:n})}))}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monster Rolodex"}),Object(d.jsx)(b,{placeholder:"search monster",handleChange:this.handleChange}),Object(d.jsx)(m,{monsters:s})]})}}]),t}(s.Component),p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,s=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.19c7182c.chunk.js.map