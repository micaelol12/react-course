/*! For license information please see 3.59fbde04.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{37:function(t,e,n){"use strict";function r(t,e,n,r,o,c,a){try{var i=t[c](a),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,c){var a=t.apply(e,n);function i(t){r(a,o,c,i,u,"next",t)}function u(t){r(a,o,c,i,u,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return o}))},38:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return c}))},39:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(L){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new S(r||[]);return c(a,"_invoke",{value:w(t,n,i)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=f;var p={};function d(){}function m(){}function b(){}var y={};l(y,i,(function(){return this}));var j=Object.getPrototypeOf,v=j&&j(j(k([])));v&&v!==e&&n.call(v,i)&&(y=v);var O=b.prototype=d.prototype=Object.create(y);function g(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(c,a,i,u){var s=h(t[c],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,u)}))}u(s.arg)}var a;c(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(o,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw c;return C()}for(n.method=o,n.arg=c;;){var a=n.delegate;if(a){var i=E(a,n);if(i){if(i===p)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return m.prototype=b,c(O,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:m,configurable:!0}),m.displayName=l(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},g(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,c){void 0===c&&(c=Promise);var a=new x(f(e,n,r,o),c);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(O),l(O,s,"Generator"),l(O,i,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(i&&u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}n.d(e,"a",(function(){return o}))},40:function(t,e,n){"use strict";var r=n(38),o=n(39),c=n(37),a=n(42),i=n(0);function u(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(u,{status:e?"pending":null,data:null,error:null}),s=Object(a.a)(n,2),l=s[0],f=s[1],h=Object(i.useCallback)(function(){var e=Object(c.a)(Object(o.a)().mark((function e(n){var r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({type:"SEND"}),e.prev=1,e.next=4,t(n);case 4:r=e.sent,f({type:"SUCCESS",responseData:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(r.a)({sendRequest:h},l)}},41:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return m}));var r=n(39),o=n(38),c=n(37),a="https://react-course-df8ff-default-rtdb.firebaseio.com/";function i(){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(Object(r.a)().mark((function t(){var e,n,c,i,u;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,e.ok){t.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(i in c=[],n)u=Object(o.a)({id:i},n[i]),c.push(u);return t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(Object(r.a)().mark((function t(e){var n,c,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(c=t.sent,n.ok){t.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return i=Object(o.a)({id:e},c),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(Object(r.a)().mark((function t(e){var n,o;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(o=t.sent,n.ok){t.next=8;break}throw new Error(o.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(Object(r.a)().mark((function t(e){var n,o;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(o=t.sent,n.ok){t.next=8;break}throw new Error(o.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:o.name});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(Object(r.a)().mark((function t(e){var n,c,i,u,s;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(c=t.sent,n.ok){t.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(u in i=[],c)s=Object(o.a)({id:u},c[u]),i.push(s);return t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},42:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},45:function(t,e,n){t.exports={comments:"Comments_comments__iZX-v"}},46:function(t,e,n){t.exports={item:"CommentItem_item__24mbD"}},47:function(t,e,n){t.exports={comments:"CommentsList_comments__valp0"}},48:function(t,e,n){t.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},49:function(t,e,n){t.exports={quote:"HighlightedQuote_quote__nE9T6"}},54:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(2),c=n(8),a=n(42),i=n(40),u=n(41),s=n(13),l=n(45),f=n.n(l),h=n(46),p=n.n(h),d=n(1),m=function(t){return Object(d.jsx)("li",{className:p.a.item,children:Object(d.jsx)("p",{children:t.text})})},b=n(47),y=n.n(b),j=function(t){return Object(d.jsx)("ul",{className:y.a.comments,children:t.comments.map((function(t){return Object(d.jsx)(m,{text:t.text},t.id)}))})},v=n(48),O=n.n(v),g=function(t){var e=Object(r.useRef)(),n=Object(i.a)(u.a),o=n.sendRequest,c=n.status,a=n.error,l=t.onAddedComment;Object(r.useEffect)((function(){"completed"!==c||a||l()}),[c,a,l]);var f=function(n){n.preventDefault(),o({commentData:{text:e.current.value},quoteId:t.quoteId})};return Object(d.jsxs)("form",{className:O.a.form,onSubmit:f,children:["pending"===c&&Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(s.a,{})}),Object(d.jsxs)("div",{className:O.a.control,onSubmit:f,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:e})]}),Object(d.jsx)("div",{className:O.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},x=function(){var t=Object(r.useState)(!1),e=Object(a.a)(t,2),n=e[0],c=e[1],l=Object(o.j)().quoteId,h=Object(i.a)(u.c),p=h.sendRequest,m=h.status,b=h.data;Object(r.useEffect)((function(){p(l)}),[l,p]);var y,v=Object(r.useCallback)((function(){p(l)}),[p,l]);return"pending"===m&&(y=Object(d.jsxs)("div",{className:"centered",children:[Object(d.jsx)(s.a,{})," "]})),"completed"===m&&b&&b.length>0&&(y=Object(d.jsx)(j,{comments:b})),"completed"!==m||b&&0!==b.length||(y=Object(d.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(d.jsxs)("section",{className:f.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!n&&Object(d.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(d.jsx)(g,{quoteId:l,onAddedComment:v}),y]})},w=n(49),E=n.n(w),_=function(t){return Object(d.jsxs)("figure",{className:E.a.quote,children:[Object(d.jsx)("p",{children:t.text}),Object(d.jsx)("figcaption",{children:t.author})]})};e.default=function(){var t=Object(o.k)(),e=Object(o.j)(),n=Object(i.a)(u.e,!0),a=n.sendRequest,l=n.status,f=n.data,h=n.error,p=e.quoteId;return Object(r.useEffect)((function(){a(p)}),[a,p]),"pending"===l?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(s.a,{})}):h?Object(d.jsx)("p",{className:"centered",children:h}):f.text?(console.log(t),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{text:f.text,author:f.author}),Object(d.jsx)(o.c,{path:"".concat(t.path),exact:!0,children:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(c.b,{to:"".concat(t.url,"/comments"),className:"btn--flat",children:"Load Comments"})})}),Object(d.jsx)(o.c,{path:"".concat(t.path,"/comments"),children:Object(d.jsx)(x,{})})]})):Object(d.jsx)("p",{children:"No quote Found!"})}}}]);
//# sourceMappingURL=3.59fbde04.chunk.js.map