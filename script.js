// Fecha
const fecha = new Date();
document.getElementById("fecha").textContent =
  fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "short",
    day: "numeric"
  }).replace(/^\w/, c => c.toUpperCase());

// Desplegar ventana nuevo habito
const modal = document.getElementById("modal");

document.getElementById("openModal").onclick = () => {
  modal.classList.remove("hidden");
};

document.getElementById("closeModal").onclick = () => {
  modal.classList.add("hidden");
};