import {Persona} from "./Persona"


export abstract class Cuenta {
 numeroDeCuenta:number;
 saldo:number;
 cliente:Persona;
constructor(pNumCuenta:number,pCliente:Persona){
    this.numeroDeCuenta = pNumCuenta;
    this.cliente = pCliente;
    this.saldo = 0;
}
   public ingresarNumCuenta(pNumCuenta:number):void{
    this.numeroDeCuenta = pNumCuenta;
   } 
   public obtenerNumCuenta():number{
    return this.numeroDeCuenta;
   }
   public ingresarSaldo(pSaldo:number):void{
    this.saldo = pSaldo;
   } 
   public obtenerSaldo():number{
    return this.saldo;
   }
   public ingresarCliente(pCliente:Persona):void{
    this.cliente = pCliente;
   } 
   public obtenerCliente():Persona{
    return this.cliente;
   }
 abstract retirar(pRetiro:number):void;
 abstract actualizar():void;

}