const buttonIniciarSesion = document.getElementById("signUser");
const buttonReservation = document.getElementById("btnReservation");
const incrementButtons = document.querySelectorAll('.button__increment');
const decrementButtons = document.querySelectorAll('.button__decrement');
// const buttonsHotels = document.querySelectorAll(".button__hotel");

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

// buttonsHotels.forEach(hotel => {
//   hotel.addEventListener("click", (event) => {
//     const target = hotel.getAttribute("data-ciudad");
//     createModalHotel(target);
//   });
// });

// const createModalHotel = (ciudad) => {

// //   <!-- Button trigger modal -->
// // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
// //   Launch demo modal
// // </button>

// const button = document.createElement("button");
// button.setAttribute("type", "button");
// button.setAttribute("data-toggle", "modal");
// button.setAttribute("data-target", `${ciudad}`);
// button.classList.add("btn btn-primary");

//   const modal = `

//   `;
// }