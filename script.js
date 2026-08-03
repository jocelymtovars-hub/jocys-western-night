document.addEventListener("DOMContentLoaded", () => {

const sobre = document.getElementById("sobre");
const portada = document.getElementById("portada");
const invitacion = document.getElementById("invitacion");


sobre.addEventListener("click", () => {

    portada.classList.add("ocultar");

    invitacion.classList.add("mostrar");

});

});
