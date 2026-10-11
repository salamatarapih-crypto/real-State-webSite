let form = document.getElementById("contact-form");
let userName = document.getElementById("userName");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
let massage = document.getElementById("massage");

function showInput(input) {
  let formControl = input.parentElement;
  formControl.className = "content-form";
}

function showError(input, massage) {
  let formControl = input.parentElement;
  formControl.className = "content-form content-form-error";
  let span = formControl.querySelector("span");
  span.innerText = massage;
}

form.addEventListener("submit", function (e) {

  let isVaild = true;

  if (userName.value.trim() === "") {
    showError(userName, "user name is required");
    isVaild = false;
  } else {
    showInput(userName);
  }

  if (phoneNumber.value.trim() === "") {
    showError(phoneNumber, "phone is required");
    isVaild = false;

  } else if (phoneNumber.value.trim().length !== 11) {
    showError(phoneNumber, "enter a valid phone number with 11 numbers");
    isVaild = false;

  } else {
    showInput(phoneNumber);
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isVaild = false;
  } else {
    showInput(email);
  }

  if (massage.value.trim() === "") {
    showError(massage, "massage is required");
    isVaild = false;
  } else {
    showInput(massage);
  }

  if(isVaild == false){
    e.preventDefault();
  }

});