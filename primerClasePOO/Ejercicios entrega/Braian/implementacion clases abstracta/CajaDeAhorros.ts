import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";
export class CajaDeAhorros extends Cuenta{
    protected interes:number;
    protected saldoMinimo:number;

    constructor(pCliente:Persona,pCuenta:number){
        super(pCliente,pCuenta);
    }

    public ingresarRetiro(pSaldoMin:number):void{
        this.saldoMinimo = pSaldoMin;
    }
    public obtenerRetiro():number{
        return this.saldoMinimo;
    }
    public ingresarInteres(pInteres:number):void{
        this.interes = pInteres;
    }
    public obtenerInteres():number{
        return this.interes;
    }
    retirar(pRetiro: number): void {
        let retiro = this.saldo - pRetiro;
        if (0 < this.saldoMinimo){
            this.saldo = this.saldo - pRetiro;
        }
    }
    actualizarSaldo():void{
        this.saldo = this.saldo * this.interes;
    }
  
    toString():string{
        return  ' Número de cuenta: '+this.numeroDeCuenta +' \n '+ 'Interés aplicado: '+this.interes+'%'+ ' \n '+ 'Intereses generados: '+this.saldo+ '\n';
    }
    
}