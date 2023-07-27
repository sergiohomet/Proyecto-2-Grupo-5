const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const Users = JSON.parse(window.localStorage.getItem("users"));
  const validUser = Users.find((user) => user.email === email && user.password === password);

  if (validUser !== undefined) {
    let usuario = validUser;
    localStorage.setItem("login_success", JSON.stringify(validUser));
    loginForm.reset();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Bienvenido!",
      showConfirmButton: false,
      timer: 3500,
    });

    function esAdmin(usser) {
      if (usser.admin === true) {
        return true;
      } else {
        return false;
      }
    }

    setTimeout(() => {
      if (esAdmin(usuario) === true) {
        window.location.href = "./admin.html";
      } else {
        window.location.href = "./user.html";
      }
    }, 2000);
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Usuario o contraseña son incorrectos",
      showConfirmButton: false,
      timer: 3500,
    });
  }
});
