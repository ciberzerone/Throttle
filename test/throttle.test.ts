import { throttle } from '../src/throttle'; //  importa la función throttle desde un módulo situado en '../src/thorottle'. 

describe('throttle', () => {  // describe para pruebas de throttle organiza pruebas unitarias en Jest.
  jest.useFakeTimers();  //llamada a Jest para que use "temporizadores falsos" 

  it('debe llamar a la función solo una vez si se llama varias veces en rápida sucesión', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);
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
