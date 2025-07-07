document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting normally

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in both fields.");
  } else {
    // Redirect to home.html regardless of input
    window.location.href = "home.html";
  }
});
