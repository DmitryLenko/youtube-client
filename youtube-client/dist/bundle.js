!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.createElement(t);for(var i=arguments.length,r=Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];0!==r.lenght&&r.forEach(function(e){n.element.classList.add(e)})}return i(e,[{key:"setElementAttribute",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length&&t.length%2==0)for(var i=t.filter(function(e,t){return t%2==0}),r=t.filter(function(e,t){return t%2!=0}),o=0;o<i.length;o+=1)this.element.setAttribute(i[o],r[o])}},{key:"setEvent",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length&&t.length%2==0)for(var i=t.filter(function(e,t){return t%2==0}),r=t.filter(function(e,t){return t%2!=0}),o=0;o<i.length;o+=1)this.element.addEventListener(i[o],r[o])}},{key:"elment",get:function(){return this.element}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o="AIzaSyCBsehB-5RkOGpeGaakeg6egm3nOGlx_eg",s=new URL("https://www.googleapis.com/youtube/v3/search"),a="";!0===t&&(a=window.sessionStorage.getItem("token"));var l={part:"snippet, id",type:"video",q:e,pageToken:a,maxResults:15,key:o};Object.keys(l).forEach(function(e){s.searchParams.append(e,l[e])}),(0,i.default)(s).then(function(e){if(e.status>=200&&e.status<300)return e;throw new Error(e.statusText)}).then(function(e){return e.json()}).then(function(e){var t=e.items.map(function(e){return e.id.videoId});window.sessionStorage.setItem("token",e.nextPageToken),(0,r.default)(t.join(),o,n,e.nextPageToken)}).catch(function(e){document.write("request failed youToobeRequest",e)})};var i=o(n(2)),r=o(n(5));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("unable to locate global object")}();e.exports=t=i.fetch,t.default=i.fetch.bind(i),t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response},function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(n(4));n(9);var r=new i.default;document.body.classList.add("bg-body"),document.body.appendChild(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=l(n(0)),o=l(n(1)),s=l(n(6)),a=l(n(8));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=new r.default("input","input"),this.contaier=new r.default("div","input-container"),this.icon=new r.default("i","fa","fa-search","input-icon"),this.input.setElementAttribute("placeholder","enter somebody"),this.input.setEvent("keyup",this.submitValue),this.contaier.element.appendChild(this.icon.element),this.contaier.element.appendChild(this.input.element),this.contaier.element}return i(e,[{key:"submitValue",value:function(e){if(13===e.keyCode){var t=document.querySelector("input");window.sessionStorage.setItem("value",t.value),(0,o.default)(t.value,!1,this.getData)}this.getData=function(e){var t=new s.default(e.items),n=new a.default,i=document.getElementById("carousel"),r=document.getElementById("pagination");null!==i&&(document.body.removeChild(i),document.body.removeChild(r)),document.body.appendChild(t.element),document.body.appendChild(n),t.getPagination()}}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=new URL("https://www.googleapis.com/youtube/v3/videos"),o={key:t,id:e,part:"snippet, statistics"};Object.keys(o).forEach(function(e){r.searchParams.append(e,o[e])}),(0,i.default)(r).then(function(e){if(e.status>=200&&e.status<300)return e;throw new Error(e.statusText)}).then(function(e){return e.json()}).then(function(e){n(e)}).catch(function(e){document.write("request failed init",e)})};var i=function(e){return e&&e.__esModule?e:{default:e}}(n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=a(n(7)),o=a(n(0)),s=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listcontainer=new o.default("div","list-container"),this.listcontainer.setElementAttribute("id","carousel","style","marginLeft: 0"),this.width=document.documentElement.clientWidth,this.mousedown=function(e){n.swapEnable(e)},this.mousemove=function(e){n.move(e)},this.mouseup=function(e){n.swapDisable(e)},this.listcontainer.setEvent("mousedown",this.mousedown,"mousemove",this.mousemove,"mouseup",this.mouseup,"touchstart",this.mousedown,"touchmove",this.mousemove,"touchend",this.mouseup),this.index=0,this.data=t,this.position=0,this.numberofpage=1,this.countpage=0,this.initItemsList()}return i(e,[{key:"initItemsList",value:function(e,t){var n=this;void 0!==e&&void 0!==t&&(this.listcontainer.element=e,this.data=t),this.amountofelements=Math.floor(this.width/350),this.data.forEach(function(e){n.item=new r.default(e),n.item.setAttribute("style","margin: 50px "+(n.width/n.amountofelements-300)/2+"px 0"),n.listcontainer.element.appendChild(n.item),n.index+=1})}},{key:"getPagination",value:function(){var e=this;this.div=document.getElementById("pagination"),this.pagination=this.div.children,this.carousel=document.getElementById("carousel"),this.click=function(t){e.onClick(t)},this.div.addEventListener("click",this.click)}},{key:"calculatePages",value:function(){this.elementsonpage=Math.floor(this.width/350),this.totallength=this.carousel.children.length,this.pagesofallelements=Math.floor(this.totallength/this.elementsonpage)}},{key:"swapEnable",value:function(e){this.width=document.documentElement.clientWidth,this.middle=this.position,this.rightendpoint=this.width+this.middle,this.leftendpoint=this.middle-this.width,this.swapcondition=!0,this.screenMiddle(e),this.calculatePages(),this.screenmiddle<this.width/2?this.swapdirection="left":this.swapdirection="right"}},{key:"screenMiddle",value:function(e){this.screenmiddle=e.clientX||e.changedTouches[0].pageX}},{key:"move",value:function(e){!0===this.swapcondition&&(this.mousemove=e.clientX-this.middle||e.changedTouches[0].pageX-this.middle,this.screenMiddle(e),"left"===this.swapdirection?this.position=this.mousemove:"right"===this.swapdirection&&(this.position=this.mousemove-this.width),this.carousel.style.marginLeft=this.position+"px")}},{key:"swapDisable",value:function(){if(this.swapcondition=!1,this.position=Math.floor(this.position),this.position=Math.abs(this.position),"left"===this.swapdirection)if(this.middle<this.width)for(;this.position>0;)this.position-=1,this.carousel.style.marginLeft=this.position+"px";else this.middle>=this.width&&this.calculatePosition(this.leftendpoint,this.middle);else"right"===this.swapdirection&&(this.screenmiddle=this.width-this.screenmiddle,this.calculatePosition(this.middle,this.rightendpoint))}},{key:"calculatePosition",value:function(e,t){if("left"===this.swapdirection?(this.rule1=this.screenmiddle>this.width/2,this.rule2=this.screenmiddle<=this.width/2,this.rule1&&this.changePage(-1)):"right"===this.swapdirection&&(this.rule1=this.screenmiddle<=this.width/2,this.rule2=this.screenmiddle>this.width/2,this.rule2&&this.changePage(1)),this.rule1)for(;this.position>e;)this.position-=1,this.carousel.style.marginLeft=-this.position+"px";else if(this.rule2)for(;this.position<t;)this.position+=1,this.carousel.style.marginLeft=-this.position+"px"}},{key:"upload",value:function(){var e=this;if(this.numberofpage>=this.pagesofallelements-1){var t=window.sessionStorage.getItem("value");this.uploadData=function(t){e.initItemsList(e.carousel,t.items)},(0,s.default)(t,!0,this.uploadData)}}},{key:"changePage",value:function(e){this.numberofpage+=e,this.pagination[1].innerHTML=this.numberofpage,this.upload(),this.calculatePages()}},{key:"onClick",value:function(e){for(var t=0;t<this.pagination.length;t+=1)if(this.pagination[t]===e.target){this.el=t;break}var n=this.el-1;this.numberofpage<2&&-1===n&&(n=0),this.el<1?(this.position=this.position-this.width*Math.abs(n),this.carousel.style.marginLeft=-this.position+"px"):this.el>1&&(this.position=this.position+this.width*Math.abs(n),this.carousel.style.marginLeft=-this.position+"px"),this.changePage(n)}},{key:"element",get:function(){return this.listcontainer.element}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var o=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.itemblock=new r.default("div","view-container"),this.itemimage=new r.default("img","view-image"),this.itemtitle=new r.default("div","view-title"),this.itemlist=new r.default("ul","view-list"),this.itemlistelement=new r.default("li","view-list-item"),this.itemparagraph=new r.default("p","view-some-info"),this.itemlink=new r.default("a"),this.icon=void 0,this.payload=[],this.data=t,this.init(),this.itemblock.element}return i(e,[{key:"init",value:function(){this.createImage(),this.createTitle(),this.createInfo(),this.createSomeInfo()}},{key:"createImage",value:function(){this.itemimage.setElementAttribute("src",this.data.snippet.thumbnails.medium.url,"height","250","width","100%","alt","picture"),this.itemblock.element.appendChild(this.itemimage.element)}},{key:"createTitle",value:function(){this.itemlink.setElementAttribute("href","https://www.youtube.com/watch?v="+this.data.id,"target","_blank"),this.itemlink.element.innerHTML=this.data.snippet.title,this.itemtitle.element.appendChild(this.itemlink.element),this.itemblock.element.appendChild(this.itemtitle.element)}},{key:"createInfo",value:function(){var e=["fa","fa-male","fa","fa-calendar","fa","fa-eye"],t=new Date(this.data.snippet.publishedAt),n=t.getUTCMonth()+1,i=t.getUTCDate(),o=t.getUTCFullYear();n<10&&(n="0"+n),i<10&&(i="0"+i),t=i+"-"+n+"-"+o,this.payload=[this.data.snippet.channelTitle,t,this.data.statistics.viewCount];for(var s=0,a=0;s<this.payload.length;s+=1,a+=2)this.icon=new r.default("i",e[a],e[a+1]),this.itemlistelement.element.innerHTML=this.payload[s].toLowerCase().slice(0,20),this.itemlistelement.element.appendChild(this.icon.element.cloneNode(!0)),this.itemlist.element.appendChild(this.itemlistelement.element.cloneNode(!0));this.itemblock.element.appendChild(this.itemlist.element)}},{key:"createSomeInfo",value:function(){this.itemparagraph.element.innerHTML=this.data.snippet.description.slice(0,150).concat("..."),this.itemblock.element.appendChild(this.itemparagraph.element)}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var o=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.div=new r.default("div","pagination-container"),this.span=new r.default("span","pagination-item"),this.div.setElementAttribute("id","pagination"),this.quantityspan=3,this.fillContainer(),this.div.element}return i(e,[{key:"fillContainer",value:function(){for(var e=0;e<this.quantityspan;e+=1)1===e?(this.span.element.innerHTML=1,this.span.element.classList.add("pagination-item-bgcolor"),this.span.element.classList.remove("fa"),this.span.element.classList.remove("fa-chevron-left")):0===e?(this.span.element.classList.add("fa"),this.span.element.classList.add("fa-chevron-left"),this.span.element.classList.remove("pagination-item-bgcolor")):2===e&&(this.span.element.innerHTML="",this.span.element.classList.add("fa"),this.span.element.classList.add("fa-chevron-right"),this.span.element.classList.remove("fa-chevron-left"),this.span.element.classList.remove("pagination-item-bgcolor")),this.div.element.appendChild(this.span.element.cloneNode(!0))}}]),e}();t.default=o},function(e,t,n){var i=n(10);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(11)(!1)).push([e.i,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n     -khtml-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.bg-body {\r\n    background-color: rgb(52, 61, 70);\r\n    text-align: center;\r\n}\r\n.input-container {\r\n    display: inline-flex;\r\n    height: 70px;\r\n    width: 60%;\r\n    margin-top: 20px;\r\n    font-size: 2rem;\r\n    border-radius: 10px;\r\n    border: none;\r\n    background-color: white;\r\n    text-align: start;\r\n    outline: 0;\r\n}\r\n\r\n.input {\r\n    display: inline-block;\r\n    height: 100%;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    border: none;\r\n    outline: 0;\r\n}\r\n\r\n.input-icon {\r\n    display: block;\r\n    height: 34px;\r\n    width: 40px;\r\n    margin: 18px;\r\n}\r\n\r\n.view-container {\r\n    position: relative;\r\n    height: 500px;\r\n    width: 300px;\r\n    margin: 50px;\r\n    background-color: white;\r\n    box-shadow: 5px 5px 10px black;\r\n    border-radius: 10px;\r\n}\r\n\r\n.view-image {\r\n    margin: 15px 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.view-title {\r\n    position: absolute;\r\n    top: 90px;\r\n    left: 0;\r\n    display: inline-block;\r\n    width: 100%;\r\n    background-color: green;\r\n    opacity: 0.8;\r\n}\r\n\r\n.view-title a {\r\n    display: block;\r\n    margin: 10px;\r\n    color: white;\r\n}\r\n\r\n.view-list-item {\r\n    margin: 5px;\r\n    font-size: 1.25rem;\r\n    color: black;\r\n    list-style-type: none;\r\n}\r\n\r\n.view-list-item i{\r\n    position: absolute;\r\n    left: 40px;\r\n    width: 20px;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.view-some-info {\r\n    padding: 10px;\r\n    text-align: start;\r\n    color: black;\r\n}\r\n\r\n.list-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    width: 999999px;\r\n    height: 100%;\r\n}\r\n\r\n.pagination-container {\r\n    position: absolute;\r\n    bottom: 3%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    width: 100%;\r\n}\r\n\r\n.pagination-item {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 25px;\r\n    width: 25px;\r\n    margin: 5px;\r\n    background-color: white;\r\n    border: 2px solid white;\r\n    border-radius: 50%;\r\n    color: black;\r\n}\r\n\r\n.pagination-item-bgcolor {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var i={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),s=null,a=0,l=[],u=n(13);function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(v(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function f(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=o(e.insertAt.before,n);n.insertBefore(t,r)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function p(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var l=a++;n=s||(s=p(t)),i=b.bind(null,n,l,!1),r=b.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){d(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return c(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&c(h(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);