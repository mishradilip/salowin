!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../build/css/scripts/",n(n.s=3)}([function(e,t,n){"use strict";function r(){var e=/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,t=document.querySelector("body");navigator.userAgent.match(e)&&t.classList.add("is-mobile");!function(){var e=document.querySelector(".btn-hamburger"),t=document.querySelector(".mobile-menu");e&&e.addEventListener("click",function(){t.classList.add("show-f-mob")});var n=document.querySelector(".mobile-menu .back-arrow");n&&n.addEventListener("click",function(){t.classList.remove("show-f-mob")});var r=document.querySelector(".header-wrapper .user-cart"),o=document.querySelector(".buyagain-section .view-cart-block"),c=document.querySelector(".body-wrapper .cart-wrapper");r&&r.addEventListener("click",function(){c.classList.add("open")}),o&&o.addEventListener("click",function(){c.classList.add("open")});var a=document.querySelector(".cart-wrapper .svg-close");a&&a.addEventListener("click",function(){c.classList.remove("open")}),document.querySelectorAll("[data-toast]").forEach(function(e){e.addEventListener("click",function(){var t=document.querySelector("."+e.dataset.toast);t.classList.add("show-f"),setTimeout(function(){t.classList.remove("show-f")},3e3)})}),document.querySelectorAll(".buyagain-section .add-to-cart").forEach(function(e){e.addEventListener("click",function(){e.parentElement.classList.contains("show-qty")?e.parentElement.classList.remove("show-qty"):e.parentElement.classList.add("show-qty")})})}()}n.r(t),n.d(t,"default",function(){return r})},,,function(e,t,n){"use strict";n.r(t);var r=n(0);Object(r.default)();!function(){var e=document.querySelector(".modal-body .btn-send-otp"),t=document.querySelector(".modal-body .login-modal"),n=document.querySelector(".modal-body .otp-modal");e&&e.addEventListener("click",function(){t.classList.add("hide"),n.classList.remove("hide")})}()}]);