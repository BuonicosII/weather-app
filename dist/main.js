(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),u=n(667),s=n.n(u),c=new URL(n(323),n.b),d=new URL(n(390),n.b),l=new URL(n(36),n.b),f=new URL(n(755),n.b),h=new URL(n(933),n.b),m=new URL(n(713),n.b),g=new URL(n(215),n.b),v=i()(a()),p=s()(c),b=s()(d),w=s()(l),y=s()(f),C=s()(h),T=s()(m),x=s()(g);v.push([e.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@font-face {\n    font-family: 'MyFont';\n    src: url(${p});\n    font-weight: 500;\n    font-style: normal;\n}\n\nhtml {\n    font-family: 'MyFont';\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    margin: 0;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n\n#formHolder {\n    grid-area: 1 / 3 / 2 / 4;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n}\n\n#searchCity {\n    background-color: rgba(0, 0, 255, 0);\n    width: 100%;\n    display: flex;\n    gap: 2vh;\n}\n\n#location {\n    appearance: none;\n    border: 2px solid white ;\n    border-radius: 1vh;\n    height: 1vh;\n    padding: 1vh;\n    background-color: rgba(0, 0, 255, 0);\n    color: white;\n    font-size: 1.2vh;\n    width: 60%;\n}\n\n#location:focus-visible {\n    outline: 2px white solid;\n}\n\n#searchButton {\n    appearance: none;\n    height: calc(3vh + 2px);\n    color: white;\n    background-color: rgb(0, 110, 255);\n    border: 0px;\n    border-radius: 1vh;\n    width: 20%;\n}\n\n#searchButton:hover {\n    background-color: rgb(57, 143, 255);\n}\n\n#dropDownHolder {\n    width: 100%;\n    position: relative;\n}\n\n#holder1 {\n    grid-area: 1 / 1 / 3 / 2;\n    display: flex;\n    justify-content: flex-start;\n    align-items: start;\n    padding-left: 7vh;\n    padding-top: 7vh;\n}\n\n#holder2{\n    grid-area: 1 / 5 / 3 / 6;\n    display: flex;\n    justify-content: flex-end;\n    align-items: start;\n    padding-right: 7vh;\n    padding-top: 7vh;\n}\n\n#currentData1, #currentData2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 2vh;\n    color: white;\n    border-radius: 1vh;\n    height: 400px;\n\n}\n\n#forecast {\n    grid-area: 3 / 2 / 5 / 4;\n}\n\n.invisible {\n    display: none;\n}\n\n#city div {\n    font-size: 6vh;\n    width: 100%;\n}\n\n#date span, #country span, #hour span, .label {\n    font-size: 1.5vh;\n}\n\n#currentWeather span, #currentTemperature div span, .value, .value {\n    font-size: 2vh;\n}\n\n#currentTemperature, #hour {\n    margin-top: 1vh;\n}\n\n#currentSituation {\n    display: flex;\n}\n\n#temperatureFelt, #humidity, #rainChance, #windSpeed {\n    display: flex;\n    width: 250px;\n    height: 65px;\n    gap: 2vh;\n}\n\n#currentSituation img, #temperatureFelt img, #humidity img, #rainChance img, #windSpeed img {\n    height: 65%;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.value {\n    display: block;\n    margin-top: 1vh;\n}\n\n.sunny {\n    background-image: url(${b})\n}\n\n.clear {\n    background-image: url(${w})\n}\n\n.fog {\n    background-image: url(${y})\n}\n\n.rain {\n    background-image: url(${C})\n}\n\n.snow {\n    background-image: url(${T})\n}\n\n.cloudy {\n    background-image: url(${x})\n}\n\nimg {\n    filter: invert();\n}\n\n#drop-down {\n    position: absolute;\n    background-color: rgb(255, 255, 255);\n    width: calc(60% + 2vh);\n    max-height: 500px;\n    overflow: auto;\n    top: calc(7px);\n    border-radius: 1vh;\n} \n\n.suggestion {\n    width: calc(100% - 1vh);\n    padding: 1vh;\n    padding-right: 0;\n    border-bottom: 1px solid rgb(128, 128, 128);\n    display: flex;\n    align-items: center;\n}\n\n.suggestion:hover, .lastSuggestion:hover {\n    background-color: rgb(0, 110, 255);\n    color: white;\n}\n\n.lastSuggestion {\n    width: calc(100% - 1vh);\n    padding: 1vh;\n    padding-right: 0;\n    display: flex;\n    align-items: center;\n}\n\n.locationValue {\n    pointer-events: none\n}`,""]);const k=v},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var s=e[u],c=r.base?s[0]+r.base:s[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var f=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var m=a(h,r);r.byIndex=u,t.splice(u,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var s=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},36:(e,t,n)=>{e.exports=n.p+"f342169839e9b222bf95.jpg"},215:(e,t,n)=>{e.exports=n.p+"a3a27ee848456598c003.jpg"},755:(e,t,n)=>{e.exports=n.p+"1c7f93b87b799d1f9691.jpg"},933:(e,t,n)=>{e.exports=n.p+"99f0d99f913a449dcd43.jpg"},713:(e,t,n)=>{e.exports=n.p+"93afd854db4089fbc2df.jpg"},390:(e,t,n)=>{e.exports=n.p+"725f6bc64e182a06f14f.jpg"},323:(e,t,n)=>{e.exports=n.p+"c86e3b9010ff63c99166.ttf"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),s=n.n(u),c=n(216),d=n.n(c),l=n(589),f=n.n(l),h=n(426),m={};function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function v(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function p(e){v(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===g(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function b(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e){v(1,arguments);var t=p(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function y(e){v(1,arguments);var t=p(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=w(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=w(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}m.styleTagTransform=f(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var C={};function T(){return C}function x(e,t){var n,r,a,o,i,u,s,c;v(1,arguments);var d=T(),l=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:d.weekStartsOn)&&void 0!==r?r:null===(s=d.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=p(e),h=f.getUTCDay(),m=(h<l?7:0)+h-l;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function k(e,t){var n,r,a,o,i,u,s,c;v(1,arguments);var d=p(e),l=d.getUTCFullYear(),f=T(),h=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(s=f.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(l+1,0,h),m.setUTCHours(0,0,0,0);var g=x(m,t),w=new Date(0);w.setUTCFullYear(l,0,h),w.setUTCHours(0,0,0,0);var y=x(w,t);return d.getTime()>=g.getTime()?l+1:d.getTime()>=y.getTime()?l:l-1}function S(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const D=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return S("yy"===t?r%100:r,t.length)},M=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):S(n+1,2)},U=function(e,t){return S(e.getUTCDate(),t.length)},N=function(e,t){return S(e.getUTCHours()%12||12,t.length)},q=function(e,t){return S(e.getUTCHours(),t.length)},P=function(e,t){return S(e.getUTCMinutes(),t.length)},W=function(e,t){return S(e.getUTCSeconds(),t.length)},j=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return S(Math.floor(r*Math.pow(10,n-3)),t.length)};var E={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return D(e,t)},Y:function(e,t,n,r){var a=k(e,r),o=a>0?a:1-a;return"YY"===t?S(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):S(o,t.length)},R:function(e,t){return S(y(e),t.length)},u:function(e,t){return S(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return S(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return S(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return S(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){v(1,arguments);var n=p(e),r=x(n,t).getTime()-function(e,t){var n,r,a,o,i,u,s,c;v(1,arguments);var d=T(),l=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:d.firstWeekContainsDate)&&void 0!==r?r:null===(s=d.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=k(e,t),h=new Date(0);return h.setUTCFullYear(f,0,l),h.setUTCHours(0,0,0,0),x(h,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):S(a,t.length)},I:function(e,t,n){var r=function(e){v(1,arguments);var t=p(e),n=w(t).getTime()-function(e){v(1,arguments);var t=y(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),w(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):S(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):U(e,t)},D:function(e,t,n){var r=function(e){v(1,arguments);var t=p(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):S(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return S(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return S(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return S(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return N(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):q(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):S(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):S(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):P(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):W(e,t)},S:function(e,t){return j(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return F(a);case"XXXX":case"XX":return O(a);default:return O(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return F(a);case"xxxx":case"xx":return O(a);default:return O(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Y(a,":");default:return"GMT"+O(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Y(a,":");default:return"GMT"+O(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return S(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return S((r._originalDate||e).getTime(),t.length)}};function Y(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+S(o,2)}function F(e,t){return e%60==0?(e>0?"-":"+")+S(Math.abs(e)/60,2):O(e,t)}function O(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+S(Math.floor(a/60),2)+n+S(a%60,2)}const L=E;var z=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},H=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const A={p:H,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return z(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",z(a,t)).replace("{{time}}",H(o,t))}};var R=["D","DD"],B=["YY","YYYY"];function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var $={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function I(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Q={date:I({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:I({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:I({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var G={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function X(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const Z={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:X({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:X({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:X({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:X({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:X({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function V(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(s):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(s);return i=e.valueCallback?e.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}var J,K={ordinalNumber:(J={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(J.matchPattern);if(!n)return null;var r=n[0],a=e.match(J.parsePattern);if(!a)return null;var o=J.valueCallback?J.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:V({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:V({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:V({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:V({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ee={code:"en-US",formatDistance:function(e,t,n){var r,a=$[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Q,formatRelative:function(e,t,n,r){return G[e]},localize:Z,match:K,options:{weekStartsOn:0,firstWeekContainsDate:1}};var te=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ne=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,re=/^'([^]*?)'?$/,ae=/''/g,oe=/[a-zA-Z]/;function ie(e,t,n){var r,a,o,i,u,s,c,d,l,f,h,m,w,y,C,x,k,S;v(2,arguments);var D=String(t),M=T(),U=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:M.locale)&&void 0!==r?r:ee,N=b(null!==(o=null!==(i=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==u?u:M.firstWeekContainsDate)&&void 0!==i?i:null===(l=M.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var q=b(null!==(h=null!==(m=null!==(w=null!==(y=null==n?void 0:n.weekStartsOn)&&void 0!==y?y:null==n||null===(C=n.locale)||void 0===C||null===(x=C.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==w?w:M.weekStartsOn)&&void 0!==m?m:null===(k=M.locale)||void 0===k||null===(S=k.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==h?h:0);if(!(q>=0&&q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var P=p(e);if(!function(e){if(v(1,arguments),!function(e){return v(1,arguments),e instanceof Date||"object"===g(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=p(e);return!isNaN(Number(t))}(P))throw new RangeError("Invalid time value");var W=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(P),j=function(e,t){return v(2,arguments),function(e,t){v(2,arguments);var n=p(e).getTime(),r=b(t);return new Date(n+r)}(e,-b(t))}(P,W),E={firstWeekContainsDate:N,weekStartsOn:q,locale:U,_originalDate:P};return D.match(ne).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,U.formatLong):e})).join("").match(te).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(re))?o[1].replace(ae,"'"):a;var u,s=L[i];if(s)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===B.indexOf(u))||_(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==R.indexOf(e)}(r)||_(r,t,String(e)),s(j,r,U.localize,E);if(i.match(oe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}Math.pow(10,8);var ue=6e4,se=36e5;var ce={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},de=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,le=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,fe=/^([+-])(\d{2})(?::?(\d{2}))?$/;function he(e){return e?parseInt(e):1}function me(e){return e&&parseFloat(e.replace(",","."))||0}var ge=[31,null,31,30,31,30,31,31,30,31,30,31];function ve(e){return e%400==0||e%4==0&&e%100!=0}async function pe(e){try{let t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4626ed69a3ed4fd284a194520230509&q=${e}&days=3`),n=await t.json();document.querySelector("#city div").textContent=n.location.name,document.querySelector("#country span").textContent=n.location.country;let r=document.querySelector("#date span"),a=n.location.localtime.split(" "),o=ie(new Date(function(e,t){var n;v(1,arguments);var r=b(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,o=function(e){var t,n={},r=e.split(ce.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],ce.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ce.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=ce.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e);if(o.date){var i=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}(o.date,r);a=function(e,t){if(null===t)return new Date(NaN);var n=e.match(de);if(!n)return new Date(NaN);var r=!!n[4],a=he(n[1]),o=he(n[2])-1,i=he(n[3]),u=he(n[4]),s=he(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,u,s):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(ge[t]||(ve(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(ve(e)?366:365)}(t,a)?(c.setUTCFullYear(t,o,Math.max(a,i)),c):new Date(NaN)}(i.restDateString,i.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var u,s=a.getTime(),c=0;if(o.time&&(c=function(e){var t=e.match(le);if(!t)return NaN;var n=me(t[1]),r=me(t[2]),a=me(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*se+r*ue+1e3*a:NaN}(o.time),isNaN(c)))return new Date(NaN);if(!o.timezone){var d=new Date(s+c),l=new Date(0);return l.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),l.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),l}return u=function(e){if("Z"===e)return 0;var t=e.match(fe);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*se+a*ue):NaN}(o.timezone),isNaN(u)?new Date(NaN):new Date(s+c+u)}(a[0])),"MMMM do yyyy");r.textContent=o,document.querySelector("#hour span").textContent=a[1],document.querySelector("#currentWeather span").textContent=n.current.condition.text,document.querySelector("#currentTemperature .metric span").textContent=n.current.temp_c+" °C";let i=document.querySelector("body");switch(n.current.condition.code){case 1e3:1===n.current.is_day?i.setAttribute("style","background-image: url(../src/Background/sun.jpg); background-size: cover;"):0===n.current.is_day&&i.setAttribute("style","background-image: url(../src/Background/clearnight.jpg); background-size: cover;");break;case 1003:case 1006:case 1009:i.setAttribute("style","background-image: url(../src/Background/cloudy.jpg); background-size: cover;");break;case 1030:case 1135:case 1147:i.setAttribute("style","background-image: url(../src/Background/fog.jpg); background-size: cover;");break;case 1063:case 1087:case 1150:case 1153:case 1168:case 1171:case 1180:case 1183:case 1186:case 1189:case 1192:case 1195:case 1198:case 1201:case 1240:case 1243:case 1246:case 1273:case 1276:i.setAttribute("style","background-image: url(../src/Background/rain.jpg); background-size: cover;");break;case 1066:case 1069:case 1073:case 1114:case 1117:case 1204:case 1207:case 1210:case 1213:case 1216:case 1219:case 1222:case 1225:case 1237:case 1249:case 1252:case 1255:case 1258:case 1261:case 1264:case 1279:case 1282:i.setAttribute("style","background-image: url(Background/snow.jpg); background-size: cover;")}document.querySelector("#currentTemperature .imperial span").textContent=n.current.temp_f+" °F",document.querySelector("#temperatureFelt .metric span").textContent=n.current.feelslike_c+" °C",document.querySelector("#temperatureFelt .imperial span").textContent=n.current.feelslike_f+" °F",document.querySelector("#humidity div .value").textContent=n.current.humidity+" %",document.querySelector("#rainChance div .value").textContent=n.forecast.forecastday[0].day.daily_chance_of_rain+" %",document.querySelector("#windSpeed .metric span").textContent=n.current.wind_kph+" Km/h",document.querySelector("#windSpeed .imperial span").textContent=n.current.wind_mph+" Mph",console.log(n)}catch{alert("Whoops, something went wrong")}}function be(e){document.querySelector("#location").value=e.target.querySelector(".locationValue").textContent;let t=document.querySelector("#dropDownHolder");for(;t.hasChildNodes();)t.removeChild(t.firstChild)}let we=document.querySelector("form button");document.querySelector("#location").addEventListener("input",(async function(){try{let e=document.querySelector("#location"),t=await fetch(`https://api.weatherapi.com/v1/search.json?key=4626ed69a3ed4fd284a194520230509&q=${e.value}`),n=await t.json(),r=document.querySelector("#dropDownHolder");for(;r.hasChildNodes();)r.removeChild(r.firstChild);if(n.length>0){let e=document.createElement("div");e.setAttribute("id","drop-down"),r.appendChild(e);for(const t of n){let n=document.createElement("div");n.classList.add("suggestion");let r=document.createElement("div");r.setAttribute("class","locationValue"),r.textContent=t.name+", "+t.country,n.appendChild(r),n.addEventListener("click",be),e.appendChild(n)}e.lastChild.classList.remove("suggestion"),e.lastChild.classList.add("lastSuggestion")}}catch{alert("Server is taking its time")}})),we.addEventListener("click",(function(){event.preventDefault();let e=document.querySelector("#location");0===e.value.length?(e.setCustomValidity("Insert a valid location"),e.reportValidity()):(e.setCustomValidity(""),e.reportValidity(),pe(e.value))})),pe("Udine")})()})();