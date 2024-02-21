"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var throttle_1 = require("../src/throttle"); //  importa la función throttle desde un módulo situado en '../src/thorottle'. 
describe('throttle', function () {
    jest.useFakeTimers(); //llamada a Jest para que use "temporizadores falsos" 
    it('debe llamar a la función solo una vez si se llama varias veces en rápida sucesión', function () {
        var func = jest.fn();
        var throttledFunc = (0, throttle_1.throttle)(func, 1000);
        // Simular múltiples llamadas rápidas a la función que ha sido envuelta en throttle.
        throttledFunc();
        throttledFunc();
        throttledFunc();
        //Verificación de Resultados
        jest.runAllTimers();
        //Confirma que throttle está limitando las llamadas 
        expect(func).toHaveBeenCalledTimes(1);
    });
});
