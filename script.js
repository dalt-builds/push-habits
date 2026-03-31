// fecha
const fecha = new Date();
document.getElementById("fecha").textContent =
  fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "short",
    day: "numeric"
  }).replace(/^\w/, c => c.toUpperCase());
