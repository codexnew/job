function updateDateTime() {
  document.getElementById("dateTime").innerText = new Date().toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Name
  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name is required");
    isValid = false;
  } else {
    setSuccess(nameInput);
  }

  // Email
  if (!validateEmail(emailInput.value)) {
    setError(emailInput, "Enter a valid email");
    isValid = false;
  } else {
    setSuccess(emailInput);
  }

  // Phone
  if (!validatePhone(phoneInput.value)) {
    setError(phoneInput, "Enter valid phone number");
    isValid = false;
  } else {
    setSuccess(phoneInput);
  }

  // Address
  if (addressInput.value.trim() === "") {
    setError(addressInput, "Address is required");
    isValid = false;
  } else {
    setSuccess(addressInput);
  }

  // Message
  if (messageInput.value.trim() === "") {
    setError(messageInput, "Message is required");
    isValid = false;
  } else {
    setSuccess(messageInput);
  }

  // If all valid
  if (isValid) {
    successMessage.style.display = "block";
    form.reset();
    clearSuccess();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 4000);
  }
});

function setError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  formGroup.querySelector(".error").innerText = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
  formGroup.querySelector(".error").innerText = "";
}

function clearSuccess() {
  document.querySelectorAll(".form-group").forEach((group) => {
    group.classList.remove("success");
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[0-9]{10,15}$/.test(phone);
}
