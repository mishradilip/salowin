import commonEvents from "./common";

commonEvents();

const checkoutEvents = () => {
  console.log('Checkout page');
  const billingInfo = document.querySelector('.billing-address #billing_info');
  const billingInfoBlock = document.querySelector('.billing-address .billing-block');

  billingInfo.addEventListener('change', function(element) {
    if(billingInfo.checked) {
      billingInfoBlock.classList.remove('hide');
    } else {
      billingInfoBlock.classList.add('hide');
    }
  });

  const inputElements = document.querySelectorAll(".address-wrapper .input-control");
  inputElements.forEach(element => {
    element.addEventListener("input", function (e) {
      const currentElement = element;
      if(currentElement.value.length) {
        currentElement.parentElement.classList.add('active');
      } else {
        currentElement.parentElement.classList.remove('active');
      }
      console.log(currentElement.value.length);
    });
  });
  
};

checkoutEvents();