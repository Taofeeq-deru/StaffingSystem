(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{101:function(e,t,a){e.exports=a(177)},106:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),l=(a(106),a(107),a(19)),c=a(20),o=a(22),m=a(21),f=a(23),u=(a(108),a(180)),d=(a(109),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleDelete=function(e){a.props.deleteItem(a.props.itemID)},a.handleEdit=function(e){a.props.editItem(a.props.itemID)},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"actions d-flex",theid:this.props.itemID},r.a.createElement("i",{className:"fa fa-edit text-info fa-xs mr-2 edit",onClick:this.handleEdit}),r.a.createElement("i",{className:"fa fa-trash text-danger fa-xs delete",onClick:this.handleDelete})))}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{itemLayout:"horizontal",dataSource:this.props.listOfStaff,renderItem:function(t){return r.a.createElement(u.a.Item,{actions:[],id:t.firstName},r.a.createElement(u.a.Item.Meta,{title:r.a.createElement("span",{className:"d-flex"},r.a.createElement("span",{className:"w-50 text-capitalize"},t.firstName," ",t.lastName),r.a.createElement(d,{itemID:t.id,deleteItem:e.props.delete,editItem:e.props.edit,className:"ml-auto",item:t})),description:r.a.createElement("a",{href:"mailto:".concat(t.email)},t.email)}),r.a.createElement("p",{className:"text-capitalize"},"Position: ",t.position),r.a.createElement("p",null,"Salary: ",r.a.createElement("i",{className:"fa fa-naira"}),e.numberWithCommas("".concat(t.salary))))}})}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a.submitForm=function(e){e.preventDefault();var t=e.target.elements.firstName.value,n=e.target.elements.lastName.value,r=e.target.elements.email.value,i=e.target.elements.position.value,s=e.target.elements.salary.value;a.props.addStaff(t,n,r,i,s),a.firstRef.current.value="",a.lastRef.current.value="",a.mailRef.current.value="",a.positionRef.current.value="",a.salaryRef.current.value=""},a.firstRef=r.a.createRef(),a.lastRef=r.a.createRef(),a.mailRef=r.a.createRef(),a.positionRef=r.a.createRef(),a.salaryRef=r.a.createRef(),a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{action:"",className:"form",onSubmit:this.submitForm},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",name:"firstName",id:"firstName",placeholder:"First Name",ref:this.firstRef,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",name:"lastName",id:"lastName",placeholder:"Last Name",ref:this.lastRef,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"email",name:"email",id:"email",placeholder:"Email",ref:this.mailRef,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",name:"position",id:"position",placeholder:"Position",ref:this.positionRef,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"number",name:"salary",id:"salary",placeholder:"Salary",ref:this.salaryRef,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},this.props.buttonOptn)))}}]),t}(n.Component),v=a(181),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={staffList:JSON.parse(localStorage.getItem("staffList"))||[],btnOption:"Add Staff",staffIndex:"",editted:""},a.deleteStaff=function(e){var t=a.state.staffList,n=t.find((function(t){return t.id===e})),r=t.indexOf(n);t.splice(r,1),localStorage.removeItem("staffList",t),localStorage.setItem("staffList",JSON.stringify(t)),a.setState({newList:t})},a.editStaff=function(e){var t=a.state.staffList,n=t.find((function(t){return t.id===e}));a.setState({editted:"yes"});var r=t.indexOf(n);a.setState({staffIndex:r}),document.querySelector("#firstName").value="".concat(n.firstName),document.querySelector("#lastName").value="".concat(n.lastName),document.querySelector("#email").value="".concat(n.email),document.querySelector("#position").value="".concat(n.position),document.querySelector("#salary").value="".concat(n.salary),document.querySelector("#firstName").focus(),a.setState({btnOption:"Update Details"})},a.addStaff=function(e,t,n,r,i){var s=e,l=t,c=n,o=r,m=i,f={id:Object(v.a)(),firstName:s,lastName:l,email:c,position:o,salary:m},u=a.state.staffList;"yes"===a.state.editted?(u[a.state.staffIndex]=f,localStorage.removeItem("staffList",u),a.setState({editted:"",staffIndex:"",btnOption:"Add Staff"})):u.push(f),localStorage.setItem("staffList",JSON.stringify(u)),a.setState({newList:u})},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container p-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-3"},r.a.createElement("h3",{className:"text-center text-dark text-capitalize"},"staff management system"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mb-5"},r.a.createElement("h4",{className:"text-center text-dark text-capitalize mb-4"},"enter staff details"),r.a.createElement(h,{addStaff:this.addStaff,buttonOptn:this.state.btnOption})),r.a.createElement("div",{className:"col-md-6",id:"staffSide"},r.a.createElement(p,{listOfStaff:this.state.staffList,delete:this.deleteStaff,edit:this.editStaff})))))}}]),t}(n.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[101,1,2]]]);
//# sourceMappingURL=main.2991fece.chunk.js.map