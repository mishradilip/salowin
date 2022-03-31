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

  const paymentOption = document.querySelectorAll(".payment-method .radio-input");
  paymentOption.forEach(element => {
    element.addEventListener("change", function (e) {
      const currentElement = element;
      const selectedPayment = currentElement.value;
      if(selectedPayment != null) {
        let selectedOption = document.querySelector('.payment-method-list').querySelector(`.${selectedPayment}`);
        let activePayment = document.querySelector('.payment-method-list .payment-method.selected');
        if(activePayment) {
          activePayment.classList.remove('selected');
        }
        selectedOption.classList.add('selected');
      }
    });
  });


  
};

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let activeStep = document.getElementById(params.step);
if(params.step && activeStep) {
  let checkoutSteps = document.querySelector('.checkout-steps');
  let activeCheckoutStep = document.querySelector('.checkout-steps .active');
  if(activeCheckoutStep) {
    activeCheckoutStep.classList.remove('active');
  }
  checkoutSteps.querySelector(`.${params.step}`).classList.add('active');
  if(activeStep) {
    let checkoutSection = document.querySelectorAll('.section-wrapper');
    checkoutSection.forEach(element => {
      element.classList.add('hide');
    });
    activeStep.classList.remove('hide');
  } else {
    console.log('no param')
  }
} else {
  const checkoutSections = document.querySelectorAll('.section-wrapper');
  checkoutSections.forEach(element => {
    element.classList.add('hide');
    document.getElementById('address').classList.remove('hide');
  });
}

checkoutEvents();