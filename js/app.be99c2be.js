(function(t){function e(e){for(var r,s,c=e[0],n=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,c=1;c<a.length;c++){var n=a[c];0!==i[n]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=n;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"22d7":function(t,e,a){"use strict";a("be87")},"354c":function(t,e,a){},"3f3b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("BaseLayout",[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-layout"},[a("Header",{attrs:{cart:t.allCart,favorite:t.allFavorite}},[t._v(">")]),a("div",{staticClass:"body"},[t._t("default",[t._v("Ничего не передано")])],2),a("Footer")],1)},c=[],n=a("5530"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-template"},[a("div",{staticClass:"header"},[a("router-link",{staticClass:"header__logo",attrs:{to:"/ProductRow",exact:""}},[a("svg",{attrs:{width:"72",height:"61",viewBox:"0 0 72 61",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M69.2623 14.0075C68.6753 13.2737 67.811 12.6133 66.8163 13.0046C65.8216 13.396 66.637 14.1706 66.6614 14.7658C66.6014 15.3329 66.3728 15.8691 66.0051 16.3051C65.6374 16.7411 65.1475 17.0569 64.5986 17.2118C63.4735 17.3667 63.4001 16.3964 63.1636 15.7034C62.8375 14.7087 62.5684 13.6977 62.3483 12.6867C61.9488 10.9989 61.3536 9.50686 59.2826 9.3764C59.5435 8.74044 59.8778 8.4143 60.4241 8.56107C61.427 8.78121 61.4922 8.1697 61.802 7.41144C62.6663 5.31603 61.6797 3.5549 60.9867 1.76931C60.751 1.1698 60.3074 0.675125 59.737 0.375715C59.1666 0.0763039 58.5076 -0.00784811 57.8802 0.13864C56.5101 0.427182 55.1719 0.850498 53.8851 1.40241C53.6506 1.5251 53.456 1.71238 53.3246 1.94211C53.1931 2.17184 53.1301 2.43442 53.1431 2.6988C53.1173 3.54611 53.3022 4.38658 53.6813 5.14481C54.6678 7.52559 54.7004 7.59082 52.8659 9.29487C51.9772 10.1102 52.2137 10.42 53.404 10.5749C52.5887 10.9989 51.9609 11.3332 51.3331 11.7001C49.5312 12.76 47.6233 13.6569 46.1231 15.1734C45.3078 15.9888 45.3078 16.69 46.0334 17.6195C47.8761 20.0655 50.5341 21.8021 52.1892 24.7618C51.9978 24.8426 51.8171 24.9467 51.6511 25.0716C49.7024 26.7594 48.6343 28.6673 49.9144 31.2845C50.0717 31.686 50.125 32.1207 50.0694 32.5483C50.0138 32.9759 49.8511 33.3826 49.5964 33.7305C48.7465 35.2791 48.1102 36.9357 47.7048 38.6551C47.3396 40.3044 46.443 41.7882 45.1528 42.8786C43.9079 43.9279 42.9791 45.3026 42.4704 46.8493C41.386 49.8986 40.3994 53.0377 36.9506 54.4237C35.964 54.8151 36.3717 55.6223 36.8527 56.2501C37.8311 57.5465 39.2498 58.4026 40.2201 59.7642C40.5679 60.1645 41.0081 60.474 41.5025 60.6658C41.9969 60.8576 42.5306 60.9259 43.0574 60.8649C43.4896 60.8649 43.938 60.8078 44.1418 60.3757C44.3457 59.9436 43.9543 59.5604 43.6037 59.3728C42.2829 58.5575 42.2829 57.4894 42.7884 56.2419C42.9677 55.8098 43.2531 55.4266 42.6579 55.0352C42.185 54.7091 42.5682 54.2688 42.7394 53.9182C43.6037 52.0674 44.574 50.2818 45.6176 48.5207C47.1015 46.0013 49.2866 44.1179 51.0803 41.892C52.5969 39.9515 53.8606 37.8643 55.3527 35.671L59.4865 40.4407C57.3421 41.0196 55.9805 43.0661 54.7086 45.0963C54.1454 45.9942 53.3962 46.7609 52.5115 47.3446C51.6268 47.9283 50.6272 48.3154 49.5801 48.4799C48.031 48.7979 47.7782 49.385 48.5854 50.7792C49.0257 51.5456 49.8899 52.1979 49.8818 53.0621C49.8818 54.44 50.6564 55.3125 51.3983 56.2419C51.8712 56.8371 52.4012 57.6851 53.3062 57.31C54.2112 56.935 53.771 56.0218 53.7139 55.3451C53.51 52.736 53.9096 50.3389 55.9397 48.4555C57.9502 46.5335 60.1679 44.8408 62.5521 43.4085C65.308 41.7779 64.9981 40.4489 64.1828 38.3372C63.8766 37.6146 63.5253 36.9121 63.131 36.2336C61.7275 33.9584 60.0877 31.8376 58.239 29.9066C57.9373 29.556 57.546 29.2788 57.603 28.7162C57.9373 25.1776 59.78 22.1935 61.1497 18.9321C61.4351 19.348 61.59 19.5518 61.7368 19.7475C63.1392 21.9081 63.7425 22.0223 65.5444 20.1307C66.7593 18.8425 67.7621 17.3504 68.8954 15.9806C69.352 15.361 69.8168 14.6761 69.2623 14.0075ZM53.0698 21.6554C52.1484 21.9163 51.4391 21.0357 50.9336 20.3182C50.2161 19.299 49.6372 18.1902 49.0012 17.1139C48.9442 17.0243 48.8382 16.9183 48.8545 16.8449C49.2866 15.3365 50.8113 15.573 51.8305 15.0022C52.4827 14.6353 53.0616 14.7087 53.2084 15.6056C53.4204 16.8856 53.6242 18.1657 53.7954 19.2338C53.559 20.2285 54.04 21.37 53.0698 21.6554Z",fill:"#B17998"}}),a("path",{attrs:{d:"M24.1906 0.0488281H20.9863V18.6303H24.1906V0.0488281Z",fill:"#B07997"}}),a("path",{attrs:{d:"M44.3293 0H29.637V3.16351H35.3769V18.6386H38.5812V3.16351H44.3293V0Z",fill:"#B07997"}}),a("path",{attrs:{d:"M15.2462 3.16351V0H5.15234V0.0489202V3.16351V7.73754V10.901V18.6386H8.35662V10.901H13.5177V7.73754H8.35662V3.16351H15.2462Z",fill:"#B07997"}}),a("path",{attrs:{d:"M32.8657 36.7553H16.771V42.3485H27.1502C26.5378 44.5964 25.2124 46.5849 23.3733 48.0152C21.5341 49.4455 19.2805 50.2404 16.951 50.2803C14.6214 50.3203 12.3419 49.6033 10.4547 48.237C8.56752 46.8707 7.17469 44.9288 6.48547 42.7033C5.79625 40.4777 5.84785 38.0885 6.63253 35.8948C7.41721 33.701 8.89258 31.8212 10.837 30.5376C12.7814 29.254 15.0898 28.6361 17.4154 28.7766C19.741 28.9172 21.9583 29.8086 23.7339 31.317L27.6802 27.3708C24.7751 24.7377 21.0299 23.2209 17.1113 23.0903C13.1928 22.9596 9.35492 24.2236 6.28087 26.6572C3.20683 29.0909 1.09603 32.5364 0.324123 36.3804C-0.447779 40.2244 0.169304 44.2177 2.06555 47.6494C3.96179 51.0811 7.01416 53.7287 10.6794 55.1209C14.3447 56.5131 18.385 56.5597 22.0814 55.2522C25.7778 53.9448 28.8903 51.3683 30.8651 47.9811C32.8399 44.594 33.5488 40.6161 32.8657 36.7553Z",fill:"#E07D94"}}),a("path",{attrs:{d:"M50.6645 24.7211L50.1998 23.9058C46.8453 24.9184 43.9063 26.9846 41.818 29.7984C39.7298 32.6121 38.6034 36.0236 38.6057 39.5276C38.6031 42.4435 39.3891 45.3058 40.8805 47.8114C41.3697 46.2378 42.5112 43.4249 44.4435 42.0062C44.2461 41.2058 44.1448 40.3846 44.1419 39.5602C44.1418 37.841 44.5533 36.1467 45.3419 34.619C46.1306 33.0914 47.2735 31.7747 48.6751 30.779C46.9466 27.3709 50.6645 24.7211 50.6645 24.7211Z",fill:"#E07D95"}}),a("path",{attrs:{d:"M60.0246 24.0197C59.2983 25.7221 58.81 27.5164 58.5733 29.352C60.9436 30.1935 62.9456 31.8363 64.2336 33.9966C65.5217 36.1569 66.015 38.6992 65.6283 41.1845C65.2417 43.6698 63.9993 45.942 62.1158 47.6089C60.2323 49.2758 57.8259 50.2327 55.312 50.3143C54.674 52.0912 54.4427 53.9886 54.6353 55.8668H54.9288C58.8411 55.9114 62.639 54.5478 65.6295 52.025C68.62 49.5021 70.6037 45.9881 71.2187 42.1242C71.8337 38.2603 71.0389 34.3041 68.9794 30.9775C66.9199 27.6509 63.733 25.1756 60.0002 24.0034L60.0246 24.0197Z",fill:"#E07D95"}})])]),a("a",{staticClass:"menu-controls__izbr b-color-white",attrs:{href:"favorites.html"}},[a("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M17.6 1C14.8 1 12.9 2.5 12 3.6C11.1 2.6 9.2 1 6.4 1C2.6 1 0 4.6 0 8.6C0 11.6 1.5 17.4 11.6 22.9C11.8 23 12.1 23 12.4 22.9C22.5 17.4 24 11.6 24 8.6C24 4.5 21.4 1 17.6 1ZM12 21.3C7.1 18.6 1.6 14.1 1.6 8.6C1.6 5.5 3.4 2.6 6.4 2.6C8.6 2.6 10.5 4 11.3 5.3C11.6 5.8 12.3 5.8 12.7 5.3C12.7 5.3 14.4 2.6 17.6 2.6C20.6 2.6 22.4 5.5 22.4 8.6C22.4 14.1 16.9 18.6 12 21.3Z",fill:"#FB4B54",stroke:"#EBEBEB","stroke-width":"0.25","stroke-miterlimit":"10"}})]),a("span",[t._v(t._s(t.favorite.length))])]),a("a",{staticClass:"menu-controls__cart b-color-white",attrs:{href:"cart.html"}},[a("svg",{attrs:{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},[a("defs"),a("title"),a("g",{attrs:{"data-name":"Layer 2",id:"Layer_2"}},[a("path",{attrs:{d:"M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z",fill:"#FB4B54"}}),a("path",{attrs:{d:"M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z",fill:"#FB4B54"}})])]),a("span",[t._v(t._s(t.cart.length))])]),a("div",{staticClass:"header__menu"},[t._m(0),a("div",{staticClass:"navbar"},[a("router-link",{staticClass:"navbar__item",attrs:{to:"/ProductRow",exact:""}},[t._v("Каталог")]),a("router-link",{staticClass:"navbar__item",attrs:{to:"/Advantages"}},[t._v("Преимущества")]),a("router-link",{staticClass:"navbar__item",attrs:{to:"/Favorite"}},[t._v("Избранное")])],1)])],1)])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header__dropdown"},[t._v(" Меню "),a("span",{staticClass:"header__caret"})])}],d={props:{cart:Array,favorite:Array}},p=d,v=(a("8baf"),a("2877")),m=Object(v["a"])(p,l,u,!1,null,null,null),C=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-template"},[a("footer",[a("div",{staticClass:"page-footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"top-footer"},[a("div",{staticClass:"last-view"},t._l(t.allFavorite,(function(t){return a("FavoriteProduct",{key:t.id,attrs:{favorite:t}})})),1)])])]),t._m(0)])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"bottom-footer__info"},[a("div",[a("span",[t._v("2021")])]),a("div",[a("span",[t._v("Sev")])])])])])}],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"product-card product-card_short",attrs:{href:"product.html"}},[a("div",{staticClass:"product-card__img"},[a("img",{attrs:{src:t.favorite.image,alt:""}})]),a("div",{staticClass:"product-card__content"},[a("div",{staticClass:"product-card__name"},[t._v(t._s(t.favorite.name))]),a("div",{staticClass:"product-card__info"},[a("div",{staticClass:"product-price"},[a("div",{staticClass:"product-price__old"},[t._v(t._s(t.favorite.price)+" $")]),a("div",{staticClass:"product-price__actual"},[a("div",{staticClass:"product-price__new"},[t._v(t._s(t.favorite.oldprice)+" $")]),a("div",{staticClass:"product-price__quantity"},[t._v(" "+t._s(t.favorite.quantity)+" ")])])])])])])},b=[],g={name:"FavoriteProduct",props:{favorite:Object}},w=g,j=Object(v["a"])(w,h,b,!1,null,null,null),O=j.exports,y=a("2f62"),P={data:function(){return{}},props:{},computed:Object(n["a"])({},Object(y["b"])(["allFavorite"])),components:{FavoriteProduct:O},methods:{}},x=P,k=Object(v["a"])(x,f,_,!1,null,null,null),F=k.exports,B={props:{},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(y["b"])(["allProducts"])),Object(y["b"])(["allCart"])),Object(y["b"])(["allFavorite"])),components:{Header:C,Footer:F},methods:{}},V=B,M=Object(v["a"])(V,s,c,!1,null,null,null),$=M.exports,E={data:function(){return{}},name:"App",components:{BaseLayout:$},computed:{},methods:{}},H=E,A=(a("034f"),Object(v["a"])(H,i,o,!1,null,null,null)),S=A.exports;r["a"].use(y["a"]);var Z=new y["a"].Store({state:{products:[{id:1,izbr:0,cart:0,name:"C-3PO",image:"https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/c3po.png",link:"/product.html",oldprice:"108",price:"815",quantity:"за 1 шт",description:"Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни"},{id:2,izbr:0,cart:0,name:"R2-D2",image:"https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/r2d2.jpg",link:"/product.html",oldprice:"15000",price:"4000",quantity:"за 1 шт",description:"Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни"},{id:3,izbr:0,cart:0,name:"R4-P17",image:"https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/r4.jpg",link:"/product.html",oldprice:"4815",price:"48",quantity:"за 1 шт",description:"Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни"},{id:4,izbr:0,cart:0,name:"C1-10P",image:"https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/chopper.jpg",link:"/product.html",oldprice:"15000",price:"15",quantity:"за 1 шт",description:"Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни"},{id:5,izbr:0,cart:0,name:"B1",image:"https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/b1.jpg",link:"/product.html",oldprice:"2342",price:"16",quantity:"за 1 шт",description:"Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни"}],advantages:[{id:1,title:"Преимущество 1",image:"https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/r4.jpg",description:"Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни"},{id:2,title:"Преимущество 1",image:"https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/r2d2.jpg",description:"Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни"},{id:3,title:"Преимущество 1",image:"https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/b1.jpg",description:"Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни"}],cart:[],favorite:[],selectedproduct:{}},getters:{allProducts:function(t){return t.products},allAdvantages:function(t){return t.advantages},allCart:function(t){return t.cart},allFavorite:function(t){return t.favorite},selectedProduct:function(t){return t.selectedproduct}},mutations:{allFavorite:function(t,e){t.favorite.push(e),console.log(t.favorite)},allCart:function(t,e){t.cart.push(e)},selectedProduct:function(t,e){t.selectedproduct=e}},actions:{},modules:{}}),T=a("8c4f"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-row"},[t._l(t.allProducts,(function(e){return a("ProductItem",{key:e.id,attrs:{product:e},on:{"add-favorite":t.addfavorite,"on-modal":t.onmodal,"on-product":t.onproduct}})})),a("Modal",{attrs:{visible:t.visible},on:{"modal-clean":function(e){t.visible=!1}}},[a("input",{attrs:{type:"text",name:"name",placeholder:"Ваше имя*"}}),a("input",{attrs:{type:"tel",name:"phonenumber",placeholder:"Номер телефона*",id:"maskformphone"}}),a("input",{attrs:{type:"email",name:"email",placeholder:"E-mail"}}),a("button",{staticClass:"button-1 button-1_form",attrs:{type:"submit"}},[t._v("Отправить")])])],2)},q=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{staticClass:"product-card"},[a("object",[a("a",{staticClass:"izbr-button",on:{click:function(e){return t.addToFavorite(t.product)}}},[a("svg",{attrs:{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("path",{attrs:{d:"M14.5818 1C12.2909 1 10.7363 2.22727 9.99994 3.12727C9.26358 2.30909 7.70904 1 5.41813 1C2.30904 1 0.181763 3.94546 0.181763 7.21818C0.181763 9.67273 1.40904 14.4182 9.67267 18.9182C9.83631 19 10.0818 19 10.3272 18.9182C18.5909 14.4182 19.8181 9.67273 19.8181 7.21818C19.8181 3.86364 17.6909 1 14.5818 1ZM9.99994 17.6091C5.99085 15.4 1.49085 11.7182 1.49085 7.21818C1.49085 4.68182 2.96358 2.30909 5.41813 2.30909C7.21813 2.30909 8.77267 3.45455 9.42722 4.51818C9.67267 4.92727 10.2454 4.92727 10.5727 4.51818C10.5727 4.51818 11.9636 2.30909 14.5818 2.30909C17.0363 2.30909 18.509 4.68182 18.509 7.21818C18.509 11.7182 14.009 15.4 9.99994 17.6091Z",fill:"#FB4B54",stroke:"white","stroke-width":"0.25","stroke-miterlimit":"10"}})]),a("rect",{attrs:{x:"19.8182",y:"13.6235",width:"4.20779",height:"9.81818",rx:"2",transform:"rotate(90 19.8182 13.6235)",fill:"white"}}),a("rect",{attrs:{x:"12.8051",y:"10.8182",width:"4.20779",height:"9.81818",rx:"2",fill:"white"}}),a("rect",{attrs:{x:"18.4156",y:"15.0259",width:"1.4026",height:"7.01299",rx:"0.701299",transform:"rotate(90 18.4156 15.0259)",fill:"#FB4B54"}}),a("rect",{attrs:{x:"14.2078",y:"12.2206",width:"1.4026",height:"7.01299",rx:"0.701299",fill:"#FB4B54"}}),a("defs",[a("clipPath",{attrs:{id:"clip0"}},[a("rect",{attrs:{width:"19.6364",height:"19.6364",fill:"white",transform:"translate(0.181763 0.181824)"}})])])])])]),a("router-link",{attrs:{to:"/Product"}},[a("div",{staticClass:"product-card__img",on:{click:function(e){return t.onProduct(t.product)}}},[a("img",{attrs:{src:t.product.image,alt:""}})])]),a("div",{staticClass:"product-card__content"},[a("div",{staticClass:"product-card__name"},[t._v(" "+t._s(t.product.name)+" ")]),a("div",{staticClass:"product-card__info"},[a("div",{staticClass:"product-price"},[a("div",{staticClass:"product-price__old"},[t._v(t._s(t.product.oldprice)+" $")]),a("div",{staticClass:"product-price__actual"},[a("div",{staticClass:"product-price__new"},[t._v(t._s(t.product.price)+" $")]),a("div",{staticClass:"product-price__quantity"},[t._v(" "+t._s(t.product.quantity)+" ")])])]),a("object",[a("a",{staticClass:"in-cart",attrs:{"data-toggle":"modal","data-target":"#button-tovar-v-korzine"},on:{click:function(e){return t.onModal(t.product)}}},[t._v(" В корзину ")])])])])],1)])},R=[],I=(a("a9e3"),{props:{product:Object,index:Number},methods:Object(n["a"])(Object(n["a"])({},Object(y["c"])(["favoriteAdd"])),{},{onProduct:function(t){this.$emit("on-product",t)},onModal:function(t){this.$emit("on-modal",t)},addToFavorite:function(t){this.$emit("add-favorite",t)}})}),D=I,J=Object(v["a"])(D,z,R,!1,null,null,null),N=J.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("div",{staticClass:"modal"},[a("div",{staticClass:"modal__body",attrs:{role:"dialog","aria-modal":"true"}},[a("a",{staticClass:"modal__close",attrs:{href:""},on:{click:t.modalClean}},[t._v("X")]),a("div",{staticClass:"modal__title"},[t._v("Товар "+t._s(t.selectedProduct.name)+" в корзине")]),a("form",{staticClass:"modal__form",attrs:{method:"get"}},[t._t("default")],2)])]):t._e()},G=[],K={name:"Modal",props:{visible:Boolean},methods:{modalClean:function(){this.$emit("modal-clean")}},computed:Object(n["a"])({},Object(y["b"])(["selectedProduct"]))},Q=K,U=(a("22d7"),Object(v["a"])(Q,X,G,!1,null,null,null)),W=U.exports,Y={data:function(){return{productmodal:{},visible:!1}},props:{},computed:Object(n["a"])({},Object(y["b"])(["allProducts"])),components:{ProductItem:N,Modal:W},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(y["c"])(["allCart"])),Object(y["c"])(["allFavorite"])),Object(y["c"])(["selectedProduct"])),{},{onproduct:function(t){this.selectedProduct(t)},addfavorite:function(t){this.allFavorite(t)},onmodal:function(t){this.visible=!0,this.allCart(t),this.selectedProduct(t)}})},tt=Y,et=(a("91ae"),Object(v["a"])(tt,L,q,!1,null,null,null)),at=et.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"advantages"},t._l(t.allAdvantages,(function(t){return a("AdvantagesItem",{key:t.id,attrs:{item:t}})})),1)},it=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"advantages__item"},[a("img",{staticClass:"advantages__img",attrs:{src:t.item.image,alt:""}}),a("div",{staticClass:"advantages__title"},[t._v(t._s(t.item.title))]),a("div",{staticClass:"advantages__text"},[t._v(" "+t._s(t.item.description)+" ")])])},st=[],ct={name:"AdvantagesItem",props:{item:Object}},nt=ct,lt=Object(v["a"])(nt,ot,st,!1,null,null,null),ut=lt.exports,dt={data:function(){return{}},props:{},computed:Object(n["a"])({},Object(y["b"])(["allAdvantages"])),components:{AdvantagesItem:ut},methods:{}},pt=dt,vt=(a("69ac"),Object(v["a"])(pt,rt,it,!1,null,null,null)),mt=vt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-row"},t._l(t.allFavorite,(function(t){return a("FavoriteProduct",{key:t.id,attrs:{favorite:t}})})),1)},ft=[],_t={name:"FavoriteRow",data:function(){return{}},props:{},computed:Object(n["a"])({},Object(y["b"])(["allFavorite"])),components:{FavoriteProduct:O}},ht=_t,bt=(a("b262"),Object(v["a"])(ht,Ct,ft,!1,null,null,null)),gt=bt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product"},[a("div",{staticClass:"product__name"},[t._v(t._s(t.selectedProduct.name))]),a("img",{staticClass:"product__img",attrs:{src:t.selectedProduct.image}}),a("div",{staticClass:"product__price"},[t._v(t._s(t.selectedProduct.price)+" $")]),a("div",[t._v(t._s(t.selectedProduct.description))])])},jt=[],Ot={name:"Product",props:{},computed:Object(n["a"])({},Object(y["b"])(["selectedProduct"])),components:{},methods:{}},yt=Ot,Pt=(a("e903"),Object(v["a"])(yt,wt,jt,!1,null,null,null)),xt=Pt.exports;r["a"].use(T["a"]);var kt=[{path:"/",component:at},{path:"/ProductRow",component:at},{path:"/Advantages",component:mt},{path:"/Favorite",component:gt},{path:"/Product",component:xt}],Ft=new T["a"]({routes:kt}),Bt=Ft;r["a"].config.productionTip=!1,new r["a"]({store:Z,router:Bt,render:function(t){return t(S)}}).$mount("#app")},6860:function(t,e,a){},"69ac":function(t,e,a){"use strict";a("f94d")},"6faf":function(t,e,a){},"85ec":function(t,e,a){},"8baf":function(t,e,a){"use strict";a("6860")},"91ae":function(t,e,a){"use strict";a("6faf")},b262:function(t,e,a){"use strict";a("354c")},be87:function(t,e,a){},e903:function(t,e,a){"use strict";a("3f3b")},f94d:function(t,e,a){}});
//# sourceMappingURL=app.be99c2be.js.map