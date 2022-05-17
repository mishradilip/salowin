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

  }
  const init = () => {
    bindEvents();
  };

  init();
}