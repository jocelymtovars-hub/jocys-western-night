document.addEventListener("DOMContentLoaded", () => {

const sobre = document.getElementById("sobre");
const portada = document.getElementById("portada");
const invitacion = document.getElementById("invitacion");


sobre.addEventListener("click", () => {

    portada.classList.add("ocultar");

    invitacion.classList.add("mostrar");

});

});

const fechaFiesta = new Date("September 12, 2026 20:00:00").getTime();

const contador = setInterval(() => {

const ahora = new Date().getTime();

const diferencia = fechaFiesta - ahora;


const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

const horas = Math.floor(
(diferencia % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);

const minutos = Math.floor(
(diferencia % (1000 * 60 * 60)) /
(1000 * 60)
);

const segundos = Math.floor(
(diferencia % (1000 * 60)) /
1000
);


document.getElementById("tiempo").innerHTML =
dias + " días " +
horas + " horas " +
minutos + " minutos " +
segundos + " segundos";


if (diferencia < 0) {

clearInterval(contador);

document.getElementById("tiempo").innerHTML =
"¡Hoy es el gran día! 🤎🤠";

}

}, 1000);
