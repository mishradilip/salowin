import commonEvents from "./common";

commonEvents();

const checkoutEvents = () => {
  console.log('Checkout page');
  // Shipping and billing address are same?
  const billingInfo = document.querySelector('.billing-address #billing_info');
  const billingInfoBlock = document.querySelector('.billing-address .billing-block');

  billingInfo.addEventListener('change', function(element) {
    if(billingInfo.checked) {
      billingInfoBlock.classList.remove('hide');
    } else {
      billingInfoBlock.classList.add('hide');
    }
  });

  // Input value check for address form
  const inputElements = document.querySelectorAll(".address-wrapper .input-control");
  inputElements.forEach(element => {
    element.addEventListener("input", function () {
      const currentElement = element;
      if(currentElement.value.length) {
        currentElement.parentElement.classList.add('active');
      } else {
        currentElement.parentElement.classList.remove('active');
      }
    });
  });

  // Maypent method selection
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

  // Add new address
  const addAddress = document.querySelector('.address-section #add_address');
  const selectAddress = document.querySelector('.address-section #select_address');
  const addNewAddress = document.querySelectorAll(".select-address-wrapper .btn-address");
  addNewAddress.forEach(element => {
    element.addEventListener("click", function (e) {
      selectAddress.classList.add('hide');
      addAddress.classList.remove('hide');
    });
  });

  // Btn same new address
  const btnSaveAddress = document.querySelector('.address-section #add_address .btn-save-address');
  btnSaveAddress.addEventListener('click', function(element) {
    selectAddress.classList.remove('hide');
    addAddress.classList.add('hide');
  });

  // Btn address Continue
  const btnAddressContinue = document.querySelector('#select_address .btn-address-continue');
  btnAddressContinue.addEventListener('click', function(element) {
    location.href = '/checkout.html?step=payment';
  });

  // Btn payment Continue
  const btnPaymentContinue = document.querySelector('.payment-section .btn-payment-continue');
  btnPaymentContinue.addEventListener('click', function(element) {
    location.href = '/checkout.html?step=summary';
  });

  // Select shipping address
  const selectedAddress = document.querySelectorAll("#select_address .address-list .radio-input");
  selectedAddress.forEach(element => {
    element.addEventListener("click", function () {
      const currentElement = element;
      const parentAddressList = currentElement.parentElement.parentElement.parentElement.parentElement;
      if(parentAddressList.querySelector('.selected')) {
        parentAddressList.querySelector('.selected').classList.remove('selected');
      }
      currentElement.parentElement.parentElement.parentElement.classList.add('selected');
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