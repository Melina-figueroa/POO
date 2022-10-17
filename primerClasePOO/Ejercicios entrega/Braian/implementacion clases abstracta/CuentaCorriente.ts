import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";
export class CuentaCorriente extends Cuenta{
protected interesFijo: number;
    constructor(pCliente:Persona,pCuenta:number){
        super(pCliente,pCuenta);
        this.interesFijo = 1.015;
    }

    retirar(pRetiro: number): void {
        if(this.saldo > pRetiro){
            this.saldo=this.saldo - pRetiro;
            console.log('Retiro'+' '+ pRetiro);
        }else{
            console.log('Saldo insuficiente');
        }
    }
    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interesFijo;
    }    
     toString():string{
        return  'Cuenta corriente '+this.numeroDeCuenta+ '\n'+' Intereses generados: '+this.interesFijo+'%'+'\n';
    }

}