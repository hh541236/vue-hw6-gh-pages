"use strict";(self["webpackChunkweek6_homework"]=self["webpackChunkweek6_homework"]||[]).push([[273],{273:function(t,c,r){r.r(c),r.d(c,{default:function(){return z}});var s=r(252),e=r(577);const d={class:"container"},o={class:"card",style:{width:"64rem"}},a={class:"row"},i={class:"col-6"},u=["src"],l={class:"col-6"},p={class:"card-body"},n={class:"badge bg-primary rounded-pill"},h={class:"card-title"},w={class:"card-text"},_={class:"card-text"},g={class:"card-text"};function v(t,c,r,v,m,k){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",o,[(0,s._)("div",a,[(0,s._)("div",i,[(0,s._)("img",{src:m.product.imageUrl,class:"card-img-top",alt:""},null,8,u)]),(0,s._)("div",l,[(0,s._)("div",p,[(0,s._)("span",n,(0,e.zw)(m.product.category),1),(0,s._)("h5",h,(0,e.zw)(m.product.title),1),(0,s._)("p",w,"商品描述："+(0,e.zw)(m.product.description),1),(0,s._)("p",null,"商品內容："+(0,e.zw)(m.product.content),1),(0,s._)("del",_,"原價: $ "+(0,e.zw)(m.product.origin_price)+" 元 ",1),(0,s._)("p",g,"售價: $ "+(0,e.zw)(m.product.price)+" 元",1)])])])])])}var m={data(){return{product:{}}},methods:{getProduct(){const{id:t}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io//v2/api/fengchiliu/product/${t}`).then((t=>{this.product=t.data.product}))}},mounted(){this.getProduct()}},k=r(744);const f=(0,k.Z)(m,[["render",v]]);var z=f}}]);
//# sourceMappingURL=273.8801c795.js.map