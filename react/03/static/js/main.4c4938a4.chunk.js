(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=a(3),o=a(4),s=a(6),m=a(5),u=a(7),d=a(12),b=a(10),p=a(23),h=a(26),f=a(15),E=a.n(f);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=r.a.createContext(),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],title:"",editItem:!1},a.handleChange=function(e){a.setState({title:e.target.value})},a.handleSubmit=function(e){if(e.preventDefault(),""===a.state.title)alert("Title is required");else{var t=[{id:E()(),title:a.state.title}].concat(Object(h.a)(a.state.items));a.setState({items:t,title:"",id:E()(),editItem:!1})}},a.clearList=function(){a.setState({items:[]})},a.handleDelete=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.handleEdit=function(e){var t=a.state.items.filter((function(t){return t.id!==e})),n=a.state.items.find((function(t){return t.id===e}));a.setState({items:t,title:n.title,id:e,editItem:!0})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(j.Provider,{value:O({},this.state,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit})},this.props.children)}}]),t}(n.Component),y=j.Consumer,N=(a(34),a(35),function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fa fa-question"})," About"))))))});N.defaultProps={branding:"Logo"};var k=N,x=function(e){var t=e.copyright;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"p-3 mb-2 bg-dark text-white text-center"},"\xa92019  ",r.a.createElement("a",{href:"https://jakdev047.github.io/"},t)))};x.defaultProps={copyright:"Jubayer Alam Khan"};var w=x,C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.item.title;return r.a.createElement("li",{className:"list-group-item text-capitalize d-flex justify-content-between my-2"},r.a.createElement("h6",null,e),r.a.createElement("div",{className:"todo-icon"},r.a.createElement("span",{className:"mx-2 text-success",onClick:this.props.handleEdit},r.a.createElement("i",{className:"fa fa-pencil"})),r.a.createElement("span",{className:"mx-2 text-danger",onClick:this.props.handleDelete},r.a.createElement("i",{className:"fa fa-trash"}))))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null,(function(e){var t=e.items,a=e.clearList,c=e.handleDelete,l=e.handleEdit;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"list-group my-5"},r.a.createElement("h3",{className:"text-capitalize text-center"},"todo list"),r.a.createElement(n.Fragment,null,t.map((function(e,t){return r.a.createElement(C,{item:e,key:t,handleDelete:function(){return c(e.id)},handleEdit:function(){return l(e.id)}})}))),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-block text-capitalize mt-5",onClick:a},"clear list"))))}))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null,(function(e){var t=e.title,a=e.handleChange,c=e.handleSubmit,l=e.editItem;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-4"},r.a.createElement("h3",{className:"text-capitalize text-center"},"todo input"))),r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("form",{onSubmit:c},r.a.createElement("div",{className:"input-group "},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text bg-primary text-white"},r.a.createElement("i",{className:"fa fa-book"})),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"add a todo item",value:t,onChange:a}))),r.a.createElement("button",{type:"submit",className:l?"btn btn-block btn-success mt-3 text-capitalize":"btn btn-block btn-primary mt-3 text-capitalize"},l?"edit item":"add item")))))}))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(D,null),r.a.createElement(S,null))}}]),t}(n.Component),z=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4"},"About"),r.a.createElement("p",{className:"lead"},"Simple About Page"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(d.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(k,{branding:"ToDo"}),r.a.createElement("div",{className:"container"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:P}),r.a.createElement(b.a,{exact:!0,path:"/about",component:z}),r.a.createElement(b.a,{component:P}))),r.a.createElement(w,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4c4938a4.chunk.js.map