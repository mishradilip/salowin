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

};

productEvents();