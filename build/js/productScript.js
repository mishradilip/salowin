!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="../build/css/scripts/",r(r.s=2)}([function(e,t,r){"use strict";function n(){var e=/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,t=document.querySelector("body");navigator.userAgent.match(e)&&t.classList.add("is-mobile");!function(){var e=document.querySelector(".header-wrapper .user-cart"),t=document.querySelector(".body-wrapper .cart-wrapper");e&&e.addEventListener("click",function(){t.classList.add("open")});var r=document.querySelector(".cart-wrapper .svg-close");r&&r.addEventListener("click",function(){t.classList.remove("open")})}()}r.r(t),r.d(t,"default",function(){return n})},,function(e,t,r){"use strict";r.r(t);var n=r(0);Object(n.default)();!function(){console.log("Product page");var e=new Swiper(".mySwiper",{spaceBetween:0,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper2",{spaceBetween:0,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e}});document.querySelector(".js-textareacopybtn").addEventListener("click",function(e){var t=document.querySelector(".share-wrapper .js-copytextarea").innerHTML,r=document.querySelector(".share-wrapper .textarea-input");r.value=t,r.focus(),r.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copying text command was "+n)}catch(e){console.log("Oops, unable to copy")}}),document.querySelector(".share-block .share-item").addEventListener("click",function(){var e=document.querySelector(".share-block .share-wrapper");e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show")})}()}]);