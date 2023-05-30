var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}function n(t,e){return function(){return t.apply(e,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:r}=Object,s=(o=Object.create(null),t=>{const e=i.call(t);return o[e]||(o[e]=e.slice(8,-1).toLowerCase())});var o;const a=t=>(t=t.toLowerCase(),e=>s(e)===t),c=t=>e=>typeof e===t,{isArray:l}=Array,u=c("undefined");const h=a("ArrayBuffer");const d=c("string"),f=c("function"),p=c("number"),m=t=>null!==t&&"object"==typeof t,g=t=>{if("object"!==s(t))return!1;const e=r(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},y=a("Date"),v=a("File"),b=a("Blob"),w=a("FileList"),x=a("URLSearchParams");function k(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),l(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function E(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,I=t=>!u(t)&&t!==_;const T=(S="undefined"!=typeof Uint8Array&&r(Uint8Array),t=>S&&t instanceof S);var S;const C=a("HTMLFormElement"),N=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),A=a("RegExp"),R=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};k(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},L={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var O={isArray:l,isArrayBuffer:h,isBuffer:function(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&f(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||i.call(t)===e||f(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&h(t.buffer),e},isString:d,isNumber:p,isBoolean:t=>!0===t||!1===t,isObject:m,isPlainObject:g,isUndefined:u,isDate:y,isFile:v,isBlob:b,isRegExp:A,isFunction:f,isStream:t=>m(t)&&f(t.pipe),isURLSearchParams:x,isTypedArray:T,isFileList:w,forEach:k,merge:function t(){const{caseless:e}=I(this)&&this||{},n={},i=(i,r)=>{const s=e&&E(n,r)||r;g(n[s])&&g(i)?n[s]=t(n[s],i):g(i)?n[s]=t({},i):l(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&k(arguments[t],i);return n},extend:(t,e,i,{allOwnKeys:r}={})=>(k(e,((e,r)=>{i&&f(e)?t[r]=n(e,i):t[r]=e}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let s,o,a;const c={};if(e=e||{},null==t)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)a=s[o],i&&!i(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&r(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:s,kindOfTest:a,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(l(t))return t;let e=t.length;if(!p(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:C,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:R,freezeMethods:t=>{R(t,((e,n)=>{if(f(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];f(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return l(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:E,global:_,isContextDefined:I,ALPHABET:L,generateString:(t=16,e=L.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&f(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(m(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=l(t)?[]:{};return k(t,((t,e)=>{const s=n(t,i+1);!u(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)}};function D(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}O.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=D.prototype,P={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{P[t]={value:t}})),Object.defineProperties(D,P),Object.defineProperty(M,"isAxiosError",{value:!0}),D.from=(t,e,n,i,r,s)=>{const o=Object.create(M);return O.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),D.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var B,U,F,z=D;U=function(t){var e,n,i=X(t),r=i[0],s=i[1],o=new $(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)e=W[t.charCodeAt(n)]<<18|W[t.charCodeAt(n+1)]<<12|W[t.charCodeAt(n+2)]<<6|W[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=W[t.charCodeAt(n)]<<2|W[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=W[t.charCodeAt(n)]<<10|W[t.charCodeAt(n+1)]<<4|W[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},F=function(t){for(var e,n=t.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(Q(t,o,o+s>a?a:o+s));1===i?(e=t[n-1],r.push(q[e>>2]+q[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var j,V,q=[],W=[],$="undefined"!=typeof Uint8Array?Uint8Array:Array,H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",K=0,G=H.length;K<G;++K)q[K]=H[K],W[H.charCodeAt(K)]=K;function X(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function Q(t,e,n){for(var i,r,s=[],o=e;o<n;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(q[(r=i)>>18&63]+q[r>>12&63]+q[r>>6&63]+q[63&r]);return s.join("")}W["-".charCodeAt(0)]=62,W["_".charCodeAt(0)]=63,j=function(t,e,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+t[e+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+t[e+h],h+=d,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=l}return(f?-1:1)*o*Math.pow(2,s-i)},V=function(t,e,n,i,r,s){var o,a,c,l=8*s-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(e*c-1)*Math.pow(2,r),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;t[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;t[n+f]=255&o,f+=p,o/=256,l-=8);t[n+f-p]|=128*m};const J="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;B=Z;function Y(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Z.prototype),e}function Z(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return nt(t)}return tt(t,e,n)}function tt(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Z.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|ot(t,e);let i=Y(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Ft(t,Uint8Array)){const e=new Uint8Array(t);return rt(e.buffer,e.byteOffset,e.byteLength)}return it(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Ft(t,ArrayBuffer)||t&&Ft(t.buffer,ArrayBuffer))return rt(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Ft(t,SharedArrayBuffer)||t&&Ft(t.buffer,SharedArrayBuffer)))return rt(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return Z.from(i,e,n);const r=function(t){if(Z.isBuffer(t)){const e=0|st(t.length),n=Y(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||zt(t.length)?Y(0):it(t);if("Buffer"===t.type&&Array.isArray(t.data))return it(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Z.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function et(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function nt(t){return et(t),Y(t<0?0:0|st(t))}function it(t){const e=t.length<0?0:0|st(t.length),n=Y(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function rt(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,Z.prototype),i}function st(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function ot(t,e){if(Z.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Ft(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Pt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Bt(t).length;default:if(r)return i?-1:Pt(t).length;e=(""+e).toLowerCase(),r=!0}}function at(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return wt(this,e,n);case"utf8":case"utf-8":return yt(this,e,n);case"ascii":return vt(this,e,n);case"latin1":case"binary":return bt(this,e,n);case"base64":return gt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xt(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function ct(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function lt(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),zt(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=Z.from(e,i)),Z.isBuffer(e))return 0===e.length?-1:ut(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):ut(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function ut(t,e,n,i,r){let s,o=1,a=t.length,c=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(t,s)===l(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(t,s+i)!==l(e,i)){n=!1;break}if(n)return s}return-1}function ht(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=e.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(e.substr(2*o,2),16);if(zt(i))return o;t[n+o]=i}return o}function dt(t,e,n,i){return Ut(Pt(e,t.length-n),t,n,i)}function ft(t,e,n,i){return Ut(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function pt(t,e,n,i){return Ut(Bt(e),t,n,i)}function mt(t,e,n,i){return Ut(function(t,e){let n,i,r;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(e,t.length-n),t,n,i)}function gt(t,e,n){return 0===e&&n===t.length?F(t):F(t.slice(e,n))}function yt(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[r+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(c=(15&e)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}Z.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Z.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Z.prototype,"parent",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.buffer}}),Object.defineProperty(Z.prototype,"offset",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.byteOffset}}),Z.poolSize=8192,Z.from=function(t,e,n){return tt(t,e,n)},Object.setPrototypeOf(Z.prototype,Uint8Array.prototype),Object.setPrototypeOf(Z,Uint8Array),Z.alloc=function(t,e,n){return function(t,e,n){return et(t),t<=0?Y(t):void 0!==e?"string"==typeof n?Y(t).fill(e,n):Y(t).fill(e):Y(t)}(t,e,n)},Z.allocUnsafe=function(t){return nt(t)},Z.allocUnsafeSlow=function(t){return nt(t)},Z.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Z.prototype},Z.compare=function(t,e){if(Ft(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),Ft(e,Uint8Array)&&(e=Z.from(e,e.offset,e.byteLength)),!Z.isBuffer(t)||!Z.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},Z.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Z.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Z.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=Z.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Ft(e,Uint8Array))r+e.length>i.length?(Z.isBuffer(e)||(e=Z.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!Z.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},Z.byteLength=ot,Z.prototype._isBuffer=!0,Z.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ct(this,e,e+1);return this},Z.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ct(this,e,e+3),ct(this,e+1,e+2);return this},Z.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ct(this,e,e+7),ct(this,e+1,e+6),ct(this,e+2,e+5),ct(this,e+3,e+4);return this},Z.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?yt(this,0,t):at.apply(this,arguments)},Z.prototype.toLocaleString=Z.prototype.toString,Z.prototype.equals=function(t){if(!Z.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Z.compare(this,t)},Z.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},J&&(Z.prototype[J]=Z.prototype.inspect),Z.prototype.compare=function(t,e,n,i,r){if(Ft(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),!Z.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==l[t]){s=c[t],o=l[t];break}return s<o?-1:o<s?1:0},Z.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Z.prototype.indexOf=function(t,e,n){return lt(this,t,e,n,!0)},Z.prototype.lastIndexOf=function(t,e,n){return lt(this,t,e,n,!1)},Z.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return ht(this,t,e,n);case"utf8":case"utf-8":return dt(this,t,e,n);case"ascii":case"latin1":case"binary":return ft(this,t,e,n);case"base64":return pt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mt(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},Z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function vt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function bt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function wt(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=jt[t[i]];return r}function xt(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function kt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function Et(t,e,n,i,r,s){if(!Z.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function _t(t,e,n,i,r){Lt(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function It(t,e,n,i,r){Lt(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function Tt(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function St(t,e,n,i,r){return e=+e,n>>>=0,r||Tt(t,0,n,4),V(t,e,n,i,23,4),n+4}function Ct(t,e,n,i,r){return e=+e,n>>>=0,r||Tt(t,0,n,8),V(t,e,n,i,52,8),n+8}Z.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,Z.prototype),i},Z.prototype.readUintLE=Z.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||kt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},Z.prototype.readUintBE=Z.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||kt(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},Z.prototype.readUint8=Z.prototype.readUInt8=function(t,e){return t>>>=0,e||kt(t,1,this.length),this[t]},Z.prototype.readUint16LE=Z.prototype.readUInt16LE=function(t,e){return t>>>=0,e||kt(t,2,this.length),this[t]|this[t+1]<<8},Z.prototype.readUint16BE=Z.prototype.readUInt16BE=function(t,e){return t>>>=0,e||kt(t,2,this.length),this[t]<<8|this[t+1]},Z.prototype.readUint32LE=Z.prototype.readUInt32LE=function(t,e){return t>>>=0,e||kt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Z.prototype.readUint32BE=Z.prototype.readUInt32BE=function(t,e){return t>>>=0,e||kt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Z.prototype.readBigUInt64LE=Vt((function(t){Ot(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Z.prototype.readBigUInt64BE=Vt((function(t){Ot(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Z.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||kt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},Z.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||kt(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*e)),s},Z.prototype.readInt8=function(t,e){return t>>>=0,e||kt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Z.prototype.readInt16LE=function(t,e){t>>>=0,e||kt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt16BE=function(t,e){t>>>=0,e||kt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt32LE=function(t,e){return t>>>=0,e||kt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Z.prototype.readInt32BE=function(t,e){return t>>>=0,e||kt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Z.prototype.readBigInt64LE=Vt((function(t){Ot(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Z.prototype.readBigInt64BE=Vt((function(t){Ot(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Z.prototype.readFloatLE=function(t,e){return t>>>=0,e||kt(t,4,this.length),j(this,t,!0,23,4)},Z.prototype.readFloatBE=function(t,e){return t>>>=0,e||kt(t,4,this.length),j(this,t,!1,23,4)},Z.prototype.readDoubleLE=function(t,e){return t>>>=0,e||kt(t,8,this.length),j(this,t,!0,52,8)},Z.prototype.readDoubleBE=function(t,e){return t>>>=0,e||kt(t,8,this.length),j(this,t,!1,52,8)},Z.prototype.writeUintLE=Z.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Et(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},Z.prototype.writeUintBE=Z.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Et(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},Z.prototype.writeUint8=Z.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,1,255,0),this[e]=255&t,e+1},Z.prototype.writeUint16LE=Z.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeUint16BE=Z.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeUint32LE=Z.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Z.prototype.writeUint32BE=Z.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigUInt64LE=Vt((function(t,e=0){return _t(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeBigUInt64BE=Vt((function(t,e=0){return It(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Et(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},Z.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Et(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},Z.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Z.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Z.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigInt64LE=Vt((function(t,e=0){return _t(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeBigInt64BE=Vt((function(t,e=0){return It(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeFloatLE=function(t,e,n){return St(this,t,e,!0,n)},Z.prototype.writeFloatBE=function(t,e,n){return St(this,t,e,!1,n)},Z.prototype.writeDoubleLE=function(t,e,n){return Ct(this,t,e,!0,n)},Z.prototype.writeDoubleBE=function(t,e,n){return Ct(this,t,e,!1,n)},Z.prototype.copy=function(t,e,n,i){if(!Z.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},Z.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Z.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const s=Z.isBuffer(t)?t:Z.from(t,i),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};const Nt={};function At(t,e,n){Nt[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function Rt(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Lt(t,e,n,i,r,s){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=s>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new Nt.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Ot(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Dt(e,t.length-(n+1))}(i,r,s)}function Ot(t,e){if("number"!=typeof t)throw new Nt.ERR_INVALID_ARG_TYPE(e,"number",t)}function Dt(t,e,n){if(Math.floor(t)!==t)throw Ot(t,n),new Nt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new Nt.ERR_BUFFER_OUT_OF_BOUNDS;throw new Nt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}At("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),At("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),At("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Rt(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Rt(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const Mt=/[^+/0-9A-Za-z-_]/g;function Pt(t,e){let n;e=e||1/0;const i=t.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Bt(t){return U(function(t){if((t=(t=t.split("=")[0]).trim().replace(Mt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Ut(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Ft(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function zt(t){return t!=t}const jt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function Vt(t){return"undefined"==typeof BigInt?qt:t}function qt(){throw new Error("BigInt not supported")}var Wt=B;function $t(t){return O.isPlainObject(t)||O.isArray(t)}function Ht(t){return O.endsWith(t,"[]")?t.slice(0,-2):t}function Kt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Ht(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Gt=O.toFlatObject(O,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Xt=function(t,e,n){if(!O.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(n=O.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!O.isUndefined(e[t])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&O.isSpecCompliantForm(e);if(!O.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(O.isDate(t))return t.toISOString();if(!a&&O.isBlob(t))throw new z("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(t)||O.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Wt.from(t):t}function l(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(O.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(O.isArray(t)&&function(t){return O.isArray(t)&&!t.some($t)}(t)||(O.isFileList(t)||O.endsWith(n,"[]"))&&(a=O.toArray(t)))return n=Ht(n),a.forEach((function(t,i){!O.isUndefined(t)&&null!==t&&e.append(!0===o?Kt([n],i,s):null===o?n:n+"[]",c(t))})),!1;return!!$t(t)||(e.append(Kt(r,n,s),c(t)),!1)}const u=[],h=Object.assign(Gt,{defaultVisitor:l,convertValue:c,isVisitable:$t});if(!O.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!O.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),O.forEach(n,(function(n,s){!0===(!(O.isUndefined(n)||null===n)&&r.call(e,n,O.isString(s)?s.trim():s,i,h))&&t(n,i?i.concat(s):[s])})),u.pop()}}(t),e};function Qt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Jt(t,e){this._pairs=[],t&&Xt(t,this,e)}const Yt=Jt.prototype;Yt.append=function(t,e){this._pairs.push([t,e])},Yt.toString=function(t){const e=t?function(e){return t.call(this,e,Qt)}:Qt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Zt=Jt;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(t,e,n){if(!e)return t;const i=n&&n.encode||te,r=n&&n.serialize;let s;if(s=r?r(e,n):O.isURLSearchParams(e)?e.toString():new Zt(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var ne=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){O.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var re={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Zt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function se(t,e){return Xt(t,new re.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return re.isNode&&O.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var oe=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&O.isArray(i)?i.length:s,a)return O.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&O.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&O.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(O.isFormData(t)&&O.isFunction(t.entries)){const n={};return O.forEachEntry(t,((t,i)=>{e(function(t){return O.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const ae={"Content-Type":void 0};const ce={transitional:ie,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=O.isObject(t);r&&O.isHTMLForm(t)&&(t=new FormData(t));if(O.isFormData(t))return i&&i?JSON.stringify(oe(t)):t;if(O.isArrayBuffer(t)||O.isBuffer(t)||O.isStream(t)||O.isFile(t)||O.isBlob(t))return t;if(O.isArrayBufferView(t))return t.buffer;if(O.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return se(t,this.formSerializer).toString();if((s=O.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Xt(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(O.isString(t))try{return(e||JSON.parse)(t),O.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||ce.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&O.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw z.from(t,z.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};O.forEach(["delete","get","head"],(function(t){ce.headers[t]={}})),O.forEach(["post","put","patch"],(function(t){ce.headers[t]=O.merge(ae)}));var le=ce;const ue=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var he=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&ue[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const de=Symbol("internals");function fe(t){return t&&String(t).trim().toLowerCase()}function pe(t){return!1===t||null==t?t:O.isArray(t)?t.map(pe):String(t)}function me(t,e,n,i,r){return O.isFunction(i)?i.call(this,e,n):(r&&(e=n),O.isString(e)?O.isString(i)?-1!==e.indexOf(i):O.isRegExp(i)?i.test(e):void 0:void 0)}class ge{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function r(t,e,n){const r=fe(e);if(!r)throw new Error("header name must be a non-empty string");const s=O.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=pe(t))}const s=(t,e)=>O.forEach(t,((t,n)=>r(t,n,e)));return O.isPlainObject(t)||t instanceof this.constructor?s(t,e):O.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s(he(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=fe(t)){const n=O.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(O.isFunction(e))return e.call(this,t,n);if(O.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=fe(t)){const n=O.findKey(this,t);return!(!n||void 0===this[n]||e&&!me(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=fe(t)){const r=O.findKey(n,t);!r||e&&!me(0,n[r],r,e)||(delete n[r],i=!0)}}return O.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!me(0,this[r],r,t,!0)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return O.forEach(this,((i,r)=>{const s=O.findKey(n,r);if(s)return e[s]=pe(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=pe(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return O.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&O.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[de]=this[de]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=fe(t);e[i]||(!function(t,e){const n=O.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return O.isArray(t)?t.forEach(i):i(t),this}}ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),O.freezeMethods(ge.prototype),O.freezeMethods(ge);var ye=ge;function ve(t,e){const n=this||le,i=e||n,r=ye.from(i.headers);let s=i.data;return O.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function be(t){return!(!t||!t.__CANCEL__)}function we(t,e,n){z.call(this,null==t?"canceled":t,z.ERR_CANCELED,e,n),this.name="CanceledError"}O.inherits(we,z,{__CANCEL__:!0});var xe=we;function ke(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Ee=re.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),O.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),O.isString(i)&&o.push("path="+i),O.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function _e(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ie(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?_e(t,e):e}var Te=re.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=O.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Se(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Ce=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-r<e)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function Ne(t,e){let n=0;const i=Ce(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[e?"download":"upload"]=!0,t(l)}}const Ae={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=ye.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}O.isFormData(i)&&(re.isStandardBrowserEnv||re.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const l=Ie(t.baseURL,t.url);function u(){if(!c)return;const i=ye.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());ke((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),ee(l,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new z("Request aborted",z.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new z("Network Error",z.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||ie;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new z(e,i.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,c)),c=null},re.isStandardBrowserEnv){const e=(t.withCredentials||Te(l))&&t.xsrfCookieName&&Ee.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&O.forEach(r.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),O.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",Ne(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ne(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new xe(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=Se(l);h&&-1===re.protocols.indexOf(h)?n(new z("Unsupported protocol "+h+":",z.ERR_BAD_REQUEST,t)):c.send(i||null)}))}};O.forEach(Ae,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Re={getAdapter:t=>{t=O.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=O.isString(n)?Ae[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(O.hasOwnProp(Ae,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!O.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Ae};function Le(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new xe(null,t)}function Oe(t){Le(t),t.headers=ye.from(t.headers),t.data=ve.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Re.getAdapter(t.adapter||le.adapter)(t).then((function(e){return Le(t),e.data=ve.call(t,t.transformResponse,e),e.headers=ye.from(e.headers),e}),(function(e){return be(e)||(Le(t),e&&e.response&&(e.response.data=ve.call(t,t.transformResponse,e.response),e.response.headers=ye.from(e.response.headers))),Promise.reject(e)}))}const De=t=>t instanceof ye?t.toJSON():t;function Me(t,e){e=e||{};const n={};function i(t,e,n){return O.isPlainObject(t)&&O.isPlainObject(e)?O.merge.call({caseless:n},t,e):O.isPlainObject(e)?O.merge({},e):O.isArray(e)?e.slice():e}function r(t,e,n){return O.isUndefined(e)?O.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!O.isUndefined(e))return i(void 0,e)}function o(t,e){return O.isUndefined(e)?O.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(De(t),De(e),!0)};return O.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const s=c[i]||r,o=s(t[i],e[i],i);O.isUndefined(o)&&s!==a||(n[i]=o)})),n}const Pe={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Pe[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Be={};Pe.transitional=function(t,e,n){function i(t,e){return"[Axios v1.3.5] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new z(i(r," has been removed"+(e?" in "+e:"")),z.ERR_DEPRECATED);return e&&!Be[r]&&(Be[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var Ue={assertOptions:function(t,e,n){if("object"!=typeof t)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new z("option "+s+" must be "+n,z.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new z("Unknown option "+s,z.ERR_BAD_OPTION)}},validators:Pe};const Fe=Ue.validators;class ze{constructor(t){this.defaults=t,this.interceptors={request:new ne,response:new ne}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Me(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&Ue.assertOptions(n,{silentJSONParsing:Fe.transitional(Fe.boolean),forcedJSONParsing:Fe.transitional(Fe.boolean),clarifyTimeoutError:Fe.transitional(Fe.boolean)},!1),null!=i&&(O.isFunction(i)?e.paramsSerializer={serialize:i}:Ue.assertOptions(i,{encode:Fe.function,serialize:Fe.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&O.merge(r.common,r[e.method]),s&&O.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=ye.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let u,h=0;if(!a){const t=[Oe.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),u=t.length,l=Promise.resolve(e);h<u;)l=l.then(t[h++],t[h++]);return l}u=o.length;let d=e;for(h=0;h<u;){const t=o[h++],e=o[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{l=Oe.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(t){return ee(Ie((t=Me(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}O.forEach(["delete","get","head","options"],(function(t){ze.prototype[t]=function(e,n){return this.request(Me(n||{},{method:t,url:e,data:(n||{}).data}))}})),O.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(Me(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}ze.prototype[t]=e(),ze.prototype[t+"Form"]=e(!0)}));var je=ze;class Ve{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new xe(t,i,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Ve((function(e){t=e})),cancel:t}}}var qe=Ve;const We={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(We).forEach((([t,e])=>{We[e]=t}));var $e=We;const He=function t(e){const i=new je(e),r=n(je.prototype.request,i);return O.extend(r,je.prototype,i,{allOwnKeys:!0}),O.extend(r,i,null,{allOwnKeys:!0}),r.create=function(n){return t(Me(e,n))},r}(le);He.Axios=je,He.CanceledError=xe,He.CancelToken=qe,He.isCancel=be,He.VERSION="1.3.5",He.toFormData=Xt,He.AxiosError=z,He.Cancel=He.CanceledError,He.all=function(t){return Promise.all(t)},He.spread=function(t){return function(e){return t.apply(null,e)}},He.isAxiosError=function(t){return O.isObject(t)&&!0===t.isAxiosError},He.mergeConfig=Me,He.AxiosHeaders=ye,He.formToJSON=t=>oe(O.isHTMLForm(t)?new FormData(t):t),He.HttpStatusCode=$e,He.default=He;var Ke=He;const{Axios:Ge,AxiosError:Xe,CanceledError:Qe,isCancel:Je,CancelToken:Ye,VERSION:Ze,all:tn,Cancel:en,isAxiosError:nn,spread:rn,toFormData:sn,AxiosHeaders:on,HttpStatusCode:an,formToJSON:cn,mergeConfig:ln}=Ke,un=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],hn=t=>{if(t.length>0){const e=[];return t.forEach((t=>{const n=(t=>{const e=un.find((e=>e.id===t));return e?e.name:""})(t);n&&e.push(n)})),e.join(", ")}return""};const dn=async(t,e=1)=>{const n=t?`https://api.themoviedb.org/3/search/movie?api_key=731f4a410992078035fa504a629d03c1&language=en-US&query=${t}&page=${e}`:`https://api.themoviedb.org/3/trending/all/day?api_key=731f4a410992078035fa504a629d03c1&page=${e}`;try{const t=await Ke.get(n),e=t=>t.filter((t=>t.poster_path&&t.genre_ids&&t.id&&t.release_date&&(t.title||t.original_title))).map((({genre_ids:t,id:e,poster_path:n,release_date:i="",title:r,original_title:s})=>({genres:hn(t),id:e,poster_path:`https://image.tmdb.org/t/p/w500${n}`,year:i.slice(0,4),title:r||(s||"The title is shown above")})));return{page:t.data.page,results:e(t.data.results),total_pages:t.data.total_pages}}catch(t){throw new Error(responce.status)}},fn=async t=>{try{const e=await Ke.get(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=731f4a410992078035fa504a629d03c1&language=en-US`);return e.data.results[0]?e.data.results[0].key:""}catch(t){throw new Error(responce.status)}},pn=async t=>{try{const e=await Ke.get(`https://api.themoviedb.org/3/movie/${t}?api_key=731f4a410992078035fa504a629d03c1&language=en-US`),{genres:n,id:i,poster_path:r,original_title:s,overview:o,popularity:a,vote_average:c,vote_count:l}=e.data;return{genres:n.map((t=>t.name)).join(", "),id:i,poster_path:`https://image.tmdb.org/t/p/w500${r}`,original_title:s,overview:o,popularity:a,vote_average:c,vote_count:l,videoId:await fn(t)}}catch(t){throw new Error(responce.status)}};var mn=!1;if("undefined"!=typeof window){var gn={get passive(){mn=!0}};window.addEventListener("testPassive",null,gn),window.removeEventListener("testPassive",null,gn)}var yn="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),vn=[],bn=!1,wn=-1,xn=void 0,kn=void 0,En=void 0,_n=function(t){return vn.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},In=function(t){var e=t||window.event;return!!_n(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},Tn=function(){void 0!==En&&(document.body.style.paddingRight=En,En=void 0),void 0!==xn&&(document.body.style.overflow=xn,xn=void 0)},Sn=function(){if(void 0!==kn){var t=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=kn.position,document.body.style.top=kn.top,document.body.style.left=kn.left,window.scrollTo(e,t),kn=void 0}},Cn=function(t,e){if(t){if(!vn.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};vn=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(vn),[n]),yn?window.requestAnimationFrame((function(){if(void 0===kn){kn={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,e=t.scrollY,n=t.scrollX,i=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var t=i-window.innerHeight;t&&e>=i&&(document.body.style.top=-(e+t))}))}),300)}})):function(t){if(void 0===En){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(e&&n>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);En=document.body.style.paddingRight,document.body.style.paddingRight=i+n+"px"}}void 0===xn&&(xn=document.body.style.overflow,document.body.style.overflow="hidden")}(e),yn&&(t.ontouchstart=function(t){1===t.targetTouches.length&&(wn=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var n=t.targetTouches[0].clientY-wn;!_n(t.target)&&(e&&0===e.scrollTop&&n>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&n<0?In(t):t.stopPropagation())}(e,t)},bn||(document.addEventListener("touchmove",In,mn?{passive:!1}:void 0),bn=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},Nn=function(t){t?(vn=vn.filter((function(e){return e.targetElement!==t})),yn&&(t.ontouchstart=null,t.ontouchmove=null,bn&&0===vn.length&&(document.removeEventListener("touchmove",In,mn?{passive:!1}:void 0),bn=!1)),yn?Sn():Tn()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function An(t,e,n){t.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();const n=t.getAttribute("data-modal");document.querySelector('[data-modal="'+n+'"]:not(button):not(a)').closest(".js-overlay-modal").classList.remove("is-hidden"),document.addEventListener("keydown",Rn),Cn(document.body)}))})),n.forEach((function(t){t.addEventListener("click",(function(e){t.closest(".js-overlay-modal").classList.add("is-hidden"),t.classList.contains("js-open-modal")||(document.removeEventListener("keydown",Rn),Nn(document.body))})),e.forEach((t=>{t.addEventListener("click",(function(e){e.target===e.currentTarget&&(t.classList.add("is-hidden"),document.removeEventListener("keydown",Rn),Nn(document.body))}))}))}))}function Rn(t){if("Escape"===t.key){document.querySelector(".js-overlay-modal:not(.is-hidden)").classList.add("is-hidden"),Nn(document.body)}}class Ln{createIframe(t){const e=document.createElement("iframe");return e.setAttribute("allowfullscreen",""),e.setAttribute("allow","accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),e.setAttribute("src",this.generateURL(t)),e.classList.add("video"),e}generateURL(t){return`https://www.youtube.com/embed/${t}?rel=0&showinfo=0&autoplay=1`}}function On(t){const e=localStorage.getItem(`${t}`),n=JSON.parse(e);return n||[]}function Dn(t,e){const n=On(t);if(n.some((t=>t.id===e.id)))return;n.push(e);const i=JSON.stringify(n);localStorage.setItem(`${t}`,i)}function Mn(t,e){const n=On(t),i=n.findIndex((t=>t.id===e.id));if(-1===i)return;n.splice(i,1);const r=JSON.stringify(n);localStorage.setItem(`${t}`,r)}var Pn,Bn,Un,Fn=Pn={};function zn(){throw new Error("setTimeout has not been defined")}function jn(){throw new Error("clearTimeout has not been defined")}function Vn(t){if(Bn===setTimeout)return setTimeout(t,0);if((Bn===zn||!Bn)&&setTimeout)return Bn=setTimeout,setTimeout(t,0);try{return Bn(t,0)}catch(e){try{return Bn.call(null,t,0)}catch(e){return Bn.call(this,t,0)}}}!function(){try{Bn="function"==typeof setTimeout?setTimeout:zn}catch(t){Bn=zn}try{Un="function"==typeof clearTimeout?clearTimeout:jn}catch(t){Un=jn}}();var qn,Wn=[],$n=!1,Hn=-1;function Kn(){$n&&qn&&($n=!1,qn.length?Wn=qn.concat(Wn):Hn=-1,Wn.length&&Gn())}function Gn(){if(!$n){var t=Vn(Kn);$n=!0;for(var e=Wn.length;e;){for(qn=Wn,Wn=[];++Hn<e;)qn&&qn[Hn].run();Hn=-1,e=Wn.length}qn=null,$n=!1,function(t){if(Un===clearTimeout)return clearTimeout(t);if((Un===jn||!Un)&&clearTimeout)return Un=clearTimeout,clearTimeout(t);try{Un(t)}catch(e){try{return Un.call(null,t)}catch(e){return Un.call(this,t)}}}(t)}}function Xn(t,e){this.fun=t,this.array=e}function Qn(){}Fn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Wn.push(new Xn(t,e)),1!==Wn.length||$n||Vn(Gn)},Xn.prototype.run=function(){this.fun.apply(null,this.array)},Fn.title="browser",Fn.browser=!0,Fn.env={},Fn.argv=[],Fn.version="",Fn.versions={},Fn.on=Qn,Fn.addListener=Qn,Fn.once=Qn,Fn.off=Qn,Fn.removeListener=Qn,Fn.removeAllListeners=Qn,Fn.emit=Qn,Fn.prependListener=Qn,Fn.prependOnceListener=Qn,Fn.listeners=function(t){return[]},Fn.binding=function(t){throw new Error("process.binding is not supported")},Fn.cwd=function(){return"/"},Fn.chdir=function(t){throw new Error("process.chdir is not supported")},Fn.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jn=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},Yn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new Zn;const c=r<<2|s>>4;if(i.push(c),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ti=function(t){return function(t){const e=Jn(t);return Yn.encodeByteArray(e,!0)}(t).replace(/\./g,"")},ei=function(t){try{return Yn.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ni=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ii=()=>{try{return ni()||(()=>{if(void 0===Pn||void 0===Pn.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&ei(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},ri=t=>{var e,n;return null===(n=null===(e=ii())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},si=t=>{const e=ri(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},oi=t=>{var e;return null===(e=ii())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ai{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ti(JSON.stringify({alg:"none",type:"JWT"})),ti(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ui(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function hi(){const t=li();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function di(){try{return"object"==typeof indexedDB}catch(t){return!1}}class fi extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(mi,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new fi(i,o,n)}}const mi=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(vi(n)&&vi(s)){if(!yi(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function vi(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){const n=new Ei(t,e);return n.subscribe.bind(n)}class Ei{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=_i),void 0===i.error&&(i.error=_i),void 0===i.complete&&(i.complete=_i);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function _i(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(t){return t&&t._delegate?t._delegate:t}class Ti{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new ai;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ci{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Si(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=[];var Ai,Ri;(Ri=Ai||(Ai={}))[Ri.DEBUG=0]="DEBUG",Ri[Ri.VERBOSE=1]="VERBOSE",Ri[Ri.INFO=2]="INFO",Ri[Ri.WARN=3]="WARN",Ri[Ri.ERROR=4]="ERROR",Ri[Ri.SILENT=5]="SILENT";const Li={debug:Ai.DEBUG,verbose:Ai.VERBOSE,info:Ai.INFO,warn:Ai.WARN,error:Ai.ERROR,silent:Ai.SILENT},Oi=Ai.INFO,Di={[Ai.DEBUG]:"log",[Ai.VERBOSE]:"log",[Ai.INFO]:"info",[Ai.WARN]:"warn",[Ai.ERROR]:"error"},Mi=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=Di[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class Pi{constructor(t){this.name=t,this._logLevel=Oi,this._logHandler=Mi,this._userLogHandler=null,Ni.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ai))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Li[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ai.DEBUG,...t),this._logHandler(this,Ai.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ai.VERBOSE,...t),this._logHandler(this,Ai.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ai.INFO,...t),this._logHandler(this,Ai.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ai.WARN,...t),this._logHandler(this,Ai.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ai.ERROR,...t),this._logHandler(this,Ai.ERROR,...t)}}let Bi,Ui;const Fi=new WeakMap,zi=new WeakMap,ji=new WeakMap,Vi=new WeakMap,qi=new WeakMap;let Wi={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return zi.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ji.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ki(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function $i(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ui||(Ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Gi(this),e),Ki(Fi.get(this))}:function(...e){return Ki(t.apply(Gi(this),e))}:function(e,...n){const i=t.call(Gi(this),e,...n);return ji.set(i,e.sort?e.sort():[e]),Ki(i)}}function Hi(t){return"function"==typeof t?$i(t):(t instanceof IDBTransaction&&function(t){if(zi.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));zi.set(t,e)}(t),e=t,(Bi||(Bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,Wi):t);var e}function Ki(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(Ki(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Fi.set(e,t)})).catch((()=>{})),qi.set(e,t),e}(t);if(Vi.has(t))return Vi.get(t);const e=Hi(t);return e!==t&&(Vi.set(t,e),qi.set(e,t)),e}const Gi=t=>qi.get(t);function Xi(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ki(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(Ki(o.result),t.oldVersion,t.newVersion,Ki(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Qi=["get","getKey","getAll","getAllKeys","count"],Ji=["put","add","delete","clear"],Yi=new Map;function Zi(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Yi.get(e))return Yi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ji.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Qi.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Yi.set(e,s),s}Wi=(t=>({...t,get:(e,n,i)=>Zi(e,n)||t.get(e,n,i),has:(e,n)=>!!Zi(e,n)||t.has(e,n)}))(Wi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const er=new Pi("@firebase/app"),nr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ir=new Map,rr=new Map;function sr(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function or(t){const e=t.name;if(rr.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;rr.set(e,t);for(const e of ir.values())sr(e,t);return!0}function ar(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cr=new pi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ti("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw cr.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=ii())||void 0===s?void 0:s.config),!n)throw cr.create("no-options");const o=ir.get(r);if(o){if(yi(n,o.options)&&yi(i,o.config))return o;throw cr.create("duplicate-app",{appName:r})}const a=new Ci(r);for(const t of rr.values())a.addComponent(t);const c=new lr(n,i,a);return ir.set(r,c),c}function hr(t="[DEFAULT]"){const e=ir.get(t);if(!e&&"[DEFAULT]"===t)return ur();if(!e)throw cr.create("no-app",{appName:t});return e}function dr(t,e,n){var i;let r=null!==(i=nr[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void er.warn(t.join(" "))}or(new Ti(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let fr=null;function pr(){return fr||(fr=Xi("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})}))),fr}async function mr(t,e){try{const n=(await pr()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(e,gr(t)),n.done}catch(t){if(t instanceof fi)er.warn(t.message);else{const e=cr.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});er.warn(e.message)}}}function gr(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new br(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=vr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=vr(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),wr(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),wr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ti(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vr(){return(new Date).toISOString().substring(0,10)}class br{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!di()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await pr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(gr(t))}catch(t){if(t instanceof fi)er.warn(t.message);else{const e=cr.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});er.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return mr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return mr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function wr(t){return ti(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr;xr="",or(new Ti("platform-logger",(t=>new tr(t)),"PRIVATE")),or(new Ti("heartbeat",(t=>new yr(t)),"PRIVATE")),dr("@firebase/app","0.9.7",xr),dr("@firebase/app","0.9.7","esm2017"),dr("fire-js","");function kr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function Er(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _r=Er,Ir=new pi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Tr=new Pi("@firebase/auth");function Sr(t,...e){Tr.logLevel<=Ai.ERROR&&Tr.error(`Auth (9.19.1): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,...e){throw Rr(t,...e)}function Nr(t,...e){return Rr(t,...e)}function Ar(t,e,n){const i=Object.assign(Object.assign({},_r()),{[e]:n});return new pi("auth","Firebase",i).create(e,{appName:t.name})}function Rr(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Ir.create(t,...e)}function Lr(t,e,...n){if(!t)throw Rr(e,...n)}function Or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sr(e),new Error(e)}function Dr(t,e){t||Or(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Map;function Pr(t){Dr(t instanceof Function,"Expected a class definition");let e=Mr.get(t);return e?(Dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mr.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Br(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Ur(){return"http:"===Fr()||"https:"===Fr()}function Fr(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ur()||ui()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Dr(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(li())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return zr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t,e){Dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},$r=new jr(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kr(t,e,n,i,r={}){return Gr(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=bi(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),qr.fetch()(Qr(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Gr(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Wr),e);try{const e=new Jr(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Yr(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Yr(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Yr(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Yr(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ar(t,a,o);Cr(t,a)}}catch(e){if(e instanceof fi)throw e;Cr(t,"network-request-failed",{message:String(e)})}}async function Xr(t,e,n,i,r={}){const s=await Kr(t,e,n,i,r);return"mfaPendingCredential"in s&&Cr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qr(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Vr(t.config,r):`${t.config.apiScheme}://${r}`}class Jr{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Nr(this.auth,"network-request-failed"))),$r.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Nr(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){return 1e3*Number(t)}function es(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return Sr("JWT malformed, contained fewer than 3 sections"),null;try{const t=ei(n);return t?JSON.parse(t):(Sr("Failed to decode base64 JWT payload"),null)}catch(t){return Sr("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ns(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof fi&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class is{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zr(this.lastLoginAt),this.creationTime=Zr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t){var e;const n=t.auth,i=await t.getIdToken(),r=await ns(t,async function(t,e){return Kr(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));Lr(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=kr(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rs(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Lr(t.idToken,"internal-error"),Lr(void 0!==t.idToken,"internal-error"),Lr(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=es(t);return Lr(e,"internal-error"),Lr(void 0!==e.exp,"internal-error"),Lr(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return Lr(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await Gr(t,{},(async()=>{const n=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=Qr(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",qr.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new os;return n&&(Lr("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(Lr("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(Lr("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return Or("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){Lr("string"==typeof t||void 0===t,"internal-error",{appName:e})}class cs{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=kr(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new is(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new rs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await ns(this,this.stsTokenManager.getToken(this.auth,t));return Lr(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Ii(t),i=await n.getIdToken(e),r=es(i);Lr(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Zr(ts(r.auth_time)),issuedAtTime:Zr(ts(r.iat)),expirationTime:Zr(ts(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Ii(t);await ss(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Lr(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new cs(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Lr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await ss(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ns(this,async function(t,e){return Kr(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;Lr(v&&k,t,"internal-error");const E=os.fromJSON(this.name,k);Lr("string"==typeof v,t,"internal-error"),as(u,t.name),as(h,t.name),Lr("boolean"==typeof b,t,"internal-error"),Lr("boolean"==typeof w,t,"internal-error"),as(d,t.name),as(f,t.name),as(p,t.name),as(m,t.name),as(g,t.name),as(y,t.name);const _=new cs({uid:v,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(_.providerData=x.map((t=>Object.assign({},t)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(t,e,n=!1){const i=new os;i.updateFromServerResponse(e);const r=new cs({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await ss(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ls.type="NONE";const us=ls;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=hs(this.userKey,i.apiKey,r),this.fullPersistenceKey=hs("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?cs._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ds(Pr(us),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||Pr(us);const s=hs(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=cs._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new ds(r,t,n)):new ds(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ys(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ps(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bs(e))return"Blackberry";if(ws(e))return"Webos";if(ms(e))return"Safari";if((e.includes("chrome/")||gs(e))&&!e.includes("edge/"))return"Chrome";if(vs(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ps(t=li()){return/firefox\//i.test(t)}function ms(t=li()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gs(t=li()){return/crios\//i.test(t)}function ys(t=li()){return/iemobile/i.test(t)}function vs(t=li()){return/android/i.test(t)}function bs(t=li()){return/blackberry/i.test(t)}function ws(t=li()){return/webos/i.test(t)}function xs(t=li()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ks(){return hi()&&10===document.documentMode}function Es(t=li()){return xs(t)||vs(t)||ws(t)||bs(t)||/windows phone/i.test(t)||ys(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _s(t,e=[]){let n;switch(t){case"Browser":n=fs(li());break;case"Worker":n=`${fs(li())}-${t}`;break;default:n=t}return`${n}/JsCore/9.19.1/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cs(this),this.idTokenSubscription=new Cs(this),this.beforeStateQueue=new Is(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ir,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Pr(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Lr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ss(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ii(t):null;return e&&Lr(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Lr(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Pr(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new pi("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Pr(t)||this._popupRedirectResolver;Lr(e,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Pr(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Lr(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Lr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=_s(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Ss(t){return Ii(t)}class Cs{constructor(t){this.auth=t,this.observer=null,this.addObserver=ki((t=>this.observer=t))}get next(){return Lr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ns(t,e,n){const i=Ss(t);Lr(i._canInitEmulator,i,"emulator-config-failed"),Lr(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=As(e),{host:o,port:a}=function(t){const e=As(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Rs(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Rs(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function As(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rs(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class Ls{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Or("not implemented")}_getIdTokenResponse(t){return Or("not implemented")}_linkToIdToken(t,e){return Or("not implemented")}_getReauthenticationResolver(t){return Or("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t,e){return Kr(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds extends Ls{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Ds(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ds(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Xr(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Xr(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}(t,{email:this._email,oobCode:this._password});default:Cr(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Os(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Xr(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Cr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return Xr(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Ls{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ps(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Cr("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=kr(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ps(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return Ms(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Ms(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ms(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=bi(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us extends Ls{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Us({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Us({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Xr(t,"POST","/v1/accounts:signInWithPhoneNumber",Hr(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Xr(t,"POST","/v1/accounts:signInWithPhoneNumber",Hr(t,e));if(n.temporaryProof)throw Yr(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Xr(t,"POST","/v1/accounts:signInWithPhoneNumber",Hr(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Bs)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Us({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t){var e,n,i,r,s,o;const a=wi(xi(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Lr(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=wi(xi(t)).link,n=e?wi(xi(e)).deep_link_id:null,i=wi(xi(t)).deep_link_id;return(i?wi(xi(i)).link:null)||i||n||e||t}(t);try{return new Fs(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(t,e){return Ds._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Fs.parseLink(e);return Lr(n,"argument-error"),Ds._fromEmailAndCode(t,n.code,n.tenantId)}}zs.PROVIDER_ID="password",zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password",zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends js{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs extends Vs{constructor(){super("facebook.com")}static credential(t){return Ps._fromParams({providerId:qs.PROVIDER_ID,signInMethod:qs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qs.credentialFromTaggedObject(t)}static credentialFromError(t){return qs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return qs.credential(t.oauthAccessToken)}catch(t){return null}}}qs.FACEBOOK_SIGN_IN_METHOD="facebook.com",qs.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws extends Vs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ps._fromParams({providerId:Ws.PROVIDER_ID,signInMethod:Ws.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ws.credentialFromTaggedObject(t)}static credentialFromError(t){return Ws.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Ws.credential(e,n)}catch(t){return null}}}Ws.GOOGLE_SIGN_IN_METHOD="google.com",Ws.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s extends Vs{constructor(){super("github.com")}static credential(t){return Ps._fromParams({providerId:$s.PROVIDER_ID,signInMethod:$s.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $s.credentialFromTaggedObject(t)}static credentialFromError(t){return $s.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return $s.credential(t.oauthAccessToken)}catch(t){return null}}}$s.GITHUB_SIGN_IN_METHOD="github.com",$s.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs extends Vs{constructor(){super("twitter.com")}static credential(t,e){return Ps._fromParams({providerId:Hs.PROVIDER_ID,signInMethod:Hs.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Hs.credentialFromTaggedObject(t)}static credentialFromError(t){return Hs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Hs.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ks(t,e){return Xr(t,"POST","/v1/accounts:signUp",Hr(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hs.TWITTER_SIGN_IN_METHOD="twitter.com",Hs.PROVIDER_ID="twitter.com";class Gs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await cs._fromIdTokenResponse(t,n,i),s=Xs(n);return new Gs({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Xs(n);return new Gs({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Xs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs extends fi{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Qs(t,e,n,i)}}function Js(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Qs._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){const i=await ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zs(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await ns(t,Js(i,r,e,t),n);Lr(s.idToken,i,"internal-error");const o=es(s.idToken);Lr(o,i,"internal-error");const{sub:a}=o;return Lr(t.uid===a,i,"user-mismatch"),Gs._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Cr(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e,n=!1){const i="signIn",r=await Js(t,i,e),s=await Gs._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function eo(t,e){return to(Ss(t),e)}async function no(t,e,n){const i=Ss(t),r=await Ks(i,{returnSecureToken:!0,email:e,password:n}),s=await Gs._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends io{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=li();return ms(t)||xs(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Es(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);ks()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ro.type="LOCAL";const so=ro;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends io{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}oo.type="SESSION";const ao=oo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new co(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lo(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co.receivers=[];class uo{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=lo("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fo(){return void 0!==ho().WorkerGlobalScope&&"function"==typeof ho().importScripts}class po{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function mo(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function go(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new po(t).toPromise()}(),e(await go()))}))}))}async function yo(t,e,n){const i=mo(t,!0).put({fbase_key:e,value:n});return new po(i).toPromise()}function vo(t,e){const n=mo(t,!0).delete(e);return new po(n).toPromise()}class bo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await go()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(fo()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new uo(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await go();return await yo(t,"__sak","1"),await vo(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>yo(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=mo(t,!1).get(e),i=await new po(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>vo(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=mo(t,!1).getAll();return new po(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bo.type="LOCAL";const wo=bo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){return new Promise(((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=Nr("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ko(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ko("rcb"),new jr(3e4,6e4);async function Eo(t,e,n){var i;const r=await n.verify();try{let s;if(Lr("string"==typeof r,t,"argument-error"),Lr("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){Lr("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return Kr(t,"POST","/v2/accounts/mfaEnrollment:start",Hr(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Lr("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Lr(n,t,"missing-multi-factor-info");const o=await function(t,e){return Kr(t,"POST","/v2/accounts/mfaSignIn:start",Hr(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Kr(t,"POST","/v1/accounts:sendVerificationCode",Hr(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o{constructor(t){this.providerId=_o.PROVIDER_ID,this.auth=Ss(t)}verifyPhoneNumber(t,e){return Eo(this.auth,t,Ii(e))}static credential(t,e){return Us._fromVerification(t,e)}static credentialFromResult(t){const e=t;return _o.credentialFromTaggedObject(e)}static credentialFromError(t){return _o.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Us._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Io(t,e){return e?Pr(e):(Lr(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_o.PROVIDER_ID="phone",_o.PHONE_SIGN_IN_METHOD="phone";class To extends Ls{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ms(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ms(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ms(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function So(t){return to(t.auth,new To(t),t.bypassAuthState)}function Co(t){const{auth:e,user:n}=t;return Lr(n,e,"internal-error"),Zs(n,new To(t),t.bypassAuthState)}async function No(t){const{auth:e,user:n}=t;return Lr(n,e,"internal-error"),Ys(n,new To(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return So;case"linkViaPopup":case"linkViaRedirect":return No;case"reauthViaPopup":case"reauthViaRedirect":return Co;default:Cr(this.auth,"internal-error")}}resolve(t){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new jr(2e3,1e4);class Lo extends Ao{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Lo.currentPopupAction&&Lo.currentPopupAction.cancel(),Lo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Lr(t,this.auth,"internal-error"),t}async onExecution(){Dr(1===this.filter.length,"Popup operations only handle one event");const t=lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Nr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Nr(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Ro.get())};t()}}Lo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo=new Map;class Do extends Ao{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Oo.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Bo(e),i=Po(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Oo.set(this.auth._key(),t)}return this.bypassAuthState||Oo.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Mo(t,e){Oo.set(t._key(),e)}function Po(t){return Pr(t._redirectPersistence)}function Bo(t){return hs("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){const i=Ss(t),r=Io(i,e),s=new Do(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Fo{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jo(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!jo(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Nr(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(zo(t))}saveEventToCache(t){this.cachedEventUids.add(zo(t)),this.lastProcessedEventTime=Date.now()}}function zo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function jo({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qo=/^https?/;async function Wo(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Kr(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if($o(t))return}catch(t){}Cr(t,"unauthorized-domain")}function $o(t){const e=Br(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!qo.test(n))return!1;if(Vo.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new jr(3e4,6e4);function Ko(){const t=ho().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Go=null;function Xo(t){return Go=Go||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ko(),n(Nr(t,"network-request-failed"))},timeout:Ho.get()})}if(null===(r=null===(i=ho().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=ho().gapi)||void 0===s?void 0:s.load)){const e=ko("iframefcb");return ho()[e]=()=>{gapi.load?o():n(Nr(t,"network-request-failed"))},xo(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Go=null,t}))}(t),Go}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new jr(5e3,15e3),Jo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zo(t){const e=t.config;Lr(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vr(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.19.1"},r=Yo.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${bi(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ta={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ea{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function na(t,e,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ta),{width:i.toString(),height:r.toString(),top:s,left:o}),l=li().toLowerCase();n&&(a=gs(l)?"_blank":n),ps(l)&&(e=e||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=li()){var e;return xs(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new ea(null);const h=window.open(e||"",a,u);Lr(h,t,"popup-blocked");try{h.focus()}catch(t){}return new ea(h)}function ia(t,e,n,i,r,s){Lr(t.config.authDomain,t,"auth-domain-config-required"),Lr(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.19.1",eventId:r};if(e instanceof js){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Vs){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?Vr(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${bi(a).slice(1)}`}const ra=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ao,this._completeRedirectFn=Uo,this._overrideRedirectResult=Mo}async _openPopup(t,e,n,i){var r;Dr(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return na(t,ia(t,e,n,Br(),i),lo())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=ia(t,e,n,Br(),i),ho().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Dr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Xo(t),n=ho().gapi;return Lr(n,t,"internal-error"),e.open({where:document.body,url:Zo(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jo,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=Nr(t,"network-request-failed"),s=ho().setTimeout((()=>{i(r)}),Qo.get());function o(){ho().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new Fo(t);return e.register("authEvent",(e=>{Lr(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),Cr(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Wo(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Es()||ms()||xs()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sa{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Lr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oa=oi("authIdTokenMaxAge")||300;let aa=null;var ca;ca="Browser",or(new Ti("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((t,n)=>{Lr(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),Lr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:ca,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_s(ca)},o=new Ts(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Pr);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),or(new Ti("auth-internal",(t=>{const e=Ss(t.getProvider("auth").getImmediate());return new sa(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),dr("@firebase/auth","0.22.0",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ca)),dr("@firebase/auth","0.22.0","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
dr("firebase","9.19.1","app");const la=ur({apiKey:"AIzaSyDFBT4l6qIJNa5FHkQwrhjL1oZ0g4xnyss",authDomain:"group-project-11-filmoteka.firebaseapp.com",projectId:"group-project-11-filmoteka",storageBucket:"group-project-11-filmoteka.appspot.com",messagingSenderId:"114137226490",appId:"1:114137226490:web:4cfd8cb3a42074d592bd43"});var ua,ha,da={};ua=void 0===t?"undefined"==typeof window?da:window:t,ha=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",_="Circle",I="Arrows",T="Dots",S="Pulse",C="Custom",N="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",O="Circle",D="Arrows",M="Dots",P="Pulse",B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+o)},F=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+o)},z=function(e){return e||(e="head"),null!==t.document[e]||(U('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},j=function(e,n){if(!z("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},V=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?V(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},q=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},W=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},H=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Y=function(n,i,r,s){if(!z("body"))return!1;e||ct.Notify.init({});var o=V(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var f={};"object"==typeof r?f=r:"object"==typeof s&&(f=s),e=V(!0,e,f)}var p=e[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=q(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=V(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+J,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,E,_=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},I=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){_();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),_();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var T=function(){k=setTimeout((function(){_()}),e.timeout),E=setTimeout((function(){I()}),e.timeout+e.cssAnimationDuration)};T(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),T()})))}}if(e.showOnlyTheLastOne&&0<J)for(var S,C=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+J+"])"),N=0;N<C.length;N++)null!==(S=C[N]).parentNode&&S.parentNode.removeChild(S);e=V(!0,e,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,s,o,c){if(!z("body"))return!1;n||ct.Report.init({});var l={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof o?u=o:"object"==typeof c&&(u=c),l=V(!0,n,{}),n=V(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),n.plainText&&(i=q(i),r=q(r),s=q(s)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonMaxLength&&(s=s.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===f?(w=n.svgSize,x=h.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+s+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var E=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),E()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}n=V(!0,n,l)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,s,o,c,l,u,h){if(!z("body"))return!1;i||ct.Confirm.init({});var d=V(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=V(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=q(n),r=q(r),o=q(o),c=q(c)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",c="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",c="..."),(o.length||c.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",c="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),c.length>i.buttonsMaxLength&&(c=c.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+c+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=s||"";var E=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+E+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var _=t.document.getElementById(f.id),I=t.document.getElementById("NXConfirmButtonOk"),T=t.document.getElementById("NXConfirmValidationInput");T&&(T.focus(),T.setSelectionRange(0,(T.value||"").length),T.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),T.classList.add("nx-validation-failure"),T.classList.remove("nx-validation-success")):(e===b&&(T.classList.remove("nx-validation-failure"),T.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(t){if(e===b&&v&&T){if((T.value||"").toString()!==v)return T.focus(),T.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;T.classList.remove("nx-validation-failure")}"function"==typeof l&&(e===w&&T&&(k=T.value||""),l(k)),_.classList.add("nx-remove");var n=setTimeout((function(){null!==_.parentNode&&(_.parentNode.removeChild(_),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof l&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&T&&(k=T.value||""),u(k)),_.classList.add("nx-remove");var t=setTimeout((function(){null!==_.parentNode&&(_.parentNode.removeChild(_),clearTimeout(t))}),i.cssAnimationDuration)}))}i=V(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,s,o){if(!z("body"))return!1;r||ct.Loading.init({});var c=V(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var l={};"object"==typeof n?l=n:"object"==typeof i&&(l=i),r=V(!0,r,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),s){var h="";0<(u=u.length>r.messageMaxLength?q(u).toString().substring(0,r.messageMaxLength)+"...":q(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=W(r.svgSize,r.svgColor);else if(e===E)d=$(r.svgSize,r.svgColor);else if(e===_)d=H(r.svgSize,r.svgColor);else if(e===I)d=K(r.svgSize,r.svgColor);else if(e===T)d=G(r.svgSize,r.svgColor);else if(e===S)d=X(r.svgSize,r.svgColor);else if(e===C&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===C&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===C&&(null===r.customSvgUrl||null===r.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(b)}),o);r=V(!0,r,c)},st=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ot=0,at=function(e,n,i,r,o,c){var l;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;l=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;l=u}s||ct.Block.init({});var h=V(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),s=V(!0,s,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=B.className;"string"==typeof s.className&&(p=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=l[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+B.ID+"]");if(1>x.length){var k="";n&&(k=n===L?$(s.svgSize,s.svgColor):n===O?H(s.svgSize,s.svgColor):n===D?K(s.svgSize,s.svgColor):n===M?G(s.svgSize,s.svgColor):n===P?X(s.svgSize,s.svgColor):W(s.svgSize,s.svgColor));var E='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+k+"</span>",_="";0<f.length&&(f=f.length>s.messageMaxLength?q(f).substring(0,s.messageMaxLength)+"...":q(f),_='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+f+"</span>"),ot++;var I=t.document.createElement("div");I.id=B.ID+"-"+ot,I.className=p+(s.cssAnimation?" nx-with-animation":""),I.style.position=s.position,I.style.zIndex=s.zindex,I.style.background=s.backgroundColor,I.style.animationDuration=s.cssAnimationDuration+"ms",I.style.fontFamily='"'+s.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",s.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=E+_;var T,S=t.getComputedStyle(v).getPropertyValue("position"),C="string"==typeof S?S.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(s.svgSize))+40,A="";N>(v.offsetHeight||0)&&(A="min-height:"+N+"px;"),T=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(C);if(j||0<A.length){if(!z("head"))return!1;j&&(R="position:relative!important;");var Q='<style id="Style-'+B.ID+"-"+ot+'">'+T+"."+y+"{"+R+A+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Y=J.createContextualFragment(Q);t.document.head.appendChild(Y),v.classList.add(y)}v.appendChild(I)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),s.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else F("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),s.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=l[e])&&(et(t),x=t.querySelectorAll("[id^="+B.ID+"]"),tt(x));clearTimeout(nt)}),c);s=V(!0,s,h)},ct={Notify:{init:function(t){e=V(!0,d,t),j(Q,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=V(!0,e,t)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Y(c,t,e,n)},failure:function(t,e,n){Y(l,t,e,n)},warning:function(t,e,n){Y(u,t,e,n)},info:function(t,e,n){Y(h,t,e,n)}},Report:{init:function(t){n=V(!0,y,t),j(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=V(!0,n,t)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(f,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=V(!0,x,t),j(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=V(!0,i,t)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,s,o){nt(v,t,e,null,n,i,r,s,o)},ask:function(t,e,n,i,r,s,o,a){nt(b,t,e,n,i,r,s,o,a)},prompt:function(t,e,n,i,r,s,o,a){nt(w,t,e,n,i,r,s,o,a)}},Loading:{init:function(t){r=V(!0,A,t),j(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=V(!0,r,t)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(E,t,e,!0,0)},circle:function(t,e){rt(_,t,e,!0,0)},arrows:function(t,e){rt(I,t,e,!0,0)},dots:function(t,e){rt(T,t,e,!0,0)},pulse:function(t,e){rt(S,t,e,!0,0)},custom:function(t,e){rt(C,t,e,!0,0)},notiflix:function(t,e){rt(N,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?q(e).substring(0,r.messageMaxLength)+"...":q(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var s=t.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=e,n.appendChild(s)}}else U("Where is the new message?")}(e)}},Block:{init:function(t){s=V(!0,B,t),j(st,"NotiflixBlockInternalCSS")},merge:function(t){return s?void(s=V(!0,s,t)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,R,t,e,n)},hourglass:function(t,e,n){at(!0,L,t,e,n)},circle:function(t,e,n){at(!0,O,t,e,n)},arrows:function(t,e,n){at(!0,D,t,e,n)},dots:function(t,e,n){at(!0,M,t,e,n)},pulse:function(t,e,n){at(!0,P,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?V(!0,t.Notiflix,{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}):{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}},"function"==typeof define&&define.amd?define([],(function(){return ha(ua)})):"object"==typeof da?da=ha(ua):ua.Notiflix=ha(ua);const fa={fontSize:"16px"};function pa(t){e(da).Notify.success(t,fa)}function ma(t){e(da).Notify.failure(t,fa)}const ga={authBtn:document.querySelector(".auth-btn"),authBox:document.querySelector(".form-container"),closeBtn:document.querySelector(".exit-button"),signUpBtn:document.querySelector(".sign-up"),logInBtn:document.querySelector(".log-in"),formTitle:document.querySelector(".logForm_title"),inputEmail:document.querySelector(".email"),inputPassword:document.querySelector(".password"),authForm:document.querySelector(".logForm"),lockBtn:document.querySelector(".lock-button"),lockSvg:document.querySelector(".lock-svg"),mobileMenuOpenBtn:document.querySelector(".mobile_menu_btn"),mobileMenuCloseBtn:document.querySelector(".exit-menu_btn"),mobileMenuContainer:document.querySelector(".mobile_menu"),navBox:document.querySelector(".header-nav")},ya=function(t=hr()){const e=ar(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=ar(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(yi(n.getOptions(),null!=e?e:{}))return t;Cr(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:ra,persistence:[wo,so,ao]}),i=oi("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>oa)return;const i=null==e?void 0:e.token;aa!==i&&(aa=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){Ii(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){Ii(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const s=ri("auth");return s&&Ns(n,`http://${s}`),n}(la),va=async()=>{const t=ga.inputEmail.value,e=ga.inputPassword.value;await no(ya,t,e).then((e=>{e.user;localStorage.setItem("fireBaseAuthorized",ya.currentUser.uid),pa(`Your account has been created with login ${t}`),ga.authForm.reset(),wa(),xa()})).catch((t=>{ma(`Your registration has been failed. Reason: ${t.message}`)}))},ba=async()=>{const t=ga.inputEmail.value,e=ga.inputPassword.value;var n,i,r;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await(n=ya,i=t,r=e,eo(Ii(n),zs.credential(i,r))).then((t=>{const e=t.user;console.log(e),localStorage.setItem("fireBaseAuthorized",ya.currentUser.uid),pa(`You have been logged in with e-mail ${e.email}`),ga.authForm.reset(),wa(),xa()})).catch((t=>{ma(`Your log in has been failed. Reason: ${t.message}`)}))},wa=()=>{const t=ga.authBtn.innerHTML;ga.authBtn.textContent.includes("Log in")?ga.authBtn.innerHTML=t.replace("Log in","Log out"):ga.authBtn.innerHTML=t.replace("Log out","Log in")},xa=()=>{ga.authBox.classList.remove("active")},ka=()=>{ga.logInBtn.classList.add("active"),ga.signUpBtn.classList.remove("active"),ga.formTitle.textContent="Log in",ga.inputEmail.placeholder="e-mail",ga.inputPassword.placeholder="password"},Ea=()=>{ga.mobileMenuContainer.classList.remove("active"),ga.navBox.classList.remove("active")};ga.mobileMenuCloseBtn.addEventListener("click",Ea),ga.mobileMenuOpenBtn.addEventListener("click",(()=>{ga.mobileMenuContainer.classList.add("active"),ga.navBox.classList.add("active")})),ga.authForm.addEventListener("submit",(t=>{t.preventDefault();const{elements:{email:n,password:i}}=t.currentTarget;""!==n.value||""!==i.value?ga.signUpBtn.classList.contains("active")?va():ba():e(da).Notify.failure("Please fill all fields",fa)})),ga.authBtn.addEventListener("click",(()=>{var t;ga.authBtn.textContent.includes("Log in")&&(ga.authBox.classList.add("active"),ka()),localStorage.getItem("fireBaseAuthorized")&&(t=ya,Ii(t).signOut()).then((()=>{var t;localStorage.removeItem("fireBaseAuthorized"),wa(),t="You have been logged out",e(da).Notify.info(t,fa)})).catch((t=>console.log(t)))})),ga.closeBtn.addEventListener("click",xa),ga.signUpBtn.addEventListener("click",(()=>{ga.logInBtn.classList.remove("active"),ga.signUpBtn.classList.add("active"),ga.formTitle.textContent="Sign up",ga.inputEmail.placeholder="Enter your e-mail",ga.inputPassword.placeholder="Enter password"})),ga.logInBtn.addEventListener("click",ka),ga.lockBtn.addEventListener("click",(()=>{"password"===ga.inputPassword.type?(ga.inputPassword.type="text",ga.lockSvg.href.baseVal="/icons.adfc4680.svg#icon-unlocked"):(ga.inputPassword.type="password",ga.lockSvg.href.baseVal="/icons.adfc4680.svg#icon-lock")}));var _a,Ia="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Ta={},Sa=Sa||{},Ca=Ia||self;function Na(){}function Aa(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Ra(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var La="closure_uid_"+(1e9*Math.random()>>>0),Oa=0;function Da(t,e,n){return t.call.apply(t.bind,arguments)}function Ma(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Pa(t,e,n){return(Pa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Da:Ma).apply(null,arguments)}function Ba(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ua(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Fa(){this.s=this.s,this.o=this.o}Fa.prototype.s=!1,Fa.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,La)&&t[La]||(t[La]=++Oa))},Fa.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const za=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ja(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Va(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Aa(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function qa(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qa.prototype.h=function(){this.defaultPrevented=!0};var Wa=function(){if(!Ca.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ca.addEventListener("test",Na,e),Ca.removeEventListener("test",Na,e)}catch(t){}return t}();function $a(t){return/^[\s\xa0]*$/.test(t)}var Ha=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ka(t,e){return t<e?-1:t>e?1:0}function Ga(){var t=Ca.navigator;return t&&(t=t.userAgent)?t:""}function Xa(t){return-1!=Ga().indexOf(t)}function Qa(t){return Qa[" "](t),t}Qa[" "]=Na;var Ja,Ya,Za=Xa("Opera"),tc=Xa("Trident")||Xa("MSIE"),ec=Xa("Edge"),nc=ec||tc,ic=Xa("Gecko")&&!(-1!=Ga().toLowerCase().indexOf("webkit")&&!Xa("Edge"))&&!(Xa("Trident")||Xa("MSIE"))&&!Xa("Edge"),rc=-1!=Ga().toLowerCase().indexOf("webkit")&&!Xa("Edge");function sc(){var t=Ca.document;return t?t.documentMode:void 0}t:{var oc="",ac=(Ya=Ga(),ic?/rv:([^\);]+)(\)|;)/.exec(Ya):ec?/Edge\/([\d\.]+)/.exec(Ya):tc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ya):rc?/WebKit\/(\S+)/.exec(Ya):Za?/(?:Version)[ \/]?(\S+)/.exec(Ya):void 0);if(ac&&(oc=ac?ac[1]:""),tc){var cc=sc();if(null!=cc&&cc>parseFloat(oc)){Ja=String(cc);break t}}Ja=oc}var lc,uc={};function hc(){return function(t){var e=uc;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Ha(String(Ja)).split("."),n=Ha("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=Ka(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Ka(0==r[2].length,0==s[2].length)||Ka(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(Ca.document&&tc){var dc=sc();lc=dc||(parseInt(Ja,10)||void 0)}else lc=void 0;var fc=lc;function pc(t,e){if(qa.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ic){t:{try{Qa(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:mc[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pc.X.h.call(this)}}Ua(pc,qa);var mc={2:"touch",3:"pen",4:"mouse"};pc.prototype.h=function(){pc.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gc="closure_listenable_"+(1e6*Math.random()|0),yc=0;function vc(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++yc,this.ba=this.ea=!1}function bc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function wc(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function xc(t){const e={};for(const n in t)e[n]=t[n];return e}const kc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ec(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<kc.length;e++)n=kc[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function _c(t){this.src=t,this.g={},this.h=0}function Ic(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=za(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(bc(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Tc(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}_c.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Tc(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new vc(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var Sc="closure_lm_"+(1e6*Math.random()|0),Cc={};function Nc(t,e,n,i,r){if(i&&i.once)return Rc(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Nc(t,e[s],n,i,r);return null}return n=Uc(n),t&&t[gc]?t.N(e,n,Ra(i)?!!i.capture:!!i,r):Ac(t,e,n,!1,i,r)}function Ac(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Ra(r)?!!r.capture:!!r,a=Pc(t);if(a||(t[Sc]=a=new _c(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Mc;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Wa||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Dc(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Rc(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Rc(t,e[s],n,i,r);return null}return n=Uc(n),t&&t[gc]?t.O(e,n,Ra(i)?!!i.capture:!!i,r):Ac(t,e,n,!0,i,r)}function Lc(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Lc(t,e[s],n,i,r);else i=Ra(i)?!!i.capture:!!i,n=Uc(n),t&&t[gc]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Tc(s=t.g[e],n,i,r))&&(bc(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Pc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tc(e,n,i,r)),(n=-1<t?e[t]:null)&&Oc(n))}function Oc(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[gc])Ic(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Dc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Pc(e))?(Ic(n,t),0==n.h&&(n.src=null,e[Sc]=null)):bc(t)}}}function Dc(t){return t in Cc?Cc[t]:Cc[t]="on"+t}function Mc(t,e){if(t.ba)t=!0;else{e=new pc(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Oc(t),t=n.call(i,e)}return t}function Pc(t){return(t=t[Sc])instanceof _c?t:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uc(t){return"function"==typeof t?t:(t[Bc]||(t[Bc]=function(e){return t.handleEvent(e)}),t[Bc])}function Fc(){Fa.call(this),this.i=new _c(this),this.P=this,this.I=null}function zc(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new qa(e,t);else if(e instanceof qa)e.target=e.target||t;else{var r=e;Ec(e=new qa(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=jc(o,i,!0,e)&&r}if(r=jc(o=e.g=t,i,!0,e)&&r,r=jc(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=jc(o=e.g=n[s],i,!1,e)&&r}function jc(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ic(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}Ua(Fc,Fa),Fc.prototype[gc]=!0,Fc.prototype.removeEventListener=function(t,e,n,i){Lc(this,t,e,n,i)},Fc.prototype.M=function(){if(Fc.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)bc(n[i]);delete e.g[t],e.h--}}this.I=null},Fc.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Fc.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Vc=Ca.JSON.stringify;function qc(){var t=Qc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Wc,$c=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Hc),(t=>t.reset()));class Hc{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Kc(t){Ca.setTimeout((()=>{throw t}),0)}function Gc(t,e){Wc||function(){var t=Ca.Promise.resolve(void 0);Wc=function(){t.then(Jc)}}(),Xc||(Wc(),Xc=!0),Qc.add(t,e)}var Xc=!1,Qc=new class{constructor(){this.h=this.g=null}add(t,e){const n=$c.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Jc(){for(var t;t=qc();){try{t.h.call(t.g)}catch(t){Kc(t)}var e=$c;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xc=!1}function Yc(t,e){Fc.call(this),this.h=t||1,this.g=e||Ca,this.j=Pa(this.lb,this),this.l=Date.now()}function Zc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function tl(t,e,n){if("function"==typeof t)n&&(t=Pa(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Pa(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ca.setTimeout(t,e||0)}function el(t){t.g=tl((()=>{t.g=null,t.i&&(t.i=!1,el(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ua(Yc,Fc),(_a=Yc.prototype).ca=!1,_a.R=null,_a.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),zc(this,"tick"),this.ca&&(Zc(this),this.start()))}},_a.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},_a.M=function(){Yc.X.M.call(this),Zc(this),delete this.g};class nl extends Fa{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:el(this)}M(){super.M(),this.g&&(Ca.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function il(t){Fa.call(this),this.h=t,this.g={}}Ua(il,Fa);var rl=[];function sl(t,e,n,i){Array.isArray(n)||(n&&(rl[0]=n.toString()),n=rl);for(var r=0;r<n.length;r++){var s=Nc(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ol(t){wc(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Oc(t)}),t),t.g={}}function al(){this.g=!0}function cl(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Vc(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}il.prototype.M=function(){il.X.M.call(this),ol(this)},il.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},al.prototype.Aa=function(){this.g=!1},al.prototype.info=function(){};var ll={},ul=null;function hl(){return ul=ul||new Fc}function dl(t){qa.call(this,ll.Pa,t)}function fl(t){const e=hl();zc(e,new dl(e))}function pl(t,e){qa.call(this,ll.STAT_EVENT,t),this.stat=e}function ml(t){const e=hl();zc(e,new pl(e,t))}function gl(t,e){qa.call(this,ll.Qa,t),this.size=e}function yl(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ca.setTimeout((function(){t()}),e)}ll.Pa="serverreachability",Ua(dl,qa),ll.STAT_EVENT="statevent",Ua(pl,qa),ll.Qa="timingevent",Ua(gl,qa);var vl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bl={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wl(){}function xl(t){return t.h||(t.h=t.i())}function kl(){}wl.prototype.h=null;var El,_l={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Il(){qa.call(this,"d")}function Tl(){qa.call(this,"c")}function Sl(){}function Cl(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new il(this),this.O=Al,t=nc?125:void 0,this.T=new Yc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Nl}function Nl(){this.i=null,this.g="",this.h=!1}Ua(Il,qa),Ua(Tl,qa),Ua(Sl,wl),Sl.prototype.g=function(){return new XMLHttpRequest},Sl.prototype.i=function(){return{}},El=new Sl;var Al=45e3,Rl={},Ll={};function Ol(t,e,n){t.K=1,t.v=Yl(Kl(e)),t.s=n,t.P=!0,Dl(t,null)}function Dl(t,e){t.F=Date.now(),Ul(t),t.A=Kl(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),hu(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Nl,t.g=uh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new nl(Pa(t.La,t,t.g),t.N)),sl(t.S,t.g,"readystatechange",t.ib),e=t.H?xc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fl(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function Ml(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Pl(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Bl(t,n),i==Ll){4==e&&(t.o=4,ml(14),r=!1),cl(t.j,t.m,null,"[Incomplete Response]");break}if(i==Rl){t.o=4,ml(15),cl(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}cl(t.j,t.m,i,null),ql(t,i)}Ml(t)&&i!=Ll&&i!=Rl&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ml(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nh(e),e.K=!0,ml(11))):(cl(t.j,t.m,n,"[Invalid Chunked Response]"),Vl(t),jl(t))}function Bl(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ll:(n=Number(e.substring(n,i)),isNaN(n)?Rl:(i+=1)+n>e.length?Ll:(e=e.substr(i,n),t.C=i+n,e))}function Ul(t){t.V=Date.now()+t.O,Fl(t,t.O)}function Fl(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=yl(Pa(t.gb,t),e)}function zl(t){t.B&&(Ca.clearTimeout(t.B),t.B=null)}function jl(t){0==t.l.G||t.I||sh(t.l,t)}function Vl(t){zl(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Zc(t.T),ol(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ql(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||yu(n.h,t)))if(!t.J&&yu(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;rh(n),Gu(n)}eh(n),ml(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=yl(Pa(n.cb,n),6e3));if(1>=gu(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else ah(n,11)}else if((t.J||n.g==t)&&rh(n),!$a(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const e=l[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=l[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(vu(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Jl(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=lh(i,i.H?i.ka:null,i.V),o.J){bu(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(zl(a),Ul(a)),i.g=o}else th(i);0<n.i.length&&Qu(n)}else"stop"!=l[0]&&"close"!=l[0]||ah(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?ah(n,7):Ku(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}fl()}catch(t){}}function Wl(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Aa(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Aa(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Aa(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(_a=Cl.prototype).setTimeout=function(t){this.O=t},_a.ib=function(t){t=t.target;const e=this.L;e&&3==ju(t)?e.l():this.La(t)},_a.La=function(t){try{if(t==this.g)t:{const u=ju(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||nc||this.g&&(this.h.h||this.g.fa()||Vu(this.g)))){this.I||4!=u||7==e||fl(),zl(this);var n=this.g.aa();this.Y=n;e:if(Ml(this)){var i=Vu(this.g);t="";var r=i.length,s=4==ju(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Vl(this),jl(this);var o="";break e}this.h.i=new Ca.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$a(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ml(12),Vl(this),jl(this);break t}cl(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ql(this,n)}this.P?(Pl(this,u,o),nc&&this.i&&3==u&&(sl(this.S,this.T,"tick",this.hb),this.T.start())):(cl(this.j,this.m,o,null),ql(this,o)),4==u&&Vl(this),this.i&&!this.I&&(4==u?sh(this.l,this):(this.i=!1,Ul(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ml(12)):(this.o=0,ml(13)),Vl(this),jl(this)}}}catch(t){}},_a.hb=function(){if(this.g){var t=ju(this.g),e=this.g.fa();this.C<e.length&&(zl(this),Pl(this,t,e),this.i&&4!=t&&Ul(this))}},_a.cancel=function(){this.I=!0,Vl(this)},_a.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(fl(),ml(17)),Vl(this),this.o=2,jl(this)):Fl(this,this.V-t)};var $l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hl(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hl){this.h=void 0!==e?e:t.h,Gl(this,t.j),this.s=t.s,this.g=t.g,Xl(this,t.m),this.l=t.l,e=t.i;var n=new au;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ql(this,n),this.o=t.o}else t&&(n=String(t).match($l))?(this.h=!!e,Gl(this,n[1]||"",!0),this.s=Zl(n[2]||""),this.g=Zl(n[3]||"",!0),Xl(this,n[4]),this.l=Zl(n[5]||"",!0),Ql(this,n[6]||"",!0),this.o=Zl(n[7]||"")):(this.h=!!e,this.i=new au(null,this.h))}function Kl(t){return new Hl(t)}function Gl(t,e,n){t.j=n?Zl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ql(t,e,n){e instanceof au?(t.i=e,function(t,e){e&&!t.j&&(cu(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(lu(this,e),hu(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=tu(e,su)),t.i=new au(e,t.h))}function Jl(t,e,n){t.i.set(e,n)}function Yl(t){return Jl(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tu(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,eu),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eu(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Hl.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tu(e,nu,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(tu(e,nu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(tu(n,"/"==n.charAt(0)?ru:iu,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tu(n,ou)),t.join("")};var nu=/[#\/\?@]/g,iu=/[#\?:]/g,ru=/[#\?]/g,su=/[#\?@]/g,ou=/#/g;function au(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cu(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function lu(t,e){cu(t),e=du(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uu(t,e){return cu(t),e=du(t,e),t.g.has(e)}function hu(t,e,n){lu(t,e),0<n.length&&(t.i=null,t.g.set(du(t,e),ja(n)),t.h+=n.length)}function du(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(_a=au.prototype).add=function(t,e){cu(this),this.i=null,t=du(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},_a.forEach=function(t,e){cu(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},_a.oa=function(){cu(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},_a.W=function(t){cu(this);let e=[];if("string"==typeof t)uu(this,t)&&(e=e.concat(this.g.get(du(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},_a.set=function(t,e){return cu(this),this.i=null,uu(this,t=du(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},_a.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},_a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function fu(t){this.l=t||pu,Ca.PerformanceNavigationTiming?t=0<(t=Ca.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ca.g&&Ca.g.Ga&&Ca.g.Ga()&&Ca.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pu=10;function mu(t){return!!t.h||!!t.g&&t.g.size>=t.j}function gu(t){return t.h?1:t.g?t.g.size:0}function yu(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function vu(t,e){t.g?t.g.add(e):t.h=e}function bu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wu(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ja(t.i)}function xu(){}function ku(){this.g=new xu}function Eu(t,e,n){const i=n||"";try{Wl(t,(function(t,n){let r=t;Ra(t)&&(r=Vc(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function _u(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Iu(t){this.l=t.ac||null,this.j=t.jb||!1}function Tu(t,e){Fc.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Su,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fu.prototype.cancel=function(){if(this.i=wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},xu.prototype.stringify=function(t){return Ca.JSON.stringify(t,void 0)},xu.prototype.parse=function(t){return Ca.JSON.parse(t,void 0)},Ua(Iu,wl),Iu.prototype.g=function(){return new Tu(this.l,this.j)},Iu.prototype.i=function(t){return function(){return t}}({}),Ua(Tu,Fc);var Su=0;function Cu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Nu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Au(t)}function Au(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(_a=Tu.prototype).open=function(t,e){if(this.readyState!=Su)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Au(this)},_a.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ca).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},_a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Nu(this)),this.readyState=Su},_a.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Au(this)),this.g&&(this.readyState=3,Au(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Ca.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},_a.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nu(this):Au(this),3==this.readyState&&Cu(this)}},_a.Va=function(t){this.g&&(this.response=this.responseText=t,Nu(this))},_a.Ua=function(t){this.g&&(this.response=t,Nu(this))},_a.ga=function(){this.g&&Nu(this)},_a.setRequestHeader=function(t,e){this.v.append(t,e)},_a.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},_a.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Tu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ru=Ca.JSON.parse;function Lu(t){Fc.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ou,this.K=this.L=!1}Ua(Lu,Fc);var Ou="",Du=/^https?$/i,Mu=["POST","PUT"];function Pu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bu(t),Fu(t)}function Bu(t){t.D||(t.D=!0,zc(t,"complete"),zc(t,"error"))}function Uu(t){if(t.h&&void 0!==Sa&&(!t.C[1]||4!=ju(t)||2!=t.aa()))if(t.v&&4==ju(t))tl(t.Ha,0,t);else if(zc(t,"readystatechange"),4==ju(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match($l)[1]||null;if(!r&&Ca.self&&Ca.self.location){var s=Ca.self.location.protocol;r=s.substr(0,s.length-1)}i=!Du.test(r?r.toLowerCase():"")}n=i}if(n)zc(t,"complete"),zc(t,"success");else{t.m=6;try{var o=2<ju(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",Bu(t)}}finally{Fu(t)}}}function Fu(t,e){if(t.g){zu(t);const n=t.g,i=t.C[0]?Na:null;t.g=null,t.C=null,e||zc(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function zu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ca.clearTimeout(t.A),t.A=null)}function ju(t){return t.g?t.g.readyState:0}function Vu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ou:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function qu(t){let e="";return wc(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Wu(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=qu(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Jl(t,e,n))}function $u(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hu(t){this.Ca=0,this.i=[],this.j=new al,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$u("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$u("baseRetryDelayMs",5e3,t),this.bb=$u("retryDelaySeedMs",1e4,t),this.$a=$u("forwardChannelMaxRetries",2,t),this.ta=$u("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fu(t&&t.concurrentRequestLimit),this.Fa=new ku,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Ku(t){if(Xu(t),3==t.G){var e=t.U++,n=Kl(t.F);Jl(n,"SID",t.I),Jl(n,"RID",e),Jl(n,"TYPE","terminate"),Yu(t,n),(e=new Cl(t,t.j,e,void 0)).K=2,e.v=Yl(Kl(n)),n=!1,Ca.navigator&&Ca.navigator.sendBeacon&&(n=Ca.navigator.sendBeacon(e.v.toString(),"")),!n&&Ca.Image&&((new Image).src=e.v,n=!0),n||(e.g=uh(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ul(e)}ch(t)}function Gu(t){t.g&&(nh(t),t.g.cancel(),t.g=null)}function Xu(t){Gu(t),t.u&&(Ca.clearTimeout(t.u),t.u=null),rh(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Ca.clearTimeout(t.m),t.m=null)}function Qu(t){mu(t.h)||t.m||(t.m=!0,Gc(t.Ja,t),t.C=0)}function Ju(t,e){var n;n=e?e.m:t.U++;const i=Kl(t.F);Jl(i,"SID",t.I),Jl(i,"RID",n),Jl(i,"AID",t.T),Yu(t,i),t.o&&t.s&&Wu(i,t.o,t.s),n=new Cl(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Zu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),vu(t.h,n),Ol(n,i,e)}function Yu(t,e){t.ia&&wc(t.ia,(function(t,n){Jl(e,n,t)})),t.l&&Wl({},(function(t,n){Jl(e,n,t)}))}function Zu(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Pa(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Eu(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function th(t){t.g||t.u||(t.Z=1,Gc(t.Ia,t),t.A=0)}function eh(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=yl(Pa(t.Ia,t),oh(t,t.A)),t.A++,!0)}function nh(t){null!=t.B&&(Ca.clearTimeout(t.B),t.B=null)}function ih(t){t.g=new Cl(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Kl(t.sa);Jl(e,"RID","rpc"),Jl(e,"SID",t.I),Jl(e,"CI",t.L?"0":"1"),Jl(e,"AID",t.T),Jl(e,"TYPE","xmlhttp"),Yu(t,e),t.o&&t.s&&Wu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Yl(Kl(e)),n.s=null,n.P=!0,Dl(n,t)}function rh(t){null!=t.v&&(Ca.clearTimeout(t.v),t.v=null)}function sh(t,e){var n=null;if(t.g==e){rh(t),nh(t),t.g=null;var i=2}else{if(!yu(t.h,e))return;n=e.D,bu(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;zc(i=hl(),new gl(i,n)),Qu(t)}else th(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!(gu(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=yl(Pa(t.Ja,t,e),oh(t,t.C)),t.C++,0)))}(t,e)||2==i&&eh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ah(t,5);break;case 4:ah(t,10);break;case 3:ah(t,6);break;default:ah(t,2)}}function oh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ah(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=Pa(t.kb,t);n||(n=new Hl("//www.google.com/images/cleardot.gif"),Ca.location&&"http"==Ca.location.protocol||Gl(n,"https"),Yl(n)),function(t,e){const n=new al;if(Ca.Image){const i=new Image;i.onload=Ba(_u,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ba(_u,n,i,"TestLoadImage: error",!1,e),i.onabort=Ba(_u,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ba(_u,n,i,"TestLoadImage: timeout",!1,e),Ca.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else ml(2);t.G=0,t.l&&t.l.va(e),ch(t),Xu(t)}function ch(t){if(t.G=0,t.la=[],t.l){const e=wu(t.h);0==e.length&&0==t.i.length||(Va(t.la,e),Va(t.la,t.i),t.h.i.length=0,ja(t.i),t.i.length=0),t.l.ua()}}function lh(t,e,n){var i=n instanceof Hl?Kl(n):new Hl(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Xl(i,i.m);else{var r=Ca.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Hl(null,void 0);i&&Gl(s,i),e&&(s.g=e),r&&Xl(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Jl(i,n,e),Jl(i,"VER",t.ma),Yu(t,i),i}function uh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new Lu(new Iu({jb:!0})):new Lu(t.ra)).Ka(t.H),e}function hh(){}function dh(){if(tc&&!(10<=Number(fc)))throw Error("Environmental error: no available transport.")}function fh(t,e){Fc.call(this),this.g=new Hu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$a(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$a(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new gh(this)}function ph(t){Il.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mh(){Tl.call(this),this.status=1}function gh(t){this.g=t}(_a=Lu.prototype).Ka=function(t){this.L=t},_a.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():El.g(),this.C=this.u?xl(this.u):xl(El),this.g.onreadystatechange=Pa(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Pu(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=Ca.FormData&&t instanceof Ca.FormData,!(0<=za(Mu,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zu(this),0<this.B&&((this.K=function(t){return tc&&hc()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pa(this.qa,this)):this.A=tl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Pu(this,t)}},_a.qa=function(){void 0!==Sa&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zc(this,"timeout"),this.abort(8))},_a.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,zc(this,"complete"),zc(this,"abort"),Fu(this))},_a.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fu(this,!0)),Lu.X.M.call(this)},_a.Ha=function(){this.s||(this.F||this.v||this.l?Uu(this):this.fb())},_a.fb=function(){Uu(this)},_a.aa=function(){try{return 2<ju(this)?this.g.status:-1}catch(t){return-1}},_a.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},_a.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ru(e)}},_a.Ea=function(){return this.m},_a.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(_a=Hu.prototype).ma=8,_a.G=1,_a.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Cl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=xc(s),Ec(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Zu(this,r,e),Jl(n=Kl(this.F),"RID",t),Jl(n,"CVER",22),this.D&&Jl(n,"X-HTTP-Session-Id",this.D),Yu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(qu(s)))+"&"+e:this.o&&Wu(n,this.o,s)),vu(this.h,r),this.Ya&&Jl(n,"TYPE","init"),this.O?(Jl(n,"$req",e),Jl(n,"SID","null"),r.Z=!0,Ol(r,n,null)):Ol(r,n,e),this.G=2}}else 3==this.G&&(t?Ju(this,t):0==this.i.length||mu(this.h)||Ju(this))},_a.Ia=function(){if(this.u=null,ih(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=yl(Pa(this.eb,this),t)}},_a.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ml(10),Gu(this),ih(this))},_a.cb=function(){null!=this.v&&(this.v=null,Gu(this),eh(this),ml(19))},_a.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ml(2)):(this.j.info("Failed to ping google.com"),ml(1))},(_a=hh.prototype).xa=function(){},_a.wa=function(){},_a.va=function(){},_a.ua=function(){},_a.Ra=function(){},dh.prototype.g=function(t,e){return new fh(t,e)},Ua(fh,Fc),fh.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ml(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=lh(t,null,t.V),Qu(t)},fh.prototype.close=function(){Ku(this.g)},fh.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Vc(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Qu(e)},fh.prototype.M=function(){this.g.l=null,delete this.j,Ku(this.g),delete this.g,fh.X.M.call(this)},Ua(ph,Il),Ua(mh,Tl),Ua(gh,hh),gh.prototype.xa=function(){zc(this.g,"a")},gh.prototype.wa=function(t){zc(this.g,new ph(t))},gh.prototype.va=function(t){zc(this.g,new mh)},gh.prototype.ua=function(){zc(this.g,"b")},dh.prototype.createWebChannel=dh.prototype.g,fh.prototype.send=fh.prototype.u,fh.prototype.open=fh.prototype.m,fh.prototype.close=fh.prototype.close,vl.NO_ERROR=0,vl.TIMEOUT=8,vl.HTTP_ERROR=6,bl.COMPLETE="complete",kl.EventType=_l,_l.OPEN="a",_l.CLOSE="b",_l.ERROR="c",_l.MESSAGE="d",Fc.prototype.listen=Fc.prototype.N,Lu.prototype.listenOnce=Lu.prototype.O,Lu.prototype.getLastError=Lu.prototype.Oa,Lu.prototype.getLastErrorCode=Lu.prototype.Ea,Lu.prototype.getStatus=Lu.prototype.aa,Lu.prototype.getResponseJson=Lu.prototype.Sa,Lu.prototype.getResponseText=Lu.prototype.fa,Lu.prototype.send=Lu.prototype.da,Lu.prototype.setWithCredentials=Lu.prototype.Ka;var yh=Ta.createWebChannelTransport=function(){return new dh},vh=Ta.getStatEventTarget=function(){return hl()},bh=Ta.ErrorCode=vl,wh=Ta.EventType=bl,xh=Ta.Event=ll,kh=Ta.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Eh=Ta.FetchXmlHttpFactory=Iu,_h=Ta.WebChannel=kl,Ih=Ta.XhrIo=Lu;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Th{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Th.UNAUTHENTICATED=new Th(null),Th.GOOGLE_CREDENTIALS=new Th("google-credentials-uid"),Th.FIRST_PARTY=new Th("first-party-uid"),Th.MOCK_USER=new Th("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Sh="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Pi("@firebase/firestore");function Nh(){return Ch.logLevel}function Ah(t,...e){if(Ch.logLevel<=Ai.DEBUG){const n=e.map(Oh);Ch.debug(`Firestore (${Sh}): ${t}`,...n)}}function Rh(t,...e){if(Ch.logLevel<=Ai.ERROR){const n=e.map(Oh);Ch.error(`Firestore (${Sh}): ${t}`,...n)}}function Lh(t,...e){if(Ch.logLevel<=Ai.WARN){const n=e.map(Oh);Ch.warn(`Firestore (${Sh}): ${t}`,...n)}}function Oh(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t="Unexpected state"){const e=`FIRESTORE (${Sh}) INTERNAL ASSERTION FAILED: `+t;throw Rh(e),new Error(e)}function Mh(t,e){t||Dh()}function Ph(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Uh extends fi{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Th.UNAUTHENTICATED)))}shutdown(){}}class Vh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class qh{constructor(t){this.t=t,this.currentUser=Th.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Fh;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Fh,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Ah("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ah("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Fh)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ah("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Mh("string"==typeof e.accessToken),new zh(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Mh(null===t||"string"==typeof t),new Th(t)}}class Wh{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Th.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class $h{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Wh(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Th.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kh{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Ah("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Ah("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ah("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?i(t):Ah("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Mh("string"==typeof t.token),this.T=t.token,new Hh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gh(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Gh(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Qh(t,e){return t<e?-1:t>e?1:0}function Jh(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yh{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Uh(Bh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Uh(Bh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Uh(Bh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Uh(Bh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Yh.fromMillis(Date.now())}static fromDate(t){return Yh.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Yh(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Qh(this.nanoseconds,t.nanoseconds):Qh(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Zh(t)}static min(){return new Zh(new Yh(0,0))}static max(){return new Zh(new Yh(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,n){void 0===e?e=0:e>t.length&&Dh(),void 0===n?n=t.length-e:n>t.length-e&&Dh(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===td.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof td?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ed extends td{construct(t,e,n){return new ed(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Uh(Bh.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ed(e)}static emptyPath(){return new ed([])}}const nd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class id extends td{construct(t,e,n){return new id(t,e,n)}static isValidIdentifier(t){return nd.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),id.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new id(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Uh(Bh.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Uh(Bh.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Uh(Bh.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Uh(Bh.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new id(e)}static emptyPath(){return new id([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.path=t}static fromPath(t){return new rd(ed.fromString(t))}static fromName(t){return new rd(ed.fromString(t).popFirst(5))}static empty(){return new rd(ed.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ed.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ed.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new rd(new ed(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}sd.UNKNOWN_ID=-1;function od(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Zh.fromTimestamp(1e9===i?new Yh(n+1,0):new Yh(n,i));return new cd(r,rd.empty(),e)}function ad(t){return new cd(t.readTime,t.key,-1)}class cd{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new cd(Zh.min(),rd.empty(),-1)}static max(){return new cd(Zh.max(),rd.empty(),-1)}}function ld(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=rd.comparator(t.documentKey,e.documentKey),0!==n?n:Qh(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(t){if(t.code!==Bh.FAILED_PRECONDITION||t.message!==ud)throw t;Ah("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Dh(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new fd(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof fd?e:fd.resolve(e)}catch(t){return fd.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):fd.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):fd.reject(e)}static resolve(t){return new fd(((e,n)=>{e(t)}))}static reject(t){return new fd(((e,n)=>{n(t)}))}static waitFor(t){return new fd(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=fd.resolve(!1);for(const n of t)e=e.next((t=>t?fd.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new fd(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new fd(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class md{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function gd(t){return null==t}function yd(t){return 0===t&&1/t==-1/0}function vd(t){return"number"==typeof t&&Number.isInteger(t)&&!yd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */md.ct=-1;const bd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xd=wd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ed(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,e){this.comparator=t,this.root=e||Sd.EMPTY}insert(t,e){return new Id(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Sd.BLACK,null,null))}remove(t){return new Id(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Sd.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Td(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Td(this.root,t,this.comparator,!1)}getReverseIterator(){return new Td(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Td(this.root,t,this.comparator,!0)}}class Td{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Sd{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Sd.RED,this.left=null!=i?i:Sd.EMPTY,this.right=null!=r?r:Sd.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Sd(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Sd.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Sd.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Sd.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Sd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Dh();if(this.right.isRed())throw Dh();const t=this.left.check();if(t!==this.right.check())throw Dh();return t+(this.isRed()?0:1)}}Sd.EMPTY=null,Sd.RED=!0,Sd.BLACK=!1,Sd.EMPTY=new class{constructor(){this.size=0}get key(){throw Dh()}get value(){throw Dh()}get color(){throw Dh()}get left(){throw Dh()}get right(){throw Dh()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Sd(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cd{constructor(t){this.comparator=t,this.data=new Id(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Nd(this.data.getIterator())}getIteratorFrom(t){return new Nd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Cd))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Cd(this.comparator);return e.data=t,e}}class Nd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ad{constructor(t){this.fields=t,t.sort(id.comparator)}static empty(){return new Ad([])}unionWith(t){let e=new Cd(id.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Ad(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Jh(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ld{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Rd("Invalid base64 string: "+t):t}}(t);return new Ld(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ld(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Qh(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ld.EMPTY_BYTE_STRING=new Ld("");const Od=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dd(t){if(Mh(!!t),"string"==typeof t){let e=0;const n=Od.exec(t);if(Mh(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Md(t.seconds),nanos:Md(t.nanos)}}function Md(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Pd(t){return"string"==typeof t?Ld.fromBase64String(t):Ld.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ud(t){const e=t.mapValue.fields.__previous_value__;return Bd(e)?Ud(e):e}function Fd(t){const e=Dd(t.mapValue.fields.__local_write_time__.timestampValue);return new Yh(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jd{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new jd("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof jd&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qd(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bd(t)?4:nf(t)?9007199254740991:10:Dh()}function Wd(t,e){if(t===e)return!0;const n=qd(t);if(n!==qd(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fd(t).isEqual(Fd(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Dd(t.timestampValue),i=Dd(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Pd(t.bytesValue).isEqual(Pd(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Md(t.geoPointValue.latitude)===Md(e.geoPointValue.latitude)&&Md(t.geoPointValue.longitude)===Md(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Md(t.integerValue)===Md(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Md(t.doubleValue),i=Md(e.doubleValue);return n===i?yd(n)===yd(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Jh(t.arrayValue.values||[],e.arrayValue.values||[],Wd);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(kd(n)!==kd(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Wd(n[t],i[t])))return!1;return!0}(t,e);default:return Dh()}}function $d(t,e){return void 0!==(t.values||[]).find((t=>Wd(t,e)))}function Hd(t,e){if(t===e)return 0;const n=qd(t),i=qd(e);if(n!==i)return Qh(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qh(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Md(t.integerValue||t.doubleValue),i=Md(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Kd(t.timestampValue,e.timestampValue);case 4:return Kd(Fd(t),Fd(e));case 5:return Qh(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Pd(t),i=Pd(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Qh(n[t],i[t]);if(0!==e)return e}return Qh(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Qh(Md(t.latitude),Md(e.latitude));return 0!==n?n:Qh(Md(t.longitude),Md(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Hd(n[t],i[t]);if(e)return e}return Qh(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Vd.mapValue&&e===Vd.mapValue)return 0;if(t===Vd.mapValue)return 1;if(e===Vd.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=Qh(i[t],s[t]);if(0!==e)return e;const o=Hd(n[i[t]],r[s[t]]);if(0!==o)return o}return Qh(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Dh()}}function Kd(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Qh(t,e);const n=Dd(t),i=Dd(e),r=Qh(n.seconds,i.seconds);return 0!==r?r:Qh(n.nanos,i.nanos)}function Gd(t){return Xd(t)}function Xd(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Dd(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pd(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,rd.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Xd(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Xd(t.fields[r])}`;return n+"}"}(t.mapValue):Dh()}function Qd(t){return!!t&&"integerValue"in t}function Jd(t){return!!t&&"arrayValue"in t}function Yd(t){return!!t&&"nullValue"in t}function Zd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tf(t){return!!t&&"mapValue"in t}function ef(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ed(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ef(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ef(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nf(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rf{constructor(t){this.value=t}static empty(){return new rf({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!tf(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ef(e)}setAll(t){let e=id.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=ef(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());tf(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wd(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];tf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Ed(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new rf(ef(this.value))}}function sf(t){const e=[];return Ed(t.fields,((t,n)=>{const i=new id([t]);if(tf(n)){const t=sf(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Ad(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class of{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new of(t,0,Zh.min(),Zh.min(),Zh.min(),rf.empty(),0)}static newFoundDocument(t,e,n,i){return new of(t,1,e,Zh.min(),n,i,0)}static newNoDocument(t,e){return new of(t,2,e,Zh.min(),Zh.min(),rf.empty(),0)}static newUnknownDocument(t,e){return new of(t,3,e,Zh.min(),Zh.min(),rf.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Zh.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rf.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rf.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Zh.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof of&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new of(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e){this.position=t,this.inclusive=e}}function cf(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?rd.comparator(rd.fromName(o.referenceValue),n.key):Hd(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function lf(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wd(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,e="asc"){this.field=t,this.dir=e}}function hf(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{}class ff extends df{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new xf(t,e,n):"array-contains"===e?new If(t,n):"in"===e?new Tf(t,n):"not-in"===e?new Sf(t,n):"array-contains-any"===e?new Cf(t,n):new ff(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new kf(t,n):new Ef(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Hd(e,this.value)):null!==e&&qd(this.value)===qd(e)&&this.matchesComparison(Hd(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Dh()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pf extends df{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new pf(t,e)}matches(t){return mf(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function mf(t){return"and"===t.op}function gf(t){return yf(t)&&mf(t)}function yf(t){for(const e of t.filters)if(e instanceof pf)return!1;return!0}function vf(t){if(t instanceof ff)return t.field.canonicalString()+t.op.toString()+Gd(t.value);if(gf(t))return t.filters.map((t=>vf(t))).join(",");{const e=t.filters.map((t=>vf(t))).join(",");return`${t.op}(${e})`}}function bf(t,e){return t instanceof ff?function(t,e){return e instanceof ff&&t.op===e.op&&t.field.isEqual(e.field)&&Wd(t.value,e.value)}(t,e):t instanceof pf?function(t,e){return e instanceof pf&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&bf(n,e.filters[i])),!0)}(t,e):void Dh()}function wf(t){return t instanceof ff?function(t){return`${t.field.canonicalString()} ${t.op} ${Gd(t.value)}`}(t):t instanceof pf?function(t){return t.op.toString()+" {"+t.getFilters().map(wf).join(" ,")+"}"}(t):"Filter"}class xf extends ff{constructor(t,e,n){super(t,e,n),this.key=rd.fromName(n.referenceValue)}matches(t){const e=rd.comparator(t.key,this.key);return this.matchesComparison(e)}}class kf extends ff{constructor(t,e){super(t,"in",e),this.keys=_f("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ef extends ff{constructor(t,e){super(t,"not-in",e),this.keys=_f("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function _f(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>rd.fromName(t.referenceValue)))}class If extends ff{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Jd(e)&&$d(e.arrayValue,this.value)}}class Tf extends ff{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$d(this.value.arrayValue,e)}}class Sf extends ff{constructor(t,e){super(t,"not-in",e)}matches(t){if($d(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!$d(this.value.arrayValue,e)}}class Cf extends ff{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Jd(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$d(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function Af(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Nf(t,e,n,i,r,s,o)}function Rf(t){const e=Ph(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>vf(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),gd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Gd(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Gd(t))).join(",")),e.ft=t}return e.ft}function Lf(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hf(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lf(t.startAt,e.startAt)&&lf(t.endAt,e.endAt)}function Of(t){return rd.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Df{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Mf(t,e,n,i,r,s,o,a){return new Df(t,e,n,i,r,s,o,a)}function Pf(t){return new Df(t)}function Bf(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Uf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ff(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function zf(t){return null!==t.collectionGroup}function jf(t){const e=Ph(t);if(null===e.dt){e.dt=[];const t=Ff(e),n=Uf(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new uf(t)),e.dt.push(new uf(id.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new uf(id.keyField(),t))}}}return e.dt}function Vf(t){const e=Ph(t);if(!e.wt)if("F"===e.limitType)e.wt=Af(e.path,e.collectionGroup,jf(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of jf(e)){const e="desc"===n.dir?"asc":"desc";t.push(new uf(n.field,e))}const n=e.endAt?new af(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new af(e.startAt.position,e.startAt.inclusive):null;e.wt=Af(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.wt}function qf(t,e,n){return new Df(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wf(t,e){return Lf(Vf(t),Vf(e))&&t.limitType===e.limitType}function $f(t){return`${Rf(Vf(t))}|lt:${t.limitType}`}function Hf(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>wf(t))).join(", ")}]`),gd(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Gd(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Gd(t))).join(",")),`Target(${e})`}(Vf(t))}; limitType=${t.limitType})`}function Kf(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):rd.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of jf(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=cf(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,jf(n),i)||n.endAt&&!function(t,e,n){const i=cf(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,jf(n),i)));var n,i}function Gf(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xf(t){return(e,n)=>{let i=!1;for(const r of jf(t)){const t=Qf(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Qf(t,e,n){const i=t.field.isKeyField()?rd.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Hd(i,r):Dh()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Dh()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ed(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return _d(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new Id(rd.comparator);function Zf(){return Yf}const tp=new Id(rd.comparator);function ep(...t){let e=tp;for(const n of t)e=e.insert(n.key,n);return e}function np(t){let e=tp;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ip(){return sp()}function rp(){return sp()}function sp(){return new Jf((t=>t.toString()),((t,e)=>t.isEqual(e)))}const op=new Id(rd.comparator),ap=new Cd(rd.comparator);function cp(...t){let e=ap;for(const n of t)e=e.add(n);return e}const lp=new Cd(Qh);function up(){return lp}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yd(e)?"-0":e}}function dp(t){return{integerValue:""+t}}function fp(t,e){return vd(e)?dp(e):hp(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this._=void 0}}function mp(t,e,n){return t instanceof vp?bp(t,e):t instanceof wp?xp(t,e):n}function gp(t,e){var n;return t instanceof kp?Qd(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class yp extends pp{}class vp extends pp{constructor(t){super(),this.elements=t}}function bp(t,e){const n=_p(e);for(const e of t.elements)n.some((t=>Wd(t,e)))||n.push(e);return{arrayValue:{values:n}}}class wp extends pp{constructor(t){super(),this.elements=t}}function xp(t,e){let n=_p(e);for(const e of t.elements)n=n.filter((t=>!Wd(t,e)));return{arrayValue:{values:n}}}class kp extends pp{constructor(t,e){super(),this.serializer=t,this._t=e}}function Ep(t){return Md(t.integerValue||t.doubleValue)}function _p(t){return Jd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,e){this.version=t,this.transformResults=e}}class Tp{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Tp}static exists(t){return new Tp(void 0,t)}static updateTime(t){return new Tp(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Sp(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Cp{}function Np(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Up(t.key,Tp.none()):new Op(t.key,t.data,Tp.none());{const n=t.data,i=rf.empty();let r=new Cd(id.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Dp(t.key,i,new Ad(r.toArray()),Tp.none())}}function Ap(t,e,n,i){return t instanceof Op?function(t,e,n,i){if(!Sp(t.precondition,e))return n;const r=t.value.clone(),s=Bp(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Dp?function(t,e,n,i){if(!Sp(t.precondition,e))return n;const r=Bp(t.fieldTransforms,i,e),s=e.data;return s.setAll(Mp(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Sp(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Rp(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=gp(i.transform,t||null);null!=r&&(null===n&&(n=rf.empty()),n.set(i.field,r))}return n||null}function Lp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Jh(n,i,((t,e)=>{return i=e,(n=t).field.isEqual(i.field)&&function(t,e){return t instanceof vp&&e instanceof vp||t instanceof wp&&e instanceof wp?Jh(t.elements,e.elements,Wd):t instanceof kp&&e instanceof kp?Wd(t._t,e._t):t instanceof yp&&e instanceof yp}(n.transform,i.transform);var n,i}))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Op extends Cp{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dp extends Cp{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mp(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Pp(t,e,n){const i=new Map;Mh(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,mp(o,a,n[r]))}return i}function Bp(t,e,n){const i=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);i.set(a.field,(s=c,o=e,(r=t)instanceof yp?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):r instanceof vp?bp(r,s):r instanceof wp?xp(r,s):function(t,e){const n=gp(t,e),i=Ep(n)+Ep(t._t);return Qd(n)&&Qd(t._t)?dp(i):hp(t.serializer,i)}(r,s)))}var r,s,o;return i}class Up extends Cp{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fp extends Cp{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const o=this.mutations[e];o.key.isEqual(t.key)&&(i=o,r=t,s=n[e],i instanceof Op?function(t,e,n){const i=t.value.clone(),r=Pp(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,r,s):i instanceof Dp?function(t,e,n){if(!Sp(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Pp(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Mp(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,r,s):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,r,s))}var i,r,s}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ap(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ap(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rp();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Np(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Zh.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),cp())}isEqual(t){return this.batchId===t.batchId&&Jh(this.mutations,t.mutations,((t,e)=>Lp(t,e)))&&Jh(this.baseMutations,t.baseMutations,((t,e)=>Lp(t,e)))}}class jp{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Mh(t.mutations.length===n.length);let i=op;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new jp(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qp{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wp,$p;function Hp(t){switch(t){default:return Dh();case Bh.CANCELLED:case Bh.UNKNOWN:case Bh.DEADLINE_EXCEEDED:case Bh.RESOURCE_EXHAUSTED:case Bh.INTERNAL:case Bh.UNAVAILABLE:case Bh.UNAUTHENTICATED:return!1;case Bh.INVALID_ARGUMENT:case Bh.NOT_FOUND:case Bh.ALREADY_EXISTS:case Bh.PERMISSION_DENIED:case Bh.FAILED_PRECONDITION:case Bh.ABORTED:case Bh.OUT_OF_RANGE:case Bh.UNIMPLEMENTED:case Bh.DATA_LOSS:return!0}}function Kp(t){if(void 0===t)return Rh("GRPC error has no .code"),Bh.UNKNOWN;switch(t){case Wp.OK:return Bh.OK;case Wp.CANCELLED:return Bh.CANCELLED;case Wp.UNKNOWN:return Bh.UNKNOWN;case Wp.DEADLINE_EXCEEDED:return Bh.DEADLINE_EXCEEDED;case Wp.RESOURCE_EXHAUSTED:return Bh.RESOURCE_EXHAUSTED;case Wp.INTERNAL:return Bh.INTERNAL;case Wp.UNAVAILABLE:return Bh.UNAVAILABLE;case Wp.UNAUTHENTICATED:return Bh.UNAUTHENTICATED;case Wp.INVALID_ARGUMENT:return Bh.INVALID_ARGUMENT;case Wp.NOT_FOUND:return Bh.NOT_FOUND;case Wp.ALREADY_EXISTS:return Bh.ALREADY_EXISTS;case Wp.PERMISSION_DENIED:return Bh.PERMISSION_DENIED;case Wp.FAILED_PRECONDITION:return Bh.FAILED_PRECONDITION;case Wp.ABORTED:return Bh.ABORTED;case Wp.OUT_OF_RANGE:return Bh.OUT_OF_RANGE;case Wp.UNIMPLEMENTED:return Bh.UNIMPLEMENTED;case Wp.DATA_LOSS:return Bh.DATA_LOSS;default:return Dh()}}($p=Wp||(Wp={}))[$p.OK=0]="OK",$p[$p.CANCELLED=1]="CANCELLED",$p[$p.UNKNOWN=2]="UNKNOWN",$p[$p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$p[$p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$p[$p.NOT_FOUND=5]="NOT_FOUND",$p[$p.ALREADY_EXISTS=6]="ALREADY_EXISTS",$p[$p.PERMISSION_DENIED=7]="PERMISSION_DENIED",$p[$p.UNAUTHENTICATED=16]="UNAUTHENTICATED",$p[$p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$p[$p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$p[$p.ABORTED=10]="ABORTED",$p[$p.OUT_OF_RANGE=11]="OUT_OF_RANGE",$p[$p.UNIMPLEMENTED=12]="UNIMPLEMENTED",$p[$p.INTERNAL=13]="INTERNAL",$p[$p.UNAVAILABLE=14]="UNAVAILABLE",$p[$p.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Xp}static getOrCreateInstance(){return null===Xp&&(Xp=new Gp),Xp}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Xp=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Jp.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Qp(Zh.min(),i,up(),Zf(),cp())}}class Jp{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Jp(n,e,cp(),cp(),cp())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class Zp{constructor(t,e){this.targetId=t,this.Et=e}}class tm{constructor(t,e,n=Ld.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class em{constructor(){this.At=0,this.Rt=rm(),this.vt=Ld.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=cp(),e=cp(),n=cp();return this.Rt.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Dh()}})),new Jp(this.vt,this.bt,t,e,n)}xt(){this.Pt=!1,this.Rt=rm()}Nt(t,e){this.Pt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class nm{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=Zf(),this.qt=im(),this.Ut=new Cd(Qh)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}zt(t){this.forEachTarget(t,(e=>{const n=this.jt(e);switch(t.state){case 0:this.Wt(e)&&n.Dt(t.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(e);break;case 3:this.Wt(e)&&(n.Mt(),n.Dt(t.resumeToken));break;case 4:this.Wt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Dh()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.Wt(n)&&e(n)}))}Jt(t){var e;const n=t.targetId,i=t.Et.count,r=this.Yt(n);if(r){const s=r.target;if(Of(s))if(0===i){const t=new rd(s.path);this.Qt(n,t,of.newNoDocument(t,Zh.min()))}else Mh(1===i);else{const r=this.Zt(n);r!==i&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(e=Gp.instance)||void 0===e||e.notifyOnExistenceFilterMismatch({localCacheCount:r,existenceFilterCount:t.Et.count}))}}}Xt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&Of(r.target)){const e=new rd(r.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,of.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=cp();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new Qp(t,e,this.Ut,this.Lt,n);return this.Lt=Zf(),this.qt=im(),this.Ut=new Cd(Qh),i}Gt(t,e){if(!this.Wt(t))return;const n=this.te(t,e.key)?2:0;this.jt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.Wt(t))return;const i=this.jt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Zt(t){const e=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let e=this.Bt.get(t);return e||(e=new em,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Cd(Qh),this.qt=this.qt.insert(t,e)),e}Wt(t){const e=null!==this.Yt(t);return e||Ah("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new em),this.Ft.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.Ft.getRemoteKeysForTarget(t).has(e)}}function im(){return new Id(rd.comparator)}function rm(){return new Id(rd.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={asc:"ASCENDING",desc:"DESCENDING"},om={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},am={and:"AND",or:"OR"};class cm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function lm(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function um(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hm(t,e){return lm(t,e.toTimestamp())}function dm(t){return Mh(!!t),Zh.fromTimestamp(function(t){const e=Dd(t);return new Yh(e.seconds,e.nanos)}(t))}function fm(t,e){return function(t){return new ed(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function pm(t){const e=ed.fromString(t);return Mh(Dm(e)),e}function mm(t,e){return fm(t.databaseId,e.path)}function gm(t,e){const n=pm(e);if(n.get(1)!==t.databaseId.projectId)throw new Uh(Bh.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Uh(Bh.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new rd(wm(n))}function ym(t,e){return fm(t.databaseId,e)}function vm(t){const e=pm(t);return 4===e.length?ed.emptyPath():wm(e)}function bm(t){return new ed(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wm(t){return Mh(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xm(t,e,n){return{name:mm(t,e),fields:n.value.mapValue.fields}}function km(t,e){let n;if(e instanceof Op)n={update:xm(t,e.key,e.value)};else if(e instanceof Up)n={delete:mm(t,e.key)};else if(e instanceof Dp)n={update:xm(t,e.key,e.data),updateMask:Om(e.fieldMask)};else{if(!(e instanceof Fp))return Dh();n={verify:mm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof yp)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vp)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wp)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kp)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Dh()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:hm(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Dh()}(t,e.precondition)),n}function Em(t,e){return{documents:[ym(t,e.path)]}}function _m(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=ym(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ym(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return Lm(pf.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Am(t.field),direction:Sm(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.useProto3Json||gd(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Im(t){let e=vm(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Mh(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Tm(t);return e instanceof pf&&gf(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new uf(Rm((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,gd(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new af(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new af(n,e)}(n.endAt)),Mf(e,r,o,s,a,"F",c,l)}function Tm(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rm(t.unaryFilter.field);return ff.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rm(t.unaryFilter.field);return ff.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rm(t.unaryFilter.field);return ff.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Rm(t.unaryFilter.field);return ff.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Dh()}}(t):void 0!==t.fieldFilter?(n=t,ff.create(Rm(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Dh()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,pf.create(e.compositeFilter.filters.map((t=>Tm(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Dh()}}(e.compositeFilter.op))):Dh();var e,n}function Sm(t){return sm[t]}function Cm(t){return om[t]}function Nm(t){return am[t]}function Am(t){return{fieldPath:t.canonicalString()}}function Rm(t){return id.fromServerFormat(t.fieldPath)}function Lm(t){return t instanceof ff?function(t){if("=="===t.op){if(Zd(t.value))return{unaryFilter:{field:Am(t.field),op:"IS_NAN"}};if(Yd(t.value))return{unaryFilter:{field:Am(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Zd(t.value))return{unaryFilter:{field:Am(t.field),op:"IS_NOT_NAN"}};if(Yd(t.value))return{unaryFilter:{field:Am(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Am(t.field),op:Cm(t.op),value:t.value}}}(t):t instanceof pf?function(t){const e=t.getFilters().map((t=>Lm(t)));return 1===e.length?e[0]:{compositeFilter:{op:Nm(t.op),filters:e}}}(t):Dh()}function Om(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Dm(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,e,n,i,r=Zh.min(),s=Zh.min(),o=Ld.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Mm(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Mm(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Mm(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t){this.se=t}}function Bm(t){const e=Im({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?qf(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(Md(t.integerValue));else if("doubleValue"in t){const n=Md(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),yd(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(Pd(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?nf(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):Dh()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const t of Object.keys(n))this.fe(t,e),this.ue(n[t],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const t of n)this.ue(t,e)}_e(t,e){this.ae(e,37),rd.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}Um.pe=new Um;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fm{constructor(){this.He=new zm}addToCollectionParentIndex(t,e){return this.He.add(e),fd.resolve()}getCollectionParents(t,e){return fd.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return fd.resolve()}deleteFieldIndex(t,e){return fd.resolve()}getDocumentsMatchingTarget(t,e){return fd.resolve(null)}getIndexType(t,e){return fd.resolve(0)}getFieldIndexes(t,e){return fd.resolve([])}getNextCollectionGroupToUpdate(t){return fd.resolve(null)}getMinOffset(t,e){return fd.resolve(cd.min())}getMinOffsetFromCollectionGroup(t,e){return fd.resolve(cd.min())}updateCollectionGroup(t,e,n){return fd.resolve()}updateIndexEntries(t,e){return fd.resolve()}}class zm{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Cd(ed.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Cd(ed.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class jm{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new jm(t,jm.DEFAULT_COLLECTION_PERCENTILE,jm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jm.DEFAULT_COLLECTION_PERCENTILE=10,jm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jm.DEFAULT=new jm(41943040,jm.DEFAULT_COLLECTION_PERCENTILE,jm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jm.DISABLED=new jm(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vm{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Vm(0)}static bn(){return new Vm(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qm{constructor(){this.changes=new Jf((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,of.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?fd.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ap(n.mutation,t,Ad.empty(),Yh.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,cp()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=cp()){const i=ip();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=ep();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ip();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,cp())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Zf();const s=sp(),o=sp();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Dp)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Ap(o.mutation,e,o.mutation.getFieldMask(),Yh.now())):s.set(e.key,Ad.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Wm(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=sp();let i=new Id(((t,e)=>t-e)),r=cp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ad.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||cp()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=rp();c.forEach((t=>{if(!r.has(t)){const i=Np(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return fd.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return rd.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):fd.resolve(ip());let o=-1,a=r;return s.next((e=>fd.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?fd.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,cp()))).next((t=>({batchId:o,changes:np(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new rd(e)).next((t=>{let e=ep();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=ep();return this.indexManager.getCollectionParents(t,i).next((s=>fd.forEach(s,(s=>{const o=function(t,e){return new Df(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,of.newInvalidDocument(i)))}));let n=ep();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Ap(s.mutation,r,Ad.empty(),Yh.now()),Kf(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return fd.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:dm(n.createTime)}),fd.resolve()}getNamedQuery(t,e){return fd.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Bm(t.bundledQuery),readTime:dm(t.readTime)}}(e)),fd.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.overlays=new Id(rd.comparator),this.ts=new Map}getOverlay(t,e){return fd.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ip();return fd.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.re(t,e,i)})),fd.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.ts.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),fd.resolve()}getOverlaysForCollection(t,e,n){const i=ip(),r=e.length+1,s=new rd(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return fd.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Id(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=ip(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ip(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return fd.resolve(o)}re(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.ts.get(i.largestBatchId).delete(n.key);this.ts.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Vp(e,n));let r=this.ts.get(e);void 0===r&&(r=cp(),this.ts.set(e,r)),this.ts.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.es=new Cd(Xm.ns),this.ss=new Cd(Xm.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new Xm(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new Xm(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new rd(new ed([])),n=new Xm(e,t),i=new Xm(e,t+1),r=[];return this.ss.forEachInRange([n,i],(t=>{this.us(t),r.push(t.key)})),r}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new rd(new ed([])),n=new Xm(e,t),i=new Xm(e,t+1);let r=cp();return this.ss.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Xm(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Xm{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return rd.comparator(t.key,e.key)||Qh(t.ds,e.ds)}static rs(t,e){return Qh(t.ds,e.ds)||rd.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new Cd(Xm.ns)}checkEmpty(t){return fd.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zp(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this._s=this._s.add(new Xm(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return fd.resolve(s)}lookupMutationBatch(t,e){return fd.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ys(n),r=i<0?0:i;return fd.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return fd.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return fd.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Xm(e,0),i=new Xm(e,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([n,i],(t=>{const e=this.gs(t.ds);r.push(e)})),fd.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Cd(Qh);return e.forEach((t=>{const e=new Xm(t,0),i=new Xm(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,i],(t=>{n=n.add(t.ds)}))})),fd.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;rd.isDocumentKey(r)||(r=r.child(""));const s=new Xm(new rd(r),0);let o=new Cd(Qh);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ds)),!0)}),s),fd.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Mh(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return fd.forEach(e.mutations,(i=>{const r=new Xm(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new Xm(e,0),i=this._s.firstAfterOrEqual(n);return fd.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,fd.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(t){this.Ts=t,this.docs=new Id(rd.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return fd.resolve(n?n.document.mutableCopy():of.newInvalidDocument(e))}getEntries(t,e){let n=Zf();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():of.newInvalidDocument(t))})),fd.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Zf();const s=e.path,o=new rd(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||ld(ad(o),n)<=0||(i.has(o.key)||Kf(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return fd.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Dh()}Es(t,e){return fd.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ym(this)}getSize(t){return fd.resolve(this.size)}}class Ym extends qm{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Jn.addEntry(t,i)):this.Jn.removeEntry(n)})),fd.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t){this.persistence=t,this.As=new Jf((t=>Rf(t)),Lf),this.lastRemoteSnapshotVersion=Zh.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Gm,this.targetCount=0,this.bs=Vm.vn()}forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),fd.resolve()}getLastRemoteSnapshotVersion(t){return fd.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return fd.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),fd.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),fd.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Vm(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,fd.resolve()}updateTargetData(t,e){return this.Sn(e),fd.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,fd.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),fd.waitFor(r).next((()=>i))}getTargetCount(t){return fd.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return fd.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),fd.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),fd.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),fd.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return fd.resolve(n)}containsKey(t,e){return fd.resolve(this.vs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new md(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new Zm(this),this.indexManager=new Fm,this.remoteDocumentCache=function(t){return new Jm(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new Pm(e),this.xs=new Hm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Km,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new Qm(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){Ah("MemoryPersistence","Starting transaction:",t);const i=new eg(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((t=>this.referenceDelegate.ks(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Os(t,e){return fd.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class eg extends hd{constructor(t){super(),this.currentSequenceNumber=t}}class ng{constructor(t){this.persistence=t,this.$s=new Gm,this.Ms=null}static Fs(t){return new ng(t)}get Bs(){if(this.Ms)return this.Ms;throw Dh()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),fd.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),fd.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),fd.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fd.forEach(this.Bs,(n=>{const i=rd.fromPath(n);return this.Ls(t,i).next((t=>{t||e.removeEntry(i,Zh.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return fd.or([()=>fd.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ig{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=i}static Di(t,e){let n=cp(),i=cp();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new ig(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ni(t,e).next((r=>r||this.ki(t,e,i,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(Bf(e))return fd.resolve(null);let n=Vf(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=qf(e,null,"F"),n=Vf(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=cp(...i);return this.xi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.$i(e,i);return this.Mi(e,s,r,n.readTime)?this.Ni(t,qf(e,null,"F")):this.Fi(t,s,e,n)}))))})))))}ki(t,e,n,i){return Bf(e)||i.isEqual(Zh.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((r=>{const s=this.$i(e,r);return this.Mi(e,s,n,i)?this.Oi(t,e):(Nh()<=Ai.DEBUG&&Ah("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hf(e)),this.Fi(t,s,e,od(i,-1)))}))}$i(t,e){let n=new Cd(Xf(t));return e.forEach(((e,i)=>{Kf(t,i)&&(n=n.add(i))})),n}Mi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(t,e){return Nh()<=Ai.DEBUG&&Ah("QueryEngine","Using full collection scan to execute query:",Hf(e)),this.xi.getDocumentsMatchingQuery(t,e,cd.min())}Fi(t,e,n,i){return this.xi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,e,n,i){this.persistence=t,this.Bi=e,this.serializer=i,this.Li=new Id(Qh),this.qi=new Jf((t=>Rf(t)),Lf),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $m(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function og(t,e,n,i){return new sg(t,e,n,i)}async function ag(t,e){const n=Ph(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=cp();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function cg(t){const e=Ph(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function lg(t,e,n){let i=cp(),r=cp();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Zf();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(Zh.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Ah("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:i,ji:r}}))}function ug(t,e){const n=Ph(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function hg(t,e){const n=Ph(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Ds.getTargetData(t,e).next((r=>r?(i=r,fd.resolve(i)):n.Ds.allocateTargetId(t).next((r=>(i=new Mm(e,r,0,t.currentSequenceNumber),n.Ds.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Li.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function dg(t,e,n){const i=Ph(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!pd(t))throw t;Ah("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function fg(t,e,n){const i=Ph(t);let r=Zh.min(),s=cp();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Ph(t),r=i.qi.get(n);return void 0!==r?fd.resolve(i.Li.get(r)):i.Ds.getTargetData(e,n)}(i,t,Vf(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Bi.getDocumentsMatchingQuery(t,e,n?r:Zh.min(),n?s:cp()))).next((t=>(pg(i,Gf(e),t),{documents:t,Wi:s})))))}function pg(t,e,n){let i=t.Ui.get(e)||Zh.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ui.set(e,i)}class mg{constructor(){this.activeTargetIds=up()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gg{constructor(){this.Br=new mg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new mg,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Ah("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){Ah("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bg=null;function wg(){return null===bg?bg=268435456+Math.round(2147483648*Math.random()):bg++,"0x"+bg.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const xg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,n,i,r){const s=wg(),o=this.ao(t,e);Ah("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.ho(a,i,r),this.lo(t,o,a,n).then((e=>(Ah("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Lh("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,i,r,s){return this.co(t,e,n,i,r)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Sh,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=xg[t];return`${this.ro}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,i){const r=wg();return new Promise(((s,o)=>{const a=new Ih;a.setWithCredentials(!0),a.listenOnce(wh.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case bh.NO_ERROR:const e=a.getResponseJson();Ah("WebChannelConnection",`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case bh.TIMEOUT:Ah("WebChannelConnection",`RPC '${t}' ${r} timed out`),o(new Uh(Bh.DEADLINE_EXCEEDED,"Request time out"));break;case bh.HTTP_ERROR:const n=a.getStatus();if(Ah("WebChannelConnection",`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Bh).indexOf(e)>=0?e:Bh.UNKNOWN}(e.status);o(new Uh(t,e.message))}else o(new Uh(Bh.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Uh(Bh.UNAVAILABLE,"Connection failed."));break;default:Dh()}}finally{Ah("WebChannelConnection",`RPC '${t}' ${r} completed.`)}}));const c=JSON.stringify(i);Ah("WebChannelConnection",`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const i=wg(),r=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=yh(),o=vh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Eh({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");Ah("WebChannelConnection",`Creating RPC '${t}' stream ${i}: ${c}`,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const d=new kg({Wr:e=>{h?Ah("WebChannelConnection",`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(Ah("WebChannelConnection",`Opening RPC '${t}' stream ${i} transport.`),l.open(),u=!0),Ah("WebChannelConnection",`RPC '${t}' stream ${i} sending:`,e),l.send(e))},Hr:()=>l.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(l,_h.EventType.OPEN,(()=>{h||Ah("WebChannelConnection",`RPC '${t}' stream ${i} transport opened.`)})),f(l,_h.EventType.CLOSE,(()=>{h||(h=!0,Ah("WebChannelConnection",`RPC '${t}' stream ${i} transport closed`),d.so())})),f(l,_h.EventType.ERROR,(e=>{h||(h=!0,Lh("WebChannelConnection",`RPC '${t}' stream ${i} transport errored:`,e),d.so(new Uh(Bh.UNAVAILABLE,"The operation could not be completed")))})),f(l,_h.EventType.MESSAGE,(e=>{var n;if(!h){const r=e.data[0];Mh(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Ah("WebChannelConnection",`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Wp[t];if(void 0!==e)return Kp(e)}(e),r=o.message;void 0===n&&(n=Bh.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),h=!0,d.so(new Uh(n,r)),l.close()}else Ah("WebChannelConnection",`RPC '${t}' stream ${i} received:`,r),d.io(r)}})),f(o,xh.STAT_EVENT,(e=>{e.stat===kh.PROXY?Ah("WebChannelConnection",`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===kh.NOPROXY&&Ah("WebChannelConnection",`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){return new cm(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,e-n);i>0&&Ah("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,e,n,i,r,s,o,a){this.Ws=t,this.bo=n,this.Po=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Tg(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===Bh.RESOURCE_EXHAUSTED?(Rh(e.toString()),Rh("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===Bh.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new Uh(Bh.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return Ah("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(Ah("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cg extends Sg{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}Qo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Co.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Dh()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(Mh(void 0===e||"string"==typeof e),Ld.fromBase64String(e||"")):(Mh(void 0===e||e instanceof Uint8Array),Ld.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Bh.UNKNOWN:Kp(t.code);return new Uh(e,t.message||"")}(o);n=new tm(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=gm(t,i.document.name),s=dm(i.document.updateTime),o=i.document.createTime?dm(i.document.createTime):Zh.min(),a=new rf({mapValue:{fields:i.document.fields}}),c=of.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Yp(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=gm(t,i.document),s=i.readTime?dm(i.readTime):Zh.min(),o=of.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Yp([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=gm(t,i.document),s=i.removedTargetIds||[];n=new Yp([],s,r,null)}else{if(!("filter"in e))return Dh();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new qp(i),s=t.targetId;n=new Zp(s,r)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return Zh.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Zh.min():e.readTime?dm(e.readTime):Zh.min()}(t);return this.listener.zo(e,n)}jo(t){const e={};e.database=bm(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;return n=Of(i)?{documents:Em(t,i)}:{query:_m(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=um(t,e.resumeToken):e.snapshotVersion.compareTo(Zh.min())>0&&(n.readTime=lm(t,e.snapshotVersion.toTimestamp())),n}(this.serializer,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Dh()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=bm(this.serializer),e.removeTarget=t,this.Fo(e)}}class Ng extends Sg{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Mh(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Mh(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?dm(t.updateTime):dm(e);return n.isEqual(Zh.min())&&(n=dm(e)),new Ip(n,t.transformResults||[])}(t,n)))):[]),r=dm(t.commitTime);return this.listener.Zo(r,i)}var e,n;return Mh(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=bm(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>km(this.serializer,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new Uh(Bh.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.co(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Uh(Bh.UNKNOWN,t.toString())}))}fo(t,e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.fo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Uh(Bh.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class Rg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Rh(e),this.ru=!1):Ah("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr((t=>{n.enqueueAndForget((async()=>{jg(this)&&(Ah("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ph(t);e.du.add(4),await Dg(e),e.mu.set("Unknown"),e.du.delete(4),await Og(e)}(this))}))})),this.mu=new Rg(n,i)}}async function Og(t){if(jg(t))for(const e of t.wu)await e(!0)}async function Dg(t){for(const e of t.wu)await e(!1)}function Mg(t,e){const n=Ph(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),zg(n)?Fg(n):sy(n).No()&&Bg(n,e))}function Pg(t,e){const n=Ph(t),i=sy(n);n.fu.delete(e),i.No()&&Ug(n,e),0===n.fu.size&&(i.No()?i.$o():jg(n)&&n.mu.set("Unknown"))}function Bg(t,e){t.gu.Ot(e.targetId),sy(t).jo(e)}function Ug(t,e){t.gu.Ot(e),sy(t).Wo(e)}function Fg(t){t.gu=new nm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),sy(t).start(),t.mu.ou()}function zg(t){return jg(t)&&!sy(t).xo()&&t.fu.size>0}function jg(t){return 0===Ph(t).du.size}function Vg(t){t.gu=void 0}async function qg(t){t.fu.forEach(((e,n)=>{Bg(t,e)}))}async function Wg(t,e){Vg(t),zg(t)?(t.mu.au(e),Fg(t)):t.mu.set("Unknown")}async function $g(t,e,n){if(t.mu.set("Online"),e instanceof tm&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.fu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.fu.delete(i),t.gu.removeTarget(i))}(t,e)}catch(n){Ah("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Hg(t,n)}else if(e instanceof Yp?t.gu.Kt(e):e instanceof Zp?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Zh.min()))try{const e=await cg(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.gu.Xt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.fu.get(i);r&&t.fu.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.fu.get(e);if(!n)return;t.fu.set(e,n.withResumeToken(Ld.EMPTY_BYTE_STRING,n.snapshotVersion)),Ug(t,e);const i=new Mm(n.target,e,1,n.sequenceNumber);Bg(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ah("RemoteStore","Failed to raise snapshot:",e),await Hg(t,e)}}async function Hg(t,e,n){if(!pd(e))throw e;t.du.add(1),await Dg(t),t.mu.set("Offline"),n||(n=()=>cg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ah("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Og(t)}))}function Kg(t,e){return e().catch((n=>Hg(t,n,e)))}async function Gg(t){const e=Ph(t),n=oy(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Xg(e);)try{const t=await ug(e.localStore,i);if(null===t){0===e.lu.length&&n.$o();break}i=t.batchId,Qg(e,t)}catch(t){await Hg(e,t)}Jg(e)&&Yg(e)}function Xg(t){return jg(t)&&t.lu.length<10}function Qg(t,e){t.lu.push(e);const n=oy(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Jg(t){return jg(t)&&!oy(t).xo()&&t.lu.length>0}function Yg(t){oy(t).start()}async function Zg(t){oy(t).tu()}async function ty(t){const e=oy(t);for(const n of t.lu)e.Yo(n.mutations)}async function ey(t,e,n){const i=t.lu.shift(),r=jp.from(i,e,n);await Kg(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Gg(t)}async function ny(t,e){e&&oy(t).Jo&&await async function(t,e){if(Hp(n=e.code)&&n!==Bh.ABORTED){const n=t.lu.shift();oy(t).Oo(),await Kg(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Gg(t)}var n}(t,e),Jg(t)&&Yg(t)}async function iy(t,e){const n=Ph(t);n.asyncQueue.verifyOperationInProgress(),Ah("RemoteStore","RemoteStore received new credentials");const i=jg(n);n.du.add(3),await Dg(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Og(n)}async function ry(t,e){const n=Ph(t);e?(n.du.delete(2),await Og(n)):e||(n.du.add(2),await Dg(n),n.mu.set("Unknown"))}function sy(t){return t.yu||(t.yu=function(t,e,n){const i=Ph(t);return i.nu(),new Cg(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Jr:qg.bind(null,t),Zr:Wg.bind(null,t),zo:$g.bind(null,t)}),t.wu.push((async e=>{e?(t.yu.Oo(),zg(t)?Fg(t):t.mu.set("Unknown")):(await t.yu.stop(),Vg(t))}))),t.yu}function oy(t){return t.pu||(t.pu=function(t,e,n){const i=Ph(t);return i.nu(),new Ng(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Jr:Zg.bind(null,t),Zr:ny.bind(null,t),Xo:ty.bind(null,t),Zo:ey.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await Gg(t)):(await t.pu.stop(),t.lu.length>0&&(Ah("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ay{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Fh,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new ay(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Uh(Bh.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cy(t,e){if(Rh("AsyncQueue",`${e}: ${t}`),pd(t))return new Uh(Bh.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t){this.comparator=t?(e,n)=>t(e,n)||rd.comparator(e.key,n.key):(t,e)=>rd.comparator(t.key,e.key),this.keyedMap=ep(),this.sortedSet=new Id(this.comparator)}static emptySet(t){return new ly(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ly))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ly;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.Iu=new Id(rd.comparator)}track(t){const e=t.doc.key,n=this.Iu.get(e);n?0!==t.type&&3===n.type?this.Iu=this.Iu.insert(e,t):3===t.type&&1!==n.type?this.Iu=this.Iu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Iu=this.Iu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Iu=this.Iu.remove(e):1===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):Dh():this.Iu=this.Iu.insert(e,t)}Tu(){const t=[];return this.Iu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class hy{constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new hy(t,e,ly.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.Eu=void 0,this.listeners=[]}}class fy{constructor(){this.queries=new Jf((t=>$f(t)),Wf),this.onlineState="Unknown",this.Au=new Set}}async function py(t,e){const n=Ph(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new dy),r)try{s.Eu=await n.onListen(i)}catch(t){const n=cy(t,`Initialization of query '${Hf(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&vy(n)}async function my(t,e){const n=Ph(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function gy(t,e){const n=Ph(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.vu(t)&&(i=!0);r.Eu=t}}i&&vy(n)}function yy(t,e,n){const i=Ph(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}function vy(t){t.Au.forEach((t=>{t.next()}))}class by{constructor(t,e,n){this.query=t,this.bu=e,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new hy(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),e=!0):this.Du(t,this.onlineState)&&(this.Cu(t),e=!0),this.Vu=t,e}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),e=!0),e}Du(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.xu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Su(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Cu(t){t=hy.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wy{constructor(t){this.key=t}}class xy{constructor(t){this.key=t}}class ky{constructor(t,e){this.query=t,this.Lu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=cp(),this.mutatedKeys=cp(),this.Ku=Xf(t),this.Gu=new ly(this.Ku)}get Qu(){return this.Lu}zu(t,e){const n=e?e.ju:new uy,i=e?e.Gu:this.Gu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Kf(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Wu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ku(u,a)>0||c&&this.Ku(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Gu:s,ju:n,Mi:o,mutatedKeys:r}}Wu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.ju.Tu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Dh()}};return n(t)-n(e)}(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const s=e?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new hy(this.query,t.Gu,i,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new uy,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=cp(),this.Gu.forEach((t=>{this.Zu(t.key)&&(this.Uu=this.Uu.add(t.key))}));const e=[];return t.forEach((t=>{this.Uu.has(t)||e.push(new xy(t))})),this.Uu.forEach((n=>{t.has(n)||e.push(new wy(n))})),e}Xu(t){this.Lu=t.Wi,this.Uu=cp();const e=this.zu(t.documents);return this.applyChanges(e,!0)}tc(){return hy.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Ey{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _y{constructor(t){this.key=t,this.ec=!1}}class Iy{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Jf((t=>$f(t)),Wf),this.ic=new Map,this.rc=new Set,this.oc=new Id(rd.comparator),this.uc=new Map,this.cc=new Gm,this.ac={},this.hc=new Map,this.lc=Vm.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Ty(t,e){const n=Wy(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const t=await hg(n.localStore,Vf(e));n.isPrimaryClient&&Mg(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Sy(n,e,i,"current"===s,t.resumeToken)}return r}async function Sy(t,e,n,i,r){t.dc=(e,n,i)=>async function(t,e,n,i){let r=e.view.zu(n);r.Mi&&(r=await fg(t.localStore,e.query,!1).then((({documents:t})=>e.view.zu(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Uy(t,e.targetId,o.Yu),o.snapshot}(t,e,n,i);const s=await fg(t.localStore,e,!0),o=new ky(e,s.Wi),a=o.zu(s.documents),c=Jp.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),l=o.applyChanges(a,t.isPrimaryClient,c);Uy(t,n,l.Yu);const u=new Ey(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function Cy(t,e){const n=Ph(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter((t=>!Wf(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await dg(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Pg(n.remoteStore,i.targetId),Py(n,i.targetId)})).catch(dd)):(Py(n,i.targetId),await dg(n.localStore,i.targetId,!0))}async function Ny(t,e){const n=Ph(t);try{const t=await function(t,e){const n=Ph(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Ld.EMPTY_BYTE_STRING,Zh.min()).withLastLimboFreeSnapshotVersion(Zh.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,s)&&o.push(n.Ds.updateTargetData(t,l))}));let a=Zf(),c=cp();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(lg(t,s,e.documentUpdates).next((t=>{a=t.zi,c=t.ji}))),!i.isEqual(Zh.min())){const e=n.Ds.getLastRemoteSnapshotVersion(t).next((e=>n.Ds.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return fd.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Li=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.uc.get(e);i&&(Mh(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.ec=!0:t.modifiedDocuments.size>0?Mh(i.ec):t.removedDocuments.size>0&&(Mh(i.ec),i.ec=!1))})),await jy(n,t,e)}catch(t){await dd(t)}}function Ay(t,e,n){const i=Ph(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.sc.forEach(((n,i)=>{const r=i.view.Ru(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Ph(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Ru(e)&&(i=!0)})),i&&vy(n)}(i.eventManager,e),t.length&&i.nc.zo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Ry(t,e,n){const i=Ph(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let t=new Id(rd.comparator);t=t.insert(s,of.newNoDocument(s,Zh.min()));const n=cp().add(s),r=new Qp(Zh.min(),new Map,new Cd(Qh),t,n);await Ny(i,r),i.oc=i.oc.remove(s),i.uc.delete(e),zy(i)}else await dg(i.localStore,e,!1).then((()=>Py(i,e,n))).catch(dd)}async function Ly(t,e){const n=Ph(t),i=e.batch.batchId;try{const t=await function(t,e){const n=Ph(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=fd.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Mh(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=cp();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);My(n,i,null),Dy(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await jy(n,t)}catch(t){await dd(t)}}async function Oy(t,e,n){const i=Ph(t);try{const t=await function(t,e){const n=Ph(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Mh(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);My(i,e,n),Dy(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await jy(i,t)}catch(t){await dd(t)}}function Dy(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function My(t,e,n){const i=Ph(t);let r=i.ac[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function Py(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach((e=>{t.cc.containsKey(e)||By(t,e)}))}function By(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Pg(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),zy(t))}function Uy(t,e,n){for(const i of n)i instanceof wy?(t.cc.addReference(i.key,e),Fy(t,i)):i instanceof xy?(Ah("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||By(t,i.key)):Dh()}function Fy(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(Ah("SyncEngine","New document in limbo: "+n),t.rc.add(i),zy(t))}function zy(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new rd(ed.fromString(e)),i=t.lc.next();t.uc.set(i,new _y(n)),t.oc=t.oc.insert(n,i),Mg(t.remoteStore,new Mm(Vf(Pf(n.path)),i,2,md.ct))}}async function jy(t,e,n){const i=Ph(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((t,a)=>{o.push(i.dc(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=ig.Di(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.nc.zo(r),await async function(t,e){const n=Ph(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>fd.forEach(e,(e=>fd.forEach(e.Vi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>fd.forEach(e.Si,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!pd(t))throw t;Ah("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Li.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Li=n.Li.insert(e,r)}}}(i.localStore,s))}async function Vy(t,e){const n=Ph(t);if(!n.currentUser.isEqual(e)){Ah("SyncEngine","User change. New user:",e.toKey());const t=await ag(n.localStore,e);n.currentUser=e,(i=n).hc.forEach((t=>{t.forEach((t=>{t.reject(new Uh(Bh.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.hc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await jy(n,t.Qi)}var i}function qy(t,e){const n=Ph(t),i=n.uc.get(e);if(i&&i.ec)return cp().add(i.key);{let t=cp();const i=n.ic.get(e);if(!i)return t;for(const e of i){const i=n.sc.get(e);t=t.unionWith(i.view.Qu)}return t}}function Wy(t){const e=Ph(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ry.bind(null,e),e.nc.zo=gy.bind(null,e.eventManager),e.nc.wc=yy.bind(null,e.eventManager),e}function $y(t){const e=Ph(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ly.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Oy.bind(null,e),e}class Hy{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ig(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return og(this.persistence,new rg,t.initialUser,this.serializer)}createPersistence(t){return new tg(ng.Fs,this.serializer)}createSharedClientState(t){return new gg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ky{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ay(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vy.bind(null,this.syncEngine),await ry(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fy}createDatastore(t){const e=Ig(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Eg(i));var i;return function(t,e,n,i){return new Ag(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,i,r,s;return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Ay(this.syncEngine,t,0),s=vg.D()?new vg:new yg,new Lg(e,n,i,r,s)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Iy(t,e,n,i,r,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ph(t);Ah("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Dg(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gy{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Rh("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xy{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Th.UNAUTHENTICATED,this.clientId=Xh.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ah("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ah("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Uh(Bh.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fh;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cy(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Qy(t,e){t.asyncQueue.verifyOperationInProgress(),Ah("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await ag(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zy(t);Ah("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>iy(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>iy(e.remoteStore,n))),t._onlineComponents=e}function Yy(t){return"FirebaseError"===t.name?t.code===Bh.FAILED_PRECONDITION||t.code===Bh.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Zy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ah("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qy(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Yy(n))throw n;Lh("Error using user provided cache. Falling back to memory cache: "+n),await Qy(t,new Hy)}}else Ah("FirestoreClient","Using default OfflineComponentProvider"),await Qy(t,new Hy);return t._offlineComponents}async function tv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ah("FirestoreClient","Using user provided OnlineComponentProvider"),await Jy(t,t._uninitializedComponentsProvider._online)):(Ah("FirestoreClient","Using default OnlineComponentProvider"),await Jy(t,new Ky))),t._onlineComponents}function ev(t){return tv(t).then((t=>t.syncEngine))}async function nv(t){const e=await tv(t),n=e.eventManager;return n.onListen=Ty.bind(null,e.syncEngine),n.onUnlisten=Cy.bind(null,e.syncEngine),n}function iv(t,e,n={}){const i=new Fh;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Gy({next:n=>{e.enqueueAndForget((()=>my(t,o))),n.fromCache&&"server"===i.source?r.reject(new Uh(Bh.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new by(n,s,{includeMetadataChanges:!0,xu:!0});return py(t,o)}(await nv(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rv=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t,e,n){if(!n)throw new Uh(Bh.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ov(t){if(!rd.isDocumentKey(t))throw new Uh(Bh.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function av(t){if(rd.isDocumentKey(t))throw new Uh(Bh.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cv(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Dh()}function lv(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Uh(Bh.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cv(t);throw new Uh(Bh.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uv{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Uh(Bh.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Uh(Bh.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Uh(Bh.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Uh(Bh.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Uh(Bh.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uv(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new jh;switch(t.type){case"firstParty":return new $h(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Uh(Bh.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=rv.get(t);e&&(Ah("ComponentProvider","Removing Datastore"),rv.delete(t),e.terminate())}(this),Promise.resolve()}}function dv(t,e,n,i={}){var r;const s=(t=lv(t,hv))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Lh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Th.MOCK_USER;else{e=ci(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Uh(Bh.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Th(s)}t._authCredentials=new Vh(new zh(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mv(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fv(this.firestore,t,this._key)}}class pv{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new pv(this.firestore,t,this._query)}}class mv extends pv{constructor(t,e,n){super(t,e,Pf(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fv(this.firestore,null,new rd(t))}withConverter(t){return new mv(this.firestore,t,this._path)}}function gv(t,e,...n){if(t=Ii(t),sv("collection","path",e),t instanceof hv){const i=ed.fromString(e,...n);return av(i),new mv(t,null,i)}{if(!(t instanceof fv||t instanceof mv))throw new Uh(Bh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ed.fromString(e,...n));return av(i),new mv(t.firestore,null,i)}}function yv(t,e,...n){if(t=Ii(t),1===arguments.length&&(e=Xh.A()),sv("doc","path",e),t instanceof hv){const i=ed.fromString(e,...n);return ov(i),new fv(t,null,new rd(i))}{if(!(t instanceof fv||t instanceof mv))throw new Uh(Bh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ed.fromString(e,...n));return ov(i),new fv(t.firestore,t instanceof mv?t.converter:null,new rd(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vv{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Tg(this,"async_queue_retry"),this.qc=()=>{const t=_g();t&&Ah("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=_g();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=_g();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new Fh;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!pd(t))throw t;Ah("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw Rh("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const i=ay.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(i),i}Uc(){this.Mc&&Dh()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class bv extends hv{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new vv,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xv(this),this._firestoreClient.terminate()}}function wv(t){return t._firestoreClient||xv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xv(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new zd(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Xy(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kv{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kv(Ld.fromBase64String(t))}catch(t){throw new Uh(Bh.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new kv(Ld.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Uh(Bh.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new id(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _v{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Uh(Bh.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Uh(Bh.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Qh(this._lat,t._lat)||Qh(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=/^__.*__$/;class Sv{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Dp(t,this.data,this.fieldMask,e,this.fieldTransforms):new Op(t,this.data,e,this.fieldTransforms)}}function Cv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Dh()}}class Nv{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Nv(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Zc({path:n,ta:!1});return i.ea(t),i}na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Zc({path:n,ta:!1});return i.Jc(),i}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return zv(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(Cv(this.Yc)&&Tv.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Av{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ig(t)}ua(t,e,n,i=!1){return new Nv({Yc:t,methodName:e,oa:n,path:id.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rv(t){const e=t._freezeSettings(),n=Ig(t._databaseId);return new Av(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lv(t,e,n,i,r,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,r);Pv("Data must be an object, but it was:",o,i);const a=Dv(i,o);let c,l;if(s.merge)c=new Ad(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Bv(e,i,n);if(!o.contains(r))throw new Uh(Bh.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);jv(t,r)||t.push(r)}c=new Ad(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Sv(new rf(a),c,l)}function Ov(t,e){if(Mv(t=Ii(t)))return Pv("Unsupported field value:",e,t),Dv(t,e);if(t instanceof _v)return function(t,e){if(!Cv(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Ov(r,e.sa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Ii(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return fp(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Yh.fromDate(t);return{timestampValue:lm(e.serializer,n)}}if(t instanceof Yh){const n=new Yh(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:lm(e.serializer,n)}}if(t instanceof Iv)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof kv)return{bytesValue:um(e.serializer,t._byteString)};if(t instanceof fv){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:fm(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${cv(t)}`)}(t,e)}function Dv(t,e){const n={};return _d(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ed(t,((t,i)=>{const r=Ov(i,e.Xc(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Mv(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Yh||t instanceof Iv||t instanceof kv||t instanceof fv||t instanceof _v)}function Pv(t,e,n){if(!Mv(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=cv(n);throw"an object"===i?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function Bv(t,e,n){if((e=Ii(e))instanceof Ev)return e._internalPath;if("string"==typeof e)return Fv(t,e);throw zv("Field path arguments must be of type string or ",t,!1,void 0,n)}const Uv=new RegExp("[~\\*/\\[\\]]");function Fv(t,e,n){if(e.search(Uv)>=0)throw zv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ev(...e.split("."))._internalPath}catch(i){throw zv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zv(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Uh(Bh.INVALID_ARGUMENT,a+t+c)}function jv(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new fv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new qv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wv("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class qv extends Vv{data(){return super.data()}}function Wv(t,e){return"string"==typeof e?Fv(t,e):e instanceof Ev?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Uh(Bh.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hv{convertValue(t,e="none"){switch(qd(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Md(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Pd(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Dh()}}convertObject(t,e){const n={};return Ed(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Iv(Md(t.latitude),Md(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ud(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Fd(t));default:return null}}convertTimestamp(t){const e=Dd(t);return new Yh(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ed.fromString(t);Mh(Dm(n));const i=new jd(n.get(1),n.get(3)),r=new rd(n.popFirst(5));return i.isEqual(e)||Rh(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gv{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xv extends Vv{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Wv("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Qv extends Xv{data(t={}){return super.data(t)}}class Jv{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Gv(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Qv(this._firestore,this._userDataWriter,n.key,n,new Gv(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Uh(Bh.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new Qv(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Gv(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new Qv(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Gv(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Yv(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Yv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Dh()}}class Zv extends Hv{constructor(t){super(),this.firestore=t}convertBytes(t){return new kv(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new fv(this.firestore,null,e)}}function tb(t){t=lv(t,pv);const e=lv(t.firestore,bv),n=wv(e),i=new Zv(e);return $v(t._query),iv(n,t._query).then((n=>new Jv(e,i,t,n)))}function eb(t,e,n){t=lv(t,fv);const i=lv(t.firestore,bv),r=Kv(t.converter,e,n);return ib(i,[Lv(Rv(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Tp.none())])}function nb(t){return ib(lv(t.firestore,bv),[new Up(t._key,Tp.none())])}function ib(t,e){return function(t,e){const n=new Fh;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=$y(t);try{const t=await function(t,e){const n=Ph(t),i=Yh.now(),r=e.reduce(((t,e)=>t.add(e.key)),cp());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Zf(),c=cp();return n.Ki.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Rp(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Dp(t.key,e,sf(e.value.mapValue),Tp.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:np(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.ac[t.currentUser.toKey()];i||(i=new Id(Qh)),i=i.insert(e,n),t.ac[t.currentUser.toKey()]=i}(i,t.batchId,n),await jy(i,t.changes),await Gg(i.remoteStore)}catch(t){const e=cy(t,"Failed to persist write");n.reject(e)}}(await ev(t),e,n))),n.promise}(wv(t),e)}!function(t,e=!0){Sh="9.19.1",or(new Ti("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new bv(new qh(t.getProvider("auth-internal")),new Kh(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Uh(Bh.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jd(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),dr("@firebase/firestore","3.10.0",t),dr("@firebase/firestore","3.10.0","esm2017")}();const rb=function(t,e){const n="string"==typeof t?t:e||"(default)",i=ar("object"==typeof t?t:hr(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=si("firestore");t&&dv(i,...t)}return i}(la),sb=localStorage.getItem("fireBaseAuthorized");async function ob(t){try{if(!t)return;const e=await eb(yv(rb,`${sb}_${QUE_WATCHED}`,t.id),t);console.log("Document written with ID: ",e.id)}catch(t){console.error("Error adding document: ",t)}}async function ab(t){try{if(!t)return;await nb(yv(rb,`${sb}_${QUE_WATCHED}`,t.id));console.log("Document deleted with ID: ",t.id)}catch(t){console.error("Error deleting document: ",t)}}async function cb(t){console.log(sb);const e=await tb(gv(rb,`${sb}_${t}`));return e.docs.legth>0?e.docs:(console.error("Error of getting film's data"),[])}const lb=document.querySelector(".backdrop-container");function ub(t,e){const{genres:n,id:i,poster_path:r,original_title:s,overview:o,popularity:a,vote_average:c,vote_count:l,videoId:u}=t;let h="";if(u){const t=new Ln;h=t.createIframe(u),lb.innerHTML=`\n      <div class="modal" data-modal="2">\n        <button type="button" class="btn-close js-close-modal" id="btn-close">\n            <svg class="form__close-icon" width="24px" height="24px" viewBox="0 0 30 30">\n              <path data-btn="close" d="M14.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>\n            </svg>\n        </button>\n        <div id="modal_form">\n            <div class="form">\n                <div class="form__film-card">\n                    <div class="form__film-img">\n                        <img class="form-img" src="${r}"\n                            alt="${s}">\n                    </div>\n                </div>\n                <div class="form__info">\n                    <h2 class="form__title">${s}</h2>\n                    <ul class="form__info-list">\n                        <li class="form__info-item">\n                            <p class="form__info-name">Vote / Votes</p>\n                            <p class="form__info-details"> <span class="film__rating">${c}</span>/<span class="film__voice">${l}</span></p>\n                        </li>\n                        <li class="form__info-item">\n                            <p class="form__info-name">Popularity</p>\n                            <p class="form__info-details">${a}</p>\n                        </li>\n                        <li class="form__info-item">\n                            <p class="form__info-name">Original Title</p>\n                            <p class="form__info-details details-title">${s}</p>\n                        </li>\n                        <li class="form__info-item">\n                            <p class="form__info-name">Genre</p>\n                            <p class="form__info-details">${n}</p>\n                        </li>\n                    </ul>\n                    <div class="form__about">\n                        <h3 class="form__about-name">About</h3>\n                        <p class="form__about-details">${o}</p>\n                    </div>\n                    <div class="form__btn-list">\n                        <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to watched</button>\n                        <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to queue</button>\n                    </div>\n                </div>\n            </div>\n            <div class="form__film-card">\n                <div class="form__film-img">\n                    ${h.outerHTML}\n                </div>\n              </div>\n        </div>\n    </div>\n`}else lb.innerHTML=`\n    <div class="modal" data-modal="2">\n        <button type="button" class="btn-close js-close-modal" id="btn-close">\n            <svg class="form__close-icon" width="24px" height="24px" viewBox="0 0 30 30">\n              <path data-btn="close" d="M14.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>\n            </svg> \n        </button>\n        <div id="modal_form">\n          <div class="form">\n              <div class="form__film-card">\n                  <div class="form__film-img">\n                      <img class="form-img" src="${r}"\n                          alt="${s}">\n                  </div>\n              </div>\n              <div class="form__info">\n                  <h2 class="form__title">${s}</h2>\n                  <ul class="form__info-list">\n                      <li class="form__info-item">\n                          <p class="form__info-name">Vote / Votes</p>\n                          <p class="form__info-details"> <span class="film__rating">${c}</span>/<span class="film__voice">${l}</span></p>\n                      </li>\n                      <li class="form__info-item">\n                          <p class="form__info-name">Popularity</p>\n                          <p class="form__info-details">${a}</p>\n                      </li>\n                      <li class="form__info-item">\n                          <p class="form__info-name">Original Title</p>\n                          <p class="form__info-details details-title">${s}</p>\n                      </li>\n                      <li class="form__info-item">\n                          <p class="form__info-name">Genre</p>\n                          <p class="form__info-details">${n}</p>\n                      </li>\n                  </ul>\n                  <div class="form__about">\n                      <h3 class="form__about-name">About</h3>\n                      <p class="form__about-details">${o}</p>\n                  </div>\n                  <div class="form__btn-list">\n                      <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to watched</button>\n                      <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to queue</button>\n                  </div>\n              </div>\n          </div>\n        </div>\n    </div>\n`;var d;function f(t){switch(t.textContent){case"Add to watched":t.textContent="Remove from watched";break;case"Remove from watched":t.textContent="Add to watched";break;case"Add to queue":t.textContent="Remove from queue";break;case"Remove from queue":t.textContent="Add to queue"}}if(An((d=lb).querySelectorAll(".js-open-modal"),d.querySelectorAll(".js-overlay-modal"),d.querySelectorAll(".js-close-modal")),async function(t){const e=document.getElementById("watched"),n=document.getElementById("queue"),i=document.querySelector(".active-btn"),r=document.querySelector(".watched-btn"),s=document.querySelector(".queue-btn");let o;o=localStorage.getItem("fireBaseAuthorized")?await cb("watched"):On("watched");o.find((e=>e.id===t.id))?e.textContent="Remove from watched":e.textContent="Add to watched";o=localStorage.getItem("fireBaseAuthorized")?await cb("gue"):On("gue");o.find((e=>e.id===t.id))?n.textContent="Remove from queue":n.textContent="Add to queue";e.addEventListener("click",(()=>{"Remove from watched"===e.textContent?(localStorage.getItem("fireBaseAuthorized")?ab("watched"):Mn("watched",t),f(e)):"Add to watched"===e.textContent&&(localStorage.getItem("fireBaseAuthorized")?ob("watched"):Dn("watched",t),f(e)),i.classList.contains("my-library-btn")&&(Db(),r.classList.add("active-library-btn"),s.classList.remove("active-library-btn"))})),n.addEventListener("click",(()=>{"Remove from queue"===n.textContent?(localStorage.getItem("fireBaseAuthorized")?ab("gue"):Mn("gue",t),f(n)):"Add to queue"===n.textContent&&(localStorage.getItem("fireBaseAuthorized")?ob("gue"):Dn("gue",t),f(n)),i.classList.contains("my-library-btn")&&(Mb(),r.classList.remove("active-library-btn"),s.classList.add("active-library-btn"))}))}(e),u){document.getElementById("btn-close").addEventListener("click",(function(){const t=lb.innerHTML;t.replace(h.outerHTML,""),lb.innerHTML=t}))}}function hb(t){const e=document.querySelector(".mask");"start"===t?e.classList.remove("is-hidden"):"stop"===t&&setTimeout((()=>{e.classList.add("is-hidden")}),250)}const db=document.querySelector(".list");function fb(t,e=!0){const n=(t=e?t.results:t).map((t=>`<li class="film-card">\n      <a class="film-link js-open-modal" href="${t.poster_path}" data-id="${t.id}" data-modal="2">\n        <div class="film-img"><img src="${t.poster_path}" alt="${t.title}" loading="lazy" /></div>\n        <div class="film-meta">\n          <span class="film-name">${t.title}</span>\n          <div class="film-info">\n            <span class="film-ganre">${t.genres}</span>\n            <span class="film-year">${t.year}</span>\n          </div>\n        </div>\n      </a>\n      </li>`)).join("");n?(e||!e&&0===db.children.length?db.innerHTML=n:!e&&db.children.length>1&&db.insertAdjacentHTML("beforeend",n),An(document.querySelectorAll(".js-open-modal"),document.querySelectorAll(".js-overlay-modal"),document.querySelectorAll(".js-close-modal"))):db.innerHTML=""}db.addEventListener("click",(async t=>{t.preventDefault();const n=t.target.closest(".film-link");if(!n)return;const i=n.dataset.id,r=function(t){const e=t.href,n=t.dataset.id,i=t.querySelector(".film-name").textContent,r=t.querySelector(".film-ganre").textContent,s=t.querySelector(".film-year").textContent;return{poster_path:e,id:n,title:i,genres:r,year:s}}(n),s=document.querySelector(".backdrop-container");hb("start");try{ub(await pn(i),r),s.style.display="block"}catch(t){s.style.display="none",e(da).Notify.failure("Search result about this film is not successful",fa)}hb("stop")}));var pb,mb={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */let gb;window,pb=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,r,s,o=Object.prototype.hasOwnProperty;for(r=1,s=arguments.length;r<s;r+=1)for(i in n=arguments[r])o.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),r=n(17),s=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):s(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var r,s;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,r=n;n>=0&&r<s;r+=1)if(e[r]===t)return r;return-1}},function(t,e,n){var i=n(29),r=n(30),s=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=s(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),r=n(7),s=n(0),o=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=r({init:function(t,e){this._options=s({},l,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,r=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(s/2),(n=(e=Math.max(t-i,1))+s-1)>r&&(e=Math.max(r-s+1,1),n=r)):(e=(o-1)*s+1,n=o*s,n=Math.min(n,r)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){var i=n(0),r=n(14),s=n(4),o=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(t){i(t.prototype,h.prototype)},h.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},h.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},h.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},h.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},h.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},h.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},h.prototype.on=function(t,e,n){var i=this;s(t)?(t=t.split(u),l(t,(function(t){i._bindEvent(t,e,n)}))):o(t)&&(n=e,l(t,(function(t,e){i.on(e,t,n)})))},h.prototype.once=function(t,e,n){var i=this;if(o(t))return n=e,void l(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function r(){e.apply(n,arguments),i.off(t,r,n)}),n)},h.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},h.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},h.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},h.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,s=e===i.context,o=r&&s;return o&&n._forgetContext(i.context),o}},h.prototype._offByEventName=function(t,e){var n=this,i=c(e),r=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},h.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},h.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?l(t,(function(t,e){i.off(e,t)})):s(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},h.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},h.prototype.fire=function(t){this.invoke.apply(this,arguments)},h.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},h.prototype.hasListener=function(t){return this.getListenerLength(t)>0},h.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=h},function(t,e,n){var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),r=n(7),s=n(21),o=n(22),a=n(24),c=n(25),l=n(0),u=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!h(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(p,(function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(p,(function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(m,(function(t){var e=t+"More";this._buttons[e]=d.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==r||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,i,r=s(e);a(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!d.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),r=n(3),s=n(23);function o(t,e,n,i){function o(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,i){var o=s(t,e),a=!1;r(o,(function(t){return t.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:i})}(t,e,n,o)}t.exports=function(t,e,n,s){i(e)?r(e.split(/\s+/g),(function(e){o(t,e,n,s)})):r(e,(function(e,i){o(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),r=n(8),s=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?i(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){r(t,c)<0&&c.push(t)})),o(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),r=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),r=n(3),s=n(2),o=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],s=0,o=0;return r(e,(function(t,r){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(o,r)),o=r+1)})),i.push(e.slice(o)),{exps:n,sourcesInsideIf:i}}(t,e),s=!1,o="";return r(i.exps,(function(t,e){return(s=w(t,n))&&(o=x(i.sourcesInsideIf[e],n)),!s})),o},each:function(t,e,n){var i=w(t,n),o=s(i)?"@index":"@key",c={},l="";return r(i,(function(t,i){c[o]=i,c["@this"]=t,a(n,c),l+=x(e.slice(),n)})),l},with:function(t,e,n){var r=i("as",t),s=t[r+1],o=w(t.slice(0,r),n),c={};return c[s]=o,x(e,a(n,c))||""}},y=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(s,i)),s=i+n[0].length,n=e.exec(t);return r.push(t.slice(s)),r};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:f.test(t)?i=t.replace(p,""):l.test(t)?i=v((n=t.split(u))[0],e)[v(n[1],e)]:h.test(t)?i=v((n=t.split(d))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function b(t,e,n){for(var i,r,s,a,c=g[t],l=1,u=2,h=e[u];l&&o(h);)0===h.indexOf(t)?l+=1:0===h.indexOf("/"+t)&&(l-=1,i=u),h=e[u+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(r=0,s=i,(a=e.splice(r+1,s-r)).pop(),a),n),e}function w(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return r(e,(function(t){i.push(v(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,r,s=1,a=t[s];o(a);)i=(n=a.split(" "))[0],g[i]?(r=b(i,t.splice(s,t.length-s),e),t=t.concat(r)):t[s]=w(n,e),a=t[s+=2];return t.join("")}t.exports=function(t,e){return x(y(t,c),e)}},function(t,e,n){var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,(function(t,e){r+="&"+e+"="+t})),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},mb=pb();const yb=document.querySelector(".list"),vb=document.querySelector(".pagination");function bb(t,n){gb=new(e(mb))(vb,{totalItems:t,itemsPerPage:1,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}" aria-label="next-page"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}),document.querySelector(".tui-ico-last").textContent=t,document.querySelector(".tui-first").classList.add("hidden"),document.querySelector(".tui-last-child").classList.add("mobile-hidden"),t<=5&&document.querySelector(".tui-last").classList.add("hidden"),gb.on("afterMove",(e=>{const i=e.page;[...yb.children].forEach((t=>t.remove())),async function(t,e){fb(await dn(t,e))}(n,i),t>5?(i<=3?document.querySelector(".tui-first").classList.add("hidden"):document.querySelector(".tui-first").classList.remove("hidden"),document.querySelector(".tui-ico-first").textContent="1",document.querySelector(".tui-ico-last").textContent=t,t-i>=2?document.querySelector(".tui-last").classList.remove("hidden"):document.querySelector(".tui-last").classList.add("hidden")):(document.querySelector(".tui-first").classList.add("hidden"),document.querySelector(".tui-last").classList.add("hidden")),document.querySelector(".tui-last-child").classList.add("mobile-hidden"),document.querySelector(".tui-first-child").classList.add("mobile-hidden"),window.innerWidth<768&&(i<=3&&(document.querySelector(".tui-last-child").classList.add("mobile-hidden"),document.querySelector(".tui-first-child").classList.remove("mobile-hidden"),document.querySelector(".tui-first-child").nextSibling.classList.remove("mobile-hidden")),t-i<=1&&(document.querySelector(".tui-last-child").classList.remove("mobile-hidden"),document.querySelector(".tui-first-child").classList.add("mobile-hidden")))}))}function wb(){vb.classList.add("hidden")}let xb,kb;function Eb(t){xb=new Tb(t),xb.renderingCollectionByPage(),kb=new IntersectionObserver(_b),kb.observe(document.querySelector("footer"))}function _b(t){t.forEach((t=>{t.isIntersecting&&xb.renderingCollectionByPage()}))}function Ib(){kb.disconnect()}class Tb{constructor(t){this.index=0,this.currentLibrary=t}async renderingCollectionByPage(){let t;hb("start"),localStorage.getItem("fireBaseAuthorized")?(t=await cb(this.currentLibrary),console.log(t)):t=On(this.currentLibrary);const n=this.getCollectionBox(t);if(0===n.length&&kb)return Ib(),hb("stop"),void e(da).Notify.failure("We've reached the end of your collection!",fa);fb(n,!1),this.index+=Ub,hb("stop")}getCollectionBox(t){return t.slice(this.index,this.index+Ub)}}const Sb=()=>{const t={status:"active",id:document.querySelector(".active-btn").id};localStorage.setItem("button",JSON.stringify(t))},Cb=()=>{localStorage.removeItem("button")},Nb={headerhForm:document.querySelector(".header-form"),searchForm:document.querySelector(".search-form"),nav:document.querySelector(".header-nav"),homeBtn:document.querySelector(".home-btn"),myLibraryBtn:document.querySelector(".my-library-btn"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),logo:document.querySelector(".logo-wrapper"),logoRef:document.querySelector(".logo"),galleryList:document.querySelector(".list")};let Ab="",Rb=0;function Lb(){hb("start"),Nb.watchedBtn.classList.add("is-hidden"),Nb.queueBtn.classList.add("is-hidden"),Nb.headerhForm.classList.remove("js-form-inactive"),Nb.nav.classList.remove("js-home-inactive"),Nb.logo.classList.remove("js-library-active"),Nb.homeBtn.classList.add("active-btn"),Ea(),Nb.myLibraryBtn.classList.contains("active-btn")&&(Ib(),Nb.myLibraryBtn.classList.remove("active-btn")),dn("").then((t=>{fb(t),bb(t.total_pages,"")})),vb.classList.remove("hidden"),hb("stop"),Cb(),Sb()}function Ob(){Nb.watchedBtn.classList.remove("is-hidden"),Nb.queueBtn.classList.remove("is-hidden"),Nb.headerhForm.classList.add("js-form-inactive"),Nb.nav.classList.add("js-home-inactive"),Nb.logo.classList.add("js-library-active"),wb(),Nb.homeBtn.classList.remove("active-btn"),Nb.myLibraryBtn.classList.add("active-btn"),Ea(),Mb(),Cb(),Sb()}function Db(){Nb.galleryList.innerHTML="",wb(),Eb("watched"),Nb.watchedBtn.classList.add("active-library-btn"),Nb.queueBtn.classList.remove("active-library-btn")}function Mb(){Nb.galleryList.innerHTML="",wb(),Eb("gue"),Nb.watchedBtn.classList.remove("active-library-btn"),Nb.queueBtn.classList.add("active-library-btn")}Nb.searchForm.addEventListener("submit",(async function(t){if(t.preventDefault(),hb("start"),Ab=t.currentTarget.searchQuery.value.trim(),!Ab)return hb("stop"),void e(da).Notify.failure("Enter your search query, please.",fa);t.currentTarget.reset();const n=await dn(Ab);Rb=n.results.length;try{Rb>0&&(hb("stop"),e(da).Notify.success("We`ve found what you were looking for!",fa),fb(n),bb(n.total_pages,Ab),1===n.total_pages&&(Eb(),wb())),0===Rb&&(hb("stop"),e(da).Notify.failure("Search result is not successful. Enter the correct movie name.",fa),fb(n),bb(n.total_pages,Ab))}catch(t){hb("stop"),console.log(t)}})),Nb.homeBtn.addEventListener("click",Lb),Nb.logoRef.addEventListener("click",Lb),Nb.myLibraryBtn.addEventListener("click",Ob),Nb.watchedBtn.addEventListener("click",Db),Nb.queueBtn.addEventListener("click",Mb);let Pb=0;function Bb(){if(Pb<-2431){const t=document.querySelector(".container_img");return t.style.transform="translateX(-0px) ",t.style.transition="3000ms cubic-bezier(0.4, 0, 0.2, 1)",void(Pb=0)}Pb-=1216;const t=document.querySelector(".container_img");t.style.transform=`translateX(${Pb}px) `,t.style.transition="3000ms cubic-bezier(0.4, 0, 0.2, 1)"}setInterval(Bb,5e3),Bb();const Ub=20;console.log(localStorage.getItem("fireBaseAuthorized")),localStorage.getItem("fireBaseAuthorized")&&wa(),(()=>{const t=JSON.parse(localStorage.getItem("button"));t?"1"===t.id?Lb():"2"===t.id&&Ob():Lb()})();
//# sourceMappingURL=index.9e38624d.js.map
