/** @preserve https://raw.githubusercontent.com/cowboy/jquery-throttle-debounce/master/jquery.ba-throttle-debounce.min.js */
(function(b,c){var $=b.jQuery,a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/** @preserve https://github.com/ericnorris/striptags/blob/master/src/striptags.js - minified with Closure Compiler */
var striptags=function(){return function(e){e=e||"";for(var c="plaintext",a="",g=0,d="",f="",h=0,k=e.length;h<k;h++){var b=e[h];if("plaintext"===c)switch(b){case "<":c="html";a+=b;break;default:f+=b}else if("html"===c)switch(b){case "<":if(d)break;g++;break;case ">":if(d)break;if(g){g--;break}d="";c="plaintext";f+="";a="";break;case '"':case "'":d=b===d?"":d||b;a+=b;break;case "-":"<!-"===a&&(c="comment");a+=b;break;case " ":case "\n":if("<"===a){c="plaintext";f+="< ";a="";break}a+=b;break;default:a+=
b}else if("comment"===c)switch(b){case ">":"--"==a.slice(-2)&&(c="plaintext");a="";break;default:a+=b}}return f}}();

/** @preserve https://raw.githubusercontent.com/bvaughn/js-worker-search/master/dist/js-worker-search.js - minified with Closure Compiler */
var SearchApi=function(e){function b(d){if(g[d])return g[d].exports;var k=g[d]={exports:{},id:d,loaded:!1};e[d].call(k.exports,k,k.exports,b);k.loaded=!0;return k.exports}var g={};b.m=e;b.c=g;b.p="";return b(0)}([function(e,b,g){e.exports=g(1)},function(e,b,g){Object.defineProperty(b,"__esModule",{value:!0});b.INDEX_MODES=b["default"]=void 0;var d=g(2);Object.defineProperty(b,"INDEX_MODES",{enumerable:!0,get:function(){return d.INDEX_MODES}});e=g(6);b["default"]=(e&&e.__esModule?e:{"default":e})["default"]},
function(e,b,g){Object.defineProperty(b,"__esModule",{value:!0});b.INDEX_MODES=b["default"]=void 0;var d=g(3);Object.defineProperty(b,"INDEX_MODES",{enumerable:!0,get:function(){return d.INDEX_MODES}});e=g(4);b["default"]=(e&&e.__esModule?e:{"default":e})["default"]},function(e,b){Object.defineProperty(b,"__esModule",{value:!0});b.INDEX_MODES={ALL_SUBSTRINGS:"ALL_SUBSTRINGS",EXACT_WORDS:"EXACT_WORDS",PREFIXES:"PREFIXES"}},function(e,b,g){function d(c,a){void 0===a&&(a=0);a+=1;if(null===c)return"null";
if(void 0===c)return"void";if("string"===typeof c||"number"===typeof c||"boolean"===typeof c)return"undefined"===typeof c?"undefined":k(c);if(Array.isArray(c))if(0<c.length){var m=function(){if(4<a)return{v:"[...]"};var h=d(c[0],a);return c.every(function(c){return d(c,a)===h})?{v:h.trim()+"[]"}:{v:"["+c.slice(0,15).map(function(c){return d(c,a)}).join(", ")+(15<=c.length?", ...":"")+"]"}}();if("object"===("undefined"===typeof m?"undefined":k(m)))return m.v}else return"Array";else{m=Object.keys(c);
if(!m.length)return c.constructor&&c.constructor.name&&"Object"!==c.constructor.name?c.constructor.name:"Object";if(4<a)return"{...}";var n="  ".repeat(a-1),h=m.slice(0,15).map(function(h){return(/^([A-Z_$][A-Z0-9_$]*)$/i.test(h)?h:JSON.stringify(h))+": "+d(c[h],a)+";"}).join("\n  "+n);15<=m.length&&(h+="\n  "+n+"...");return c.constructor&&c.constructor.name&&"Object"!==c.constructor.name?c.constructor.name+" {\n  "+n+h+"\n"+n+"}":"{\n  "+n+h+"\n"+n+"}"}}Object.defineProperty(b,"__esModule",{value:!0});
var k=function(c){return typeof c},p=function(){function c(a,c){for(var m=0;m<c.length;m++){var h=c[m];h.enumerable=h.enumerable||!1;h.configurable=!0;"value"in h&&(h.writable=!0);Object.defineProperty(a,h.key,h)}}return function(a,m,n){m&&c(a.prototype,m);n&&c(a,n);return a}}(),l=g(3),f=(e=g(5))&&e.__esModule?e:{"default":e};
e=function(){function c(){var a=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).indexMode,a=void 0===a?l.INDEX_MODES.ALL_SUBSTRINGS:a;if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");this._indexMode=a;this.searchIndex=new f["default"];this.uids={}}p(c,[{key:"getIndexMode",value:function(){var a=this._indexMode;if("string"!==typeof a)throw new TypeError("Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n"+d(a));return a}},{key:"indexDocument",
value:function(a,m){var n=this;if("string"!==typeof m)throw new TypeError('Value of argument "text" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(m));this.uids[a]=!0;var h=this._tokenize(this._sanitize(m));if(!Array.isArray(h)||!h.every(function(a){return"string"===typeof a}))throw new TypeError('Value of variable "fieldTokens" violates contract.\n\nExpected:\nArray<string>\n\nGot:\n'+d(h));h.forEach(function(c){c=n._expandToken(c);if(!Array.isArray(c)||!c.every(function(a){return"string"===
typeof a}))throw new TypeError('Value of variable "expandedTokens" violates contract.\n\nExpected:\nArray<string>\n\nGot:\n'+d(c));c.forEach(function(c){n.searchIndex.indexDocument(c,a)})});if(!(this instanceof c))throw new TypeError("Function return value violates contract.\n\nExpected:\nSearchUtility\n\nGot:\n"+d(this));return this}},{key:"search",value:function(a){function c(a){if(!Array.isArray(a))throw new TypeError("Function return value violates contract.\n\nExpected:\nArray<any>\n\nGot:\n"+
d(a));return a}if("string"!==typeof a)throw new TypeError('Value of argument "query" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(a));if(a){a=this._tokenize(this._sanitize(a));if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError('Value of variable "tokens" violates contract.\n\nExpected:\nArray<string>\n\nGot:\n'+d(a));return c(this.searchIndex.search(a))}return c(Object.keys(this.uids))}},{key:"setIndexMode",value:function(a){if("string"!==typeof a)throw new TypeError('Value of argument "indexMode" violates contract.\n\nExpected:\nstring\n\nGot:\n'+
d(a));if(0<Object.keys(this.uids).length)throw Error("indexMode cannot be changed once documents have been indexed");this._indexMode=a}},{key:"_expandToken",value:function(a){function c(a){if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError("Function return value violates contract.\n\nExpected:\nArray<string>\n\nGot:\n"+d(a));return a}if("string"!==typeof a)throw new TypeError('Value of argument "token" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(a));
switch(this._indexMode){case l.INDEX_MODES.EXACT_WORDS:return[a];case l.INDEX_MODES.PREFIXES:return c(this._expandPrefixTokens(a));default:return c(this._expandAllSubstringTokens(a))}}},{key:"_expandAllSubstringTokens",value:function(a){if("string"!==typeof a)throw new TypeError('Value of argument "token" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(a));var c=[];try{for(var f=0,h=a.length;f<h;++f)for(var b="",l=f;l<h;++l){b+=a.charAt(l);if("string"!==typeof b)throw new TypeError('Value of variable "substring" violates contract.\n\nExpected:\nstring\n\nGot:\n'+
d(b));c.push(b)}}catch(r){console.error('Unable to parse token "'+a+'" '+r)}return function(a){if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError("Function return value violates contract.\n\nExpected:\nArray<string>\n\nGot:\n"+d(a));return a}(c)}},{key:"_expandPrefixTokens",value:function(a){if("string"!==typeof a)throw new TypeError('Value of argument "token" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(a));var c=[];try{for(var f=0,h=a.length;f<h;++f)c.push(a.substr(0,
f+1))}catch(q){console.error('Unable to parse token "'+a+'" '+q)}return function(a){if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError("Function return value violates contract.\n\nExpected:\nArray<string>\n\nGot:\n"+d(a));return a}(c)}},{key:"_sanitize",value:function(a){if("string"!==typeof a)throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(a));a=a.trim().toLocaleLowerCase();if("string"!==typeof a)throw new TypeError("Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n"+
d(a));return a}},{key:"_tokenize",value:function(a){if("string"!==typeof a)throw new TypeError('Value of argument "text" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(a));return function(a){if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError("Function return value violates contract.\n\nExpected:\nArray<string>\n\nGot:\n"+d(a));return a}(a.split(/\s+/).filter(function(a){return a}))}}]);return c}();b["default"]=e},function(e,b){function g(b,f){void 0===
f&&(f=0);f+=1;if(null===b)return"null";if(void 0===b)return"void";if("string"===typeof b||"number"===typeof b||"boolean"===typeof b)return"undefined"===typeof b?"undefined":d(b);if(Array.isArray(b))if(0<b.length){var c=function(){if(4<f)return{v:"[...]"};var a=g(b[0],f);return b.every(function(c){return g(c,f)===a})?{v:a.trim()+"[]"}:{v:"["+b.slice(0,15).map(function(a){return g(a,f)}).join(", ")+(15<=b.length?", ...":"")+"]"}}();if("object"===("undefined"===typeof c?"undefined":d(c)))return c.v}else return"Array";
else{c=Object.keys(b);if(!c.length)return b.constructor&&b.constructor.name&&"Object"!==b.constructor.name?b.constructor.name:"Object";if(4<f)return"{...}";var a="  ".repeat(f-1),m=c.slice(0,15).map(function(a){return(/^([A-Z_$][A-Z0-9_$]*)$/i.test(a)?a:JSON.stringify(a))+": "+g(b[a],f)+";"}).join("\n  "+a);15<=c.length&&(m+="\n  "+a+"...");return b.constructor&&b.constructor.name&&"Object"!==b.constructor.name?b.constructor.name+" {\n  "+a+m+"\n"+a+"}":"{\n  "+a+m+"\n"+a+"}"}}Object.defineProperty(b,
"__esModule",{value:!0});var d=function(b){return typeof b},k=function(){function b(b,c){for(var a=0;a<c.length;a++){var f=c[a];f.enumerable=f.enumerable||!1;f.configurable=!0;"value"in f&&(f.writable=!0);Object.defineProperty(b,f.key,f)}}return function(f,c,a){c&&b(f.prototype,c);a&&b(f,a);return f}}(),p=function(){function b(){if(!(this instanceof
b))throw new TypeError("Cannot call a class as a function");this.tokenToUidMap={}}k(b,[{key:"indexDocument",value:function(b,c){if("string"!==typeof b)throw new TypeError('Value of argument "token" violates contract.\n\nExpected:\nstring\n\nGot:\n'+g(b));this.tokenToUidMap[b]||(this.tokenToUidMap[b]={});this.tokenToUidMap[b][c]=c}},{key:"search",value:function(b){var c=this;if(!Array.isArray(b)||!b.every(function(a){return"string"===typeof a}))throw new TypeError('Value of argument "tokens" violates contract.\n\nExpected:\nArray<string>\n\nGot:\n'+
g(b));var a={};if(null==a||"object"!==("undefined"===typeof a?"undefined":d(a)))throw new TypeError('Value of variable "uidMap" violates contract.\n\nExpected:\n{ [uid: any]: any\n}\n\nGot:\n'+g(a));var f=!1;b.forEach(function(b){b=c.tokenToUidMap[b]||{};if(null==b||"object"!==("undefined"===typeof b?"undefined":d(b)))throw new TypeError('Value of variable "currentUidMap" violates contract.\n\nExpected:\n{ [uid: any]: any\n}\n\nGot:\n'+g(b));if(f)for(var h in a)b[h]||delete a[h];else{f=!0;for(var m in b)a[m]=
b[m]}});b=[];if(!Array.isArray(b))throw new TypeError('Value of variable "uids" violates contract.\n\nExpected:\nArray<any>\n\nGot:\n'+g(b));for(var n in a)b.push(a[n]);return function(a){if(!Array.isArray(a))throw new TypeError("Function return value violates contract.\n\nExpected:\nArray<any>\n\nGot:\n"+g(a));return a}(b)}}]);return b}();b["default"]=p},function(e,b,g){function d(c,a){void 0===a&&(a=0);a+=1;if(null===c)return"null";if(void 0===c)return"void";if("string"===typeof c||"number"===typeof c||
"boolean"===typeof c)return"undefined"===typeof c?"undefined":k(c);if(Array.isArray(c))if(0<c.length){var b=function(){if(4<a)return{v:"[...]"};var b=d(c[0],a);return c.every(function(c){return d(c,a)===b})?{v:b.trim()+"[]"}:{v:"["+c.slice(0,15).map(function(c){return d(c,a)}).join(", ")+(15<=c.length?", ...":"")+"]"}}();if("object"===("undefined"===typeof b?"undefined":k(b)))return b.v}else return"Array";else{b=Object.keys(c);if(!b.length)return c.constructor&&c.constructor.name&&"Object"!==c.constructor.name?
c.constructor.name:"Object";if(4<a)return"{...}";var f="  ".repeat(a-1),h=b.slice(0,15).map(function(b){return(/^([A-Z_$][A-Z0-9_$]*)$/i.test(b)?b:JSON.stringify(b))+": "+d(c[b],a)+";"}).join("\n  "+f);15<=b.length&&(h+="\n  "+f+"...");return c.constructor&&c.constructor.name&&"Object"!==c.constructor.name?c.constructor.name+" {\n  "+f+h+"\n"+f+"}":"{\n  "+f+h+"\n"+f+"}"}}Object.defineProperty(b,"__esModule",{value:!0});var k=
function(c){return typeof c},p=function(){function c(a,c){for(var b=0;b<c.length;b++){var h=c[b];h.enumerable=h.enumerable||!1;h.configurable=!0;"value"in h&&(h.writable=!0);Object.defineProperty(a,h.key,h)}}return function(a,b,f){b&&c(a.prototype,b);f&&c(a,f);return a}}(),l=(e=g(2))&&e.__esModule?e:{"default":e},f=(g=g(7))&&g.__esModule?g:{"default":g};g=function(){function c(){var a=(0<arguments.length&&void 0!==
arguments[0]?arguments[0]:{}).indexMode;if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");this._search="undefined"!==typeof window&&window.Worker?new f["default"]({indexMode:a}):new l["default"]({indexMode:a});this.indexDocument=this.indexDocument.bind(this);if("function"!==typeof this.indexDocument)throw new TypeError('Value of "this.indexDocument" violates contract.\n\nExpected:\n(any, string) => SearchApi\n\nGot:\n'+d(this.indexDocument));this.search=this.search.bind(this);
if("function"!==typeof this.search)throw new TypeError('Value of "this.search" violates contract.\n\nExpected:\n(string) => Promise\n\nGot:\n'+d(this.search));}p(c,[{key:"indexDocument",value:function(a,b){if("string"!==typeof b)throw new TypeError('Value of argument "text" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(b));this._search.indexDocument(a,b);if(!(this instanceof c))throw new TypeError("Function return value violates contract.\n\nExpected:\nSearchApi\n\nGot:\n"+d(this));return this}},
{key:"search",value:function(a){if("string"!==typeof a)throw new TypeError('Value of argument "query" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(a));a=Promise.resolve(this._search.search(a));if(!(a instanceof Promise))throw new TypeError("Function return value violates contract.\n\nExpected:\nPromise\n\nGot:\n"+d(a));return a}}]);return c}();b["default"]=g},function(e,b,g){Object.defineProperty(b,"__esModule",{value:!0});b["default"]=void 0;e=g(8);b["default"]=(e&&e.__esModule?e:{"default":e})["default"]},
function(e,b,g){function d(b,c){void 0===c&&(c=0);c+=1;if(null===b)return"null";if(void 0===b)return"void";if("string"===typeof b||"number"===typeof b||"boolean"===typeof b)return"undefined"===typeof b?"undefined":k(b);if(Array.isArray(b))if(0<b.length){var a=function(){if(4<c)return{v:"[...]"};var a=d(b[0],c);return b.every(function(b){return d(b,c)===a})?{v:a.trim()+"[]"}:{v:"["+b.slice(0,15).map(function(a){return d(a,c)}).join(", ")+(15<=b.length?", ...":"")+"]"}}();if("object"===("undefined"===
typeof a?"undefined":k(a)))return a.v}else return"Array";else{a=Object.keys(b);if(!a.length)return b.constructor&&b.constructor.name&&"Object"!==b.constructor.name?b.constructor.name:"Object";if(4<c)return"{...}";var f="  ".repeat(c-1),e=a.slice(0,15).map(function(a){return(/^([A-Z_$][A-Z0-9_$]*)$/i.test(a)?a:JSON.stringify(a))+": "+d(b[a],c)+";"}).join("\n  "+f);15<=a.length&&(e+="\n  "+f+"...");return b.constructor&&b.constructor.name&&"Object"!==b.constructor.name?b.constructor.name+" {\n  "+f+
e+"\n"+f+"}":"{\n  "+f+e+"\n"+f+"}"}}Object.defineProperty(b,"__esModule",{value:!0});var k=function(b){return typeof b},p=function(){function b(b,a){for(var c=0;c<a.length;c++){var d=a[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(b,d.key,d)}}return function(c,a,d){a&&
b(c.prototype,a);d&&b(c,d);return c}}(),l=(e=g(9))&&e.__esModule?e:{"default":e};e=function(){function b(){var c=this,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},f=a.indexMode,a=a.WorkerClass;if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");a||(a=g(11));this.indexDocument=this.indexDocument.bind(this);if("function"!==typeof this.indexDocument)throw new TypeError('Value of "this.indexDocument" violates contract.\n\nExpected:\n(any, string) => SearchWorkerLoader\n\nGot:\n'+
d(this.indexDocument));this.search=this.search.bind(this);if("function"!==typeof this.search)throw new TypeError('Value of "this.search" violates contract.\n\nExpected:\n(string) => Promise\n\nGot:\n'+d(this.search));this.callbackQueue=[];this.callbackIdMap={};this.worker=new a;this.worker.onerror=function(a){a=a.data;c._updateQueue({callbackId:a.callbackId,error:a.error})};this.worker.onmessage=function(a){a=a.data;c._updateQueue({callbackId:a.callbackId,results:a.results})};f&&this.worker.postMessage({method:"setIndexMode",
indexMode:f})}p(b,[{key:"indexDocument",value:function(c,a){if("string"!==typeof a)throw new TypeError('Value of argument "text" violates contract.\n\nExpected:\nstring\n\nGot:\n'+d(a));this.worker.postMessage({method:"indexDocument",text:a,uid:c});if(!(this instanceof b))throw new TypeError("Function return value violates contract.\n\nExpected:\nSearchWorkerLoader\n\nGot:\n"+d(this));return this}},{key:"search",value:function(b){var a=this;if("string"!==typeof b)throw new TypeError('Value of argument "query" violates contract.\n\nExpected:\nstring\n\nGot:\n'+
d(b));return new Promise(function(c,d){var h=l["default"].v4(),f={callbackId:h,reject:d,resolve:c};a.worker.postMessage({method:"search",query:b,callbackId:h});a.callbackQueue.push(f);a.callbackIdMap[h]=f})}},{key:"_updateQueue",value:function(b){var a=b.error,c=b.results;b=this.callbackIdMap[b.callbackId];b.complete=!0;b.error=a;for(b.results=c;this.callbackQueue.length;){a=this.callbackQueue[0];if(!a.complete)break;this.callbackQueue.shift();delete this.callbackIdMap[a.callbackId];a.error?a.reject(a.error):
a.resolve(a.results)}}}]);return b}();b["default"]=e},function(e,b,g){function d(a,b){var c=b||0,d=l;return d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]}function k(a,b,c){c=b&&c||0;"string"==typeof a&&(b="binary"==a?Array(16):null,a=null);a=a||{};a=a.random||(a.rng||p)();a[6]=a[6]&15|64;a[8]=a[8]&63|128;if(b)for(var f=0;16>f;f++)b[c+f]=a[f];return b||d(a)}var p=g(10),
l=[],f={};for(b=0;256>b;b++)l[b]=(b+256).toString(16).substr(1),f[l[b]]=b;b=p();var c=[b[0]|1,b[1],b[2],b[3],b[4],b[5]],a=(b[6]<<8|b[7])&16383,m=0,n=0;k.v1=function(b,f,e){e=f&&e||0;var g=f||[];b=b||{};var h=void 0!==b.clockseq?b.clockseq:a,k=void 0!==b.msecs?b.msecs:(new Date).getTime(),l=void 0!==b.nsecs?b.nsecs:n+1,p=k-m+(l-n)/1E4;0>p&&void 0===b.clockseq&&(h=h+1&16383);(0>p||k>m)&&void 0===b.nsecs&&(l=0);if(1E4<=l)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");m=k;n=l;a=h;k+=122192928E5;
l=(1E4*(k&268435455)+l)%4294967296;g[e++]=l>>>24&255;g[e++]=l>>>16&255;g[e++]=l>>>8&255;g[e++]=l&255;k=k/4294967296*1E4&268435455;g[e++]=k>>>8&255;g[e++]=k&255;g[e++]=k>>>24&15|16;g[e++]=k>>>16&255;g[e++]=h>>>8|128;g[e++]=h&255;b=b.node||c;for(h=0;6>h;h++)g[e+h]=b[h];return f?f:d(g)};k.v4=k;k.parse=function(a,b,c){var d=b&&c||0,e=0;b=b||[];for(a.toLowerCase().replace(/[0-9a-f]{2}/g,function(a){16>e&&(b[d+e++]=f[a])});16>e;)b[d+e++]=0;return b};k.unparse=d;e.exports=k},function(e,b){(function(b){var d,
g=b.crypto||b.msCrypto;if(g&&g.getRandomValues){var p=new Uint8Array(16);d=function(){g.getRandomValues(p);return p}}if(!d){var l=Array(16);d=function(){for(var b=0,c;16>b;b++)0===(b&3)&&(c=4294967296*Math.random()),l[b]=c>>>((b&3)<<3)&255;return l}}e.exports=d}).call(b,function(){return this}())},function(e,b,g){e.exports=function(){return g(12)('(function(g){function k(d){if(e[d])return e[d].exports;var n=e[d]={exports:{},id:d,loaded:!1};g[d].call(n.exports,n,n.exports,k);n.loaded=!0;return n.exports}var e={};k.m=g;k.c=e;k.p="";return k(0)})([function(g,k,e){g=e(1);var d=new (g&&g.__esModule?g:{"default":g})["default"];self.addEventListener("message",function(g){var e=g.data;switch(e.method){case "indexDocument":d.indexDocument(e.uid,e.text);break;case "search":g=e.callbackId;e=d.search(e.query);self.postMessage({callbackId:g,results:e});\nbreak;case "setIndexMode":d.setIndexMode(e.indexMode)}},!1)},function(g,k,e){Object.defineProperty(k,"__esModule",{value:!0});k.INDEX_MODES=k["default"]=void 0;var d=e(2);Object.defineProperty(k,"INDEX_MODES",{enumerable:!0,get:function(){return d.INDEX_MODES}});g=e(3);k["default"]=(g&&g.__esModule?g:{"default":g})["default"]},function(g,k){Object.defineProperty(k,"__esModule",{value:!0});k.INDEX_MODES={ALL_SUBSTRINGS:"ALL_SUBSTRINGS",EXACT_WORDS:"EXACT_WORDS",PREFIXES:"PREFIXES"}},function(g,k,e){function d(b,\na){void 0===a&&(a=0);a+=1;if(null===b)return"null";if(void 0===b)return"void";if("string"===typeof b||"number"===typeof b||"boolean"===typeof b)return"undefined"===typeof b?"undefined":n(b);if(Array.isArray(b))if(0<b.length){var f=function(){if(4<a)return{v:"[...]"};var f=d(b[0],a);return b.every(function(b){return d(b,a)===f})?{v:f.trim()+"[]"}:{v:"["+b.slice(0,15).map(function(b){return d(b,a)}).join(", ")+(15<=b.length?", ...":"")+"]"}}();if("object"===("undefined"===typeof f?"undefined":n(f)))return f.v}else return"Array";\nelse{f=Object.keys(b);if(!f.length)return b.constructor&&b.constructor.name&&"Object"!==b.constructor.name?b.constructor.name:"Object";if(4<a)return"{...}";var m="  ".repeat(a-1),h=f.slice(0,15).map(function(f){return(/^([A-Z_$][A-Z0-9_$]*)$/i.test(f)?f:JSON.stringify(f))+": "+d(b[f],a)+";"}).join("\\n  "+m);15<=f.length&&(h+="\\n  "+m+"...");return b.constructor&&b.constructor.name&&"Object"!==b.constructor.name?b.constructor.name+" {\\n  "+m+h+"\\n"+m+"}":"{\\n  "+m+h+"\\n"+m+"}"}}Object.defineProperty(k,\n"__esModule",{value:!0});var n=function(b){return typeof b},p=function(){function b(a,b){for(var f=0;f<b.length;f++){var h=b[f];h.enumerable=h.enumerable||!1;h.configurable=!0;"value"in h&&(h.writable=!0);Object.defineProperty(a,h.key,h)}}return function(a,f,m){f&&b(a.prototype,f);m&&b(a,m);return a}}(),c=e(2),l=(g=e(4))&&g.__esModule?\ng:{"default":g};g=function(){function b(){var a=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).indexMode,a=void 0===a?c.INDEX_MODES.ALL_SUBSTRINGS:a;if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");this._indexMode=a;this.searchIndex=new l["default"];this.uids={}}p(b,[{key:"getIndexMode",value:function(){var a=this._indexMode;if("string"!==typeof a)throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n"+d(a));return a}},\n{key:"indexDocument",value:function(a,f){var m=this;if("string"!==typeof f)throw new TypeError(\'Value of argument "text" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+d(f));this.uids[a]=!0;var h=this._tokenize(this._sanitize(f));if(!Array.isArray(h)||!h.every(function(a){return"string"===typeof a}))throw new TypeError(\'Value of variable "fieldTokens" violates contract.\\n\\nExpected:\\nArray<string>\\n\\nGot:\\n\'+d(h));h.forEach(function(b){b=m._expandToken(b);if(!Array.isArray(b)||!b.every(function(a){return"string"===\ntypeof a}))throw new TypeError(\'Value of variable "expandedTokens" violates contract.\\n\\nExpected:\\nArray<string>\\n\\nGot:\\n\'+d(b));b.forEach(function(b){m.searchIndex.indexDocument(b,a)})});if(!(this instanceof b))throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nSearchUtility\\n\\nGot:\\n"+d(this));return this}},{key:"search",value:function(a){function b(a){if(!Array.isArray(a))throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nArray<any>\\n\\nGot:\\n"+\nd(a));return a}if("string"!==typeof a)throw new TypeError(\'Value of argument "query" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+d(a));if(a){a=this._tokenize(this._sanitize(a));if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError(\'Value of variable "tokens" violates contract.\\n\\nExpected:\\nArray<string>\\n\\nGot:\\n\'+d(a));return b(this.searchIndex.search(a))}return b(Object.keys(this.uids))}},{key:"setIndexMode",value:function(a){if("string"!==typeof a)throw new TypeError(\'Value of argument "indexMode" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+\nd(a));if(0<Object.keys(this.uids).length)throw Error("indexMode cannot be changed once documents have been indexed");this._indexMode=a}},{key:"_expandToken",value:function(a){function b(a){if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nArray<string>\\n\\nGot:\\n"+d(a));return a}if("string"!==typeof a)throw new TypeError(\'Value of argument "token" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+d(a));\nswitch(this._indexMode){case c.INDEX_MODES.EXACT_WORDS:return[a];case c.INDEX_MODES.PREFIXES:return b(this._expandPrefixTokens(a));default:return b(this._expandAllSubstringTokens(a))}}},{key:"_expandAllSubstringTokens",value:function(a){if("string"!==typeof a)throw new TypeError(\'Value of argument "token" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+d(a));var b=[];try{for(var c=0,h=a.length;c<h;++c)for(var l="",e=c;e<h;++e){l+=a.charAt(e);if("string"!==typeof l)throw new TypeError(\'Value of variable "substring" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+\nd(l));b.push(l)}}catch(r){console.error(\'Unable to parse token "\'+a+\'" \'+r)}return function(a){if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nArray<string>\\n\\nGot:\\n"+d(a));return a}(b)}},{key:"_expandPrefixTokens",value:function(a){if("string"!==typeof a)throw new TypeError(\'Value of argument "token" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+d(a));var b=[];try{for(var c=0,h=a.length;c<h;++c)b.push(a.substr(0,\nc+1))}catch(q){console.error(\'Unable to parse token "\'+a+\'" \'+q)}return function(a){if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nArray<string>\\n\\nGot:\\n"+d(a));return a}(b)}},{key:"_sanitize",value:function(a){if("string"!==typeof a)throw new TypeError(\'Value of argument "string" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+d(a));a=a.trim().toLocaleLowerCase();if("string"!==typeof a)throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n"+\nd(a));return a}},{key:"_tokenize",value:function(a){if("string"!==typeof a)throw new TypeError(\'Value of argument "text" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+d(a));return function(a){if(!Array.isArray(a)||!a.every(function(a){return"string"===typeof a}))throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nArray<string>\\n\\nGot:\\n"+d(a));return a}(a.split(/\\s+/).filter(function(a){return a}))}}]);return b}();k["default"]=g},function(g,k){function e(c,l){void 0===\nl&&(l=0);l+=1;if(null===c)return"null";if(void 0===c)return"void";if("string"===typeof c||"number"===typeof c||"boolean"===typeof c)return"undefined"===typeof c?"undefined":d(c);if(Array.isArray(c))if(0<c.length){var b=function(){if(4<l)return{v:"[...]"};var a=e(c[0],l);return c.every(function(b){return e(b,l)===a})?{v:a.trim()+"[]"}:{v:"["+c.slice(0,15).map(function(a){return e(a,l)}).join(", ")+(15<=c.length?", ...":"")+"]"}}();if("object"===("undefined"===typeof b?"undefined":d(b)))return b.v}else return"Array";\nelse{b=Object.keys(c);if(!b.length)return c.constructor&&c.constructor.name&&"Object"!==c.constructor.name?c.constructor.name:"Object";if(4<l)return"{...}";var a="  ".repeat(l-1),f=b.slice(0,15).map(function(a){return(/^([A-Z_$][A-Z0-9_$]*)$/i.test(a)?a:JSON.stringify(a))+": "+e(c[a],l)+";"}).join("\\n  "+a);15<=b.length&&(f+="\\n  "+a+"...");return c.constructor&&c.constructor.name&&"Object"!==c.constructor.name?c.constructor.name+" {\\n  "+a+f+"\\n"+a+"}":"{\\n  "+a+f+"\\n"+a+"}"}}Object.defineProperty(k,\n"__esModule",{value:!0});var d=function(c){return typeof c},n=function(){function c(c,b){for(var a=0;a<b.length;a++){var d=b[a];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(c,d.key,d)}}return function(d,b,a){b&&c(d.prototype,b);a&&c(d,a);return d}}(),p=function(){function c(){if(!(this instanceof\nc))throw new TypeError("Cannot call a class as a function");this.tokenToUidMap={}}n(c,[{key:"indexDocument",value:function(d,b){if("string"!==typeof d)throw new TypeError(\'Value of argument "token" violates contract.\\n\\nExpected:\\nstring\\n\\nGot:\\n\'+e(d));this.tokenToUidMap[d]||(this.tokenToUidMap[d]={});this.tokenToUidMap[d][b]=b}},{key:"search",value:function(c){var b=this;if(!Array.isArray(c)||!c.every(function(a){return"string"===typeof a}))throw new TypeError(\'Value of argument "tokens" violates contract.\\n\\nExpected:\\nArray<string>\\n\\nGot:\\n\'+\ne(c));var a={};if(null==a||"object"!==("undefined"===typeof a?"undefined":d(a)))throw new TypeError(\'Value of variable "uidMap" violates contract.\\n\\nExpected:\\n{ [uid: any]: any\\n}\\n\\nGot:\\n\'+e(a));var f=!1;c.forEach(function(c){c=b.tokenToUidMap[c]||{};if(null==c||"object"!==("undefined"===typeof c?"undefined":d(c)))throw new TypeError(\'Value of variable "currentUidMap" violates contract.\\n\\nExpected:\\n{ [uid: any]: any\\n}\\n\\nGot:\\n\'+e(c));if(f)for(var g in a)c[g]||delete a[g];else{f=!0;for(var h in c)a[h]=\nc[h]}});c=[];if(!Array.isArray(c))throw new TypeError(\'Value of variable "uids" violates contract.\\n\\nExpected:\\nArray<any>\\n\\nGot:\\n\'+e(c));for(var g in a)c.push(a[g]);return function(a){if(!Array.isArray(a))throw new TypeError("Function return value violates contract.\\n\\nExpected:\\nArray<any>\\n\\nGot:\\n"+e(a));return a}(c)}}]);return c}();k["default"]=p}]);',
g.p+"worker.js")}},function(e,b){var g=window.URL||window.webkitURL;e.exports=function(b,e){try{try{var d;try{d=new (window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder),d.append(b),d=d.getBlob()}catch(l){d=new Blob([b])}return new Worker(g.createObjectURL(d))}catch(l){return new Worker("data:application/javascript,"+encodeURIComponent(b))}}catch(l){return new Worker(e)}}}])['default'];

(function () {
  $('<style>', {text: `
    .big-search-container {
      position: fixed;
      top: -100%; right: 0; left: 0; height: 100%;
      display: flex;
      transition: transform 0.6s 0.3s, background 0.3s;
      flex-direction: column;
    }

    .big-search-container_visible {
      transform: translateY(100%);
      background: rgba(244, 244, 244, 0.9);
      transition: transform 0.6s, background 0.3s 0.6s;
    }

    .big-search-container input {
      margin: auto 10%;
      width: 80%;
      font-size: 2em;
    }
    
    .big-search-close {
      text-align: center;
      font-size: 2em;
      padding: 0.25em;
      opacity: 0.5;
    }
    
    .big-search-container ul {
      max-height: 40%;
      transition: max-height 1.2s;
      flex-grow: 2;
      overflow: auto;
    }
    .big-search-container h2 {
      margin: 0;
    }
    .big-search-container p {
      max-height: 3em;
      overflow: hidden;
      -webkit-mask-image: linear-gradient(0deg, transparent, black 50%);
    }
    .big-search-container_hasInput ul {
      max-height: 80%;
    }
  `}).appendTo('head');
    
  var $body = $('body');
  var searchForm = $('#searchForm');
  var searchInput = $('#searchInput');
  var bigSearchForm = $('<div>', {class: 'big-search-container'}).appendTo('body');
  var bigSearchClose = $('<div>', {class: 'big-search-close'}).append('<i class="fa fa-close"></i>').appendTo(bigSearchForm);
  var bigSearchInput = $('<input>', {type: 'search', placeholder: 'O que deseja pesquisar?'}).appendTo(bigSearchForm);
  var bigSearchResults = $('<ul>').appendTo(bigSearchForm);
    
  searchForm.on('mousedown', openSearchElement);
  searchInput.on('keyup', function (evt) {
    var enteredQuery = searchInput.val();
    if (enteredQuery) {
      openSearchElement();
      bigSearchInput.val(enteredQuery);
      handleSearch();
    }
  });

  function openSearchElement(event) {  
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    
    bigSearchForm.addClass('big-search-container_visible');
    bigSearchInput.focus().on('input', $.throttle(100, handleSearch));
    
    bigSearchClose.one('click', closeSearch);
    $body.on('keydown', focusHandler);
    
    // Preload data:
    getSearchData();
  }  
    
  function focusHandler(evt) {
    if (evt.keyCode === 27 || !$.contains(bigSearchForm[0], document.activeElement)) {
      closeSearch();
    }
  }

  function closeSearch() {
    $body.off('keydown', focusHandler);
    bigSearchForm.removeClass('big-search-container_visible big-search-container_hasInput');
    bigSearchInput.add(searchInput).val('').blur();
    bigSearchResults.empty();
  } 

  function handleSearch () {
    getSearchData()
    .always(function () {
      bigSearchForm.addClass('big-search-container_hasInput');
    })
    .then(function (searchApi) {
      var query = bigSearchInput.val().trim();
      if (!query) return
      searchApi.search(query)
      .then(function (results) {
        results = results
        .slice(0, 5)
        .map(function (identifier) {        
          var post = cachedInfo[identifier]
          return $('<li>').append(
            $('<h2>').append(
              $('<a>', {href: post.url, text: post.title})
            ),
            post.escapedContent && $('<p>', {text: post.escapedContent})
          );
        });
        
        bigSearchResults.html(results.length ? results : query ? '<li><h2>Sem resultados</h2></li>' : '');
      });
    }, function () {
      bigSearchResults.html('<li><h2>Erro</h2><p>Não foi possível abrir a pesquisa</p></li>');
    });
  }

  var cachedData;
  var cachedInfo = {};
  function getSearchData() {
    if (cachedData) return cachedData;
    var deferred = $.Deferred();
    $.ajax({
      url: 'https://qgustavor.github.io/blog/search-index.json',
      dataType: 'json',
      cache: true
    }).then(function (data) {
      var searchApi = new SearchApi()
      data.forEach(function (post) {
        post.escapedContent = striptags(post.content);
        cachedInfo[post.url] = post;
        searchApi.indexDocument(post.url, [post.title, post.escapedContent].join('|'));
      });
      deferred.resolve(searchApi);
    }, deferred.reject);
    cachedData = deferred.promise();
    return cachedData
  }
}());