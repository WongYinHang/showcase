(this["webpackJsonpwhatapp-clone"]=this["webpackJsonpwhatapp-clone"]||[]).push([[0],{59:function(e,a,t){e.exports=t(85)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),o=(t(64),t(12)),s=(t(65),t(102)),i=t(97),m=t(48),u=t.n(m),d=t(49),p=t.n(d),h=t(50),E=t.n(h),v=t(98),f=(t(66),t(67),t(26)),b=t.n(f),g=b.a.initializeApp({apiKey:"AIzaSyACp1LrQXcsC0cpT7KO3CGY-o3MiFHv3dE",authDomain:"whatsapp-clone-4298a.firebaseapp.com",databaseURL:"https://whatsapp-clone-4298a.firebaseio.com",projectId:"whatsapp-clone-4298a",storageBucket:"whatsapp-clone-4298a.appspot.com",messagingSenderId:"955924318308",appId:"1:955924318308:web:f34889b7b742edc357f771",measurementId:"G-9BC7LTY30Y"}).firestore(),_=b.a.auth(),N=new b.a.auth.GoogleAuthProvider,j=g,w=t(28);var O=function(e){var a=e.id,t=e.name,r=e.addNewChat,l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){u(Math.floor(5e3*Math.random()))}),[]),r?c.a.createElement("div",{onClick:function(){var e=prompt("Please neter name for chat");e&&j.collection("rooms").add({name:e})},className:"sidebarchat"},c.a.createElement("h2",null,"Add new Chat")):c.a.createElement(w.b,{to:"/rooms/".concat(a)},c.a.createElement("div",{className:"sidebarchat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(m,".svg")}),c.a.createElement("div",{className:"sidebarchat__info"},c.a.createElement("h2",null,t),c.a.createElement("p",null,"lastmessage"))))},S=Object(n.createContext)(),y=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(S.Provider,{value:Object(n.useReducer)(a,t)},r)},C=function(){return Object(n.useContext)(S)};var k=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=C(),m=Object(o.a)(l,2),d=m[0].user;return m[1],Object(n.useEffect)((function(){var e=j.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===d||void 0===d?void 0:d.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(i.a,null,c.a.createElement(u.a,null)),c.a.createElement(i.a,null,c.a.createElement(p.a,null)),c.a.createElement(i.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(v.a,null),c.a.createElement("input",{placeholder:"Search or start new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(O,{addNewChat:!0}),t.map((function(e){return c.a.createElement(O,{key:e.id,id:e.id,name:e.data.name})}))))},I=(t(83),t(99)),A=t(100),T=t(52),x=t.n(T),D=t(51),R=t.n(D),W=t(4);var B=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],m=r[1],u=Object(W.f)().roomId,d=Object(n.useState)(""),p=Object(o.a)(d,2),h=p[0],E=p[1],f=Object(n.useState)([]),g=Object(o.a)(f,2),_=g[0],N=g[1],w=C(),O=Object(o.a)(w,2),S=O[0].user;return O[1],Object(n.useEffect)((function(){u&&(j.collection("rooms").doc(u).onSnapshot((function(e){return E(e.data().name)})),j.collection("rooms").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return N(e.docs.map((function(e){return e.data()})))})))}),[u]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,h),c.a.createElement("p",null,"Last seen","",new Date(null===(e=_[_.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(i.a,null,c.a.createElement(v.a,null)),c.a.createElement(i.a,null,c.a.createElement(I.a,null)),c.a.createElement(i.a,null,c.a.createElement(A.a,null)))),c.a.createElement("div",{className:"chat__body"},_.map((function(e){var a;return c.a.createElement("p",{className:"chat__message \n                        ".concat(e.name===S.displayName&&"chat__reciever","\n                    ")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(R.a,null),c.a.createElement("form",null,c.a.createElement("input",{value:l,onChange:function(e){return m(e.target.value)},placeholder:"Type your message",type:"text"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),console.log("You typed >>>",l),j.collection("rooms").doc(u).collection("messages").add({message:l,name:S.displayName,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),m("")},type:"submit"},"Send a message")),c.a.createElement(x.a,null)))},L=t(53),U=(t(84),t(101)),G=t(41),M="SET_USER",P=function(e,a){switch(console.log(a),a.type){case M:return Object(G.a)(Object(G.a)({},e),{},{user:a.user});default:return e}};var Y=function(){var e=C(),a=Object(o.a)(e,2);Object(L.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:""}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Sign in to WhatsApp")),c.a.createElement(U.a,{onClick:function(){_.signInWithPopup(N).then((function(e){t({type:M,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign in With Google")))};var z=function(){var e=C(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(w.a,null,c.a.createElement(k,null),c.a.createElement(W.c,null,c.a.createElement(W.a,{path:"/rooms/:roomId"},c.a.createElement(B,null)),c.a.createElement(W.a,{path:"/"},c.a.createElement(B,null))))):c.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,{initialState:{user:null},reducer:P},c.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.21770621.chunk.js.map