document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in both fields.");
  } else {
    // Redirect to home.html after a brief delay
    setTimeout(function () {
      window.location.href = "home.html";
    }, 500); // 500ms delay for user experience
  }
});

