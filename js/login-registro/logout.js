const logout = () => {
  localStorage.removeItem("login_success");
};
const cerrarSesionButton = document.getElementById("cerrarSesionButton");
cerrarSesionButton.addEventListener("click", () => {
  logout();
  window.location.href = "./login.html";
});
