(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{38:function(e,s,t){},39:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),i=t(31),r=t.n(i),l=(t(38),t(13)),o=t(9),c=t(10),m=t(12),d=t(11),h=t(3),u=t(2),g=(t(39),t(15)),j=t.n(g);function f(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var b="http://54.169.38.111:5000/",p=new(function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"login",value:function(e,s){return j.a.post(b+"users/login",{username:e,password:s}).then((function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,s,t,a,n,i){return j.a.post(b+"users/singup",{username:e,password:t,firstname:a,lastname:n,email:s,gender:i}).then((function(e){return console.log(e),e}))}},{key:"update",value:function(e,s,t,a,n){return j.a.put(b+"profile",{username:e,firstname:s,lastname:t,email:a,gender:n},{headers:f()}).then((function(e){return e}))}},{key:"getCurrentUser",value:function(){return j.a.get(b+"profile",{headers:f()}).then((function(e){return e}))}},{key:"deleteAccount",value:function(){return j.a.delete(b+"profile",{headers:f()}).then((function(e){return e}))}}]),e}()),O=t(0),v=function(e){Object(m.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).handleLogin=a.handleLogin.bind(Object(u.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(u.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(u.a)(a)),a.state={username:"",password:"",loading:!1,message:""},a}return Object(c.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var s=this;e.preventDefault(),this.setState({message:"",loading:!0}),p.login(this.state.username,this.state.password).then((function(){console.log(s.props.history),s.props.history.push("/profile"),window.location.reload()}),(function(e){var t;401===e.response.status?t="Invalid Username or Password":(t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),console.log(e.response.status)),s.setState({loading:!1,message:t})}))}},{key:"render",value:function(){return this.props.event(),Object(O.jsx)("div",{className:"form",children:Object(O.jsxs)("form",{className:"form__sign-in",onSubmit:this.handleLogin,children:[Object(O.jsx)("h2",{className:"form__title",children:"Sign In"}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-user"}),Object(O.jsx)("input",{className:"form-control",type:"text",placeholder:"Username",name:"username",value:this.state.username,onChange:this.onChangeUsername,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-lock"}),Object(O.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChangePassword,required:!0})]}),Object(O.jsx)("button",{className:"form__signin",disabled:this.state.loading,children:this.state.loading?Object(O.jsx)("div",{class:"lds-dual-ring"}):"Login"}),this.state.message&&Object(O.jsx)("div",{className:"alertfail",children:Object(O.jsxs)("h4",{className:"headingfail",children:[" ",this.state.message," "]})})]})})}}]),t}(a.Component),x=Object(h.g)(v),N=function(e){Object(m.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).handleRegister=a.handleRegister.bind(Object(u.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(u.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(u.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(u.a)(a)),a.onChangeGender=a.onChangeGender.bind(Object(u.a)(a)),a.onChangefirstname=a.onChangefirstname.bind(Object(u.a)(a)),a.onChangeLastname=a.onChangeLastname.bind(Object(u.a)(a)),a.messageClose=a.messageClose.bind(Object(u.a)(a)),a.state={username:"",email:"",password:"",firstname:"",lastname:"",gender:"",loading:!1,message:"",error:!1,success:!1,message2:""},a}return Object(c.a)(t,[{key:"messageClose",value:function(){var e=this;setTimeout((function(){e.setState({message:"",error:!1})}),5e3)}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeGender",value:function(e){this.setState({gender:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangefirstname",value:function(e){this.setState({firstname:e.target.value})}},{key:"onChangeLastname",value:function(e){this.setState({lastname:e.target.value})}},{key:"handleRegister",value:function(e){var s=this;e.preventDefault(),this.setState({message:"",loading:!0,message2:""}),p.register(this.state.username,this.state.email,this.state.password,this.state.firstname,this.state.lastname,this.state.gender).then((function(e){console.log(e),s.setState({message:e.data.messege,loading:!1,success:!0})}),(function(e){console.log(e);var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();s.setState({loading:!1,message2:t,error:!0})}))}},{key:"render",value:function(){return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)("div",{className:"form",children:Object(O.jsxs)("form",{className:"form__sign-up",onSubmit:this.handleRegister,children:[Object(O.jsx)("h2",{className:"form__title",children:"Sign Up"}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-user"}),Object(O.jsx)("input",{placeholder:"Username",type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-address-book"}),Object(O.jsx)("input",{placeholder:"Firstname",type:"text",className:"form-control",name:"firstname",value:this.state.firstname,onChange:this.onChangefirstname,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-address-book"}),Object(O.jsx)("input",{placeholder:"Lastname",type:"text",className:"form-control",name:"lastname",value:this.state.lastname,onChange:this.onChangeLastname,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-envelope"}),Object(O.jsx)("input",{placeholder:"Email",type:"email",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-user-friends"}),Object(O.jsx)("input",{type:"text",placeholder:"Gender",className:"form-control",name:"email",value:this.state.gender,onChange:this.onChangeGender,required:!0,pattern:"[Mm]ale|[Ff]emale"})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-lock"}),Object(O.jsx)("input",{placeholder:"Password",type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,required:!0})]}),Object(O.jsx)("button",{className:"form__submit",children:this.state.loading?Object(O.jsx)("div",{class:"lds-dual-ring"}):"Signup"}),this.state.message&&this.state.success&&Object(O.jsxs)("div",{className:"alertSucess2",children:[Object(O.jsxs)("h4",{className:"headingSucess",children:[" ",this.state.message," "]}),this.messageClose()]}),this.state.message2&&this.state.error&&Object(O.jsxs)("div",{className:"alertfail",children:[Object(O.jsxs)("h4",{className:"headingSucess",children:[" ",this.state.message2," "]}),this.messageClose()]})]})})})}}]),t}(a.Component),C=function(e){Object(m.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={toggle:"container"},a.onSignUPToggle=a.onSignUPToggle.bind(Object(u.a)(a)),a.onSignINToggle=a.onSignINToggle.bind(Object(u.a)(a)),a}return Object(c.a)(t,[{key:"onSignUPToggle",value:function(){this.setState({toggle:"container sign-up-mode"}),console.log("Fired")}},{key:"onSignINToggle",value:function(){this.setState({toggle:"container"})}},{key:"render",value:function(){var e=this;return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsxs)("div",{className:this.state.toggle,children:[Object(O.jsx)("div",{className:"container__forms",children:Object(O.jsxs)(h.d,{children:[Object(O.jsx)(h.b,{exact:!0,path:["/user","/user/login"],component:function(){return Object(O.jsx)(x,{history:function(){return e.props.history},event:function(){return e.onSignINToggle}})}}),Object(O.jsx)(h.b,{exact:!0,path:"/user/register",component:function(){return Object(O.jsx)(N,{event:function(){return e.onSignUPToggle}})}})]})}),Object(O.jsxs)("div",{className:"container__panels",children:[Object(O.jsxs)("div",{className:"panel panel__left",children:[Object(O.jsxs)("div",{className:"panel__content",children:[Object(O.jsx)("h3",{className:"panel__title",children:"Hello, Friend!"}),Object(O.jsx)("p",{className:"panel__paragraph",children:"New here ? To keep connected with us please sign up with your personal info."}),Object(O.jsx)(l.b,{to:"/user/register",children:Object(O.jsx)("button",{className:"btn btn-transparent",id:"sign-up-btn",onClick:this.onSignUPToggle,children:"Sign Up"})})]}),Object(O.jsx)("img",{className:"panel__image",src:"https://d.top4top.io/p_1945xjz2y1.png",alt:""})]}),Object(O.jsxs)("div",{className:"panel panel__right",children:[Object(O.jsxs)("div",{className:"panel__content",children:[Object(O.jsx)("h3",{className:"panel__title",children:"One of us ?"}),Object(O.jsx)("p",{className:"panel__paragraph",children:"Welcome Back!,To Keep connected with us please login with your personal info"}),Object(O.jsx)(l.b,{to:"/user/login",children:Object(O.jsx)("button",{className:"btn btn-transparent",id:"sign-in-btn",onClick:this.onSignINToggle,children:"Sign In"})})]}),Object(O.jsx)("img",{className:"panel__image",src:"https://e.top4top.io/p_1945sidbp2.png",alt:""})]})]})]})})}}]),t}(a.Component),_=(t(64),function(e){Object(m.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).handleRegister=a.handleRegister.bind(Object(u.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(u.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(u.a)(a)),a.onChangeGender=a.onChangeGender.bind(Object(u.a)(a)),a.onChangefirstname=a.onChangefirstname.bind(Object(u.a)(a)),a.onChangeLastname=a.onChangeLastname.bind(Object(u.a)(a)),a.deleteUser=a.deleteUser.bind(Object(u.a)(a)),a.messageClose=a.messageClose.bind(Object(u.a)(a)),a.logOut=a.logOut.bind(Object(u.a)(a)),a.state={currentUser:null,username:"",email:"",firstname:"",lastname:"",gender:"",loading:!1,loading2:!1,message:"",sucsess:!1,message2:"",loading3:!1,message3:!1},a}return Object(c.a)(t,[{key:"deleteUser",value:function(){var e=this;this.setState({loading2:!0}),p.deleteAccount().then((function(s){200===s.status&&e.setState({message2:"Account deleted sucessfully",loading2:!1,sucsess:!0})}),(function(s){var t=s.response&&s.response.data&&s.response.data.messege||s.message||s.toString();e.setState({loading2:!1,message2:t})}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading3:!0}),p.getCurrentUser().then((function(s){200===s.status&&e.setState({loading3:!1,currentUser:s.data,username:s.data.username,email:s.data.email,firstname:s.data.firstname,lastname:s.data.lastname,gender:s.data.gender})}),(function(s){var t=s.response&&s.response.data&&s.response.data.messege||s.message||s.toString();e.setState({loading3:!1,message3:t})}))}},{key:"messageClose",value:function(){var e=this;setTimeout((function(){return e.setState({message:""})}),4e3)}},{key:"logOut",value:function(){p.logout(),this.props.history.push("/")}},{key:"deleteClose",value:function(){var e=this;setTimeout((function(){e.props.history.push("/"),e.setState({sucsess:!1})}),3e3)}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeGender",value:function(e){this.setState({gender:e.target.value})}},{key:"onChangefirstname",value:function(e){this.setState({firstname:e.target.value})}},{key:"onChangeLastname",value:function(e){this.setState({lastname:e.target.value})}},{key:"handleRegister",value:function(e){var s=this;e.preventDefault(),this.setState({message:"",loading:!0}),p.update(this.state.username,this.state.firstname,this.state.lastname,this.state.email,this.state.gender).then((function(e){200===e.status&&s.setState({message:"Profile Updated.",loading:!1})}),(function(e){var t=e.response&&e.response.data&&e.response.data.messege||e.message||e.toString();s.setState({loading:!1,message:t})}))}},{key:"render",value:function(){var e=this.state.currentUser;return null==e?Object(O.jsxs)("div",{children:[this.state.loading3&&Object(O.jsx)("svg",{className:"spinner",viewBox:"0 0 50 50",children:Object(O.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"})}),this.state.message3&&Object(O.jsxs)("div",{className:"alertfail2",children:[Object(O.jsxs)("h4",{className:"headingfail",children:[" ",this.state.message3," "]}),this.props.history.push("/"),";"]})]}):Object(O.jsx)("div",{className:"Contain",children:Object(O.jsxs)("div",{className:"w60",children:[Object(O.jsxs)("h2",{className:"headings",children:[Object(O.jsx)("strong",{children:e.username}),"s' Profile",Object(O.jsxs)("button",{className:"btnlogout",onClick:this.logOut,children:[Object(O.jsx)("i",{className:"fas fa-sign-out-alt"}),"Signout"]})]}),Object(O.jsx)("div",{className:"image",children:Object(O.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"})}),Object(O.jsxs)("div",{className:"Profileform",children:[Object(O.jsxs)("form",{className:"form__profile",onSubmit:this.handleRegister,children:[Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-user"}),Object(O.jsx)("input",{placeholder:"Username",type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-address-book"}),Object(O.jsx)("input",{placeholder:"Firstname",type:"text",className:"form-control",name:"firstname",value:this.state.firstname,onChange:this.onChangefirstname,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-address-book"}),Object(O.jsx)("input",{placeholder:"Lastname",type:"text",className:"form-control",name:"lastname",value:this.state.lastname,onChange:this.onChangeLastname,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-envelope"}),Object(O.jsx)("input",{placeholder:"Email",type:"email",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,required:!0})]}),Object(O.jsxs)("div",{className:"form__input-field",children:[Object(O.jsx)("i",{className:"fas fa-user-friends"}),Object(O.jsx)("input",{type:"text",placeholder:"Gender",className:"form-control",name:"email",value:this.state.gender,onChange:this.onChangeGender,required:!0,pattern:"[Mm]ale|[Ff]emale"})]}),this.state.message&&Object(O.jsxs)("div",{className:"alertSucess",children:[Object(O.jsxs)("h4",{className:"headingfail",children:[" ",this.state.message," "]}),this.messageClose()]}),this.state.sucsess&&Object(O.jsxs)("div",{className:"alertSucess",children:[Object(O.jsxs)("h4",{className:"headingfail",children:[" ",this.state.message2," "]}),this.deleteClose()]}),Object(O.jsx)("button",{className:"form__submit",children:this.state.loading?Object(O.jsx)("div",{class:"lds-dual-ring"}):"Update"})]}),Object(O.jsx)("button",{className:"form_delete",onClick:this.deleteUser,children:this.state.loading2?Object(O.jsx)("div",{class:"lds-dual-ring"}):"Delete"})]})]})})}}]),t}(a.Component)),S=function(e){Object(m.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(O.jsxs)(h.d,{children:[Object(O.jsx)(h.b,{path:"/user",component:C}),Object(O.jsx)(h.b,{exact:!0,path:"/profile",component:_}),Object(O.jsx)(h.a,{to:"/user"})]})}}]),t}(a.Component),y=S;r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(y,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.19bd0769.chunk.js.map