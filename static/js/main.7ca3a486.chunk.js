(this["webpackJsonpreact-food-order-app"]=this["webpackJsonpreact-food-order-app"]||[]).push([[0],{42:function(e,t,n){e.exports={MenuItemContainer:"MenuItem_MenuItemContainer__2XCKa",ItemInfoContainer:"MenuItem_ItemInfoContainer__UK7X5",SpaceBox:"MenuItem_SpaceBox__2ClAx"}},55:function(e,t,n){e.exports={MenuList:"Menu_MenuList__1LW9Z"}},56:function(e,t,n){e.exports={MenuItemContainer:"CartItem_MenuItemContainer__2Dk5f",ItemInfoContainer:"CartItem_ItemInfoContainer__3eKR3",SpaceBox:"CartItem_SpaceBox__3nYBa",QuantityBox:"CartItem_QuantityBox__2yJtx"}},59:function(e,t,n){e.exports={backdrop:"Backdrop_backdrop__3sd-f"}},76:function(e,t,n){},78:function(e,t,n){e.exports={CartButtonBox:"CartButton_CartButtonBox__1FHze"}},84:function(e,t,n){e.exports={HeaderContainer:"Header_HeaderContainer__163sn",HeaderTitle:"Header_HeaderTitle__1K4vS",HeaderImage:"Header_HeaderImage__2Z8tD"}},85:function(e,t,n){e.exports={card:"Card_card__b7d4V"}},86:function(e,t,n){e.exports={MenuAddBox:"MenuItemAdd_MenuAddBox__1ZoHv",LabelBox:"MenuItemAdd_LabelBox__21_sq",NumberBox:"MenuItemAdd_NumberBox__z3aU3",SubmitButton:"MenuItemAdd_SubmitButton__1SjfX"}},88:function(e,t,n){e.exports={CartItemAdjustBox:"CartItemAdjust_CartItemAdjustBox__apvF6",MinusButton:"CartItemAdjust_MinusButton__1GAS4",PlusButton:"CartItemAdjust_PlusButton__3xb1h"}},89:function(e,t,n){e.exports={cartContainer:"Cart_cartContainer__1dTu7",OrderSubmitButton:"Cart_OrderSubmitButton__1ofRE"}},90:function(e,t,n){e.exports={a:"RestaurantDescription_a__doMIm"}},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),i=n.n(c),o=(n(76),n(123)),s=n(124),u=n(125),j=n(121),d=n(122),m=n(94),l=n(48),b=n.n(l),x=n(14),O=n(2),h=a.a.createContext({cartStatus:!1,setCartStatus:function(){}}),f=function(e){var t=Object(r.useState)(!1),n=Object(x.a)(t,2),a={cartStatus:n[0],setCartStatus:n[1]};return Object(O.jsx)(h.Provider,{value:a,children:e.children})},p=(n(78),function(e){var t=Object(r.useContext)(h);return Object(O.jsx)(m.a,{variant:"contained",color:"secondary",onClick:function(){t.setCartStatus(!0)},size:"large",startIcon:Object(O.jsx)(b.a,{}),children:"Your Cart"})}),I=(n(84),n.p,function(){var e="",t=1,n=1;return Object(j.a)("(min-width: 800px)")?(e="Amai: Authentic Japanese Sweets",t=8,n=2):(e="Amai",t=6,n=6),Object(O.jsx)(d.a,{position:"static",children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(s.a,{container:!0,justify:"space-around",alignItems:"center",children:[Object(O.jsx)(s.a,{item:!0,xs:t,children:Object(O.jsx)(u.a,{variant:"h4",component:"h1",noWrap:!0,children:e})}),Object(O.jsx)(s.a,{item:!0,xs:n,children:Object(O.jsx)(p,{})})]})})})}),_=n(126),C=(n(85),n(133)),v=n(61),y=n(16),M=a.a.createContext({Total:0,CartListArray:[],setCartListArray:function(){},CurrentItem:{},setCurrentItem:function(){},addItemToCart:function(){}}),S=function(e){var t=Object(r.useState)(0),n=Object(x.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)([]),o=Object(x.a)(i,2),s=o[0],u=o[1],j=Object(r.useState)(0),d=Object(x.a)(j,2),m=d[0],l=d[1],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=e.reduce((function(e,t){return e+t.Price*t.Quantity}),0);c(t)},h={Total:a,CartListArray:s,setCartListArray:u,addItemToCart:function(e,t,n){if(!(n<1)){var r=s.find((function(t){return t.Name==e}));if(r){var a=Number(r.Quantity)+ +n;r.Quantity=a}else{var c={OrderNumber:m,Name:e,Price:t,Quantity:n};l((function(e){return++e})),u((function(e){var t=[].concat(Object(y.a)(e),[c]);return b(t),t}))}}},cartMinusFunc:function(e){var t=s.findIndex((function(t){return t.OrderNumber==e}));u((function(e){var n,r,a=JSON.parse(JSON.stringify(e));return a[t].Quantity--,a[t].Quantity<1?(b(a),n=t,(r=a).splice(n,1),console.log("Array Edited",r),r):(b(a),a)}))},cartPlusFunc:function(e){var t=s.findIndex((function(t){return t.OrderNumber==e}));u((function(e){var n=JSON.parse(JSON.stringify(e));return n[t].Quantity++,b(n),n}))},updateTotal:b,orderSubmitFunc:function(){s.map((function(e){return console.log("You have ordered: ".concat(e.Quantity," ").concat(e.Name))})),console.log("Your total cost is PKR "+a),console.log("Your order has been submitted"),u([]),c(0),alert("Order Submitted. Check Console")}};return Object(O.jsx)(M.Provider,{value:h,children:e.children})},g=n(131),B=(n(86),function(e){var t=Object(r.useContext)(M).addItemToCart,n=Object(r.useRef)();return Object(O.jsxs)("form",{onSubmit:function(r){r.preventDefault();var a=n.current.value;t(e.MenuItemName,e.MenuItemPrice,a),n.current.value=""},children:[Object(O.jsx)(g.a,{id:e.MenuItemName,type:"number",InputProps:{inputProps:{min:1,max:30}},fullWidth:1,label:"Amount: ",InputLabelProps:{shrink:!0},variant:"outlined",inputRef:n}),Object(O.jsx)(m.a,{id:e.MenuItemName,variant:"contained",color:"primary",type:"submit",size:"large",children:"ADD"})]})}),P=n(42),N=n.n(P),A=function(e){var t=Object(j.a)("(min-width: 800px)");return Object(O.jsxs)("li",{className:N.a.MenuItemContainer,children:[Object(O.jsxs)("div",{className:N.a.ItemInfoContainer,children:[Object(O.jsx)(u.a,{variant:"h6",component:"h4",children:e.MenuItemTitle}),t&&Object(O.jsx)(u.a,{variant:"caption",children:e.MenuItemDesc}),Object(O.jsxs)(u.a,{variant:"h7",component:"h5",children:["PKR ",e.MenuItemPrice," "]})]}),Object(O.jsx)("div",{className:N.a.SpaceBox}),Object(O.jsx)(B,{MenuItemName:e.MenuItemTitle,MenuItemPrice:e.MenuItemPrice})]})},w=n(55),T=n.n(w),Q=function(){var e=Object(r.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){a([{MenuItemTitle:"Dango",MenuItemDesc:"a small, sticky, sweet dumpling, commonly skewered on a stick",MenuItemPrice:"30"},{MenuItemTitle:"Kompeito",MenuItemDesc:"A crystal sugar candy",MenuItemPrice:"10"},{MenuItemTitle:"Taiyaki",MenuItemDesc:"Fish shaped cake with a sweet filling",MenuItemPrice:"60"}])}),[]);var c=n.map((function(e){return Object(O.jsxs)(C.a,{m:1,p:1,children:[Object(O.jsx)(A,{MenuItemTitle:e.MenuItemTitle,MenuItemDesc:e.MenuItemDesc,MenuItemPrice:e.MenuItemPrice}),Object(O.jsx)("hr",{})]},e.MenuItemTitle)}));return Object(O.jsx)(v.a,{children:Object(O.jsxs)(C.a,{width:"70%",m:.5,p:2,mx:"10%",children:[Object(O.jsx)(u.a,{variant:"h4",component:"h2",align:"center",children:"Menu"}),Object(O.jsx)("ul",{className:T.a.MenuList,children:c}),Object(O.jsxs)("div",{children:["Favicon made by"," ",Object(O.jsx)("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons",children:"Smashicons"})," ","from"," ",Object(O.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})})},F=n(129),k=n(134),D=n(56),L=n.n(D),H=n(58),K=n.n(H),J=n(57),R=n.n(J),z=n(127),E=n(128),Y=(n(88),function(e){var t=Object(r.useContext)(M),n=t.cartMinusFunc,a=t.cartPlusFunc;return Object(O.jsxs)(z.a,{color:"primary",children:[Object(O.jsx)(E.a,{variant:"outlined",onClick:function(){n(e.cartItemKey)},size:"large","aria-label":"Subtract Item From Cart",children:Object(O.jsx)(R.a,{})}),Object(O.jsx)(E.a,{onClick:function(){a(e.cartItemKey)},size:"large","aria-label":"Add Item to Cart",children:Object(O.jsx)(K.a,{})})]})}),W=function(e){var t="",n="",r="";return Object(j.a)("(min-width: 600px)")?(t="Price Each: PKR ".concat(e.Price),n=" Quantity: ".concat(e.Quantity),r="Total Item Price: ".concat(e.Price*e.Quantity)):(t="Each:".concat(e.Price),n="Qty:".concat(e.Quantity),r="Item Total:".concat(e.Price*e.Quantity)),Object(O.jsx)(C.a,{m:1,children:Object(O.jsx)(_.a,{children:Object(O.jsx)(F.a,{children:Object(O.jsxs)(s.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(s.a,{item:!0,xs:7,sm:9,children:Object(O.jsx)(u.a,{variant:"h6",component:"h3",children:e.Name})}),Object(O.jsx)(s.a,{item:!0,xs:5,sm:3,display:"flex-end",spacing:3,children:Object(O.jsx)(Y,{cartItemKey:e.OrderNumber})}),Object(O.jsx)(s.a,{item:!0,xs:0,sm:2}),Object(O.jsx)(s.a,{item:!0,xs:7,sm:4,children:Object(O.jsx)(u.a,{variant:"body2",component:"h5",children:t})}),Object(O.jsx)(s.a,{item:!0,xs:5,sm:6,children:Object(O.jsx)(u.a,{variant:"body2",component:"h5",className:L.a.QuantityBox,children:n})}),Object(O.jsx)(s.a,{item:!0,xs:12,children:Object(O.jsx)(u.a,{variant:"subtitle2",component:"h4",children:r})})]})})})})},X=(n(59),n(89),function(){var e=Object(r.useContext)(M),t=e.CartListArray,n=e.Total,a=e.orderSubmitFunc,c=t.map((function(e){return Object(O.jsx)(W,{OrderNumber:e.OrderNumber,Name:e.Name,Quantity:e.Quantity,Price:e.Price},e.OrderNumber)}));return Object(O.jsx)(v.a,{container:!0,children:Object(O.jsx)(F.a,{children:Object(O.jsxs)(s.a,{container:!0,justifyContent:"space-around",alignItems:"center",children:[Object(O.jsx)(s.a,{item:!0,xs:12,children:Object(O.jsx)(u.a,{variant:"h4",component:"h2",align:"center",children:"Cart"})}),Object(O.jsx)(s.a,{item:!0,xs:12,children:c}),Object(O.jsx)(s.a,{item:!0,xs:3,sm:12,align:"center",children:Object(O.jsxs)(u.a,{variant:"h5",component:"h3",children:["Total: ",n]})}),Object(O.jsx)(s.a,{item:!0,xs:9,sm:12,align:"center",children:Object(O.jsx)(m.a,{variant:"contained",onClick:a,color:"secondary",size:"large",children:"Submit Order"})})]})})})}),Z=function(){var e={};e=Object(j.a)("(min-width: 800px)")?{position:"fixed",top:"2%",left:"25%",width:"50%"}:{position:"fixed",top:"2%",left:"10%",width:"80%"};var t=Object(r.useContext)(h),n=t.cartStatus,a=t.setCartStatus;return Object(O.jsx)(O.Fragment,{children:n&&Object(O.jsx)(k.a,{style:e,open:function(){a(!0)},onClose:function(){a(!1)},overflow:"scroll",children:Object(O.jsx)(X,{})})})},U=(n(90),function(e){var t=Object(j.a)("(min-width: 780px)");return Object(O.jsx)(O.Fragment,{children:t&&Object(O.jsx)(v.a,{children:Object(O.jsx)(s.a,{container:!0,justify:"space-around",alignItems:"center",children:Object(O.jsx)(u.a,{variant:"body1",align:"right",children:"\u3088\u3046\u3053\u305d,\u672c\u7269\u306e\u548c\u83d3\u5b50\u3078"})})})})}),q=n(130);n(91);var G=function(){return Object(O.jsx)(f,{children:Object(O.jsx)(S,{children:Object(O.jsx)(q.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(Z,{}),Object(O.jsx)(I,{}),Object(O.jsx)(U,{}),Object(O.jsx)(Q,{})]})})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(G,{})}),document.getElementById("root")),V()}},[[92,1,2]]]);
//# sourceMappingURL=main.7ca3a486.chunk.js.map