import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";
export class CajaDeAhorros extends Cuenta{
    protected interes:number;
    protected saldoMinimo:number ;
    constructor(pCliente:Persona,pCuenta:number){
        super(pCliente,pCuenta);
        this.saldoMinimo = 100000;
    }

    public ingresarSaldoMinimo(pSaldoMin:number):void{
        this.saldoMinimo = pSaldoMin;
    }
    public obtenerSaldoMinimo():number{
        return this.saldoMinimo;
    }
    public ingresarInteres(pInteres:number):void{
        this.interes = pInteres;
    }
    public obtenerInteres():number{
        return this.interes;
    }
    retirar(pRetiro: number): void {
       let restaSaldo = this.saldo - this.saldoMinimo;
        if (restaSaldo > pRetiro){
            this.saldo = this.saldo - pRetiro;
            console.log('Retiro $'+pRetiro);
        }else{
            console.log('Saldo insuficiente su minímo es $'+this.saldoMinimo);
        }
    }
    actualizarSaldo():void{
            this.saldo = this.saldo * this.interes;
        }
    toString():string{
        return  'Número de cuenta: '+this.numeroDeCuenta +'\n'+'Interés aplicado: '+this.obtenerInteres()+'%'+'\n';
    }
 }