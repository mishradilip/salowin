!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="../build/css/scripts/",r(r.s=2)}([function(e,t,r){"use strict";function o(){var e=/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,t=document.querySelector("body");navigator.userAgent.match(e)&&t.classList.add("is-mobile");!function(){var e=document.querySelector(".header-wrapper .user-cart"),t=document.querySelector(".body-wrapper .cart-wrapper");e&&e.addEventListener("click",function(){t.classList.add("open")});var r=document.querySelector(".cart-wrapper .svg-close");r&&r.addEventListener("click",function(){t.classList.remove("open")})}()}r.r(t),r.d(t,"default",function(){return o})},,function(e,t,r){"use strict";r.r(t);var o=r(0);Object(o.default)();window.smoothScroll=function(e){var t=e;do{if(!(t=t.parentNode))return;t.scrollTop+=1}while(0==t.scrollTop);var r=0;do{if(e==t)break;r+=e.offsetTop}while(e=e.offsetParent);scroll=function(e){function t(t,r,o,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,r,o){++o>30||(e.scrollTop=t+(r-t)/30*o,setTimeout(function(){scroll(e,t,r,o)},20))}),scroll(t,t.scrollTop,r,0)},function(){console.log("Product page");var e=new Swiper(".mySwiper",{spaceBetween:0,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper2",{spaceBetween:0,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e}});document.querySelector(".js-textareacopybtn").addEventListener("click",function(e){var t=document.querySelector(".share-wrapper .js-copytextarea").innerHTML,r=document.querySelector(".share-wrapper .textarea-input");r.value=t,r.focus(),r.select();try{var o=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copying text command was "+o)}catch(e){console.log("Oops, unable to copy")}}),document.querySelector(".share-block .share-item").addEventListener("click",function(){var e=document.querySelector(".share-block .share-wrapper");e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show")}),document.querySelectorAll(".product-detail-tab-container .product-tabs li").forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,r=document.getElementById(t);console.log("scrollElement",r.offsetTop)})})}()}]);