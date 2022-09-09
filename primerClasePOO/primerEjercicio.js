"use strict";
export const __esModule = true;
import figlet from 'figlet';
figlet('¡¡Hola MARCOS!!', function (err, datos) {
    if (err) {
        console.log('Algo salió mal...');
        console.dir(err);
        return;
    }
    console.log(datos);
});
