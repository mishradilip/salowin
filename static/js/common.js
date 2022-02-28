export default function commonEvents() {
  const isMobileRegex = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
  const isMobile = () => navigator.userAgent.match(isMobileRegex);
  const bodyElem = document.querySelector('body');
  if (isMobile()) {
    bodyElem.classList.add('is-mobile')
  }
  
  const bindEvents = () => {
    console.log('Bind Event');
    // const tabs = document.querySelectorAll(".app-section .tab-panel p");
    // tabs.forEach(element => {
    //   element.addEventListener("click", function () {
    //     const activeElement = document.querySelector(
    //       ".app-section .tab-panel .active"
    //     );
    //     const currentElement = this;
    //   });
    // });

  }
  const init = () => {
    bindEvents();
  };

  init();
}