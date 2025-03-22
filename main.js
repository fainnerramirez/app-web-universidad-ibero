const buttonIniciarSesion = document.getElementById("signUser");
const buttonReservation = document.getElementById("btnReservation");

buttonIniciarSesion.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("alert", "alert-success");
  div.setAttribute("role", "alert");
  div.innerText = "Ha iniciado sesión";
  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
});

buttonReservation.addEventListener("click", () => {
  alert("Reservación hecha");
});