"use strict";(self.webpackChunkcar_rent=self.webpackChunkcar_rent||[]).push([[683],{1529:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,i,l,o,s,c,d,u,x=t(7762),h=t(3433),f=t(9439),p=t(3611),m=t(2791),Z=t(6362),g=t(4925),v=t(822),b=t(9256),j=t(7071),y=t(6747),w=t(3446),P=t(168),k=t(3938),C=k.ZP.div(r||(r=(0,P.Z)(["\n  /* background-color: green; */\n"]))),S=k.ZP.div(a||(a=(0,P.Z)(["\n  /*----Base mobile style 375 - 767 (\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0438\u0439)----*/\n  /* outline: 2px solid tomato; */\n  margin: 0 auto;\n  width: 100%;\n  max-width: 375px;\n\n  padding: 20px 50px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  flex-wrap: wrap;\n\n  /*----Tablet style 768-1440 (adaptive) ----*/\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 20px 95px;\n  }\n\n  /*----Desktop style more than 1440 (adaptive)----*/\n\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    padding: 20px 128px;\n  }\n"]))),B=k.ZP.button(i||(i=(0,P.Z)(["\n  padding: 14px 44px;\n  border: none;\n  height: 56px;\n  align-self: flex-start;\n  margin-top: 8px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 12px;\n  background-color: #3470ff;\n\n  color: #ffffff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.42857;\n\n  cursor: pointer;\n\n  transition: background-color 250ms linear;\n\n  &:hover {\n    background-color: #0b44cd;\n  }\n"]))),M=JSON.parse('["Buick","Toyota","Bugatti","Tesla","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"]'),T=t(184),F=function(n){var e=n.setSelectedBrand,t=n.selectedBrand,r=n.setPrice,a=n.price,i=n.setFrom,l=(n.from,n.setTo),o=(n.to,n.handleFilter),s=(0,m.useState)(""),c=(0,f.Z)(s,2),d=c[0],u=c[1],x=(0,m.useState)(""),h=(0,f.Z)(x,2),p=h[0],P=h[1];return(0,T.jsx)(C,{children:(0,T.jsxs)(S,{children:[(0,T.jsxs)(Z.Z,{sx:{m:1,minWidth:224},children:[(0,T.jsx)(g.Z,{id:"car-brand-label",children:"Car brand"}),(0,T.jsxs)(v.Z,{labelId:"car-brand-label",id:"car-brand",value:t,label:"Car brand",onChange:function(n){return e(n.target.value)},children:[(0,T.jsx)(b.Z,{value:"",children:"Enter the text"}),M.map((function(n){return(0,T.jsx)(b.Z,{value:n,children:n},n)}))]}),(0,T.jsx)(j.Z,{children:"Brand"})]}),(0,T.jsxs)(Z.Z,{sx:{m:1,minWidth:125},children:[(0,T.jsx)(g.Z,{id:"price-label",children:"Price/1hour"}),(0,T.jsxs)(v.Z,{labelId:"price-label",id:"price",value:a,label:"Price/1hour",onChange:function(n){return r(n.target.value)},children:[(0,T.jsx)(b.Z,{value:"",children:"To $"}),(0,T.jsx)(b.Z,{value:30,children:"30"}),(0,T.jsx)(b.Z,{value:40,children:"40"}),(0,T.jsx)(b.Z,{value:50,children:"50"}),(0,T.jsx)(b.Z,{value:60,children:"60"}),(0,T.jsx)(b.Z,{value:70,children:"70"}),(0,T.jsx)(b.Z,{value:80,children:"80"}),(0,T.jsx)(b.Z,{value:90,children:"90"}),(0,T.jsx)(b.Z,{value:100,children:"100"}),(0,T.jsx)(b.Z,{value:150,children:"150"}),(0,T.jsx)(b.Z,{value:200,children:"200"}),(0,T.jsx)(b.Z,{value:300,children:"300"}),(0,T.jsx)(b.Z,{value:400,children:"400"}),(0,T.jsx)(b.Z,{value:500,children:"500"})]}),(0,T.jsx)(j.Z,{children:"Price"})]}),(0,T.jsxs)(y.Z,{component:"form",noValidate:!0,autoComplete:"off",children:[(0,T.jsx)(w.Z,{sx:{m:1,width:150},id:"outlined-basic",label:"From",variant:"outlined",helperText:"\u0421ar mileage / km",value:p,onChange:function(n){var e=n.target.value.replaceAll(",","");i(e);var t=new Intl.NumberFormat("en-US").format(e);"0"===t&&(t=""),P(t)}}),(0,T.jsx)(w.Z,{sx:{m:1,width:150},id:"outlined-basic",label:"To",variant:"outlined",value:d,onChange:function(n){var e=n.target.value.replaceAll(",","");l(e);var t=new Intl.NumberFormat("en-US").format(e);"0"===t&&(t=""),u(t)}})]}),(0,T.jsx)(B,{type:"button",onClick:o,children:"Search"})]})})},I=k.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),L=k.ZP.button(o||(o=(0,P.Z)(["\n  background-color: transparent;\n  border: none;\n  text-decoration: underline;\n\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5;\n\n  cursor: pointer;\n\n  transition: color 250ms linear;\n\n  &:hover {\n    color: #0b44cd;\n  }\n"]))),N=function(n){var e=n.setPage;return(0,T.jsx)(I,{children:(0,T.jsx)(L,{type:"button",onClick:function(){return e((function(n){return n+1}))},children:"Load more"})})},z=k.ZP.div(s||(s=(0,P.Z)(["\n  /* background-color: #3470ff; */\n"]))),A=k.ZP.div(c||(c=(0,P.Z)(["\n  /*----Base mobile style 375 - 767 (\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0438\u0439)----*/\n  /* outline: 2px solid tomato; */\n  margin: 0 auto;\n  width: 100%;\n  max-width: 375px;\n\n  padding: 20px 50px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  /*----Tablet style 768-1440 (adaptive) ----*/\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 20px 95px;\n  }\n\n  /*----Desktop style more than 1440 (adaptive)----*/\n\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    padding: 20px 128px;\n  }\n"]))),E=k.ZP.p(d||(d=(0,P.Z)(["\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 25px;\n  font-weight: bold;\n  font-style: normal;\n  line-height: 24px;\n\n  text-align: center;\n"]))),U=k.ZP.img(u||(u=(0,P.Z)(["\n  max-width: 100%;\n"]))),W=t.p+"static/media/searching.9ba94a301c247ed1d943.gif",D=function(){return(0,T.jsx)(z,{children:(0,T.jsxs)(A,{children:[(0,T.jsx)(E,{children:"There is no matches"}),(0,T.jsx)(E,{children:"Try to change request fields"}),(0,T.jsx)(U,{src:W,alt:"no results"})]})})},H=t(9434),V=t(8075),_=t(1454),q=function(){var n=(0,H.I0)();(0,m.useEffect)((function(){n(V.Z.fetchCars())}),[n]);var e=(0,H.v9)((function(n){return n.cars.items})),t=(0,H.v9)((function(n){return n.cars.showLoader})),r=(0,m.useState)(1),a=(0,f.Z)(r,2),i=a[0],l=a[1],o=(0,m.useState)(""),s=(0,f.Z)(o,2),c=s[0],d=s[1],u=(0,m.useState)(""),Z=(0,f.Z)(u,2),g=Z[0],v=Z[1],b=(0,m.useState)(""),j=(0,f.Z)(b,2),y=j[0],w=j[1],P=(0,m.useState)(""),k=(0,f.Z)(P,2),C=k[0],S=k[1],B=(0,m.useState)([]),M=(0,f.Z)(B,2),I=M[0],L=M[1];(0,m.useEffect)((function(){L(e)}),[e]);var z;return z=I.filter((function(n,e,t){return e<8*i})),(0,T.jsxs)(T.Fragment,{children:[t&&(0,T.jsx)(_.Z,{}),(0,T.jsx)(F,{setSelectedBrand:d,selectedBrand:c,setPrice:v,price:g,setFrom:w,from:y,to:C,setTo:S,handleFilter:function(){l(1);var n=e;if(""!==c&&(n=n.filter((function(n){return n.make.toLowerCase()===c.toLowerCase()}))),""!==g){var t=(0,h.Z)(n);n=[].concat();var r,a=(0,x.Z)(t);try{for(a.s();!(r=a.n()).done;){var i=r.value;i.rentalPrice.slice(1,i.rentalPrice.length)<=g&&n.push(i)}}catch(o){a.e(o)}finally{a.f()}}""!==y&&(n=n.filter((function(n){return y<=n.mileage}))),""!==C&&(n=n.filter((function(n){return C>=n.mileage}))),L(n)}}),(0,T.jsx)(p.Z,{cars:z}),0===z.length&&!t&&(0,T.jsx)(D,{}),I.length>8*i&&(0,T.jsx)(N,{setPage:l})]})}}}]);
//# sourceMappingURL=683.7fe9d880.chunk.js.map