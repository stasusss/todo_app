(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),i=o(8),r=o.n(i),l=(o(14),o(15),o(6)),s=o(1),c=o(2),d=o(4),u=o(3),p=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={input:"",id:0},t.handleChange=function(e){t.setState({input:e.target.value.replace(/[^\w\s]|^\s+$/g,"")})},t.handleEnterPress=function(e){var o=t.props.addTodo,n=t.state,a=n.input,i=n.id;"Enter"===e.key&&(o({title:a,id:i,completed:!1}),t.setState((function(t){return{input:"",id:t.id+1}})))},t}return Object(c.a)(o,[{key:"render",value:function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"TODOS"),a.a.createElement("input",{className:"new-todo",value:this.state.input,onKeyDown:this.handleEnterPress,onChange:this.handleChange,placeholder:"Write your todo"}))}}]),o}(n.Component),m=o(5),f=o.n(m),h=(f.a.shape({title:f.a.string,id:f.a.number,completed:f.a.bool}),function(t){var e=t.todoList,o=t.todo,n=t.todoListCopy;return a.a.createElement("li",{className:o.completed?"completed":"",key:o.id},a.a.createElement("div",{className:"view"},a.a.createElement("input",{className:"toggle",id:o.id,type:"checkbox",onChange:function(e){var o=e.target.id,a=t.todoList.map((function(t){var e=t;return e.id===+o&&(e.completed=!t.completed),e}));t.getTodos(a,n)},checked:o.completed}),a.a.createElement("label",{htmlFor:o.id},o.title),a.a.createElement("button",{className:"destroy",type:"button",onClick:function(o){var n=o.target.parentElement.firstElementChild.id,a=e.filter((function(t){return t.id!==+n})),i=t.todoListCopy.filter((function(t){return t.id!==+n}));t.getTodos(a,i)}})),a.a.createElement("input",{className:"edit",type:"text"}))}),v=function(t){return a.a.createElement("ul",{className:"todo-list"},t.todoListCopy.map((function(e){return a.a.createElement(h,Object.assign({},t,{todo:e,key:e.id}))})))},g=function(t){return a.a.createElement("section",{className:"main"},a.a.createElement("input",{className:"toggle-all",id:"toggle-all",type:"checkbox",onChange:t.isAllTodoToggle}),a.a.createElement("label",{htmlFor:"toggle-all"},"All complete"),a.a.createElement(v,t))},L=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={activeFilter:"All"},t.setActiveFilter=function(e){t.setState({activeFilter:e.target.id})},t.resetFilter=function(e){e.preventDefault(),t.props.getTodos(t.props.todoList,t.props.todoList)},t.filterTodos=function(e){e.preventDefault();var o=t.props.todoList.filter((function(t){return!1===t.completed}));t.props.getTodos(t.props.todoList,o)},t.showCompletedTodos=function(e){e.preventDefault();var o=t.props.todoList.filter((function(t){return!0===t.completed}));t.props.getTodos(t.props.todoList,o)},t}return Object(c.a)(o,[{key:"render",value:function(){return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{className:"All"===this.state.activeFilter?"selected":"",href:"#/",id:"All",onFocus:this.setActiveFilter,onClick:this.resetFilter},"All")),a.a.createElement("li",null,a.a.createElement("a",{className:"Active"===this.state.activeFilter?"selected":"",href:"#/active",id:"Active",onFocus:this.setActiveFilter,onClick:this.filterTodos},"Active")),a.a.createElement("li",null,a.a.createElement("a",{className:"completed"===this.state.activeFilter?"selected":"",href:"#/completed",id:"Completed",onFocus:this.setActiveFilter,onClick:this.showCompletedTodos},"Completed")))}}]),o}(n.Component),C=function(t){var e=t.todoList,o=t.todoListCopy,n=t.getTodos;return a.a.createElement("footer",{className:e.length?"footer":"footer--hidden"},a.a.createElement("span",{className:"todo-count"},function(){var t=e.filter((function(t){return!1===t.completed})).length;return t?"".concat(t," items left"):""}()),a.a.createElement(L,{todoList:e,todoListCopy:o,getTodos:n}),a.a.createElement("button",{className:"clear-completed",type:"button",onClick:function(t){t.preventDefault();var a=e.filter((function(t){return!1===t.completed})),i=o.filter((function(t){return!1===t.completed}));n(a,i)}},"Clear completed"))},E=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={todoList:[],todoListCopy:[]},t.addTodo=function(e){e.title.length&&t.setState((function(t){return{todoList:[].concat(Object(l.a)(t.todoList),[e]),todoListCopy:[].concat(Object(l.a)(t.todoListCopy),[e])}}))},t.isAllTodoToggle=function(){t.setState((function(t){if(t.todoList.some((function(t){return!1===t.isCompleted}))){var e=t.todoList.map((function(t){var e=t;return e.isCompleted=!0,e}));return{todoList:e,todoListCopy:e}}var o=t.todoList.map((function(t){var e=t;return e.isCompleted=!1,e}));return{todoList:o,todoListCopy:o}}))},t.getTodos=function(e,o){t.setState({todoListCopy:o,todoList:e})},t}return Object(c.a)(o,[{key:"render",value:function(){return a.a.createElement("section",{className:"todoapp"},a.a.createElement(p,{addTodo:this.addTodo}),a.a.createElement(g,{todoList:this.state.todoList,todoListCopy:this.state.todoListCopy,isAllTodoToggle:this.isAllTodoToggle,getTodos:this.getTodos}),a.a.createElement(C,{todoList:this.state.todoList,todoListCopy:this.state.todoListCopy,getTodos:this.getTodos}))}}]),o}(a.a.Component);r.a.render(a.a.createElement(E,null),document.getElementById("root"))},9:function(t,e,o){t.exports=o(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.8849d419.chunk.js.map