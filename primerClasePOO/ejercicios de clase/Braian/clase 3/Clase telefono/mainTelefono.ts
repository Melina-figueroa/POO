import { Telefono } from "./telefono";
import {TelefonoConCamara} from "./telefonoConCamara";
import {TelefonoConRadio} from "./telefonoConRadio"
let samsung:Telefono = new Telefono(true,85);
console.log(samsung.mandarMensajes("Este es un mensaje"));

let samsungCamara:TelefonoConCamara = new TelefonoConCamara(true,45,true);
console.log(samsungCamara.sacarFotos(true));

let samsungConRadio:TelefonoConRadio = new TelefonoConRadio(true,50,0);
console.log(samsungConRadio.verFrecuenciaActual(801));

