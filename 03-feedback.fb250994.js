function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,c=f||s||Function("return this")(),l=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,u,f,s=0,c=!1,l=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function S(e){return s=e,u=setTimeout(O,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||l&&e-s>=i}function O(){var e=g();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return l?m(n,i-(e-s)):n}(e))}function h(e){return u=void 0,v&&r?b(e):(r=o=void 0,a)}function T(){var e=g(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(l)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(l="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=f=o=u=void 0},T.flush=function(){return void 0===u?a:h(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b={},S=document.querySelector("form"),j=document.querySelector("form textarea"),O=document.querySelector("form input");S.addEventListener("submit",(function(e){e.preventDefault();try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log("Objekt:",e)}catch(e){console.log(e.message)}e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),S.addEventListener("input",e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),(savedMessage=localStorage.getItem("feedback-form-state"))&&(message=savedMessage?JSON.parse(savedMessage):{},message.email&&(O.value=message.email),message.message&&(j.value=message.message)),S.addEventListener("input",(e=>{b[e.target.name]=e.target.value}));
//# sourceMappingURL=03-feedback.fb250994.js.map