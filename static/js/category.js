import commonEvents from "./common";

commonEvents();

const categoryEvents = () => {
  console.log('Bind category event')
  const catNav = document.querySelectorAll(".cat-nav-wrapper .title");
  catNav.forEach(element => {
    element.addEventListener("click", function () {
      const currentElement = element;
      const parentElement = currentElement.parentElement;
      if(parentElement.classList.contains('active')) {
        parentElement.classList.remove('active')
      } else {
        parentElement.classList.add('active')
      }
    });
  });

  const tabs = document.querySelectorAll(".cat-wrapper-list .toggle-icon");
  tabs.forEach(element => {
    element.addEventListener("click", function () {
      const currentElement = element;
      const parentLiElement = currentElement.parentElement.parentElement;
      if(parentLiElement.classList.contains('active')) {
        parentLiElement.classList.remove('active')
      } else {
        parentLiElement.classList.add('active')
      }
    });
  });
};

categoryEvents();