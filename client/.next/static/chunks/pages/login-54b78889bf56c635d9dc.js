_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{"11/B":function(e,r,a){"use strict";a.r(r),a.d(r,"__N_SSP",(function(){return H}));var n=a("q1tI"),t=a.n(n),o=a("/MKj"),c=a("ZX5X"),i=a("g4pe"),s=a.n(i),d=a("DZdY"),u=a("tsqr"),l=a("Vl3Y"),b=a("PArb"),g=a("5rEg"),m=a("2/Rp"),h=a("N61D"),O=a("AeFk");var p=Object(d.a)("div",{target:"e1gmfdya0"})({name:"1gy2ser",styles:"margin:3rem 0;h1{display:flex;align-items:center;margin-bottom:1rem;img{margin-left:1rem;}}"}),f={required:"${name} is required!",types:{email:"This is not a valid ${name}!"},number:{range:"${name} must be under the ${min} strings"}},j=Object(n.memo)((function(e){var r=e.onClickLogin,a=Object(o.b)(),i=Object(o.c)((function(e){return e.user})),s=i.signUpError,d=i.signUpDone,j=Object(n.useCallback)((function(e){a({type:h.L,data:{email:e.Email,name:e.Name,password:e.Password}})}),[]);return Object(n.useEffect)((function(){s&&u.b.error("Unexpected Erorr! Please try again or feedback to us")}),[s]),Object(n.useEffect)((function(){d&&(u.b.success("Log In Success! Enjoy your time."),a({type:c.g,data:!1}))}),[a,d]),Object(O.c)(t.a.Fragment,null,Object(O.c)(p,{className:"login_title"},Object(O.c)("h1",null,"Sign Up now!"," ",Object(O.c)("img",{alt:"signup_icon",src:"https://img.icons8.com/bubbles/100/000000/add-user-male.png"})),Object(O.c)("h3",null,"Enjoy various Contents for free!")),Object(O.c)(l.a,{validateMessages:f,name:"nest-messages",initialValues:{remember:!1},onFinish:j},Object(O.c)(b.a,{orientation:"left"},"E-mail"),Object(O.c)(l.a.Item,{name:"Email",rules:[{required:!0,type:"email"}]},Object(O.c)(g.a,null)),Object(O.c)(b.a,{orientation:"left"},"User name"),Object(O.c)(l.a.Item,{name:"Name",rules:[{required:!0,max:15}]},Object(O.c)(g.a,{value:"ddd"})),Object(O.c)(b.a,{orientation:"left"},"Password"),Object(O.c)(l.a.Item,{name:"Password",rules:[{required:!0,min:9}]},Object(O.c)(g.a.Password,null)),Object(O.c)(b.a,{orientation:"left"},"Confirm Password"),Object(O.c)(l.a.Item,{name:"Confirm",dependencies:["Password"],hasFeedback:!0,rules:[{required:!0},function(e){var r=e.getFieldValue;return{validator:function(e,a){return a&&r("Password")!==a?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}]},Object(O.c)(g.a.Password,null)),Object(O.c)(l.a.Item,null,Object(O.c)(m.a,{type:"primary",style:{width:"50%",marginTop:"1.5rem"},htmlType:"submit"},"Sign up"),Object(O.c)(m.a,{onClick:r,style:{width:"50%"}},"Go back login"))))})),E=Object(n.memo)(j),_=a("UIRo"),w=a("nOHt");var y=Object(d.a)("button",{target:"escb6z70"})("box-sizing:border-box;outline:none;width:100%;background-color:white;box-shadow:2px 2px 5px 1px rgba(0, 0, 0, 0.15);border:none;cursor:pointer;div{width:360px;display:flex;margin:0 auto;justify-content:center;align-items:center;padding:0.5rem 0;h3{transition:all 0.3s;}img{width:30px;}}&:hover{h3{color:",_.c,";}}@media only screen and (max-width: 576px){div{width:200px;img{width:20px;}h3{font-size:0.8rem;}}}"),S={name:"zpqb8p",styles:"margin:0 0 0 1rem;font-weight:normal"},A={required:"${name} is required!",types:{email:"This is not a valid ${name}!"},number:{range:"${name} must be upper the ${min} strings"}},T=function(e){var r=e.onClickSignUp,a=Object(w.useRouter)(),c=Object(o.b)(),i=Object(o.c)((function(e){return e.user})),s=i.logInError,d=i.logInDone,p=Object(n.useCallback)((function(e){c({type:h.z,data:{email:e.email,password:e.password}})}),[]),f=Object(n.useCallback)((function(){u.b.error("Unexpected Erorr! please try again or feedback to us")}),[]);return Object(n.useEffect)((function(){s&&u.b.error(s)}),[s]),Object(n.useEffect)((function(){d&&(u.b.success("Log In Success! Have a nice day \ud83d\ude19"),a.push("/"))}),[d]),Object(O.c)(t.a.Fragment,null,Object(O.c)("div",{className:"login_title"},Object(O.c)("h1",null,"Login now!"," ",Object(O.c)("img",{alt:"login_icon",src:"https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png"})),Object(O.c)("h3",null,"Are you ready for jumping to my world?")),Object(O.c)(l.a,{name:"basic",initialValues:{remember:!0},validateMessages:A,onFinish:p,onFinishFailed:f},Object(O.c)(b.a,{orientation:"left"},"E-mail"),Object(O.c)(l.a.Item,{name:"email",rules:[{required:!0}]},Object(O.c)(g.a,null)),Object(O.c)(b.a,{orientation:"left"},"Password"),Object(O.c)(l.a.Item,{name:"password",rules:[{required:!0,min:9}]},Object(O.c)(g.a.Password,null)),Object(O.c)(l.a.Item,null,Object(O.c)(m.a,{type:"primary",style:{width:"50%",marginTop:"1.5rem"},htmlType:"submit"},"Login"),Object(O.c)(m.a,{onClick:r,style:{width:"50%"}},"Sign up"))),Object(O.c)(y,null,Object(O.c)("a",{href:"https://api.noahworld.site/auth/google"},Object(O.c)("div",null,Object(O.c)("img",{alt:"google",src:"https://img.icons8.com/color/144/000000/google-logo.png"}),Object(O.c)("h3",{css:S},"Sign in with Google")))))},k=Object(n.memo)((function(){var e=Object(o.b)(),r=Object(o.c)((function(e){return e.blog})).onSignUpPage;return Object(O.c)(t.a.Fragment,null,Object(O.c)(s.a,null,Object(O.c)("title",null,"Noah world | Login")),Object(O.c)("div",{className:"login"},Object(O.c)("div",{className:"login_form"},r?Object(O.c)(E,{onClickLogin:function(){e({type:c.g,data:!1})}}):Object(O.c)(T,{onClickSignUp:function(){e({type:c.g,data:!0})}})),Object(O.c)("div",{className:"login_image"},Object(O.c)("img",{alt:"login_main_poster",style:{width:"100%"},src:"/images/blog/signup.jpg"}))))})),H=!0;r.default=Object(n.memo)(k)},CWQg:function(e,r,a){"use strict";a.d(r,"a",(function(){return n}));var n=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return r}},ZX5X:function(e,r,a){"use strict";a.d(r,"e",(function(){return c})),a.d(r,"f",(function(){return d})),a.d(r,"g",(function(){return u})),a.d(r,"j",(function(){return l})),a.d(r,"i",(function(){return b})),a.d(r,"h",(function(){return g})),a.d(r,"q",(function(){return h})),a.d(r,"r",(function(){return O})),a.d(r,"p",(function(){return p})),a.d(r,"o",(function(){return f})),a.d(r,"m",(function(){return j})),a.d(r,"n",(function(){return E})),a.d(r,"l",(function(){return _})),a.d(r,"k",(function(){return w})),a.d(r,"c",(function(){return y})),a.d(r,"d",(function(){return S})),a.d(r,"b",(function(){return A})),a.d(r,"a",(function(){return T}));var n=a("rfrl"),t={theme:"light",header:"blog",prePortfolio:[],postPortfolio:[],posts:[],onAbout:!1,onSignUpPage:!1,postEditOn:!1,searchPosts:[],hashtagPosts:[],onSlideMenu:!1,onHeaderTitle:!1,searchedKeyword:null,searchKeywordLoading:!1,searchKeywordDone:!1,searchKeywordError:!1,searchHashTagLoading:!1,searchHashTagDone:!1,searchHashTagError:!1,addQuizLoading:!1,addQuizDone:!1,addQuizError:!1},o="MODE_CHANGE",c="CHAGE_HEADER",i="SWITCH_ABOUT",s="ON_ABOUT",d="OFF_ABOUT",u="ON_SIGN_UP_PAGE",l="POST_EDIT_ON",b="POST_EDIT_OFF",g="ON_SLIDE_MENU",m="ON_HEADER_TITLE",h="SEARCH_KEYWORD_REQUEST",O="SEARCH_KEYWORD_SUCCESS",p="SEARCH_KEYWORD_FAILURE",f="SEARCH_KEYWORD_CLEAR",j="SEARCH_HASH_TAG_REQUEST",E="SEARCH_HASH_TAG_SUCCESS",_="SEARCH_HASH_TAG_FAILURE",w="SEARCH_HASH_TAG_CLEAR",y="ADD_QUIZ_REQUEST",S="ADD_QUIZ_SUCCESS",A="ADD_QUIZ_FAILURE",T="ADD_QUIZ_CLEAR";r.s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return Object(n.a)(e,(function(e){switch(r.type){case o:e.theme=r.data;break;case c:e.header=r.header;break;case i:e.onAbout=!e.onAbout;break;case s:e.onAbout=!0;break;case d:e.onAbout=!1;break;case u:e.onSignUpPage=r.data;break;case l:e.postEditOn=!e.postEditOn;break;case g:e.onSlideMenu=!e.onSlideMenu;break;case m:e.onHeaderTitle=r.data;break;case b:e.postEditOn=!1;break;case h:e.searchKeywordLoading=!0,e.searchKeywordDone=!1,e.searchKeywordError=!1;break;case O:e.searchPosts=r.data.searchPosts,e.searchKeywordLoading=!1,e.searchKeywordDone=!0,e.searchedKeyword=r.data.searchedKeyword;break;case p:e.searchKeywordLoading=!1,e.searchKeywordError=r.error;break;case f:e.searchKeywordLoading=!1,e.searchKeywordDone=!1,e.searchKeywordError=!1;break;case j:e.searchHashTagLoading=!0,e.searchHashTagDone=!1,e.searchHashTagError=!1;break;case E:e.searchHashTagLoading=!1,e.searchHashTagDone=!0,e.hashtagPosts=r.data.hashtagPosts;break;case _:e.searchHashTagLoading=!1,e.searchHashTagError=r.error;break;case w:e.searchHashTagLoading=!1,e.searchHashTagDone=!1,e.searchHashTagError=!1;break;case y:e.addQuizLoading=!0,e.addQuizDone=!1,e.addQuizError=!1;break;case S:e.addQuizLoading=!1,e.addQuizDone=!0;break;case A:e.addQuizLoading=!1,e.addQuizError=r.error;break;case T:e.addQuizLoading=!1,e.addQuizDone=!1,e.addQuizError=!1}}))}},oFgj:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a("11/B")}])}},[["oFgj",1,3,2,0,5,4,6,7,8,9,10,13,18,19]]]);