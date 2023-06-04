!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}function n(t,e){return function(){return t.apply(e,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:r}=Object,o=(s=Object.create(null),t=>{const e=i.call(t);return s[e]||(s[e]=e.slice(8,-1).toLowerCase())});var s;const a=t=>(t=t.toLowerCase(),e=>o(e)===t),l=t=>e=>typeof e===t,{isArray:c}=Array,u=l("undefined");const f=a("ArrayBuffer");const d=l("string"),h=l("function"),p=l("number"),m=t=>null!==t&&"object"==typeof t,g=t=>{if("object"!==o(t))return!1;const e=r(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},y=a("Date"),v=a("File"),b=a("Blob"),w=a("FileList"),x=a("URLSearchParams");function k(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),c(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let s;for(i=0;i<o;i++)s=r[i],e.call(null,t[s],s,t)}}function _(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,E=t=>!u(t)&&t!==S;const I=(N="undefined"!=typeof Uint8Array&&r(Uint8Array),t=>N&&t instanceof N);var N;const T=a("HTMLFormElement"),O=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),C=a("RegExp"),R=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};k(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},L="abcdefghijklmnopqrstuvwxyz",A="0123456789",P={DIGIT:A,ALPHA:L,ALPHA_DIGIT:L+L.toUpperCase()+A};var D={isArray:c,isArrayBuffer:f,isBuffer:function(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&h(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||i.call(t)===e||h(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e},isString:d,isNumber:p,isBoolean:t=>!0===t||!1===t,isObject:m,isPlainObject:g,isUndefined:u,isDate:y,isFile:v,isBlob:b,isRegExp:C,isFunction:h,isStream:t=>m(t)&&h(t.pipe),isURLSearchParams:x,isTypedArray:I,isFileList:w,forEach:k,merge:function t(){const{caseless:e}=E(this)&&this||{},n={},i=(i,r)=>{const o=e&&_(n,r)||r;g(n[o])&&g(i)?n[o]=t(n[o],i):g(i)?n[o]=t({},i):c(i)?n[o]=i.slice():n[o]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&k(arguments[t],i);return n},extend:(t,e,i,{allOwnKeys:r}={})=>(k(e,((e,r)=>{i&&h(e)?t[r]=n(e,i):t[r]=e}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let o,s,a;const l={};if(e=e||{},null==t)return e;do{for(o=Object.getOwnPropertyNames(t),s=o.length;s-- >0;)a=o[s],i&&!i(a,t,e)||l[a]||(e[a]=t[a],l[a]=!0);t=!1!==n&&r(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:o,kindOfTest:a,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(c(t))return t;let e=t.length;if(!p(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:T,hasOwnProperty:O,hasOwnProp:O,reduceDescriptors:R,freezeMethods:t=>{R(t,((e,n)=>{if(h(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];h(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return c(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:_,global:S,isContextDefined:E,ALPHABET:P,generateString:(t=16,e=P.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&h(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(m(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=c(t)?[]:{};return k(t,((t,e)=>{const o=n(t,i+1);!u(o)&&(r[e]=o)})),e[i]=void 0,r}}return t};return n(t,0)}};function B(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}D.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=B.prototype,j={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{j[t]={value:t}})),Object.defineProperties(B,j),Object.defineProperty(M,"isAxiosError",{value:!0}),B.from=(t,e,n,i,r,o)=>{const s=Object.create(M);return D.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),B.call(s,t.message,e,n,i,r),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};var F,U,z,V=B;U=function(t){var e,n,i=Y(t),r=i[0],o=i[1],s=new K(function(t,e,n){return 3*(e+n)/4-n}(0,r,o)),a=0,l=o>0?r-4:r;for(n=0;n<l;n+=4)e=H[t.charCodeAt(n)]<<18|H[t.charCodeAt(n+1)]<<12|H[t.charCodeAt(n+2)]<<6|H[t.charCodeAt(n+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;2===o&&(e=H[t.charCodeAt(n)]<<2|H[t.charCodeAt(n+1)]>>4,s[a++]=255&e);1===o&&(e=H[t.charCodeAt(n)]<<10|H[t.charCodeAt(n+1)]<<4|H[t.charCodeAt(n+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e);return s},z=function(t){for(var e,n=t.length,i=n%3,r=[],o=16383,s=0,a=n-i;s<a;s+=o)r.push(Q(t,s,s+o>a?a:s+o));1===i?(e=t[n-1],r.push(q[e>>2]+q[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var W,$,q=[],H=[],K="undefined"!=typeof Uint8Array?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",J=0,G=X.length;J<G;++J)q[J]=X[J],H[X.charCodeAt(J)]=J;function Y(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function Q(t,e,n){for(var i,r,o=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),o.push(q[(r=i)>>18&63]+q[r>>12&63]+q[r>>6&63]+q[63&r]);return o.join("")}H["-".charCodeAt(0)]=62,H["_".charCodeAt(0)]=63,W=function(t,e,n,i,r){var o,s,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,f=n?r-1:0,d=n?-1:1,h=t[e+f];for(f+=d,o=h&(1<<-u)-1,h>>=-u,u+=a;u>0;o=256*o+t[e+f],f+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+t[e+f],f+=d,u-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,i),o-=c}return(h?-1:1)*s*Math.pow(2,o-i)},$=function(t,e,n,i,r,o){var s,a,l,c=8*o-r-1,u=(1<<c)-1,f=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,h=i?0:o-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+f>=1?d/l:d*Math.pow(2,1-f))*l>=2&&(s++,l/=2),s+f>=u?(a=0,s=u):s+f>=1?(a=(e*l-1)*Math.pow(2,r),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,r),s=0));r>=8;t[n+h]=255&a,h+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;t[n+h]=255&s,h+=p,s/=256,c-=8);t[n+h-p]|=128*m};const Z="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;F=nt;const tt=2147483647;function et(t){if(t>tt)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,nt.prototype),e}function nt(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return ot(t)}return it(t,e,n)}function it(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!nt.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|ct(t,e);let i=et(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Wt(t,Uint8Array)){const e=new Uint8Array(t);return at(e.buffer,e.byteOffset,e.byteLength)}return st(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Wt(t,ArrayBuffer)||t&&Wt(t.buffer,ArrayBuffer))return at(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Wt(t,SharedArrayBuffer)||t&&Wt(t.buffer,SharedArrayBuffer)))return at(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return nt.from(i,e,n);const r=function(t){if(nt.isBuffer(t)){const e=0|lt(t.length),n=et(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||$t(t.length)?et(0):st(t);if("Buffer"===t.type&&Array.isArray(t.data))return st(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return nt.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function rt(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function ot(t){return rt(t),et(t<0?0:0|lt(t))}function st(t){const e=t.length<0?0:0|lt(t.length),n=et(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function at(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,nt.prototype),i}function lt(t){if(t>=tt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+tt.toString(16)+" bytes");return 0|t}function ct(t,e){if(nt.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Wt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ut(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return zt(t).length;default:if(r)return i?-1:Ut(t).length;e=(""+e).toLowerCase(),r=!0}}function ut(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return St(this,e,n);case"utf8":case"utf-8":return wt(this,e,n);case"ascii":return kt(this,e,n);case"latin1":case"binary":return _t(this,e,n);case"base64":return bt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Et(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function ft(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function dt(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),$t(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=nt.from(e,i)),nt.isBuffer(e))return 0===e.length?-1:ht(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):ht(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function ht(t,e,n,i,r){let o,s=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(r){let i=-1;for(o=n;o<a;o++)if(c(t,o)===c(e,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){let n=!0;for(let i=0;i<l;i++)if(c(t,o+i)!==c(e,i)){n=!1;break}if(n)return o}return-1}function pt(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=e.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(e.substr(2*s,2),16);if($t(i))return s;t[n+s]=i}return s}function mt(t,e,n,i){return Vt(Ut(e,t.length-n),t,n,i)}function gt(t,e,n,i){return Vt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function yt(t,e,n,i){return Vt(zt(e),t,n,i)}function vt(t,e,n,i){return Vt(function(t,e){let n,i,r;const o=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(e,t.length-n),t,n,i)}function bt(t,e,n){return 0===e&&n===t.length?z(t):z(t.slice(e,n))}function wt(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let o=null,s=e>239?4:e>223?3:e>191?2:1;if(r+s<=n){let n,i,a,l;switch(s){case 1:e<128&&(o=e);break;case 2:n=t[r+1],128==(192&n)&&(l=(31&e)<<6|63&n,l>127&&(o=l));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(l=(15&e)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(t){const e=t.length;if(e<=xt)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=xt));return n}(i)}nt.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),nt.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(nt.prototype,"parent",{enumerable:!0,get:function(){if(nt.isBuffer(this))return this.buffer}}),Object.defineProperty(nt.prototype,"offset",{enumerable:!0,get:function(){if(nt.isBuffer(this))return this.byteOffset}}),nt.poolSize=8192,nt.from=function(t,e,n){return it(t,e,n)},Object.setPrototypeOf(nt.prototype,Uint8Array.prototype),Object.setPrototypeOf(nt,Uint8Array),nt.alloc=function(t,e,n){return function(t,e,n){return rt(t),t<=0?et(t):void 0!==e?"string"==typeof n?et(t).fill(e,n):et(t).fill(e):et(t)}(t,e,n)},nt.allocUnsafe=function(t){return ot(t)},nt.allocUnsafeSlow=function(t){return ot(t)},nt.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==nt.prototype},nt.compare=function(t,e){if(Wt(t,Uint8Array)&&(t=nt.from(t,t.offset,t.byteLength)),Wt(e,Uint8Array)&&(e=nt.from(e,e.offset,e.byteLength)),!nt.isBuffer(t)||!nt.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},nt.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},nt.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return nt.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=nt.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Wt(e,Uint8Array))r+e.length>i.length?(nt.isBuffer(e)||(e=nt.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!nt.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},nt.byteLength=ct,nt.prototype._isBuffer=!0,nt.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ft(this,e,e+1);return this},nt.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ft(this,e,e+3),ft(this,e+1,e+2);return this},nt.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ft(this,e,e+7),ft(this,e+1,e+6),ft(this,e+2,e+5),ft(this,e+3,e+4);return this},nt.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?wt(this,0,t):ut.apply(this,arguments)},nt.prototype.toLocaleString=nt.prototype.toString,nt.prototype.equals=function(t){if(!nt.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===nt.compare(this,t)},nt.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Z&&(nt.prototype[Z]=nt.prototype.inspect),nt.prototype.compare=function(t,e,n,i,r){if(Wt(t,Uint8Array)&&(t=nt.from(t,t.offset,t.byteLength)),!nt.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(e>>>=0);const a=Math.min(o,s),l=this.slice(i,r),c=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==c[t]){o=l[t],s=c[t];break}return o<s?-1:s<o?1:0},nt.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},nt.prototype.indexOf=function(t,e,n){return dt(this,t,e,n,!0)},nt.prototype.lastIndexOf=function(t,e,n){return dt(this,t,e,n,!1)},nt.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return pt(this,t,e,n);case"utf8":case"utf-8":return mt(this,t,e,n);case"ascii":case"latin1":case"binary":return gt(this,t,e,n);case"base64":return yt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vt(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},nt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const xt=4096;function kt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function _t(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function St(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=qt[t[i]];return r}function Et(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function It(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function Nt(t,e,n,i,r,o){if(!nt.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<o)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function Tt(t,e,n,i,r){Bt(e,i,r,t,n,7);let o=Number(e&BigInt(4294967295));t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,n}function Ot(t,e,n,i,r){Bt(e,i,r,t,n,7);let o=Number(e&BigInt(4294967295));t[n+7]=o,o>>=8,t[n+6]=o,o>>=8,t[n+5]=o,o>>=8,t[n+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s>>=8,t[n+2]=s,s>>=8,t[n+1]=s,s>>=8,t[n]=s,n+8}function Ct(t,e,n,i,r,o){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Rt(t,e,n,i,r){return e=+e,n>>>=0,r||Ct(t,0,n,4),$(t,e,n,i,23,4),n+4}function Lt(t,e,n,i,r){return e=+e,n>>>=0,r||Ct(t,0,n,8),$(t,e,n,i,52,8),n+8}nt.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,nt.prototype),i},nt.prototype.readUintLE=nt.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||It(t,e,this.length);let i=this[t],r=1,o=0;for(;++o<e&&(r*=256);)i+=this[t+o]*r;return i},nt.prototype.readUintBE=nt.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||It(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},nt.prototype.readUint8=nt.prototype.readUInt8=function(t,e){return t>>>=0,e||It(t,1,this.length),this[t]},nt.prototype.readUint16LE=nt.prototype.readUInt16LE=function(t,e){return t>>>=0,e||It(t,2,this.length),this[t]|this[t+1]<<8},nt.prototype.readUint16BE=nt.prototype.readUInt16BE=function(t,e){return t>>>=0,e||It(t,2,this.length),this[t]<<8|this[t+1]},nt.prototype.readUint32LE=nt.prototype.readUInt32LE=function(t,e){return t>>>=0,e||It(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},nt.prototype.readUint32BE=nt.prototype.readUInt32BE=function(t,e){return t>>>=0,e||It(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},nt.prototype.readBigUInt64LE=Ht((function(t){Mt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),nt.prototype.readBigUInt64BE=Ht((function(t){Mt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),nt.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||It(t,e,this.length);let i=this[t],r=1,o=0;for(;++o<e&&(r*=256);)i+=this[t+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},nt.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||It(t,e,this.length);let i=e,r=1,o=this[t+--i];for(;i>0&&(r*=256);)o+=this[t+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*e)),o},nt.prototype.readInt8=function(t,e){return t>>>=0,e||It(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},nt.prototype.readInt16LE=function(t,e){t>>>=0,e||It(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},nt.prototype.readInt16BE=function(t,e){t>>>=0,e||It(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},nt.prototype.readInt32LE=function(t,e){return t>>>=0,e||It(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},nt.prototype.readInt32BE=function(t,e){return t>>>=0,e||It(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},nt.prototype.readBigInt64LE=Ht((function(t){Mt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),nt.prototype.readBigInt64BE=Ht((function(t){Mt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),nt.prototype.readFloatLE=function(t,e){return t>>>=0,e||It(t,4,this.length),W(this,t,!0,23,4)},nt.prototype.readFloatBE=function(t,e){return t>>>=0,e||It(t,4,this.length),W(this,t,!1,23,4)},nt.prototype.readDoubleLE=function(t,e){return t>>>=0,e||It(t,8,this.length),W(this,t,!0,52,8)},nt.prototype.readDoubleBE=function(t,e){return t>>>=0,e||It(t,8,this.length),W(this,t,!1,52,8)},nt.prototype.writeUintLE=nt.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Nt(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[e]=255&t;++o<n&&(r*=256);)this[e+o]=t/r&255;return e+n},nt.prototype.writeUintBE=nt.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Nt(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[e+r]=255&t;--r>=0&&(o*=256);)this[e+r]=t/o&255;return e+n},nt.prototype.writeUint8=nt.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,1,255,0),this[e]=255&t,e+1},nt.prototype.writeUint16LE=nt.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},nt.prototype.writeUint16BE=nt.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},nt.prototype.writeUint32LE=nt.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},nt.prototype.writeUint32BE=nt.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},nt.prototype.writeBigUInt64LE=Ht((function(t,e=0){return Tt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),nt.prototype.writeBigUInt64BE=Ht((function(t,e=0){return Ot(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),nt.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Nt(this,t,e,n,i-1,-i)}let r=0,o=1,s=0;for(this[e]=255&t;++r<n&&(o*=256);)t<0&&0===s&&0!==this[e+r-1]&&(s=1),this[e+r]=(t/o>>0)-s&255;return e+n},nt.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Nt(this,t,e,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[e+r]=255&t;--r>=0&&(o*=256);)t<0&&0===s&&0!==this[e+r+1]&&(s=1),this[e+r]=(t/o>>0)-s&255;return e+n},nt.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},nt.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},nt.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},nt.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},nt.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Nt(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},nt.prototype.writeBigInt64LE=Ht((function(t,e=0){return Tt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),nt.prototype.writeBigInt64BE=Ht((function(t,e=0){return Ot(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),nt.prototype.writeFloatLE=function(t,e,n){return Rt(this,t,e,!0,n)},nt.prototype.writeFloatBE=function(t,e,n){return Rt(this,t,e,!1,n)},nt.prototype.writeDoubleLE=function(t,e,n){return Lt(this,t,e,!0,n)},nt.prototype.writeDoubleBE=function(t,e,n){return Lt(this,t,e,!1,n)},nt.prototype.copy=function(t,e,n,i){if(!nt.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},nt.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!nt.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const o=nt.isBuffer(t)?t:nt.from(t,i),s=o.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=o[r%s]}return this};const At={};function Pt(t,e,n){At[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function Dt(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Bt(t,e,n,i,r,o){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new At.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Mt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||jt(e,t.length-(n+1))}(i,r,o)}function Mt(t,e){if("number"!=typeof t)throw new At.ERR_INVALID_ARG_TYPE(e,"number",t)}function jt(t,e,n){if(Math.floor(t)!==t)throw Mt(t,n),new At.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new At.ERR_BUFFER_OUT_OF_BOUNDS;throw new At.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Pt("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Pt("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Pt("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Dt(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Dt(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const Ft=/[^+/0-9A-Za-z-_]/g;function Ut(t,e){let n;e=e||1/0;const i=t.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(e-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function zt(t){return U(function(t){if((t=(t=t.split("=")[0]).trim().replace(Ft,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Vt(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Wt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function $t(t){return t!=t}const qt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function Ht(t){return"undefined"==typeof BigInt?Kt:t}function Kt(){throw new Error("BigInt not supported")}var Xt=F;function Jt(t){return D.isPlainObject(t)||D.isArray(t)}function Gt(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function Yt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Gt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Qt=D.toFlatObject(D,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Zt=function(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!D.isUndefined(e[t])}))).metaTokens,r=n.visitor||c,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&D.isSpecCompliantForm(e);if(!D.isFunction(r))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(D.isDate(t))return t.toISOString();if(!a&&D.isBlob(t))throw new V("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(t)||D.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Xt.from(t):t}function c(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(D.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(D.isArray(t)&&function(t){return D.isArray(t)&&!t.some(Jt)}(t)||(D.isFileList(t)||D.endsWith(n,"[]"))&&(a=D.toArray(t)))return n=Gt(n),a.forEach((function(t,i){!D.isUndefined(t)&&null!==t&&e.append(!0===s?Yt([n],i,o):null===s?n:n+"[]",l(t))})),!1;return!!Jt(t)||(e.append(Yt(r,n,o),l(t)),!1)}const u=[],f=Object.assign(Qt,{defaultVisitor:c,convertValue:l,isVisitable:Jt});if(!D.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!D.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),D.forEach(n,(function(n,o){!0===(!(D.isUndefined(n)||null===n)&&r.call(e,n,D.isString(o)?o.trim():o,i,f))&&t(n,i?i.concat(o):[o])})),u.pop()}}(t),e};function te(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function ee(t,e){this._pairs=[],t&&Zt(t,this,e)}const ne=ee.prototype;ne.append=function(t,e){this._pairs.push([t,e])},ne.toString=function(t){const e=t?function(e){return t.call(this,e,te)}:te;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var ie=ee;function re(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oe(t,e,n){if(!e)return t;const i=n&&n.encode||re,r=n&&n.serialize;let o;if(o=r?r(e,n):D.isURLSearchParams(e)?e.toString():new ie(e,n).toString(i),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}var se=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){D.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},ae={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var le={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ie,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ce(t,e){return Zt(t,new le.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return le.isNode&&D.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var ue=function(t){function e(t,n,i,r){let o=t[r++];const s=Number.isFinite(+o),a=r>=t.length;if(o=!o&&D.isArray(i)?i.length:o,a)return D.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&D.isObject(i[o])||(i[o]=[]);return e(t,n,i[o],r)&&D.isArray(i[o])&&(i[o]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],e[o]=t[o];return e}(i[o])),!s}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,((t,i)=>{e(function(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const fe={"Content-Type":void 0};const de={transitional:ae,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=D.isObject(t);r&&D.isHTMLForm(t)&&(t=new FormData(t));if(D.isFormData(t))return i&&i?JSON.stringify(ue(t)):t;if(D.isArrayBuffer(t)||D.isBuffer(t)||D.isStream(t)||D.isFile(t)||D.isBlob(t))return t;if(D.isArrayBufferView(t))return t.buffer;if(D.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ce(t,this.formSerializer).toString();if((o=D.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Zt(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||de.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&D.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw V.from(t,V.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:le.classes.FormData,Blob:le.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};D.forEach(["delete","get","head"],(function(t){de.headers[t]={}})),D.forEach(["post","put","patch"],(function(t){de.headers[t]=D.merge(fe)}));var he=de;const pe=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var me=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&pe[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const ge=Symbol("internals");function ye(t){return t&&String(t).trim().toLowerCase()}function ve(t){return!1===t||null==t?t:D.isArray(t)?t.map(ve):String(t)}function be(t,e,n,i,r){return D.isFunction(i)?i.call(this,e,n):(r&&(e=n),D.isString(e)?D.isString(i)?-1!==e.indexOf(i):D.isRegExp(i)?i.test(e):void 0:void 0)}class we{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function r(t,e,n){const r=ye(e);if(!r)throw new Error("header name must be a non-empty string");const o=D.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||e]=ve(t))}const o=(t,e)=>D.forEach(t,((t,n)=>r(t,n,e)));return D.isPlainObject(t)||t instanceof this.constructor?o(t,e):D.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?o(me(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=ye(t)){const n=D.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(D.isFunction(e))return e.call(this,t,n);if(D.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ye(t)){const n=D.findKey(this,t);return!(!n||void 0===this[n]||e&&!be(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=ye(t)){const r=D.findKey(n,t);!r||e&&!be(0,n[r],r,e)||(delete n[r],i=!0)}}return D.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!be(0,this[r],r,t,!0)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return D.forEach(this,((i,r)=>{const o=D.findKey(n,r);if(o)return e[o]=ve(i),void delete e[r];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete e[r],e[s]=ve(i),n[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return D.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&D.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[ge]=this[ge]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=ye(t);e[i]||(!function(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return D.isArray(t)?t.forEach(i):i(t),this}}we.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),D.freezeMethods(we.prototype),D.freezeMethods(we);var xe=we;function ke(t,e){const n=this||he,i=e||n,r=xe.from(i.headers);let o=i.data;return D.forEach(t,(function(t){o=t.call(n,o,r.normalize(),e?e.status:void 0)})),r.normalize(),o}function _e(t){return!(!t||!t.__CANCEL__)}function Se(t,e,n){V.call(this,null==t?"canceled":t,V.ERR_CANCELED,e,n),this.name="CanceledError"}D.inherits(Se,V,{__CANCEL__:!0});var Ee=Se;function Ie(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Ne=le.isStandardBrowserEnv?{write:function(t,e,n,i,r,o){const s=[];s.push(t+"="+encodeURIComponent(e)),D.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),D.isString(i)&&s.push("path="+i),D.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Te(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Oe(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Te(t,e):e}var Ce=le.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=D.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Re(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Le=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,o=0,s=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),c=i[s];r||(r=l),n[o]=a,i[o]=l;let u=s,f=0;for(;u!==o;)f+=n[u++],u%=t;if(o=(o+1)%t,o===s&&(s=(s+1)%t),l-r<e)return;const d=c&&l-c;return d?Math.round(1e3*f/d):void 0}};function Ae(t,e){let n=0;const i=Le(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,l=i(a);n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&o<=s?(s-o)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}const Pe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=xe.from(t.headers).normalize(),o=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}D.isFormData(i)&&(le.isStandardBrowserEnv||le.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const c=Oe(t.baseURL,t.url);function u(){if(!l)return;const i=xe.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());Ie((function(t){e(t),a()}),(function(t){n(t),a()}),{data:o&&"text"!==o&&"json"!==o?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),oe(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new V("Request aborted",V.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new V("Network Error",V.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||ae;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new V(e,i.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,t,l)),l=null},le.isStandardBrowserEnv){const e=(t.withCredentials||Ce(c))&&t.xsrfCookieName&&Ne.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&D.forEach(r.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),D.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&"json"!==o&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",Ae(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Ae(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{l&&(n(!e||e.type?new Ee(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const f=Re(c);f&&-1===le.protocols.indexOf(f)?n(new V("Unsupported protocol "+f+":",V.ERR_BAD_REQUEST,t)):l.send(i||null)}))}};D.forEach(Pe,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var De={getAdapter:t=>{t=D.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=D.isString(n)?Pe[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new V(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(D.hasOwnProp(Pe,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!D.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Pe};function Be(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ee(null,t)}function Me(t){Be(t),t.headers=xe.from(t.headers),t.data=ke.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return De.getAdapter(t.adapter||he.adapter)(t).then((function(e){return Be(t),e.data=ke.call(t,t.transformResponse,e),e.headers=xe.from(e.headers),e}),(function(e){return _e(e)||(Be(t),e&&e.response&&(e.response.data=ke.call(t,t.transformResponse,e.response),e.response.headers=xe.from(e.response.headers))),Promise.reject(e)}))}const je=t=>t instanceof xe?t.toJSON():t;function Fe(t,e){e=e||{};const n={};function i(t,e,n){return D.isPlainObject(t)&&D.isPlainObject(e)?D.merge.call({caseless:n},t,e):D.isPlainObject(e)?D.merge({},e):D.isArray(e)?e.slice():e}function r(t,e,n){return D.isUndefined(e)?D.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function o(t,e){if(!D.isUndefined(e))return i(void 0,e)}function s(t,e){return D.isUndefined(e)?D.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,o){return o in e?i(n,r):o in t?i(void 0,n):void 0}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>r(je(t),je(e),!0)};return D.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const o=l[i]||r,s=o(t[i],e[i],i);D.isUndefined(s)&&o!==a||(n[i]=s)})),n}const Ue="1.3.5",ze={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{ze[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Ve={};ze.transitional=function(t,e,n){function i(t,e){return"[Axios v1.3.5] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,o)=>{if(!1===t)throw new V(i(r," has been removed"+(e?" in "+e:"")),V.ERR_DEPRECATED);return e&&!Ve[r]&&(Ve[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,o)}};var We={assertOptions:function(t,e,n){if("object"!=typeof t)throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const o=i[r],s=e[o];if(s){const e=t[o],n=void 0===e||s(e,o,t);if(!0!==n)throw new V("option "+o+" must be "+n,V.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new V("Unknown option "+o,V.ERR_BAD_OPTION)}},validators:ze};const $e=We.validators;class qe{constructor(t){this.defaults=t,this.interceptors={request:new se,response:new se}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Fe(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let o;void 0!==n&&We.assertOptions(n,{silentJSONParsing:$e.transitional($e.boolean),forcedJSONParsing:$e.transitional($e.boolean),clarifyTimeoutError:$e.transitional($e.boolean)},!1),null!=i&&(D.isFunction(i)?e.paramsSerializer={serialize:i}:We.assertOptions(i,{encode:$e.function,serialize:$e.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),o=r&&D.merge(r.common,r[e.method]),o&&D.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=xe.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let u,f=0;if(!a){const t=[Me.bind(this),void 0];for(t.unshift.apply(t,s),t.push.apply(t,l),u=t.length,c=Promise.resolve(e);f<u;)c=c.then(t[f++],t[f++]);return c}u=s.length;let d=e;for(f=0;f<u;){const t=s[f++],e=s[f++];try{d=t(d)}catch(t){e.call(this,t);break}}try{c=Me.call(this,d)}catch(t){return Promise.reject(t)}for(f=0,u=l.length;f<u;)c=c.then(l[f++],l[f++]);return c}getUri(t){return oe(Oe((t=Fe(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}D.forEach(["delete","get","head","options"],(function(t){qe.prototype[t]=function(e,n){return this.request(Fe(n||{},{method:t,url:e,data:(n||{}).data}))}})),D.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(Fe(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}qe.prototype[t]=e(),qe.prototype[t+"Form"]=e(!0)}));var He=qe;class Ke{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new Ee(t,i,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Ke((function(e){t=e})),cancel:t}}}var Xe=Ke;const Je={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Je).forEach((([t,e])=>{Je[e]=t}));var Ge=Je;const Ye=function t(e){const i=new He(e),r=n(He.prototype.request,i);return D.extend(r,He.prototype,i,{allOwnKeys:!0}),D.extend(r,i,null,{allOwnKeys:!0}),r.create=function(n){return t(Fe(e,n))},r}(he);Ye.Axios=He,Ye.CanceledError=Ee,Ye.CancelToken=Xe,Ye.isCancel=_e,Ye.VERSION=Ue,Ye.toFormData=Zt,Ye.AxiosError=V,Ye.Cancel=Ye.CanceledError,Ye.all=function(t){return Promise.all(t)},Ye.spread=function(t){return function(e){return t.apply(null,e)}},Ye.isAxiosError=function(t){return D.isObject(t)&&!0===t.isAxiosError},Ye.mergeConfig=Fe,Ye.AxiosHeaders=xe,Ye.formToJSON=t=>ue(D.isHTMLForm(t)?new FormData(t):t),Ye.HttpStatusCode=Ge,Ye.default=Ye;var Qe=Ye;const{Axios:Ze,AxiosError:tn,CanceledError:en,isCancel:nn,CancelToken:rn,VERSION:on,all:sn,Cancel:an,isAxiosError:ln,spread:cn,toFormData:un,AxiosHeaders:fn,HttpStatusCode:dn,formToJSON:hn,mergeConfig:pn}=Qe;function mn(t){return(mn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function gn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yn(t,e){if("object"!==mn(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==mn(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function vn(t){var e=yn(t,"string");return"symbol"===mn(e)?e:String(e)}function bn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,vn(i.key),i)}}function wn(t,e,n){return e&&bn(t.prototype,e),n&&bn(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function xn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function kn(t,e){return(kn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&kn(t,e)}function Sn(t,e){if(e&&("object"===mn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return xn(t)}function En(t){return(En=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function In(t,e,n){return(e=vn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nn(t){if(Array.isArray(t))return t}function Tn(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function On(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Cn(t,e){if(t){if("string"==typeof t)return On(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?On(t,e):void 0}}function Rn(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ln(t){return Nn(t)||Tn(t)||Cn(t)||Rn()}function An(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Pn(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?An(Object(n),!0).forEach((function(e){In(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):An(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Dn={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,e){console&&console[t]&&console[t].apply(console,e)}},Bn=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};gn(this,t),this.init(e,n)}return wn(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||Dn,this.options=e,this.debug=e.debug}},{key:"setDebug",value:function(t){this.debug=t}},{key:"log",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"log","",!0)}},{key:"warn",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","",!0)}},{key:"error",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"error","")}},{key:"deprecate",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(t,e,n,i){return i&&!this.debug?null:("string"==typeof t[0]&&(t[0]="".concat(n).concat(this.prefix," ").concat(t[0])),this.logger[e](t))}},{key:"create",value:function(e){return new t(this.logger,Pn(Pn({},{prefix:"".concat(this.prefix,":").concat(e,":")}),this.options))}},{key:"clone",value:function(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new t(this.logger,e)}}]),t}(),Mn=new Bn,jn=function(){function t(){gn(this,t),this.observers={}}return wn(t,[{key:"on",value:function(t,e){var n=this;return t.split(" ").forEach((function(t){n.observers[t]=n.observers[t]||[],n.observers[t].push(e)})),this}},{key:"off",value:function(t,e){this.observers[t]&&(e?this.observers[t]=this.observers[t].filter((function(t){return t!==e})):delete this.observers[t])}},{key:"emit",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(this.observers[t]){var r=[].concat(this.observers[t]);r.forEach((function(t){t.apply(void 0,n)}))}if(this.observers["*"]){var o=[].concat(this.observers["*"]);o.forEach((function(e){e.apply(e,[t].concat(n))}))}}}]),t}();function Fn(){var t,e,n=new Promise((function(n,i){t=n,e=i}));return n.resolve=t,n.reject=e,n}function Un(t){return null==t?"":""+t}function zn(t,e,n){t.forEach((function(t){e[t]&&(n[t]=e[t])}))}function Vn(t,e,n){function i(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}function r(){return!t||"string"==typeof t}for(var o="string"!=typeof e?[].concat(e):e.split(".");o.length>1;){if(r())return{};var s=i(o.shift());!t[s]&&n&&(t[s]=new n),t=Object.prototype.hasOwnProperty.call(t,s)?t[s]:{}}return r()?{}:{obj:t,k:i(o.shift())}}function Wn(t,e,n){var i=Vn(t,e,Object);i.obj[i.k]=n}function $n(t,e){var n=Vn(t,e),i=n.obj,r=n.k;if(i)return i[r]}function qn(t,e,n){var i=$n(t,n);return void 0!==i?i:$n(e,n)}function Hn(t,e,n){for(var i in e)"__proto__"!==i&&"constructor"!==i&&(i in t?"string"==typeof t[i]||t[i]instanceof String||"string"==typeof e[i]||e[i]instanceof String?n&&(t[i]=e[i]):Hn(t[i],e[i],n):t[i]=e[i]);return t}function Kn(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Xn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Jn(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,(function(t){return Xn[t]})):t}var Gn="undefined"!=typeof window&&window.navigator&&void 0===window.navigator.userAgentData&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,Yn=[" ",",","?","!",";"];function Qn(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(t){if(t[e])return t[e];for(var i=e.split(n),r=t,o=0;o<i.length;++o){if(!r)return;if("string"==typeof r[i[o]]&&o+1<i.length)return;if(void 0===r[i[o]]){for(var s=2,a=i.slice(o,o+s).join(n),l=r[a];void 0===l&&i.length>o+s;)s++,l=r[a=i.slice(o,o+s).join(n)];if(void 0===l)return;if(null===l)return null;if(e.endsWith(a)){if("string"==typeof l)return l;if(a&&"string"==typeof l[a])return l[a]}var c=i.slice(o+s).join(n);return c?Qn(l,c,n):void 0}r=r[i[o]]}return r}}function Zn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function ti(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Zn(Object(n),!0).forEach((function(e){In(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zn(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ei(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=En(t);if(e){var r=En(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Sn(this,n)}}var ni=function(t){_n(n,t);var e=ei(n);function n(t){var i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return gn(this,n),i=e.call(this),Gn&&jn.call(xn(i)),i.data=t||{},i.options=r,void 0===i.options.keySeparator&&(i.options.keySeparator="."),void 0===i.options.ignoreJSONStructure&&(i.options.ignoreJSONStructure=!0),i}return wn(n,[{key:"addNamespaces",value:function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}},{key:"removeNamespaces",value:function(t){var e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}},{key:"getResource",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,o=void 0!==i.ignoreJSONStructure?i.ignoreJSONStructure:this.options.ignoreJSONStructure,s=[t,e];n&&"string"!=typeof n&&(s=s.concat(n)),n&&"string"==typeof n&&(s=s.concat(r?n.split(r):n)),t.indexOf(".")>-1&&(s=t.split("."));var a=$n(this.data,s);return a||!o||"string"!=typeof n?a:Qn(this.data&&this.data[t]&&this.data[t][e],n,r)}},{key:"addResource",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},o=this.options.keySeparator;void 0===o&&(o=".");var s=[t,e];n&&(s=s.concat(o?n.split(o):n)),t.indexOf(".")>-1&&(i=e,e=(s=t.split("."))[1]),this.addNamespaces(e),Wn(this.data,s,i),r.silent||this.emit("added",t,e,n,i)}},{key:"addResources",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in n)"string"!=typeof n[r]&&"[object Array]"!==Object.prototype.toString.apply(n[r])||this.addResource(t,e,r,n[r],{silent:!0});i.silent||this.emit("added",t,e,n)}},{key:"addResourceBundle",value:function(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[t,e];t.indexOf(".")>-1&&(i=n,n=e,e=(s=t.split("."))[1]),this.addNamespaces(e);var a=$n(this.data,s)||{};i?Hn(a,n,r):a=ti(ti({},a),n),Wn(this.data,s,a),o.silent||this.emit("added",t,e,n)}},{key:"removeResourceBundle",value:function(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}},{key:"hasResourceBundle",value:function(t,e){return void 0!==this.getResource(t,e)}},{key:"getResourceBundle",value:function(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?ti(ti({},{}),this.getResource(t,e)):this.getResource(t,e)}},{key:"getDataByLanguage",value:function(t){return this.data[t]}},{key:"hasLanguageSomeTranslations",value:function(t){var e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find((function(t){return e[t]&&Object.keys(e[t]).length>0}))}},{key:"toJSON",value:function(){return this.data}}]),n}(jn),ii={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,e,n,i,r){var o=this;return t.forEach((function(t){o.processors[t]&&(e=o.processors[t].process(e,n,i,r))})),e}};function ri(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function oi(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ri(Object(n),!0).forEach((function(e){In(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ri(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function si(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=En(t);if(e){var r=En(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Sn(this,n)}}var ai={},li=function(t){_n(n,t);var e=si(n);function n(t){var i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return gn(this,n),i=e.call(this),Gn&&jn.call(xn(i)),zn(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,xn(i)),i.options=r,void 0===i.options.keySeparator&&(i.options.keySeparator="."),i.logger=Mn.create("translator"),i}return wn(n,[{key:"changeLanguage",value:function(t){t&&(this.language=t)}},{key:"exists",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==t)return!1;var n=this.resolve(t,e);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(t,e){var n=void 0!==e.nsSeparator?e.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");var i=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,r=e.ns||this.options.defaultNS||[],o=n&&t.indexOf(n)>-1,s=!(this.options.userDefinedKeySeparator||e.keySeparator||this.options.userDefinedNsSeparator||e.nsSeparator||function(t,e,n){e=e||"",n=n||"";var i=Yn.filter((function(t){return e.indexOf(t)<0&&n.indexOf(t)<0}));if(0===i.length)return!0;var r=new RegExp("(".concat(i.map((function(t){return"?"===t?"\\?":t})).join("|"),")")),o=!r.test(t);if(!o){var s=t.indexOf(n);s>0&&!r.test(t.substring(0,s))&&(o=!0)}return o}(t,n,i));if(o&&!s){var a=t.match(this.interpolator.nestingRegexp);if(a&&a.length>0)return{key:t,namespaces:r};var l=t.split(n);(n!==i||n===i&&this.options.ns.indexOf(l[0])>-1)&&(r=l.shift()),t=l.join(i)}return"string"==typeof r&&(r=[r]),{key:t,namespaces:r}}},{key:"translate",value:function(t,e,i){var r=this;if("object"!==mn(e)&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),"object"===mn(e)&&(e=oi({},e)),e||(e={}),null==t)return"";Array.isArray(t)||(t=[String(t)]);var o=void 0!==e.returnDetails?e.returnDetails:this.options.returnDetails,s=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,a=this.extractFromKey(t[t.length-1],e),l=a.key,c=a.namespaces,u=c[c.length-1],f=e.lng||this.language,d=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(f&&"cimode"===f.toLowerCase()){if(d){var h=e.nsSeparator||this.options.nsSeparator;return o?{res:"".concat(u).concat(h).concat(l),usedKey:l,exactUsedKey:l,usedLng:f,usedNS:u}:"".concat(u).concat(h).concat(l)}return o?{res:l,usedKey:l,exactUsedKey:l,usedLng:f,usedNS:u}:l}var p=this.resolve(t,e),m=p&&p.res,g=p&&p.usedKey||l,y=p&&p.exactUsedKey||l,v=Object.prototype.toString.apply(m),b=["[object Number]","[object Function]","[object RegExp]"],w=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays,x=!this.i18nFormat||this.i18nFormat.handleAsObject,k="string"!=typeof m&&"boolean"!=typeof m&&"number"!=typeof m;if(x&&m&&k&&b.indexOf(v)<0&&("string"!=typeof w||"[object Array]"!==v)){if(!e.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var _=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,m,oi(oi({},e),{},{ns:c})):"key '".concat(l," (").concat(this.language,")' returned an object instead of string.");return o?(p.res=_,p):_}if(s){var S="[object Array]"===v,E=S?[]:{},I=S?y:g;for(var N in m)if(Object.prototype.hasOwnProperty.call(m,N)){var T="".concat(I).concat(s).concat(N);E[N]=this.translate(T,oi(oi({},e),{joinArrays:!1,ns:c})),E[N]===T&&(E[N]=m[N])}m=E}}else if(x&&"string"==typeof w&&"[object Array]"===v)(m=m.join(w))&&(m=this.extendTranslation(m,t,e,i));else{var O=!1,C=!1,R=void 0!==e.count&&"string"!=typeof e.count,L=n.hasDefaultValue(e),A=R?this.pluralResolver.getSuffix(f,e.count,e):"",P=e["defaultValue".concat(A)]||e.defaultValue;!this.isValidLookup(m)&&L&&(O=!0,m=P),this.isValidLookup(m)||(C=!0,m=l);var D=e.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,B=D&&C?void 0:m,M=L&&P!==m&&this.options.updateMissing;if(C||O||M){if(this.logger.log(M?"updateKey":"missingKey",f,u,l,M?P:m),s){var j=this.resolve(l,oi(oi({},e),{},{keySeparator:!1}));j&&j.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var F=[],U=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if("fallback"===this.options.saveMissingTo&&U&&U[0])for(var z=0;z<U.length;z++)F.push(U[z]);else"all"===this.options.saveMissingTo?F=this.languageUtils.toResolveHierarchy(e.lng||this.language):F.push(e.lng||this.language);var V=function(t,n,i){var o=L&&i!==m?i:B;r.options.missingKeyHandler?r.options.missingKeyHandler(t,u,n,o,M,e):r.backendConnector&&r.backendConnector.saveMissing&&r.backendConnector.saveMissing(t,u,n,o,M,e),r.emit("missingKey",t,u,n,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?F.forEach((function(t){r.pluralResolver.getSuffixes(t,e).forEach((function(n){V([t],l+n,e["defaultValue".concat(n)]||P)}))})):V(F,l,P))}m=this.extendTranslation(m,t,e,p,i),C&&m===l&&this.options.appendNamespaceToMissingKey&&(m="".concat(u,":").concat(l)),(C||O)&&this.options.parseMissingKeyHandler&&(m="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(u,":").concat(l):l,O?m:void 0):this.options.parseMissingKeyHandler(m))}return o?(p.res=m,p):m}},{key:"extendTranslation",value:function(t,e,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,oi(oi({},this.options.interpolation.defaultVariables),n),i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(oi(oi({},n),{interpolation:oi(oi({},this.options.interpolation),n.interpolation)}));var s,a="string"==typeof t&&(n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(a){var l=t.match(this.interpolator.nestingRegexp);s=l&&l.length}var c=n.replace&&"string"!=typeof n.replace?n.replace:n;if(this.options.interpolation.defaultVariables&&(c=oi(oi({},this.options.interpolation.defaultVariables),c)),t=this.interpolator.interpolate(t,c,n.lng||this.language,n),a){var u=t.match(this.interpolator.nestingRegexp);s<(u&&u.length)&&(n.nest=!1)}!n.lng&&"v1"!==this.options.compatibilityAPI&&i&&i.res&&(n.lng=i.usedLng),!1!==n.nest&&(t=this.interpolator.nest(t,(function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return r&&r[0]===i[0]&&!n.context?(o.logger.warn("It seems you are nesting recursively key: ".concat(i[0]," in key: ").concat(e[0])),null):o.translate.apply(o,i.concat([e]))}),n)),n.interpolation&&this.interpolator.reset()}var f=n.postProcess||this.options.postProcess,d="string"==typeof f?[f]:f;return null!=t&&d&&d.length&&!1!==n.applyPostProcessor&&(t=ii.handle(d,t,e,this.options&&this.options.postProcessPassResolved?oi({i18nResolved:i},n):n,this)),t}},{key:"resolve",value:function(t){var e,n,i,r,o,s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t=[t]),t.forEach((function(t){if(!s.isValidLookup(e)){var l=s.extractFromKey(t,a),c=l.key;n=c;var u=l.namespaces;s.options.fallbackNS&&(u=u.concat(s.options.fallbackNS));var f=void 0!==a.count&&"string"!=typeof a.count,d=f&&!a.ordinal&&0===a.count&&s.pluralResolver.shouldUseIntlApi(),h=void 0!==a.context&&("string"==typeof a.context||"number"==typeof a.context)&&""!==a.context,p=a.lngs?a.lngs:s.languageUtils.toResolveHierarchy(a.lng||s.language,a.fallbackLng);u.forEach((function(t){s.isValidLookup(e)||(o=t,!ai["".concat(p[0],"-").concat(t)]&&s.utils&&s.utils.hasLoadedNamespace&&!s.utils.hasLoadedNamespace(o)&&(ai["".concat(p[0],"-").concat(t)]=!0,s.logger.warn('key "'.concat(n,'" for languages "').concat(p.join(", "),'" won\'t get resolved as namespace "').concat(o,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((function(n){if(!s.isValidLookup(e)){r=n;var o,l=[c];if(s.i18nFormat&&s.i18nFormat.addLookupKeys)s.i18nFormat.addLookupKeys(l,c,n,t,a);else{var u;f&&(u=s.pluralResolver.getSuffix(n,a.count,a));var p="".concat(s.options.pluralSeparator,"zero");if(f&&(l.push(c+u),d&&l.push(c+p)),h){var m="".concat(c).concat(s.options.contextSeparator).concat(a.context);l.push(m),f&&(l.push(m+u),d&&l.push(m+p))}}for(;o=l.pop();)s.isValidLookup(e)||(i=o,e=s.getResource(n,t,o,a))}})))}))}})),{res:e,usedKey:n,exactUsedKey:i,usedLng:r,usedNS:o}}},{key:"isValidLookup",value:function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}},{key:"getResource",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,n,i):this.resourceStore.getResource(t,e,n,i)}}],[{key:"hasDefaultValue",value:function(t){var e="defaultValue";for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e===n.substring(0,e.length)&&void 0!==t[n])return!0;return!1}}]),n}(jn);function ci(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ui=function(){function t(e){gn(this,t),this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Mn.create("languageUtils")}return wn(t,[{key:"getScriptPartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return null;var e=t.split("-");return 2===e.length?null:(e.pop(),"x"===e[e.length-1].toLowerCase()?null:this.formatLanguageCode(e.join("-")))}},{key:"getLanguagePartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return t;var e=t.split("-");return this.formatLanguageCode(e[0])}},{key:"formatLanguageCode",value:function(t){if("string"==typeof t&&t.indexOf("-")>-1){var e=["hans","hant","latn","cyrl","cans","mong","arab"],n=t.split("-");return this.options.lowerCaseLng?n=n.map((function(t){return t.toLowerCase()})):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=ci(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=ci(n[1].toLowerCase())),e.indexOf(n[2].toLowerCase())>-1&&(n[2]=ci(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}},{key:"isSupportedCode",value:function(t){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}},{key:"getBestMatchFromCodes",value:function(t){var e,n=this;return t?(t.forEach((function(t){if(!e){var i=n.formatLanguageCode(t);n.options.supportedLngs&&!n.isSupportedCode(i)||(e=i)}})),!e&&this.options.supportedLngs&&t.forEach((function(t){if(!e){var i=n.getLanguagePartFromCode(t);if(n.isSupportedCode(i))return e=i;e=n.options.supportedLngs.find((function(t){return t===i?t:t.indexOf("-")<0&&i.indexOf("-")<0?void 0:0===t.indexOf(i)?t:void 0}))}})),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e):null}},{key:"getFallbackCodes",value:function(t,e){if(!t)return[];if("function"==typeof t&&(t=t(e)),"string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!e)return t.default||[];var n=t[e];return n||(n=t[this.getScriptPartFromCode(e)]),n||(n=t[this.formatLanguageCode(e)]),n||(n=t[this.getLanguagePartFromCode(e)]),n||(n=t.default),n||[]}},{key:"toResolveHierarchy",value:function(t,e){var n=this,i=this.getFallbackCodes(e||this.options.fallbackLng||[],t),r=[],o=function(t){t&&(n.isSupportedCode(t)?r.push(t):n.logger.warn("rejecting language code not found in supportedLngs: ".concat(t)))};return"string"==typeof t&&t.indexOf("-")>-1?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(t))):"string"==typeof t&&o(this.formatLanguageCode(t)),i.forEach((function(t){r.indexOf(t)<0&&o(n.formatLanguageCode(t))})),r}}]),t}(),fi=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],di={1:function(t){return Number(t>1)},2:function(t){return Number(1!=t)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(0==t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(1==t?0:t>=2&&t<=4?1:2)},7:function(t){return Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0==t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0==t||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(1==t?0:2==t?1:(t<0||t>10)&&t%10==0?2:3)}},hi=["v1","v2","v3"],pi={zero:0,one:1,two:2,few:3,many:4,other:5};function mi(){var t={};return fi.forEach((function(e){e.lngs.forEach((function(n){t[n]={numbers:e.nr,plurals:di[e.fc]}}))})),t}var gi=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};gn(this,t),this.languageUtils=e,this.options=n,this.logger=Mn.create("pluralResolver"),this.options.compatibilityJSON&&"v4"!==this.options.compatibilityJSON||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=mi()}return wn(t,[{key:"addRule",value:function(t,e){this.rules[t]=e}},{key:"getRule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(t,{type:e.ordinal?"ordinal":"cardinal"})}catch(t){return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}},{key:"needsPlural",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(t,e);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(t,n).map((function(t){return"".concat(e).concat(t)}))}},{key:"getSuffixes",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.getRule(t,n);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((function(t,e){return pi[t]-pi[e]})).map((function(t){return"".concat(e.options.prepend).concat(t)})):i.numbers.map((function(i){return e.getSuffix(t,i,n)})):[]}},{key:"getSuffix",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this.getRule(t,n);return i?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(i.select(e)):this.getSuffixRetroCompatible(i,e):(this.logger.warn("no plural rule found for: ".concat(t)),"")}},{key:"getSuffixRetroCompatible",value:function(t,e){var n=this,i=t.noAbs?t.plurals(e):t.plurals(Math.abs(e)),r=t.numbers[i];this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]&&(2===r?r="plural":1===r&&(r=""));var o=function(){return n.options.prepend&&r.toString()?n.options.prepend+r.toString():r.toString()};return"v1"===this.options.compatibilityJSON?1===r?"":"number"==typeof r?"_plural_".concat(r.toString()):o():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]?o():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}},{key:"shouldUseIntlApi",value:function(){return!hi.includes(this.options.compatibilityJSON)}}]),t}();function yi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function vi(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?yi(Object(n),!0).forEach((function(e){In(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yi(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function bi(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=qn(t,e,n);return!o&&r&&"string"==typeof n&&void 0===(o=Qn(t,n,i))&&(o=Qn(e,n,i)),o}var wi=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};gn(this,t),this.logger=Mn.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||function(t){return t},this.init(e)}return wn(t,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});var e=t.interpolation;this.escape=void 0!==e.escape?e.escape:Jn,this.escapeValue=void 0===e.escapeValue||e.escapeValue,this.useRawValueToEscape=void 0!==e.useRawValueToEscape&&e.useRawValueToEscape,this.prefix=e.prefix?Kn(e.prefix):e.prefixEscaped||"{{",this.suffix=e.suffix?Kn(e.suffix):e.suffixEscaped||"}}",this.formatSeparator=e.formatSeparator?e.formatSeparator:e.formatSeparator||",",this.unescapePrefix=e.unescapeSuffix?"":e.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":e.unescapeSuffix||"",this.nestingPrefix=e.nestingPrefix?Kn(e.nestingPrefix):e.nestingPrefixEscaped||Kn("$t("),this.nestingSuffix=e.nestingSuffix?Kn(e.nestingSuffix):e.nestingSuffixEscaped||Kn(")"),this.nestingOptionsSeparator=e.nestingOptionsSeparator?e.nestingOptionsSeparator:e.nestingOptionsSeparator||",",this.maxReplaces=e.maxReplaces?e.maxReplaces:1e3,this.alwaysFormat=void 0!==e.alwaysFormat&&e.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var t="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(t,"g");var e="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(e,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(t,e,n,i){var r,o,s,a=this,l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(t){return t.replace(/\$/g,"$$$$")}var u=function(t){if(t.indexOf(a.formatSeparator)<0){var r=bi(e,l,t,a.options.keySeparator,a.options.ignoreJSONStructure);return a.alwaysFormat?a.format(r,void 0,n,vi(vi(vi({},i),e),{},{interpolationkey:t})):r}var o=t.split(a.formatSeparator),s=o.shift().trim(),c=o.join(a.formatSeparator).trim();return a.format(bi(e,l,s,a.options.keySeparator,a.options.ignoreJSONStructure),c,n,vi(vi(vi({},i),e),{},{interpolationkey:s}))};this.resetRegExp();var f=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&void 0!==i.interpolation.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(t){return c(t)}},{regex:this.regexp,safeValue:function(t){return a.escapeValue?c(a.escape(t)):c(t)}}].forEach((function(e){for(s=0;r=e.regex.exec(t);){var n=r[1].trim();if(void 0===(o=u(n)))if("function"==typeof f){var l=f(t,r,i);o="string"==typeof l?l:""}else if(i&&Object.prototype.hasOwnProperty.call(i,n))o="";else{if(d){o=r[0];continue}a.logger.warn("missed to pass in variable ".concat(n," for interpolating ").concat(t)),o=""}else"string"==typeof o||a.useRawValueToEscape||(o=Un(o));var c=e.safeValue(o);if(t=t.replace(r[0],c),d?(e.regex.lastIndex+=o.length,e.regex.lastIndex-=r[0].length):e.regex.lastIndex=0,++s>=a.maxReplaces)break}})),t}},{key:"nest",value:function(t,e){var n,i,r,o=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function a(t,e){var n=this.nestingOptionsSeparator;if(t.indexOf(n)<0)return t;var i=t.split(new RegExp("".concat(n,"[ ]*{"))),o="{".concat(i[1]);t=i[0];var s=(o=this.interpolate(o,r)).match(/'/g),a=o.match(/"/g);(s&&s.length%2==0&&!a||a.length%2!=0)&&(o=o.replace(/'/g,'"'));try{r=JSON.parse(o),e&&(r=vi(vi({},e),r))}catch(e){return this.logger.warn("failed parsing options string in nesting for key ".concat(t),e),"".concat(t).concat(n).concat(o)}return delete r.defaultValue,t}for(;n=this.nestingRegexp.exec(t);){var l=[];(r=(r=vi({},s)).replace&&"string"!=typeof r.replace?r.replace:r).applyPostProcessor=!1,delete r.defaultValue;var c=!1;if(-1!==n[0].indexOf(this.formatSeparator)&&!/{.*}/.test(n[1])){var u=n[1].split(this.formatSeparator).map((function(t){return t.trim()}));n[1]=u.shift(),l=u,c=!0}if((i=e(a.call(this,n[1].trim(),r),r))&&n[0]===t&&"string"!=typeof i)return i;"string"!=typeof i&&(i=Un(i)),i||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(t)),i=""),c&&(i=l.reduce((function(t,e){return o.format(t,e,s.lng,vi(vi({},s),{},{interpolationkey:n[1].trim()}))}),i.trim())),t=t.replace(n[0],i),this.regexp.lastIndex=0}return t}}]),t}();function xi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function ki(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?xi(Object(n),!0).forEach((function(e){In(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xi(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _i(t){var e=t.toLowerCase().trim(),n={};if(t.indexOf("(")>-1){var i=t.split("(");e=i[0].toLowerCase().trim();var r=i[1].substring(0,i[1].length-1);if("currency"===e&&r.indexOf(":")<0)n.currency||(n.currency=r.trim());else if("relativetime"===e&&r.indexOf(":")<0)n.range||(n.range=r.trim());else{r.split(";").forEach((function(t){if(t){var e=Ln(t.split(":")),i=e[0],r=e.slice(1).join(":").trim().replace(/^'+|'+$/g,"");n[i.trim()]||(n[i.trim()]=r),"false"===r&&(n[i.trim()]=!1),"true"===r&&(n[i.trim()]=!0),isNaN(r)||(n[i.trim()]=parseInt(r,10))}}))}}return{formatName:e,formatOptions:n}}function Si(t){var e={};return function(n,i,r){var o=i+JSON.stringify(r),s=e[o];return s||(s=t(i,r),e[o]=s),s(n)}}var Ei=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};gn(this,t),this.logger=Mn.create("formatter"),this.options=e,this.formats={number:Si((function(t,e){var n=new Intl.NumberFormat(t,ki({},e));return function(t){return n.format(t)}})),currency:Si((function(t,e){var n=new Intl.NumberFormat(t,ki(ki({},e),{},{style:"currency"}));return function(t){return n.format(t)}})),datetime:Si((function(t,e){var n=new Intl.DateTimeFormat(t,ki({},e));return function(t){return n.format(t)}})),relativetime:Si((function(t,e){var n=new Intl.RelativeTimeFormat(t,ki({},e));return function(t){return n.format(t,e.range||"day")}})),list:Si((function(t,e){var n=new Intl.ListFormat(t,ki({},e));return function(t){return n.format(t)}}))},this.init(e)}return wn(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=e.interpolation;this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||","}},{key:"add",value:function(t,e){this.formats[t.toLowerCase().trim()]=e}},{key:"addCached",value:function(t,e){this.formats[t.toLowerCase().trim()]=Si(e)}},{key:"format",value:function(t,e,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e.split(this.formatSeparator),s=o.reduce((function(t,e){var o=_i(e),s=o.formatName,a=o.formatOptions;if(i.formats[s]){var l=t;try{var c=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},u=c.locale||c.lng||r.locale||r.lng||n;l=i.formats[s](t,u,ki(ki(ki({},a),r),c))}catch(t){i.logger.warn(t)}return l}return i.logger.warn("there was no format function for ".concat(s)),t}),t);return s}}]),t}();function Ii(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Ni(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ii(Object(n),!0).forEach((function(e){In(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ti(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=En(t);if(e){var r=En(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Sn(this,n)}}var Oi=function(t){_n(n,t);var e=Ti(n);function n(t,i,r){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return gn(this,n),o=e.call(this),Gn&&jn.call(xn(o)),o.backend=t,o.store=i,o.services=r,o.languageUtils=r.languageUtils,o.options=s,o.logger=Mn.create("backendConnector"),o.waitingReads=[],o.maxParallelReads=s.maxParallelReads||10,o.readingCalls=0,o.maxRetries=s.maxRetries>=0?s.maxRetries:5,o.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,o.state={},o.queue=[],o.backend&&o.backend.init&&o.backend.init(r,s.backend,s),o}return wn(n,[{key:"queueLoad",value:function(t,e,n,i){var r=this,o={},s={},a={},l={};return t.forEach((function(t){var i=!0;e.forEach((function(e){var a="".concat(t,"|").concat(e);!n.reload&&r.store.hasResourceBundle(t,e)?r.state[a]=2:r.state[a]<0||(1===r.state[a]?void 0===s[a]&&(s[a]=!0):(r.state[a]=1,i=!1,void 0===s[a]&&(s[a]=!0),void 0===o[a]&&(o[a]=!0),void 0===l[e]&&(l[e]=!0)))})),i||(a[t]=!0)})),(Object.keys(o).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}},{key:"loaded",value:function(t,e,n){var i=t.split("|"),r=i[0],o=i[1];e&&this.emit("failedLoading",r,o,e),n&&this.store.addResourceBundle(r,o,n),this.state[t]=e?-1:2;var s={};this.queue.forEach((function(n){var i,a,l,c,u,f;i=n.loaded,a=o,c=Vn(i,[r],Object),u=c.obj,f=c.k,u[f]=u[f]||[],l&&(u[f]=u[f].concat(a)),l||u[f].push(a),function(t,e){void 0!==t.pending[e]&&(delete t.pending[e],t.pendingCount--)}(n,t),e&&n.errors.push(e),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach((function(t){s[t]||(s[t]={});var e=n.loaded[t];e.length&&e.forEach((function(e){void 0===s[t][e]&&(s[t][e]=!0)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",s),this.queue=this.queue.filter((function(t){return!t.done}))}},{key:"read",value:function(t,e,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;if(!t.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads)this.waitingReads.push({lng:t,ns:e,fcName:n,tried:r,wait:o,callback:s});else{this.readingCalls++;var a=function(a,l){if(i.readingCalls--,i.waitingReads.length>0){var c=i.waitingReads.shift();i.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}a&&l&&r<i.maxRetries?setTimeout((function(){i.read.call(i,t,e,n,r+1,2*o,s)}),o):s(a,l)},l=this.backend[n].bind(this.backend);if(2!==l.length)return l(t,e,a);try{var c=l(t,e);c&&"function"==typeof c.then?c.then((function(t){return a(null,t)})).catch(a):a(null,c)}catch(t){a(t)}}}},{key:"prepareLoading",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]);var o=this.queueLoad(t,e,i,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach((function(t){n.loadOne(t)}))}},{key:"load",value:function(t,e,n){this.prepareLoading(t,e,{},n)}},{key:"reload",value:function(t,e,n){this.prepareLoading(t,e,{reload:!0},n)}},{key:"loadOne",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=t.split("|"),r=i[0],o=i[1];this.read(r,o,"read",void 0,void 0,(function(i,s){i&&e.logger.warn("".concat(n,"loading namespace ").concat(o," for language ").concat(r," failed"),i),!i&&s&&e.logger.log("".concat(n,"loaded namespace ").concat(o," for language ").concat(r),s),e.loaded(t,i,s)}))}},{key:"saveMissing",value:function(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(e))this.logger.warn('did not save key "'.concat(n,'" as the namespace "').concat(e,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=n&&""!==n){if(this.backend&&this.backend.create){var a=Ni(Ni({},o),{},{isUpdate:r}),l=this.backend.create.bind(this.backend);if(l.length<6)try{var c;(c=5===l.length?l(t,e,n,i,a):l(t,e,n,i))&&"function"==typeof c.then?c.then((function(t){return s(null,t)})).catch(s):s(null,c)}catch(t){s(t)}else l(t,e,n,i,s,a)}t&&t[0]&&this.store.addResource(t[0],e,n,i)}}}]),n}(jn);function Ci(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var e={};if("object"===mn(t[1])&&(e=t[1]),"string"==typeof t[1]&&(e.defaultValue=t[1]),"string"==typeof t[2]&&(e.tDescription=t[2]),"object"===mn(t[2])||"object"===mn(t[3])){var n=t[3]||t[2];Object.keys(n).forEach((function(t){e[t]=n[t]}))}return e},interpolation:{escapeValue:!0,format:function(t,e,n,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Ri(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t}function Li(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Ai(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Li(Object(n),!0).forEach((function(e){In(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Li(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Pi(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=En(t);if(e){var r=En(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Sn(this,n)}}function Di(){}function Bi(t){Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((function(e){"function"==typeof t[e]&&(t[e]=t[e].bind(t))}))}var Mi=function(t){_n(n,t);var e=Pi(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(gn(this,n),t=e.call(this),Gn&&jn.call(xn(t)),t.options=Ri(i),t.services={},t.logger=Mn,t.modules={external:[]},Bi(xn(t)),r&&!t.isInitialized&&!i.isClone){if(!t.options.initImmediate)return t.init(i,r),Sn(t,xn(t));setTimeout((function(){t.init(i,r)}),0)}return t}return wn(n,[{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;"function"==typeof e&&(n=e,e={}),!e.defaultNS&&!1!==e.defaultNS&&e.ns&&("string"==typeof e.ns?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));var i=Ci();function r(t){return t?"function"==typeof t?new t:t:null}if(this.options=Ai(Ai(Ai({},i),this.options),Ri(e)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=Ai(Ai({},i.interpolation),this.options.interpolation)),void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator),!this.options.isClone){var o;this.modules.logger?Mn.init(r(this.modules.logger),this.options):Mn.init(null,this.options),this.modules.formatter?o=this.modules.formatter:"undefined"!=typeof Intl&&(o=Ei);var s=new ui(this.options);this.store=new ni(this.options.resources,this.options);var a=this.services;a.logger=Mn,a.resourceStore=this.store,a.languageUtils=s,a.pluralResolver=new gi(s,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!o||this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format||(a.formatter=r(o),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new wi(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new Oi(r(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",(function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];t.emit.apply(t,[e].concat(i))})),this.modules.languageDetector&&(a.languageDetector=r(this.modules.languageDetector),a.languageDetector.init&&a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=r(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new li(this.services,this.options),this.translator.on("*",(function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];t.emit.apply(t,[e].concat(i))})),this.modules.external.forEach((function(e){e.init&&e.init(t)}))}if(this.format=this.options.interpolation.format,n||(n=Di),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var l=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);l.length>0&&"dev"!==l[0]&&(this.options.lng=l[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");var c=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];c.forEach((function(e){t[e]=function(){var n;return(n=t.store)[e].apply(n,arguments)}}));var u=["addResource","addResources","addResourceBundle","removeResourceBundle"];u.forEach((function(e){t[e]=function(){var n;return(n=t.store)[e].apply(n,arguments),t}}));var f=Fn(),d=function(){var e=function(e,i){t.isInitialized&&!t.initializedStoreOnce&&t.logger.warn("init: i18next is already initialized. You should call init just once!"),t.isInitialized=!0,t.options.isClone||t.logger.log("initialized",t.options),t.emit("initialized",t.options),f.resolve(i),n(e,i)};if(t.languages&&"v1"!==t.options.compatibilityAPI&&!t.isInitialized)return e(null,t.t.bind(t));t.changeLanguage(t.options.lng,e)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),f}},{key:"loadResources",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Di,i=n,r="string"==typeof t?t:this.language;if("function"==typeof t&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if(r&&"cimode"===r.toLowerCase())return i();var o=[],s=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach((function(t){o.indexOf(t)<0&&o.push(t)}))};if(r)s(r);else{var a=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);a.forEach((function(t){return s(t)}))}this.options.preload&&this.options.preload.forEach((function(t){return s(t)})),this.services.backendConnector.load(o,this.options.ns,(function(t){t||e.resolvedLanguage||!e.language||e.setResolvedLanguage(e.language),i(t)}))}else i(null)}},{key:"reloadResources",value:function(t,e,n){var i=Fn();return t||(t=this.languages),e||(e=this.options.ns),n||(n=Di),this.services.backendConnector.reload(t,e,(function(t){i.resolve(),n(t)})),i}},{key:"use",value:function(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&ii.addPostProcessor(t),"formatter"===t.type&&(this.modules.formatter=t),"3rdParty"===t.type&&this.modules.external.push(t),this}},{key:"setResolvedLanguage",value:function(t){if(t&&this.languages&&!(["cimode","dev"].indexOf(t)>-1))for(var e=0;e<this.languages.length;e++){var n=this.languages[e];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}},{key:"changeLanguage",value:function(t,e){var n=this;this.isLanguageChangingTo=t;var i=Fn();this.emit("languageChanging",t);var r=function(t){n.language=t,n.languages=n.services.languageUtils.toResolveHierarchy(t),n.resolvedLanguage=void 0,n.setResolvedLanguage(t)},o=function(o){t||o||!n.services.languageDetector||(o=[]);var s="string"==typeof o?o:n.services.languageUtils.getBestMatchFromCodes(o);s&&(n.language||r(s),n.translator.language||n.translator.changeLanguage(s),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage&&n.services.languageDetector.cacheUserLanguage(s)),n.loadResources(s,(function(t){!function(t,o){o?(r(o),n.translator.changeLanguage(o),n.isLanguageChangingTo=void 0,n.emit("languageChanged",o),n.logger.log("languageChanged",o)):n.isLanguageChangingTo=void 0,i.resolve((function(){return n.t.apply(n,arguments)})),e&&e(t,(function(){return n.t.apply(n,arguments)}))}(t,s)}))};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(t):o(this.services.languageDetector.detect()),i}},{key:"getFixedT",value:function(t,e,n){var i=this,r=function t(e,r){var o;if("object"!==mn(r)){for(var s=arguments.length,a=new Array(s>2?s-2:0),l=2;l<s;l++)a[l-2]=arguments[l];o=i.options.overloadTranslationOptionHandler([e,r].concat(a))}else o=Ai({},r);o.lng=o.lng||t.lng,o.lngs=o.lngs||t.lngs,o.ns=o.ns||t.ns,o.keyPrefix=o.keyPrefix||n||t.keyPrefix;var c,u=i.options.keySeparator||".";return c=o.keyPrefix&&Array.isArray(e)?e.map((function(t){return"".concat(o.keyPrefix).concat(u).concat(t)})):o.keyPrefix?"".concat(o.keyPrefix).concat(u).concat(e):e,i.t(c,o)};return"string"==typeof t?r.lng=t:r.lngs=t,r.ns=e,r.keyPrefix=n,r}},{key:"t",value:function(){var t;return this.translator&&(t=this.translator).translate.apply(t,arguments)}},{key:"exists",value:function(){var t;return this.translator&&(t=this.translator).exists.apply(t,arguments)}},{key:"setDefaultNamespace",value:function(t){this.options.defaultNS=t}},{key:"hasLoadedNamespace",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var i=n.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;var s=function(t,n){var i=e.services.backendConnector.state["".concat(t,"|").concat(n)];return-1===i||2===i};if(n.precheck){var a=n.precheck(this,s);if(void 0!==a)return a}return!!this.hasResourceBundle(i,t)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!s(i,t)||r&&!s(o,t)))}},{key:"loadNamespaces",value:function(t,e){var n=this,i=Fn();return this.options.ns?("string"==typeof t&&(t=[t]),t.forEach((function(t){n.options.ns.indexOf(t)<0&&n.options.ns.push(t)})),this.loadResources((function(t){i.resolve(),e&&e(t)})),i):(e&&e(),Promise.resolve())}},{key:"loadLanguages",value:function(t,e){var n=Fn();"string"==typeof t&&(t=[t]);var i=this.options.preload||[],r=t.filter((function(t){return i.indexOf(t)<0}));return r.length?(this.options.preload=i.concat(r),this.loadResources((function(t){n.resolve(),e&&e(t)})),n):(e&&e(),Promise.resolve())}},{key:"dir",value:function(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";var e=this.services&&this.services.languageUtils||new ui(Ci());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(e.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Di,r=Ai(Ai(Ai({},this.options),e),{isClone:!0}),o=new n(r);void 0===e.debug&&void 0===e.prefix||(o.logger=o.logger.clone(e));var s=["store","services","language"];return s.forEach((function(e){o[e]=t[e]})),o.services=Ai({},this.services),o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o.translator=new li(o.services,o.options),o.translator.on("*",(function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];o.emit.apply(o,[t].concat(n))})),o.init(r,i),o.translator.options=o.options,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(jn);In(Mi,"createInstance",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return new Mi(t,e)}));var ji=Mi.createInstance();ji.createInstance=Mi.createInstance;ji.createInstance,ji.dir,ji.init,ji.loadResources,ji.reloadResources,ji.use,ji.changeLanguage,ji.getFixedT,ji.t,ji.exists,ji.setDefaultNamespace,ji.hasLoadedNamespace,ji.loadNamespaces,ji.loadLanguages;var Fi=[],Ui=Fi.forEach,zi=Fi.slice;function Vi(t){return Ui.call(zi.call(arguments,1),(function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])})),t}var Wi=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,$i=function(t,e,n){var i=n||{};i.path=i.path||"/";var r=encodeURIComponent(e),o="".concat(t,"=").concat(r);if(i.maxAge>0){var s=i.maxAge-0;if(Number.isNaN(s))throw new Error("maxAge should be a Number");o+="; Max-Age=".concat(Math.floor(s))}if(i.domain){if(!Wi.test(i.domain))throw new TypeError("option domain is invalid");o+="; Domain=".concat(i.domain)}if(i.path){if(!Wi.test(i.path))throw new TypeError("option path is invalid");o+="; Path=".concat(i.path)}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");o+="; Expires=".concat(i.expires.toUTCString())}if(i.httpOnly&&(o+="; HttpOnly"),i.secure&&(o+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o},qi=function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+6e4*n)),i&&(r.domain=i),document.cookie=$i(t,encodeURIComponent(e),r)},Hi=function(t){for(var e="".concat(t,"="),n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(e))return r.substring(e.length,r.length)}return null},Ki={name:"cookie",lookup:function(t){var e;if(t.lookupCookie&&"undefined"!=typeof document){var n=Hi(t.lookupCookie);n&&(e=n)}return e},cacheUserLanguage:function(t,e){e.lookupCookie&&"undefined"!=typeof document&&qi(e.lookupCookie,t,e.cookieMinutes,e.cookieDomain,e.cookieOptions)}},Xi={name:"querystring",lookup:function(t){var e;if("undefined"!=typeof window){var n=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));for(var i=n.substring(1).split("&"),r=0;r<i.length;r++){var o=i[r].indexOf("=");if(o>0)i[r].substring(0,o)===t.lookupQuerystring&&(e=i[r].substring(o+1))}}return e}},Ji=null,Gi=function(){if(null!==Ji)return Ji;try{Ji="undefined"!==window&&null!==window.localStorage;var t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch(t){Ji=!1}return Ji},Yi={name:"localStorage",lookup:function(t){var e;if(t.lookupLocalStorage&&Gi()){var n=window.localStorage.getItem(t.lookupLocalStorage);n&&(e=n)}return e},cacheUserLanguage:function(t,e){e.lookupLocalStorage&&Gi()&&window.localStorage.setItem(e.lookupLocalStorage,t)}},Qi=null,Zi=function(){if(null!==Qi)return Qi;try{Qi="undefined"!==window&&null!==window.sessionStorage;var t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch(t){Qi=!1}return Qi},tr={name:"sessionStorage",lookup:function(t){var e;if(t.lookupSessionStorage&&Zi()){var n=window.sessionStorage.getItem(t.lookupSessionStorage);n&&(e=n)}return e},cacheUserLanguage:function(t,e){e.lookupSessionStorage&&Zi()&&window.sessionStorage.setItem(e.lookupSessionStorage,t)}},er={name:"navigator",lookup:function(t){var e=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)e.push(navigator.languages[n]);navigator.userLanguage&&e.push(navigator.userLanguage),navigator.language&&e.push(navigator.language)}return e.length>0?e:void 0}},nr={name:"htmlTag",lookup:function(t){var e,n=t.htmlTag||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(e=n.getAttribute("lang")),e}},ir={name:"path",lookup:function(t){var e;if("undefined"!=typeof window){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array)if("number"==typeof t.lookupFromPathIndex){if("string"!=typeof n[t.lookupFromPathIndex])return;e=n[t.lookupFromPathIndex].replace("/","")}else e=n[0].replace("/","")}return e}},rr={name:"subdomain",lookup:function(t){var e="number"==typeof t.lookupFromSubdomainIndex?t.lookupFromSubdomainIndex+1:1,n="undefined"!=typeof window&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(n)return n[e]}};var or=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};gn(this,t),this.type="languageDetector",this.detectors={},this.init(e,n)}return wn(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=t||{languageUtils:{}},this.options=Vi(e,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Ki),this.addDetector(Xi),this.addDetector(Yi),this.addDetector(tr),this.addDetector(er),this.addDetector(nr),this.addDetector(ir),this.addDetector(rr)}},{key:"addDetector",value:function(t){this.detectors[t.name]=t}},{key:"detect",value:function(t){var e=this;t||(t=this.options.order);var n=[];return t.forEach((function(t){if(e.detectors[t]){var i=e.detectors[t].lookup(e.options);i&&"string"==typeof i&&(i=[i]),i&&(n=n.concat(i))}})),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}},{key:"cacheUserLanguage",value:function(t,e){var n=this;e||(e=this.options.caches),e&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||e.forEach((function(e){n.detectors[e]&&n.detectors[e].cacheUserLanguage(t,n.options)})))}}]),t}();or.type="languageDetector";var sr;sr=JSON.parse('{"Home":"Home","My library":"My library","loading":"loading","Log in":"Log in","Sign up":"Sign up","OR":"OR","Filmoteka":"Filmoteka","Watched":"Watched","Queue":"Queue","Developed with":"Developed with","By":"By","GoIT Students":"GoIT Students","Team":"Team","\'IT-bees\'":"\'IT-bees\'","Oleg Bilas":"Oleg Bilas","Team-lead":"Team-lead","Inna Shavarovska":"Inna Shavarovska","Scrum-master":"Scrum-master","Oleksandr Samarskyi":"Oleksandr Samarskyi","Developer":"Developer","Shadi Abumutair":"Shadi Abumutair","Vika Rabotilova":"Vika Rabotilova","Vlad Shostak":"Vlad Shostak","Yevhen Chaban":"Yevhen Chaban","Viktor Dubrovets":"Viktor Dubrovets","Nataliia Rumiantseva":"Nataliia Rumiantseva","Ivan Tishchenko":"Ivan Tishchenko","Vote / Votes":"Vote / Votes","Popularity":"Popularity","Original Title":"Original Title","Genre":"Genre","About":"About"}');var ar;ar=JSON.parse('{"Home":"Додому","My library":"Бібліотека","loading":"Завантаження","Log in":"Вхід","Sign up":"Реєстрація","OR":"АБО","Filmoteka":"Фільмотека","Watched":"Переглянуто","Queue":"Черга","Developed with":"Розроблено","by":" ","GoIT Students":"Студентами GoIT","Team":"Команда","\'IT-bees\'":"\'IT-бджілки\'","Oleg Bilas":"Олег Білас","Team-lead":"Тім-лід","Inna Shavarovska":"Інна Шаваровська","Scrum-master":"Скрам-майстер","Oleksandr Samarskyi":"Олександр Самарський","Developer":"Розробник","Shadi Abumutair":"Шаді Абумутаір","Vika Rabotilova":"Віка Работілова","Vlad Shostak":"Владислав Шостак","Yevhen Chaban":"Євген Чабан","Viktor Dubrovets":"Віктор Дубровець","Nataliia Rumiantseva":"Наталія Румянцева","Ivan Tishchenko":"Іван Тищенко","Vote / Votes":"Голос / Голосів","Popularity":"Популярність","Original Title":"Оригінальна назва","Genre":"Жанр","About":"Опис"}'),ji.use(or),ji.init({debug:!0,resources:{en:{translation:e(sr)},uk:{translation:e(ar)}}});document.querySelectorAll("[data-translate]").forEach((t=>{t.innerHTML=ji.t(t.textContent.trim())}));var lr=ji;let cr;"en"===lr.language?cr=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]:"uk"===lr.language&&(cr=[{id:28,name:"Бойовик"},{id:12,name:"Пригоди"},{id:16,name:"Мультфільм"},{id:35,name:"Комедія"},{id:80,name:"Кримінал"},{id:99,name:"Документальний"},{id:18,name:"Драма"},{id:10751,name:"Сімейний"},{id:14,name:"Фентезі"},{id:36,name:"Історичний"},{id:27,name:"Жахи"},{id:10402,name:"Музика"},{id:9648,name:"Містика"},{id:10749,name:"Мелодрама"},{id:878,name:"Фантастика"},{id:10770,name:"ТВ фільм"},{id:53,name:"Трилер"},{id:10752,name:"Війна"},{id:37,name:"Вестерн"}]);const ur=t=>{if(t.length>0){const e=[];return t.forEach((t=>{const n=(t=>{const e=cr.find((e=>e.id===t));return e?e.name:""})(t);n&&e.push(n)})),e.join(", ")}return""},fr="731f4a410992078035fa504a629d03c1",dr="en"===lr.language||"uk"===lr.language?lr.language:"en",hr=async(t,e=1)=>{const n=t?`https://api.themoviedb.org/3/search/movie?api_key=${fr}&language=${dr}&include_image_language=${dr}&region=${dr}&query=${t}&page=${e}`:`https://api.themoviedb.org/3/trending/all/day?api_key=${fr}&language=${dr}&include_image_language=${dr}&region=${dr}&page=${e}`;try{const t=await Qe.get(n),e=t=>t.filter((t=>t.poster_path&&t.genre_ids&&t.id&&t.release_date&&(t.title||t.original_title))).map((({genre_ids:t,id:e,poster_path:n,release_date:i="",title:r,original_title:o})=>({genres:ur(t),id:e,poster_path:`https://image.tmdb.org/t/p/w500${n}`,year:i.slice(0,4),title:r||(o||"The title is shown above")})));return{page:t.data.page,results:e(t.data.results),total_pages:t.data.total_pages}}catch(t){throw new Error(responce.status)}},pr=async t=>{try{const e=await Qe.get(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=${fr}&language=${dr}&include_image_language=${dr}&region=${dr}`);return e.data.results[0]?e.data.results[0].key:""}catch(t){throw new Error(responce.status)}},mr=async t=>{try{const e=await Qe.get(`https://api.themoviedb.org/3/movie/${t}?api_key=${fr}&language=${dr}&include_image_language=${dr}&region=${dr}`),{genres:n,id:i,poster_path:r,title:o,overview:s,popularity:a,vote_average:l,vote_count:c}=e.data;return{genres:n.map((t=>t.name)).join(", "),id:i,poster_path:`https://image.tmdb.org/t/p/w500${r}`,original_title:o,overview:s,popularity:a,vote_average:l,vote_count:c,videoId:await pr(t)}}catch(t){throw new Error(responce.status)}};var gr=!1;if("undefined"!=typeof window){var yr={get passive(){gr=!0}};window.addEventListener("testPassive",null,yr),window.removeEventListener("testPassive",null,yr)}var vr="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),br=[],wr=!1,xr=-1,kr=void 0,_r=void 0,Sr=void 0,Er=function(t){return br.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},Ir=function(t){var e=t||window.event;return!!Er(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},Nr=function(){void 0!==Sr&&(document.body.style.paddingRight=Sr,Sr=void 0),void 0!==kr&&(document.body.style.overflow=kr,kr=void 0)},Tr=function(){if(void 0!==_r){var t=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=_r.position,document.body.style.top=_r.top,document.body.style.left=_r.left,window.scrollTo(e,t),_r=void 0}},Or=function(t,e){if(t){if(!br.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};br=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(br),[n]),vr?window.requestAnimationFrame((function(){if(void 0===_r){_r={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,e=t.scrollY,n=t.scrollX,i=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var t=i-window.innerHeight;t&&e>=i&&(document.body.style.top=-(e+t))}))}),300)}})):function(t){if(void 0===Sr){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(e&&n>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Sr=document.body.style.paddingRight,document.body.style.paddingRight=i+n+"px"}}void 0===kr&&(kr=document.body.style.overflow,document.body.style.overflow="hidden")}(e),vr&&(t.ontouchstart=function(t){1===t.targetTouches.length&&(xr=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var n=t.targetTouches[0].clientY-xr;!Er(t.target)&&(e&&0===e.scrollTop&&n>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&n<0?Ir(t):t.stopPropagation())}(e,t)},wr||(document.addEventListener("touchmove",Ir,gr?{passive:!1}:void 0),wr=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},Cr=function(t){t?(br=br.filter((function(e){return e.targetElement!==t})),vr&&(t.ontouchstart=null,t.ontouchmove=null,wr&&0===br.length&&(document.removeEventListener("touchmove",Ir,gr?{passive:!1}:void 0),wr=!1)),vr?Tr():Nr()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function Rr(t,e,n){t.forEach((function(t){t.dataset.click||(t.setAttribute("data-click","true"),t.addEventListener("click",(function(e){e.preventDefault();const n=t.getAttribute("data-modal");document.querySelector('[data-modal="'+n+'"]:not(button):not(a)').closest(".js-overlay-modal").classList.remove("is-hidden"),document.addEventListener("keydown",Lr),Or(document.body)})))})),n.forEach((function(t){t.dataset.click||(t.setAttribute("data-click","true"),t.addEventListener("click",(function(e){t.closest(".js-overlay-modal").classList.add("is-hidden"),t.classList.contains("js-open-modal")||(document.removeEventListener("keydown",Lr),Cr(document.body))}))),e.forEach((t=>{t.dataset.click||(t.setAttribute("data-click","true"),t.addEventListener("click",(function(e){e.target===e.currentTarget&&(t.classList.add("is-hidden"),document.removeEventListener("keydown",Lr),Cr(document.body))})))}))}))}function Lr(t){if("Escape"===t.key){document.querySelector(".js-overlay-modal:not(.is-hidden)").classList.add("is-hidden"),Cr(document.body)}}class Ar{createIframe(t){const e=document.createElement("iframe");return e.setAttribute("allowfullscreen",""),e.setAttribute("allow","accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),e.setAttribute("src",this.generateURL(t)),e.classList.add("video"),e}generateURL(t){return`https://www.youtube.com/embed/${t}?rel=0&showinfo=0&autoplay=1`}}const Pr="gue",Dr="watched";function Br(t){const e=localStorage.getItem(`${t}`),n=JSON.parse(e);return n||[]}function Mr(t,e){const n=Br(t);if(n.some((t=>t.id===e.id)))return;n.push(e);const i=JSON.stringify(n);localStorage.setItem(`${t}`,i)}function jr(t,e){const n=Br(t),i=n.findIndex((t=>t.id===e.id));if(-1===i)return;n.splice(i,1);const r=JSON.stringify(n);localStorage.setItem(`${t}`,r)}var Fr,Ur,zr,Vr=Fr={};function Wr(){throw new Error("setTimeout has not been defined")}function $r(){throw new Error("clearTimeout has not been defined")}function qr(t){if(Ur===setTimeout)return setTimeout(t,0);if((Ur===Wr||!Ur)&&setTimeout)return Ur=setTimeout,setTimeout(t,0);try{return Ur(t,0)}catch(e){try{return Ur.call(null,t,0)}catch(e){return Ur.call(this,t,0)}}}!function(){try{Ur="function"==typeof setTimeout?setTimeout:Wr}catch(t){Ur=Wr}try{zr="function"==typeof clearTimeout?clearTimeout:$r}catch(t){zr=$r}}();var Hr,Kr=[],Xr=!1,Jr=-1;function Gr(){Xr&&Hr&&(Xr=!1,Hr.length?Kr=Hr.concat(Kr):Jr=-1,Kr.length&&Yr())}function Yr(){if(!Xr){var t=qr(Gr);Xr=!0;for(var e=Kr.length;e;){for(Hr=Kr,Kr=[];++Jr<e;)Hr&&Hr[Jr].run();Jr=-1,e=Kr.length}Hr=null,Xr=!1,function(t){if(zr===clearTimeout)return clearTimeout(t);if((zr===$r||!zr)&&clearTimeout)return zr=clearTimeout,clearTimeout(t);try{zr(t)}catch(e){try{return zr.call(null,t)}catch(e){return zr.call(this,t)}}}(t)}}function Qr(t,e){this.fun=t,this.array=e}function Zr(){}Vr.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Kr.push(new Qr(t,e)),1!==Kr.length||Xr||qr(Yr)},Qr.prototype.run=function(){this.fun.apply(null,this.array)},Vr.title="browser",Vr.browser=!0,Vr.env={},Vr.argv=[],Vr.version="",Vr.versions={},Vr.on=Zr,Vr.addListener=Zr,Vr.once=Zr,Vr.off=Zr,Vr.removeListener=Zr,Vr.removeAllListeners=Zr,Vr.emit=Zr,Vr.prependListener=Zr,Vr.prependOnceListener=Zr,Vr.listeners=function(t){return[]},Vr.binding=function(t){throw new Error("process.binding is not supported")},Vr.cwd=function(){return"/"},Vr.chdir=function(t){throw new Error("process.chdir is not supported")},Vr.umask=function(){return 0};
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
const to=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,u=(3&r)<<4|s>>4;let f=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(f=64)),i.push(n[c],n[u],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(to(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(o>>10)),e[i++]=String.fromCharCode(56320+(1023&o))}else{const o=t[n++],s=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0;++e;const s=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==o||null==s||null==a)throw new no;const l=r<<2|o>>4;if(i.push(l),64!==s){const t=o<<4&240|s>>2;if(i.push(t),64!==a){const t=s<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class no extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const io=function(t){return function(t){const e=to(t);return eo.encodeByteArray(e,!0)}(t).replace(/\./g,"")},ro=function(t){try{return eo.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const oo=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,so=()=>{try{return oo()||(()=>{if(void 0===Fr||void 0===Fr.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&ro(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},ao=t=>{var e,n;return null===(n=null===(e=so())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},lo=t=>{const e=ao(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},co=t=>{var e;return null===(e=so())||void 0===e?void 0:e[`_${t}`]};
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
class uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function fo(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[io(JSON.stringify({alg:"none",type:"JWT"})),io(JSON.stringify(o)),""].join(".")}
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
 */function ho(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function po(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function mo(){const t=ho();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function go(){try{return"object"==typeof indexedDB}catch(t){return!1}}class yo extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,yo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?function(t,e){return t.replace(bo,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new yo(i,s,n)}}const bo=/\{\$([^}]+)}/g;
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
 */function wo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],o=e[r];if(ko(n)&&ko(o)){if(!xo(n,o))return!1}else if(n!==o)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function ko(t){return null!==t&&"object"==typeof t}
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
function _o(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function So(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function Eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function Io(t,e){const n=new No(t,e);return n.subscribe.bind(n)}class No{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=To),void 0===i.error&&(i.error=To),void 0===i.complete&&(i.complete=To);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function To(){}
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
function Oo(t){return t&&t._delegate?t._delegate:t}class Co{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const Ro="[DEFAULT]";
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
 */class Lo{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new uo;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ro})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===Ro?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:Ro:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ao{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Lo(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
 */const Po=[];var Do,Bo;(Bo=Do||(Do={}))[Bo.DEBUG=0]="DEBUG",Bo[Bo.VERBOSE=1]="VERBOSE",Bo[Bo.INFO=2]="INFO",Bo[Bo.WARN=3]="WARN",Bo[Bo.ERROR=4]="ERROR",Bo[Bo.SILENT=5]="SILENT";const Mo={debug:Do.DEBUG,verbose:Do.VERBOSE,info:Do.INFO,warn:Do.WARN,error:Do.ERROR,silent:Do.SILENT},jo=Do.INFO,Fo={[Do.DEBUG]:"log",[Do.VERBOSE]:"log",[Do.INFO]:"info",[Do.WARN]:"warn",[Do.ERROR]:"error"},Uo=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=Fo[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class zo{constructor(t){this.name=t,this._logLevel=jo,this._logHandler=Uo,this._userLogHandler=null,Po.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Do))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Mo[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Do.DEBUG,...t),this._logHandler(this,Do.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Do.VERBOSE,...t),this._logHandler(this,Do.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Do.INFO,...t),this._logHandler(this,Do.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Do.WARN,...t),this._logHandler(this,Do.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Do.ERROR,...t),this._logHandler(this,Do.ERROR,...t)}}let Vo,Wo;const $o=new WeakMap,qo=new WeakMap,Ho=new WeakMap,Ko=new WeakMap,Xo=new WeakMap;let Jo={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return qo.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Ho.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qo(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Go(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Wo||(Wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Zo(this),e),Qo($o.get(this))}:function(...e){return Qo(t.apply(Zo(this),e))}:function(e,...n){const i=t.call(Zo(this),e,...n);return Ho.set(i,e.sort?e.sort():[e]),Qo(i)}}function Yo(t){return"function"==typeof t?Go(t):(t instanceof IDBTransaction&&function(t){if(qo.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));qo.set(t,e)}(t),e=t,(Vo||(Vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,Jo):t);var e}function Qo(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(Qo(t.result)),i()},o=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&$o.set(e,t)})).catch((()=>{})),Xo.set(e,t),e}(t);if(Ko.has(t))return Ko.get(t);const e=Yo(t);return e!==t&&(Ko.set(t,e),Xo.set(e,t)),e}const Zo=t=>Xo.get(t);function ts(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),a=Qo(s);return i&&s.addEventListener("upgradeneeded",(t=>{i(Qo(s.result),t.oldVersion,t.newVersion,Qo(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const es=["get","getKey","getAll","getAllKeys","count"],ns=["put","add","delete","clear"],is=new Map;function rs(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(is.get(e))return is.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=ns.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!es.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),r&&o.done]))[0]};return is.set(e,o),o}Jo=(t=>({...t,get:(e,n,i)=>rs(e,n)||t.get(e,n,i),has:(e,n)=>!!rs(e,n)||t.has(e,n)}))(Jo);
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
class os{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ss="@firebase/app",as="0.9.7",ls=new zo("@firebase/app"),cs="[DEFAULT]",us={[ss]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},fs=new Map,ds=new Map;function hs(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(ds.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;ds.set(e,t);for(const e of fs.values())hs(e,t);return!0}function ms(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const gs=new vo("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ys{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Co("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}
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
 */const vs="9.19.1";function bs(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:cs,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw gs.create("bad-app-name",{appName:String(r)});var o;if(n||(n=null===(o=so())||void 0===o?void 0:o.config),!n)throw gs.create("no-options");const s=fs.get(r);if(s){if(xo(n,s.options)&&xo(i,s.config))return s;throw gs.create("duplicate-app",{appName:r})}const a=new Ao(r);for(const t of ds.values())a.addComponent(t);const l=new ys(n,i,a);return fs.set(r,l),l}function ws(t="[DEFAULT]"){const e=fs.get(t);if(!e&&t===cs)return bs();if(!e)throw gs.create("no-app",{appName:t});return e}function xs(t,e,n){var i;let r=null!==(i=us[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ls.warn(t.join(" "))}ps(new Co(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
const ks="firebase-heartbeat-store";let _s=null;function Ss(){return _s||(_s=ts("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(ks)}}).catch((t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})}))),_s}async function Es(t,e){try{const n=(await Ss()).transaction(ks,"readwrite"),i=n.objectStore(ks);return await i.put(e,Is(t)),n.done}catch(t){if(t instanceof yo)ls.warn(t.message);else{const e=gs.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});ls.warn(e.message)}}}function Is(t){return`${t.name}!${t.options.appId}`}
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
 */class Ns{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Os(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Ts();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ts(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Cs(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Cs(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=io(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ts(){return(new Date).toISOString().substring(0,10)}class Os{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!go()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Ss()).transaction(ks).objectStore(ks).get(Is(t))}catch(t){if(t instanceof yo)ls.warn(t.message);else{const e=gs.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ls.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Es(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Es(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Cs(t){return io(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var Rs;Rs="",ps(new Co("platform-logger",(t=>new os(t)),"PRIVATE")),ps(new Co("heartbeat",(t=>new Ns(t)),"PRIVATE")),xs(ss,as,Rs),xs(ss,as,"esm2017"),xs("fire-js","");
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
xs("firebase","9.19.1","app");const Ls=bs({apiKey:"AIzaSyDFBT4l6qIJNa5FHkQwrhjL1oZ0g4xnyss",authDomain:"group-project-11-filmoteka.firebaseapp.com",projectId:"group-project-11-filmoteka",databaseURL:"https://group-project-11-filmoteka-default-rtdb.firebaseio.com",storageBucket:"group-project-11-filmoteka.appspot.com",messagingSenderId:"114137226490",appId:"1:114137226490:web:4cfd8cb3a42074d592bd43"});
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
class As{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}As.UNAUTHENTICATED=new As(null),As.GOOGLE_CREDENTIALS=new As("google-credentials-uid"),As.FIRST_PARTY=new As("first-party-uid"),As.MOCK_USER=new As("mock-user");
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
let Ps="9.19.0";
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
 */const Ds=new zo("@firebase/firestore");function Bs(t,...e){if(Ds.logLevel<=Do.DEBUG){const n=e.map(Fs);Ds.debug(`Firestore (${Ps}): ${t}`,...n)}}function Ms(t,...e){if(Ds.logLevel<=Do.ERROR){const n=e.map(Fs);Ds.error(`Firestore (${Ps}): ${t}`,...n)}}function js(t,...e){if(Ds.logLevel<=Do.WARN){const n=e.map(Fs);Ds.warn(`Firestore (${Ps}): ${t}`,...n)}}function Fs(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Us(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw Ms(e),new Error(e)}function zs(t,e){t||Us()}function Vs(t,e){return t}
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
 */const Ws="cancelled",$s="unknown",qs="invalid-argument",Hs="deadline-exceeded",Ks="not-found",Xs="permission-denied",Js="unauthenticated",Gs="resource-exhausted",Ys="failed-precondition",Qs="aborted",Zs="out-of-range",ta="unimplemented",ea="internal",na="unavailable";class ia extends yo{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class ra{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class oa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(As.UNAUTHENTICATED)))}shutdown(){}}class sa{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class aa{constructor(t){this.auth=null,t.onInit((t=>{this.auth=t}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(zs("string"==typeof t.accessToken),new ra(t.accessToken,new As(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class la{constructor(t,e,n){this.t=t,this.i=e,this.o=n,this.type="FirstParty",this.user=As.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const t=this.h();return t&&this.u.set("Authorization",t),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class ca{constructor(t,e,n){this.t=t,this.i=e,this.o=n}getToken(){return Promise.resolve(new la(this.t,this.i,this.o))}start(t,e){t.enqueueRetryable((()=>e(As.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ua{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fa{constructor(t){this.l=t,this.appCheck=null,t.onInit((t=>{this.appCheck=t}))}getToken(){return this.appCheck?this.appCheck.getToken().then((t=>t?(zs("string"==typeof t.token),new ua(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}
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
 */class da{constructor(t,e,n,i,r,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class ha{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ha("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ha&&t.projectId===this.projectId&&t.database===this.database}}class pa{constructor(t,e,n){void 0===e?e=0:e>t.length&&Us(),void 0===n?n=t.length-e:n>t.length-e&&Us(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===pa.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pa?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ma extends pa{construct(t,e,n){return new ma(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ia(qs,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ma(e)}static emptyPath(){return new ma([])}}const ga=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ya extends pa{construct(t,e,n){return new ya(t,e,n)}static isValidIdentifier(t){return ga.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ya.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ya(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new ia(qs,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new ia(qs,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ia(qs,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(o=!o,i++):"."!==e||o?(n+=e,i++):(r(),i++)}if(r(),o)throw new ia(qs,"Unterminated ` in path: "+t);return new ya(e)}static emptyPath(){return new ya([])}}
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
 */class va{constructor(t){this.path=t}static fromPath(t){return new va(ma.fromString(t))}static fromName(t){return new va(ma.fromString(t).popFirst(5))}static empty(){return new va(ma.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ma.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ma.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new va(new ma(t.slice()))}}
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
 */function ba(t,e,n){if(!n)throw new ia(qs,`Function ${t}() cannot be called with an empty ${e}.`)}function wa(t){if(!va.isDocumentKey(t))throw new ia(qs,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xa(t){if(va.isDocumentKey(t))throw new ia(qs,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ka(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Us()}function _a(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ia(qs,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ka(t);throw new ia(qs,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
let Sa=null;
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
function Ea(t){return null==t}function Ia(t){return 0===t&&1/t==-1/0}
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
 */const Na={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */var Ta,Oa;function Ca(t){if(void 0===t)return Ms("RPC_ERROR","HTTP error has no status"),$s;switch(t){case 200:return"ok";case 400:return Ys;case 401:return Js;case 403:return Xs;case 404:return Ks;case 409:return Qs;case 416:return Zs;case 429:return Gs;case 499:return Ws;case 500:return $s;case 501:return ta;case 503:return na;case 504:return Hs;default:return t>=200&&t<300?"ok":t>=400&&t<500?Ys:t>=500&&t<600?ea:$s}}
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
 */(Oa=Ta||(Ta={}))[Oa.OK=0]="OK",Oa[Oa.CANCELLED=1]="CANCELLED",Oa[Oa.UNKNOWN=2]="UNKNOWN",Oa[Oa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oa[Oa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oa[Oa.NOT_FOUND=5]="NOT_FOUND",Oa[Oa.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oa[Oa.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oa[Oa.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oa[Oa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oa[Oa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oa[Oa.ABORTED=10]="ABORTED",Oa[Oa.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oa[Oa.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oa[Oa.INTERNAL=13]="INTERNAL",Oa[Oa.UNAVAILABLE=14]="UNAVAILABLE",Oa[Oa.DATA_LOSS=15]="DATA_LOSS";class Ra extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.m=e+"://"+t.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(t,e,n,i,r){const o=(null===Sa?Sa=268435456+Math.round(2147483648*Math.random()):Sa++,"0x"+Sa.toString(16)),s=this.A(t,e);Bs("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={};return this.I(a,i,r),this.T(t,s,a,n).then((e=>(Bs("RestConnection",`Received RPC '${t}' ${o}: `,e),e)),(e=>{throw js("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e}))}R(t,e,n,i,r,o){return this.v(t,e,n,i,r)}I(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ps,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}A(t,e){const n=Na[t];return`${this.m}/v1/${e}:${n}`}}{constructor(t,e){super(t),this.P=e}V(t,e){throw new Error("Not supported by FetchConnection")}async T(t,e,n,i){var r;const o=JSON.stringify(i);let s;try{s=await this.P(e,{method:"POST",headers:n,body:o})}catch(t){const e=t;throw new ia(Ca(e.status),"Request failed with error: "+e.statusText)}if(!s.ok){let t=await s.json();Array.isArray(t)&&(t=t[0]);const e=null===(r=null==t?void 0:t.error)||void 0===r?void 0:r.message;throw new ia(Ca(s.status),`Request failed with error: ${null!=e?e:s.statusText}`)}return s.json()}}
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
function La(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class Aa{static N(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=La(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Pa(t,e){return t<e?-1:t>e?1:0}function Da(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
 */function Ba(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ma(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
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
 */class ja extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class Fa{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ja("Invalid base64 string: "+t):t}}(t);return new Fa(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Fa(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pa(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fa.EMPTY_BYTE_STRING=new Fa("");const Ua=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function za(t){if(zs(!!t),"string"==typeof t){let e=0;const n=Ua.exec(t);if(zs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Va(t.seconds),nanos:Va(t.nanos)}}function Va(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Wa(t){return"string"==typeof t?Fa.fromBase64String(t):Fa.fromUint8Array(t)}
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
 */class $a{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ia(qs,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ia(qs,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ia(qs,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ia(qs,"Timestamp seconds out of range: "+t)}static now(){return $a.fromMillis(Date.now())}static fromDate(t){return $a.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new $a(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Pa(this.nanoseconds,t.nanoseconds):Pa(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */function qa(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ha(t){const e=t.mapValue.fields.__previous_value__;return qa(e)?Ha(e):e}function Ka(t){const e=za(t.mapValue.fields.__local_write_time__.timestampValue);return new $a(e.seconds,e.nanos)}
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
 */const Xa={fields:{__type__:{stringValue:"__max__"}}};function Ja(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qa(t)?4:"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:Us()}function Ga(t,e){if(t===e)return!0;const n=Ja(t);if(n!==Ja(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ka(t).isEqual(Ka(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=za(t.timestampValue),i=za(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,Wa(t.bytesValue).isEqual(Wa(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Va(t.geoPointValue.latitude)===Va(e.geoPointValue.latitude)&&Va(t.geoPointValue.longitude)===Va(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Va(t.integerValue)===Va(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Va(t.doubleValue),i=Va(e.doubleValue);return n===i?Ia(n)===Ia(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Da(t.arrayValue.values||[],e.arrayValue.values||[],Ga);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Ba(n)!==Ba(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Ga(n[t],i[t])))return!1;return!0}(t,e);default:return Us()}var i}function Ya(t,e){return void 0!==(t.values||[]).find((t=>Ga(t,e)))}function Qa(t,e){if(t===e)return 0;const n=Ja(t),i=Ja(e);if(n!==i)return Pa(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pa(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Va(t.integerValue||t.doubleValue),i=Va(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Za(t.timestampValue,e.timestampValue);case 4:return Za(Ka(t),Ka(e));case 5:return Pa(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Wa(t),i=Wa(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Pa(n[t],i[t]);if(0!==e)return e}return Pa(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Pa(Va(t.latitude),Va(e.latitude));return 0!==n?n:Pa(Va(t.longitude),Va(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Qa(n[t],i[t]);if(e)return e}return Pa(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Xa&&e===Xa)return 0;if(t===Xa)return 1;if(e===Xa)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},o=Object.keys(r);i.sort(),o.sort();for(let t=0;t<i.length&&t<o.length;++t){const e=Pa(i[t],o[t]);if(0!==e)return e;const s=Qa(n[i[t]],r[o[t]]);if(0!==s)return s}return Pa(i.length,o.length)}(t.mapValue,e.mapValue);default:throw Us()}}function Za(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Pa(t,e);const n=za(t),i=za(e),r=Pa(n.seconds,i.seconds);return 0!==r?r:Pa(n.nanos,i.nanos)}function tl(t){return!!t&&"arrayValue"in t}function el(t){return!!t&&"nullValue"in t}function nl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function il(t){return!!t&&"mapValue"in t}function rl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ma(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=rl(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rl(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ol{constructor(t,e){this.position=t,this.inclusive=e}}
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
class sl{}class al extends sl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new cl(t,e,n):"array-contains"===e?new hl(t,n):"in"===e?new pl(t,n):"not-in"===e?new ml(t,n):"array-contains-any"===e?new gl(t,n):new al(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new ul(t,n):new fl(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Qa(e,this.value)):null!==e&&Ja(this.value)===Ja(e)&&this.matchesComparison(Qa(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Us()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ll extends sl{constructor(t,e){super(),this.filters=t,this.op=e,this.F=null}static create(t,e){return new ll(t,e)}matches(t){return"and"===this.op?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.F||(this.F=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.F}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.S((t=>t.isInequality()));return null!==t?t.field:null}S(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}class cl extends al{constructor(t,e,n){super(t,e,n),this.key=va.fromName(n.referenceValue)}matches(t){const e=va.comparator(t.key,this.key);return this.matchesComparison(e)}}class ul extends al{constructor(t,e){super(t,"in",e),this.keys=dl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fl extends al{constructor(t,e){super(t,"not-in",e),this.keys=dl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function dl(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>va.fromName(t.referenceValue)))}class hl extends al{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return tl(e)&&Ya(e.arrayValue,this.value)}}class pl extends al{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ya(this.value.arrayValue,e)}}class ml extends al{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ya(this.value.arrayValue,e)}}class gl extends al{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!tl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ya(this.value.arrayValue,t)))}}
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
 */class yl{constructor(t,e="asc"){this.field=t,this.dir=e}}
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
class vl{constructor(t){this.timestamp=t}static fromTimestamp(t){return new vl(t)}static min(){return new vl(new $a(0,0))}static max(){return new vl(new $a(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class bl{constructor(t,e){this.comparator=t,this.root=e||xl.EMPTY}insert(t,e){return new bl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xl.BLACK,null,null))}remove(t){return new bl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wl(this.root,t,this.comparator,!1)}getReverseIterator(){return new wl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wl(this.root,t,this.comparator,!0)}}class wl{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xl{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:xl.RED,this.left=null!=i?i:xl.EMPTY,this.right=null!=r?r:xl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new xl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return xl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Us();if(this.right.isRed())throw Us();const t=this.left.check();if(t!==this.right.check())throw Us();return t+(this.isRed()?0:1)}}xl.EMPTY=null,xl.RED=!0,xl.BLACK=!1,xl.EMPTY=new class{constructor(){this.size=0}get key(){throw Us()}get value(){throw Us()}get color(){throw Us()}get left(){throw Us()}get right(){throw Us()}copy(t,e,n,i,r){return this}insert(t,e,n){return new xl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class kl{constructor(t){this.comparator=t,this.data=new bl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _l(this.data.getIterator())}getIteratorFrom(t){return new _l(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof kl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new kl(this.comparator);return e.data=t,e}}class _l{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class Sl{constructor(t){this.fields=t,t.sort(ya.comparator)}static empty(){return new Sl([])}unionWith(t){let e=new kl(ya.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Sl(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Da(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class El{constructor(t){this.value=t}static empty(){return new El({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!il(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rl(e)}setAll(t){let e=ya.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=rl(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());il(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ga(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Ma(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new El(rl(this.value))}}
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
 */class Il{constructor(t,e,n,i,r,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=o,this.documentState=s}static newInvalidDocument(t){return new Il(t,0,vl.min(),vl.min(),vl.min(),El.empty(),0)}static newFoundDocument(t,e,n,i){return new Il(t,1,e,vl.min(),n,i,0)}static newNoDocument(t,e){return new Il(t,2,e,vl.min(),vl.min(),El.empty(),0)}static newUnknownDocument(t,e){return new Il(t,3,e,vl.min(),vl.min(),El.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(vl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=El.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=El.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=vl.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Il&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Il(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Nl{constructor(t,e=null,n=[],i=[],r=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=o,this.endAt=s,this.q=null}}function Tl(t,e=null,n=[],i=[],r=null,o=null,s=null){return new Nl(t,e,n,i,r,o,s)}
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
 */class Ol{constructor(t,e=null,n=[],i=[],r=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=o,this.startAt=s,this.endAt=a,this.O=null,this.k=null,this.startAt,this.endAt}}function Cl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rl(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Ll(t){const e=Vs(t);if(null===e.O){e.O=[];const t=Rl(e),n=Cl(e);if(null!==t&&null===n)t.isKeyField()||e.O.push(new yl(t)),e.O.push(new yl(ya.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.O.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.O.push(new yl(ya.keyField(),t))}}}return e.O}function Al(t){const e=Vs(t);if(!e.k)if("F"===e.limitType)e.k=Tl(e.path,e.collectionGroup,Ll(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ll(e)){const e="desc"===n.dir?"asc":"desc";t.push(new yl(n.field,e))}const n=e.endAt?new ol(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ol(e.startAt.position,e.startAt.inclusive):null;e.k=Tl(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.k}
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
function Pl(t,e){return"number"==typeof(n=e)&&Number.isInteger(n)&&!Ia(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(t){return{integerValue:""+t}}(e):function(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ia(e)?"-0":e}}(t,e);var n}
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
 */class Dl{constructor(){this._=void 0}}class Bl extends Dl{}class Ml extends Dl{constructor(t){super(),this.elements=t}}class jl extends Dl{constructor(t){super(),this.elements=t}}class Fl extends Dl{constructor(t,e){super(),this.serializer=t,this.C=e}}
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
 */class Ul{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ul}static exists(t){return new Ul(void 0,t)}static updateTime(t){return new Ul(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class zl{}class Vl extends zl{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wl extends zl{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}class $l extends zl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ql extends zl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */const Hl={asc:"ASCENDING",desc:"DESCENDING"},Kl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xl={and:"AND",or:"OR"};class Jl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yl(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ql(t,e){return Gl(t,e.toTimestamp())}function Zl(t){return zs(!!t),vl.fromTimestamp(function(t){const e=za(t);return new $a(e.seconds,e.nanos)}(t))}function tc(t,e){return(n=t,new ma(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function ec(t,e){return tc(t.databaseId,e.path)}function nc(t,e){const n=function(t){const e=ma.fromString(t);return zs(dc(e)),e}(e);if(n.get(1)!==t.databaseId.projectId)throw new ia(qs,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ia(qs,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);var i;return new va((zs((i=n).length>4&&"documents"===i.get(4)),i.popFirst(5)))}function ic(t,e){return tc(t.databaseId,e)}function rc(t){return new ma(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oc(t,e,n){return{name:ec(t,e),fields:n.value.mapValue.fields}}function sc(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=ic(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ic(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return uc(ll.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(t){if(0!==t.length)return t.map((t=>{return{field:cc((e=t).field),direction:ac(e.dir)};var e}))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=(a=t,l=e.limit,a.useProto3Json||Ea(l)?l:{value:l});var a,l,c;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ac(t){return Hl[t]}function lc(t){return Kl[t]}function cc(t){return{fieldPath:t.canonicalString()}}function uc(t){return t instanceof al?function(t){if("=="===t.op){if(nl(t.value))return{unaryFilter:{field:cc(t.field),op:"IS_NAN"}};if(el(t.value))return{unaryFilter:{field:cc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(nl(t.value))return{unaryFilter:{field:cc(t.field),op:"IS_NOT_NAN"}};if(el(t.value))return{unaryFilter:{field:cc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cc(t.field),op:lc(t.op),value:t.value}}}(t):t instanceof ll?function(t){const e=t.getFilters().map((t=>uc(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,Xl[n]),filters:e}};var n}(t):Us()}function fc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function dc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function hc(t){return new Jl(t,!0)}
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
class pc extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.J=!1}X(){if(this.J)throw new ia(Ys,"The client has already been terminated.")}v(t,e,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.v(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Js&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ia($s,t.toString())}))}R(t,e,n,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.R(t,e,n,r,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Js&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ia($s,t.toString())}))}terminate(){this.J=!0}}async function mc(t,e){const n=Vs(t),i=rc(n.serializer)+"/documents",r={writes:e.map((t=>function(t,e){let n;if(e instanceof Vl)n={update:oc(t,e.key,e.value)};else if(e instanceof $l)n={delete:ec(t,e.key)};else if(e instanceof Wl)n={update:oc(t,e.key,e.data),updateMask:fc(e.fieldMask)};else{if(!(e instanceof ql))return Us();n={verify:ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Bl)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ml)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof jl)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Fl)return{fieldPath:e.field.canonicalString(),increment:n.C};throw Us()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(r=e.precondition).updateTime?{updateTime:Ql(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Us())),n;var i,r}(n.serializer,t)))};await n.v("Commit",i,r)}
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
const gc=new Map;function yc(t){if(t._terminated)throw new ia(Ys,"The client has already been terminated.");if(!gc.has(t)){Bs("ComponentProvider","Initializing Datastore");const s=(n=t._databaseId,i=t.app.options.appId||"",r=t._persistenceKey,o=t._freezeSettings(),e=new da(n,i,r,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams),new Ra(e,fetch.bind(null))),a=hc(t._databaseId),l=function(t,e,n,i){return new pc(t,e,n,i)}(t._authCredentials,t._appCheckCredentials,s,a);gc.set(t,l)}var e,n,i,r,o;
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
return gc.get(t)}class vc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ia(qs,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ia(qs,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new ia(qs,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class bc{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ia(Ys,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ia(Ys,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new oa;switch(t.type){case"firstParty":return new ca(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ia(qs,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=gc.get(t);e&&(Bs("ComponentProvider","Removing Datastore"),gc.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class wc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wc(this.firestore,t,this._key)}}class xc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new xc(this.firestore,t,this._query)}}class kc extends xc{constructor(t,e,n){super(t,e,new Ol(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wc(this.firestore,null,new va(t))}withConverter(t){return new kc(this.firestore,t,this._path)}}function _c(t,e,...n){if(t=Oo(t),ba("collection","path",e),t instanceof bc){const i=ma.fromString(e,...n);return xa(i),new kc(t,null,i)}{if(!(t instanceof wc||t instanceof kc))throw new ia(qs,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ma.fromString(e,...n));return xa(i),new kc(t.firestore,null,i)}}function Sc(t,e,...n){if(t=Oo(t),1===arguments.length&&(e=Aa.N()),ba("doc","path",e),t instanceof bc){const i=ma.fromString(e,...n);return wa(i),new wc(t,null,new va(i))}{if(!(t instanceof wc||t instanceof kc))throw new ia(qs,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ma.fromString(e,...n));return wa(i),new wc(t.firestore,t instanceof kc?t.converter:null,new va(i))}}
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
class Ec{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ec(Fa.fromBase64String(t))}catch(t){throw new ia(qs,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ec(Fa.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Ic{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ia(qs,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ya(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Nc{constructor(t){this._methodName=t}}
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
 */class Tc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ia(qs,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ia(qs,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Pa(this._lat,t._lat)||Pa(this._long,t._long)}}
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
 */const Oc=/^__.*__$/;class Cc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Wl(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vl(t,this.data,e,this.fieldTransforms)}}function Rc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Us()}}class Lc{constructor(t,e,n,i,r,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.tt(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(t){return new Lc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.nt({path:n,st:!1});return i.it(t),i}ot(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.nt({path:n,st:!1});return i.tt(),i}ut(t){return this.nt({path:void 0,st:!0})}ct(t){return Wc(t,this.settings.methodName,this.settings.at||!1,this.path,this.settings.ht)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}tt(){if(this.path)for(let t=0;t<this.path.length;t++)this.it(this.path.get(t))}it(t){if(0===t.length)throw this.ct("Document fields must not be empty");if(Rc(this.et)&&Oc.test(t))throw this.ct('Document fields cannot begin and end with "__"')}}class Ac{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||hc(t)}lt(t,e,n,i=!1){return new Lc({et:t,methodName:e,ht:n,path:ya.emptyPath(),st:!1,at:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pc(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new Ac(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dc(t,e,n,i,r,o={}){const s=t.lt(o.merge||o.mergeFields?2:0,e,n,r);Fc("Data must be an object, but it was:",s,i);const a=Mc(i,s);let l,c;if(o.merge)l=new Sl(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const i of o.mergeFields){const r=Uc(e,i,n);if(!s.contains(r))throw new ia(qs,`Field '${r}' is specified in your field mask but missing from your input data.`);$c(t,r)||t.push(r)}l=new Sl(t),c=s.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=s.fieldTransforms;return new Cc(new El(a),l,c)}function Bc(t,e){if(jc(t=Oo(t)))return Fc("Unsupported field value:",e,t),Mc(t,e);if(t instanceof Nc)return function(t,e){if(!Rc(e.et))throw e.ct(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ct(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&4!==e.et)throw e.ct("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Bc(r,e.ut(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Oo(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Pl(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=$a.fromDate(t);return{timestampValue:Gl(e.serializer,n)}}if(t instanceof $a){const n=new $a(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Gl(e.serializer,n)}}if(t instanceof Tc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ec)return{bytesValue:Yl(e.serializer,t._byteString)};if(t instanceof wc){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:tc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ct(`Unsupported field value: ${ka(t)}`)}(t,e)}function Mc(t,e){const n={};return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ma(t,((t,i)=>{const r=Bc(i,e.rt(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function jc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof $a||t instanceof Tc||t instanceof Ec||t instanceof wc||t instanceof Nc)}function Fc(t,e,n){if(!jc(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=ka(n);throw"an object"===i?e.ct(t+" a custom object"):e.ct(t+" "+i)}var i}function Uc(t,e,n){if((e=Oo(e))instanceof Ic)return e._internalPath;if("string"==typeof e)return Vc(t,e);throw Wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const zc=new RegExp("[~\\*/\\[\\]]");function Vc(t,e,n){if(e.search(zc)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ic(...e.split("."))._internalPath}catch(i){throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wc(t,e,n,i,r){const o=i&&!i.isEmpty(),s=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${i}`),s&&(l+=` in document ${r}`),l+=")"),new ia(qs,a+t+l)}function $c(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class qc{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new wc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Hc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Xc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Hc extends qc{data(){return super.data()}}class Kc{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(t,e){this._docs.forEach(t,e)}}function Xc(t,e){return"string"==typeof e?Vc(t,e):e instanceof Ic?e._internalPath:e._delegate._internalPath}
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
function Jc(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Gc extends class{convertValue(t,e="none"){switch(Ja(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Va(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Wa(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Us()}}convertObject(t,e){const n={};return Ma(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Tc(Va(t.latitude),Va(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ha(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ka(t));default:return null}}convertTimestamp(t){const e=za(t);return new $a(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ma.fromString(t);zs(dc(n));const i=new ha(n.get(1),n.get(3)),r=new va(n.popFirst(5));return i.isEqual(e)||Ms(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ec(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wc(this.firestore,null,e)}}function Yc(t){!function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ia(ta,"limitToLast() queries require specifying at least one orderBy() clause")}((t=_a(t,xc))._query);const e=yc(t.firestore),n=new Gc(t.firestore);return async function(t,e){const n=Vs(t),i=sc(n.serializer,Al(e));return(await n.R("RunQuery",i.parent,{structuredQuery:i.structuredQuery})).filter((t=>!!t.document)).map((t=>function(t,e,n){const i=nc(t,e.name),r=Zl(e.updateTime),o=e.createTime?Zl(e.createTime):vl.min(),s=new El({mapValue:{fields:e.fields}});return Il.newFoundDocument(i,r,o,s)}(n.serializer,t.document)))}(e,t._query).then((e=>{const i=e.map((e=>new Hc(t.firestore,n,e.key,e,t.converter)));return"L"===t._query.limitType&&i.reverse(),new Kc(t,i)}))}function Qc(t,e,n){const i=Jc((t=_a(t,wc)).converter,e,n),r=Dc(Pc(t.firestore),"setDoc",t._key,i,null!==t.converter,n);return mc(yc(t.firestore),[r.toMutation(t._key,Ul.none())])}function Zc(t){return mc(yc((t=_a(t,wc)).firestore),[new $l(t._key,Ul.none())])}Ps="9.19.1_lite",ps(new Co("firestore/lite",((t,{instanceIdentifier:e,options:n})=>{const i=t.getProvider("app").getImmediate(),r=new bc(new aa(t.getProvider("auth-internal")),new fa(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ia(qs,'"projectId" not provided in firebase.initializeApp.');return new ha(t.options.projectId,e)}(i,e),i);return n&&r._setSettings(n),r}),"PUBLIC").setMultipleInstances(!0)),xs("firestore-lite","3.10.0",""),xs("firestore-lite","3.10.0","esm2017");const tu=function(t,e){const n="string"==typeof t?t:e||"(default)",i=ms("object"==typeof t?t:ws(),"firestore/lite").getImmediate({identifier:n});if(!i._initialized){const t=lo("firestore");t&&function(t,e,n,i={}){var r;const o=(t=_a(t,bc))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&js("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=As.MOCK_USER;else{e=fo(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new ia(qs,"mockUserToken must contain 'sub' or 'user_id' field!");n=new As(o)}t._authCredentials=new sa(new ra(e,n))}}(i,...t)}return i}(Ls);async function eu(t,e){const n=localStorage.getItem("fireBaseAuthorized");try{if(!e)return;await Qc(Sc(tu,`${n}_${t}`,e.id),e)}catch(t){console.error("Error adding document: ",t)}}async function nu(t,e){const n=localStorage.getItem("fireBaseAuthorized");try{if(!e)return;await Zc(Sc(tu,`${n}_${t}`,e.id))}catch(t){console.error("Error deleting document: ",t)}}async function iu(t){const e=localStorage.getItem("fireBaseAuthorized"),n=await Yc(_c(tu,`${e}_${t}`)),i=[];return n.docs.length>0&&n.forEach((t=>i.push(t.data()))),i}const ru="Add to watched",ou="Remove from watched",su="Add to queue",au="Remove from queue",lu="Додати до перегляду",cu="Вилучити з перегляду",uu="Add Додати до черги",fu="Вилучити з черги",du=document.querySelector(".backdrop-container");function hu(t,e){const{genres:n,id:i,poster_path:r,original_title:o,overview:s,popularity:a,vote_average:l,vote_count:c,videoId:u}=t;let f="";if(u){const t=new Ar;f=t.createIframe(u),du.innerHTML=`\n      <div class="modal" data-modal="2">\n        <button type="button" class="btn-close js-close-modal" id="btn-close">\n            <svg class="form__close-icon" width="24px" height="24px" viewBox="0 0 30 30">\n              <path data-btn="close" d="M14.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>\n            </svg>\n        </button>\n        <div id="modal_form">\n            <div class="form">\n                <div class="form__film-card">\n                    <div class="form__film-img">\n                        <img class="form-img" src="${r}"\n                            alt="${o}">\n                    </div>\n                </div>\n                <div class="form__info">\n                    <h2 class="form__title">${o}</h2>\n                    <ul class="form__info-list">\n                        <li class="form__info-item">\n                            <p class="form__info-name" data-translate>Vote / Votes</p>\n                            <p class="form__info-details"> <span class="film__rating">${l}</span>/<span class="film__voice">${c}</span></p>\n                        </li>\n                        <li class="form__info-item">\n                            <p class="form__info-name" data-translate>Popularity</p>\n                            <p class="form__info-details">${a}</p>\n                        </li>\n                        <li class="form__info-item">\n                            <p class="form__info-name" data-translate>Original Title</p>\n                            <p class="form__info-details details-title">${o}</p>\n                        </li>\n                        <li class="form__info-item">\n                            <p class="form__info-name" data-translate>Genre</p>\n                            <p class="form__info-details">${n}</p>\n                        </li>\n                    </ul>\n                    <div class="form__about">\n                        <h3 class="form__about-name" data-translate>About</h3>\n                        <p class="form__about-details">${s}</p>\n                    </div>\n                    <div class="form__btn-list">\n                        <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to watched</button>\n                        <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to queue</button>\n                    </div>\n                </div>\n            </div>\n            <div class="form__film-card">\n                <div class="form__film-img">\n                    ${f.outerHTML}\n                </div>\n              </div>\n        </div>\n    </div>\n`}else du.innerHTML=`\n    <div class="modal" data-modal="2">\n        <button type="button" class="btn-close js-close-modal" id="btn-close">\n            <svg class="form__close-icon" width="24px" height="24px" viewBox="0 0 30 30">\n              <path data-btn="close" d="M14.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>\n            </svg> \n        </button>\n        <div id="modal_form">\n          <div class="form">\n              <div class="form__film-card">\n                  <div class="form__film-img">\n                      <img class="form-img" src="${r}"\n                          alt="${o}">\n                  </div>\n              </div>\n              <div class="form__info">\n                  <h2 class="form__title">${o}</h2>\n                  <ul class="form__info-list">\n                      <li class="form__info-item">\n                          <p class="form__info-name" data-translate>Vote / Votes</p>\n                          <p class="form__info-details"> <span class="film__rating">${l}</span>/<span class="film__voice">${c}</span></p>\n                      </li>\n                      <li class="form__info-item">\n                          <p class="form__info-name" data-translate>Popularity</p>\n                          <p class="form__info-details">${a}</p>\n                      </li>\n                      <li class="form__info-item">\n                          <p class="form__info-name" data-translate>Original Title</p>\n                          <p class="form__info-details details-title">${o}</p>\n                      </li>\n                      <li class="form__info-item">\n                          <p class="form__info-name" data-translate>Genre</p>\n                          <p class="form__info-details">${n}</p>\n                      </li>\n                  </ul>\n                  <div class="form__about">\n                      <h3 class="form__about-name" data-translate>About</h3>\n                      <p class="form__about-details">${s}</p>\n                  </div>\n                  <div class="form__btn-list">\n                      <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to watched</button>\n                      <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to queue</button>\n                  </div>\n              </div>\n          </div>\n        </div>\n    </div>\n`;if("uk"===lr.language){du.querySelectorAll("[data-translate]").forEach((t=>t.innerHTML=lr.t(t.textContent)))}var d;function h(t){switch(t.textContent){case ru:t.textContent=ou;break;case ou:t.textContent=ru;break;case su:t.textContent=au;break;case au:t.textContent=su;break;case lu:t.textContent=cu;break;case cu:t.textContent=lu;break;case uu:t.textContent=fu;break;case fu:t.textContent=uu}}if(Rr((d=du).querySelectorAll(".js-open-modal"),d.querySelectorAll(".js-overlay-modal"),d.querySelectorAll(".js-close-modal")),async function(t){const e=document.getElementById("watched"),n=document.getElementById("queue"),i=document.querySelector(".active-btn"),r=document.querySelector(".watched-btn"),o=document.querySelector(".queue-btn");let s;s=localStorage.getItem("fireBaseAuthorized")?await iu(Dr):Br(Dr);s.find((e=>e.id===t.id))?e.textContent=p(ou):e.textContent=p(ru);s=localStorage.getItem("fireBaseAuthorized")?await iu(Pr):Br(Pr);s.find((e=>e.id===t.id))?n.textContent=p(au):n.textContent=p(su);e.addEventListener("click",(()=>{e.textContent===ou||e.textContent===cu?(localStorage.getItem("fireBaseAuthorized")?nu(Dr,t):jr(Dr,t),h(e)):e.textContent!==ru&&e.textContent!==lu||(localStorage.getItem("fireBaseAuthorized")?eu(Dr,t):Mr(Dr,t),h(e)),i.classList.contains("my-library-btn")&&(Kh(),r.classList.add("active-library-btn"),o.classList.remove("active-library-btn"))})),n.addEventListener("click",(()=>{n.textContent===au||n.textContent===fu?(localStorage.getItem("fireBaseAuthorized")?nu(Pr,t):jr(Pr,t),h(n)):n.textContent!==su&&n.textContent!==uu||(localStorage.getItem("fireBaseAuthorized")?eu(Pr,t):Mr(Pr,t),h(n)),i.classList.contains("my-library-btn")&&(Xh(),r.classList.remove("active-library-btn"),o.classList.add("active-library-btn"))}))}(e),u){document.getElementById("btn-close").addEventListener("click",(function(){const t=du.innerHTML;t.replace(f.outerHTML,""),du.innerHTML=t}))}function p(t){if("uk"===lr.language)switch(t){case ru:return lu;case ou:return cu;case su:return uu;case au:return fu}}}var pu={};!function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof pu?pu=e(t):t.Notiflix=e(t)}(void 0===t?"undefined"==typeof window?pu:window:t,(function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",f="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},h="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",_="Hourglass",S="Circle",E="Arrows",I="Dots",N="Pulse",T="Custom",O="Notiflix",C={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",A="Circle",P="Arrows",D="Dots",B="Pulse",M={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},j=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+s)},F=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+s)},U=function(e){return e||(e="head"),null!==t.document[e]||(j('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},z=function(e,n){if(!U("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},V=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?V(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},W=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},H=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},J=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},G=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,i,r,o){if(!U("body"))return!1;e||lt.Notify.init({});var s=V(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var h={};"object"==typeof r?h=r:"object"==typeof o&&(h=o),e=V(!0,e,h)}var p=e[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=W(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=V(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+Y,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===f&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,_,S=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},E=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(_)};if(e.closeButton&&"function"!=typeof r)t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){S();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)}));if(("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),S();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var I=function(){k=setTimeout((function(){S()}),e.timeout),_=setTimeout((function(){E()}),e.timeout+e.cssAnimationDuration)};I(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(_)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),I()})))}}if(e.showOnlyTheLastOne&&0<Y)for(var N,T=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+Y+"])"),O=0;O<T.length;O++)null!==(N=T[O]).parentNode&&N.parentNode.removeChild(N);e=V(!0,e,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,o,s,l){if(!U("body"))return!1;n||lt.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=V(!0,n,{}),n=V(!0,n,u)}var f=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===h?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=W(i),r=W(r),o=W(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(f.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w="";if(e===h?w=function(t,e){return t||(t="110px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):e===p?w=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):e===m?w=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):e===g&&(w=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+w+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+f.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+f.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+f.buttonBackground+"; color:"+f.buttonColor+';">'+o+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var x=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};if(t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),x()})),v&&b)t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){x()}))}n=V(!0,n,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,o,s,l,c,u,f){if(!U("body"))return!1;i||lt.Confirm.init({});var d=V(!0,i,{});"object"!=typeof f||Array.isArray(f)||(i=V(!0,i,f)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=W(n),r=W(r),s=W(s),l=W(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var h=t.document.createElement("div");h.id=x.ID,h.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),h.style.zIndex=i.zindex,h.style.padding=i.distance,i.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";h.classList.add("nx-position-"+p),h.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=o||"";var _=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+_+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(h.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!t.document.getElementById(h.id)){t.document.body.appendChild(h);var S=t.document.getElementById(h.id),E=t.document.getElementById("NXConfirmButtonOk"),I=t.document.getElementById("NXConfirmValidationInput");if(I&&(I.focus(),I.setSelectionRange(0,(I.value||"").length),I.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),I.classList.add("nx-validation-failure"),I.classList.remove("nx-validation-success")):(e===b&&(I.classList.remove("nx-validation-failure"),I.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&E.dispatchEvent(new Event("click")))}))),E.addEventListener("click",(function(t){if(e===b&&v&&I){if((I.value||"").toString()!==v)return I.focus(),I.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;I.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===w&&I&&(k=I.value||""),c(k)),S.classList.add("nx-remove");var n=setTimeout((function(){null!==S.parentNode&&(S.parentNode.removeChild(S),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c)t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&I&&(k=I.value||""),u(k)),S.classList.add("nx-remove");var t=setTimeout((function(){null!==S.parentNode&&(S.parentNode.removeChild(S),clearTimeout(t))}),i.cssAnimationDuration)}))}i=V(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,o,s){if(!U("body"))return!1;r||lt.Loading.init({});var l=V(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=V(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var f="";0<(u=u.length>r.messageMaxLength?W(u).toString().substring(0,r.messageMaxLength)+"...":W(u).toString()).length&&(f='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=$(r.svgSize,r.svgColor);else if(e===_)d=q(r.svgSize,r.svgColor);else if(e===S)d=H(r.svgSize,r.svgColor);else if(e===E)d=K(r.svgSize,r.svgColor);else if(e===I)d=X(r.svgSize,r.svgColor);else if(e===N)d=J(r.svgSize,r.svgColor);else if(e===T&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===T&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===T&&(null===r.customSvgUrl||null===r.customSvgCode))return j('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var h=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=h>=p?p-40+"px":h+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");if(y.id=C.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+f,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose))t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(C.ID))var v=t.document.getElementById(C.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(b)}),s);r=V(!0,r,l)},ot=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},st=0,at=function(e,n,i,r,s,l){var c;if(Array.isArray(i)){if(1>i.length)return j("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return j("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return j("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return j('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||lt.Block.init({});var f=V(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof r?d=r:"object"==typeof s&&(d=s),o=V(!0,o,d)}var h="";"string"==typeof r&&0<r.length&&(h=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=M.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=c[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+M.ID+"]");if(1>x.length){var k="";n&&(k=n===L?q(o.svgSize,o.svgColor):n===A?H(o.svgSize,o.svgColor):n===P?K(o.svgSize,o.svgColor):n===D?X(o.svgSize,o.svgColor):n===B?J(o.svgSize,o.svgColor):$(o.svgSize,o.svgColor));var _='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",S="";0<h.length&&(h=h.length>o.messageMaxLength?W(h).substring(0,o.messageMaxLength)+"...":W(h),S='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+h+"</span>"),st++;var E=t.document.createElement("div");E.id=M.ID+"-"+st,E.className=p+(o.cssAnimation?" nx-with-animation":""),E.style.position=o.position,E.style.zIndex=o.zindex,E.style.background=o.backgroundColor,E.style.animationDuration=o.cssAnimationDuration+"ms",E.style.fontFamily='"'+o.fontFamily+'", '+a,E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center",o.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.innerHTML=_+S;var I=t.getComputedStyle(v).getPropertyValue("position"),N="string"==typeof I?I.toLocaleLowerCase("en"):"relative",T=Math.round(1.25*parseInt(o.svgSize))+40,O="";T>(v.offsetHeight||0)&&(O="min-height:"+T+"px;");var C;C=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",z=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(z||0<O.length){if(!U("head"))return!1;z&&(R="position:relative!important;");var G='<style id="Style-'+M.ID+"-"+st+'">'+C+"."+y+"{"+R+O+"}</style>",Y=t.document.createRange();Y.selectNode(t.document.head);var Q=Y.createContextualFragment(G);t.document.head.appendChild(Q),v.classList.add(y)}v.appendChild(E)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else F("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),o.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),x=t.querySelectorAll("[id^="+M.ID+"]"),tt(x));clearTimeout(nt)}),l);o=V(!0,o,f)},lt={Notify:{init:function(t){e=V(!0,d,t),z(G,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=V(!0,e,t)):(j("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Q(l,t,e,n)},failure:function(t,e,n){Q(c,t,e,n)},warning:function(t,e,n){Q(u,t,e,n)},info:function(t,e,n){Q(f,t,e,n)}},Report:{init:function(t){n=V(!0,y,t),z(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=V(!0,n,t)):(j("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(h,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=V(!0,x,t),z(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=V(!0,i,t)):(j("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,o,s){nt(v,t,e,null,n,i,r,o,s)},ask:function(t,e,n,i,r,o,s,a){nt(b,t,e,n,i,r,o,s,a)},prompt:function(t,e,n,i,r,o,s,a){nt(w,t,e,n,i,r,o,s,a)}},Loading:{init:function(t){r=V(!0,C,t),z(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=V(!0,r,t)):(j("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(_,t,e,!0,0)},circle:function(t,e){rt(S,t,e,!0,0)},arrows:function(t,e){rt(E,t,e,!0,0)},dots:function(t,e){rt(I,t,e,!0,0)},pulse:function(t,e){rt(N,t,e,!0,0)},custom:function(t,e){rt(T,t,e,!0,0)},notiflix:function(t,e){rt(O,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(C.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?W(e).substring(0,r.messageMaxLength)+"...":W(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var o=t.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=e,n.appendChild(o)}}else j("Where is the new message?")}(e)}},Block:{init:function(t){o=V(!0,M,t),z(ot,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=V(!0,o,t)):(j('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,R,t,e,n)},hourglass:function(t,e,n){at(!0,L,t,e,n)},circle:function(t,e,n){at(!0,A,t,e,n)},arrows:function(t,e,n){at(!0,P,t,e,n)},dots:function(t,e,n){at(!0,D,t,e,n)},pulse:function(t,e,n){at(!0,B,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?V(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}}));const mu={fontSize:"16px"};function gu(t){e(pu).Notify.success(t,mu)}function yu(t){e(pu).Notify.failure(t,mu)}function vu(t){const e=document.querySelector(".mask");"start"===t?e.classList.remove("is-hidden"):"stop"===t&&setTimeout((()=>{e.classList.add("is-hidden")}),250)}const bu=document.querySelector(".list");function wu(t,e=!0){const n=(t=e?t.results:t).map((t=>`<li class="film-card">\n      <a class="film-link js-open-modal" href="${t.poster_path}" data-id="${t.id}" data-modal="2">\n        <div class="film-img"><img src="${t.poster_path}" alt="${t.title}" loading="lazy" /></div>\n        <div class="film-meta">\n          <span class="film-name">${t.title}</span>\n          <div class="film-info">\n            <span class="film-ganre">${t.genres}</span>\n            <span class="film-year">${t.year}</span>\n          </div>\n        </div>\n      </a>\n      </li>`)).join("");n?(e||!e&&0===bu.children.length?bu.innerHTML=n:!e&&bu.children.length>0&&bu.insertAdjacentHTML("beforeend",n),Rr(document.querySelectorAll(".js-open-modal"),document.querySelectorAll(".js-overlay-modal"),document.querySelectorAll(".js-close-modal"))):bu.innerHTML=""}bu.addEventListener("click",(async t=>{t.preventDefault();const n=t.target.closest(".film-link");if(!n)return;const i=n.dataset.id,r=function(t){const e=t.href,n=t.dataset.id,i=t.querySelector(".film-name").textContent,r=t.querySelector(".film-ganre").textContent,o=t.querySelector(".film-year").textContent;return{poster_path:e,id:n,title:i,genres:r,year:o}}(n),o=document.querySelector(".backdrop-container");vu("start");try{hu(await mr(i),r),o.style.display="block"}catch(t){o.style.display="none",e(pu).Notify.failure("uk"===lr.language?"Результат пошуку по цьому фільму був невдалим":"Search result about this film is not successful",mu)}vu("stop")}));var xu,ku={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */let _u;window,xu=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,r,o,s=Object.prototype.hasOwnProperty;for(r=1,o=arguments.length;r<o;r+=1)for(i in n=arguments[r])s.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),r=n(17),o=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var r,o;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,r=n;n>=0&&r<o;r+=1)if(e[r]===t)return r;return-1}},function(t,e,n){"use strict";var i=n(29),r=n(30),o=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=o(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),r=n(7),o=n(0),s=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=r({init:function(t,e){this._options=o({},c,e),this._currentPage=0,this._view=new a(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,r=this._getLastPage(),o=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(o/2),(n=(e=Math.max(t-i,1))+o-1)>r&&(e=Math.max(r-o+1,1),n=r)):(e=(s-1)*o+1,n=s*o,n=Math.min(n,r)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){"use strict";var i=n(0),r=n(14),o=n(4),s=n(16),a=n(2),l=n(5),c=n(3),u=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){i(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var i=this;o(t)?(t=t.split(u),c(t,(function(t){i._bindEvent(t,e,n)}))):s(t)&&(n=e,c(t,(function(t,e){i.on(e,t,n)})))},f.prototype.once=function(t,e,n){var i=this;if(s(t))return n=e,void c(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function r(){e.apply(n,arguments),i.off(t,r,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},f.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,o=e===i.context,s=r&&o;return s&&n._forgetContext(i.context),s}},f.prototype._offByEventName=function(t,e){var n=this,i=l(e),r=n._matchHandler(e);t=t.split(u),c(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?c(t,(function(t,e){i.off(e,t)})):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},f.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){"use strict";var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),r=n(7),o=n(21),s=n(22),a=n(24),l=n(25),c=n(0),u=n(4),f=n(28),d=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(p,(function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(p,(function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(m,(function(t){var e=t+"More";this._buttons[e]=d.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||l(e,this._firstItemClassName),n!==r||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,i,r=o(e);a(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!d.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),r=n(3),o=n(23);function s(t,e,n,i){function s(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,i){var s=o(t,e),a=!1;r(s,(function(t){return t.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:i})}(t,e,n,s)}t.exports=function(t,e,n,o){i(e)?r(e.split(/\s+/g),(function(e){s(t,e,n,o)})):r(e,(function(e,i){s(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),r=n(8),o=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,l=[];a?i(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){r(t,l)<0&&l.push(t)})),s(t,l))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),r=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),r=n(3),o=n(2),s=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,h=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],o=0,s=0;return r(e,(function(t,r){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(s,r)),s=r+1)})),i.push(e.slice(s)),{exps:n,sourcesInsideIf:i}}(t,e),o=!1,s="";return r(i.exps,(function(t,e){return(o=w(t,n))&&(s=x(i.sourcesInsideIf[e],n)),!o})),s},each:function(t,e,n){var i=w(t,n),s=o(i)?"@index":"@key",l={},c="";return r(i,(function(t,i){l[s]=i,l["@this"]=t,a(n,l),c+=x(e.slice(),n)})),c},with:function(t,e,n){var r=i("as",t),o=t[r+1],s=w(t.slice(0,r),n),l={};return l[o]=s,x(e,a(n,l))||""}},y=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return r.push(t.slice(o)),r};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(p,""):c.test(t)?i=v((n=t.split(u))[0],e)[v(n[1],e)]:f.test(t)?i=v((n=t.split(d))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function b(t,e,n){for(var i,r,o,a,l=g[t],c=1,u=2,f=e[u];c&&s(f);)0===f.indexOf(t)?c+=1:0===f.indexOf("/"+t)&&(c-=1,i=u),f=e[u+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(r=0,o=i,(a=e.splice(r+1,o-r)).pop(),a),n),e}function w(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return r(e,(function(t){i.push(v(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,r,o=1,a=t[o];s(a);)i=(n=a.split(" "))[0],g[i]?(r=b(i,t.splice(o,t.length-o),e),t=t.concat(r)):t[o]=w(n,e),a=t[o+=2];return t.join("")}t.exports=function(t,e){return x(y(t,l),e)}},function(t,e,n){"use strict";var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,(function(t,e){r+="&"+e+"="+t})),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},ku=xu();const Su=document.querySelector(".list"),Eu=document.querySelector(".pagination");function Iu(t,n){_u=new(e(ku))(Eu,{totalItems:t,itemsPerPage:1,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}" aria-label="next-page"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}),document.querySelector(".tui-ico-last").textContent=t,document.querySelector(".tui-first").classList.add("hidden"),document.querySelector(".tui-last-child").classList.add("mobile-hidden"),t<=5&&document.querySelector(".tui-last").classList.add("hidden"),_u.on("afterMove",(e=>{const i=e.page;[...Su.children].forEach((t=>t.remove())),async function(t,e){wu(await hr(t,e))}(n,i),t>5?(i<=3?document.querySelector(".tui-first").classList.add("hidden"):document.querySelector(".tui-first").classList.remove("hidden"),document.querySelector(".tui-ico-first").textContent="1",document.querySelector(".tui-ico-last").textContent=t,t-i>=2?document.querySelector(".tui-last").classList.remove("hidden"):document.querySelector(".tui-last").classList.add("hidden")):(document.querySelector(".tui-first").classList.add("hidden"),document.querySelector(".tui-last").classList.add("hidden")),document.querySelector(".tui-last-child").classList.add("mobile-hidden"),document.querySelector(".tui-first-child").classList.add("mobile-hidden"),window.innerWidth<768&&(i<=3&&(document.querySelector(".tui-last-child").classList.add("mobile-hidden"),document.querySelector(".tui-first-child").classList.remove("mobile-hidden"),document.querySelector(".tui-first-child").nextSibling.classList.remove("mobile-hidden")),t-i<=1&&(document.querySelector(".tui-last-child").classList.remove("mobile-hidden"),document.querySelector(".tui-first-child").classList.add("mobile-hidden")))}))}function Nu(){Eu.classList.add("hidden")}let Tu,Ou,Cu;function Ru(t){Tu=new Pu(t),Tu.renderingCollectionByPage(),Ou=new IntersectionObserver(Lu),Ou.observe(document.querySelector("footer")),Cu=!0}function Lu(t){t.forEach((t=>{t.isIntersecting&&(!Cu&&localStorage.getItem("fireBaseAuthorized")||!localStorage.getItem("fireBaseAuthorized"))&&Tu.renderingCollectionByPage()}))}function Au(){Ou&&Ou.disconnect()}class Pu{constructor(t){this.index=0,this.currentLibrary=t}async renderingCollectionByPage(){let t;if(vu("start"),localStorage.getItem("fireBaseAuthorized"))try{t=await iu(this.currentLibrary),this.renderPartOfCollection(t)}catch(t){console.log(t.message)}else t=Br(this.currentLibrary),this.renderPartOfCollection(t)}renderPartOfCollection(t){const n=this.getCollectionBox(t);0===n.length&&(Au(),vu("stop"),this.index>0&&(!Cu&&localStorage.getItem("fireBaseAuthorized")||!localStorage.getItem("fireBaseAuthorized")))?e(pu).Notify.failure("uk"===lr.language?"Ми досягли кінця колекції Ваших фільмів!":"We've reached the end of your collection!",mu):(wu(n,!1),Cu=!1,console.log(n),vu("stop"),this.index+=Yh)}getCollectionBox(t){return t.slice(this.index,this.index+Yh)}}function Du(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function Bu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mu=Bu,ju=new vo("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Fu=new zo("@firebase/auth");function Uu(t,...e){Fu.logLevel<=Do.ERROR&&Fu.error(`Auth (9.19.1): ${t}`,...e)}
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
 */function zu(t,...e){throw $u(t,...e)}function Vu(t,...e){return $u(t,...e)}function Wu(t,e,n){const i=Object.assign(Object.assign({},Mu()),{[e]:n});return new vo("auth","Firebase",i).create(e,{appName:t.name})}function $u(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ju.create(t,...e)}function qu(t,e,...n){if(!t)throw $u(e,...n)}function Hu(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uu(e),new Error(e)}function Ku(t,e){t||Hu(e)}
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
 */const Xu=new Map;function Ju(t){Ku(t instanceof Function,"Expected a class definition");let e=Xu.get(t);return e?(Ku(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xu.set(t,e),e)}
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
function Gu(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Yu(){return"http:"===Qu()||"https:"===Qu()}function Qu(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function Zu(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Yu()||po()||"connection"in navigator))||navigator.onLine}
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
class tf{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ku(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ho())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Zu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function ef(t,e){Ku(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class nf{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Hu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Hu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Hu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const rf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},of=new tf(3e4,6e4);
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
 */function sf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function af(t,e,n,i,r={}){return lf(t,r,(async()=>{let r={},o={};i&&("GET"===e?o=i:r={body:JSON.stringify(i)});const s=_o(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),nf.fetch()(uf(t,t.config.apiHost,n,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function lf(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},rf),e);try{const e=new ff(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw df(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw df(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw df(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw df(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Wu(t,a,s);zu(t,a)}}catch(e){if(e instanceof yo)throw e;zu(t,"network-request-failed",{message:String(e)})}}async function cf(t,e,n,i,r={}){const o=await af(t,e,n,i,r);return"mfaPendingCredential"in o&&zu(t,"multi-factor-auth-required",{_serverResponse:o}),o}function uf(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ef(t.config,r):`${t.config.apiScheme}://${r}`}class ff{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Vu(this.auth,"network-request-failed"))),of.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function df(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Vu(t,e,i);return r.customData._tokenResponse=n,r}
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
function hf(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function pf(t){return 1e3*Number(t)}function mf(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return Uu("JWT malformed, contained fewer than 3 sections"),null;try{const t=ro(n);return t?JSON.parse(t):(Uu("Failed to decode base64 JWT payload"),null)}catch(t){return Uu("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function gf(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof yo&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class yf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class vf{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=hf(this.lastLoginAt),this.creationTime=hf(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function bf(t){var e;const n=t.auth,i=await t.getIdToken(),r=await gf(t,async function(t,e){return af(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));qu(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?o.providerUserInfo.map((t=>{var{providerId:e}=t,n=Du(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=s,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const u=t.isAnonymous,f=!(t.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&f,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new vf(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,h)}
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
class wf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){qu(t.idToken,"internal-error"),qu(void 0!==t.idToken,"internal-error"),qu(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=mf(t);return qu(e,"internal-error"),qu(void 0!==e.exp,"internal-error"),qu(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return qu(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(t,e){const n=await lf(t,{},(async()=>{const n=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=uf(t,i,"/v1/token",`key=${r}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",nf.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,o=new wf;return n&&(qu("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(qu("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),r&&(qu("number"==typeof r,"internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new wf,this.toJSON())}_performRefresh(){return Hu("not implemented")}}
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
 */function xf(t,e){qu("string"==typeof t||void 0===t,"internal-error",{appName:e})}class kf{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=Du(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await gf(this,this.stsTokenManager.getToken(this.auth,t));return qu(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Oo(t),i=await n.getIdToken(e),r=mf(i);qu(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:hf(pf(r.auth_time)),issuedAtTime:hf(pf(r.iat)),expirationTime:hf(pf(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Oo(t);await bf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(qu(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new kf(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){qu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await bf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await gf(this,async function(t,e){return af(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,o,s,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,f=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,h=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;qu(v&&k,t,"internal-error");const _=wf.fromJSON(this.name,k);qu("string"==typeof v,t,"internal-error"),xf(u,t.name),xf(f,t.name),qu("boolean"==typeof b,t,"internal-error"),qu("boolean"==typeof w,t,"internal-error"),xf(d,t.name),xf(h,t.name),xf(p,t.name),xf(m,t.name),xf(g,t.name),xf(y,t.name);const S=new kf({uid:v,auth:t,email:f,emailVerified:b,displayName:u,isAnonymous:w,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(S.providerData=x.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const i=new wf;i.updateFromServerResponse(e);const r=new kf({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await bf(r),r}}
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
 */class _f{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}_f.type="NONE";const Sf=_f;
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
 */function Ef(t,e,n){return`firebase:${t}:${e}:${n}`}class If{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Ef(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ef("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?kf._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new If(Ju(Sf),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||Ju(Sf);const o=Ef(n,t.config.apiKey,t.name);let s=null;for(const n of e)try{const e=await n._get(o);if(e){const i=kf._fromJSON(t,e);n!==r&&(s=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(o)}catch(t){}}))),new If(r,t,n)):new If(r,t,n)}}
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
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Af(e))return"Blackberry";if(Pf(e))return"Webos";if(Of(e))return"Safari";if((e.includes("chrome/")||Cf(e))&&!e.includes("edge/"))return"Chrome";if(Lf(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Tf(t=ho()){return/firefox\//i.test(t)}function Of(t=ho()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cf(t=ho()){return/crios\//i.test(t)}function Rf(t=ho()){return/iemobile/i.test(t)}function Lf(t=ho()){return/android/i.test(t)}function Af(t=ho()){return/blackberry/i.test(t)}function Pf(t=ho()){return/webos/i.test(t)}function Df(t=ho()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bf(){return mo()&&10===document.documentMode}function Mf(t=ho()){return Df(t)||Lf(t)||Pf(t)||Af(t)||/windows phone/i.test(t)||Rf(t)}
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
function jf(t,e=[]){let n;switch(t){case"Browser":n=Nf(ho());break;case"Worker":n=`${Nf(ho())}-${t}`;break;default:n=t}return`${n}/JsCore/9.19.1/${e.length?e.join(","):"FirebaseCore-web"}`}
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
 */class Ff{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
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
 */class Uf{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vf(this),this.idTokenSubscription=new Vf(this),this.beforeStateQueue=new Ff(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ju,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ju(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await If.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return qu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await bf(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Oo(t):null;return e&&qu(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&qu(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ju(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vo("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ju(t)||this._popupRedirectResolver;qu(e,this,"argument-error"),this.redirectPersistenceManager=await If.create(this,[Ju(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return qu(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return qu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function zf(t){return Oo(t)}class Vf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Io((t=>this.observer=t))}get next(){return qu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Wf(t,e,n){const i=zf(t);qu(i._canInitEmulator,i,"emulator-config-failed"),qu(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=$f(e),{host:s,port:a}=function(t){const e=$f(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:qf(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:qf(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function $f(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class Hf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Hu("not implemented")}_getIdTokenResponse(t){return Hu("not implemented")}_linkToIdToken(t,e){return Hu("not implemented")}_getReauthenticationResolver(t){return Hu("not implemented")}}
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
 */async function Kf(t,e){return af(t,"POST","/v1/accounts:update",e)}
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
class Xf extends Hf{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Xf(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Xf(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return cf(t,"POST","/v1/accounts:signInWithPassword",sf(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,e){return cf(t,"POST","/v1/accounts:signInWithEmailLink",sf(t,e))}(t,{email:this._email,oobCode:this._password});default:zu(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Kf(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return cf(t,"POST","/v1/accounts:signInWithEmailLink",sf(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:zu(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Jf(t,e){return cf(t,"POST","/v1/accounts:signInWithIdp",sf(t,e))}
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
 */class Gf extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Gf(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):zu("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=Du(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Gf(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){return Jf(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jf(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jf(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=_o(e)}return t}}
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
 */const Yf={USER_NOT_FOUND:"user-not-found"};
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
class Qf extends Hf{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Qf({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Qf({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return cf(t,"POST","/v1/accounts:signInWithPhoneNumber",sf(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await cf(t,"POST","/v1/accounts:signInWithPhoneNumber",sf(t,e));if(n.temporaryProof)throw df(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return cf(t,"POST","/v1/accounts:signInWithPhoneNumber",sf(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Yf)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Qf({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
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
 */class Zf{constructor(t){var e,n,i,r,o,s;const a=So(Eo(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);qu(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(t){const e=function(t){const e=So(Eo(t)).link,n=e?So(Eo(e)).deep_link_id:null,i=So(Eo(t)).deep_link_id;return(i?So(Eo(i)).link:null)||i||n||e||t}(t);try{return new Zf(e)}catch(t){return null}}}
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
class td{constructor(){this.providerId=td.PROVIDER_ID}static credential(t,e){return Xf._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Zf.parseLink(e);return qu(n,"argument-error"),Xf._fromEmailAndCode(t,n.code,n.tenantId)}}td.PROVIDER_ID="password",td.EMAIL_PASSWORD_SIGN_IN_METHOD="password",td.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ed{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class nd extends ed{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class id extends nd{constructor(){super("facebook.com")}static credential(t){return Gf._fromParams({providerId:id.PROVIDER_ID,signInMethod:id.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return id.credentialFromTaggedObject(t)}static credentialFromError(t){return id.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return id.credential(t.oauthAccessToken)}catch(t){return null}}}id.FACEBOOK_SIGN_IN_METHOD="facebook.com",id.PROVIDER_ID="facebook.com";
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
class rd extends nd{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Gf._fromParams({providerId:rd.PROVIDER_ID,signInMethod:rd.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return rd.credentialFromTaggedObject(t)}static credentialFromError(t){return rd.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return rd.credential(e,n)}catch(t){return null}}}rd.GOOGLE_SIGN_IN_METHOD="google.com",rd.PROVIDER_ID="google.com";
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
class od extends nd{constructor(){super("github.com")}static credential(t){return Gf._fromParams({providerId:od.PROVIDER_ID,signInMethod:od.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return od.credentialFromTaggedObject(t)}static credentialFromError(t){return od.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return od.credential(t.oauthAccessToken)}catch(t){return null}}}od.GITHUB_SIGN_IN_METHOD="github.com",od.PROVIDER_ID="github.com";
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
class sd extends nd{constructor(){super("twitter.com")}static credential(t,e){return Gf._fromParams({providerId:sd.PROVIDER_ID,signInMethod:sd.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return sd.credentialFromTaggedObject(t)}static credentialFromError(t){return sd.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return sd.credential(e,n)}catch(t){return null}}}
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
async function ad(t,e){return cf(t,"POST","/v1/accounts:signUp",sf(t,e))}
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
 */sd.TWITTER_SIGN_IN_METHOD="twitter.com",sd.PROVIDER_ID="twitter.com";class ld{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await kf._fromIdTokenResponse(t,n,i),o=cd(n);return new ld({user:r,providerId:o,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=cd(n);return new ld({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function cd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class ud extends yo{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ud.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ud(t,e,n,i)}}function fd(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ud._fromErrorAndOperation(t,n,e,i);throw n}))}
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
 */async function dd(t,e,n=!1){const i=await gf(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ld._forOperation(t,"link",i)}
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
async function hd(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const o=await gf(t,fd(i,r,e,t),n);qu(o.idToken,i,"internal-error");const s=mf(o.idToken);qu(s,i,"internal-error");const{sub:a}=s;return qu(t.uid===a,i,"user-mismatch"),ld._forOperation(t,r,o)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&zu(i,"user-mismatch"),t}}
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
 */async function pd(t,e,n=!1){const i="signIn",r=await fd(t,i,e),o=await ld._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}async function md(t,e){return pd(zf(t),e)}async function gd(t,e,n){const i=zf(t),r=await ad(i,{returnSecureToken:!0,email:e,password:n}),o=await ld._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}new WeakMap;const yd="__sak";
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
 */class vd{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(yd,"1"),this.storage.removeItem(yd),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class bd extends vd{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=ho();return Of(t)||Df(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Mf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Bf()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}bd.type="LOCAL";const wd=bd;
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
 */class xd extends vd{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}xd.type="SESSION";const kd=xd;
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
class _d{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new _d(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Sd(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */_d.receivers=[];class Ed{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=Sd("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
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
 */function Id(){return window}
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
function Nd(){return void 0!==Id().WorkerGlobalScope&&"function"==typeof Id().importScripts}
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
const Td="firebaseLocalStorageDb",Od="firebaseLocalStorage",Cd="fbase_key";class Rd{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Ld(t,e){return t.transaction([Od],e?"readwrite":"readonly").objectStore(Od)}function Ad(){const t=indexedDB.open(Td,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Od,{keyPath:Cd})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Od)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Td);return new Rd(t).toPromise()}(),e(await Ad()))}))}))}async function Pd(t,e,n){const i=Ld(t,!0).put({[Cd]:e,value:n});return new Rd(i).toPromise()}function Dd(t,e){const n=Ld(t,!0).delete(e);return new Rd(n).toPromise()}class Bd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ad()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_d._getInstance(Nd()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Ed(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ad();return await Pd(t,yd,"1"),await Dd(t,yd),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Pd(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Ld(t,!1).get(e),i=await new Rd(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Dd(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ld(t,!1).getAll();return new Rd(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Bd.type="LOCAL";const Md=Bd;
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
 */function jd(t){return new Promise(((e,n)=>{const i=document.createElement("script");
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
var r,o;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=Vu("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function Fd(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
Fd("rcb"),new tf(3e4,6e4);
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
const Ud="recaptcha";async function zd(t,e,n){var i;const r=await n.verify();try{let o;if(qu("string"==typeof r,t,"argument-error"),qu(n.type===Ud,t,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){qu("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return af(t,"POST","/v2/accounts/mfaEnrollment:start",sf(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{qu("signin"===e.type,t,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;qu(n,t,"missing-multi-factor-info");const s=await function(t,e){return af(t,"POST","/v2/accounts/mfaSignIn:start",sf(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return af(t,"POST","/v1/accounts:sendVerificationCode",sf(t,e))}(t,{phoneNumber:o.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
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
class Vd{constructor(t){this.providerId=Vd.PROVIDER_ID,this.auth=zf(t)}verifyPhoneNumber(t,e){return zd(this.auth,t,Oo(e))}static credential(t,e){return Qf._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Vd.credentialFromTaggedObject(e)}static credentialFromError(t){return Vd.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Qf._fromTokenResponse(e,n):null}}
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
function Wd(t,e){return e?Ju(e):(qu(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */Vd.PROVIDER_ID="phone",Vd.PHONE_SIGN_IN_METHOD="phone";class $d extends Hf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jf(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Jf(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Jf(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function qd(t){return pd(t.auth,new $d(t),t.bypassAuthState)}function Hd(t){const{auth:e,user:n}=t;return qu(n,e,"internal-error"),hd(n,new $d(t),t.bypassAuthState)}async function Kd(t){const{auth:e,user:n}=t;return qu(n,e,"internal-error"),dd(n,new $d(t),t.bypassAuthState)}
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
 */class Xd{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return qd;case"linkViaPopup":case"linkViaRedirect":return Kd;case"reauthViaPopup":case"reauthViaRedirect":return Hd;default:zu(this.auth,"internal-error")}}resolve(t){Ku(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ku(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Jd=new tf(2e3,1e4);class Gd extends Xd{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Gd.currentPopupAction&&Gd.currentPopupAction.cancel(),Gd.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return qu(t,this.auth,"internal-error"),t}async onExecution(){Ku(1===this.filter.length,"Popup operations only handle one event");const t=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Vu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Vu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gd.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Vu(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Jd.get())};t()}}Gd.currentPopupAction=null;
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
const Yd=new Map;class Qd extends Xd{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Yd.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=eh(e),i=th(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Yd.set(this.auth._key(),t)}return this.bypassAuthState||Yd.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Zd(t,e){Yd.set(t._key(),e)}function th(t){return Ju(t._redirectPersistence)}function eh(t){return Ef("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function nh(t,e,n=!1){const i=zf(t),r=Wd(i,e),o=new Qd(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}class ih{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oh(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!oh(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Vu(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rh(t))}saveEventToCache(t){this.cachedEventUids.add(rh(t)),this.lastProcessedEventTime=Date.now()}}function rh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function oh({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const sh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ah=/^https?/;async function lh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return af(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(ch(t))return}catch(t){}zu(t,"unauthorized-domain")}function ch(t){const e=Gu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ah.test(n))return!1;if(sh.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const uh=new tf(3e4,6e4);function fh(){const t=Id().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let dh=null;function hh(t){return dh=dh||function(t){return new Promise(((e,n)=>{var i,r,o;function s(){fh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fh(),n(Vu(t,"network-request-failed"))},timeout:uh.get()})}if(null===(r=null===(i=Id().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Id().gapi)||void 0===o?void 0:o.load)){const e=Fd("iframefcb");return Id()[e]=()=>{gapi.load?s():n(Vu(t,"network-request-failed"))},jd(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw dh=null,t}))}(t),dh}
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
 */const ph=new tf(5e3,15e3),mh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yh(t){const e=t.config;qu(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ef(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:vs},r=gh.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${_o(i).slice(1)}`}
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
const vh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class bh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function wh(t,e,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vh),{width:i.toString(),height:r.toString(),top:o,left:s}),c=ho().toLowerCase();n&&(a=Cf(c)?"_blank":n),Tf(c)&&(e=e||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=ho()){var e;return Df(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(e||"",a),new bh(null);const f=window.open(e||"",a,u);qu(f,t,"popup-blocked");try{f.focus()}catch(t){}return new bh(f)}const xh="emulator/auth/handler";function kh(t,e,n,i,r,o){qu(t.config.authDomain,t,"auth-domain-config-required"),qu(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:vs,eventId:r};if(e instanceof ed){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",wo(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(o||{}))s[t]=e}if(e instanceof nd){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?ef(t,xh):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${_o(a).slice(1)}`}const _h="webStorageSupport";const Sh=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kd,this._completeRedirectFn=nh,this._overrideRedirectResult=Zd}async _openPopup(t,e,n,i){var r;Ku(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return wh(t,kh(t,e,n,Gu(),i),Sd())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=kh(t,e,n,Gu(),i),Id().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Ku(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await hh(t),n=Id().gapi;return qu(n,t,"internal-error"),e.open({where:document.body,url:yh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mh,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=Vu(t,"network-request-failed"),o=Id().setTimeout((()=>{i(r)}),ph.get());function s(){Id().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{i(r)}))}))))}(t),n=new ih(t);return e.register("authEvent",(e=>{qu(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(_h,{type:_h},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),zu(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=lh(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Mf()||Of()||Df()}};var Eh="@firebase/auth",Ih="0.22.0";
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
class Nh{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){qu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Th=co("authIdTokenMaxAge")||300;let Oh=null;var Ch;Ch="Browser",ps(new Co("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((t,n)=>{qu(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),qu(!(null==o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:o,clientPlatform:Ch,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jf(Ch)},s=new Uf(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ju);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),ps(new Co("auth-internal",(t=>{const e=zf(t.getProvider("auth").getImmediate());return new Nh(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),xs(Eh,Ih,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ch)),xs(Eh,Ih,"esm2017");const Rh={authBtn:document.querySelector(".auth-btn"),authBox:document.querySelector(".form-container"),closeBtn:document.querySelector(".exit-button"),signUpBtn:document.querySelector(".sign-up"),logInBtn:document.querySelector(".log-in"),formTitle:document.querySelector(".logForm_title"),inputEmail:document.querySelector(".email"),inputPassword:document.querySelector(".password"),authForm:document.querySelector(".logForm"),lockBtn:document.querySelector(".lock-button"),lockSvg:document.querySelector(".lock-svg"),mobileMenuOpenBtn:document.querySelector(".mobile_menu_btn"),mobileMenuCloseBtn:document.querySelector(".exit-menu_btn"),mobileMenuContainer:document.querySelector(".mobile_menu"),navBox:document.querySelector(".header-nav")},Lh=function(t=ws()){const e=ms(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=ms(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(xo(n.getOptions(),null!=e?e:{}))return t;zu(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Sh,persistence:[Md,wd,kd]}),i=co("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Th)return;const i=null==e?void 0:e.token;Oh!==i&&(Oh=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){Oo(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){Oo(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const o=ao("auth");return o&&Wf(n,`http://${o}`),n}(Ls),Ah=async()=>{const t=Rh.inputEmail.value,e=Rh.inputPassword.value;await gd(Lh,t,e).then((e=>{e.user;localStorage.setItem("fireBaseAuthorized",Lh.currentUser.uid),gu("uk"===lr.language?`Ваш акаунт створено з логіном ${t}`:`Your account has been created with login ${t}`),Rh.authForm.reset(),Dh(),Bh()})).catch((t=>{yu("uk"===lr.language?`Your registration has been failed. Reason: ${t.message}`:`Ваша реєстрація невдала. Причина: ${t.message}`)}))},Ph=async()=>{const t=Rh.inputEmail.value,e=Rh.inputPassword.value;var n,i,r;
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
 */await(n=Lh,i=t,r=e,md(Oo(n),td.credential(i,r))).then((t=>{const e=t.user;localStorage.setItem("fireBaseAuthorized",Lh.currentUser.uid),gu("uk"===lr.language?`Ви ввійшли з електронної пошти ${e.email}`:`You have been logged in with e-mail ${e.email}`),Rh.authForm.reset(),Dh(),Bh()})).catch((t=>{yu("uk"===lr.language?`Ваш вхід невдалий. Причина: ${t.message}`:`Your log in has been failed. Reason: ${t.message}`)}))},Dh=()=>{const t=Rh.authBtn.innerHTML;Rh.authBtn.textContent.includes("Log in")?Rh.authBtn.innerHTML=t.replace("Log in","Log out"):Rh.authBtn.textContent.includes("Log out")?Rh.authBtn.innerHTML=t.replace("Log out","Log in"):Rh.authBtn.textContent.includes("Вхід")?Rh.authBtn.innerHTML=t.replace("Вхід","Вихід"):Rh.authBtn.textContent.includes("Вихід")&&(Rh.authBtn.innerHTML=t.replace("Вихід","Вхід"))},Bh=()=>{Rh.authBox.classList.remove("active")},Mh=()=>{Rh.logInBtn.classList.add("active"),Rh.signUpBtn.classList.remove("active"),Rh.formTitle.textContent="uk"===lr.language?"Вхід":"Log in",Rh.inputEmail.placeholder="uk"===lr.language?"електронна пошта":"e-mail",Rh.inputPassword.placeholder="uk"===lr.language?"пароль":"password"},jh=()=>{Rh.mobileMenuContainer.classList.remove("active"),Rh.navBox.classList.remove("active")};var Fh,Uh,zh;Rh.mobileMenuCloseBtn.addEventListener("click",jh),Rh.mobileMenuOpenBtn.addEventListener("click",(()=>{Rh.mobileMenuContainer.classList.add("active"),Rh.navBox.classList.add("active")})),Rh.authForm.addEventListener("submit",(t=>{t.preventDefault();const{elements:{email:n,password:i}}=t.currentTarget;""!==n.value||""!==i.value?(Rh.signUpBtn.classList.contains("active")?Ah():Ph(),Cr(document.body)):e(pu).Notify.failure("uk"===lr.language?"Будь ласка, заповніть всі поля":"Please fill all fields",mu)})),Rh.authBtn.addEventListener("click",(()=>{var t;(Rh.authBtn.textContent.includes("Log in")||Rh.authBtn.textContent.includes("Вхід"))&&(Rh.authBox.classList.add("active"),Mh()),localStorage.getItem("fireBaseAuthorized")&&(t=Lh,Oo(t).signOut()).then((()=>{var t;localStorage.removeItem("fireBaseAuthorized"),Dh(),t="uk"===lr.language?"Ви вийшли з акаунту":"You have been logged out",e(pu).Notify.info(t,mu),Cr(document.body)})).catch((t=>console.log(t)))})),Rh.closeBtn.addEventListener("click",Bh),Rh.signUpBtn.addEventListener("click",(()=>{Rh.logInBtn.classList.remove("active"),Rh.signUpBtn.classList.add("active"),Rh.formTitle.textContent="uk"===lr.language?"Реєстрація":"Sign up",Rh.inputEmail.placeholder="uk"===lr.language?"Введіть Вашу електронну пошту":"Enter your e-mail",Rh.inputPassword.placeholder="uk"===lr.language?"Введіть пароль":"Enter password"})),Rh.logInBtn.addEventListener("click",Mh),Rh.lockBtn.addEventListener("click",(()=>{"password"===Rh.inputPassword.type?(Rh.inputPassword.type="text",Rh.lockSvg.href.baseVal="/icons.adfc4680.svg#icon-unlocked"):(Rh.inputPassword.type="password",Rh.lockSvg.href.baseVal="/icons.adfc4680.svg#icon-lock")})),Fh=()=>{qh()},Oo(Lh).onAuthStateChanged(Fh,Uh,zh);const Vh={headerhForm:document.querySelector(".header-form"),searchForm:document.querySelector(".search-form"),nav:document.querySelector(".header-nav"),homeBtn:document.querySelector(".home-btn"),myLibraryBtn:document.querySelector(".my-library-btn"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),logo:document.querySelector(".logo-wrapper"),logoRef:document.querySelector(".logo"),galleryList:document.querySelector(".list")};let Wh="",$h=0;function qh(){vu("start"),Vh.watchedBtn.classList.add("is-hidden"),Vh.queueBtn.classList.add("is-hidden"),Vh.headerhForm.classList.remove("js-form-inactive"),Vh.nav.classList.remove("js-home-inactive"),Vh.logo.classList.remove("js-library-active"),Vh.homeBtn.classList.add("active-btn"),jh(),Vh.myLibraryBtn.classList.contains("active-btn")&&(Au(),Vh.myLibraryBtn.classList.remove("active-btn")),hr("").then((t=>{wu(t),Iu(t.total_pages,"")})),Eu.classList.remove("hidden"),vu("stop"),Gh(),Jh()}function Hh(){Vh.watchedBtn.classList.remove("is-hidden"),Vh.queueBtn.classList.remove("is-hidden"),Vh.headerhForm.classList.add("js-form-inactive"),Vh.nav.classList.add("js-home-inactive"),Vh.logo.classList.add("js-library-active"),Nu(),Vh.homeBtn.classList.remove("active-btn"),Vh.myLibraryBtn.classList.add("active-btn"),jh(),Xh(),Gh(),Jh()}function Kh(){Vh.galleryList.innerHTML="",Nu(),Ru(Dr),Vh.watchedBtn.classList.add("active-library-btn"),Vh.queueBtn.classList.remove("active-library-btn")}function Xh(){Vh.galleryList.innerHTML="",Nu(),Ru(Pr),Vh.watchedBtn.classList.remove("active-library-btn"),Vh.queueBtn.classList.add("active-library-btn")}Vh.searchForm.addEventListener("submit",(async function(t){if(t.preventDefault(),vu("start"),Wh=t.currentTarget.searchQuery.value.trim(),!Wh)return vu("stop"),void e(pu).Notify.failure("uk"===lr.language?"Введіть Ваш пошуковий запит, будь ласка.":"Enter your search query, please.",mu);t.currentTarget.reset();const n=await hr(Wh);$h=n.results.length;try{$h>0&&(vu("stop"),e(pu).Notify.success("uk"===lr.language?"Ми знайшли те, що Ви шукали!":"We`ve found what you were looking for!",mu),wu(n),Iu(n.total_pages,Wh),1===n.total_pages&&(Ru(),Nu())),0===$h&&(vu("stop"),e(pu).Notify.failure("uk"===lr.language?"Результат пошуку невдалий. Введіть коректну назву фільму.":"Search result is not successful. Enter the correct movie name.",mu),wu(n),Iu(n.total_pages,Wh))}catch(t){vu("stop"),console.log(t)}})),Vh.homeBtn.addEventListener("click",qh),Vh.logoRef.addEventListener("click",qh),Vh.myLibraryBtn.addEventListener("click",Hh),Vh.watchedBtn.addEventListener("click",Kh),Vh.queueBtn.addEventListener("click",Xh);const Jh=()=>{const t={status:"active",id:document.querySelector(".active-btn").id};localStorage.setItem("button",JSON.stringify(t))},Gh=()=>{localStorage.removeItem("button")},Yh=20;localStorage.getItem("fireBaseAuthorized")&&Dh(),(()=>{const t=JSON.parse(localStorage.getItem("button"));t?"1"===t.id?qh():"2"===t.id&&Hh():qh()})()}();
//# sourceMappingURL=index.4f06f6e3.js.map
