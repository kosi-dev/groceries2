import{S,i as T,s as q,e as y,j as D,c as b,a as j,m as J,d as h,f as g,o as K,J as N,x as k,u as I,v as M,t as R,k as x,g as B,n as E,H as U,w as O,K as V,A as z,r as G}from"../chunks/vendor-cc068a2e.js";import{F as L,a as A,b as Q,g as W}from"../chunks/FoodUI-14a38ff8.js";import"../chunks/singletons-12a22614.js";function C(c,i,s){const a=c.slice();return a[5]=i[s],a}function H(c){let i,s,a,f,u;s=new L({props:{food:c[5]}});function m(){return c[2](c[5])}return{c(){i=y("div"),D(s.$$.fragment)},l(l){i=b(l,"DIV",{});var r=j(i);J(s.$$.fragment,r),r.forEach(h)},m(l,r){g(l,i,r),K(s,i,null),a=!0,f||(u=N(i,"click",m),f=!0)},p(l,r){c=l;const p={};r&1&&(p.food=c[5]),s.$set(p)},i(l){a||(k(s.$$.fragment,l),a=!0)},o(l){I(s.$$.fragment,l),a=!1},d(l){l&&h(i),M(s),f=!1,u()}}}function X(c){let i,s,a,f,u,m,l,r,p,d=c[0],t=[];for(let e=0;e<d.length;e+=1)t[e]=H(C(c,d,e));const $=e=>I(t[e],1,1,()=>{t[e]=null});return{c(){i=y("h1"),s=R("Food Register"),a=x();for(let e=0;e<t.length;e+=1)t[e].c();f=x(),u=y("button"),m=R("New Food")},l(e){i=b(e,"H1",{});var o=j(i);s=B(o,"Food Register"),o.forEach(h),a=E(e);for(let _=0;_<t.length;_+=1)t[_].l(e);f=E(e),u=b(e,"BUTTON",{});var n=j(u);m=B(n,"New Food"),n.forEach(h)},m(e,o){g(e,i,o),U(i,s),g(e,a,o);for(let n=0;n<t.length;n+=1)t[n].m(e,o);g(e,f,o),g(e,u,o),U(u,m),l=!0,r||(p=N(u,"click",c[1]),r=!0)},p(e,[o]){if(o&1){d=e[0];let n;for(n=0;n<d.length;n+=1){const _=C(e,d,n);t[n]?(t[n].p(_,o),k(t[n],1)):(t[n]=H(_),t[n].c(),k(t[n],1),t[n].m(f.parentNode,f))}for(G(),n=d.length;n<t.length;n+=1)$(n);O()}},i(e){if(!l){for(let o=0;o<d.length;o+=1)k(t[o]);l=!0}},o(e){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)I(t[o]);l=!1},d(e){e&&h(i),e&&h(a),V(t,e),e&&h(f),e&&h(u),r=!1,p()}}}function Y(c,i,s){var a=this&&this.__awaiter||function(r,p,d,t){function $(e){return e instanceof d?e:new d(function(o){o(e)})}return new(d||(d=Promise))(function(e,o){function n(v){try{w(t.next(v))}catch(F){o(F)}}function _(v){try{w(t.throw(v))}catch(F){o(F)}}function w(v){v.done?e(v.value):$(v.value).then(n,_)}w((t=t.apply(r,p||[])).next())})};let f=[];z(()=>a(void 0,void 0,void 0,function*(){yield u()}));function u(){return a(this,void 0,void 0,function*(){s(0,f=yield A.getAll())})}function m(){return a(this,void 0,void 0,function*(){console.log("Click!"),yield A.register(new Q("Banana")),u()})}return[f,m,r=>W("/food/"+r.getId())]}class te extends S{constructor(i){super();T(this,i,Y,X,q,{})}}export{te as default};