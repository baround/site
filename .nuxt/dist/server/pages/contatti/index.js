exports.ids = [2];
exports.modules = {

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

(function(t,n){ true?module.exports=n():undefined})("undefined"!==typeof self?self:this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="fb15")}({"07e3":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"0d58":function(t,n,e){var r=e("ce10"),o=e("e11e");t.exports=Object.keys||function(t){return r(t,o)}},"0fc9":function(t,n,e){var r=e("3a38"),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},1173:function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},"11e9":function(t,n,e){var r=e("52a7"),o=e("4630"),i=e("6821"),c=e("6a99"),u=e("69a8"),a=e("c69a"),f=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?f:function(t,n){if(t=i(t),n=c(n,!0),a)try{return f(t,n)}catch(e){}if(u(t,n))return o(!r.f.call(t,n),t[n])}},1495:function(t,n,e){var r=e("86cc"),o=e("cb7c"),i=e("0d58");t.exports=e("9e1e")?Object.defineProperties:function(t,n){o(t);var e,c=i(n),u=c.length,a=0;while(u>a)r.f(t,e=c[a++],n[e]);return t}},1654:function(t,n,e){"use strict";var r=e("71c1")(!0);e("30f1")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},1691:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1bc3":function(t,n,e){var r=e("f772");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,n,e){var r=e("f772"),o=e("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"230e":function(t,n,e){var r=e("d3f4"),o=e("7726").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"241e":function(t,n,e){var r=e("25eb");t.exports=function(t){return Object(r(t))}},"24c5":function(t,n,e){"use strict";var r,o,i,c,u=e("b8e3"),a=e("e53d"),f=e("d864"),s=e("40c3"),p=e("63b6"),l=e("f772"),v=e("79aa"),d=e("1173"),h=e("a22a"),y=e("f201"),b=e("4178").set,m=e("aba2")(),x=e("656e"),w=e("4439"),g=e("bc13"),_=e("cd78"),S="Promise",O=a.TypeError,j=a.process,P=j&&j.versions,E=P&&P.v8||"",T=a[S],M="process"==s(j),A=function(){},I=o=x.f,L=!!function(){try{var t=T.resolve(1),n=(t.constructor={})[e("5168")("species")]=function(t){t(A,A)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==E.indexOf("6.6")&&-1===g.indexOf("Chrome/66")}catch(r){}}(),N=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},k=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,u=o?n.ok:n.fail,a=n.resolve,f=n.reject,s=n.domain;try{u?(o||(2==t._h&&R(t),t._h=1),!0===u?e=r:(s&&s.enter(),e=u(r),s&&(s.exit(),c=!0)),e===n.promise?f(O("Promise-chain cycle")):(i=N(e))?i.call(e,a,f):a(e)):f(r)}catch(p){s&&!c&&s.exit(),f(p)}};while(e.length>i)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&F(t)})}},F=function(t){b.call(a,function(){var n,e,r,o=t._v,i=C(t);if(i&&(n=w(function(){M?j.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=M||C(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},C=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){b.call(a,function(){var n;M?j.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},G=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),k(n,!0))},z=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw O("Promise can't be resolved itself");(n=N(t))?m(function(){var r={_w:e,_d:!1};try{n.call(t,f(z,r,1),f(G,r,1))}catch(o){G.call(r,o)}}):(e._v=t,e._s=1,k(e,!1))}catch(r){G.call({_w:e,_d:!1},r)}}};L||(T=function(t){d(this,T,S,"_h"),v(t),r.call(this);try{t(f(z,this,1),f(G,this,1))}catch(n){G.call(this,n)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e("5c95")(T.prototype,{then:function(t,n){var e=I(y(this,T));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=M?j.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&k(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=f(z,t,1),this.reject=f(G,t,1)},x.f=I=function(t){return t===T||t===c?new i(t):o(t)}),p(p.G+p.W+p.F*!L,{Promise:T}),e("45f2")(T,S),e("4c95")(S),c=e("584a")[S],p(p.S+p.F*!L,S,{reject:function(t){var n=I(this),e=n.reject;return e(t),n.promise}}),p(p.S+p.F*(u||!L),S,{resolve:function(t){return _(u&&this===c?T:this,t)}}),p(p.S+p.F*!(L&&e("4ee1")(function(t){T.all(t)["catch"](A)})),S,{all:function(t){var n=this,e=I(n),r=e.resolve,o=e.reject,i=w(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=I(n),r=e.reject,o=w(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},"25eb":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"2aba":function(t,n,e){var r=e("7726"),o=e("32e9"),i=e("69a8"),c=e("ca5a")("src"),u=e("fa5b"),a="toString",f=(""+u).split(a);e("8378").inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,c)||o(e,c,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,a,function(){return"function"==typeof this&&this[c]||u.call(this)})},"2aeb":function(t,n,e){var r=e("cb7c"),o=e("1495"),i=e("e11e"),c=e("613b")("IE_PROTO"),u=function(){},a="prototype",f=function(){var t,n=e("230e")("iframe"),r=i.length,o="<",c=">";n.style.display="none",e("fab2").appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),f=t.F;while(r--)delete f[a][i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(u[a]=r(t),e=new u,u[a]=null,e[c]=t):e=f(),void 0===n?e:o(e,n)}},"2d00":function(t,n){t.exports=!1},"2d95":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},3024:function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},"30f1":function(t,n,e){"use strict";var r=e("b8e3"),o=e("63b6"),i=e("9138"),c=e("35e8"),u=e("481b"),a=e("8f60"),f=e("45f2"),s=e("53e2"),p=e("5168")("iterator"),l=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",h="values",y=function(){return this};t.exports=function(t,n,e,b,m,x,w){a(e,n,b);var g,_,S,O=function(t){if(!l&&t in T)return T[t];switch(t){case d:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},j=n+" Iterator",P=m==h,E=!1,T=t.prototype,M=T[p]||T[v]||m&&T[m],A=M||O(m),I=m?P?O("entries"):A:void 0,L="Array"==n&&T.entries||M;if(L&&(S=s(L.call(new t)),S!==Object.prototype&&S.next&&(f(S,j,!0),r||"function"==typeof S[p]||c(S,p,y))),P&&M&&M.name!==h&&(E=!0,A=function(){return M.call(this)}),r&&!w||!l&&!E&&T[p]||c(T,p,A),u[n]=A,u[j]=y,m)if(g={values:P?A:O(h),keys:x?A:O(d),entries:I},w)for(_ in g)_ in T||i(T,_,g[_]);else o(o.P+o.F*(l||E),n,g);return g}},"32e9":function(t,n,e){var r=e("86cc"),o=e("4630");t.exports=e("9e1e")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},"32fc":function(t,n,e){var r=e("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,n,e){var r=e("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"35e8":function(t,n,e){var r=e("d9f6"),o=e("aebd");t.exports=e("8e60")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},"36c3":function(t,n,e){var r=e("335c"),o=e("25eb");t.exports=function(t){return r(o(t))}},3702:function(t,n,e){var r=e("481b"),o=e("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"3a38":function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},"3c11":function(t,n,e){"use strict";var r=e("63b6"),o=e("584a"),i=e("e53d"),c=e("f201"),u=e("cd78");r(r.P+r.R,"Promise",{finally:function(t){var n=c(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return u(n,t()).then(function(){return e})}:t,e?function(e){return u(n,t()).then(function(){throw e})}:t)}})},"40c3":function(t,n,e){var r=e("6b4c"),o=e("5168")("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},4178:function(t,n,e){var r,o,i,c=e("d864"),u=e("3024"),a=e("32fc"),f=e("1ec9"),s=e("e53d"),p=s.process,l=s.setImmediate,v=s.clearImmediate,d=s.MessageChannel,h=s.Dispatch,y=0,b={},m="onreadystatechange",x=function(){var t=+this;if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},w=function(t){x.call(t.data)};l&&v||(l=function(t){var n=[],e=1;while(arguments.length>e)n.push(arguments[e++]);return b[++y]=function(){u("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete b[t]},"process"==e("6b4c")(p)?r=function(t){p.nextTick(c(x,t,1))}:h&&h.now?r=function(t){h.now(c(x,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=w,r=c(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",w,!1)):r=m in f("script")?function(t){a.appendChild(f("script"))[m]=function(){a.removeChild(this),x.call(t)}}:function(t){setTimeout(c(x,t,1),0)}),t.exports={set:l,clear:v}},"43fc":function(t,n,e){"use strict";var r=e("63b6"),o=e("656e"),i=e("4439");r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},4439:function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},4588:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},"45f2":function(t,n,e){var r=e("d9f6").f,o=e("07e3"),i=e("5168")("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},4630:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"481b":function(t,n){t.exports={}},"4c95":function(t,n,e){"use strict";var r=e("e53d"),o=e("584a"),i=e("d9f6"),c=e("8e60"),u=e("5168")("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},"4ee1":function(t,n,e){var r=e("5168")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(c){}return e}},"50ed":function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},5168:function(t,n,e){var r=e("dbdb")("wks"),o=e("62a0"),i=e("e53d").Symbol,c="function"==typeof i,u=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};u.store=r},"52a7":function(t,n){n.f={}.propertyIsEnumerable},"53e2":function(t,n,e){var r=e("07e3"),o=e("241e"),i=e("5559")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},5537:function(t,n,e){var r=e("8378"),o=e("7726"),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},5559:function(t,n,e){var r=e("dbdb")("keys"),o=e("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},"584a":function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},"5b4e":function(t,n,e){var r=e("36c3"),o=e("b447"),i=e("0fc9");t.exports=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){while(f>s)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},"5c95":function(t,n,e){var r=e("35e8");t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},"5ca1":function(t,n,e){var r=e("7726"),o=e("8378"),i=e("32e9"),c=e("2aba"),u=e("9b43"),a="prototype",f=function(t,n,e){var s,p,l,v,d=t&f.F,h=t&f.G,y=t&f.S,b=t&f.P,m=t&f.B,x=h?r:y?r[n]||(r[n]={}):(r[n]||{})[a],w=h?o:o[n]||(o[n]={}),g=w[a]||(w[a]={});for(s in h&&(e=n),e)p=!d&&x&&void 0!==x[s],l=(p?x:e)[s],v=m&&p?u(l,r):b&&"function"==typeof l?u(Function.call,l):l,x&&c(x,s,l,t&f.U),w[s]!=l&&i(w,s,v),b&&g[s]!=l&&(g[s]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},"5dbc":function(t,n,e){var r=e("d3f4"),o=e("8b97").set;t.exports=function(t,n,e){var i,c=n.constructor;return c!==e&&"function"==typeof c&&(i=c.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},"613b":function(t,n,e){var r=e("5537")("keys"),o=e("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,n,e){var r=e("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"62a0":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},"63b6":function(t,n,e){var r=e("e53d"),o=e("584a"),i=e("d864"),c=e("35e8"),u=e("07e3"),a="prototype",f=function(t,n,e){var s,p,l,v=t&f.F,d=t&f.G,h=t&f.S,y=t&f.P,b=t&f.B,m=t&f.W,x=d?o:o[n]||(o[n]={}),w=x[a],g=d?r:h?r[n]:(r[n]||{})[a];for(s in d&&(e=n),e)p=!v&&g&&void 0!==g[s],p&&u(x,s)||(l=p?g[s]:e[s],x[s]=d&&"function"!=typeof g[s]?e[s]:b&&p?i(l,r):m&&g[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[a]=t[a],n}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((x.virtual||(x.virtual={}))[s]=l,t&f.R&&w&&!w[s]&&c(w,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},"656e":function(t,n,e){"use strict";var r=e("79aa");function o(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},6821:function(t,n,e){var r=e("626a"),o=e("be13");t.exports=function(t){return r(o(t))}},"696e":function(t,n,e){e("c207"),e("1654"),e("6c1c"),e("24c5"),e("3c11"),e("43fc"),t.exports=e("584a").Promise},"69a8":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"6a99":function(t,n,e){var r=e("d3f4");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"6b4c":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},"6c1c":function(t,n,e){e("c367");for(var r=e("e53d"),o=e("35e8"),i=e("481b"),c=e("5168")("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var f=u[a],s=r[f],p=s&&s.prototype;p&&!p[c]&&o(p,c,f),i[f]=i.Array}},"71c1":function(t,n,e){var r=e("3a38"),o=e("25eb");t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a),i<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536)}}},7726:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"77f1":function(t,n,e){var r=e("4588"),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},"794b":function(t,n,e){t.exports=!e("8e60")&&!e("294c")(function(){return 7!=Object.defineProperty(e("1ec9")("div"),"a",{get:function(){return 7}}).a})},"795b":function(t,n,e){t.exports=e("696e")},"79aa":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"79e5":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"7cd6":function(t,n,e){var r=e("40c3"),o=e("5168")("iterator"),i=e("481b");t.exports=e("584a").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"7e90":function(t,n,e){var r=e("d9f6"),o=e("e4ae"),i=e("c3a1");t.exports=e("8e60")?Object.defineProperties:function(t,n){o(t);var e,c=i(n),u=c.length,a=0;while(u>a)r.f(t,e=c[a++],n[e]);return t}},8378:function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},8436:function(t,n){t.exports=function(){}},"86cc":function(t,n,e){var r=e("cb7c"),o=e("c69a"),i=e("6a99"),c=Object.defineProperty;n.f=e("9e1e")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},"8b97":function(t,n,e){var r=e("d3f4"),o=e("cb7c"),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(o){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},"8e60":function(t,n,e){t.exports=!e("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8f60":function(t,n,e){"use strict";var r=e("a159"),o=e("aebd"),i=e("45f2"),c={};e("35e8")(c,e("5168")("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},9093:function(t,n,e){var r=e("ce10"),o=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},9138:function(t,n,e){t.exports=e("35e8")},"9b43":function(t,n,e){var r=e("d8e8");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"9def":function(t,n,e){var r=e("4588"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"9e1e":function(t,n,e){t.exports=!e("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a159:function(t,n,e){var r=e("e4ae"),o=e("7e90"),i=e("1691"),c=e("5559")("IE_PROTO"),u=function(){},a="prototype",f=function(){var t,n=e("1ec9")("iframe"),r=i.length,o="<",c=">";n.style.display="none",e("32fc").appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),f=t.F;while(r--)delete f[a][i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(u[a]=r(t),e=new u,u[a]=null,e[c]=t):e=f(),void 0===n?e:o(e,n)}},a22a:function(t,n,e){var r=e("d864"),o=e("b0dc"),i=e("3702"),c=e("e4ae"),u=e("b447"),a=e("7cd6"),f={},s={};n=t.exports=function(t,n,e,p,l){var v,d,h,y,b=l?function(){return t}:a(t),m=r(e,p,n?2:1),x=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(i(b)){for(v=u(t.length);v>x;x++)if(y=n?m(c(d=t[x])[0],d[1]):m(t[x]),y===f||y===s)return y}else for(h=b.call(t);!(d=h.next()).done;)if(y=o(h,m,d.value,n),y===f||y===s)return y};n.BREAK=f,n.RETURN=s},aa77:function(t,n,e){var r=e("5ca1"),o=e("be13"),i=e("79e5"),c=e("fdef"),u="["+c+"]",a="​",f=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),p=function(t,n,e){var o={},u=i(function(){return!!c[t]()||a[t]()!=a}),f=o[t]=u?n(l):c[t];e&&(o[e]=f),r(r.P+r.F*u,"String",o)},l=p.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(s,"")),t};t.exports=p},aba2:function(t,n,e){var r=e("e53d"),o=e("4178").set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e("6b4c")(c);t.exports=function(){var t,n,e,f=function(){var r,o;a&&(r=c.domain)&&r.exit();while(t){o=t.fn,t=t.next;try{o()}catch(i){throw t?e():n=void 0,i}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(f)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var s=u.resolve(void 0);e=function(){s.then(f)}}else e=function(){o.call(r,f)};else{var p=!0,l=document.createTextNode("");new i(f).observe(l,{characterData:!0}),e=function(){l.data=p=!p}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},aebd:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},b0dc:function(t,n,e){var r=e("e4ae");t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(c){var i=t["return"];throw void 0!==i&&r(i.call(t)),c}}},b447:function(t,n,e){var r=e("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b8e3:function(t,n){t.exports=!0},bc13:function(t,n,e){var r=e("e53d"),o=r.navigator;t.exports=o&&o.userAgent||""},be13:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c207:function(t,n){},c366:function(t,n,e){var r=e("6821"),o=e("9def"),i=e("77f1");t.exports=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){while(f>s)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},c367:function(t,n,e){"use strict";var r=e("8436"),o=e("50ed"),i=e("481b"),c=e("36c3");t.exports=e("30f1")(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,n,e){var r=e("e6f3"),o=e("1691");t.exports=Object.keys||function(t){return r(t,o)}},c5f6:function(t,n,e){"use strict";var r=e("7726"),o=e("69a8"),i=e("2d95"),c=e("5dbc"),u=e("6a99"),a=e("79e5"),f=e("9093").f,s=e("11e9").f,p=e("86cc").f,l=e("aa77").trim,v="Number",d=r[v],h=d,y=d.prototype,b=i(e("2aeb")(y))==v,m="trim"in String.prototype,x=function(t){var n=u(t,!1);if("string"==typeof n&&n.length>2){n=m?n.trim():l(n,3);var e,r,o,i=n.charCodeAt(0);if(43===i||45===i){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var c,a=n.slice(2),f=0,s=a.length;f<s;f++)if(c=a.charCodeAt(f),c<48||c>o)return NaN;return parseInt(a,r)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(b?a(function(){y.valueOf.call(e)}):i(e)!=v)?c(new h(x(n)),e,d):x(n)};for(var w,g=e("9e1e")?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;g.length>_;_++)o(h,w=g[_])&&!o(d,w)&&p(d,w,s(h,w));d.prototype=y,y.constructor=d,e("2aba")(r,v,d)}},c69a:function(t,n,e){t.exports=!e("9e1e")&&!e("79e5")(function(){return 7!=Object.defineProperty(e("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},cb7c:function(t,n,e){var r=e("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},cd78:function(t,n,e){var r=e("e4ae"),o=e("f772"),i=e("656e");t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t),c=e.resolve;return c(n),e.promise}},ce10:function(t,n,e){var r=e("69a8"),o=e("6821"),i=e("c366")(!1),c=e("613b")("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)e!=c&&r(u,e)&&f.push(e);while(n.length>a)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},d3f4:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d864:function(t,n,e){var r=e("79aa");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},d8e8:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},d9f6:function(t,n,e){var r=e("e4ae"),o=e("794b"),i=e("1bc3"),c=Object.defineProperty;n.f=e("8e60")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},dbdb:function(t,n,e){var r=e("584a"),o=e("e53d"),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e11e:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},e4ae:function(t,n,e){var r=e("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},e6f3:function(t,n,e){var r=e("07e3"),o=e("36c3"),i=e("5b4e")(!1),c=e("5559")("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)e!=c&&r(u,e)&&f.push(e);while(n.length>a)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},f201:function(t,n,e){var r=e("e4ae"),o=e("79aa"),i=e("5168")("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},f772:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fa5b:function(t,n,e){t.exports=e("5537")("native-function-to-string",Function.toString)},fab2:function(t,n,e){var r=e("7726").document;t.exports=r&&r.documentElement},fb15:function(t,n,e){"use strict";var r;(e.r(n),"undefined"!==typeof window)&&((r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(e.p=r[1]));var o=e("795b"),i=e.n(o),c=(e("c5f6"),{name:"vue-instagram-embed",props:{url:{type:String},maxWidth:{type:Number,default:320},hideCaption:{type:Boolean,default:!1},omitScript:{type:Boolean,default:!0},className:{type:String}},data:function(){return{html:""}},mounted:function(){var t=this;window.instgrm?this.fetchEmbed():(this.injectScript(),this.checkAPI().then(function(){t.fetchEmbed()}))},methods:{fetchEmbed:function(){var t=this;this.validateUrl();var n=this.maxWidth>=320?this.maxWidth:320,e="https://api.instagram.com/oembed?url=".concat(this.url,"&maxwidth=").concat(n,"&hidecaption=").concat(this.hideCaption,"&omitscript=").concat(this.omitScript);fetch(e).then(function(t){if(t.ok)return t.json()}).then(function(n){t.html=n.html,t.$nextTick(function(){window.instgrm.Embeds.process()})}).catch(function(t){throw new Error(t)})},validateUrl:function(){var t=/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;if(!t.test(this.url))throw new Error("".concat(this.url," - Invalid url"))},injectScript:function(){var t="https:",n=document.createElement("script");n.async=n.defer=!0,n.src="".concat(t,"//platform.instagram.com/en_US/embeds.js"),n.id="vue-instagram-embed-script";var e=document.body;e&&e.appendChild(n)},checkAPI:function(){var t=this;return new i.a(function(n){(function t(e){e.timer=window.setTimeout(function(){window.instgrm?(clearTimeout(e.timer),n()):t(e)},20)})(t)})}},render:function(){var t=arguments[0];return t("div",{class:this.className,domProps:{innerHTML:this.html}})}});n["default"]=c},fdef:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}})["default"]});
//# sourceMappingURL=vueinstaembed.umd.min.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f23284e_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f23284e_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f23284e_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f23284e_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f23284e_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f23284e_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(115);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(116);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(86);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@-webkit-keyframes appear-data-v-4f23284e{0%{opacity:0}to{opacity:1}}@keyframes appear-data-v-4f23284e{0%{opacity:0}to{opacity:1}}.page[data-v-4f23284e]{-webkit-animation:appear-data-v-4f23284e .5s;animation:appear-data-v-4f23284e .5s;width:100%}.page__header[data-v-4f23284e]{width:100%;position:relative}.page__header figure[data-v-4f23284e]{width:100%;height:100vh;max-height:100vh;background-size:cover;background-position:50%}@media (max-width:768px){.page__header figure[data-v-4f23284e]{min-height:50vh;max-height:100vh}}.page__header figure img[data-v-4f23284e]{width:100%;opacity:0}.page__header[data-v-4f23284e]:before{content:\"\";z-index:4;background-image:linear-gradient(180deg,hsla(0,0%,45.9%,.25098),rgba(0,0,0,.631373))}.page__header[data-v-4f23284e]:before,.page__header__details[data-v-4f23284e]{position:absolute;width:100%;height:100%;top:0;left:0}.page__header__details[data-v-4f23284e]{display:flex;flex-flow:column;justify-content:center;align-items:center;z-index:5}@media (max-width:768px){.page__header__details[data-v-4f23284e]{padding:20px}}.page__header__details h1[data-v-4f23284e]{font-size:46px;font-weight:700;line-height:1.09;letter-spacing:3.29px;text-align:center;color:#fff;margin-bottom:20px}@media (max-width:768px){.page__header__details h1[data-v-4f23284e]{font-size:28px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.21;letter-spacing:2px}}.page__header__details .price[data-v-4f23284e]{font-size:16px;font-weight:700;letter-spacing:1.33px;color:#fff;margin:5px 0}.page__header__details .tipologia[data-v-4f23284e]{font-size:16px;font-weight:600;letter-spacing:5px;color:#fff;text-transform:uppercase;margin:5px 0}.page__header__details .tipologia span[data-v-4f23284e]{padding:0 5px}.page__header__details .tipologia span[data-v-4f23284e]:after{content:\",\"}.page__header__details .tipologia span[data-v-4f23284e]:last-child:after{display:none}.page__header__details .address[data-v-4f23284e]{font-size:14px;font-weight:300;line-height:1.5;letter-spacing:1px;color:#fff;margin:5px 0}.page__fascia[data-v-4f23284e]{align-items:center}.page__fascia[data-v-4f23284e],.page__fascia__contenuto[data-v-4f23284e]{width:100%;display:flex;flex-flow:column;justify-content:center}.page__fascia__contenuto[data-v-4f23284e]{margin:50px 0}@media (max-width:768px){.page__fascia__contenuto[data-v-4f23284e]{margin:12px 0}}@media (max-width:768px){.page__fascia__contenuto--gallery .gallery[data-v-4f23284e]{padding-right:50px}}.page__fascia__contenuto--intro[data-v-4f23284e]{max-width:654px;background:#fff;padding:75px 75px 0;margin-top:-150px;position:relative;margin-bottom:50px;z-index:10;align-items:center}.page__fascia__contenuto--intro h3[data-v-4f23284e],.page__fascia__contenuto--intro p[data-v-4f23284e]{text-align:center}.page__fascia__contenuto--intro a[data-v-4f23284e]{color:#000}@media (max-width:768px){.page__fascia__contenuto--intro[data-v-4f23284e]{padding:30px 20px;margin-top:0}}.page__fascia__contenuto--intro .social[data-v-4f23284e]{display:flex;flex-flow:row;justify-content:center}.page__fascia__contenuto--intro .social a[data-v-4f23284e]{margin:0 20px;display:flex}.page__fascia__contenuto--intro .social a .icon[data-v-4f23284e]{width:30px;height:30px;background-size:auto 30px;background-position:50%;background-repeat:no-repeat}.page__fascia__contenuto--intro .social a .icon__fb[data-v-4f23284e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.page__fascia__contenuto--intro .social a .icon__ig[data-v-4f23284e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.page__fascia__contenuto--testo[data-v-4f23284e]{max-width:674px;background:#fff;padding:0 75px;position:relative}@media (max-width:768px){.page__fascia__contenuto--testo[data-v-4f23284e]{padding:30px 20px}}.page__fascia__contenuto--image[data-v-4f23284e]{width:100%;display:flex;flex-flow:column;justify-content:center;align-items:center}.page__fascia__contenuto--image figure[data-v-4f23284e]{width:100%;max-width:946px;overflow:hidden;background-size:cover;background-position:50%}.page__fascia__contenuto--image figure img[data-v-4f23284e]{width:100%;opacity:0}.page__fascia__contenuto--image figure.full[data-v-4f23284e]{max-width:100%;height:100vh}.page__fascia__contenuto--video[data-v-4f23284e]{width:100%;display:flex;flex-flow:column;justify-content:center;align-items:center}.page__fascia__contenuto--correlati[data-v-4f23284e]{width:100%;padding:0 35px}@media (max-width:768px){.page__fascia__contenuto--correlati[data-v-4f23284e]{padding:20px 0 20px 20px}}.page__fascia__contenuto--correlati h3[data-v-4f23284e]{text-align:center;margin-bottom:35px}@media (max-width:768px){.page__fascia__contenuto--correlati h3[data-v-4f23284e]{font-size:22px!important;font-weight:700;letter-spacing:1.29px;text-align:left}}.page__fascia__contenuto--correlati .correlati[data-v-4f23284e]{width:100%;padding-right:50px}.page__fascia__contenuto--correlati .correlati .swiper-slide[data-v-4f23284e]{width:25%;overflow:hidden}@media (max-width:768px){.page__fascia__contenuto--correlati .correlati .swiper-slide[data-v-4f23284e]{width:100%}}.page__fascia__contenuto--correlati .correlati__card[data-v-4f23284e]{width:100%}.page__fascia__contenuto--correlati .correlati__card figure[data-v-4f23284e]{width:100%;min-height:270px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:cover;background-position:50%;margin:0 0 8px}@media (max-width:768px){.page__fascia__contenuto--correlati .correlati__card figure[data-v-4f23284e]{height:150px;min-height:150px}}.page__fascia__contenuto--correlati .correlati__card figure img[data-v-4f23284e]{width:100%;opacity:0}.page__fascia__contenuto--correlati .correlati__card__content[data-v-4f23284e]{display:flex;width:100%;flex-flow:column}.page__fascia__contenuto--correlati .correlati__card__content h4[data-v-4f23284e]{font-size:19px;font-weight:700;letter-spacing:1.36px;color:#222831;margin:6px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:768px){.page__fascia__contenuto--correlati .correlati__card__content h4[data-v-4f23284e]{font-size:14px;letter-spacing:1px;margin:3px 0}}.page__fascia__contenuto--correlati .correlati__card__content h4 a[data-v-4f23284e]{color:#222831;text-decoration:none}.page__fascia__contenuto--correlati .correlati__card__content .price[data-v-4f23284e]{margin:6px 0;font-size:20px;font-weight:700;letter-spacing:1.67px;color:#222831}@media (max-width:768px){.page__fascia__contenuto--correlati .correlati__card__content .price[data-v-4f23284e]{font-size:16px;margin:3px 0}}.page__fascia__contenuto--correlati .correlati__card__content .tipologia[data-v-4f23284e]{font-size:14px;font-weight:600;letter-spacing:1.27px;color:#222831;text-transform:uppercase;margin:6px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:768px){.page__fascia__contenuto--correlati .correlati__card__content .tipologia[data-v-4f23284e]{margin:3px 0}}.page__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-4f23284e]{padding:0 5px 0 0}.page__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-4f23284e]:after{content:\",\"}.page__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-4f23284e]:last-child:after{display:none}.page__fascia__contenuto--correlati .correlati__card__content .address[data-v-4f23284e]{margin:6px 0;font-size:14px;font-weight:300;line-height:1.64;letter-spacing:1px;color:#222831}@media (max-width:768px){.page__fascia__contenuto--correlati .correlati__card__content .address[data-v-4f23284e]{margin:3px 0}}.page__fascia__contenuto--bgBlue[data-v-4f23284e]{background-color:#f0f6fd;padding:60px 35px;margin:0}@media (max-width:768px){.page__fascia__contenuto--bgBlue[data-v-4f23284e]{padding:20px 0 20px 20px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxMCAxNyI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iMmRpNWZtbDl6YSIgZD0iTTAgMEw5LjEyNiAwIDkuMTI2IDE2LjczMSAwIDE2LjczMXoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzIC02NDQ5KSB0cmFuc2xhdGUoNDMgNjQ0OSkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSIyeHA1M3BtNHViIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjMmRpNWZtbDl6YSIvPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjMjIyODMxIiBkPSJNNS45MjQgMTYuNzMxVjkuMWgyLjY5bC40MDMtMi45NzVINS45MjR2LTEuOWMwLS44Ni4yNS0xLjQ0NyAxLjU0OS0xLjQ0N2gxLjY1M1YuMTE1QzguODQuMDgxIDcuODU5IDAgNi43MTYgMCA0LjMzMSAwIDIuNjk4IDEuMzg2IDIuNjk4IDMuOTMxdjIuMTk0SDBWOS4xaDIuNjk4djcuNjMxaDMuMjI2eiIgbWFzaz0idXJsKCMyeHA1M3BtNHViKSIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-instagram-blue.2069207.svg";

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contatti/index.vue?vue&type=template&id=4f23284e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"post individual"},[_c('Header'),_vm._ssrNode(" "),(_vm.page.acf)?_vm._ssrNode("<div class=\"page contenitore\" data-v-4f23284e>","</div>",[_vm._ssrNode("<section class=\"page__header\" data-v-4f23284e><figure"+(_vm._ssrStyle(null,{ 'background-image': 'url(' + _vm.page.acf.immagine_di_copertina + ')' }, null))+" data-v-4f23284e><img"+(_vm._ssrAttr("src",_vm.page.acf.immagine_di_copertina))+" data-v-4f23284e></figure></section> "),_vm._l((_vm.page.acf.contenuto),function(field,index){return _vm._ssrNode("<section class=\"page__fascia\" data-v-4f23284e>","</section>",[_vm._ssrNode(((field.acf_fc_layout === 'introduzione')?("<div class=\"page__fascia__contenuto page__fascia__contenuto--intro intro\" data-v-4f23284e><div class=\"txt\" data-v-4f23284e>"+(_vm._s(field.contenuto))+"</div> <h3 data-v-4f23284e>Seguici anche su:</h3> <div class=\"social\" data-v-4f23284e><a href=\"https://www.facebook.com/baroundit\" target=\"_blank\" data-v-4f23284e><span class=\"icon icon__fb\" data-v-4f23284e></span></a> <a href=\"https://www.instagram.com/baround_/\" target=\"_blank\" data-v-4f23284e><span class=\"icon icon__ig\" data-v-4f23284e></span></a></div></div>"):"<!---->")+" "+((field.acf_fc_layout === 'testo')?("<div class=\"page__fascia__contenuto page__fascia__contenuto--testo\" data-v-4f23284e><div class=\"txt\" data-v-4f23284e>"+(_vm._s(field.contenuto))+"</div></div>"):"<!---->")+" "),(field.acf_fc_layout === 'galleria_immagini')?_vm._ssrNode("<div class=\"page__fascia__contenuto page__fascia__contenuto--gallery\" data-v-4f23284e>","</div>",[_c('swiper',{ref:"gallery",refInFor:true,staticClass:"gallery",attrs:{"options":_vm.swiperGalleryOptions}},[_vm._l((field.gallery),function(foto,index){return _c('swiper-slide',{key:index,staticClass:"gallery__single"},[_c('figure',{style:({ 'background-image': 'url(' + foto.immagine + ')' })},[_c('img',{attrs:{"src":foto.immagine}})])])}),_vm._v(" "),_c('div',{staticClass:"swiper-pagination-gallery",attrs:{"slot":"pagination"},slot:"pagination"})],2)],1):(field.acf_fc_layout === 'immagine')?_vm._ssrNode(("<div class=\"page__fascia__contenuto page__fascia__contenuto--image\" data-v-4f23284e>"+((field.dimensione_immagine === 'normale')?("<figure class=\"medium\""+(_vm._ssrStyle(null,{ 'background-image': 'url(' + field.immagine + ')' }, null))+" data-v-4f23284e><img"+(_vm._ssrAttr("src",field.immagine))+" data-v-4f23284e></figure>"):("<figure class=\"full\""+(_vm._ssrStyle(null,{ 'background-image': 'url(' + field.immagine + ')' }, null))+" data-v-4f23284e><img"+(_vm._ssrAttr("src",field.immagine))+" data-v-4f23284e></figure>"))+"</div>")):(field.acf_fc_layout === 'video')?_vm._ssrNode(("<div class=\"page__fascia__contenuto page__fascia__contenuto--video\" data-v-4f23284e><div class=\"video\" data-v-4f23284e>"+(_vm._s(field.video))+"</div></div>")):_vm._e()],2)})],2):_vm._ssrNode(("<div class=\"loader\" data-v-4f23284e><span class=\"loading\" data-v-4f23284e><img"+(_vm._ssrAttr("src",_vm.loader))+" data-v-4f23284e></span></div>")),_vm._ssrNode(" "),_c('Newsletter'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contatti/index.vue?vue&type=template&id=4f23284e&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-instagram-embed/dist/vueinstaembed.umd.min.js
var vueinstaembed_umd_min = __webpack_require__(112);
var vueinstaembed_umd_min_default = /*#__PURE__*/__webpack_require__.n(vueinstaembed_umd_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contatti/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const loader = __webpack_require__(72);


/* harmony default export */ var contattivue_type_script_lang_js_ = ({
  components: {
    InstagramEmbed: vueinstaembed_umd_min_default.a
  },
  computed: {
    page() {
      return this.$store.state.content.contatti;
    },

    swiper() {
      this.$refs.gallery.$swiper;
    }

  },

  created() {// this.$store.dispatch("contatti");
  },

  data() {
    return {
      loader: loader,
      swiperGalleryOptions: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: '.swiper-pagination-gallery',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      title: 'Contatti - Baround'
    };
  },

  head() {
    return {
      title: this.title,
      meta: [{
        hid: 'baround',
        name: 'Contatti - Baround',
        content: 'La guida definitiva ai cocktail bar.'
      }, //FB
      {
        hid: 'og:title',
        name: 'og:title',
        content: this.title
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: 'La guida definitiva ai cocktail bar.'
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.baround.it'
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://be.baround.it/wp-content/uploads/2020/10/chi-siamo.jpg'
      }, //TWITTER
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }]
    };
  },

  methods: {
    funGalleryOption: function () {
      return {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination-gallery',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      };
    },
    startGallerySwiper: function () {
      this.swiperGalleryOptions = this.funGalleryOption();
    }
  }
});
// CONCATENATED MODULE: ./pages/contatti/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contattivue_type_script_lang_js_ = (contattivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contatti/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contattivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f23284e",
  "7f87f7f2"
  
)

/* harmony default export */ var contatti = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(68).default,Newsletter: __webpack_require__(90).default,Footer: __webpack_require__(69).default})


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-instagram.89e9247.svg";

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("02b265fa", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("59fd816d", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("bfbba27c", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3d97e380", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-facebook.b07bb81.svg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-baround-white.665eb69.png";

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=3241a83a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_vm._ssrNode("<div class=\"logo\" data-v-3241a83a><a href=\"/\" data-v-3241a83a><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" data-v-3241a83a></a></div> "),_c('Navigation')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=3241a83a&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3241a83a",
  "643a28e8"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(84).default,Header: __webpack_require__(68).default})


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=705e7678&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"social\" data-v-705e7678><a href=\"https://www.facebook.com/baroundit\" target=\"_blank\" data-v-705e7678><span class=\"icon icon__fb\" data-v-705e7678></span></a> <a href=\"https://www.instagram.com/baround_/\" target=\"_blank\" data-v-705e7678><span class=\"icon icon__ig\" data-v-705e7678></span></a></div> "),_vm._ssrNode("<div class=\"credits\" data-v-705e7678>","</div>",[_vm._ssrNode("<p data-v-705e7678><a href=\"/credits\" data-v-705e7678>Credits</a> | <a href=\"/privacy\" data-v-705e7678>Privacy</a> | ©Baround</p> "),_c('ExitPopup')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=705e7678&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "705e7678",
  "a69ef0cc"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ExitPopup: __webpack_require__(85).default,Footer: __webpack_require__(69).default})


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e9b482ae", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-pinner-locali.d5a4ffb.png";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loader.e7b8457.gif";

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3241a83a_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3241a83a_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3241a83a_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3241a83a_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3241a83a_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_3241a83a_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "header[data-v-3241a83a]{width:100%;position:fixed;background:#222831;height:74px;top:0;display:flex;justify-content:space-between;align-items:center;padding:30px;z-index:30}@media (max-width:768px){header[data-v-3241a83a]{height:54px;padding:10px 20px}}header .logo[data-v-3241a83a]{width:157px;position:relative;z-index:10}@media (max-width:768px){header .logo[data-v-3241a83a]{width:120px;display:flex;justify-content:center;align-items:center}}header .logo img[data-v-3241a83a]{width:100%}@-webkit-keyframes scroll-data-v-3241a83a{0%{top:-200px}to{top:0}}@keyframes scroll-data-v-3241a83a{0%{top:-200px}to{top:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(77);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(78);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, "nav .burger[data-v-783985e5]{width:28px;height:28px;padding:7px;display:flex;flex-flow:column;align-items:center;justify-content:space-between;position:relative;z-index:20;cursor:pointer}@media (max-width:768px){nav .burger[data-v-783985e5]{width:14px;height:14px;padding:0}}nav .burger__line[data-v-783985e5]{width:100%;height:1px;background-color:#fff}nav .burger--close[data-v-783985e5]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:15px auto;background-position:50%;background-repeat:no-repeat}nav .menu[data-v-783985e5]{display:none;width:100vw;height:100vh;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-size:cover;right:-100vw;-webkit-animation:mymoveOut-data-v-783985e5 .2s;animation:mymoveOut-data-v-783985e5 .2s}@media (max-width:768px){nav .menu[data-v-783985e5]{padding:90px 30px}}nav .menu__header[data-v-783985e5]{position:absolute;top:0;left:0;width:100vw;z-index:5;display:flex;flex-flow:row;justify-content:space-between;padding:28px 30px}nav .menu__header__logo[data-v-783985e5]{width:100%;max-width:140px}@media (max-width:768px){nav .menu__header__logo[data-v-783985e5]{max-width:120px}}nav .menu__header__logo img[data-v-783985e5]{width:100%}nav .menu__header__skip[data-v-783985e5]{font-size:13px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:1.3px;color:#fff;cursor:pointer}nav .menu.visible[data-v-783985e5]{align-items:flex-end;position:fixed;top:0;right:0;-webkit-animation:mymove-data-v-783985e5 .2s;animation:mymove-data-v-783985e5 .2s;z-index:10}nav .menu.visible[data-v-783985e5],nav .menu__col[data-v-783985e5]{display:flex;flex-flow:column;justify-content:center}nav .menu__col[data-v-783985e5]{width:50%;align-items:center}@media (max-width:768px){nav .menu__col[data-v-783985e5]{width:100%}}nav .menu__wrap[data-v-783985e5]{width:100%;max-width:400px;display:flex;flex-flow:column;justify-content:center;align-items:center}@media (max-width:768px){nav .menu__wrap[data-v-783985e5]{max-width:100%}}nav .menu__row[data-v-783985e5]{width:100%;display:flex;justify-content:space-between;align-items:center}nav .menu__row .line[data-v-783985e5]{width:100px;height:1px;background-color:#fff}@media (max-width:768px){nav .menu__row .line[data-v-783985e5]{width:50px}}nav .menu__row .logo[data-v-783985e5]{width:28px;height:36px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:100% auto;background-position:50%}nav .menu__row ul[data-v-783985e5]{width:100%;list-style:none;display:flex;flex-flow:column;justify-content:center;align-items:center;padding:50px 0}@media (max-width:768px){nav .menu__row ul[data-v-783985e5]{padding:30px 0}}nav .menu__row ul li a[data-v-783985e5]{text-decoration:none;font-size:34px;font-weight:300;line-height:2.75;letter-spacing:4.5px;text-align:center;color:#fff;transition:all .2}@media (max-width:768px){nav .menu__row ul li a[data-v-783985e5]{font-size:24px}}nav .menu__row ul li a[data-v-783985e5]:active,nav .menu__row ul li a[data-v-783985e5]:hover{font-weight:700}nav .menu__row .social[data-v-783985e5]{display:flex;flex-flow:row}nav .menu__row .social a[data-v-783985e5]{margin-right:10px;display:flex}nav .menu__row .social a .icon[data-v-783985e5]{width:35px;height:35px;background-size:auto 24px;background-position:50%;background-repeat:no-repeat}nav .menu__row .social a .icon__fb[data-v-783985e5]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}nav .menu__row .social a .icon__ig[data-v-783985e5]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}@-webkit-keyframes appear-data-v-783985e5{0%{opacity:0}}@keyframes appear-data-v-783985e5{0%{opacity:0}}@-webkit-keyframes mymove-data-v-783985e5{0%{right:-100vw;opacity:0}to{right:0;opacity:1}}@keyframes mymove-data-v-783985e5{0%{right:-100vw;opacity:0}to{right:0;opacity:1}}@-webkit-keyframes mymoveOut-data-v-783985e5{0%{right:0}to{right:-100vw}}@keyframes mymoveOut-data-v-783985e5{0%{right:0}to{right:-100vw}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-menu.4c255e8.jpg";

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-baround-white.2d1c5f0.png";

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "footer[data-v-705e7678]{width:100%;background:#222831;display:flex;flex-flow:row;justify-content:space-between;align-items:center;padding:15px 30px;position:relative}@media (max-width:768px){footer[data-v-705e7678]{padding:7px 20px}}footer .social[data-v-705e7678]{display:flex;flex-flow:row}footer .social a[data-v-705e7678]{margin-right:10px;display:flex}footer .social a .icon[data-v-705e7678]{width:20px;height:20px;background-size:auto 16px;background-position:50%;background-repeat:no-repeat}footer .social a .icon__fb[data-v-705e7678]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}footer .social a .icon__ig[data-v-705e7678]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}footer .credits[data-v-705e7678]{font-size:13px;font-weight:300;letter-spacing:1.08px;color:#fff;position:relative}@media (max-width:768px){footer .credits[data-v-705e7678]{font-size:11px}}footer .credits a[data-v-705e7678]{text-decoration:none;color:#fff}@-webkit-keyframes appear-data-v-705e7678{0%{opacity:0}}@keyframes appear-data-v-705e7678{0%{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-baround-popup.3d89f4a.png";

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_0d4e18d9_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_0d4e18d9_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_0d4e18d9_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_0d4e18d9_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_0d4e18d9_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_0d4e18d9_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".popup[data-v-0d4e18d9]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.7);display:flex;flex-flow:row;justify-content:center;align-items:center;z-index:1000;transform:translateY(60%) scale(0);transition:transform .3s cubic-bezier(.4,0,.2,1)}.popup.visible[data-v-0d4e18d9]{transform:translateY(0) scale(1)}.popup__box[data-v-0d4e18d9]{width:500px;display:flex;flex-flow:column;justify-content:center;align-items:center;padding:70px 25px;background-color:#fff;position:relative}@media (max-width:768px){.popup__box[data-v-0d4e18d9]{max-width:80%;padding:20px}}.popup__box .close[data-v-0d4e18d9]{position:absolute;background:#222831;width:40px;height:40px;border-radius:100%;top:-20px;right:-20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:10px auto;background-position:50%;background-repeat:no-repeat;cursor:pointer}@media (max-width:768px){.popup__box .close[data-v-0d4e18d9]{right:auto;left:-20px}}.popup__box .icon[data-v-0d4e18d9]{width:30px;margin-bottom:20px}.popup__box .icon img[data-v-0d4e18d9]{width:100%}.popup__box h3[data-v-0d4e18d9]{font-size:24px;line-height:1.29;letter-spacing:1.66px;text-align:center;color:#222831}@media (max-width:768px){.popup__box h3[data-v-0d4e18d9]{font-size:22px}}.popup__box p[data-v-0d4e18d9]{font-size:18px;line-height:1.29;text-align:center;color:#000;margin-top:20px;font-weight:300}@media (max-width:768px){.popup__box p[data-v-0d4e18d9]{font-size:16px}}.popup__box .button[data-v-0d4e18d9]{min-width:238px;height:45px;background-color:#222831;font-size:13px;font-weight:700;letter-spacing:5px;color:#fff;text-transform:uppercase;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:22px auto;background-position:15px;background-repeat:no-repeat;display:flex;flex-flow:column;justify-content:center;align-items:center;padding:0 20px 0 49px;margin-top:30px;text-decoration:none}@media (max-width:768px){.popup__box .button[data-v-0d4e18d9]{font-size:11px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=783985e5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_vm._ssrNode(((_vm.isHidden)?("<div class=\"burger\" data-v-783985e5><span class=\"burger__line\" data-v-783985e5></span> <span class=\"burger__line\" data-v-783985e5></span> <span class=\"burger__line\" data-v-783985e5></span></div>"):("<div class=\"burger burger--close\" data-v-783985e5></div>"))+" <div"+(_vm._ssrClass("menu",{ visible: !_vm.isHidden }))+" data-v-783985e5><div class=\"menu__header\" data-v-783985e5><div class=\"menu__header__logo\" data-v-783985e5><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" data-v-783985e5></div></div> <div class=\"menu__col\" data-v-783985e5><div class=\"menu__wrap\" data-v-783985e5><div class=\"menu__row\" data-v-783985e5><span class=\"line\" data-v-783985e5></span> <span class=\"logo\" data-v-783985e5></span> <span class=\"line\" data-v-783985e5></span></div> <div class=\"menu__row\" data-v-783985e5><ul data-v-783985e5><li data-v-783985e5><a href=\"/chi-siamo\" data-v-783985e5>Chi siamo</a></li> <li data-v-783985e5><a href=\"/locali\" data-v-783985e5>Locali</a></li> <li data-v-783985e5><a href=\"/itinerari\" data-v-783985e5>Itinerari</a></li> <li data-v-783985e5><a href=\"/contatti\" data-v-783985e5>Contatti</a></li></ul></div> <div class=\"menu__row\" data-v-783985e5><span class=\"line\" data-v-783985e5></span> <div class=\"social\" data-v-783985e5><a href data-v-783985e5><span class=\"icon icon__fb\" data-v-783985e5></span></a> <a href data-v-783985e5><span class=\"icon icon__ig\" data-v-783985e5></span></a></div> <span class=\"line\" data-v-783985e5></span></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=783985e5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const mapMarker = __webpack_require__(71);

/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({
  data() {
    return {
      isHidden: true
    };
  }

});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "783985e5",
  "44c7a7da"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ExitPopup.vue?vue&type=template&id=0d4e18d9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup"},[_vm._ssrNode("<div class=\"popup__box\" data-v-0d4e18d9><span class=\"close\" data-v-0d4e18d9></span> <span class=\"icon\" data-v-0d4e18d9><img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" data-v-0d4e18d9></span> <h3 data-v-0d4e18d9>Ehi!<br data-v-0d4e18d9>Te ne stai andando?<br data-v-0d4e18d9>Aspetta</h3> <p data-v-0d4e18d9>Prima di scappare seguici su <strong data-v-0d4e18d9>instagram</strong><br data-v-0d4e18d9>per non perderti nessuna novità.</p> <a href=\"https://www.instagram.com/baround_/\" target=\"_blank\" class=\"button button--ig\" data-v-0d4e18d9>SEGUICI SUBITO!</a> "+((_vm.popup)?("<div data-v-0d4e18d9>"+_vm._ssrEscape("\n      "+_vm._s(_vm.exitPopup())+"\n    ")+"</div>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ExitPopup.vue?vue&type=template&id=0d4e18d9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ExitPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ExitPopupvue_type_script_lang_js_ = ({
  data() {
    return {
      popup: false
    };
  },

  created() {// this.$store.dispatch("locali");
  },

  methods: {
    exitPopup(event) {
      if (typeof window !== 'undefined') {
        if (!this.$cookies.get("exitIntentShown")) {
          setTimeout(() => {
            document.addEventListener('mouseout', mouseEvent);
            document.addEventListener('keydown', exit);
          }, 6000);
        }

        const mouseEvent = e => {
          const shouldShowExitIntent = !e.toElement && !e.relatedTarget && e.clientY < 10;

          if (shouldShowExitIntent) {
            document.removeEventListener('mouseout', mouseEvent);
            document.querySelector('.popup').classList.add('visible'); // Set the cookie when the popup is shown to the user

            this.$cookies.set('exitIntentShown', true, 60 * 60);
          }
        };

        const exit = e => {
          if (e.target.className === 'close') {
            document.querySelector('.popup').classList.remove('visible');
          }
        };

        document.querySelector('.popup').addEventListener('click', exit);
      }
    }

  },

  mounted() {
    this.popup = true;
    this.exitPopup();
  }

});
// CONCATENATED MODULE: ./components/ExitPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ExitPopupvue_type_script_lang_js_ = (ExitPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ExitPopup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ExitPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0d4e18d9",
  "2c5bd37f"
  
)

/* harmony default export */ var ExitPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/placeholder.33c3c55.jpg";

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ea1a4316_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ea1a4316_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ea1a4316_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ea1a4316_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ea1a4316_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ea1a4316_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(89);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, ".newsletter[data-v-ea1a4316]{position:fixed;bottom:0;width:100vw;background:#fff;padding:25px 30px;z-index:7;box-shadow:0 -5px 30px 0 rgba(0,0,0,.31);-webkit-animation:showBox-data-v-ea1a4316 .5s;animation:showBox-data-v-ea1a4316 .5s}@media (max-width:768px){.newsletter[data-v-ea1a4316]{padding:18px 20px}}.newsletter .close[data-v-ea1a4316]{width:40px;height:40px;background-color:#fff;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");border-radius:100%;background-size:auto 14px;background-position:50%;background-repeat:no-repeat;position:absolute;top:-20px;box-shadow:0 -8px 10px 0 rgba(0,0,0,.1);cursor:pointer}@media (max-width:768px){.newsletter .close[data-v-ea1a4316]{left:-3px}}.newsletter__row[data-v-ea1a4316]{width:100%;display:flex;flex-flow:row;justify-content:space-between;align-items:center}@media (max-width:768px){.newsletter__row[data-v-ea1a4316]{flex-flow:column}}.newsletter__row__col[data-v-ea1a4316]{display:flex;flex-flow:column;justify-content:flex-start;align-items:center}.newsletter .label[data-v-ea1a4316]{font-size:18px;font-weight:700;line-height:1.17;letter-spacing:1.29px;color:#222831;margin-right:20px}.newsletter .form[data-v-ea1a4316]{display:flex;flex-flow:row;justify-content:space-between;align-items:center}@media (max-width:768px){.newsletter .form[data-v-ea1a4316]{flex-flow:column}}.newsletter .form__col[data-v-ea1a4316]{display:flex;flex-flow:column;justify-content:center;align-items:center}.newsletter .form__col__row[data-v-ea1a4316]{display:flex}.newsletter .form__col__row--error[data-v-ea1a4316]{color:#af0c0c;font-size:11px;padding-top:5px;position:absolute;bottom:10px}.newsletter .form__col__row--success[data-v-ea1a4316]{color:#058215;font-size:11px;padding-top:5px;position:absolute;bottom:10px}@media (max-width:768px){.newsletter .form .label[data-v-ea1a4316]{margin-right:0;margin-bottom:8px}}.newsletter .form input[data-v-ea1a4316]{width:300px;height:45px;border:1px solid #222831;background-color:#fff;padding:5px 20px;font-size:14px;font-weight:700;letter-spacing:1px;color:#222831;border-radius:0}@media (max-width:768px){.newsletter .form input[data-v-ea1a4316]{max-width:100%}}.newsletter .form input[data-v-ea1a4316]:focus{outline:none}.newsletter .form button[data-v-ea1a4316]{background-color:#222831;height:45px;width:45px;border:1px solid #222831;font-size:0;cursor:pointer;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-repeat:no-repeat}.newsletter .social[data-v-ea1a4316]{display:flex;flex-flow:row;align-items:center}@media (max-width:768px){.newsletter .social[data-v-ea1a4316]{display:none}}.newsletter .social a[data-v-ea1a4316]{margin-right:10px;display:flex}.newsletter .social a .icon[data-v-ea1a4316]{width:40px;height:40px;background-size:auto 16px;background-position:50%;background-repeat:no-repeat;background-color:#222831;border-radius:100%}.newsletter .social a .icon__fb[data-v-ea1a4316]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.newsletter .social a .icon__ig[data-v-ea1a4316]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}@-webkit-keyframes showBox-data-v-ea1a4316{0%{bottom:-300px}to{bottom:0}}@keyframes showBox-data-v-ea1a4316{0%{bottom:-300px}to{bottom:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-arrow-white.94fb342.svg";

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Newsletter.vue?vue&type=template&id=ea1a4316&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showNewsletter & !_vm.closeNews)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"newsletter"},[_vm._ssrNode("<span class=\"close\" data-v-ea1a4316></span> "),_c('mailchimp-subscribe',{attrs:{"url":"https://baround.us2.list-manage.com/subscribe/post-json","user-id":"3dc114aeeae39c68603e85176","list-id":"d3cfdbd470"},on:{"error":_vm.onError,"success":_vm.onSuccess},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var subscribe = ref.subscribe;
var setEmail = ref.setEmail;
var error = ref.error;
var success = ref.success;
return [_c('div',{staticClass:"newsletter__row"},[_c('div',{staticClass:"newsletter__row__col"},[_c('form',{staticClass:"form",on:{"submit":function($event){$event.preventDefault();return subscribe($event)}}},[_c('div',{staticClass:"form__col"},[_c('span',{staticClass:"label"},[_vm._v("Rimani sempre aggiornato!")])]),_vm._v(" "),_c('div',{staticClass:"form__col"},[_c('div',{staticClass:"form__col__row"},[_c('input',{attrs:{"type":"email","placeholder":"Inserisci la tua email"},on:{"input":function($event){return setEmail($event.target.value)}}}),_vm._v(" "),_c('button',{attrs:{"type":"submit"}},[_vm._v("Iscriviti")])]),_vm._v(" "),(error)?_c('div',{staticClass:"form__col__row form__col__row--error"},[_vm._v("Ops. Qualcosa è andato storto. Riprova!")]):_vm._e(),_vm._v(" "),(success)?_c('div',{staticClass:"form__col__row form__col__row--success"},[_vm._v(_vm._s(_vm.setCookieNewsletter())+"Fantastico! Sei dei nostri!")]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"newsletter__row__col"},[_c('div',{staticClass:"social"},[_c('span',{staticClass:"label"},[_vm._v("Seguici su:")]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.facebook.com/baroundit","target":"_blank"}},[_c('span',{staticClass:"icon icon__fb"})]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.instagram.com/baround_/","target":"_blank"}},[_c('span',{staticClass:"icon icon__ig"})])])])])]}}],null,false,1216859991)})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Newsletter.vue?vue&type=template&id=ea1a4316&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-mailchimp-subscribe/dist/vue-mailchimp-subscribe.js
var vue_mailchimp_subscribe = __webpack_require__(22);
var vue_mailchimp_subscribe_default = /*#__PURE__*/__webpack_require__.n(vue_mailchimp_subscribe);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Newsletter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Newslettervue_type_script_lang_js_ = ({
  components: {
    MailchimpSubscribe: vue_mailchimp_subscribe_default.a
  },

  data() {
    return {
      closeNews: false,
      isActive: false,
      showNewsletter: true
    };
  },

  methods: {
    onError() {},

    onSuccess() {},

    showBox() {
      setTimeout(function () {
        this.isActive = true;
      }, 1000);
    },

    setCookieNewsletter: function () {
      this.$cookies.set('newsletter', true, 60 * 30);
    },
    setCookieClose: function () {
      this.$cookies.set('closepopup', true, 60 * 30);
    }
  },

  mounted() {
    if (this.$cookies.get("newsletter")) {
      this.showNewsletter = false;
    }

    if (this.$cookies.get("closepopup")) {
      this.showNewsletter = false;
    }

    setTimeout(function (scope) {
      scope.isActive = true;
    }, 5000, this); // console.log(this.isActive);
  },

  created() {}

});
// CONCATENATED MODULE: ./components/Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Newslettervue_type_script_lang_js_ = (Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ea1a4316",
  "88536790"
  
)

/* harmony default export */ var Newsletter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53d3eed0", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map