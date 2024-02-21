"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
// export: Hace que la función throttle esté disponible fuera del módulo actual
function throttle(func, limit) {
    var inThrottle; // inThrottle : tiempo durante el cual no se permite una nueva ejecución
    return function () {
        var args = arguments; // Recoge arguments pasados a la función envuelta. un objeto similar a un array  
        var context = this; //
        if (!inThrottle) { // Verifica si inThrottle es false, lo que significa que la función puede ser ejecutada.
            func.apply(context, Array.from(args)); // Convertir IArguments a any[] con Array.from()
            inThrottle = true; // inThrottle  está en su período de "enfriamiento".
            setTimeout(function () { return inThrottle = false; }, limit); //  Inicia un temporizador que durará limit 
        }
    };
}
exports.throttle = throttle;
