function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (username === "julifontana" && password === "1234") {
    window.location.href = "principal.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

 