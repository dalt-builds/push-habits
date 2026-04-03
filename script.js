// Fecha
const fecha = new Date();

document.getElementById("fecha").textContent =
  fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "short",
    day: "numeric"
  }).replace(/^\w/, c => c.toUpperCase());


// Desplegar ventana nuevo habito
const modal = document.querySelector(".modal-nhabito");

document.getElementById("abrir-modal").onclick = () => {
  modal.classList.remove("ocultar-modal");
};
document.getElementById("cerrar-modal").onclick = () => {
  modal.classList.add("ocultar-modal");
};

