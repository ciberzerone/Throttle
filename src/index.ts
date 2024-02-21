import { throttle } from './throttle';  //línea importa la función throttle 

// Función que se ejecutará cuando se haga clic en el botón, pero throttled
function handleClick(): void {  // define una función simple handleClick
    console.log('Botón clickeado!'); // imprimir un mensaje en la consola "boton clickeado"
}
// Crear un botón en el DOM para el ejemplo
const button = document.createElement('button'); //
button.textContent = 'Clickeame!'; // texto contenido  "clickeame"
document.body.appendChild(button);  // para que aparezca en la web

// Asignar el evento click del botón con throttling
button.addEventListener('click', throttle(handleClick, 4000)); // Limita a 1 clic cada 4 segundos

