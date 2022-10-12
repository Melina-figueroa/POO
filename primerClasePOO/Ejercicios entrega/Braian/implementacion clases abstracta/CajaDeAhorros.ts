import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";
export class CajaDeAhorros extends Cuenta{
    protected interes:number;
    protected saldoMin:number;

    constructor(pCliente:Persona,pCuenta:number){
        super(pCliente,pCuenta);
    }

    public ingresarSaldoMinimo(pSaldoMin:number):void{
        this.saldoMin = pSaldoMin;
    }
    public obtenerSaldoMinimo():number{
        return this.saldoMin;
    }
    public ingresarInteres(pInteres:number):void{
        this.interes = pInteres;
    }
    public obtenerInteres():number{
        return this.interes;
    }

}