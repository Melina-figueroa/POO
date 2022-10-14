import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";
export class CuentaCorriente extends Cuenta{
protected interesFijo: number;
    constructor(pCliente:Persona,pCuenta:number){
        super(pCliente,pCuenta);
        this.interesFijo = 0.015;
    }

    retirar(pRetiro: number): void {
        if(this.saldo > pRetiro){
            this.saldo = this.saldo - pRetiro;
        }
    }
    actualizarSaldo(): number {
        let total:number = 0;
        this.saldo = this.saldo * this.interesFijo;
        total = this.saldo + this.interesFijo;
    return total;
    }
    toString():string{
        return  'Cuenta corriente '+ this.numeroDeCuenta+ ' \n ' +'Intereses generados: '+this.saldo+ ' '  ;
    }

}