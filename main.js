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

document.addEventListener("DOMContentLoaded", function () {
  function actualizarContador(tipo, operacion) {
      let contador = document.getElementById(tipo);
      let valor = parseInt(contador.textContent);

      if (operacion === "sumar") {
          valor++;
      } else if (operacion === "restar") {
          if ((tipo === "adultos" || tipo === "habitaciones") && valor > 1) {
              valor--;
          } else if (tipo === "ninos" && valor > 0) {
              valor--;
          }
      }
      contador.textContent = valor;
  }
  document.querySelectorAll(".menos").forEach(boton => {
      boton.addEventListener("click", function () {
          let tipo = this.getAttribute("data-tipo");
          actualizarContador(tipo, "restar");
      });
  });
  document.querySelectorAll(".mas").forEach(boton => {
      boton.addEventListener("click", function () {
          let tipo = this.getAttribute("data-tipo");
          actualizarContador(tipo, "sumar");
      });
  });
});
