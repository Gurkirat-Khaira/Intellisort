(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{477:function(e,t,n){"use strict";var o=n(3454);n(2584);var s=n(7294),i=s&&"object"==typeof s&&"default"in s?s:{default:s},r=void 0!==o&&o.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,i=void 0===s?r:s;c(a(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",c("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(c(a(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];c(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&c(a(t),"makeStyleTag accepts only strings as second parameter");var o=document.createElement("style");this._nonce&&o.setAttribute("nonce",this._nonce),o.type="text/css",o.setAttribute("data-"+e,""),t&&o.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(o,n):s.appendChild(o),o},function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},u={};function h(e,t){if(!t)return"jsx-"+e;var n=String(t),o=e+n;return u[o]||(u[o]="jsx-"+d(e+"-"+n)),u[o]}function f(e,t){var n=e+t;return u[n]||(u[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,o=void 0===n?null:n,s=t.optimizeForSpeed,i=void 0!==s&&s;this._sheet=o||new l({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),o&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),o=n.styleId,s=n.rules;if(o in this._instancesCounts){this._instancesCounts[o]+=1;return}var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[o]=i,this._instancesCounts[o]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var o=this._fromServer&&this._fromServer[n];o?(o.parentNode.removeChild(o),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],o=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:o}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,o=e.id;if(n){var s=h(o,n);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return f(s,e)}):[f(s,t)]}}return{styleId:h(o),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=s.createContext(null);m.displayName="StyleSheetContext";var g=i.default.useInsertionEffect||i.default.useLayoutEffect,y=new p;function v(e){var t=y||s.useContext(m);return t&&g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=v},1822:function(e,t,n){"use strict";e.exports=n(477).style},2584:function(){},4055:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(7294),s={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function i(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var o=(e.match(/[^0-9]*$/)||"").toString();return s[o]?{value:t,unit:o}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function r(e){var t=i(e);return"".concat(t.value).concat(t.unit)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)0>t.indexOf(o[s])&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]]);return n},c=function(e,t,n){var o="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return o;var s=document.createElement("style");document.head.appendChild(s);var i=s.sheet,r="\n    @keyframes ".concat(o," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(r,0),o}("MoonLoader","100% {transform: rotate(360deg)}","moon"),d=function(e){var t=e.loading,n=e.color,s=void 0===n?"#000000":n,d=e.speedMultiplier,u=void 0===d?1:d,h=e.cssOverride,f=e.size,p=l(e,["loading","color","speedMultiplier","cssOverride","size"]),m=i(void 0===f?60:f),g=m.value,y=m.unit,v=Math.round(g/7),_=a({display:"inherit",position:"relative",width:"".concat("".concat(g+2*v).concat(y)),height:"".concat("".concat(g+2*v).concat(y)),animation:"".concat(c," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"},void 0===h?{}:h),E=function(e){return{width:r(e),height:r(e),borderRadius:"100%"}},b=a(a({},E(v)),{backgroundColor:"".concat(s),opacity:"0.8",position:"absolute",top:"".concat("".concat(g/2-v/2).concat(y)),animation:"".concat(c," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"}),C=a(a({},E(g)),{border:"".concat(v,"px solid ").concat(s),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return void 0===t||t?o.createElement("span",a({style:_},p),o.createElement("span",{style:b}),o.createElement("span",{style:C})):null}},3153:function(e){var t;t=function(){return function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};n(1);var s={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",selector:"[data-sal]",once:!0,disabled:!1},i=[],r=null,a=function(){document.body.classList.remove(s.disabledClassName)},l=function(){document.body.classList.add(s.disabledClassName)},c=function(e,t){e.forEach(function(e){e.intersectionRatio>=s.threshold?(e.target.classList.add(s.animateClassName),s.once&&t.unobserve(e.target)):s.once||e.target.classList.remove(s.animateClassName)})},d=function(){l(),r.disconnect(),r=null},u=function(){a(),r=new IntersectionObserver(c,{rootMargin:s.rootMargin,threshold:s.threshold}),(i=[].filter.call(document.querySelectorAll(s.selector),function(e){return s.animateClassName,!e.classList.contains(s.animateClassName)})).forEach(function(e){return r.observe(e)})};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;if(e!==s&&(s=o({},s,e)),!window.IntersectionObserver)throw l(),Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");return s.disabled||"function"==typeof s.disabled&&s.disabled()?l():u(),{elements:i,disable:d,enable:u}}},function(e,t){}]).default},e.exports=t()},1341:function(e,t,n){"use strict";var o,s,i,r,a,l,c,d,u,h,f,p,m,g,y,v,_,E,b,C,S,O,w,R;n.d(t,{$D:function(){return ei},MN:function(){return a},OA:function(){return r}}),(m=o||(o={})).STRING="string",m.NUMBER="number",m.INTEGER="integer",m.BOOLEAN="boolean",m.ARRAY="array",m.OBJECT="object",(g=s||(s={})).LANGUAGE_UNSPECIFIED="language_unspecified",g.PYTHON="python",(y=i||(i={})).OUTCOME_UNSPECIFIED="outcome_unspecified",y.OUTCOME_OK="outcome_ok",y.OUTCOME_FAILED="outcome_failed",y.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";let I=["user","model","function","system"];(v=r||(r={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",v.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",v.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",v.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",v.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(_=a||(a={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",_.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",_.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",_.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",_.BLOCK_NONE="BLOCK_NONE",(E=l||(l={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",E.NEGLIGIBLE="NEGLIGIBLE",E.LOW="LOW",E.MEDIUM="MEDIUM",E.HIGH="HIGH",(b=c||(c={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",b.SAFETY="SAFETY",b.OTHER="OTHER",(C=d||(d={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",C.STOP="STOP",C.MAX_TOKENS="MAX_TOKENS",C.SAFETY="SAFETY",C.RECITATION="RECITATION",C.LANGUAGE="LANGUAGE",C.OTHER="OTHER",(S=u||(u={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",S.RETRIEVAL_QUERY="RETRIEVAL_QUERY",S.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",S.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",S.CLASSIFICATION="CLASSIFICATION",S.CLUSTERING="CLUSTERING",(O=h||(h={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",O.AUTO="AUTO",O.ANY="ANY",O.NONE="NONE",(w=f||(f={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",w.MODE_DYNAMIC="MODE_DYNAMIC";class x extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class N extends x{constructor(e,t){super(e),this.response=t}}class T extends x{constructor(e,t,n,o){super(e),this.status=t,this.statusText=n,this.errorDetails=o}}class A extends x{}(R=p||(p={})).GENERATE_CONTENT="generateContent",R.STREAM_GENERATE_CONTENT="streamGenerateContent",R.COUNT_TOKENS="countTokens",R.EMBED_CONTENT="embedContent",R.BATCH_EMBED_CONTENTS="batchEmbedContents";class M{constructor(e,t,n,o,s){this.model=e,this.task=t,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",o=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",s=`${o}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function j(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(e){throw new A(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${e.message}`)}for(let[e,t]of o.entries()){if("x-goog-api-key"===e)throw new A(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new A(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function F(e,t,n,o,s,i){let r=new M(e,t,n,o,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await j(r),body:s})}}async function D(e,t,n,o,s,i={},r=fetch){let{url:a,fetchOptions:l}=await F(e,t,n,o,s,i);return L(a,l,r)}async function L(e,t,n=fetch){let o;try{o=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof T||e instanceof A||((n=new x(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return o.ok||await $(o,e),o}async function $(e,t){let n,o="";try{let t=await e.json();o=t.error.message,t.error.details&&(o+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new T(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${o}`,e.status,e.statusText,n)}function P(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new N(`${G(e)}`,e);return function(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new N(`Text not available. ${G(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new N(`${G(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),k(e)[0]}if(e.promptFeedback)throw new N(`Function call not available. ${G(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new N(`${G(e)}`,e);return k(e)}if(e.promptFeedback)throw new N(`Function call not available. ${G(e)}`,e)},e}function k(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}let H=[d.RECITATION,d.SAFETY,d.LANGUAGE];function U(e){return!!e.finishReason&&H.includes(e.finishReason)}function G(e){var t,n,o;let s="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(o=e.candidates)||void 0===o?void 0:o[0]){let t=e.candidates[0];U(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}return s}function z(e){return this instanceof z?(this.v=e,this):new z(e)}"function"==typeof SuppressedError&&SuppressedError;let K=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function Y(e){let t=[],n=e.getReader();for(;;){let{done:e,value:o}=await n.read();if(e)return P(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let o={};for(let s of e.content.parts)s.text&&(o.text=s.text),s.functionCall&&(o.functionCall=s.functionCall),s.executableCode&&(o.executableCode=s.executableCode),s.codeExecutionResult&&(o.codeExecutionResult=s.codeExecutionResult),0===Object.keys(o).length&&(o.text=""),n.candidates[t].content.parts.push(o)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(o)}}async function B(e,t,n,o){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function o(){return t.read().then(({value:t,done:s})=>{let i;if(s){if(n.trim()){e.error(new x("Failed to parse stream"));return}e.close();return}let r=(n+=t).match(K);for(;r;){try{i=JSON.parse(r[1])}catch(t){e.error(new x(`Error parsing JSON response: "${r[1]}"`));return}e.enqueue(i),r=(n=n.substring(r[0].length)).match(K)}return o()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(e,t||[]),i=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(e){s[e]&&(o[e]=function(t){return new Promise(function(n,o){i.push([e,t,n,o])>1||a(e,t)})})}function a(e,t){try{var n;(n=s[e](t)).value instanceof z?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){a("next",e)}function c(e){a("throw",e)}function d(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield z(t.read());if(n)break;yield yield z(P(e))}})}(t),response:Y(n)}}(await D(t,p.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o))}async function q(e,t,n,o){let s=await D(t,p.GENERATE_CONTENT,e,!1,JSON.stringify(n),o);return{response:P(await s.json())}}function J(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function V(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},o=!1,s=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new x("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new x("No content is provided for sending chat message.");return o?t:n}(t)}function W(e){let t;return t=e.contents?e:{contents:[V(e)]},e.systemInstruction&&(t.systemInstruction=J(e.systemInstruction)),t}let X=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Z={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},Q="SILENT_ERROR";class ee{constructor(e,t,n,o={}){this.model=t,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:o}=n;if(!t&&"user"!==e)throw new x(`First content should be with role 'user', got ${e}`);if(!I.includes(e))throw new x(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(I)}`);if(!Array.isArray(o))throw new x("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new x("Each Content should have at least one part");let s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of o)for(let t of X)t in e&&(s[t]+=1);let i=Z[e];for(let t of X)if(!i.includes(t)&&s[t]>0)throw new x(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,o,s,i,r,a;let l;await this._sendPromise;let c=V(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>q(this._apiKey,this.model,d,u)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=G(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,o,s,i,r,a;await this._sendPromise;let l=V(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=B(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(Q)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=G(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==Q&&console.error(e)}),u}}async function et(e,t,n,o){return(await D(t,p.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}async function en(e,t,n,o){return(await D(t,p.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function eo(e,t,n,o){let s=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await D(t,p.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}class es{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=J(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let o=W(e),s=Object.assign(Object.assign({},this._requestOptions),t);return q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(e,t={}){var n;let o=W(e),s=Object.assign(Object.assign({},this._requestOptions),t);return B(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(e){var t;return new ee(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let o={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},s=null!=e.generateContentRequest;if(e.contents){if(s)throw new A("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{let t=V(e);o.contents=[t]}return{generateContentRequest:o}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return et(this.apiKey,this.model,n,o)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:V(e)}:e,o=Object.assign(Object.assign({},this._requestOptions),t);return en(this.apiKey,this.model,n,o)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return eo(this.apiKey,this.model,e,n)}}class ei{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new x("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new es(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new A("Cached content must contain a `name` field.");if(!e.model)throw new A("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new A(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new es(this.apiKey,o,n)}}},6501:function(e,t,n){"use strict";let o,s;n.d(t,{ZP:function(){return en}});var i,r=n(7294);let a={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||a,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,h=(e,t)=>{let n="",o="",s="";for(let i in e){let r=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+r+";":o+="f"==i[1]?h(r,i):i+"{"+h(r,"k"==i[1]?"":t)+"}":"object"==typeof r?o+=h(r,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=r&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=h.p?h.p(i,r):i+":"+r+";")}return n+(t&&s?t+"{"+s+"}":s)+o},f={},p=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+p(e[n]);return t}return e},m=(e,t,n,o,s)=>{var i;let r=p(e),a=f[r]||(f[r]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(r));if(!f[a]){let t=r!==e?e:(e=>{let t,n,o=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?o.shift():t[3]?(n=t[3].replace(u," ").trim(),o.unshift(o[0][n]=o[0][n]||{})):o[0][t[1]]=t[2].replace(u," ").trim();return o[0]})(e);f[a]=h(s?{["@keyframes "+a]:t}:t,n?"":"."+a)}let l=n&&f.g?f.g:null;return n&&(f.g=f[a]),i=f[a],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=o?i+t.data:t.data+i),a},g=(e,t,n)=>e.reduce((e,o,s)=>{let i=t[s];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":h(e,""):!1===e?"":e}return e+o+(null==i?"":i)},"");function y(e){let t=this||{},n=e.call?e(t.p):e;return m(n.unshift?n.raw?g(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let v,_,E,b=y.bind({k:1});function C(e,t){let n=this||{};return function(){let o=arguments;function s(i,r){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:_&&_()},a),n.o=/ *go\d+/.test(l),a.className=y.apply(n,o)+(l?" "+l:""),t&&(a.ref=r);let c=e;return e[0]&&(c=a.as||e,delete a.as),E&&c[0]&&E(a),v(c,a)}return t?t(s):s}}var S=e=>"function"==typeof e,O=(e,t)=>S(e)?e(t):e,w=(o=0,()=>(++o).toString()),R=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},I=new Map,x=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),j({type:4,toastId:e})},1e3);I.set(e,t)},N=e=>{let t=I.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&N(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return e.toasts.find(e=>e.id===n.id)?T(e,{type:1,toast:n}):T(e,{type:0,toast:n});case 3:let{toastId:o}=t;return o?x(o):e.toasts.forEach(e=>{x(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},A=[],M={toasts:[],pausedAt:void 0},j=e=>{M=T(M,e),A.forEach(e=>{e(M)})},F=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||w()}),D=e=>(t,n)=>{let o=F(t,e,n);return j({type:2,toast:o}),o.id},L=(e,t)=>D("blank")(e,t);L.error=D("error"),L.success=D("success"),L.loading=D("loading"),L.custom=D("custom"),L.dismiss=e=>{j({type:3,toastId:e})},L.remove=e=>j({type:4,toastId:e}),L.promise=(e,t,n)=>{let o=L.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(L.success(O(t.success,e),{id:o,...n,...null==n?void 0:n.success}),e)).catch(e=>{L.error(O(t.error,e),{id:o,...n,...null==n?void 0:n.error})}),e};var $=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,k=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,H=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${k} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${U} 1s linear infinite;
`,z=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Y=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=C("div")`
  position: absolute;
`,q=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:n,iconTheme:o}=e;return void 0!==t?"string"==typeof t?r.createElement(V,null,t):t:"blank"===n?null:r.createElement(q,null,r.createElement(G,{...o}),"loading"!==n&&r.createElement(B,null,"error"===n?r.createElement(H,{...o}):r.createElement(Y,{...o})))},X=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Z=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=C("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ee=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,et=(e,t)=>{let n=e.includes("top")?1:-1,[o,s]=R()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[X(n),Z(n)];return{animation:t?`${b(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};r.memo(({toast:e,position:t,style:n,children:o})=>{let s=e.height?et(e.position||t||"top-center",e.visible):{opacity:0},i=r.createElement(W,{toast:e}),a=r.createElement(ee,{...e.ariaProps},O(e.message,e));return r.createElement(Q,{className:e.className,style:{...s,...n,...e.style}},"function"==typeof o?o({icon:i,message:a}):r.createElement(r.Fragment,null,i,a))}),i=r.createElement,h.p=void 0,v=i,_=void 0,E=void 0,y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var en=L}}]);
//# sourceMappingURL=801-416a0b8d2c4b30c9.js.map