(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(4),a=n.n(c),s=n(6),l=n(2);function i(){var e=function(e,t){var n=r.a.useState(!0),o=Object(l.a)(n,2),c=o[0],a=o[1],s=r.a.useState(!1),i=Object(l.a)(s,2),d=i[0],u=i[1],j=r.a.useState(!0),O=Object(l.a)(j,2),b=O[0],f=O[1],p=r.a.useState(t),m=Object(l.a)(p,2),h=m[0],v=m[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),v(n),f(!1),a(!0)}catch(d){u(d)}}),3e3)}),[c]),{item:h,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),v(t)}catch(d){u(d)}},loading:b,error:d,sincronizeItem:function(){f(!0),a(!1)}}}("TODOS_V1",[]),t=e.item,n=e.saveItem,o=e.sincronizeItem,c=e.loading,a=e.error,i=r.a.useState(""),d=Object(l.a)(i,2),u=d[0],j=d[1],O=r.a.useState(!1),b=Object(l.a)(O,2),f=b[0],p=b[1],m=r.a.useState(""),h=Object(l.a)(m,2),v=(h[0],h[1]),x=t.filter((function(e){return!!e.completed})).length,g=t.length,T=[];T=!u.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),n=u.toLowerCase();return t.includes(n)}));return{loading:c,error:a,totalTodos:g,completedTodos:x,searchValue:u,setSearchValue:j,searchedTodos:T,addTodo:function(e){if(e.trim()){v("");var o=Object(s.a)(t);o.push({completed:!1,text:e}),n(o)}else v("No puedes a\xf1adir un TODO vac\xedo")},completeTodo:function(e){var o=t.findIndex((function(t){return t.text===e})),r=Object(s.a)(t);r[o].completed=!r[o].completed,n(r)},deleteTodo:function(e){var o=t.findIndex((function(t){return t.text===e})),r=Object(s.a)(t);r.splice(o,1),n(r)},openModal:f,setOpenModal:p,sincronizeTodos:o}}var d=n(0);function u(e){var t=e.children,n=e.loading;return Object(d.jsx)("header",{children:r.a.Children.toArray(t).map((function(e){return r.a.cloneElement(e,{loading:n})}))})}n(13);function j(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(d.jsxs)("div",{className:"TodoCounter",children:[Object(d.jsxs)("h2",{className:"TodoCounter ".concat(!!o&&"TodoCounter--loading"),children:["Has completado ",n," de ",t," TODOs"]}),n===t&&t>0&&Object(d.jsx)("h2",{children:"\xa1Felicidades! Has completado todas tus tareas \ud83c\udf89"})]})}n(14);function O(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return Object(d.jsx)("div",{className:"TodoSearchContainer",children:Object(d.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)},disabled:o})})}n(15);function b(e){var t=e.children||e.render;return Object(d.jsxs)("section",{className:"TodoList-container",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySeachResults(e.searchText),!e.loading&&!e.error&&e.searchedTodos.map(t),Object(d.jsx)("ul",{children:e.children})]})}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function h(e,t){var n=e.title,r=e.titleId,c=p(e,["title","titleId"]);return o.createElement("svg",f({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,m)}var v=o.forwardRef(h);n.p;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function y(e,t){var n=e.title,r=e.titleId,c=g(e,["title","titleId"]);return o.createElement("svg",x({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,T)}var S=o.forwardRef(y),N=(n.p,n(16),{check:function(e){return Object(d.jsx)(v,{className:"Icon-svg Icon-svg--check",style:{fill:e}})},delete:function(e){return Object(d.jsx)(S,{className:"Icon-svg Icon-svg--delete",style:{fill:e}})}});function C(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick,c=e.onMouseEnter,a=e.onMouseLeave;return Object(d.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,onMouseEnter:c,onMouseLeave:a,children:N[t](o)})}function I(e){var t=e.completed,n=e.onToggle,r=Object(o.useState)(!1),c=Object(l.a)(r,2),a=c[0],s=c[1],i=t?a?"red":"green":a?"green":"gray";return Object(d.jsx)(C,{type:"check",color:i,onClick:n,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}})}function L(e){var t=e.onDelete,n=Object(o.useState)(!1),r=Object(l.a)(n,2),c=r[0],a=r[1],s=c?"red":"gray";return Object(d.jsx)(C,{type:"delete",color:s,onClick:t,onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)}})}n(17);function w(e){return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)(I,{completed:e.completed,onToggle:function(){return e.completeTodo(e.text)}}),Object(d.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(d.jsx)(L,{onDelete:e.onDelete})]})}function E(){return Object(d.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(18);function M(){return Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}n(19);function D(e){var t=e.addTodo,n=e.setOpenModal,r=Object(o.useState)(""),c=Object(l.a)(r,2),a=c[0],s=c[1],i=Object(o.useState)(""),u=Object(l.a)(i,2),j=u[0],O=u[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.trim()?(t(a),n(!1)):O("No puedes a\xf1adir un TODO vac\xedo.")},children:[Object(d.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(d.jsx)("textarea",{value:a,onChange:function(e){s(e.target.value),j&&O("")},placeholder:"Cortar la cebolla para el almuerzo"}),j&&Object(d.jsx)("p",{className:"TodoForm-error",children:j}),Object(d.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(d.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){n(!1)},children:"Cancelar"}),Object(d.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}n(20);function k(e){return Object(d.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(21);function z(e){var t=e.children;return a.a.createPortal(Object(d.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(22),n(23);function V(){return Object(d.jsx)("div",{className:"empty-todos-container",children:Object(d.jsx)("p",{className:"empty-todos-message",children:"\u2728 \xa1Crea tu primer TODO y haz que tu d\xeda sea m\xe1s productivo! \u2728"})})}n(24);function F(e){var t=function(e){var t=r.a.useState(!1),n=Object(l.a)(t,2),o=n[0],c=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(console.log("Hubo Cambios en TODOS_V1"),c(!0))})),{show:o,toggleShow:function(){e(),c(!1)}}}(e.sincronize),n=t.show,o=t.toggleShow;return n?Object(d.jsx)("div",{className:"ChangeAlert-bg",children:Object(d.jsxs)("div",{className:"ChangeAlert-container",children:[Object(d.jsx)("p",{children:"Parece que cambiaste tus TODOs en otra pesta\xf1a o ventana del navegador."}),Object(d.jsx)("p",{children:"\xbfQuieres sincronizar tus TODOs?"}),Object(d.jsx)("button",{className:"TodoForm-button TodoForm-button--add",onClick:o,children:"Yes!"})]})}):null}var P=function(){var e=i(),t=e.error,n=e.loading,o=e.searchedTodos,c=e.completeTodo,a=e.deleteTodo,s=e.openModal,l=e.setOpenModal,f=e.totalTodos,p=e.completedTodos,m=e.searchValue,h=e.setSearchValue,v=e.addTodo,x=e.sincronizeTodos;return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsxs)(u,{loading:n,children:[Object(d.jsx)(j,{totalTodos:f,completedTodos:p}),Object(d.jsx)(O,{searchValue:m,setSearchValue:h,searchedTodos:o})]}),Object(d.jsx)(b,{error:t,loading:n,searchedTodos:o,searchText:m,totalTodos:f,onError:function(){return Object(d.jsx)(E,{})},onLoading:function(){return Object(d.jsx)(M,{})},onEmptyTodos:function(){return Object(d.jsx)(V,{})},onEmptySeachResults:function(e){return Object(d.jsxs)("div",{className:"EmptySearchResults",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16","clip-rule":"evenodd"}),Object(d.jsx)("path",{fill:"currentColor",d:"M11.854 4.854a.5.5 0 0 0-.707-.707L8 7.293L4.854 4.147a.5.5 0 1 0-.707.707L7.293 8l-3.146 3.146a.5.5 0 0 0 .707.708L8 8.707l3.147 3.147a.5.5 0 0 0 .707-.708L8.708 8z"})]}),Object(d.jsxs)("p",{children:["No se encontraron resultados para ",Object(d.jsxs)("span",{children:['"',e,'"']}),"."]}),Object(d.jsx)("p",{children:"\xa1Intenta buscar algo diferente!"})]})},children:function(e){return Object(d.jsx)(w,{text:e.text,completed:e.completed,completeTodo:c,onDelete:function(){return a(e.text)}},e.text)}}),!!s&&Object(d.jsx)(z,{children:Object(d.jsx)(D,{addTodo:v,setOpenModal:l})}),Object(d.jsx)(k,{setOpenModal:l}),Object(d.jsx)(F,{sincronize:x})]})};n(25);a.a.render(Object(d.jsx)(P,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.3529efcb.chunk.js.map