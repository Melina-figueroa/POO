import { Telefono } from "./telefono";
export class TelefonoConRadio extends Telefono{
    private frecuenciaActual: number;

    constructor(pPrendido:boolean,pBateria:number,pFrecuencia:number){
    super(pPrendido,pBateria);
    this.frecuenciaActual = pFrecuencia
    }
    public verFrecuenciaActual(pFrecuencia:number):number{
        let frecuencia:number = 0
        frecuencia = pFrecuencia;
        return pFrecuencia;
    }
}