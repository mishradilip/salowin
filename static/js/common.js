export default function commonEvents() {
  const isMobileRegex = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
  const isMobile = () => navigator.userAgent.match(isMobileRegex);
  const bodyElem = document.querySelector('body');
  if (isMobile()) {
    bodyElem.classList.add('is-mobile')
  }
  
  const bindEvents = () => {
    const cartIcon = document.querySelector(".header-wrapper .user-cart");
    const viewCart = document.querySelector(".buyagain-section .view-cart-block");
    const cartWrapper = document.querySelector(".body-wrapper .cart-wrapper");
    if(cartIcon) {
      cartIcon.addEventListener("click", function () {
        cartWrapper.classList.add('open');
      });
    }

    if(viewCart) {
      viewCart.addEventListener("click", function () {
        cartWrapper.classList.add('open');
      });
    }

    const cartCloseIcon = document.querySelector(".cart-wrapper .svg-close");
    if(cartCloseIcon) {
      cartCloseIcon.addEventListener("click", function () {
        cartWrapper.classList.remove('open');
      });
    }

    const toastMsg = document.querySelectorAll('[data-toast]');
    toastMsg.forEach(element => {
      element.addEventListener("click", function () {
        let targetElement = document.querySelector(`.${element.dataset.toast}`);
        targetElement.classList.add('show-f');
        setTimeout(function(){ targetElement.classList.remove('show-f') }, 3000);    
      });
    });
  }
  const init = () => {
    bindEvents();
  };

  init();
}