const botonPinky = document.getElementById("esPinky");
esPinky.addEventListener("click", (e) => {
  e.preventDefault();
  let usuario = JSON.parse(localStorage.getItem("login_success"));
  console.log("Usuario", usuario);

  function esPinky(usser) {
    if (usser.email === "pinkyluna@gmail.com") {
      return true;
    } else {
      return false;
    }
  }
  if (esPinky(usuario)) {
    window.location.href = "./accesoTalento.html";
  } else {
    window.location.href = "./error.html";
  }
});
