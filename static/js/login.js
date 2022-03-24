import commonEvents from "./common";

commonEvents();

const bindEvents = () => {
  const btnSendOtp = document.querySelector(".modal-body .btn-send-otp");
  const loginModal = document.querySelector('.modal-body .login-modal');
  const otpModal = document.querySelector('.modal-body .otp-modal');
  if (btnSendOtp) {
    btnSendOtp.addEventListener("click", function () {
      loginModal.classList.add('hide');
      otpModal.classList.remove('hide');
    });
  }
}



bindEvents();