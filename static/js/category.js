import commonEvents from "./common";

commonEvents();

const categoryEvents = () => {
  console.log('Bind category event')
  const catNav = document.querySelectorAll(".cat-nav-wrapper .title");
  catNav.forEach(element => {
    element.addEventListener("click", function () {
      const currentElement = element;
      const parentElement = currentElement.parentElement;
      const activeFilter = document.querySelector(".cat-nav-wrapper.active");
      // if(parentElement.classList.contains('active')) {
      //   parentElement.classList.remove('active');
      // } else {
        if(activeFilter) {
          activeFilter.classList.remove('active');
        }
        parentElement.classList.add('active');
      //}
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

  const sortFilter = document.querySelector('.mobile-filter .sort-by-filter');
  const categoryFilter = document.querySelector('.mobile-filter .category-filter');
  const sortFilterOption = document.querySelector('.filter-wrapper .sort-by-wrapper .sort-by-option');
  sortFilter.addEventListener("click", function() {
    //sortFilterOption.classList.add('show');
  });

  const categoryFilterWrapper = document.querySelector('.left-container');
  categoryFilter.addEventListener("click", function() {
    categoryFilterWrapper.classList.add('show-filter')
  });

  
  const filterBackArrow = document.querySelector('.left-container .filter-heading .back-arrow');
  filterBackArrow.addEventListener("click", function() {
    categoryFilterWrapper.classList.remove('show-filter')
  });

};

categoryEvents();