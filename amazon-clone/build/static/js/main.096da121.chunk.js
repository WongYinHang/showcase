(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(47),l=t.n(c),i=(t(59),t(26)),o=t(3),s=t(48),m=t.n(s),u=t(49),d=t.n(u),p=(t(60),t(11)),E=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(E.Provider,{value:Object(n.useReducer)(a,t)},c)},g=function(){return Object(n.useContext)(E)},h=t(31),v=t.n(h),f=v.a.initializeApp({apiKey:"AIzaSyA9ZjRTT_N76P-OeZkShgsilUBKNw2frHo",authDomain:"clone-c52a5.firebaseapp.com",databaseURL:"https://clone-c52a5.firebaseio.com",projectId:"clone-c52a5",storageBucket:"clone-c52a5.appspot.com",messagingSenderId:"1096535697221",appId:"1:1096535697221:web:2c08d4a652a07a978fc02c",measurementId:"G-PDQNTLFJ6N"}).firestore(),b=v.a.auth();var N=function(){var e=g(),a=Object(o.a)(e,2),t=a[0],n=t.basket,c=t.user;return a[1],r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{type:"text",className:"header__searchInput"}),r.a.createElement(m.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(p.b,{to:!c&&"/login"},r.a.createElement("div",{onClick:function(){c&&b.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",c?c.email:"Guest"),r.a.createElement("span",{className:"header__optionLine2"},c?"Sign Out":"Sign In"))),r.a.createElement(p.b,{to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLine1"},"Returns"),r.a.createElement("span",{className:"header__optionLine2"}," & Orders"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLine1"},"Yours"),r.a.createElement("span",{className:"header__optionLine2"},"Prime"))),r.a.createElement(p.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header__optionLine2 header__basketCount"},null===n||void 0===n?void 0:n.length))))};t(76),t(77);var O=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,l=e.rating,s=g(),m=Object(o.a)(s,2);Object(i.a)(m[0]);var u=m[1];return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,t),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,a){return r.a.createElement("p",null,"*")})))),r.a.createElement("img",{src:n,alt:""}),r.a.createElement("button",{onClick:function(){u({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:c,rating:l}})}},"Add to Basket"))};var S=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg",alt:""}),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"145814847",title:"Lenovo IdeaPad 3 14 Laptop, 14.0 FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10",price:449.99,image:"https://images-na.ssl-images-amazon.com/images/I/41hCoCHfdjL._AC_US160_.jpg",rating:4}),r.a.createElement(O,{id:"15425691",title:"HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black",price:99.99,image:"https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg",rating:4}),r.a.createElement(O,{id:"14585467",title:"AmazonBasics 9 Volt Everyday Alkaline Batteries - Pack of 8",price:10.44,image:"https://images-na.ssl-images-amazon.com/images/I/51yjDn1slQL._AC_US160_.jpg",rating:4}),r.a.createElement(O,{id:"78614847",title:"Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)",price:178.95,image:"https://images-na.ssl-images-amazon.com/images/I/31mcmc5f35L._AC_US160_.jpg",rating:3})),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"147864847",title:"Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2",price:25.98,image:"https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg",rating:5}),r.a.createElement(O,{id:"1445345847",title:"Logitech C920x Pro HD Webcam",price:110.99,image:"https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UY218_.jpg",rating:4}),r.a.createElement(O,{id:"17867865847",title:"Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)",price:114.99,image:"https://m.media-amazon.com/images/I/91JA5-hAnoL._AC_UY218_.jpg",rating:4})),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"167563847",title:"ANRRI Blue Light Blocking Glasses Lightweight Eyeglasses Frame Filter Blue Ray Computer Game Glasses",price:25.95,image:"https://m.media-amazon.com/images/I/51+HjpuyRAL._AC_UY218_.jpg",rating:1}),r.a.createElement(O,{id:"1455463877",title:"Samsung Galaxy Buds+ Plus, True Wireless Earbuds (Wireless Charging Case included), Black \u2013 US Version",price:119.99,image:"https://m.media-amazon.com/images/I/51xvUyKNLCL._AC_UY218_.jpg",rating:2})),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"14586752847",title:"AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon",price:42,image:"https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg",rating:5}))))},j=(t(78),t(79),t(21)),y=t.n(j),k=t(35),A=t(17),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},B=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(k.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(k.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:a.user});default:return e}},T=t(5);var I=function(){var e=g(),a=Object(o.a)(e,1)[0].basket,t=Object(T.f)();return r.a.createElement("div",{className:"subtotal"},r.a.createElement(y.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"subtotal (",a.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},deciamlScale:2,value:C(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{onClick:function(e){return t.push("/payment")}},"Proceed to Checkout"))};t(81);var w=function(e){var a=e.id,t=e.image,n=e.title,c=e.price,l=e.rating,i=e.hideButton,s=g(),m=Object(o.a)(s,2),u=(m[0].basket,m[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:t}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,a){return r.a.createElement("p",null,"*")}))),!i&&r.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from basket")))};var P=function(){var e=g(),a=Object(o.a)(e,1)[0],t=a.basket,n=a.user;return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"",className:"checkout__ad"}),r.a.createElement("div",null,r.a.createElement("h3",null,"Hello, ",null===n||void 0===n?void 0:n.email),r.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),t.map((function(e){return r.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(I,null)))};t(82),t(83);var L=function(){var e=Object(T.f)(),a=Object(n.useState)(""),t=Object(o.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"login"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",alt:""})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign-in"),r.a.createElement("form",null,r.a.createElement("h5",null,"Email"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),b.signInWithEmailAndPassword(c,m).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__loginButton"},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),r.a.createElement("button",{onClick:function(a){a.preventDefault(),b.createUserWithEmailAndPassword(c,m).then((function(a){console.log(a),a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))},x=t(23),D=t.n(x),z=t(34),M=(t(85),t(20)),R=t(50),U=t.n(R).a.create({baseURL:"https://us-central1-clone-c52a5.cloudfunctions.net/api"});var G=function(){var e=g(),a=Object(o.a)(e,2),t=a[0],c=t.basket,l=t.user,i=a[1],s=Object(T.f)(),m=Object(M.useStripe)(),u=Object(M.useElements)(),d=Object(n.useState)(!1),E=Object(o.a)(d,2),_=E[0],h=E[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),N=b[0],O=b[1],S=Object(n.useState)(null),j=Object(o.a)(S,2),k=j[0],A=j[1],B=Object(n.useState)(!0),I=Object(o.a)(B,2),P=I[0],L=I[1],x=Object(n.useState)(!0),R=Object(o.a)(x,2),G=R[0],H=R[1];Object(n.useEffect)((function(){(function(){var e=Object(z.a)(D.a.mark((function e(){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({method:"post",url:"/payments/create?total=".concat(100*C(c))});case 2:a=e.sent,H(a.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log("THE SECRET IS >>>",G),console.log("\ud83d\udc71",l);var W=function(){var e=Object(z.a)(D.a.mark((function e(a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),O(!0),e.next=4,m.confirmCardPayment(G,{payment_method:{card:u.getElement(M.CardElement)}}).then((function(e){var a=e.paymentIntent;f.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(a.id).set({basket:c,amount:a.amount,created:a.created}),h(!0),A(null),O(!1),i({type:"EMPTY_BASKET"}),s.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(p.b,{to:"/checkout"},null===c||void 0===c?void 0:c.length," items"),")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===l||void 0===l?void 0:l.email),r.a.createElement("p",null,"123 React Lane"),r.a.createElement("p",null,"Los Angeles, CA"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review items and delivery")),r.a.createElement("div",{className:"payment__items"},c.map((function(e){return r.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:W},r.a.createElement(M.CardElement,{onChange:function(e){L(e.empty),A(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(y.a,{renderText:function(e){return r.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:C(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{disabled:N||P||_},r.a.createElement("span",null,N?r.a.createElement("p",null,"Processing"):"Buy Now"))),k&&r.a.createElement("div",null,k))))))},H=t(51),W=(t(102),t(103),t(52)),Y=t.n(W);var K=function(e){var a,t=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,Y.a.unix(t.data.created).format("MMMM Do YYYY, h:mma")),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,t.id)),null===(a=t.data.basket)||void 0===a?void 0:a.map((function(e){return r.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(y.a,{renderText:function(e){return r.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};var F=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=g(),i=Object(o.a)(l,2),s=i[0],m=(s.basket,s.user);return i[1],Object(n.useEffect)((function(){m?f.collection("users").doc(null===m||void 0===m?void 0:m.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return c(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):c([])}),[m]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders__order"},null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(K,{order:e})}))))};var V=function(){var e=Object(H.a)("pk_test_51HW8UID9uTsL4QbY0ztndSaKnIDd9CYteWGxpjso9bMjySuvNBFo9lsyaTfeZXWT33DLuY4csT2EeEAFk1xv91oy00XK6d7VuJ"),a=g(),t=Object(o.a)(a,2);Object(i.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){console.log("the user is >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/orders"},r.a.createElement(N,null),r.a.createElement(F,null)),r.a.createElement(T.a,{path:"/login"},r.a.createElement(L,null)),r.a.createElement(T.a,{path:"/checkout"},r.a.createElement(N,null),r.a.createElement(P,null)),r.a.createElement(T.a,{path:"/payment"},r.a.createElement(N,null),r.a.createElement(M.Elements,{stripe:e},r.a.createElement(G,null))),r.a.createElement(T.a,{path:""},r.a.createElement(N,null),r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,{initialState:{basket:[],user:null},reducer:B},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,a,t){e.exports=t(106)},59:function(e,a,t){},60:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},85:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.096da121.chunk.js.map