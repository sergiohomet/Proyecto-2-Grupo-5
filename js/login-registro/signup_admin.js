const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const user = { name, email, password, admin: true };
  const Users = JSON.parse(localStorage.getItem("users")) || [];

  const isUserRegistered = Users.find((user) => {
    return user.email === email;
  });
  if (isUserRegistered !== undefined) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Usuario Existente",
      showConfirmButton: false,
      timer: 1500,
    });
    signupForm.reset();
    return;
  }

  Users.push(user);
  localStorage.setItem("users", JSON.stringify(Users));
  signupForm.reset();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Registro exitoso!",
    showConfirmButton: false,
    timer: 3500,
  });
  setTimeout(() => {
    window.location.href = "./login.html";
  }, 2000);
});
