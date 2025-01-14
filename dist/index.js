/*! grapesjs-typed - 2.0.2 */
!function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports["grapesjs-typed"]=t():e["grapesjs-typed"]=t()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0})}},t={};e.r(t),e.d(t,{default:()=>i});var n='typed',o='typed-strings',r=void 0&&(void 0).__assign||function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},a=void 0&&(void 0).__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,r=0,a=t.length;r<a;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};var s=void 0&&(void 0).__assign||function(){return s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};var p=void 0&&(void 0).__assign||function(){return p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p.apply(this,arguments)};const i=function(e,t){void 0===t&&(t={});var i=p({script:'https://cdn.jsdelivr.net/npm/typed.js@2.0.11',block:{},props:function(e){return e}},t);!function(e,t){var s=e.DomComponents,p=Object.keys,i={strings:[],'type-speed':0,'start-delay':0,'back-speed':0,'smart-backspace':!0,'back-delay':700,'fade-out':!1,'fade-out-class':'typed-fade-out','fade-out-delay':500,'show-cursor':!0,'cursor-char':'|','auto-insert-css':!0,'bind-input-focus-events':!1,'content-type':'html',loop:!1,'loop-count':1/0,shuffle:!1,attr:''},c=p(i),d=c.filter((function(e){return['strings'].indexOf(e)<0})).map((function(e){return{changeProp:!0,type:(t=i[e],'number'==typeof t?'number':'boolean'==typeof t?'checkbox':'text'),min:0,name:e};var t}));d.unshift({changeProp:!0,name:'strings',type:o}),s.addType(n,{model:{defaults:t.props(r(r({},i),{typedsrc:t.script,droppable:0,traits:d,'script-props':a(a([],c,!0),['typedsrc'],!1),script:function(e){var t,n=this,o=(t=e.strings,Array.isArray(t)?t:t.indexOf('\n')>=0?t.split('\n'):[]),r=function(e){return parseInt(e,10)||0},a=function(e){return!!e},s=function(){var t=n;t.innerHTML='<span></span>';var s=parseInt("".concat(e['loop-count']),10);"".concat(e['type-speed']);var p={typeSpeed:r(e['type-speed']),startDelay:r(e['start-delay']),backDelay:r(e['back-delay']),backSpeed:r(e['back-speed']),smartBackspace:a(e['smart-backspace']),fadeOut:a(e['fade-out']),fadeOutClass:e['fade-out-class'],fadeOutDelay:r(e['fade-out-delay']),shuffle:a(e.shuffle),loop:a(e.loop),loopCount:isNaN(s)?1/0:s,showCursor:a(e['show-cursor']),cursorChar:e['cursor-char'],autoInsertCss:a(e['auto-insert-css']),bindInputFocusEvents:a(e['bind-input-focus-events']),attr:e.attr,contentType:e['content-type']};o&&o.length&&(p.strings=o),new window.Typed(t.children[0],p)};if(window.Typed)s();else{var p=document.createElement('script');p.src=e.typedsrc,p.onload=s,document.head.appendChild(p)}}}))}})}(e,i),function(e,t){var o=e.BlockManager,r=t.block;r&&o.add(n,s({label:'Typed',media:"\n      <svg width=\"49\" height=\"48\" viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.4205 12.6L24.6765 34.68V35H21.7005L19.5885 29.144H9.7965L7.6845 35H4.7725V34.68L12.9965 12.6H16.4205ZM10.6925 26.648H18.6925L14.7565 15.704H14.6285L10.6925 26.648ZM32.921 35.288C29.369 35.288 27.225 33.08 27.225 30.232C27.225 27.48 29.177 25.112 33.977 25.112C35.705 25.112 36.985 25.4 38.009 25.688V24.056C38.009 22.232 36.889 20.664 34.233 20.664C31.833 20.664 30.649 22.008 30.617 23.576H28.025C28.025 20.44 30.649 18.36 34.233 18.36C38.425 18.36 40.633 20.888 40.633 23.992V35H38.361L38.169 32.696H38.041C37.049 34.36 35.225 35.288 32.921 35.288ZM33.401 33.048C36.185 33.048 38.009 31.032 38.009 28.664V27.832C36.665 27.416 35.417 27.256 33.977 27.256C31.321 27.256 29.945 28.28 29.945 30.2C29.945 31.832 31.033 33.048 33.401 33.048Z\" fill=\"#D9D9D9\"/>\n<line x1=\"46\" y1=\"8\" x2=\"46\" y2=\"40\" stroke=\"white\"/>\n</svg>\n    ",content:{type:n},select:!0},r))}(e,i),function(e){e.TraitManager.addType(o,{createInput:function(e){var t=e.component;return"<textarea>".concat(t.get('strings').join('\n'),"</textarea>")},onUpdate:function(e){var t=e.component;e.elInput.value=t.get('strings').join('\n')},onEvent:function(e){var t=e.component,n=(e.elInput.value||'').split('\n');t.set('strings',n)}})}(e)};return t})()));
//# sourceMappingURL=index.js.map