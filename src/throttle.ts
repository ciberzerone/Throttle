// export: Hace que la función throttle esté disponible fuera del módulo actual
export function throttle(func: (...args: any[]) => void, limit: number): //función throttle que toma dos parámetros:
//El intervalor de tiempo (en milisegundos) durante el cual la función

(...args: any[]) => void  // Una función que throttle va a controlar, 

{
    let inThrottle: boolean;   // inThrottle : tiempo durante el cual no se permite una nueva ejecución
    return function(this: any): void {  //Retorna función que aplicará el control de throttle.
        const args = arguments;  // Recoge arguments pasados a la función envuelta. un objeto similar a un array  
        const context = this;  //
        if (!inThrottle) { // Verifica si inThrottle es false, lo que significa que la función puede ser ejecutada.
            func.apply(context, Array.from(args)); // Convertir IArguments a any[] con Array.from()
            inThrottle = true; // inThrottle  está en su período de "enfriamiento".
            setTimeout(() => inThrottle = false, limit); //  Inicia un temporizador que durará limit 
        }
    }
}


