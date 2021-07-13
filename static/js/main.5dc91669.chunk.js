(this["webpackJsonpreact-food-order-app"]=this["webpackJsonpreact-food-order-app"]||[]).push([[0],{46:function(e,t,n){e.exports={MenuItemContainer:"MenuItem_MenuItemContainer__2XCKa",ItemInfoContainer:"MenuItem_ItemInfoContainer__UK7X5",SpaceBox:"MenuItem_SpaceBox__2ClAx"}},60:function(e,t,n){e.exports={MenuList:"Menu_MenuList__1LW9Z"}},61:function(e,t,n){e.exports={MenuItemContainer:"CartItem_MenuItemContainer__2Dk5f",ItemInfoContainer:"CartItem_ItemInfoContainer__3eKR3",SpaceBox:"CartItem_SpaceBox__3nYBa",QuantityBox:"CartItem_QuantityBox__2yJtx"}},64:function(e,t,n){e.exports={backdrop:"Backdrop_backdrop__3sd-f"}},83:function(e,t,n){},85:function(e,t,n){e.exports={CartButtonBox:"CartButton_CartButtonBox__1FHze"}},91:function(e,t,n){e.exports={HeaderContainer:"Header_HeaderContainer__163sn",HeaderTitle:"Header_HeaderTitle__1K4vS",HeaderImage:"Header_HeaderImage__2Z8tD"}},92:function(e,t,n){e.exports={card:"Card_card__b7d4V"}},93:function(e,t,n){e.exports={MenuAddBox:"MenuItemAdd_MenuAddBox__1ZoHv",LabelBox:"MenuItemAdd_LabelBox__21_sq",NumberBox:"MenuItemAdd_NumberBox__z3aU3",SubmitButton:"MenuItemAdd_SubmitButton__1SjfX"}},95:function(e,t,n){e.exports={CartItemAdjustBox:"CartItemAdjust_CartItemAdjustBox__apvF6",MinusButton:"CartItemAdjust_MinusButton__1GAS4",PlusButton:"CartItemAdjust_PlusButton__3xb1h"}},96:function(e,t,n){e.exports={cartContainer:"Cart_cartContainer__1dTu7",OrderSubmitButton:"Cart_OrderSubmitButton__1ofRE"}},97:function(e,t,n){e.exports={a:"RestaurantDescription_a__doMIm"}},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),i=n.n(c),o=(n(83),n(133)),s=n(134),u=n(104),j=n(135),d=n(145),l=n(131),m=n(132),b=n(101),x=n(52),O=n.n(x),h=n(13),f=n(2),p=a.a.createContext({cartStatus:!1,setCartStatus:function(){}}),I=function(e){var t=Object(r.useState)(!1),n=Object(h.a)(t,2),a={cartStatus:n[0],setCartStatus:n[1]};return Object(f.jsx)(p.Provider,{value:a,children:e.children})},_=(n(85),function(e){var t=Object(r.useContext)(p);return Object(f.jsx)(b.a,{variant:"contained",color:"secondary",onClick:function(){t.setCartStatus(!0)},size:"large",startIcon:Object(f.jsx)(O.a,{}),children:"Your Cart"})}),C=(n(91),n(65)),v=n(130),M=a.a.createContext({isDark:0,setIsDark:function(){}}),y=function(e){var t=Object(r.useState)(!0),n=Object(h.a)(t,2),a=n[0],c=n[1],i=Object(C.a)({palette:{type:a?"dark":"light"}}),o={isDark:a,setIsDark:c};return Object(f.jsx)(M.Provider,{value:o,children:Object(f.jsx)(v.a,{theme:i,children:e.children})})},g=function(){var e=Object(r.useContext)(M),t=e.isDark,n=e.setIsDark,a="";return a=Object(l.a)("(min-width: 800px)")?"Amai: Authentic Japanese Sweets":"Amai",Object(f.jsx)(m.a,{position:"static",children:Object(f.jsx)(o.a,{children:Object(f.jsxs)(s.a,{container:!0,alignItems:"center",children:[Object(f.jsx)(s.a,{item:!0,xs:4,sm:7,children:Object(f.jsx)(u.a,{variant:"h4",component:"h1",noWrap:!0,children:a})}),Object(f.jsx)(s.a,{item:!0,xs:5,sm:3,children:Object(f.jsx)(_,{})}),Object(f.jsx)(s.a,{item:!0,xs:3,sm:1,children:Object(f.jsx)(j.a,{control:Object(f.jsx)(d.a,{color:"default",checked:t,onChange:function(){return n(!t)}}),label:t?"Dark Mode":"Light Mode"})})]})})})},S=n(137),P=(n(92),n(143)),B=n(68),N=n(17),A=a.a.createContext({Total:0,CartListArray:[],setCartListArray:function(){},CurrentItem:{},setCurrentItem:function(){},addItemToCart:function(){}}),k=function(e){var t=Object(r.useState)(0),n=Object(h.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)([]),o=Object(h.a)(i,2),s=o[0],u=o[1],j=Object(r.useState)(0),d=Object(h.a)(j,2),l=d[0],m=d[1],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=e.reduce((function(e,t){return e+t.Price*t.Quantity}),0);c(t)},x={Total:a,CartListArray:s,setCartListArray:u,addItemToCart:function(e,t,n){if(!(n<1)){var r=s.find((function(t){return t.Name==e}));if(r){var a=Number(r.Quantity)+ +n;r.Quantity=a}else{var c={OrderNumber:l,Name:e,Price:t,Quantity:n};m((function(e){return++e})),u((function(e){var t=[].concat(Object(N.a)(e),[c]);return b(t),t}))}}},cartMinusFunc:function(e){var t=s.findIndex((function(t){return t.OrderNumber==e}));u((function(e){var n,r,a=JSON.parse(JSON.stringify(e));return a[t].Quantity--,a[t].Quantity<1?(b(a),n=t,(r=a).splice(n,1),console.log("Array Edited",r),r):(b(a),a)}))},cartPlusFunc:function(e){var t=s.findIndex((function(t){return t.OrderNumber==e}));u((function(e){var n=JSON.parse(JSON.stringify(e));return n[t].Quantity++,b(n),n}))},updateTotal:b,orderSubmitFunc:function(){s.map((function(e){return console.log("You have ordered: ".concat(e.Quantity," ").concat(e.Name))})),console.log("Your total cost is PKR "+a),console.log("Your order has been submitted"),u([]),c(0),alert("Order Submitted. Check Console")}};return Object(f.jsx)(A.Provider,{value:x,children:e.children})},w=n(141),T=(n(93),function(e){var t=Object(r.useContext)(A).addItemToCart,n=Object(r.useRef)();return Object(f.jsxs)("form",{onSubmit:function(r){r.preventDefault();var a=n.current.value;t(e.MenuItemName,e.MenuItemPrice,a),n.current.value=""},children:[Object(f.jsx)(w.a,{id:e.MenuItemName,type:"number",InputProps:{inputProps:{min:1,max:30}},fullWidth:1,label:"Amount: ",InputLabelProps:{shrink:!0},variant:"outlined",inputRef:n}),Object(f.jsx)(b.a,{id:e.MenuItemName,variant:"contained",color:"primary",type:"submit",size:"large",children:"ADD"})]})}),D=n(46),Q=n.n(D),F=function(e){var t=Object(l.a)("(min-width: 800px)");return Object(f.jsxs)("li",{className:Q.a.MenuItemContainer,children:[Object(f.jsxs)("div",{className:Q.a.ItemInfoContainer,children:[Object(f.jsx)(u.a,{variant:"h6",component:"h4",children:e.MenuItemTitle}),t&&Object(f.jsx)(u.a,{variant:"caption",children:e.MenuItemDesc}),Object(f.jsxs)(u.a,{variant:"h7",component:"h5",children:["PKR ",e.MenuItemPrice," "]})]}),Object(f.jsx)("div",{className:Q.a.SpaceBox}),Object(f.jsx)(T,{MenuItemName:e.MenuItemTitle,MenuItemPrice:e.MenuItemPrice})]})},L=n(60),H=n.n(L),K=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){a([{MenuItemTitle:"Dango",MenuItemDesc:"a small, sticky, sweet dumpling, commonly skewered on a stick",MenuItemPrice:"30"},{MenuItemTitle:"Kompeito",MenuItemDesc:"A crystal sugar candy",MenuItemPrice:"10"},{MenuItemTitle:"Taiyaki",MenuItemDesc:"Fish shaped cake with a sweet filling",MenuItemPrice:"60"}])}),[]);var c=n.map((function(e){return Object(f.jsxs)(P.a,{m:1,p:1,children:[Object(f.jsx)(F,{MenuItemTitle:e.MenuItemTitle,MenuItemDesc:e.MenuItemDesc,MenuItemPrice:e.MenuItemPrice}),Object(f.jsx)("hr",{})]},e.MenuItemTitle)}));return Object(f.jsx)(B.a,{children:Object(f.jsxs)(P.a,{width:"70%",m:.5,p:2,mx:"10%",children:[Object(f.jsx)(u.a,{variant:"h4",component:"h2",align:"center",children:"Menu"}),Object(f.jsx)("ul",{className:H.a.MenuList,children:c}),Object(f.jsxs)("div",{children:["Favicon made by"," ",Object(f.jsx)("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons",children:"Smashicons"})," ","from"," ",Object(f.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})})},J=n(139),R=n(144),z=n(61),E=n.n(z),Y=n(63),W=n.n(Y),X=n(62),Z=n.n(X),U=n(138),q=n(136),G=(n(95),function(e){var t=Object(r.useContext)(A),n=t.cartMinusFunc,a=t.cartPlusFunc;return Object(f.jsxs)(U.a,{color:"primary",children:[Object(f.jsx)(q.a,{onClick:function(){n(e.cartItemKey)},size:"large","aria-label":"Subtract Item From Cart",children:Object(f.jsx)(Z.a,{})}),Object(f.jsx)(q.a,{onClick:function(){a(e.cartItemKey)},size:"large","aria-label":"Add Item to Cart",children:Object(f.jsx)(W.a,{})})]})}),V=function(e){var t="",n="",r="";return Object(l.a)("(min-width: 600px)")?(t="Price Each: PKR ".concat(e.Price),n=" Quantity: ".concat(e.Quantity),r="Total Item Price: ".concat(e.Price*e.Quantity)):(t="Each:".concat(e.Price),n="Qty:".concat(e.Quantity),r="Item Total:".concat(e.Price*e.Quantity)),Object(f.jsx)(P.a,{m:1,children:Object(f.jsx)(S.a,{children:Object(f.jsx)(J.a,{children:Object(f.jsxs)(s.a,{container:!0,alignItems:"center",children:[Object(f.jsx)(s.a,{item:!0,xs:7,sm:9,children:Object(f.jsx)(u.a,{variant:"h6",component:"h3",children:e.Name})}),Object(f.jsx)(s.a,{item:!0,xs:5,sm:3,display:"flex-end",spacing:3,children:Object(f.jsx)(G,{cartItemKey:e.OrderNumber})}),Object(f.jsx)(s.a,{item:!0,xs:0,sm:2}),Object(f.jsx)(s.a,{item:!0,xs:7,sm:4,children:Object(f.jsx)(u.a,{variant:"body2",component:"h5",children:t})}),Object(f.jsx)(s.a,{item:!0,xs:5,sm:6,children:Object(f.jsx)(u.a,{variant:"body2",component:"h5",className:E.a.QuantityBox,children:n})}),Object(f.jsx)(s.a,{item:!0,xs:12,children:Object(f.jsx)(u.a,{variant:"subtitle2",component:"h4",children:r})})]})})})})},$=(n(64),n(96),function(){var e=Object(r.useContext)(A),t=e.CartListArray,n=e.Total,a=e.orderSubmitFunc,c=t.map((function(e){return Object(f.jsx)(V,{OrderNumber:e.OrderNumber,Name:e.Name,Quantity:e.Quantity,Price:e.Price},e.OrderNumber)}));return Object(f.jsx)(B.a,{container:!0,children:Object(f.jsx)(J.a,{children:Object(f.jsxs)(s.a,{container:!0,justifyContent:"space-around",alignItems:"center",children:[Object(f.jsx)(s.a,{item:!0,xs:12,children:Object(f.jsx)(u.a,{variant:"h4",component:"h2",align:"center",children:"Cart"})}),Object(f.jsx)(s.a,{item:!0,xs:12,children:c}),Object(f.jsx)(s.a,{item:!0,xs:3,sm:12,align:"center",children:Object(f.jsxs)(u.a,{variant:"h5",component:"h3",children:["Total: ",n]})}),Object(f.jsx)(s.a,{item:!0,xs:9,sm:12,align:"center",children:Object(f.jsx)(b.a,{variant:"contained",onClick:a,color:"secondary",size:"large",children:"Submit Order"})})]})})})}),ee=function(){var e={};e=Object(l.a)("(min-width: 800px)")?{position:"fixed",top:"2%",left:"25%",width:"50%",overflow:"scroll"}:{position:"fixed",top:"2%",left:"10%",width:"80%",overflow:"scroll"};var t=Object(r.useContext)(p),n=t.cartStatus,a=t.setCartStatus;return Object(f.jsx)(f.Fragment,{children:n&&Object(f.jsx)(R.a,{style:e,open:function(){a(!0)},onClose:function(){a(!1)},children:Object(f.jsx)($,{})})})},te=(n(97),function(e){var t=Object(l.a)("(min-width: 780px)");return Object(f.jsx)(f.Fragment,{children:t&&Object(f.jsx)(B.a,{children:Object(f.jsx)(s.a,{container:!0,justify:"space-around",alignItems:"center",children:Object(f.jsx)(u.a,{variant:"body1",align:"right",children:"\u3088\u3046\u3053\u305d,\u672c\u7269\u306e\u548c\u83d3\u5b50\u3078"})})})})}),ne=n(140);n(98);var re=function(){return Object(f.jsx)(I,{children:Object(f.jsx)(k,{children:Object(f.jsx)(y,{children:Object(f.jsx)(ne.a,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(ee,{}),Object(f.jsx)(g,{}),Object(f.jsx)(te,{}),Object(f.jsx)(K,{})]})})})})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(re,{})}),document.getElementById("root")),ae()}},[[99,1,2]]]);
//# sourceMappingURL=main.5dc91669.chunk.js.map