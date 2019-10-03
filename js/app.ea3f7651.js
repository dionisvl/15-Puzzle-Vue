(function(t){function e(e){for(var o,a,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"026e":function(t,e,n){},"36f6":function(t,e,n){},3918:function(t,e,n){"use strict";var o=n("026e"),i=n.n(o);i.a},"4d01":function(t,e,n){"use strict";var o=n("36f6"),i=n.n(o);i.a},"56cc":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"title fz-40 fw-bold"},[t._v("15 puzzle")]),n("p",{staticClass:"moves fz-24 fw-bold"},[t._v(t._s(t.moves>1?"MOVES":"MOVE")+" : "+t._s(t.moves))]),n("div",{staticClass:"puzzle"},[n("PuzzleCover",{directives:[{name:"show",rawName:"v-show",value:!t.play,expression:"!play"}],attrs:{complete:t.complete},on:{"play-change":t.playToggle}}),n("div",{staticClass:"puzzle-content"},[n("div",{staticClass:"puzzle-group"},t._l(t.puzzle,(function(e,o){return n("PuzzleItem",{key:e.number,attrs:{itemWidth:t.itemWidth,item:e,index:o}})})),1)])],1),n("transition",{attrs:{name:"fade",appear:""}},[t.play?n("div",{staticClass:"reset"},[n("button",{staticClass:"reset-item fz-36 fw-bold",on:{click:t.handleRest}},[t._v("reset")])]):t._e()])],1)},r=[],a=n("d225"),s=n("b0b4"),c=n("308d"),u=n("6bb5"),l=n("4e2b"),p=n("9ab4"),f=n("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",appear:""}},[n("div",{staticClass:"puzzle-cover fw-bold"},[n("transition",{attrs:{name:"fade",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.synceComplete,expression:"synceComplete"}],staticClass:"puzzle-cover__completed"},[n("h2",{staticClass:"puzzle-cover__title fz-36"},[t._v("Congratulations")]),n("p",{staticClass:"puzzle-cover__depiction"},[t._v("You have successfully completed this "),n("strong",[t._v("15 puzzle")])])])]),n("button",{staticClass:"puzzle-cover__play",staticStyle:{animation:"jackInTheBox 0.5s 1.5s both"},on:{click:t.playToggle,animationend:t.handleAnimationend}},[t._v("Play")])],1)])},h=[],v=function(t){function e(){return Object(a["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"playToggle",value:function(){}},{key:"handleAnimationend",value:function(t){var e=t.target;setTimeout((function(){return e.removeAttribute("style")}),500)}}]),e}(f["e"]);Object(p["a"])([Object(f["d"])("complete",{type:Boolean})],v.prototype,"synceComplete",void 0),Object(p["a"])([Object(f["b"])("play-change")],v.prototype,"playToggle",null),v=Object(p["a"])([f["a"]],v);var m=v,b=m,y=(n("3918"),n("2877")),O=Object(y["a"])(b,d,h,!1,null,null,null),z=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",appear:""},on:{"after-enter":t.handleAfterEnter}},[n("div",{staticClass:"puzzle-group__item",style:t.styleObj,on:{click:t.handleClick}},[n("div",{staticClass:"puzzle-group__content"},[t._v(t._s(t.item.number))])])])},_=[],g=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(n,!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=function(t){function e(){return Object(a["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"handleClick",value:function(){var t=this.propItem,e=this.$store.state.empty,n=this.propItem.position,o=Math.abs(e[0]-n[0]),i=Math.abs(e[1]-n[1]),r=o+i===1;this.$store.state.complete||r&&(this.propItem=w({},t,{position:e}),this.$store.commit("SET_EMPTY",n),this.$store.commit("SET_MOVE",1))}},{key:"handleAfterEnter",value:function(t){t.style.transitionDelay=""}},{key:"complete",get:function(){return this.$store.state.complete}},{key:"propItem",get:function(){return this.item},set:function(t){var e=this.index,n=this.$store,o=t.position;n.commit("SET_ITEM_POS",{position:o,index:e})}},{key:"styleObj",get:function(){var t=this.itemWidth,e=this.item,n=e.position,o=e.number,i=n[0]*t+"px",r=n[1]%4*t+"px",a=.0667*o+"s";return{top:r,left:i,transitionDelay:a}}}]),e}(f["e"]);Object(p["a"])([Object(f["c"])({default:0})],P.prototype,"index",void 0),Object(p["a"])([Object(f["c"])({default:75})],P.prototype,"itemWidth",void 0),Object(p["a"])([Object(f["c"])()],P.prototype,"item",void 0),P=Object(p["a"])([f["a"]],P);var T=P,k=T,S=(n("4d01"),Object(y["a"])(k,j,_,!1,null,null,null)),C=S.exports,x=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.width=0,t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){this.getWindowWidth(),window.addEventListener("resize",this.getWindowWidth)}},{key:"beforeDestory",value:function(){window.removeEventListener("resize",this.getWindowWidth)}},{key:"getWindowWidth",value:function(){this.width=window.innerWidth}},{key:"initePuzzleData",value:function(){this.$store.dispatch("INIT_PUZZLE"),this.moves=0,this.complete=!1}},{key:"playToggle",value:function(){this.initePuzzleData(),this.play=!this.play}},{key:"handleRest",value:function(){this.initePuzzleData()}},{key:"puzzleDataChange",value:function(t){var e=this,n=t.every((function(t){return t.value.join("")===t.position.join("")}));n&&(this.complete=!0,setTimeout((function(){e.play=!1}),1e3))}},{key:"puzzle",get:function(){return this.$store.state.puzzle}},{key:"complete",get:function(){return this.$store.state.complete},set:function(t){var e=this.$store.commit;e("SET_COMPLETE",t)}},{key:"play",get:function(){return this.$store.state.play},set:function(t){var e=this.$store.commit;e("SET_PLAY_TYPE",t)}},{key:"moves",get:function(){return this.$store.state.moves},set:function(t){this.$store.commit("RESET_MOVE",0)}},{key:"itemWidth",get:function(){var t=this.width;return t>667?120:77}}]),e}(f["e"]);Object(p["a"])([Object(f["f"])("puzzle",{deep:!0})],x.prototype,"puzzleDataChange",null),x=Object(p["a"])([Object(f["a"])({components:{PuzzleCover:z,PuzzleItem:C}})],x);var M=x,$=M,I=(n("cf25"),Object(y["a"])($,i,r,!1,null,null,null)),W=I.exports,D=(n("55dd"),n("75fc")),L=(n("20d6"),n("2f62"));o["a"].use(L["a"]);var A=function(t){return[t%4,Math.floor(t/4)]},V=function(t){for(var e=t*t,n=[],o=1;o<=e;o++){var i=A(o-1);n.push({number:o,value:i,position:[0,0]})}return n},Y=function(t){var e=t.findIndex((function(t){return 16===t.number})),n=A(e)[0]+1,o=function(t){return t.splice(e,1),t}(Object(D["a"])(t)),i=Z(o);return i%2+n%2!==0},Z=function(t){console.log(t);var e=3;return t.forEach((function(n,o,i){var r=t.length,a=o+1;while(a<r)n.number>i[a].number&&e++,a++})),e},N=new L["a"].Store({state:{puzzle:[],moves:0,empty:[0,0],complete:!1,play:!1},mutations:{SET_ITEM_POS:function(t,e){var n=e.position,o=e.index,i=t.puzzle[o];i.position=n},SAVE_PUZZLE:function(t,e){t.puzzle=e},SET_EMPTY:function(t,e){t.empty=e},SET_MOVE:function(t,e){t.moves=t.moves+e},SET_PLAY_TYPE:function(t,e){t.play=e},SET_COMPLETE:function(t,e){t.complete=e},RESET_MOVE:function(t,e){t.moves=e}},actions:{INIT_PUZZLE:function(t){var e=t.commit,n=V(4),o=0,i=[0,0],r=!1;while(!r)n.sort((function(){return Math.random()>.5?1:-1})),r=Y(n);n.forEach((function(t,e){t.position=A(e)})),o=n.findIndex((function(t){return 16===t.number})),i=n[o].position,n.splice(o,1),e("SAVE_PUZZLE",n),e("SET_EMPTY",i)}}});o["a"].config.productionTip=!1,new o["a"]({store:N,render:function(t){return t(W)}}).$mount("#app")},cf25:function(t,e,n){"use strict";var o=n("56cc"),i=n.n(o);i.a}});
//# sourceMappingURL=app.ea3f7651.js.map