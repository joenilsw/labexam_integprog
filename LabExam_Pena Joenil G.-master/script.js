document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  let isValid = true;

  // Clear previous error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  // Email validation
  if (!email.value.trim()) {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Password validation
  if (!password.value.trim()) {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (isValid) {
    // Simulate successful login
    alert("Login successful!");
    window.location.href = "home.html";
  }
});
