(this["webpackJsonpreact-food-order-app"]=this["webpackJsonpreact-food-order-app"]||[]).push([[0],{88:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),i=n.n(a),s=(n(88),n(129)),o=n(130),j=n(40),u=n(144),l=n(131),b=n(148),d=n(127),m=n(128),O=n(98),x=n(69),h=n.n(x),f=n(12),p=n(2),v=r.a.createContext({cartStatus:!1,setCartStatus:function(){}}),I=function(e){var t=Object(c.useState)(!1),n=Object(f.a)(t,2),r={cartStatus:n[0],setCartStatus:n[1]};return Object(p.jsx)(v.Provider,{value:r,children:e.children})},y=function(e){var t=Object(c.useContext)(v);return Object(p.jsx)(O.a,{variant:"contained",color:"secondary",onClick:function(){t.setCartStatus(!0)},size:"large",startIcon:Object(p.jsx)(h.a,{}),children:"Your Cart"})},C=n(72),P=n(126),g=r.a.createContext({isDark:0,setIsDark:function(){}}),S=function(e){var t=Object(c.useState)(!1),n=Object(f.a)(t,2),r=n[0],a=n[1],i=Object(C.a)({palette:{type:r?"dark":"light"}}),s={isDark:r,setIsDark:a};return Object(p.jsx)(g.Provider,{value:s,children:Object(p.jsx)(P.a,{theme:i,children:e.children})})},M=function(){var e=Object(c.useContext)(g),t=e.isDark,n=e.setIsDark,r="";return r=Object(d.a)("(min-width: 800px)")?"Amai: Authentic Japanese Sweets":"Amai",Object(p.jsx)(m.a,{position:"static",children:Object(p.jsx)(s.a,{children:Object(p.jsxs)(o.a,{container:!0,alignItems:"center",children:[Object(p.jsx)(o.a,{item:!0,xs:4,sm:7,children:Object(p.jsx)(j.a,{variant:"h4",component:"h1",noWrap:!0,children:r})}),Object(p.jsx)(o.a,{item:!0,xs:5,sm:4,children:Object(p.jsx)(u.a,{mr:2,children:Object(p.jsx)(y,{})})}),Object(p.jsx)(o.a,{item:!0,xs:3,sm:1,children:Object(p.jsx)(l.a,{control:Object(p.jsx)(b.a,{color:"default",checked:t,onChange:function(){return n(!t)}}),label:t?"Dark Mode":"Light Mode"})})]})})})},w=n(74),D=n(133),T=n(147),N=n(135),k=n(136),A=n(17),Q=r.a.createContext({Total:0,CartListArray:[],setCartListArray:function(){},CurrentItem:{},setCurrentItem:function(){},addItemToCart:function(){},isError:!1,isCartSubmit:!1,setIsCartSubmit:function(){},setIsError:function(){}}),F=function(e){var t=Object(c.useState)(0),n=Object(f.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)([]),s=Object(f.a)(i,2),o=s[0],j=s[1],u=Object(c.useState)(0),l=Object(f.a)(u,2),b=l[0],d=l[1],m=Object(c.useState)(!1),O=Object(f.a)(m,2),x=O[0],h=O[1],v=Object(c.useState)(!1),I=Object(f.a)(v,2),y=I[0],C=I[1],P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=e.reduce((function(e,t){return e+t.Price*t.Quantity}),0);a(t)},g={Total:r,setTotal:a,CartListArray:o,setCartListArray:j,addItemToCart:function(e,t,n){if(!(n<1)){var c=o.find((function(t){return t.Name===e}));if(c){var r=Number(c.Quantity)+ +n;return r>30?void C(!0):void(c.Quantity=r)}var a={OrderNumber:b,Name:e,Price:t,Quantity:n};d((function(e){return++e})),j((function(e){var t=[].concat(Object(A.a)(e),[a]);return P(t),t}))}},cartMinusFunc:function(e){var t=o.findIndex((function(t){return t.OrderNumber===e}));j((function(e){var n,c,r=JSON.parse(JSON.stringify(e));return r[t].Quantity--,r[t].Quantity<1?(P(r),n=t,(c=r).splice(n,1),console.log("Array Edited",c),c):(P(r),r)}))},cartPlusFunc:function(e){var t=o.findIndex((function(t){return t.OrderNumber===e}));j((function(e){if(e[t].Quantity>=30)return e;var n=JSON.parse(JSON.stringify(e));return n[t].Quantity++,P(n),n}))},updateTotal:P,orderSubmitFunc:function(){r&&(h(!0),o.map((function(e){return console.log("You have ordered: ".concat(e.Quantity," ").concat(e.Name))})),console.log("Your total cost is PKR "+r),console.log("Your order has been submitted"))},isCartSubmit:x,setIsCartSubmit:h,isError:y,setIsError:C};return Object(p.jsx)(Q.Provider,{value:g,children:e.children})},E=n(142),L=function(e){var t=Object(c.useContext)(Q).addItemToCart,n=Object(c.useRef)();return Object(p.jsx)("form",{onSubmit:function(c){c.preventDefault();var r=n.current.value;t(e.MenuItemName,e.MenuItemPrice,r),n.current.value=""},children:Object(p.jsxs)(o.a,{container:!0,children:[Object(p.jsx)(o.a,{item:!0,xs:12,children:Object(p.jsx)(E.a,{id:"quantity"+e.MenuItemName,type:"number",InputProps:{inputProps:{min:1,max:30}},label:"Amount:",InputLabelProps:{shrink:!0},variant:"outlined",inputRef:n,fullWidth:!0})}),Object(p.jsx)(o.a,{item:!0,xs:12,children:Object(p.jsx)(O.a,{id:"button"+e.MenuItemName,variant:"contained",color:"primary",type:"submit",size:"large",fullWidth:!0,children:"ADD"})})]})})},K=n(134),J=n(146),Y=function(e){return Object(p.jsx)(K.a,{children:Object(p.jsxs)(o.a,{container:!0,children:[Object(p.jsx)(o.a,{item:!0,xs:9,children:Object(p.jsxs)(o.a,{container:!0,children:[Object(p.jsx)(o.a,{item:!0,xs:12,children:Object(p.jsx)(j.a,{variant:"h6",component:"h4",children:e.MenuItemTitle})}),Object(p.jsx)(o.a,{item:!0,xs:12,children:Object(p.jsx)(J.a,{smDown:!0,children:Object(p.jsx)(j.a,{variant:"caption",children:e.MenuItemDesc})})}),Object(p.jsx)(o.a,{item:!0,xs:12,children:Object(p.jsxs)(j.a,{variant:"body1",component:"h5",children:["PKR ",e.MenuItemPrice," "]})})]})}),Object(p.jsx)(o.a,{item:!0,xs:3,children:Object(p.jsx)(L,{MenuItemName:e.MenuItemTitle,MenuItemPrice:e.MenuItemPrice})})]})})},R=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useContext)(Q),i=a.isError,s=a.setIsError;Object(c.useEffect)((function(){r([{MenuItemTitle:"Dango",MenuItemDesc:"a small, sticky, sweet dumpling, commonly skewered on a stick",MenuItemPrice:"30",PicAlt:"DangoPicture",PicSrc:"192.png"},{MenuItemTitle:"Konpeito",MenuItemDesc:"A crystal sugar candy",MenuItemPrice:"10",PicAlt:"DangoPicture",PicSrc:"192.png"},{MenuItemTitle:"Taiyaki",MenuItemDesc:"Fish shaped cake with a sweet filling",MenuItemPrice:"60",PicAlt:"DangoPicture",PicSrc:"192.png"}])}),[]);var o=n.map((function(e){return Object(p.jsxs)(u.a,{p:1,children:[Object(p.jsx)(Y,{MenuItemTitle:e.MenuItemTitle,MenuItemDesc:e.MenuItemDesc,MenuItemPrice:e.MenuItemPrice,PicAltProp:e.PicAlt,PicSrcProp:e.PicSrc}),Object(p.jsx)("hr",{})]},e.MenuItemTitle)}));return Object(p.jsx)(w.a,{children:Object(p.jsxs)(u.a,{width:"70%",p:2,mx:"10%",children:[Object(p.jsx)(j.a,{variant:"h4",component:"h2",align:"center",children:"Menu"}),Object(p.jsx)(D.a,{children:o}),Object(p.jsxs)("div",{children:["Favicon made by"," ",Object(p.jsx)("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons",children:"Smashicons"})," ","from"," ",Object(p.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(p.jsxs)(T.a,{open:i,onClose:function(){s(!1)},children:[Object(p.jsx)(N.a,{children:"Error"}),Object(p.jsx)(k.a,{children:"Amount of items in cart will exceed 30."})]})]})})},z=n(139),B=n(145),W=n(71),q=n.n(W),G=n(70),H=n.n(G),U=n(137),V=n(132),X=function(e){var t=Object(c.useContext)(Q),n=t.cartMinusFunc,r=t.cartPlusFunc;return Object(p.jsxs)(U.a,{color:"primary",children:[Object(p.jsx)(V.a,{onClick:function(){n(e.cartItemKey)},size:"large","aria-label":"Subtract Item From Cart",children:Object(p.jsx)(H.a,{})}),Object(p.jsx)(V.a,{onClick:function(){r(e.cartItemKey)},size:"large","aria-label":"Add Item to Cart",children:Object(p.jsx)(q.a,{})})]})},Z=n(138),$=function(e){var t="",n="",c="";return Object(d.a)("(min-width: 600px)")?(t="Price Each: PKR ".concat(e.Price),n=" Quantity: ".concat(e.Quantity),c="Total Item Price: ".concat(e.Price*e.Quantity)):(t="Each:".concat(e.Price),n="Qty:".concat(e.Quantity),c="Item Total:".concat(e.Price*e.Quantity)),Object(p.jsx)(u.a,{m:1,children:Object(p.jsx)(Z.a,{children:Object(p.jsx)(z.a,{children:Object(p.jsxs)(o.a,{container:!0,alignItems:"center",children:[Object(p.jsx)(o.a,{item:!0,xs:7,sm:9,children:Object(p.jsx)(j.a,{variant:"h6",component:"h3",children:e.Name})}),Object(p.jsx)(o.a,{item:!0,xs:5,sm:3,display:"flex-end",spacing:3,children:Object(p.jsx)(X,{cartItemKey:e.OrderNumber})}),Object(p.jsx)(o.a,{item:!0,xs:0,sm:2}),Object(p.jsx)(o.a,{item:!0,xs:7,sm:4,children:Object(p.jsx)(j.a,{variant:"body2",component:"h5",children:t})}),Object(p.jsx)(o.a,{item:!0,xs:5,sm:6,children:Object(p.jsx)(j.a,{variant:"body2",component:"h5",children:n})}),Object(p.jsx)(o.a,{item:!0,xs:12,children:Object(p.jsx)(j.a,{variant:"subtitle2",component:"h4",children:c})})]})})})})},_=n(140),ee=function(e){var t=Object(c.useContext)(Q),n=t.isCartSubmit,r=t.setIsCartSubmit,a=t.CartListArray,i=t.setCartListArray,s=t.Total,o=t.setTotal,u=s,l=a.map((function(e){return Object(p.jsx)(K.a,{children:Object(p.jsx)(_.a,{children:"You have ordered: ".concat(e.Quantity," ").concat(e.Name)})})}));return Object(p.jsxs)(T.a,{open:n,onClose:function(){r(!1),o(0),i([])},children:[Object(p.jsx)(N.a,{children:"Order Details"}),Object(p.jsxs)(k.a,{children:[Object(p.jsxs)(D.a,{children:[l,Object(p.jsx)("hr",{})]}),Object(p.jsxs)(j.a,{variant:"h6",children:["Your total cost is PKR "+u,Object(p.jsx)("hr",{})]}),Object(p.jsxs)(j.a,{variant:"overline",children:["Your order has been submitted",Object(p.jsx)("hr",{})]})]})]})},te=function(){var e=Object(c.useContext)(Q),t=e.CartListArray,n=e.Total,r=e.orderSubmitFunc,a=t.map((function(e){return Object(p.jsx)($,{OrderNumber:e.OrderNumber,Name:e.Name,Quantity:e.Quantity,Price:e.Price},e.OrderNumber)}));return Object(p.jsxs)(w.a,{container:!0,children:[Object(p.jsx)(z.a,{children:Object(p.jsxs)(o.a,{container:!0,justifyContent:"space-around",alignItems:"center",children:[Object(p.jsx)(o.a,{item:!0,xs:12,children:Object(p.jsx)(j.a,{variant:"h4",component:"h2",align:"center",children:"Cart"})}),Object(p.jsx)(o.a,{item:!0,xs:12,children:a}),Object(p.jsx)(o.a,{item:!0,xs:3,sm:12,align:"center",children:Object(p.jsxs)(j.a,{variant:"h5",component:"h3",children:["Total: ",n]})}),Object(p.jsx)(o.a,{item:!0,xs:9,sm:12,align:"center",children:Object(p.jsx)(O.a,{variant:"contained",onClick:r,color:"secondary",size:"large",children:"Submit Order"})})]})}),Object(p.jsx)(ee,{})]})},ne=function(){var e={};e=Object(d.a)("(min-width: 900px)")?{position:"fixed",top:"2%",left:"25%",width:"50%",overflow:"auto"}:{position:"fixed",top:"2%",left:"10%",width:"80%",overflow:"auto"};var t=Object(c.useContext)(v),n=t.cartStatus,r=t.setCartStatus;return Object(p.jsx)(B.a,{style:e,open:n,onClose:function(){r(!1)},children:Object(p.jsx)(te,{})})},ce=function(e){return Object(p.jsx)(J.a,{smDown:!0,children:Object(p.jsx)(w.a,{children:Object(p.jsx)(u.a,{borderBottom:1,children:Object(p.jsx)(o.a,{container:!0,justify:"space-around",alignItems:"center",children:Object(p.jsx)(j.a,{variant:"body1",align:"right",children:"\u3088\u3046\u3053\u305d,\u672c\u7269\u306e\u548c\u83d3\u5b50\u3078"})})})})})},re=n(141);var ae=function(){return Object(p.jsx)(I,{children:Object(p.jsx)(F,{children:Object(p.jsx)(S,{children:Object(p.jsxs)(re.a,{children:[Object(p.jsx)(ne,{}),Object(p.jsx)(M,{}),Object(p.jsx)(ce,{}),Object(p.jsx)(R,{})]})})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(ae,{})}),document.getElementById("root")),ie()}},[[96,1,2]]]);
//# sourceMappingURL=main.ba79881a.chunk.js.map