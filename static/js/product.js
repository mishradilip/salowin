import commonEvents from "./common";

commonEvents();

const productEvents = () => {
  console.log('Product page');
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // Copy to clipboard
  const copyTextareaBtn = document.querySelector('.js-textareacopybtn');
  copyTextareaBtn.addEventListener('click', function(event) {
    var copyTextarea = document.querySelector('.share-wrapper .js-copytextarea').innerHTML;
    const textareaEle = document.querySelector('.share-wrapper .textarea-input');
    textareaEle.value = copyTextarea;
    textareaEle.focus();
    textareaEle.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });

  // Show share block
  const shareProduct = document.querySelector('.share-block .share-item');
  shareProduct.addEventListener('click', function() {
    const shareWrapper = document.querySelector('.share-block .share-wrapper');
    if(shareWrapper.classList.contains('show')) {
      shareWrapper.classList.remove('show');
    } else {
      shareWrapper.classList.add('show');
    }
  });

  // Porduct description tabs
  const tabs = document.querySelectorAll(".product-detail-tab-container .product-tabs li");
  tabs.forEach(element => {
    element.addEventListener("click", function () {
      const currentElement = element;
      const elementID = currentElement.dataset.target;
      const scrollElement = document.getElementById(elementID);
      console.log('scrollElement',scrollElement.offsetTop);
      //smoothScroll(scrollElement);
      // scrollElement.scrollIntoView({behavior: "smooth"});
    });
  });

};

window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

productEvents();