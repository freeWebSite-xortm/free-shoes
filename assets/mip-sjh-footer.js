(window.MIP=window.MIP||[]).push({name:"mip-sjh-footer",func:function(){var e=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://c.mipcdn.com/static/v2/fc-platform/mip-sjh-footer-269/",n(n.s=28)}([function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_descriptors"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_an-object"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_object-dp"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_wks"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_global"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_defined"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_fails"]},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var o=n(31);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(29).default)("733ed754",o,!0,{})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_has"]},function(e,t,n){var o=n(47),r=n(5);e.exports=function(e){return o(r(e))}},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_is-object"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_redefine"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_shared-key"]},function(e,t,n){var o=n(10),r=n(11),i=n(45)(!1),a=n(14)("IE_PROTO");e.exports=function(e,t){var n,c=r(e),s=0,u=[];for(n in c)n!=a&&o(c,n)&&u.push(n);for(;t.length>s;)o(c,n=t[s++])&&(~i(u,n)||u.push(n));return u}},function(e,t,n){var o=n(15),r=n(9).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,r)}},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_to-primitive"]},function(e,t,n){var o=n(49),r=n(48),i=n(11),a=n(17),c=n(10),s=n(46),u=Object.getOwnPropertyDescriptor;t.f=n(0)?u:function(e,t){if(e=i(e),t=a(t,!0),s)try{return u(e,t)}catch(e){}if(c(e,t))return r(!o.f.call(e,t),e[t])}},function(e,t,n){var o=n(12),r=n(51).set;e.exports=function(e,t,n){var i,a=t.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(e,i),e}},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_to-integer"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_to-length"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_export"]},function(e,t,n){"use strict";var o=n(1);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){"use strict";var o=n(23),r=RegExp.prototype.exec,i=String.prototype.replace,a=r,c=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=void 0!==/()??/.exec("")[1];(c||s)&&(a=function(e){var t,n,a,u,p=this;return s&&(n=new RegExp("^"+p.source+"$(?!\\s)",o.call(p))),c&&(t=p.lastIndex),a=r.call(p,e),c&&a&&(p.lastIndex=p.global?a.index+a[0].length:t),s&&a&&a.length>1&&i.call(a[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),e.exports=a},function(e,t,n){"use strict";n(57);var o=n(13),r=n(56),i=n(6),a=n(5),c=n(3),s=n(24),u=c("species"),p=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),l=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var f=c(e),d=!i(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),m=d?!i(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!t}):void 0;if(!d||!m||"replace"===e&&!p||"split"===e&&!l){var g=/./[f],_=n(a,f,""[e],function(e,t,n,o,r){return t.exec===s?d&&!r?{done:!0,value:g.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),b=_[0],v=_[1];o(String.prototype,e,b),r(RegExp.prototype,f,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},function(e,t,n){"use strict";var o=n(58),r=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},function(e,t){e.exports=__mipComponentsWebpackHelpers__["vue-loader/lib/runtime/componentNormalizer"]},function(e,t,n){"use strict";n.r(t);n(60),n(55),n(52),n(41),n(40);var o="mip-sjh-common",r={UTILS:"".concat(o,"-utils")},i=("".concat(o,"-event-cache"),"".concat(o,"-download-appData"),"".concat(o,"-download-process"),function(){return window.MIP.sandbox.MIP.getData("env")&&"editor"===window.MIP.sandbox.MIP.getData("env").platform}),a=function(){return window.MIP.sandbox.window.navigator&&window.MIP.sandbox.window.navigator.userAgent&&-1!==window.MIP.sandbox.window.navigator.userAgent.indexOf("swan-baiduboxapp")},c=window.MIP.sandbox.MIP.Services.getServicePromise(r.UTILS);var s=function(e,t){c.then(function(n){var o=n.sdk;!a()||t?(o.swanSDK({api:"navigateTo",apiParams:{url:t},h5Callback:function(){window.MIP.sandbox.window.location.href=o.getJumpUrl({targetUrl:e})}}),o.swanSDK({api:"switchTab",apiParams:{url:t},h5Callback:function(){}})):window.MIP.sandbox.window.location.href=o.getJumpUrl({targetUrl:e})})},u={name:"MipSjhFooter",props:{__id__:{type:String,default:""},__type__:{type:String,default:""},__name__:{type:String,default:""},__title__:{type:String,default:""},__type:{type:String,default:""},name:{type:String,default:""},isPreview:{type:Boolean,default:!1},encodeName:{type:String,default:""},subTitle:{type:String,default:""},encodeSubTitle:{type:String,default:""},backgroundType:{type:[Number,String],default:0}},data:function(){return{isEditor:i(),fromAdvertising:!(!i()&&!window.MIP.sandbox.this(this).isPreview)||window.MIP.sandbox.this(this).getQueryParam("fid")&&window.MIP.sandbox.this(this).getQueryParam("ch")}},computed:{showName:function(){return window.MIP.sandbox.this(this).isEditor?decodeURIComponent(window.MIP.sandbox.this(this).encodeName):window.MIP.sandbox.this(this).name},showSubTitle:function(){return window.MIP.sandbox.this(this).isEditor?decodeURIComponent(window.MIP.sandbox.this(this).encodeSubTitle):window.MIP.sandbox.this(this).subTitle}},mounted:function(){var e=["mip-sjh-merchant-info-show-",window.MIP.sandbox.this(this).fromAdvertising?"1":"0"].join("");window.MIP.sandbox.this(this).logger(e)},methods:{logger:function(e){var t=window.MIP.sandbox.this(this);window.MIP.sandbox.MIP.Services.getServicePromise(r.UTILS).then(function(n){var o=n.sdk,r={actionId:o.configOfLogAction.actionIdForDeveloper.SITE_COMP_CLICK,type:"mip-sjh-merchant-info",id:t.__id__,name:"mip-sjh-merchant-info-footer",title:"mip-sjh-merchant-info-footer",compTargetId:e};o.logActions.addUserDefinedLog(r)})},jumpToSign:function(){window.MIP.sandbox.this(this).isEditor||(window.MIP.sandbox.this(this).logger("mip-sjh-merchant-info-request-guarantee"),s("https://baozhang.baidu.com/guarantee/m/?fr=fcpage",""))},getQueryParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.MIP.sandbox.window.location.search.substr(1).match(t);return null!=n?decodeURIComponent(n[2]):null}}},p=(n(32),n(27)),l=n.n(p)()(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["footer-container",0===e.backgroundType?"light":"dark"]},[e.showName?n("h3",{staticClass:"name"},[e._v(e._s(e.showName))]):e._e(),e._v(" "),"normal"===e.__type&&e.showSubTitle?n("p",{staticClass:"sub-title"},[e._v(e._s(e.showSubTitle))]):e._e(),e._v(" "),"normal"!==e.__type&&e.fromAdvertising?n("ul",{staticClass:"sign-text"},[n("li",{staticClass:"sign-1"},[e._v("有保标有保障")]),e._v(" "),n("li",{staticClass:"sign-2"},[e._v("30天保障时效")]),e._v(" "),n("li",{staticClass:"sign-3"},[e._v("协助维权更放心")])]):e._e(),e._v(" "),e.fromAdvertising?n("p",{staticClass:"tips"},[e._v("\n        百度推出网民权益保障计划，如遇欺诈等可"),n("a",{attrs:{id:"mip-sjh-footer-to-sign"},on:{click:e.jumpToSign}},[e._v("申请保障")])]):e._e()])},[],!1,null,"a68c931c",null);t.default=l.exports},function(e,t){e.exports=__mipComponentsWebpackHelpers__["vue-style-loader/lib/addStylesClient"]},function(e,t){e.exports=__mipComponentsWebpackHelpers__["css-loader/lib/css-base"]},function(e,t,n){(e.exports=n(30)(!1)).push(["e0e73a65fdcbca4c",'.footer-container[data-v-a68c931c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:.84918478rem .32080314rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.footer-container .name[data-v-a68c931c],.footer-container .sign-text[data-v-a68c931c],.footer-container .sub-title[data-v-a68c931c],.footer-container .tips[data-v-a68c931c]{margin-top:.16983696rem;width:100%;height:1.01902174rem;line-height:1.01902174rem;text-align:center;font-weight:400;font-family:PingFangSC-Regular;font-size:.67934783rem;color:#999;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.footer-container .name[data-v-a68c931c]{margin-top:0}.footer-container .sign-text[data-v-a68c931c]{line-height:1.01902174rem;list-style:none;font-size:0}.footer-container .sign-text li[data-v-a68c931c]{margin-right:1.01902174rem;display:inline-block;vertical-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:.67934783rem}.footer-container .sign-text li[data-v-a68c931c]:last-child{margin-right:0}.footer-container .sign-text .sign-1[data-v-a68c931c]{position:relative;padding-left:.79257246rem}.footer-container .sign-text .sign-1[data-v-a68c931c]:before{position:absolute;left:0;top:50%;margin-top:-.32080314rem;width:.56612319rem;height:.64160628rem;content:"";background-image:url(https://fe-resource.cdn.bcebos.com/mip/mip-sjh-merchant-info/sign-1.png);background-size:100% 100%}.footer-container .sign-text .sign-2[data-v-a68c931c]{position:relative;padding-left:.81144324rem}.footer-container .sign-text .sign-2[data-v-a68c931c]:before{position:absolute;left:0;top:50%;margin-top:-.29249698rem;width:.58499396rem;height:.58499396rem;content:"";background-image:url(https://fe-resource.cdn.bcebos.com/mip/mip-sjh-merchant-info/sign-2.png);background-size:100% 100%}.footer-container .sign-text .sign-3[data-v-a68c931c]{position:relative;padding-left:.79257246rem}.footer-container .sign-text .sign-3[data-v-a68c931c]:before{position:absolute;left:0;top:50%;margin-top:-.32080314rem;width:.56612319rem;height:.64160628rem;content:"";background-image:url(https://fe-resource.cdn.bcebos.com/mip/mip-sjh-merchant-info/sign-3.png);background-size:100% 100%}.footer-container .tips a[data-v-a68c931c]{color:#4974b1}.light[data-v-a68c931c]{background:#fafafa}.dark[data-v-a68c931c]{background:#1b1b1b}.dark .name[data-v-a68c931c],.dark .sign-text[data-v-a68c931c],.dark .sub-title[data-v-a68c931c],.dark .tips[data-v-a68c931c]{color:hsla(0,0%,100%,.3)}.dark .tips a[data-v-a68c931c]{color:hsla(0,0%,100%,.5)}',""])},function(e,t,n){"use strict";var o=n(8);n.n(o).a},function(e,t,n){var o=n(4).document;e.exports=o&&o.documentElement},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_dom-create"]},function(e,t,n){var o=n(15),r=n(9);e.exports=Object.keys||function(e){return o(e,r)}},function(e,t,n){var o=n(2),r=n(1),i=n(35);e.exports=n(0)?Object.defineProperties:function(e,t){r(e);for(var n,a=i(t),c=a.length,s=0;c>s;)o.f(e,n=a[s++],t[n]);return e}},function(e,t,n){var o=n(1),r=n(36),i=n(9),a=n(14)("IE_PROTO"),c=function(){},s=function(){var e,t=n(34)("iframe"),o=i.length;for(t.style.display="none",n(33).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;o--;)delete s.prototype[i[o]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(c.prototype=o(e),n=new c,c.prototype=null,n[a]=e):n=s(),void 0===t?n:r(n,t)}},function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(e,t,n){var o=n(22),r=n(5),i=n(6),a=n(38),c="["+a+"]",s=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),p=function(e,t,n){var r={},c=i(function(){return!!a[e]()||"​"!="​"[e]()}),s=r[e]=c?t(l):a[e];n&&(r[n]=s),o(o.P+o.F*c,"String",r)},l=p.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},function(e,t,n){"use strict";var o=n(4),r=n(10),i=n(7),a=n(19),c=n(17),s=n(6),u=n(16).f,p=n(18).f,l=n(2).f,f=n(39).trim,d=o.Number,m=d,g=d.prototype,_="Number"==i(n(37)(g)),b="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,i=(t=b?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var a,s=t.slice(2),u=0,p=s.length;u<p;u++)if((a=s.charCodeAt(u))<48||a>r)return NaN;return parseInt(s,o)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(_?s(function(){g.valueOf.call(n)}):"Number"!=i(n))?a(new m(v(t)),n,d):v(t)};for(var h,x=n(0)?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)r(m,h=x[w])&&!r(d,h)&&l(d,h,p(m,h));d.prototype=g,g.constructor=d,n(13)(o,"Number",d)}},function(e,t,n){var o=n(2).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(0)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},function(e,t,n){"use strict";var o=n(4),r=n(2),i=n(0),a=n(3)("species");e.exports=function(e){var t=o[e];i&&t&&!t[a]&&r.f(t,a,{configurable:!0,get:function(){return this}})}},function(e,t,n){var o=n(12),r=n(7),i=n(3)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},function(e,t,n){var o=n(20),r=Math.max,i=Math.min;e.exports=function(e,t){return(e=o(e))<0?r(e+t,0):i(e,t)}},function(e,t,n){var o=n(11),r=n(21),i=n(44);e.exports=function(e){return function(t,n,a){var c,s=o(t),u=r(s.length),p=i(a,u);if(e&&n!=n){for(;u>p;)if((c=s[p++])!=c)return!0}else for(;u>p;p++)if((e||p in s)&&s[p]===n)return e||p||0;return!e&&-1}}},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_ie8-dom-define"]},function(e,t,n){var o=n(7);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_property-desc"]},function(e,t){t.f={}.propertyIsEnumerable},function(e,t){if(void 0===__mipComponentsWebpackHelpers__["core-js/modules/_ctx"]){var n=new Error("Cannot find module '__mipComponentsWebpackHelpers__['core-js/modules/_ctx']'");throw n.code="MODULE_NOT_FOUND",n}e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_ctx"]},function(e,t,n){var o=n(12),r=n(1),i=function(e,t){if(r(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{(o=n(50)(Function.call,n(18).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:o(e,n),e}}({},!1):void 0),check:i}},function(e,t,n){var o=n(4),r=n(19),i=n(2).f,a=n(16).f,c=n(43),s=n(23),u=o.RegExp,p=u,l=u.prototype,f=/a/g,d=/a/g,m=new u(f)!==f;if(n(0)&&(!m||n(6)(function(){return d[n(3)("match")]=!1,u(f)!=f||u(d)==d||"/a/i"!=u(f,"i")}))){u=function(e,t){var n=this instanceof u,o=c(e),i=void 0===t;return!n&&o&&e.constructor===u&&i?e:r(m?new p(o&&!i?e.source:e,t):p((o=e instanceof u)?e.source:e,o&&i?s.call(e):t),n?this:l,u)};for(var g=function(e){e in u||i(u,e,{configurable:!0,get:function(){return p[e]},set:function(t){p[e]=t}})},_=a(p),b=0;_.length>b;)g(_[b++]);l.constructor=u,u.prototype=l,n(13)(o,"RegExp",u)}n(42)("RegExp")},function(e,t,n){var o=n(20),r=n(5);e.exports=function(e){return function(t,n){var i,a,c=String(r(t)),s=o(n),u=c.length;return s<0||s>=u?e?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):i:e?c.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},function(e,t,n){"use strict";var o=n(53)(!0);e.exports=function(e,t,n){return t+(n?o(e,t).length:1)}},function(e,t,n){"use strict";var o=n(1),r=n(21),i=n(54),a=n(26);n(25)("match",1,function(e,t,n,c){return[function(n){var o=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,o):new RegExp(n)[t](String(o))},function(e){var t=c(n,e,this);if(t.done)return t.value;var s=o(e),u=String(this);if(!s.global)return a(s,u);var p=s.unicode;s.lastIndex=0;for(var l,f=[],d=0;null!==(l=a(s,u));){var m=String(l[0]);f[d]=m,""===m&&(s.lastIndex=i(u,r(s.lastIndex),p)),d++}return 0===d?null:f}]})},function(e,t){e.exports=__mipComponentsWebpackHelpers__["core-js/modules/_hide"]},function(e,t,n){"use strict";var o=n(24);n(22)({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},function(e,t,n){var o=n(7),r=n(3)("toStringTag"),i="Arguments"==o(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),r))?n:i?o(t):"Object"==(a=o(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},function(e,t,n){"use strict";var o=n(1),r=n(59),i=n(26);n(25)("search",1,function(e,t,n,a){return[function(n){var o=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,o):new RegExp(n)[t](String(o))},function(e){var t=a(n,e,this);if(t.done)return t.value;var c=o(e),s=String(this),u=c.lastIndex;r(u,0)||(c.lastIndex=0);var p=i(c,s);return r(c.lastIndex,u)||(c.lastIndex=u),null===p?-1:p.index}]})}]);e.__esModule&&(e=e.default),e&&MIP.registerElement("mip-sjh-footer",e)}});