"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttle_1 = require("./throttle"); //línea importa la función throttle 
// Función que se ejecutará cuando se haga clic en el botón, pero throttled
function handleClick() {
    console.log('Botón clickeado!'); // imprimir un mensaje en la consola "boton clickeado"
}
// Crear un botón en el DOM para el ejemplo
const button = document.createElement('button'); //
button.textContent = 'Clickeame!'; // texto contenido  "clickeame"
document.body.appendChild(button); // para que aparezca en la web
// Asignar el evento click del botón con throttling
button.addEventListener('click', (0, throttle_1.throttle)(handleClick, 4000)); // Limita a 1 clic cada 4 segundos
