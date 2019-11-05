(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{28:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),o=t(2),s=t(3),i=t(5),m=t(4),u=t(6),p=t(11),h=t(10),d=function(e){var a=e.appTitle;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},a),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"fa fa-home"})," Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{className:"nav-link",to:"/contact/add"},r.a.createElement("i",{className:"fa fa-plus"})," Contact Add")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{className:"nav-link",to:"/about"},r.a.createElement("i",{className:"fa fa-question"})," About"))))))};d.defaultProps={appTitle:"Contact Manager"};var b=d,f=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"leads"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}}]),a}(n.Component),v=(n.Component,t(14)),E=t(27);function g(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?g(t,!0).forEach((function(a){Object(v.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O=r.a.createContext(),N=function(e,a){switch(a.type){case"DELETE_CONTACT":return y({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return y({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});default:return e}},C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState((function(a){return N(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=O.Consumer,j=t(25),w=t.n(j),S=t(26),P=t.n(S),D=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,l=e.type,o=e.onChange,s=e.id,i=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:l,name:t,className:P()("form-control form-control-lg",{"is-invalid":i}),placeholder:c,value:n,onChange:o,id:s}),i&&r.a.createElement("div",{className:"invalid-feedback"},i))};D.defaultProps={type:"text"};var A=D;function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(t,!0).forEach((function(a){Object(v.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var F={name:"",email:"",phone:"",country:"",gender:"",skills:[],errors:{}},I=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state=x({},F),e.onChange=function(a){"checkbox"===a.target.type?a.target.checked?e.setState(x({},e.state,{skills:e.state.skills.concat(a.target.value)})):e.setState(x({},e.state,{skills:e.state.skills.filter((function(e){return e!==a.target.value}))})):e.setState(Object(v.a)({},a.target.name,a.target.value))},e.onSubmit=function(a,t){t.preventDefault();var n=e.state,r=n.name,c=n.email,l=n.phone,o=n.country,s=n.gender,i=n.skills,m={id:w()(),name:r,email:c,phone:l,country:o,gender:s,skills:i};""!==r?""!==c?""!==l?(a({type:"ADD_CONTACT",payload:m}),e.myForm.current.reset(),e.setState(x({},F)),e.props.history.push("/"),console.log(e.state)):e.setState({errors:{phone:"Phone is required"}}):e.setState({errors:{email:"Email is required"}}):e.setState({errors:{name:"Name is required"}})},e.myForm=r.a.createRef(),e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,l=a.errors;return r.a.createElement(k,null,(function(a){var o=a.dispatch;return r.a.createElement("div",{className:"card my-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{ref:e.myForm,onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(A,{label:"Name",name:"name",placeholder:"Enter name...",value:t,onChange:e.onChange,id:"name",error:l.name}),r.a.createElement(A,{label:"Email",name:"email",placeholder:"Enter email...",value:n,onChange:e.onChange,id:"email",error:l.email}),r.a.createElement(A,{label:"Phone",name:"phone",placeholder:"Enter phone...",value:c,onChange:e.onChange,id:"phone",error:l.phone}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"country"},"Choose Your Country"),r.a.createElement("select",{name:"country",className:"form-control form-control-lg",onChange:e.onChange,id:"country"},r.a.createElement("option",null,"Choose Your Country"),r.a.createElement("option",{value:"Bangladesh"},"Bangladesh"),r.a.createElement("option",{value:"India"},"India"),r.a.createElement("option",{value:"Pakistan"},"Pakistan"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"gender",onChange:e.onChange,value:"Male",id:"gender1"}),r.a.createElement("label",{htmlFor:"gender1",className:"form-check-label"},"Male")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"gender",onChange:e.onChange,value:"Female",id:"gender2"}),r.a.createElement("label",{htmlFor:"gender2",className:"form-check-label"},"Female"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("h5",null,"Skills"),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{name:"skills",className:"form-check-input",type:"checkbox",onChange:e.onChange,value:"HTML5",id:"html"}),r.a.createElement("label",{htmlFor:"html",className:"form-check-label"},"HTML5")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{name:"skills",className:"form-check-input",type:"checkbox",onChange:e.onChange,value:"CSS3",id:"css"}),r.a.createElement("label",{htmlFor:"css",className:"form-check-label"},"CSS3")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{name:"skills",className:"form-check-input",type:"checkbox",onChange:e.onChange,value:"Javascript",id:"js"}),r.a.createElement("label",{htmlFor:"js",className:"form-check-label"},"Javascript"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btn btn-block btn-success",value:"Submit"})))))}))}}]),a}(n.Component),M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(e,a){a({type:"DELETE_CONTACT",payload:e})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,l=a.phone,o=a.country,s=a.gender,i=a.skills;return r.a.createElement(k,null,(function(a){var m=a.dispatch;return r.a.createElement("div",{className:"card card-body my-3"},r.a.createElement("h3",null,n,r.a.createElement("i",{className:"fa fa-sort-desc",onClick:e.onShowClick,style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fa fa-times",onClick:e.onDeleteClick.bind(e,t,m),style:{cursor:"pointer",float:"right",color:"#eb1b33"}})),e.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Contact: ",l),r.a.createElement("li",{className:"list-group-item"},"Country: ",0===o.length?"N/A":o),r.a.createElement("li",{className:"list-group-item"},"Gender: ",0===s.length?"N/A":s),r.a.createElement("li",{className:"list-group-item"},"Skills: ",0===i.length?"N/A":i.join(" , "))):null)}))}}]),a}(n.Component),L=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,(function(e){var a=e.contacts;return r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),0===a.length?r.a.createElement("h4",{className:"text-secondary my-3"},"There is no contact"):a.map((function(e){return r.a.createElement(M,{contact:e,key:e.id})})))}))}}]),a}(n.Component),q=(t(40),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{component:L}),r.a.createElement(h.a,{exact:!0,path:"/about",component:f}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:I}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c9d9b4cd.chunk.js.map