(this.webpackJsonpg5front=this.webpackJsonpg5front||[]).push([[0],{120:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"form__setResumePreview",(function(){return V})),n.d(a,"form__setAbout",(function(){return J})),n.d(a,"form__setFormat",(function(){return K})),n.d(a,"form__setLoading",(function(){return Z}));var i={};n.r(i),n.d(i,"form__getResumePreview",(function(){return ce}));var r={};n.r(r),n.d(r,"resume__setResume",(function(){return oe})),n.d(r,"resume__setLoading",(function(){return se}));var c={};n.r(c),n.d(c,"resume__getResume",(function(){return le}));var o,s=n(0),l=n.n(s),u=n(11),d=n.n(u),j=n(53),m=n(35),b=(n(120),n(13)),h=n(184),O=n(181),p=n(77),x=n(176),f=n(192),v=n(172),g=n(194),_=n(178),y=n(179),E=n(196),R=n(182),w=n(193),S=n(183);!function(e){e.withName="withName",e.withOutName="withOutName"}(o||(o={}));var N,T=n(20),M=n(174),k=n(195),F=n(177),A=n(191),B=n(66),I=n.n(B),C=n(2),P=Object(v.a)((function(e){return Object(g.a)({smallAvatar:{width:e.spacing(4),height:e.spacing(4),marginRight:10},cleanBtn:{"&:hover":{background:"none"}},linkLable:{opacity:0},linkInput:{height:32,transition:"height 0.2s"},editStyle:{height:48,transition:"height 0.3s ease"}})})),U=function(e){var t=e.idCheck,n=e.resume,a=e.loading,i=e.resetResume,r=P(),c=Object(s.useState)(""),o=Object(T.a)(c,2),l=o[0],u=o[1],d=Object(s.useState)(!1),j=Object(T.a)(d,2),m=j[0],b=j[1],h=Object(s.useState)(null===n),O=Object(T.a)(h,2),p=O[0],f=O[1],v=Object(s.useState)(""),g=Object(T.a)(v,2),_=g[0],y=g[1],E=Object(s.useRef)(null);Object(s.useEffect)((function(){(null===n||void 0===n?void 0:n.id)&&y(null===n||void 0===n?void 0:n.id)}),[]),Object(s.useEffect)((function(){!a&&m&&u("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"),a||null===n||(f(!1),u(""))}),[a]),Object(s.useEffect)((function(){var e;p&&m&&(null===(e=E.current)||void 0===e||e.focus())}),[p]);var R=p?{}:{classes:{root:r.linkLable}},w=p?{classes:{root:r.linkInput}}:{classes:{root:"".concat(r.linkInput," ").concat(r.editStyle)},startAdornment:Object(C.jsxs)(M.a,{position:"start",children:[Object(C.jsx)(k.a,{alt:null===n||void 0===n?void 0:n.name,src:null===n||void 0===n?void 0:n.photo,className:r.smallAvatar}),Object(C.jsx)(x.a,{href:"https://hh.ru/resume/".concat(null===n||void 0===n?void 0:n.id),target:"_blank",color:"textPrimary",children:null===n||void 0===n?void 0:n.name})]}),endAdornment:Object(C.jsx)(F.a,{className:r.cleanBtn,onClick:function(){i(),b(!0),f(!0)},children:Object(C.jsx)(I.a,{})})},S=function(){var e=function(e){var t=e.split("hh.ru/resume/").pop();return String(t)}(_);e&&(!function(e){return/^\d*[a-zA-Z\d]*$/.test(e)}(e)?u("\u041f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b"):(t(e),y(e)))};return Object(C.jsx)(A.a,{label:"\u0421\u0441\u044b\u043b\u043a\u0430",helperText:l.length>0?l:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u0438\u043b\u0438 id",name:"link",value:p?_:"",onChange:function(e){return t=e.target.value,y(t),void b(!0);var t},fullWidth:!0,disabled:a||!p,InputProps:w,onBlur:function(){return S()},error:l.length>0,InputLabelProps:R,required:!0,inputRef:E,onKeyUp:function(e){"Enter"===e.key&&S()}})},L=function(e){var t=e.autoFocus,n=e.onBlur,a=e.showHelperText,i=e.showLable,r=e.value,c=e.onChangeText;return Object(C.jsx)(A.a,{id:"outlined-multiline-static",label:i?"\u041e \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0435":"",name:"about",value:r,onChange:function(e){return c(e.target.value)},multiline:!0,fullWidth:!0,onBlur:n,autoFocus:t,helperText:a?"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":"",inputProps:{maxLength:300}})},W=Object(v.a)((function(e){return Object(g.a)({sybmitBtn:{height:48,borderRadius:87}})})),D=function(e){var t=e.resume,n=e.idCheck,a=e.sybmit,i=e.about,r=e.setAbout,c=e.format,s=e.setFormat,l=e.loading,u=e.resetResume,d=W();return Object(C.jsx)("form",{onSubmit:function(e){!function(e){e.preventDefault(),a()}(e)},children:Object(C.jsxs)(O.a,{container:!0,alignItems:"flex-start",spacing:3,children:[Object(C.jsx)(O.a,{item:!0,xs:12,children:Object(C.jsx)(U,{loading:l,idCheck:n,resume:t,resetResume:u})}),Object(C.jsx)(O.a,{item:!0,xs:12,children:Object(C.jsxs)(_.a,{component:"fieldset",children:[Object(C.jsx)(y.a,{component:"legend",children:"\u0412\u044b\u0431\u043e\u0440 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430"}),Object(C.jsxs)(E.a,{value:c,name:"format",onChange:function(e){s(e.target.value)},row:!0,children:[Object(C.jsx)(R.a,{value:o.withOutName,control:Object(C.jsx)(w.a,{color:"primary"}),label:"IBS \u0431\u0435\u0437 \u0424\u0418\u041e"}),Object(C.jsx)(R.a,{value:o.withName,control:Object(C.jsx)(w.a,{color:"primary"}),label:"IBS c \u0424\u0418\u041e"})]})]})}),Object(C.jsx)(O.a,{item:!0,xs:12,children:Object(C.jsx)(L,{showLable:!0,value:i,showHelperText:!0,onChangeText:r})}),Object(C.jsx)(O.a,{item:!0,xs:12,children:Object(C.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:d.sybmitBtn,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})})]})})},z=j.c,G=n(40),H=n(15);!function(e){e.FORM__SET_RESUME_PREVIEW="[FORM] SET_RESUME_PREVIEW",e.FORM__SET_ABOUT="[FORM] SET_ABOUT",e.FORM__SET_FORMAT="[FORM] SET_FORMAT",e.FORM__SET_LOADING="[FORM] SET_LOADING",e.FORM__SET_TODO="[FORM] SET_TODO"}(N||(N={}));var $,q,V=function(e){return{type:N.FORM__SET_RESUME_PREVIEW,payload:e}},J=function(e){return{type:N.FORM__SET_ABOUT,payload:e}},K=function(e){return{type:N.FORM__SET_FORMAT,payload:e}},Z=function(e){return{type:N.FORM__SET_LOADING,payload:e}},Q=n(56),X=n.n(Q),Y=n(68),ee=n(69),te=n(96),ne=n.n(te),ae=function e(t){var n=this;Object(ee.a)(this,e),this.axios=void 0,this.getResume=function(e){return n.axios.get("/resume/".concat(e)).then((function(e){return e.data}))},this.getResumeWithFormat=function(e,t){return n.axios.get("/resume/".concat(e,"/").concat(t)).then((function(e){return e.data}))},this.axios=t},ie=function e(t){Object(ee.a)(this,e),this.axios=void 0,this.resume=void 0,this.axios=t,this.resume=new ae(t)};!function(){$=new ie(ne.a.create({baseURL:"http://localhost:3007/"}))}({}),function(e){e[e.AppError=100]="AppError",e[e.ServerError=500]="ServerError",e[e.Access=200]="Access",e[e.Error=400]="Error",e[e.Unauthorized=401]="Unauthorized",e[e.Forbidden=403]="Forbidden",e[e.BadRequest=400]="BadRequest",e[e.NotFound=404]="NotFound"}(q||(q={}));var re,ce=function(e){return function(){var t=Object(Y.a)(X.a.mark((function t(n,a){var i;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Z(!0)),t.prev=1,t.next=4,$.resume.getResume(e);case 4:1===(i=t.sent).resultCode&&(n(V(i.resume)),n(Z(!1))),0===i.resultCode&&n(Z(!1)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435...",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()};!function(e){e.RESUME__SET_RESUME="[RESUME] SET_RESUME",e.RESUME__SET_LOADING="[RESUME] SET_LOADING"}(re||(re={}));var oe=function(e){return{type:re.RESUME__SET_RESUME,payload:e}},se=function(e){return{type:re.RESUME__SET_LOADING,payload:e}},le=function(e,t){return function(){var n=Object(Y.a)(X.a.mark((function n(a,i){var r;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(se(!0)),n.prev=1,n.next=4,$.resume.getResumeWithFormat(e,t);case 4:1===(r=n.sent).resultCode?(a(oe(r.resume)),a(se(!1))):0===r.resultCode&&a(se(!1)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435...",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()},ue=Object(H.a)(Object(H.a)(Object(H.a)(Object(H.a)({},a),i),r),c),de=function(){var e=Object(j.b)();return Object(G.bindActionCreators)(ue,e)},je=Object(v.a)((function(e){return{content:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"16px 0",margin:"0 auto"}}})),me=function(e){var t=e.children,n=e.maxWidth,a=je();return Object(C.jsx)(f.a,{className:a.content,style:{maxWidth:n},children:t})},be=function(){var e=z((function(e){return e})).form,t=de(),n=t.form__getResumePreview,a=t.form__setAbout,i=t.form__setFormat,r=t.form__setResumePreview,c=Object(b.f)();return Object(C.jsx)(h.a,{children:Object(C.jsx)(me,{maxWidth:404,children:Object(C.jsxs)(O.a,{container:!0,children:[Object(C.jsxs)(O.a,{item:!0,children:[Object(C.jsx)(p.a,{variant:"h4",align:"center",component:"h2",paragraph:!0,children:"\u0420\u0435\u0437\u044e\u043c\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440"}),Object(C.jsxs)(p.a,{align:"center",variant:"body2",paragraph:!0,children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0435\u0437\u044e\u043c\u0435 \u0441 \u0441\u0430\u0439\u0442\u0430 ",Object(C.jsx)(x.a,{href:"https://hh.ru",children:"hh.ru"}),"."]})]}),Object(C.jsx)(O.a,{item:!0,children:Object(C.jsx)(D,{sybmit:function(){e.resumePreview&&c.push("/resume/".concat(e.resumePreview.id,"?").concat(e.format))},about:e.about,setAbout:a,idCheck:function(e){n(e)},resume:e.resumePreview,format:e.format,setFormat:i,loading:e.loading,resetResume:function(){r(null)}})}),Object(C.jsx)(O.a,{item:!0,xs:12,children:Object(C.jsx)(f.a,{mt:2,display:"flex",justifyContent:"flex-end",children:Object(C.jsx)(p.a,{variant:"subtitle2",children:Object(C.jsx)(x.a,{href:"https://git.trainee.ru.com/group5/g5front",children:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?"})})})})]})})})},he=n(185),Oe=n(186),pe=n(197),xe=n(187),fe=n(101),ve=n.n(fe),ge=function(e){return e.replace(/-/g,"/")},_e=function(e){var t=e%100;return t>=5&&t<=20?"\u043b\u0435\u0442":1===(t%=10)?"\u0433\u043e\u0434":t>=2&&t<=4?"\u0433\u043e\u0434\u0430":"\u043b\u0435\u0442"},ye=n(21),Ee=590,Re=Object(v.a)((function(e){var t,n;return Object(g.a)({header:(t={alignItems:"center",justifyContent:"center",marginBottom:e.spacing(2)},Object(ye.a)(t,"@media (max-width: ".concat(Ee,"px)"),{flexDirection:"column",alignItems:"flex-start"}),Object(ye.a)(t,"@media print",{flexDirection:"row",alignItems:"center"}),t),upperText:{textTransform:"uppercase"},avatar:{width:e.spacing(18),height:e.spacing(18),marginBottom:e.spacing(2)},title:Object(ye.a)({},"@media (max-width: ".concat(Ee,"px)"),{maxWidth:"100%",paddingLeft:0}),subtitle:{fontSize:16,fontWeight:"bold",textTransform:"uppercase",marginBottom:e.spacing(1)},lable:{fontWeight:500},text:{fontSize:14,fontWeight:500,color:e.palette.text.secondary},skils:{"& div":{marginRight:e.spacing(1),marginBottom:e.spacing(1)}},main:Object(ye.a)({position:"relative","&>div":{paddingLeft:e.spacing(2)},"&:after":{content:'""',width:2,height:"100%",position:"absolute",left:4,top:16,backgroundColor:e.palette.primary.main},"&:before":{content:'""',width:9,height:9,position:"absolute",left:0,borderRadius:"50%",bottom:-16,backgroundColor:e.palette.primary.main}},"@media (max-width: ".concat(Ee,"px)"),{maxWidth:"100%"}),mainItem:{position:"relative","&:before":{content:'""',width:9,height:9,position:"absolute",left:-3-e.spacing(1),borderRadius:"50%",top:16,backgroundColor:e.palette.primary.main}},paragraph:{position:"relative",paddingLeft:e.spacing(1),"&:before":{content:'""',width:5,height:5,position:"absolute",left:-2,borderRadius:"50%",top:5,backgroundColor:e.palette.primary.main},"@media print":{display:"block"}},body:(n={},Object(ye.a)(n,"@media (max-width: ".concat(Ee,"px)"),{flexDirection:"column"}),Object(ye.a)(n,"@media print",{flexDirection:"row"}),n),info:Object(ye.a)({},"@media (max-width: ".concat(Ee,"px)"),{maxWidth:"100%"}),editBtn:{fontWeight:500,color:e.palette.text.secondary,fontSize:"14px",textTransform:"none",marginLeft:e.spacing(1),cursor:"pointer","@media print":{display:"none"}}})})),we=n(98),Se=n.n(we),Ne=n(97),Te=n.n(Ne),Me=n(100),ke=n.n(Me),Fe=n(99),Ae=n.n(Fe),Be=n.p+"static/media/skype-icon.adbaf49f.svg",Ie=n.p+"static/media/icq-icon.3130c8e6.svg",Ce=Object(v.a)((function(e){return Object(g.a)({contact:{fontSize:14,display:"flex",alignItems:"center",marginBottom:e.spacing(1),"& svg,img":{width:20,height:20,marginRight:e.spacing(1)+4}},lable:{wordBreak:"break-all",fontSize:14,fontWeight:500}})})),Pe=function(e){var t=e.contacts,n=e.area,a=Ce();return Object(C.jsxs)(C.Fragment,{children:[null===t||void 0===t?void 0:t.map((function(e){return Object(C.jsxs)("div",{className:a.contact,children:[{cell:Object(C.jsx)(Te.a,{}),email:Object(C.jsx)(Se.a,{}),site:Object(C.jsx)(Ae.a,{}),skype:Object(C.jsx)("img",{src:Be,alt:"skype"}),icq:Object(C.jsx)("img",{src:Ie,alt:"icq"})}[e.type],Object(C.jsx)(p.a,{className:a.lable,children:"cell"===e.type?(t=e.value,t.replace(/^([\d+]{2})(\d{3})(\d{3})(\d{2})(\d{2})+$/,"$1 $2 $3 $4 $5")):e.value})]},e.type);var t})),n?Object(C.jsxs)("div",{className:a.contact,children:[Object(C.jsx)(ke.a,{}),Object(C.jsx)(p.a,{variant:"body2",children:n})]}):""]})},Ue=function(e){var t=e.data,n=e.about,a=e.setAbout,i=e.format,r=Re(),c=Object(s.useState)(!1),l=Object(T.a)(c,2),u=l[0],d=l[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(f.a,{mb:4,children:Object(C.jsxs)(O.a,{container:!0,className:r.header,children:[Object(C.jsx)(O.a,{item:!0,xs:4,children:Object(C.jsx)(k.a,{alt:null===t||void 0===t?void 0:t.name,src:i===o.withName&&(null===t||void 0===t?void 0:t.photo)?null===t||void 0===t?void 0:t.photo.medium:"",className:r.avatar})}),Object(C.jsxs)(O.a,{item:!0,xs:8,className:r.title,children:[i===o.withName&&Object(C.jsx)(p.a,{variant:"h5",component:"h2",className:r.upperText,children:null===t||void 0===t?void 0:t.name}),Object(C.jsx)(p.a,{color:"primary",variant:"".concat(i===o.withOutName?"h5":"subtitle2"),className:r.upperText,children:null===t||void 0===t?void 0:t.title}),Object(C.jsxs)(p.a,{variant:"body2",children:["".concat("male"===(null===t||void 0===t?void 0:t.gender)&&"\u041c\u0443\u0436\u0447\u0438\u043d\u0430",", ").concat((null===t||void 0===t?void 0:t.age)&&(null===t||void 0===t?void 0:t.age)+" "+_e(null===t||void 0===t?void 0:t.age),",  ").concat((null===t||void 0===t?void 0:t.birth_date)&&ge(null===t||void 0===t?void 0:t.birth_date))," "]})]})]})}),Object(C.jsxs)(O.a,{container:!0,spacing:2,className:r.body,children:[Object(C.jsx)(O.a,{xs:4,item:!0,className:r.info,children:Object(C.jsxs)(O.a,{container:!0,spacing:3,children:[(null===t||void 0===t?void 0:t.area)||(null===t||void 0===t?void 0:t.contacts)?Object(C.jsx)(O.a,{item:!0,xs:12,children:Object(C.jsx)(Pe,{area:null===t||void 0===t?void 0:t.area,contacts:null===t||void 0===t?void 0:t.contacts})}):"",Object(C.jsxs)(O.a,{item:!0,xs:12,children:[Object(C.jsx)(p.a,{className:r.subtitle,children:"\u042f\u0437\u044b\u043a\u0438"}),(null===t||void 0===t?void 0:t.language)&&(null===t||void 0===t?void 0:t.language.map((function(e){return Object(C.jsxs)(p.a,{className:r.text,children:[e.name," "," "," (",Object(C.jsx)("span",{style:{textTransform:"capitalize"},children:e.level}),")"]},e.id)})))]}),Object(C.jsxs)(O.a,{item:!0,xs:12,children:[Object(C.jsx)(p.a,{className:r.subtitle,children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),(null===t||void 0===t?void 0:t.education)&&(null===t||void 0===t?void 0:t.education.map((function(e,t){return Object(C.jsxs)(f.a,{mb:2,children:[Object(C.jsx)(p.a,{variant:"body2",className:r.lable,children:e.name}),Object(C.jsx)(p.a,{gutterBottom:!0,variant:"body2",className:r.text,children:e.organization}),Object(C.jsx)(p.a,{variant:"body2",children:e.result}),Object(C.jsx)(p.a,{variant:"body2",children:e.year})]},t)})))]}),Object(C.jsxs)(O.a,{item:!0,xs:12,children:[Object(C.jsxs)(p.a,{className:r.subtitle,children:["\u041e \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0435",Object(C.jsx)("span",{onClick:function(){return d(!0)},className:r.editBtn,children:"\u0440\u0435\u0434."})]}),u?Object(C.jsx)(L,{onBlur:function(){return d(!1)},autoFocus:!0,value:n,onChangeText:a}):Object(C.jsx)(p.a,{gutterBottom:!0,variant:"body2",className:r.text,children:n})]})]})}),Object(C.jsx)(O.a,{xs:8,item:!0,className:r.main,children:Object(C.jsx)(O.a,{item:!0,children:Object(C.jsxs)(O.a,{container:!0,spacing:3,children:[Object(C.jsxs)(O.a,{item:!0,className:r.mainItem,children:[Object(C.jsx)(p.a,{className:r.subtitle,children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),Object(C.jsx)(f.a,{className:r.skils,children:(null===t||void 0===t?void 0:t.skill_set)&&(null===t||void 0===t?void 0:t.skill_set.map((function(e){return Object(C.jsx)(pe.a,{label:e},e)})))})]}),Object(C.jsxs)(O.a,{item:!0,xs:12,className:r.mainItem,children:[Object(C.jsx)(p.a,{className:r.subtitle,children:"\u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b"}),(null===t||void 0===t?void 0:t.experience)&&(null===t||void 0===t?void 0:t.experience.map((function(e,t){return Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{variant:"body2",className:r.lable,children:"".concat(e.company,", ").concat(e.area," | ").concat(e.position)}),Object(C.jsx)(p.a,{gutterBottom:!0,variant:"body2",className:r.lable,children:"".concat(ge(e.start)," - ").concat(ge(e.end))}),Object(C.jsx)(p.a,{gutterBottom:!0,variant:"body2",className:r.text+" "+r.paragraph,children:e.description})]},t)})))]})]})})})]})]})},Le=n(180),We=Object(v.a)((function(e){return Object(g.a)({closeBtn:{position:"absolute",top:16,right:16,cursor:"pointer","@media print":{display:"none"}},paper:{borderRadius:16,padding:e.spacing(5),position:"relative","@media print":{transform:"scale(1.05)",border:"none",boxShadow:"none"}}})})),De=function(e){var t=e.children,n=e.minHeight,a=e.onClose,i=l.a.useState(!0),r=Object(T.a)(i,2),c=r[0],o=r[1],s=We(),u=Object(b.f)();return Object(C.jsx)(he.a,{timeout:300,in:c,children:Object(C.jsxs)(Le.a,{className:s.paper,style:{minHeight:n},children:[Object(C.jsx)("div",{className:s.closeBtn,children:Object(C.jsx)("div",{onClick:function(){return o(!1),a&&a(),void setTimeout((function(){return u.push("/")}),300)},children:Object(C.jsx)(I.a,{color:"action"})})}),t]})})},ze=Object(v.a)((function(e){return Object(g.a)({content:{maxWidth:728,paddingTop:e.spacing(2),paddingBottom:e.spacing(3),"@media print":{padding:0}},smallestBtn:{height:e.spacing(4)+2,width:e.spacing(4)+2,minHeight:0,marginRight:12,"& svg":{height:22,width:22}},chip:{cursor:"pointer"},noPrint:{"@media print":{display:"none"}}})})),Ge=function(){var e,t,n,a=ze(),i=z((function(e){return e})),r=i.resume,c=i.form,l=de(),u=l.resume__getResume,d=l.resume__setResume,j=l.form__setAbout,m=l.form__getResumePreview,O=l.resume__setLoading,p=Object(s.useState)(c.format),v=Object(T.a)(p,2),g=v[0],_=v[1],y=Object(s.useState)(null!==c.resumePreview),E=Object(T.a)(y,2),R=E[0],w=E[1],S=Object(s.useState)(!1),N=Object(T.a)(S,2),M=N[0],F=N[1],A=Object(b.g)();Object(s.useEffect)((function(){var e=function(){var e=o.withName,t=A.search.slice(1),n=A.pathname.split("resume/").pop()+"";switch(t){case o.withName:e=o.withName;break;case o.withOutName:e=o.withOutName}return{format:e,id:n}}(),t=e.format,n=e.id;return u(n,t),_(t),null===c.resumePreview&&m(n),function(){d(null),O(null)}}),[]);var B=Object(b.f)();Object(s.useEffect)((function(){!1===r.loading&&(null===r.data?B.push("/404"):F(!0))}),[r.loading]),Object(s.useEffect)((function(){w(null!==c.resumePreview)}),[c.resumePreview]);return Object(C.jsxs)(h.a,{className:a.content,children:[Object(C.jsx)(he.a,{in:M,children:Object(C.jsxs)("div",{className:a.noPrint,children:[Object(C.jsx)(Oe.a,{onClick:function(){return window.print()},className:a.smallestBtn,color:"primary","aria-label":"printing",children:Object(C.jsx)(ve.a,{})}),Object(C.jsx)(he.a,{in:R,children:Object(C.jsx)(pe.a,{avatar:Object(C.jsx)(k.a,{alt:"userAvatar",src:null===(e=c.resumePreview)||void 0===e?void 0:e.photo}),style:{fontWeight:500},label:null===(t=c.resumePreview)||void 0===t?void 0:t.name,component:x.a,href:"https://hh.ru/resume/".concat(null===(n=c.resumePreview)||void 0===n?void 0:n.id),target:"_blank",underline:"none",className:a.chip})})]})}),Object(C.jsx)(f.a,{mt:2,children:Object(C.jsx)(De,{minHeight:960,onClose:function(){F(!1),w(!1)},children:M?Object(C.jsx)(Ue,{data:r.data,format:g,about:c.about,setAbout:j}):Object(C.jsx)(me,{children:Object(C.jsx)(xe.a,{})})})})]})},He=n(188),$e=function(){return Object(C.jsx)(h.a,{children:Object(C.jsx)(me,{children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(p.a,{variant:"h4",component:"h2",paragraph:!0,children:"404! \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(C.jsx)(p.a,{variant:"subtitle2",children:Object(C.jsx)(x.a,{component:m.b,to:"/",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})})]})})})},qe=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(He.a,{}),Object(C.jsxs)(b.c,{children:[Object(C.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(C.jsx)(be,{})}}),Object(C.jsx)(b.a,{path:"/resume/:userId",render:function(){return Object(C.jsx)(Ge,{})}}),Object(C.jsx)(b.a,{path:"*",render:function(){return Object(C.jsx)($e,{})}})]})]})},Ve=n(189),Je=n(190),Ke=Object(Ve.a)({palette:{type:"light",primary:{main:"#2196f3"},secondary:{main:"#f50057"}}});var Ze,Qe,Xe=function(){return Object(C.jsx)(Je.a,{theme:Ke,children:Object(C.jsx)(m.a,{basename:"/ibs-resume-convertor",children:Object(C.jsx)(qe,{})})})},Ye=n(102),et=n(103),tt={resumePreview:null,format:o.withName,about:"",loading:!1},nt={data:null,loading:null};!function(e){e.form="form",e.resume="resume"}(Qe||(Qe={}));var at=Object(G.combineReducers)((Ze={},Object(ye.a)(Ze,Qe.form,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.FORM__SET_RESUME_PREVIEW:return Object(H.a)(Object(H.a)({},e),{},{resumePreview:t.payload});case N.FORM__SET_ABOUT:return Object(H.a)(Object(H.a)({},e),{},{about:t.payload});case N.FORM__SET_FORMAT:return Object(H.a)(Object(H.a)({},e),{},{format:t.payload});case N.FORM__SET_LOADING:return Object(H.a)(Object(H.a)({},e),{},{loading:t.payload});default:return e}})),Object(ye.a)(Ze,Qe.resume,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.RESUME__SET_RESUME:return Object(H.a)(Object(H.a)({},e),{},{data:t.payload});case re.RESUME__SET_LOADING:return Object(H.a)(Object(H.a)({},e),{},{loading:t.payload});default:return e}})),Ze)),it=Object(et.composeWithDevTools)({trace:!0,traceLimit:25}),rt=Object(G.createStore)(at,it(Object(G.applyMiddleware)(Ye.a)));d.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(j.a,{store:rt,children:Object(C.jsx)(Xe,{})})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.13813712.chunk.js.map