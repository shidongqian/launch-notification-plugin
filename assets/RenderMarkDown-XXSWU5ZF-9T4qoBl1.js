import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./index-DRxqsvnF.js";var s=a((e,t)=>{t.exports=function(e){return e!=null&&e.constructor!=null&&typeof e.constructor.isBuffer==`function`&&e.constructor.isBuffer(e)}}),c=a((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(n.call(e,t)){if(a)return a(e,t).value}else return}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}),l=a((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`}),u=a((e,t)=>{var n=l();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}}),d=a((e,t)=>{t.exports=u()()}),f=a(e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.server_context`),l=Symbol.for(`react.forward_ref`),u=Symbol.for(`react.suspense`),d=Symbol.for(`react.suspense_list`),f=Symbol.for(`react.memo`),p=Symbol.for(`react.lazy`),m=Symbol.for(`react.offscreen`),h=Symbol.for(`react.module.reference`);function g(e){if(typeof e==`object`&&e){var m=e.$$typeof;switch(m){case t:switch(e=e.type,e){case r:case a:case i:case u:case d:return e;default:switch(e&&=e.$$typeof,e){case c:case s:case l:case p:case f:case o:return e;default:return m}}case n:return m}}}e.ContextConsumer=s,e.ContextProvider=o,e.Element=t,e.ForwardRef=l,e.Fragment=r,e.Lazy=p,e.Memo=f,e.Portal=n,e.Profiler=a,e.StrictMode=i,e.Suspense=u,e.SuspenseList=d,e.isAsyncMode=function(){return!1},e.isConcurrentMode=function(){return!1},e.isContextConsumer=function(e){return g(e)===s},e.isContextProvider=function(e){return g(e)===o},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===t},e.isForwardRef=function(e){return g(e)===l},e.isFragment=function(e){return g(e)===r},e.isLazy=function(e){return g(e)===p},e.isMemo=function(e){return g(e)===f},e.isPortal=function(e){return g(e)===n},e.isProfiler=function(e){return g(e)===a},e.isStrictMode=function(e){return g(e)===i},e.isSuspense=function(e){return g(e)===u},e.isSuspenseList=function(e){return g(e)===d},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===r||e===a||e===i||e===u||e===d||e===m||typeof e==`object`&&!!e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===o||e.$$typeof===s||e.$$typeof===l||e.$$typeof===h||e.getModuleId!==void 0)},e.typeOf=g}),p=a((e,t)=>{t.exports=f()}),m=a((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;t.exports=function(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,d=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);d=~n?e.length-n:d+e.length}function p(){var e={line:l,column:d};return function(t){return t.position=new m(e),_(),t}}function m(e){this.start=e,this.end={line:l,column:d},this.source=t.source}m.prototype.content=e;function h(n){var r=Error(t.source+`:`+l+`:`+d+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=d,r.source=e,!t.silent)throw r}function g(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function _(){g(i)}function v(e){var t;for(e||=[];t=y();)t!==!1&&e.push(t);return e}function y(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return h(`End of comment missing`);var r=e.slice(2,n-2);return d+=2,f(r),e=e.slice(n),d+=2,t({type:`comment`,comment:r})}}function b(){var e=p(),t=g(a);if(t){if(y(),!g(o))return h(`property missing ':'`);var r=g(s),i=e({type:`declaration`,property:u(t[0].replace(n,``)),value:r?u(r[0].replace(n,``)):``});return g(c),i}}function x(){var e=[];v(e);for(var t;t=b();)t!==!1&&(e.push(t),v(e));return e}return _(),x()};function u(e){return e?e.replace(l,``):``}}),h=a((e,t)=>{var n=m();function r(e,t){var r=null;if(!e||typeof e!=`string`)return r;for(var i,a=n(e),o=typeof t==`function`,s,c,l=0,u=a.length;l<u;l++)i=a[l],s=i.property,c=i.value,o?t(s,c,i):c&&(r||={},r[s]=c);return r}t.exports=r,t.exports.default=r}),g=n(i(),1),_=[`http`,`https`,`mailto`,`tel`];function v(e){let t=(e||``).trim(),n=t.charAt(0);if(n===`#`||n===`/`)return t;let r=t.indexOf(`:`);if(r===-1)return t;let i=-1;for(;++i<_.length;){let e=_[i];if(r===e.length&&t.slice(0,e.length).toLowerCase()===e)return t}return i=t.indexOf(`?`),i!==-1&&r>i||(i=t.indexOf(`#`),i!==-1&&r>i)?t:`javascript:void(0)`}var y=n(e(),1),b=n(s(),1);function x(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?C(e.position):`start`in e||`end`in e?C(e):`line`in e||`column`in e?S(e):``}function S(e){return w(e&&e.line)+`:`+w(e&&e.column)}function C(e){return S(e&&e.start)+`-`+S(e&&e.end)}function w(e){return e&&typeof e==`number`?e:1}var T=class extends Error{constructor(e,t,n){let r=[null,null],i={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof t==`string`&&(n=t,t=void 0),typeof n==`string`){let e=n.indexOf(`:`);e===-1?r[1]=n:(r[0]=n.slice(0,e),r[1]=n.slice(e+1))}t&&(`type`in t||`position`in t?t.position&&(i=t.position):`start`in t||`end`in t?i=t:(`line`in t||`column`in t)&&(i.start=t)),this.name=x(t)||`1:1`,this.message=typeof e==`object`?e.message:e,this.stack=``,typeof e==`object`&&e.stack&&(this.stack=e.stack),this.reason=this.message,this.fatal,this.line=i.start.line,this.column=i.start.column,this.position=i,this.source=r[0],this.ruleId=r[1],this.file,this.actual,this.expected,this.url,this.note}};T.prototype.file=``,T.prototype.name=``,T.prototype.reason=``,T.prototype.message=``,T.prototype.stack=``,T.prototype.fatal=null,T.prototype.column=null,T.prototype.line=null,T.prototype.source=null,T.prototype.ruleId=null,T.prototype.position=null;var E={basename:ee,dirname:D,extname:O,join:te,sep:`/`};function ee(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);A(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.charCodeAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.charCodeAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.charCodeAt(i)===t.charCodeAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function D(e){if(A(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.charCodeAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.charCodeAt(0)===47?`/`:`.`:t===1&&e.charCodeAt(0)===47?`//`:e.slice(0,t)}function O(e){A(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.charCodeAt(t);if(s===47){if(o){r=t+1;break}}else n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function te(...e){let t=-1,n;for(;++t<e.length;)A(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:ne(n)}function ne(e){A(e);let t=e.charCodeAt(0)===47,n=k(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.charCodeAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function k(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.charCodeAt(o);else{if(s===47)break;s=47}if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function A(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var re={cwd:ie};function ie(){return`/`}function j(e){return typeof e==`object`&&!!e&&e.href&&e.origin}function ae(e){if(typeof e==`string`)e=new URL(e);else if(!j(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return oe(e)}function oe(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.charCodeAt(n)===37&&t.charCodeAt(n+1)===50){let e=t.charCodeAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var se=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],ce=class{constructor(e){let t;t=e?typeof e==`string`||fe(e)?{value:e}:j(e)?{path:e}:e:{},this.data={},this.messages=[],this.history=[],this.cwd=re.cwd(),this.value,this.stored,this.result,this.map;let n=-1;for(;++n<se.length;){let e=se[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)se.includes(r)||(this[r]=t[r])}get path(){return this.history[this.history.length-1]}set path(e){j(e)&&(e=ae(e)),ue(e,`path`),this.path!==e&&this.history.push(e)}get dirname(){return typeof this.path==`string`?E.dirname(this.path):void 0}set dirname(e){de(this.basename,`dirname`),this.path=E.join(e||``,this.basename)}get basename(){return typeof this.path==`string`?E.basename(this.path):void 0}set basename(e){ue(e,`basename`),le(e,`basename`),this.path=E.join(this.dirname||``,e)}get extname(){return typeof this.path==`string`?E.extname(this.path):void 0}set extname(e){if(le(e,`extname`),de(this.dirname,`extname`),e){if(e.charCodeAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=E.join(this.dirname,this.stem+(e||``))}get stem(){return typeof this.path==`string`?E.basename(this.path,this.extname):void 0}set stem(e){ue(e,`stem`),le(e,`stem`),this.path=E.join(this.dirname||``,e+(this.extname||``))}toString(e){return(this.value||``).toString(e||void 0)}message(e,t,n){let r=new T(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=null,r}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}};function le(e,t){if(e&&e.includes(E.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+E.sep+"`")}function ue(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function de(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function fe(e){return(0,b.default)(e)}function pe(e){if(e)throw e}var me=n(s(),1),he=n(c(),1);function ge(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function _e(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a)r(a);else{for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?ve(s,i)(...o):r(null,...o)}}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function ve(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o instanceof Promise?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var ye=xe().freeze(),be={}.hasOwnProperty;function xe(){let e=_e(),t=[],n={},r,i=-1;return a.data=o,a.Parser=void 0,a.Compiler=void 0,a.freeze=s,a.attachers=t,a.use=c,a.parse=l,a.stringify=u,a.run=d,a.runSync=f,a.process=p,a.processSync=m,a;function a(){let e=xe(),r=-1;for(;++r<t.length;)e.use(...t[r]);return e.data((0,he.default)(!0,{},n)),e}function o(e,t){return typeof e==`string`?arguments.length===2?(Ee(`data`,r),n[e]=t,a):be.call(n,e)&&n[e]||null:e?(Ee(`data`,r),n=e,a):n}function s(){if(r)return a;for(;++i<t.length;){let[n,...r]=t[i];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=n.call(a,...r);typeof o==`function`&&e.use(o)}return r=!0,i=1/0,a}function c(e,...i){let o;if(Ee(`use`,r),e!=null){if(typeof e==`function`)u(e,...i);else if(typeof e==`object`)Array.isArray(e)?l(e):c(e);else throw TypeError("Expected usable value, not `"+e+"`")}return o&&(n.settings=Object.assign(n.settings||{},o)),a;function s(e){if(typeof e==`function`)u(e);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;u(t,...n)}else c(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function c(e){l(e.plugins),e.settings&&(o=Object.assign(o||{},e.settings))}function l(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];s(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function u(e,n){let r=-1,i;for(;++r<t.length;)if(t[r][0]===e){i=t[r];break}i?(ge(i[1])&&ge(n)&&(n=(0,he.default)(!0,i[1],n)),i[1]=n):t.push([...arguments])}}function l(e){a.freeze();let t=ke(e),n=a.Parser;return we(`parse`,n),Se(n,`parse`)?new n(String(t),t).parse():n(String(t),t)}function u(e,t){a.freeze();let n=ke(t),r=a.Compiler;return Te(`stringify`,r),De(e),Se(r,`compile`)?new r(e,n).compile():r(e,n)}function d(t,n,r){if(De(t),a.freeze(),!r&&typeof n==`function`&&(r=n,n=void 0),!r)return new Promise(i);i(null,r);function i(i,a){e.run(t,ke(n),o);function o(e,n,o){n||=t,e?a(e):i?i(n):r(null,n,o)}}}function f(e,t){let n,r;return a.run(e,t,i),Oe(`runSync`,`run`,r),n;function i(e,t){pe(e),n=t,r=!0}}function p(e,t){if(a.freeze(),we(`process`,a.Parser),Te(`process`,a.Compiler),!t)return new Promise(n);n(null,t);function n(n,r){let i=ke(e);a.run(a.parse(i),i,(e,t,n)=>{if(e||!t||!n)o(e);else{let r=a.stringify(t,n);r==null||(je(r)?n.value=r:n.result=r),o(e,n)}});function o(e,i){e||!i?r(e):n?n(i):t(null,i)}}}function m(e){let t;a.freeze(),we(`processSync`,a.Parser),Te(`processSync`,a.Compiler);let n=ke(e);return a.process(n,r),Oe(`processSync`,`process`,t),n;function r(e){t=!0,pe(e)}}}function Se(e,t){return typeof e==`function`&&e.prototype&&(Ce(e.prototype)||t in e.prototype)}function Ce(e){let t;for(t in e)if(be.call(e,t))return!0;return!1}function we(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `Parser`")}function Te(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `Compiler`")}function Ee(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function De(e){if(!ge(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Oe(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function ke(e){return Ae(e)?e:new ce(e)}function Ae(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function je(e){return typeof e==`string`||(0,me.default)(e)}var Me={};function Ne(e,t){let n=t||Me;return Pe(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function Pe(e,t,n){if(Ie(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return Fe(e.children,t,n)}return Array.isArray(e)?Fe(e,t,n):``}function Fe(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Pe(e[i],t,n);return r.join(``)}function Ie(e){return!!(e&&typeof e==`object`)}function M(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function N(e,t){return e.length>0?(M(e,e.length,0,t),e):t}var Le={}.hasOwnProperty;function Re(e){let t={},n=-1;for(;++n<e.length;)ze(t,e[n]);return t}function ze(e,t){let n;for(n in t){let r=(Le.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){Le.call(r,a)||(r[a]=[]);let e=i[a];Be(r[a],Array.isArray(e)?e:e?[e]:[])}}}function Be(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);M(e,0,0,r)}var Ve=/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,P=B(/[A-Za-z]/),F=B(/[\dA-Za-z]/),He=B(/[#-'*+\--9=?A-Z^-~]/);function Ue(e){return e!==null&&(e<32||e===127)}var We=B(/\d/),Ge=B(/[\dA-Fa-f]/),Ke=B(/[!-/:-@[-`{-~]/);function I(e){return e!==null&&e<-2}function L(e){return e!==null&&(e<0||e===32)}function R(e){return e===-2||e===-1||e===32}var qe=B(Ve),z=B(/\s/);function B(e){return t;function t(t){return t!==null&&e.test(String.fromCharCode(t))}}function V(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return R(r)?(e.enter(n),s(r)):t(r)}function s(r){return R(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var Je={tokenize:Ye};function Ye(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null)e.consume(n);else return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),V(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null)e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);else return I(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Xe={tokenize:Qe},Ze={tokenize:$e};function Qe(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end=Object.assign({},o),s++;return M(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!(!i.currentConstruct||i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ze,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Ze,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null)i&&v(),_(0),e.consume(n);else return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{contentType:`flow`,previous:a,_tokenizer:i}),h(n)}function h(n){if(n===null)g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);else return I(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},c),e++;M(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function $e(e,t,n){return V(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function et(e){if(e===null||L(e)||z(e))return 1;if(qe(e))return 2}function tt(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var nt={name:`attention`,tokenize:it,resolveAll:rt};function rt(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);at(d,-c),at(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:Object.assign({},e[r][1].end)},s={type:c>1?`strongSequence`:`emphasisSequence`,start:Object.assign({},e[n][1].start),end:f},a={type:c>1?`strongText`:`emphasisText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:c>1?`strong`:`emphasis`,start:Object.assign({},o.start),end:Object.assign({},s.end)},e[r][1].end=Object.assign({},o.start),e[n][1].start=Object.assign({},s.end),l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=N(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=N(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=N(l,tt(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=N(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=N(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,M(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function it(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=et(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=et(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function at(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var ot={name:`autolink`,tokenize:st};function st(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return P(t)?(e.consume(t),o):l(t)}function o(e){return e===43||e===45||e===46||F(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||F(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Ue(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):He(t)?(e.consume(t),l):n(t)}function u(e){return F(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||F(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var ct={tokenize:lt,partial:!0};function lt(e,t,n){return r;function r(t){return R(t)?V(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||I(e)?t(e):n(e)}}var ut={name:`blockQuote`,tokenize:dt,continuation:{tokenize:ft},exit:pt};function dt(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return R(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function ft(e,t,n){let r=this;return i;function i(t){return R(t)?V(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(ut,t,n)(r)}}function pt(e){e.exit(`blockQuote`)}var mt={name:`characterEscape`,tokenize:ht};function ht(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Ke(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var gt=document.createElement(`i`);function _t(e){let t=`&`+e+`;`;gt.innerHTML=t;let n=gt.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`||n===t?!1:n}var vt={name:`characterReference`,tokenize:yt};function yt(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=F,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Ge,u):(e.enter(`characterReferenceValue`),a=7,o=We,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===F&&!_t(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var bt={tokenize:Ct,partial:!0},xt={name:`codeFenced`,tokenize:St,concrete:!0};function St(e,t,n){let r=this,i={tokenize:x,partial:!0},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),R(t)?V(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||I(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(bt,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||I(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):R(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),V(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||I(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||I(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&R(t)?V(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||I(t)?e.check(bt,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||I(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),R(t)?V(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),R(t)?V(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||I(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function Ct(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var wt={name:`codeIndented`,tokenize:Et},Tt={tokenize:Dt,partial:!0};function Et(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),V(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):I(t)?e.attempt(Tt,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||I(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function Dt(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):I(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):V(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):I(e)?i(e):n(e)}}var Ot={name:`codeText`,tokenize:jt,resolve:kt,previous:At};function kt(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function At(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function jt(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):I(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||I(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}function Mt(e){let t={},n=-1,r,i,a,o,s,c,l;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type===`chunkFlow`&&e[n-1][1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,Nt(e,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--&&(o=e[a],o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`);)o[0]===`enter`&&(i&&(e[i][1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);i&&(r[1].end=Object.assign({},e[i][1].start),s=e.slice(i,n),s.unshift(r),M(e,i,n-i+1,s))}}return!l}function Nt(e,t){let n=e[t][1],r=e[t][2],i=t-1,a=[],o=n._tokenizer||r.parser[n.contentType](n.start),s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e[++i][1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.unshift([n,n+t.length-1]),M(e,n,2,t)}for(f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var Pt={tokenize:Lt,resolve:It},Ft={tokenize:Rt,partial:!0};function It(e){return Mt(e),e}function Lt(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):I(t)?e.check(Ft,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function Rt(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),V(e,a,`linePrefix`)}function a(i){if(i===null||I(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function zt(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Ue(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||I(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||L(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Ue(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Bt(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):I(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||I(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!R(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Vt(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):I(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),V(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||I(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Ht(e,t){let n;return r;function r(i){return I(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):R(i)?V(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}function H(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var Ut={name:`definition`,tokenize:Gt},Wt={tokenize:Kt,partial:!0};function Gt(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Bt.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=H(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return L(t)?Ht(e,l)(t):l(t)}function l(t){return zt(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(Wt,d,d)(t)}function d(t){return R(t)?V(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||I(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function Kt(e,t,n){return r;function r(t){return L(t)?Ht(e,i)(t):n(t)}function i(t){return Vt(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return R(t)?V(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||I(e)?t(e):n(e)}}var qt={name:`hardBreakEscape`,tokenize:Jt};function Jt(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return I(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var Yt={name:`headingAtx`,tokenize:Zt,resolve:Xt};function Xt(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},M(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function Zt(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||L(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||I(n)?(e.exit(`atxHeading`),t(n)):R(n)?V(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||L(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Qt=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),$t=[`pre`,`script`,`style`,`textarea`],en={name:`htmlFlow`,tokenize:an,resolveTo:rn,concrete:!0},tn={tokenize:sn,partial:!0},nn={tokenize:on,partial:!0};function rn(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function an(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:j):P(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):P(a)?(e.consume(a),i=4,r.interrupt?t:j):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:j):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return P(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||L(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&$t.includes(l)?(i=1,r.interrupt?t(s):D(s)):Qt.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||F(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return R(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||P(t)?(e.consume(t),b):R(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||F(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):R(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):R(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||I(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||L(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||R(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||I(t)?D(t):R(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),k):t===60&&i===1?(e.consume(t),A):t===62&&i===4?(e.consume(t),ae):t===63&&i===3?(e.consume(t),j):t===93&&i===5?(e.consume(t),ie):I(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(tn,oe,O)(t)):t===null||I(t)?(e.exit(`htmlFlowData`),O(t)):(e.consume(t),D)}function O(t){return e.check(nn,te,oe)(t)}function te(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ne}function ne(t){return t===null||I(t)?O(t):(e.enter(`htmlFlowData`),D(t))}function k(t){return t===45?(e.consume(t),j):D(t)}function A(t){return t===47?(e.consume(t),o=``,re):D(t)}function re(t){if(t===62){let n=o.toLowerCase();return $t.includes(n)?(e.consume(t),ae):D(t)}return P(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),re):D(t)}function ie(t){return t===93?(e.consume(t),j):D(t)}function j(t){return t===62?(e.consume(t),ae):t===45&&i===2?(e.consume(t),j):D(t)}function ae(t){return t===null||I(t)?(e.exit(`htmlFlowData`),oe(t)):(e.consume(t),ae)}function oe(n){return e.exit(`htmlFlow`),t(n)}}function on(e,t,n){let r=this;return i;function i(t){return I(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function sn(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(ct,t,n)}}var cn={name:`htmlText`,tokenize:ln};function ln(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):P(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):P(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):I(t)?(o=d,A(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?k(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):I(t)?(o=h,A(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?k(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?k(t):I(t)?(o=v,A(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):I(t)?(o=y,A(t)):(e.consume(t),y)}function b(e){return e===62?k(e):y(e)}function x(t){return P(t)?(e.consume(t),S):n(t)}function S(t){return t===45||F(t)?(e.consume(t),S):C(t)}function C(t){return I(t)?(o=C,A(t)):R(t)?(e.consume(t),C):k(t)}function w(t){return t===45||F(t)?(e.consume(t),w):t===47||t===62||L(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),k):t===58||t===95||P(t)?(e.consume(t),E):I(t)?(o=T,A(t)):R(t)?(e.consume(t),T):k(t)}function E(t){return t===45||t===46||t===58||t===95||F(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):I(t)?(o=ee,A(t)):R(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,O):I(t)?(o=D,A(t)):R(t)?(e.consume(t),D):(e.consume(t),te)}function O(t){return t===i?(e.consume(t),i=void 0,ne):t===null?n(t):I(t)?(o=O,A(t)):(e.consume(t),O)}function te(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||L(t)?T(t):(e.consume(t),te)}function ne(e){return e===47||e===62||L(e)?T(e):n(e)}function k(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function A(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),re}function re(t){return R(t)?V(e,ie,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):ie(t)}function ie(t){return e.enter(`htmlTextData`),o(t)}}var un={name:`labelEnd`,tokenize:gn,resolveTo:hn,resolveAll:mn},dn={tokenize:_n},fn={tokenize:vn},pn={tokenize:yn};function mn(e){let t=-1;for(;++t<e.length;){let n=e[t][1];(n.type===`labelImage`||n.type===`labelLink`||n.type===`labelEnd`)&&(e.splice(t+1,n.type===`labelImage`?4:2),n.type=`data`,t++)}return e}function hn(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:Object.assign({},e[a][1].start),end:Object.assign({},e[e.length-1][1].end)},l={type:`label`,start:Object.assign({},e[a][1].start),end:Object.assign({},e[o][1].end)},u={type:`labelText`,start:Object.assign({},e[a+r+2][1].end),end:Object.assign({},e[o-2][1].start)};return s=[[`enter`,c,t],[`enter`,l,t]],s=N(s,e.slice(a+1,a+r+3)),s=N(s,[[`enter`,u,t]]),s=N(s,tt(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=N(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=N(s,e.slice(o+1)),s=N(s,[[`exit`,c,t]]),M(e,a,e.length,s),e}function gn(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(H(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(dn,u,o?u:d)(t):t===91?e.attempt(fn,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(pn,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function _n(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return L(t)?Ht(e,a)(t):a(t)}function a(t){return t===41?u(t):zt(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return L(t)?Ht(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Vt(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return L(t)?Ht(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function vn(e,t,n){let r=this;return i;function i(t){return Bt.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(H(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function yn(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var bn={name:`labelStartImage`,tokenize:xn,resolveAll:un.resolveAll};function xn(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var Sn={name:`labelStartLink`,tokenize:Cn,resolveAll:un.resolveAll};function Cn(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var wn={name:`lineEnding`,tokenize:Tn};function Tn(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),V(e,t,`linePrefix`)}}var En={name:`thematicBreak`,tokenize:Dn};function Dn(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||I(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),R(t)?V(e,s,`whitespace`)(t):s(t))}}var U={name:`list`,tokenize:An,continuation:{tokenize:jn},exit:Nn},On={tokenize:Pn,partial:!0},kn={tokenize:Mn,partial:!0};function An(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:We(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(En,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return We(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(ct,r.interrupt?n:u,e.attempt(On,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return R(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function jn(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(ct,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,V(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!R(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(kn,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,V(e,e.attempt(U,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function Mn(e,t,n){let r=this;return V(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Nn(e){e.exit(this.containerState.type)}function Pn(e,t,n){let r=this;return V(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!R(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Fn={name:`setextUnderline`,tokenize:Ln,resolveTo:In};function In(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end=Object.assign({},e[a][1].end)):e[r][1]=o,e.push([`exit`,o,t]),e}function Ln(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),R(t)?V(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||I(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Rn={tokenize:zn};function zn(e){let t=this,n=e.attempt(ct,r,e.attempt(this.parser.constructs.flowInitial,i,V(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Pt,i)),`linePrefix`)));return n;function r(r){if(r===null)e.consume(r);else return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null)e.consume(r);else return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Bn={resolveAll:Wn()},Vn=Un(`string`),Hn=Un(`text`);function Un(e){return{tokenize:t,resolveAll:Wn(e===`text`?Gn:void 0)};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null)t.consume(e);else return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Wn(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Gn(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{line:r.end.line,column:r.end.column-s,offset:r.end.offset-s,_index:r.start._index+a,_bufferIndex:a?o:r.start._bufferIndex+o},end:Object.assign({},r.end)};r.end=Object.assign({},i.start),r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}function Kn(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),i={},a=[],o=[],s=[],c={consume:v,enter:y,exit:b,attempt:C(x),check:C(S),interrupt:C(S,{interrupt:!0})},l={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:f,now:m,defineSkip:h,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=N(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=tt(a,l.events,l),l.events):[]}function f(e,t){return Jn(p(e),t)}function p(e){return qn(o,e)}function m(){let{line:e,column:t,offset:n,_index:i,_bufferIndex:a}=r;return{line:e,column:t,offset:n,_index:i,_bufferIndex:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){I(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h():e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&M(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{restore:o,from:i};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function qn(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Jn(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}var Yn={};t(Yn,{attentionMarkers:()=>rr,contentInitial:()=>Zn,disable:()=>ir,document:()=>Xn,flow:()=>$n,flowInitial:()=>Qn,insideSpan:()=>nr,string:()=>er,text:()=>tr});var Xn={42:U,43:U,45:U,48:U,49:U,50:U,51:U,52:U,53:U,54:U,55:U,56:U,57:U,62:ut},Zn={91:Ut},Qn={[-2]:wt,[-1]:wt,32:wt},$n={35:Yt,42:En,45:[Fn,En],60:en,61:Fn,95:En,96:xt,126:xt},er={38:vt,92:mt},tr={[-5]:wn,[-4]:wn,[-3]:wn,33:bn,38:vt,42:nt,60:[ot,cn],91:Sn,92:[qt,mt],93:un,95:nt,96:Ot},nr={null:[nt,Bn]},rr={null:[42,95]},ir={null:[]};function ar(e){let t={defined:[],lazy:{},constructs:Re([Yn,...(e||{}).extensions||[]]),content:n(Je),document:n(Xe),flow:n(Rn),string:n(Vn),text:n(Hn)};return t;function n(e){return n;function n(n){return Kn(t,e,n)}}}var or=/[\0\t\n\r]/g;function sr(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+i.toString(a),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(or.lastIndex=u,c=or.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}function cr(e){for(;!Mt(e););return e}function lr(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCharCode(n)}var ur=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function dr(e){return e.replace(ur,fr)}function fr(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return lr(n.slice(t?2:1),t?16:10)}return _t(n)||e}var pr={}.hasOwnProperty,mr=function(e,t,n){return typeof t!=`string`&&(n=t,t=void 0),hr(n)(cr(ar(n).document().write(sr()(e,t,!0))))};function hr(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:s(Te),autolinkProtocol:D,autolinkEmail:D,atxHeading:s(xe),blockQuote:s(ge),characterEscape:D,characterReference:D,codeFenced:s(_e),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:s(_e,c),codeText:s(ve,c),codeTextData:D,data:D,codeFlowValue:D,definition:s(ye),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:s(be),hardBreakEscape:s(Se),hardBreakTrailing:s(Se),htmlFlow:s(Ce,c),htmlFlowData:D,htmlText:s(Ce,c),htmlTextData:D,image:s(we),label:c,link:s(Te),listItem:s(De),listItemValue:m,listOrdered:s(Ee,p),listUnordered:s(Ee),paragraph:s(Oe),reference:ue,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:s(xe),strong:s(ke),thematicBreak:s(je)},exit:{atxHeading:u(),atxHeadingSequence:w,autolink:u(),autolinkEmail:he,autolinkProtocol:me,blockQuote:u(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:fe,characterReferenceMarkerNumeric:fe,characterReferenceValue:pe,codeFenced:u(v),codeFencedFence:_,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:O,codeIndented:u(y),codeText:u(re),codeTextData:O,data:O,definition:u(),definitionDestinationString:C,definitionLabelString:b,definitionTitleString:S,emphasis:u(),hardBreakEscape:u(ne),hardBreakTrailing:u(ne),htmlFlow:u(k),htmlFlowData:O,htmlText:u(A),htmlTextData:O,image:u(j),label:oe,labelText:ae,lineEnding:te,link:u(ie),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:de,resourceDestinationString:se,resourceTitleString:ce,resource:le,setextHeading:u(ee),setextHeadingLineSequence:E,setextHeadingText:T,strong:u(),thematicBreak:u()}};gr(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let n={type:`root`,children:[]},r={stack:[n],tokenStack:[],config:t,enter:l,exit:d,buffer:c,resume:f,setData:a,getData:o},s=[],u=-1;for(;++u<e.length;)(e[u][1].type===`listOrdered`||e[u][1].type===`listUnordered`)&&(e[u][0]===`enter`?s.push(u):u=i(e,s.pop(),u));for(u=-1;++u<e.length;){let n=t[e[u][0]];pr.call(n,e[u][1].type)&&n[e[u][1].type].call(Object.assign({sliceSerialize:e[u][2].sliceSerialize},r),e[u][1])}if(r.tokenStack.length>0){let e=r.tokenStack[r.tokenStack.length-1];(e[1]||vr).call(r,void 0,e[0])}for(n.position={start:W(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:W(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},u=-1;++u<t.transforms.length;)n=t.transforms[u](n)||n;return n}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];if(t[1].type===`listUnordered`||t[1].type===`listOrdered`||t[1].type===`blockQuote`?(t[0]===`enter`?i++:i--,l=void 0):t[1].type===`lineEndingBlank`?t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0):t[1].type===`linePrefix`||t[1].type===`listItemValue`||t[1].type===`listItemMarker`||t[1].type===`listItemPrefix`||t[1].type===`listItemPrefixWhitespace`||(l=void 0),!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}t[1].type===`listItemPrefix`&&(o={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0},e.splice(r,0,[`enter`,o,t[2]]),r++,n++,c=void 0,l=!0)}}return e[t][1]._spread=a,n}function a(e,t){n[e]=t}function o(e){return n[e]}function s(e,t){return n;function n(n){l.call(this,e(n),n),t&&t.call(this,n)}}function c(){this.stack.push({type:`fragment`,children:[]})}function l(e,t,n){return this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:W(t.start)},e}function u(e){return t;function t(t){e&&e.call(this,t),d.call(this,t)}}function d(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||vr).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+x({start:e.start,end:e.end})+`): it’s not open`);return n.position.end=W(e.end),n}function f(){return Ne(this.stack.pop())}function p(){a(`expectingFirstListItemValue`,!0)}function m(e){if(o(`expectingFirstListItemValue`)){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),a(`expectingFirstListItemValue`)}}function h(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function _(){o(`flowCodeInside`)||(this.buffer(),a(`flowCodeInside`,!0))}function v(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),a(`flowCodeInside`)}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function b(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=H(this.sliceSerialize(e)).toLowerCase()}function S(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function C(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function w(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function T(){a(`setextHeadingSlurpLineEnding`,!0)}function E(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).charCodeAt(0)===61?1:2}function ee(){a(`setextHeadingSlurpLineEnding`)}function D(e){let t=this.stack[this.stack.length-1],n=t.children[t.children.length-1];(!n||n.type!==`text`)&&(n=Ae(),n.position={start:W(e.start)},t.children.push(n)),this.stack.push(n)}function O(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=W(e.end)}function te(e){let n=this.stack[this.stack.length-1];if(o(`atHardBreak`)){let t=n.children[n.children.length-1];t.position.end=W(e.end),a(`atHardBreak`)}else!o(`setextHeadingSlurpLineEnding`)&&t.canContainEols.includes(n.type)&&(D.call(this,e),O.call(this,e))}function ne(){a(`atHardBreak`,!0)}function k(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ie(){let e=this.stack[this.stack.length-1];if(o(`inReference`)){let t=o(`referenceType`)||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;a(`referenceType`)}function j(){let e=this.stack[this.stack.length-1];if(o(`inReference`)){let t=o(`referenceType`)||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;a(`referenceType`)}function ae(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=dr(t),n.identifier=H(t).toLowerCase()}function oe(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];a(`inReference`,!0),n.type===`link`?n.children=e.children:n.alt=t}function se(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function ce(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function le(){a(`inReference`)}function ue(){a(`referenceType`,`collapsed`)}function de(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=H(this.sliceSerialize(e)).toLowerCase(),a(`referenceType`,`full`)}function fe(e){a(`characterReferenceType`,e.type)}function pe(e){let t=this.sliceSerialize(e),n=o(`characterReferenceType`),r;n?(r=lr(t,n===`characterReferenceMarkerNumeric`?10:16),a(`characterReferenceType`)):r=_t(t);let i=this.stack.pop();i.value+=r,i.position.end=W(e.end)}function me(e){O.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function he(e){O.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function ge(){return{type:`blockquote`,children:[]}}function _e(){return{type:`code`,lang:null,meta:null,value:``}}function ve(){return{type:`inlineCode`,value:``}}function ye(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function be(){return{type:`emphasis`,children:[]}}function xe(){return{type:`heading`,depth:void 0,children:[]}}function Se(){return{type:`break`}}function Ce(){return{type:`html`,value:``}}function we(){return{type:`image`,title:null,url:``,alt:null}}function Te(){return{type:`link`,title:null,url:``,children:[]}}function Ee(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function De(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Oe(){return{type:`paragraph`,children:[]}}function ke(){return{type:`strong`,children:[]}}function Ae(){return{type:`text`,value:``}}function je(){return{type:`thematicBreak`}}}function W(e){return{line:e.line,column:e.column,offset:e.offset}}function gr(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?gr(e,r):_r(e,r)}}function _r(e,t){let n;for(n in t)if(pr.call(t,n)){if(n===`canContainEols`){let r=t[n];r&&e[n].push(...r)}else if(n===`transforms`){let r=t[n];r&&e[n].push(...r)}else if(n===`enter`||n===`exit`){let r=t[n];r&&Object.assign(e[n],r)}}}function vr(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+x({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+x({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+x({start:t.start,end:t.end})+`) is still open`)}function yr(e){Object.assign(this,{Parser:t=>{let n=this.data(`settings`);return mr(t,Object.assign({},n,e,{extensions:this.data(`micromarkExtensions`)||[],mdastExtensions:this.data(`fromMarkdownExtensions`)||[]}))}})}function br(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function xr(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function Sr(e,t){let n=t.value?t.value+`
`:``,r=t.lang?t.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,i={};r&&(i.className=[`language-`+r]);let a={type:`element`,tagName:`code`,properties:i,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function Cr(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wr(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Tr(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&F(e.charCodeAt(n+1))&&F(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function Er(e,t){let n=String(t.identifier).toUpperCase(),r=Tr(n.toLowerCase()),i=e.footnoteOrder.indexOf(n),a;i===-1?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,a=e.footnoteOrder.length):(e.footnoteCounts[n]++,a=i+1);let o=e.footnoteCounts[n],s={type:`element`,tagName:`a`,properties:{href:`#`+e.clobberPrefix+`fn-`+r,id:e.clobberPrefix+`fnref-`+r+(o>1?`-`+o:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(a)}]};e.patch(t,s);let c={type:`element`,tagName:`sup`,properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)}function Dr(e,t){let n=e.footnoteById,r=1;for(;r in n;)r++;let i=String(r);return n[i]={type:`footnoteDefinition`,identifier:i,children:[{type:`paragraph`,children:t.children}],position:t.position},Er(e,{type:`footnoteReference`,identifier:i,position:t.position})}function Or(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kr(e,t){if(e.dangerous){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}return null}function Ar(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return{type:`text`,value:`![`+t.alt+r};let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function jr(e,t){let n=e.definition(t.identifier);if(!n)return Ar(e,t);let r={src:Tr(n.url||``),alt:t.alt};n.title!==null&&n.title!==void 0&&(r.title=n.title);let i={type:`element`,tagName:`img`,properties:r,children:[]};return e.patch(t,i),e.applyData(t,i)}function Mr(e,t){let n={src:Tr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Nr(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Pr(e,t){let n=e.definition(t.identifier);if(!n)return Ar(e,t);let r={href:Tr(n.url||``)};n.title!==null&&n.title!==void 0&&(r.title=n.title);let i={type:`element`,tagName:`a`,properties:r,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function Fr(e,t){let n={href:Tr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ir(e,t,n){let r=e.all(t),i=n?Lr(n):Rr(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Lr(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Rr(n[r])}return t}function Rr(e){return e.spread??e.children.length>1}function zr(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Br(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Vr(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Hr(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Ur=Kr(`start`),Wr=Kr(`end`);function Gr(e){return{start:Ur(e),end:Wr(e)}}function Kr(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};return{line:n.line||null,column:n.column||null,offset:n.offset>-1?n.offset:null}}}function qr(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Ur(t.children[1]),o=Wr(t.children[t.children.length-1]);a.line&&o.line&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Jr(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(t,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Yr(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xr(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Zr(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Zr(t.slice(i),i>0,!1)),a.join(``)}function Zr(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===9||t===32;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===9||t===32;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Qr(e,t){let n={type:`text`,value:Xr(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function $r(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ei={blockquote:br,break:xr,code:Sr,delete:Cr,emphasis:wr,footnoteReference:Er,footnote:Dr,heading:Or,html:kr,imageReference:jr,image:Mr,inlineCode:Nr,linkReference:Pr,link:Fr,listItem:Ir,list:zr,paragraph:Br,root:Vr,strong:Hr,table:qr,tableCell:Yr,tableRow:Jr,text:Qr,thematicBreak:$r,toml:ti,yaml:ti,definition:ti,footnoteDefinition:ti};function ti(){return null}var ni=function(e){if(e==null)return si;if(typeof e==`string`)return ai(e);if(typeof e==`object`)return Array.isArray(e)?ri(e):ii(e);if(typeof e==`function`)return oi(e);throw Error(`Expected function, string, or object as test`)};function ri(e){let t=[],n=-1;for(;++n<e.length;)t[n]=ni(e[n]);return oi(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].call(this,...e))return!0;return!1}}function ii(e){return oi(t);function t(t){let n;for(n in e)if(t[n]!==e[n])return!1;return!0}}function ai(e){return oi(t);function t(t){return t&&t.type===e}}function oi(e){return t;function t(t,...n){return!!(t&&typeof t==`object`&&`type`in t&&e.call(this,t,...n))}}function si(){return!0}var ci=!0,li=!1,ui=`skip`,di=function(e,t,n,r){typeof t==`function`&&typeof n!=`function`&&(r=n,n=t,t=null);let i=ni(t),a=r?-1:1;o(e,void 0,[])();function o(e,s,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=[],u,d,f;if((!t||i(e,s,c[c.length-1]||null))&&(l=fi(n(e,c)),l[0]===li))return l;if(e.children&&l[0]!==ui)for(d=(r?e.children.length:-1)+a,f=c.concat(e);d>-1&&d<e.children.length;){if(u=o(e.children[d],d,f)(),u[0]===li)return u;d=typeof u[1]==`number`?u[1]:d+a}return l}}};function fi(e){return Array.isArray(e)?e:typeof e==`number`?[ci,e]:[e]}var pi=function(e,t,n,r){typeof t==`function`&&typeof n!=`function`&&(r=n,n=t,t=null),di(e,t,i,r);function i(e,t){let r=t[t.length-1];return n(e,r?r.children.indexOf(e):null,r)}};function mi(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}var hi={}.hasOwnProperty;function gi(e){let t=Object.create(null);if(!e||!e.type)throw Error(`mdast-util-definitions expected node`);return pi(e,`definition`,e=>{let n=_i(e.identifier);n&&!hi.call(t,n)&&(t[n]=e)}),n;function n(e){let n=_i(e);return n&&hi.call(t,n)?t[n]:null}}function _i(e){return String(e||``).toUpperCase()}var vi={}.hasOwnProperty;function yi(e,t){let n=t||{},i=n.allowDangerousHtml||!1,a={};return s.dangerous=i,s.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?`user-content-`:n.clobberPrefix,s.footnoteLabel=n.footnoteLabel||`Footnotes`,s.footnoteLabelTagName=n.footnoteLabelTagName||`h2`,s.footnoteLabelProperties=n.footnoteLabelProperties||{className:[`sr-only`]},s.footnoteBackLabel=n.footnoteBackLabel||`Back to content`,s.unknownHandler=n.unknownHandler,s.passThrough=n.passThrough,s.handlers=r(r({},ei),n.handlers),s.definition=gi(e),s.footnoteById=a,s.footnoteOrder=[],s.footnoteCounts={},s.patch=bi,s.applyData=xi,s.one=c,s.all=l,s.wrap=Ti,s.augment=o,pi(e,`footnoteDefinition`,e=>{let t=String(e.identifier).toUpperCase();vi.call(a,t)||(a[t]=e)}),s;function o(e,t){if(e&&`data`in e&&e.data){let n=e.data;n.hName&&(t.type!==`element`&&(t={type:`element`,tagName:``,properties:{},children:[]}),t.tagName=n.hName),t.type===`element`&&n.hProperties&&(t.properties=r(r({},t.properties),n.hProperties)),`children`in t&&t.children&&n.hChildren&&(t.children=n.hChildren)}if(e){let n=`type`in e?e:{position:e};mi(n)||(t.position={start:Ur(n),end:Wr(n)})}return t}function s(e,t,n,r){return Array.isArray(n)&&(r=n,n={}),o(e,{type:`element`,tagName:t,properties:n||{},children:r||[]})}function c(e,t){return Si(s,e,t)}function l(e){return Ci(s,e)}}function bi(e,t){e.position&&(t.position=Gr(e))}function xi(e,t){let n=t;if(e&&e.data){let t=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:[]}),n.type===`element`&&a&&(n.properties=r(r({},n.properties),a)),`children`in n&&n.children&&i!=null&&(n.children=i)}return n}function Si(e,t,n){let i=t&&t.type;if(!i)throw Error("Expected node, got `"+t+"`");return vi.call(e.handlers,i)?e.handlers[i](e,t,n):e.passThrough&&e.passThrough.includes(i)?`children`in t?o(r({},t),{children:Ci(e,t)}):t:e.unknownHandler?e.unknownHandler(e,t,n):wi(e,t)}function Ci(e,t){let n=[];if(`children`in t){let r=t.children,i=-1;for(;++i<r.length;){let a=Si(e,r[i],t);if(a){if(i&&r[i-1].type===`break`&&(!Array.isArray(a)&&a.type===`text`&&(a.value=a.value.replace(/^\s+/,``)),!Array.isArray(a)&&a.type===`element`)){let e=a.children[0];e&&e.type===`text`&&(e.value=e.value.replace(/^\s+/,``))}Array.isArray(a)?n.push(...a):n.push(a)}}}return n}function wi(e,t){let n=t.data||{},r=`value`in t&&!(vi.call(n,`hProperties`)||vi.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:Ci(e,t)};return e.patch(t,r),e.applyData(t,r)}function Ti(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Ei(e){let t=[],n=-1;for(;++n<e.footnoteOrder.length;){let r=e.footnoteById[e.footnoteOrder[n]];if(!r)continue;let i=e.all(r),a=String(r.identifier).toUpperCase(),o=Tr(a.toLowerCase()),s=0,c=[];for(;++s<=e.footnoteCounts[a];){let t={type:`element`,tagName:`a`,properties:{href:`#`+e.clobberPrefix+`fnref-`+o+(s>1?`-`+s:``),dataFootnoteBackref:!0,className:[`data-footnote-backref`],ariaLabel:e.footnoteBackLabel},children:[{type:`text`,value:`↩`}]};s>1&&t.children.push({type:`element`,tagName:`sup`,children:[{type:`text`,value:String(s)}]}),c.length>0&&c.push({type:`text`,value:` `}),c.push(t)}let l=i[i.length-1];if(l&&l.type===`element`&&l.tagName===`p`){let e=l.children[l.children.length-1];e&&e.type===`text`?e.value+=` `:l.children.push({type:`text`,value:` `}),l.children.push(...c)}else i.push(...c);let u={type:`element`,tagName:`li`,properties:{id:e.clobberPrefix+`fn-`+o},children:e.wrap(i,!0)};e.patch(r,u),t.push(u)}if(t.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:e.footnoteLabelTagName,properties:o(r({},JSON.parse(JSON.stringify(e.footnoteLabelProperties))),{id:`footnote-label`}),children:[{type:`text`,value:e.footnoteLabel}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(t,!0)},{type:`text`,value:`
`}]}}function Di(e,t){let n=yi(e,t),r=n.one(e,null),i=Ei(n);return i&&r.children.push({type:`text`,value:`
`},i),Array.isArray(r)?{type:`root`,children:r}:r}var Oi=function(e,t){return e&&`run`in e?ki(e,t):Ai(e||t)};function ki(e,t){return(n,r,i)=>{e.run(Di(n,t),r,e=>{i(e)})}}function Ai(e){return t=>Di(t,e)}var G=n(d(),1),ji=class{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}};ji.prototype.property={},ji.prototype.normal={},ji.prototype.space=null;function Mi(e,t){let n={},r={},i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new ji(n,r,t)}function Ni(e){return e.toLowerCase()}var K=class{constructor(e,t){this.property=e,this.attribute=t}};K.prototype.space=null,K.prototype.boolean=!1,K.prototype.booleanish=!1,K.prototype.overloadedBoolean=!1,K.prototype.number=!1,K.prototype.commaSeparated=!1,K.prototype.spaceSeparated=!1,K.prototype.commaOrSpaceSeparated=!1,K.prototype.mustUseProperty=!1,K.prototype.defined=!1;var Pi={};t(Pi,{boolean:()=>q,booleanish:()=>J,commaOrSpaceSeparated:()=>Z,commaSeparated:()=>Li,number:()=>Y,overloadedBoolean:()=>Ii,spaceSeparated:()=>X});var Fi=0,q=Ri(),J=Ri(),Ii=Ri(),Y=Ri(),X=Ri(),Li=Ri(),Z=Ri();function Ri(){return 2**++Fi}var zi=Object.keys(Pi),Bi=class extends K{constructor(e,t,n,r){let i=-1;if(super(e,t),Vi(this,`space`,r),typeof n==`number`)for(;++i<zi.length;){let e=zi[i];Vi(this,zi[i],(n&Pi[e])===Pi[e])}}};Bi.prototype.defined=!0;function Vi(e,t,n){n&&(e[t]=n)}var Hi={}.hasOwnProperty;function Ui(e){let t={},n={},r;for(r in e.properties)if(Hi.call(e.properties,r)){let i=e.properties[r],a=new Bi(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Ni(r)]=r,n[Ni(a.attribute)]=r}return new ji(t,n,e.space)}var Wi=Ui({space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Gi=Ui({space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Ki(e,t){return t in e?e[t]:t}function qi(e,t){return Ki(e,t.toLowerCase())}var Ji=Ui({space:`xmlns`,attributes:{xmlnsxlink:`xmlns:xlink`},transform:qi,properties:{xmlns:null,xmlnsXLink:null}}),Yi=Ui({transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:J,ariaAutoComplete:null,ariaBusy:J,ariaChecked:J,ariaColCount:Y,ariaColIndex:Y,ariaColSpan:Y,ariaControls:X,ariaCurrent:null,ariaDescribedBy:X,ariaDetails:null,ariaDisabled:J,ariaDropEffect:X,ariaErrorMessage:null,ariaExpanded:J,ariaFlowTo:X,ariaGrabbed:J,ariaHasPopup:null,ariaHidden:J,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:X,ariaLevel:Y,ariaLive:null,ariaModal:J,ariaMultiLine:J,ariaMultiSelectable:J,ariaOrientation:null,ariaOwns:X,ariaPlaceholder:null,ariaPosInSet:Y,ariaPressed:J,ariaReadOnly:J,ariaRelevant:null,ariaRequired:J,ariaRoleDescription:X,ariaRowCount:Y,ariaRowIndex:Y,ariaRowSpan:Y,ariaSelected:J,ariaSetSize:Y,ariaSort:null,ariaValueMax:Y,ariaValueMin:Y,ariaValueNow:Y,ariaValueText:null,role:null}}),Xi=Ui({space:`html`,attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},transform:qi,mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:Li,acceptCharset:X,accessKey:X,action:null,allow:null,allowFullScreen:q,allowPaymentRequest:q,allowUserMedia:q,alt:null,as:null,async:q,autoCapitalize:null,autoComplete:X,autoFocus:q,autoPlay:q,capture:q,charSet:null,checked:q,cite:null,className:X,cols:Y,colSpan:null,content:null,contentEditable:J,controls:q,controlsList:X,coords:Y|Li,crossOrigin:null,data:null,dateTime:null,decoding:null,default:q,defer:q,dir:null,dirName:null,disabled:q,download:Ii,draggable:J,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:q,formTarget:null,headers:X,height:Y,hidden:q,high:Y,href:null,hrefLang:null,htmlFor:X,httpEquiv:X,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:q,itemId:null,itemProp:X,itemRef:X,itemScope:q,itemType:X,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:q,low:Y,manifest:null,max:null,maxLength:Y,media:null,method:null,min:null,minLength:Y,multiple:q,muted:q,name:null,nonce:null,noModule:q,noValidate:q,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:q,optimum:Y,pattern:null,ping:X,placeholder:null,playsInline:q,poster:null,preload:null,readOnly:q,referrerPolicy:null,rel:X,required:q,reversed:q,rows:Y,rowSpan:Y,sandbox:X,scope:null,scoped:q,seamless:q,selected:q,shape:null,size:Y,sizes:null,slot:null,span:Y,spellCheck:J,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Y,step:null,style:null,tabIndex:Y,target:null,title:null,translate:null,type:null,typeMustMatch:q,useMap:null,value:J,width:Y,wrap:null,align:null,aLink:null,archive:X,axis:null,background:null,bgColor:null,border:Y,borderColor:null,bottomMargin:Y,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:q,declare:q,event:null,face:null,frame:null,frameBorder:null,hSpace:Y,leftMargin:Y,link:null,longDesc:null,lowSrc:null,marginHeight:Y,marginWidth:Y,noResize:q,noHref:q,noShade:q,noWrap:q,object:null,profile:null,prompt:null,rev:null,rightMargin:Y,rules:null,scheme:null,scrolling:J,standby:null,summary:null,text:null,topMargin:Y,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Y,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:q,disableRemotePlayback:q,prefix:null,property:null,results:Y,security:null,unselectable:null}}),Zi=Ui({space:`svg`,attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},transform:Ki,properties:{about:Z,accentHeight:Y,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Y,amplitude:Y,arabicForm:null,ascent:Y,attributeName:null,attributeType:null,azimuth:Y,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Y,by:null,calcMode:null,capHeight:Y,className:X,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Y,diffuseConstant:Y,direction:null,display:null,dur:null,divisor:Y,dominantBaseline:null,download:q,dx:null,dy:null,edgeMode:null,editable:null,elevation:Y,enableBackground:null,end:null,event:null,exponent:Y,externalResourcesRequired:null,fill:null,fillOpacity:Y,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Li,g2:Li,glyphName:Li,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Y,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Y,horizOriginX:Y,horizOriginY:Y,id:null,ideographic:Y,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Y,k:Y,k1:Y,k2:Y,k3:Y,k4:Y,kernelMatrix:Z,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Y,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Y,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Y,overlineThickness:Y,paintOrder:null,panose1:null,path:null,pathLength:Y,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:X,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Y,pointsAtY:Y,pointsAtZ:Y,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Z,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Z,rev:Z,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Z,requiredFeatures:Z,requiredFonts:Z,requiredFormats:Z,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Y,specularExponent:Y,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Y,strikethroughThickness:Y,string:null,stroke:null,strokeDashArray:Z,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Y,strokeOpacity:Y,strokeWidth:null,style:null,surfaceScale:Y,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Z,tabIndex:Y,tableValues:null,target:null,targetX:Y,targetY:Y,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Z,to:null,transform:null,u1:null,u2:null,underlinePosition:Y,underlineThickness:Y,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Y,values:null,vAlphabetic:Y,vMathematical:Y,vectorEffect:null,vHanging:Y,vIdeographic:Y,version:null,vertAdvY:Y,vertOriginX:Y,vertOriginY:Y,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Y,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Qi=/^data[-\w.:]+$/i,$i=/-[a-z]/g,ea=/[A-Z]/g;function ta(e,t){let n=Ni(t),r=t,i=K;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&Qi.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace($i,ra);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!$i.test(e)){let n=e.replace(ea,na);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=Bi}return new i(r,t)}function na(e){return`-`+e.toLowerCase()}function ra(e){return e.charAt(1).toUpperCase()}var ia={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},aa=Mi([Gi,Wi,Ji,Yi,Xi],`html`),oa=Mi([Gi,Wi,Ji,Yi,Zi],`svg`);function sa(e){if(e.allowedElements&&e.disallowedElements)throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{pi(t,`element`,(t,n,r)=>{let i=r,a;if(e.allowedElements?a=!e.allowedElements.includes(t.tagName):e.disallowedElements&&(a=e.disallowedElements.includes(t.tagName)),!a&&e.allowElement&&typeof n==`number`&&(a=!e.allowElement(t,n,i)),a&&typeof n==`number`)return e.unwrapDisallowed&&t.children?i.children.splice(n,1,...t.children):i.children.splice(n,1),n})}}var ca=n(e(),1),la=n(p(),1);function ua(e){let t=e&&typeof e==`object`&&e.type===`text`?e.value||``:e;return typeof t==`string`&&t.replace(/[ \t\n\f\r]/g,``)===``}function da(e){return e.join(` `).trim()}function fa(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var pa=n(h(),1).default,ma={}.hasOwnProperty,ha=new Set([`table`,`thead`,`tbody`,`tfoot`,`tr`]);function ga(e,t){let n=[],r=-1,i;for(;++r<t.children.length;)i=t.children[r],i.type===`element`?n.push(_a(e,i,r,t)):i.type===`text`?(t.type!==`element`||!ha.has(t.tagName)||!ua(i))&&n.push(i.value):i.type===`raw`&&!e.options.skipHtml&&n.push(i.value);return n}function _a(e,t,n,r){let i=e.options,a=i.transformLinkUri===void 0?v:i.transformLinkUri,o=e.schema,s=t.tagName,c={},l=o,u;if(o.space===`html`&&s===`svg`&&(l=oa,e.schema=l),t.properties)for(u in t.properties)ma.call(t.properties,u)&&ba(c,u,t.properties[u],e);(s===`ol`||s===`ul`)&&e.listDepth++;let d=ga(e,t);(s===`ol`||s===`ul`)&&e.listDepth--,e.schema=o;let f=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},p=i.components&&ma.call(i.components,s)?i.components[s]:s,m=typeof p==`string`||p===ca.default.Fragment;if(!la.default.isValidElementType(p))throw TypeError(`Component for name \`${s}\` not defined or is not renderable`);if(c.key=n,s===`a`&&i.linkTarget&&(c.target=typeof i.linkTarget==`function`?i.linkTarget(String(c.href||``),t.children,typeof c.title==`string`?c.title:null):i.linkTarget),s===`a`&&a&&(c.href=a(String(c.href||``),t.children,typeof c.title==`string`?c.title:null)),!m&&s===`code`&&r.type===`element`&&r.tagName!==`pre`&&(c.inline=!0),!m&&(s===`h1`||s===`h2`||s===`h3`||s===`h4`||s===`h5`||s===`h6`)&&(c.level=Number.parseInt(s.charAt(1),10)),s===`img`&&i.transformImageUri&&(c.src=i.transformImageUri(String(c.src||``),String(c.alt||``),typeof c.title==`string`?c.title:null)),!m&&s===`li`&&r.type===`element`){let e=va(t);c.checked=e&&e.properties?!!e.properties.checked:null,c.index=ya(r,t),c.ordered=r.tagName===`ol`}return!m&&(s===`ol`||s===`ul`)&&(c.ordered=s===`ol`,c.depth=e.listDepth),(s===`td`||s===`th`)&&(c.align&&(c.style||={},c.style.textAlign=c.align,delete c.align),m||(c.isHeader=s===`th`)),!m&&s===`tr`&&r.type===`element`&&(c.isHeader=r.tagName===`thead`),i.sourcePos&&(c[`data-sourcepos`]=Ca(f)),!m&&i.rawSourcePos&&(c.sourcePosition=t.position),!m&&i.includeElementIndex&&(c.index=ya(r,t),c.siblingCount=ya(r)),m||(c.node=t),d.length>0?ca.default.createElement(p,c,d):ca.default.createElement(p,c)}function va(e){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n.type===`element`&&n.tagName===`input`)return n}return null}function ya(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)e.children[n].type===`element`&&r++;return r}function ba(e,t,n,r){let i=ta(r.schema,t),a=n;a==null||a!==a||(Array.isArray(a)&&(a=i.commaSeparated?fa(a):da(a)),i.property===`style`&&typeof a==`string`&&(a=xa(a)),i.space&&i.property?e[ma.call(ia,i.property)?ia[i.property]:i.property]=a:i.attribute&&(e[i.attribute]=a))}function xa(e){let t={};try{pa(e,n)}catch{}return t;function n(e,n){let r=e.slice(0,4)===`-ms-`?`ms-${e.slice(4)}`:e;t[r.replace(/-([a-z])/g,Sa)]=n}}function Sa(e,t){return t.toUpperCase()}function Ca(e){return[e.start.line,`:`,e.start.column,`-`,e.end.line,`:`,e.end.column].map(String).join(``)}var wa={}.hasOwnProperty,Ta=`https://github.com/remarkjs/react-markdown/blob/main/changelog.md`,Ea={plugins:{to:`remarkPlugins`,id:`change-plugins-to-remarkplugins`},renderers:{to:`components`,id:`change-renderers-to-components`},astPlugins:{id:`remove-buggy-html-in-markdown-parser`},allowDangerousHtml:{id:`remove-buggy-html-in-markdown-parser`},escapeHtml:{id:`remove-buggy-html-in-markdown-parser`},source:{to:`children`,id:`change-source-to-children`},allowNode:{to:`allowElement`,id:`replace-allownode-allowedtypes-and-disallowedtypes`},allowedTypes:{to:`allowedElements`,id:`replace-allownode-allowedtypes-and-disallowedtypes`},disallowedTypes:{to:`disallowedElements`,id:`replace-allownode-allowedtypes-and-disallowedtypes`},includeNodeIndex:{to:`includeElementIndex`,id:`change-includenodeindex-to-includeelementindex`}};function Da(e){for(let t in Ea)if(wa.call(Ea,t)&&wa.call(e,t)){let e=Ea[t];console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:`remove`} \`${t}\` (see <${Ta}#${e.id}> for more info)`),delete Ea[t]}let t=ye().use(yr).use(e.remarkPlugins||[]).use(Oi,o(r({},e.remarkRehypeOptions),{allowDangerousHtml:!0})).use(e.rehypePlugins||[]).use(sa,e),n=new ce;typeof e.children==`string`?n.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);let i=t.runSync(t.parse(n),n);if(i.type!==`root`)throw TypeError("Expected a `root` node");let a=y.default.createElement(y.default.Fragment,{},ga({options:e,schema:aa,listDepth:0},i));return e.className&&(a=y.default.createElement(`div`,{className:e.className},a)),a}Da.propTypes={children:G.default.string,className:G.default.string,allowElement:G.default.func,allowedElements:G.default.arrayOf(G.default.string),disallowedElements:G.default.arrayOf(G.default.string),unwrapDisallowed:G.default.bool,remarkPlugins:G.default.arrayOf(G.default.oneOfType([G.default.object,G.default.func,G.default.arrayOf(G.default.oneOfType([G.default.bool,G.default.string,G.default.object,G.default.func,G.default.arrayOf(G.default.any)]))])),rehypePlugins:G.default.arrayOf(G.default.oneOfType([G.default.object,G.default.func,G.default.arrayOf(G.default.oneOfType([G.default.bool,G.default.string,G.default.object,G.default.func,G.default.arrayOf(G.default.any)]))])),sourcePos:G.default.bool,rawSourcePos:G.default.bool,skipHtml:G.default.bool,includeElementIndex:G.default.bool,transformLinkUri:G.default.oneOfType([G.default.func,G.default.bool]),linkTarget:G.default.oneOfType([G.default.func,G.default.string]),transformImageUri:G.default.func,components:G.default.object};for(var Oa=(0,g.default)(Da)`
  ${`
  color-scheme: light;
  --color-prettylights-syntax-comment: #6e7781;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-entity: #8250df;
  --color-prettylights-syntax-storage-modifier-import: #24292f;
  --color-prettylights-syntax-entity-tag: #116329;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #24292f;
  --color-prettylights-syntax-markup-bold: #24292f;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #eaeef2;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
  --color-fg-default: #24292f;
  --color-fg-muted: #57606a;
  --color-fg-subtle: #6e7781;
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-border-muted: hsla(210, 18%, 87%, 1);
  --color-neutral-muted: rgba(175, 184, 193, 0.2);
  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-attention-subtle: #fff8c5;
  --color-danger-fg: #cf222e;
`}
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;

  .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }
  h1:hover .anchor .octicon-link:before,
  h2:hover .anchor .octicon-link:before,
  h3:hover .anchor .octicon-link:before,
  h4:hover .anchor .octicon-link:before,
  h5:hover .anchor .octicon-link:before,
  h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: ' ';
    display: inline-block;
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  }

  details,
  figcaption,
  figure {
    display: block;
  }

  summary {
    display: list-item;
  }

  [hidden] {
    display: none !important;
  }

  a {
    background-color: transparent;
    color: var(--color-accent-fg);
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  dfn {
    font-style: italic;
  }

  h1 {
    margin: 0.67em 0;
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-fg-default);
  }

  small {
    font-size: 90%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default);
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid var(--color-border-muted);
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0;
  }

  input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  ::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1;
  }

  hr::before {
    display: table;
    content: '';
  }

  hr::after {
    display: table;
    clear: both;
    content: '';
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  td,
  th {
    padding: 0;
  }

  details summary {
    cursor: pointer;
  }

  details:not([open]) > *:not(summary) {
    display: none !important;
  }

  a:focus,
  [role='button']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  a:focus:not(:focus-visible),
  [role='button']:focus:not(:focus-visible),
  input[type='radio']:focus:not(:focus-visible),
  input[type='checkbox']:focus:not(:focus-visible) {
    outline: solid 1px transparent;
  }

  a:focus-visible,
  [role='button']:focus-visible,
  input[type='radio']:focus-visible,
  input[type='checkbox']:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  a:not([class]):focus,
  a:not([class]):focus-visible,
  input[type='radio']:focus,
  input[type='radio']:focus-visible,
  input[type='checkbox']:focus,
  input[type='checkbox']:focus-visible {
    outline-offset: 0;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-neutral-muted);
    border-bottom-color: var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 1.25;
  }

  h2 {
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  h3 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1.25em;
  }

  h4 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1em;
  }

  h5 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.875em;
  }

  h6 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.85em;
    color: var(--color-fg-muted);
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--color-fg-muted);
    border-left: 0.25em solid var(--color-border-default);
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  tt,
  code,
  samp {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
  }

  .octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body::before {
    display: table;
    content: '';
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body > *:first-child {
    margin-top: 0 !important;
  }

  .markdown-body > *:last-child {
    margin-bottom: 0 !important;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .absent {
    color: var(--color-danger-fg);
  }

  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .anchor:focus {
    outline: none;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    color: var(--color-fg-default);
    vertical-align: middle;
    visibility: hidden;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  h1 tt,
  h1 code,
  h2 tt,
  h2 code,
  h3 tt,
  h3 code,
  h4 tt,
  h4 code,
  h5 tt,
  h5 code,
  h6 tt,
  h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  summary h1,
  summary h2,
  summary h3,
  summary h4,
  summary h5,
  summary h6 {
    display: inline-block;
  }

  summary h1 .anchor,
  summary h2 .anchor,
  summary h3 .anchor,
  summary h4 .anchor,
  summary h5 .anchor,
  summary h6 .anchor {
    margin-left: -40px;
  }

  summary h1,
  summary h2 {
    padding-bottom: 0;
    border-bottom: 0;
  }

  ul.no-list,
  ol.no-list {
    padding: 0;
    list-style-type: none;
  }

  ol[type='a'] {
    list-style-type: lower-alpha;
  }

  ol[type='A'] {
    list-style-type: upper-alpha;
  }

  ol[type='i'] {
    list-style-type: lower-roman;
  }

  ol[type='I'] {
    list-style-type: upper-roman;
  }

  ol[type='1'] {
    list-style-type: decimal;
  }

  div > ol:not([type]) {
    list-style-type: decimal;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: var(--base-text-weight-semibold, 600);
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  table th {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default);
  }

  table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted);
  }

  table tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle);
  }

  table img {
    background-color: transparent;
  }

  img[align='right'] {
    padding-left: 20px;
  }

  img[align='left'] {
    padding-right: 20px;
  }

  .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid var(--color-border-default);
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: var(--color-fg-default);
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
  }

  span.float-right > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right;
  }

  code,
  tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: var(--color-neutral-muted);
    border-radius: 6px;
  }

  code br,
  tt br {
    display: none;
  }

  del code {
    text-decoration: inherit;
  }

  samp {
    font-size: 85%;
  }

  pre code {
    font-size: 100%;
  }

  pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .highlight {
    margin-bottom: 16px;
  }

  .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .highlight pre,
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: var(--color-canvas-subtle);
    border-radius: 6px;
  }

  pre code,
  pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .csv-data td,
  .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: 12px;
    line-height: 1;
    text-align: left;
    white-space: nowrap;
  }

  .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: var(--color-canvas-default);
    border: 0;
  }

  .csv-data tr {
    border-top: 0;
  }

  .csv-data th {
    font-weight: var(--base-text-weight-semibold, 600);
    background: var(--color-canvas-subtle);
    border-top: 0;
  }

  [data-footnote-ref]::before {
    content: '[';
  }

  [data-footnote-ref]::after {
    content: ']';
  }

  .footnotes {
    font-size: 12px;
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default);
  }

  .footnotes ol {
    padding-left: 16px;
  }

  .footnotes ol ul {
    display: inline-block;
    padding-left: 16px;
    margin-top: 16px;
  }

  .footnotes li {
    position: relative;
  }

  .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: '';
    border: 2px solid var(--color-accent-emphasis);
    border-radius: 6px;
  }

  .footnotes li:target {
    color: var(--color-fg-default);
  }

  .footnotes .data-footnote-backref g-emoji {
    font-family: monospace;
  }

  .pl-c {
    color: var(--color-prettylights-syntax-comment);
  }

  .pl-c1,
  .pl-s .pl-v {
    color: var(--color-prettylights-syntax-constant);
  }

  .pl-e,
  .pl-en {
    color: var(--color-prettylights-syntax-entity);
  }

  .pl-smi,
  .pl-s .pl-s1 {
    color: var(--color-prettylights-syntax-storage-modifier-import);
  }

  .pl-ent {
    color: var(--color-prettylights-syntax-entity-tag);
  }

  .pl-k {
    color: var(--color-prettylights-syntax-keyword);
  }

  .pl-s,
  .pl-pds,
  .pl-s .pl-pse .pl-s1,
  .pl-sr,
  .pl-sr .pl-cce,
  .pl-sr .pl-sre,
  .pl-sr .pl-sra {
    color: var(--color-prettylights-syntax-string);
  }

  .pl-v,
  .pl-smw {
    color: var(--color-prettylights-syntax-variable);
  }

  .pl-bu {
    color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
  }

  .pl-ii {
    color: var(--color-prettylights-syntax-invalid-illegal-text);
    background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
  }

  .pl-c2 {
    color: var(--color-prettylights-syntax-carriage-return-text);
    background-color: var(--color-prettylights-syntax-carriage-return-bg);
  }

  .pl-sr .pl-cce {
    font-weight: bold;
    color: var(--color-prettylights-syntax-string-regexp);
  }

  .pl-ml {
    color: var(--color-prettylights-syntax-markup-list);
  }

  .pl-mh,
  .pl-mh .pl-en,
  .pl-ms {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-heading);
  }

  .pl-mi {
    font-style: italic;
    color: var(--color-prettylights-syntax-markup-italic);
  }

  .pl-mb {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-bold);
  }

  .pl-md {
    color: var(--color-prettylights-syntax-markup-deleted-text);
    background-color: var(--color-prettylights-syntax-markup-deleted-bg);
  }

  .pl-mi1 {
    color: var(--color-prettylights-syntax-markup-inserted-text);
    background-color: var(--color-prettylights-syntax-markup-inserted-bg);
  }

  .pl-mc {
    color: var(--color-prettylights-syntax-markup-changed-text);
    background-color: var(--color-prettylights-syntax-markup-changed-bg);
  }

  .pl-mi2 {
    color: var(--color-prettylights-syntax-markup-ignored-text);
    background-color: var(--color-prettylights-syntax-markup-ignored-bg);
  }

  .pl-mdr {
    font-weight: bold;
    color: var(--color-prettylights-syntax-meta-diff-range);
  }

  .pl-ba {
    color: var(--color-prettylights-syntax-brackethighlighter-angle);
  }

  .pl-sg {
    color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
  }

  .pl-corl {
    text-decoration: underline;
    color: var(--color-prettylights-syntax-constant-other-reference-link);
  }

  g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
    font-style: normal !important;
    font-weight: var(--base-text-weight-normal, 400);
    line-height: 1;
    vertical-align: -0.075em;
  }

  g-emoji img {
    width: 1em;
    height: 1em;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item label {
    font-weight: var(--base-text-weight-normal, 400);
  }

  .task-list-item.enabled label {
    cursor: pointer;
  }

  .task-list-item + .task-list-item {
    margin-top: 4px;
  }

  .task-list-item .handle {
    display: none;
  }

  .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.4em;
    vertical-align: middle;
  }

  .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }

  .contains-task-list {
    position: relative;
  }

  .contains-task-list:hover .task-list-item-convert-container,
  .contains-task-list:focus-within .task-list-item-convert-container {
    display: block;
    width: auto;
    height: 24px;
    overflow: visible;
    clip: auto;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }
`,ka={tokenize:Va,partial:!0},Aa={tokenize:Ha,partial:!0},ja={tokenize:Ua,partial:!0},Ma={tokenize:Wa,partial:!0},Na={tokenize:Ga,partial:!0},Pa={tokenize:za,previous:Ka},Fa={tokenize:Ba,previous:qa},Q={tokenize:Ra,previous:Ja},$={},Ia={text:$},La=48;La<123;)$[La]=Q,La++,La===58?La=65:La===91&&(La=97);$[43]=Q,$[45]=Q,$[46]=Q,$[95]=Q,$[72]=[Q,Fa],$[104]=[Q,Fa],$[87]=[Q,Pa],$[119]=[Q,Pa];function Ra(e,t,n){let r=this,i,a;return o;function o(t){return!Ya(t)||!Ja.call(r,r.previous)||Xa(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return Ya(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(Na,u,l)(t):t===45||t===95||F(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&P(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function za(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!Ka.call(r,r.previous)||Xa(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(ka,e.attempt(Aa,e.attempt(ja,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function Ba(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&qa.call(r,r.previous)&&!Xa(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(P(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||Ue(t)||L(t)||z(t)||qe(t)?n(t):e.attempt(Aa,e.attempt(ja,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function Va(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Ha(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(Ma,c,s)(t):t===null||L(t)||z(t)||t!==45&&qe(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function Ua(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Ma,t,a)(o):o===null||L(o)||z(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Wa(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||L(o)||z(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||L(e)||z(e)?t(e):r(e)}function a(e){return P(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):P(t)?(e.consume(t),o):n(t)}}function Ga(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return F(e)?n(e):t(e)}}function Ka(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||L(e)}function qa(e){return!P(e)}function Ja(e){return!(e===47||Ya(e))}function Ya(e){return e===43||e===45||e===46||e===95||F(e)}function Xa(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Za={tokenize:ao,partial:!0};function Qa(){return{document:{91:{tokenize:no,continuation:{tokenize:ro},exit:io}},text:{91:{tokenize:to},93:{add:`after`,tokenize:$a,resolveTo:eo}}}}function $a(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=H(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function eo(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function to(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||L(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(H(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return L(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function no(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||L(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=H(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return L(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),V(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function ro(e,t,n){return e.check(ct,t,e.attempt(Za,t,n))}function io(e){e.exit(`gfmFootnoteDefinition`)}function ao(e,t,n){let r=this;return V(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function oo(e){let t=(e||{}).singleTilde,n={tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&M(o,o.length,0,tt(s,e.slice(r+1,n),t)),M(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),M(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=et(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=et(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var so=class{constructor(){this.map=[]}add(e,t,n){co(this,e,t,n)}consume(e){if(this.map.sort((e,t)=>e[0]-t[0]),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1])),n.push(this.map[t][2]),e.length=this.map[t][0];n.push([...e]),e.length=0;let r=n.pop();for(;r;)e.push(...r),r=n.pop();this.map.length=0}};function co(e,t,n,r){let i=0;if(n!==0||r.length!==0){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function lo(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}var uo={flow:{null:{tokenize:fo,resolveAll:po}}};function fo(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124||(o=!0,a+=1),u(e)}function u(t){return t===null?n(t):I(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):R(t)?V(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||L(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,R(t)?V(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return R(t)?V(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||I(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return R(t)?V(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||I(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||I(n)?(e.exit(`tableRow`),t(n)):R(n)?V(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||L(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function po(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new so;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(ho(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=mo(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=mo(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=mo(f,t,o,i,n,d)):(o[0]=o[1],d=mo(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&ho(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=lo(t.events,n))}return e}function mo(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},go(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=go(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=go(t.events,n[2]),a=go(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},go(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function ho(e,t,n,r,i){let a=[],o=go(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function go(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var _o={text:{91:{tokenize:vo}}};function vo(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return L(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return I(r)?t(r):R(r)?e.check({tokenize:yo},t,n)(r):n(r)}}function yo(e,t,n){return V(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function bo(e){return Re([Ia,Qa(),oo(e),uo,_o])}function xo(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function So(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}var Co={}.hasOwnProperty,wo=function(e,t,n,r){let i,a;typeof t==`string`||t instanceof RegExp?(a=[[t,n]],i=r):(a=t,i=n),i||={};let o=ni(i.ignore||[]),s=To(a),c=-1;for(;++c<s.length;)di(e,`text`,l);return e;function l(e,t){let n=-1,r;for(;++n<t.length;){let e=t[n];if(o(e,r?r.children.indexOf(e):void 0,r))return;r=e}if(r)return u(e,t)}function u(e,t){let n=t[t.length-1],r=s[c][0],i=s[c][1],a=0,o=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,o={index:d.index,input:d.input,stack:[...t,e]},s=i(...d,o);if(typeof s==`string`&&(s=s.length>0?{type:`text`,value:s}:void 0),s!==!1&&(a!==n&&u.push({type:`text`,value:e.value.slice(a,n)}),Array.isArray(s)?u.push(...s):s&&u.push(s),a=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(a<e.value.length&&u.push({type:`text`,value:e.value.slice(a)}),n.children.splice(o,1,...u)):u=[e],o+u.length}};function To(e){let t=[];if(typeof e!=`object`)throw TypeError(`Expected array or object as schema`);if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([Eo(e[n][0]),Do(e[n][1])])}else{let n;for(n in e)Co.call(e,n)&&t.push([Eo(n),Do(e[n])])}return t}function Eo(e){return typeof e==`string`?new RegExp(So(e),`g`):e}function Do(e){return typeof e==`function`?e:()=>e}var Oo=`phrasing`,ko=[`autolink`,`link`,`image`,`label`],Ao={transforms:[Ro],enter:{literalAutolink:Mo,literalAutolinkEmail:No,literalAutolinkHttp:No,literalAutolinkWww:No},exit:{literalAutolink:Lo,literalAutolinkEmail:Io,literalAutolinkHttp:Po,literalAutolinkWww:Fo}},jo={unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Oo,notInConstruct:ko},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Oo,notInConstruct:ko},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Oo,notInConstruct:ko}]};function Mo(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function No(e){this.config.enter.autolinkProtocol.call(this,e)}function Po(e){this.config.exit.autolinkProtocol.call(this,e)}function Fo(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.url=`http://`+this.sliceSerialize(e)}function Io(e){this.config.exit.autolinkEmail.call(this,e)}function Lo(e){this.exit(e)}function Ro(e){wo(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,zo],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,Bo]],{ignore:[`link`,`linkReference`]})}function zo(e,t,n,r,i){let a=``;if(!Uo(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Vo(n)))return!1;let o=Ho(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Bo(e,t,n,r){return!Uo(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Vo(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Ho(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=xo(e,`(`),a=xo(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function Uo(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||z(n)||qe(n))&&(!t||n!==47)}function Wo(e){return e.label||!e.identifier?e.label||``:dr(e.identifier)}function Go(e,t,n){let i=t.indexStack,a=e.children||[],o=t.createTracker(n),s=[],c=-1;for(i.push(-1);++c<a.length;){let n=a[c];i[i.length-1]=c,s.push(o.move(t.handle(n,e,t,r({before:`
`,after:`
`},o.current())))),n.type!==`list`&&(t.bulletLastUsed=void 0),c<a.length-1&&s.push(o.move(Ko(n,a[c+1],e,t)))}return i.pop(),s.join(``)}function Ko(e,t,n,r){let i=r.join.length;for(;i--;){let a=r.join[i](e,t,n,r);if(a===!0||a===1)break;if(typeof a==`number`)return`
`.repeat(1+a);if(a===!1)return`

<!---->

`}return`

`}var qo=/\r?\n|\r/g;function Jo(e,t){let n=[],r=0,i=0,a;for(;a=qo.exec(e);)o(e.slice(r,a.index)),n.push(a[0]),r=a.index+a[0].length,i++;return o(e.slice(r)),n.join(``);function o(e){n.push(t(e,i,!e))}}function Yo(e){if(!e._compiled){let t=(e.atBreak?`[\\r\\n][\\t ]*`:``)+(e.before?`(?:`+e.before+`)`:``);e._compiled=RegExp((t?`(`+t+`)`:``)+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?`\\`:``)+e.character+(e.after?`(?:`+e.after+`)`:``),`g`)}return e._compiled}function Xo(e,t){return Zo(e,t.inConstruct,!0)&&!Zo(e,t.notInConstruct,!1)}function Zo(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Qo(e,t,n){let r=(n.before||``)+(t||``)+(n.after||``),i=[],a=[],o={},s=-1;for(;++s<e.unsafe.length;){let t=e.unsafe[s];if(!Xo(e.stack,t))continue;let n=Yo(t),a;for(;a=n.exec(r);){let e=`before`in t||!!t.atBreak,n=`after`in t,r=a.index+(e?a[1].length:0);i.includes(r)?(o[r].before&&!e&&(o[r].before=!1),o[r].after&&!n&&(o[r].after=!1)):(i.push(r),o[r]={before:e,after:n})}}i.sort($o);let c=n.before?n.before.length:0,l=r.length-(n.after?n.after.length:0);for(s=-1;++s<i.length;){let e=i[s];e<c||e>=l||e+1<l&&i[s+1]===e+1&&o[e].after&&!o[e+1].before&&!o[e+1].after||i[s-1]===e-1&&o[e].before&&!o[e-1].before&&!o[e-1].after||(c!==e&&a.push(es(r.slice(c,e),`\\`)),c=e,/[!-/:-@[-`{-~]/.test(r.charAt(e))&&(!n.encode||!n.encode.includes(r.charAt(e)))?a.push(`\\`):(a.push(`&#x`+r.charCodeAt(e).toString(16).toUpperCase()+`;`),c++))}return a.push(es(r.slice(c,l),n.after)),a.join(``)}function $o(e,t){return e-t}function es(e,t){let n=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],a=e+t,o=-1,s=0,c;for(;c=n.exec(a);)r.push(c.index);for(;++o<r.length;)s!==r[o]&&i.push(e.slice(s,r[o])),i.push(`\\`),s=r[o];return i.push(e.slice(s)),i.join(``)}function ts(e){let t=e||{},n=t.now||{},r=t.lineShift||0,i=n.line||1,a=n.column||1;return{move:c,current:o,shift:s};function o(){return{now:{line:i,column:a},lineShift:r}}function s(e){r+=e}function c(e){let t=e||``,n=t.split(/\r?\n|\r/g),o=n[n.length-1];return i+=n.length-1,a=n.length===1?a+o.length:1+o.length+r,t}}fs.peek=ps;function ns(){return{enter:{gfmFootnoteDefinition:is,gfmFootnoteDefinitionLabelString:as,gfmFootnoteCall:cs,gfmFootnoteCallString:ls},exit:{gfmFootnoteDefinition:ss,gfmFootnoteDefinitionLabelString:os,gfmFootnoteCall:ds,gfmFootnoteCallString:us}}}function rs(){return{unsafe:[{character:`[`,inConstruct:[`phrasing`,`label`,`reference`]}],handlers:{footnoteDefinition:ms,footnoteReference:fs}}}function is(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function as(){this.buffer()}function os(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=H(this.sliceSerialize(e)).toLowerCase()}function ss(e){this.exit(e)}function cs(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function ls(){this.buffer()}function us(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=H(this.sliceSerialize(e)).toLowerCase()}function ds(e){this.exit(e)}function fs(e,t,n,i){let a=ts(i),s=a.move(`[^`),c=n.enter(`footnoteReference`),l=n.enter(`reference`);return s+=a.move(Qo(n,Wo(e),o(r({},a.current()),{before:s,after:`]`}))),l(),c(),s+=a.move(`]`),s}function ps(){return`[`}function ms(e,t,n,i){let a=ts(i),s=a.move(`[^`),c=n.enter(`footnoteDefinition`),l=n.enter(`label`);return s+=a.move(Qo(n,Wo(e),o(r({},a.current()),{before:s,after:`]`}))),l(),s+=a.move(`]:`+(e.children&&e.children.length>0?` `:``)),a.shift(4),s+=a.move(Jo(Go(e,n,a.current()),hs)),c(),s}function hs(e,t,n){return t===0?e:(n?``:`    `)+e}function gs(e,t,n){let i=t.indexStack,a=e.children||[],s=[],c=-1,l=n.before;i.push(-1);let u=t.createTracker(n);for(;++c<a.length;){let d=a[c],f;if(i[i.length-1]=c,c+1<a.length){let n=t.handle.handlers[a[c+1].type];n&&n.peek&&(n=n.peek),f=n?n(a[c+1],e,t,r({before:``,after:``},u.current())).charAt(0):``}else f=n.after;s.length>0&&(l===`\r`||l===`
`)&&d.type===`html`&&(s[s.length-1]=s[s.length-1].replace(/(\r?\n|\r)$/,` `),l=` `,u=t.createTracker(n),u.move(s.join(``))),s.push(u.move(t.handle(d,e,t,o(r({},u.current()),{before:l,after:f})))),l=s[s.length-1].slice(-1)}return i.pop(),s.join(``)}var _s=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];Ss.peek=Cs;var vs={canContainEols:[`delete`],enter:{strikethrough:bs},exit:{strikethrough:xs}},ys={unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:_s}],handlers:{delete:Ss}};function bs(e){this.enter({type:`delete`,children:[]},e)}function xs(e){this.exit(e)}function Ss(e,t,n,i){let a=ts(i),s=n.enter(`strikethrough`),c=a.move(`~~`);return c+=gs(e,n,o(r({},a.current()),{before:c,after:`~`})),c+=a.move(`~~`),s(),c}function Cs(){return`~`}ws.peek=Ts;function ws(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=Yo(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function Ts(){return"`"}function Es(e,t={}){let n=(t.align||[]).concat(),r=t.stringLength||Os,i=[],a=[],o=[],s=[],c=0,l=-1;for(;++l<e.length;){let n=[],i=[],u=-1;for(e[l].length>c&&(c=e[l].length);++u<e[l].length;){let a=Ds(e[l][u]);if(t.alignDelimiters!==!1){let e=r(a);i[u]=e,(s[u]===void 0||e>s[u])&&(s[u]=e)}n.push(a)}a[l]=n,o[l]=i}let u=-1;if(typeof n==`object`&&`length`in n)for(;++u<c;)i[u]=ks(n[u]);else{let e=ks(n);for(;++u<c;)i[u]=e}u=-1;let d=[],f=[];for(;++u<c;){let e=i[u],n=``,r=``;e===99?(n=`:`,r=`:`):e===108?n=`:`:e===114&&(r=`:`);let a=t.alignDelimiters===!1?1:Math.max(1,s[u]-n.length-r.length),o=n+`-`.repeat(a)+r;t.alignDelimiters!==!1&&(a=n.length+a+r.length,a>s[u]&&(s[u]=a),f[u]=a),d[u]=o}a.splice(1,0,d),o.splice(1,0,f),l=-1;let p=[];for(;++l<a.length;){let e=a[l],n=o[l];u=-1;let r=[];for(;++u<c;){let a=e[u]||``,o=``,l=``;if(t.alignDelimiters!==!1){let e=s[u]-(n[u]||0),t=i[u];t===114?o=` `.repeat(e):t===99?e%2?(o=` `.repeat(e/2+.5),l=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),l=o):l=` `.repeat(e)}t.delimiterStart!==!1&&!u&&r.push(`|`),t.padding!==!1&&(t.alignDelimiters!==!1||a!==``)&&(t.delimiterStart!==!1||u)&&r.push(` `),t.alignDelimiters!==!1&&r.push(o),r.push(a),t.alignDelimiters!==!1&&r.push(l),t.padding!==!1&&r.push(` `),(t.delimiterEnd!==!1||u!==c-1)&&r.push(`|`)}p.push(t.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return p.join(`
`)}function Ds(e){return e==null?``:String(e)}function Os(e){return e.length}function ks(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}var As={enter:{table:js,tableData:Fs,tableHeader:Fs,tableRow:Ns},exit:{codeText:Is,table:Ms,tableData:Ps,tableHeader:Ps,tableRow:Ps}};function js(e){let t=e._align;this.enter({type:`table`,align:t.map(e=>e===`none`?null:e),children:[]},e),this.setData(`inTable`,!0)}function Ms(e){this.exit(e),this.setData(`inTable`)}function Ns(e){this.enter({type:`tableRow`,children:[]},e)}function Ps(e){this.exit(e)}function Fs(e){this.enter({type:`tableCell`,children:[]},e)}function Is(e){let t=this.resume();this.getData(`inTable`)&&(t=t.replace(/\\([\\|])/g,Ls));let n=this.stack[this.stack.length-1];n.value=t,this.exit(e)}function Ls(e,t){return t===`|`?t:e}function Rs(e){let t=e||{},n=t.tableCellPadding,i=t.tablePipeAlign,a=t.stringLength,s=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{table:c,tableRow:l,tableCell:u,inlineCode:m}};function c(e,t,n,r){return d(f(e,n,r),e.align)}function l(e,t,n,r){let i=d([p(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function u(e,t,n,i){let a=n.enter(`tableCell`),c=n.enter(`phrasing`),l=gs(e,n,o(r({},i),{before:s,after:s}));return c(),a(),l}function d(e,t){return Es(e,{align:t,alignDelimiters:i,padding:n,stringLength:a})}function f(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=p(r[i],t,n);return o(),a}function p(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=u(r[i],e,t,n);return o(),a}function m(e,t,n){let r=ws(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function zs(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Bs(e){let t=e.options.listItemIndent||`tab`;if(t===1||t===`1`)return`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Vs(e,t,n,r){let i=Bs(n),a=n.bulletCurrent||zs(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}var Hs={exit:{taskListCheckValueChecked:Ws,taskListCheckValueUnchecked:Ws,paragraph:Gs}},Us={unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:Ks}};function Ws(e){let t=this.stack[this.stack.length-2];t.checked=e.type===`taskListCheckValueChecked`}function Gs(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1],n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function Ks(e,t,n,i){let a=e.children[0],o=typeof e.checked==`boolean`&&a&&a.type===`paragraph`,s=`[`+(e.checked?`x`:` `)+`] `,c=ts(i);o&&c.move(s);let l=Vs(e,t,n,r(r({},i),c.current()));return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(e){return e+s}}function qs(){return[Ao,ns(),vs,As,Hs]}function Js(e){return{extensions:[jo,rs(),ys,Rs(e),Us]}}function Ys(e={}){let t=this.data();n(`micromarkExtensions`,bo(e)),n(`fromMarkdownExtensions`,qs()),n(`toMarkdownExtensions`,Js(e));function n(e,n){(t[e]?t[e]:t[e]=[]).push(n)}}var Xs=n(e(),1);function Zs(e){return Xs.default.createElement(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`},e.children)}function Qs({source:e}){return Xs.default.createElement(Oa,{components:{a:Zs},rehypePlugins:[Ys]},e)}export{Qs as default};