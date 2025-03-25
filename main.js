const buttonIniciarSesion = document.getElementById("signUser");
const buttonReservation = document.getElementById("btnReservation");
const incrementButtons = document.querySelectorAll('.button__increment');
const decrementButtons = document.querySelectorAll('.button__decrement');

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

function updateCount(target, increment = true) {
  const counterElement = document.getElementById(`${target}-count`);
  let currentCount = parseInt(counterElement.textContent, 10);

  if (increment) {
    currentCount += 1;
  } else {
    if (currentCount > 0) {
      currentCount -= 1;
    }
  }

  counterElement.textContent = currentCount;
}

incrementButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    updateCount(target, true);
  });
});

// Añadimos eventos a los botones de decremento
decrementButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    updateCount(target, false);
  });
});
