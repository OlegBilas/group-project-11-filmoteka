(function n(e,t,o){function r(c,a){if(!t[c]){if(!e[c]){var s=void 0;if(!a&&s)return s(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var l=t[c]={exports:{}};e[c][0].call(l.exports,(function(n){return r(e[c][1][n]||n)}),l,l.exports,n,e,t,o)}return t[c].exports}for(var i=void 0,c=0;c<o.length;c++)r(o[c]);return r})({1:[function(n,e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=n.trim(),!0===e?t.children:t.firstChild},r=function(n,e){var t=n.children;return 1===t.length&&t[0].tagName===e},i=function(n){return null!=(n=n||document.querySelector(".basicLightbox"))&&!0===n.ownerDocument.body.contains(n)};t.visible=i,t.create=function(n,e){var t=function(n,e){var t=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");n.forEach((function(n){return i.appendChild(n)}));var c=r(i,"IMG"),a=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===a&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(n=function(n){var e="string"==typeof n,t=n instanceof HTMLElement==1;if(!1===e&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(n,!0)):"TEMPLATE"===n.tagName?[n.content.cloneNode(!0)]:Array.from(n.children)}(n),e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(n=Object.assign({},n)).closable&&(n.closable=!0),null==n.className&&(n.className=""),null==n.onShow&&(n.onShow=function(){}),null==n.onClose&&(n.onClose=function(){}),"boolean"!=typeof n.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof n.className)throw new Error("Property `className` must be a string");if("function"!=typeof n.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof n.onClose)throw new Error("Property `onClose` must be a function");return n}(e)),c=function(n){return!1!==e.onClose(a)&&function(n,e){return n.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(n)||n.parentElement.removeChild(n),e()}),410),!0}(t,(function(){if("function"==typeof n)return n(a)}))};!0===e.closable&&t.addEventListener("click",(function(n){n.target===t&&c()}));var a={element:function(){return t},visible:function(){return i(t)},show:function(n){return!1!==e.onShow(a)&&function(n,e){return document.body.appendChild(n),setTimeout((function(){requestAnimationFrame((function(){return n.classList.add("basicLightbox--visible"),e()}))}),10),!0}(t,(function(){if("function"==typeof n)return n(a)}))},close:c};return a}},{}]},{},[1])(1);
//# sourceMappingURL=index.28a7f53f.js.map
