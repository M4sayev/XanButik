const nameRegex = /^[a-zA-ZÀ-ÿ' -]+$/;
const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;

function validateName(name, fieldLabel = "name", min = 2, max = 50) {
  let error = "";
  if (!nameRegex.test(name.trim()) && name.trim() !== "") {
    error = `Please enter a valid ${fieldLabel} using letters only`;
  } else if ((name.length < min || name.length > max) && name.trim() !== "") {
    error = `Please enter a valid ${fieldLabel} using ${min}-${max} letters`;
  }
  return error;
}

function validateEmail(email) {
  let error = "";
  if (!email.trim()) {
    error = "Email is required";
  } else if (!emailRegex.test(email)) {
    error = "Email is invalid";
  }
  return error;
}

function validatePhone(phone) {
  if (!phoneRegex.test(phone.trim()) && phone.trim() !== "") {
    return "Please enter a valid phone number using digits only";
  }
  return "";
}

function validatePassword(password, min = 6) {
  let error = "";
  if (!password.trim()) {
    error = "Password is required";
  } else if (password.length < min) {
    error = `Password must be at least ${min} characters`;
  }
  return error;
}

export { validateEmail, validatePhone, validateName, validatePassword };
