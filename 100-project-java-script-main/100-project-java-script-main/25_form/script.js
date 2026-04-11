function Form() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Email tidak valid");
    return false;
  }

  if (password.length < 6) {
    alert("Password minimal 6 karakter");
    return false;
  }

  alert("Form berhasil dikirim!");
  return true;
}
