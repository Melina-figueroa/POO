import { Robot } from "./Robot";

export class RobotDeHogar extends Robot{
public limpiar() {
    console.log("Aspirando");
}
public cargar() {
    console.log("Cargando con corriente");
}
}