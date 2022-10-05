import { Persona } from "./Persona";
export class Futbolista extends Persona{
    protected camiseta:number;
    protected posicion:string;

    constructor(pNombre:string,pApellido:string,pNumPasaporte:number,pFechaDeNacimienton:Date,pCamiseta:number,PPosicion:string){
    super(pNombre,pApellido,pNumPasaporte,pFechaDeNacimienton);
        this.camiseta = pCamiseta;
        this.posicion = PPosicion;
        this.numeroDePasaporte = pNumPasaporte;
        this.fechaDeNacimiento = pFechaDeNacimienton;
}
   public ingresarCamiseta(pCamiseta:number):void{
    this.camiseta = pCamiseta;
   } 
   public obtenerCamiseta():number{
    return this.camiseta;
   }
   public ingresarPosicion(pPosicion:string):void{
    this.posicion = pPosicion;
   } 
   public obtenerPosicion():string{
    return this.posicion;
   }
   public ingresarNumPasaporte (pNumPasaporte:number){
    this.numeroDePasaporte = pNumPasaporte;
   }
   public obtenerNumPasaporte ():number{
    return this.numeroDePasaporte;
   }
   public ingresarFechaNacimiento(pFechaDeNacimiento: Date, pFecha: number): void {
       if (pFecha === 123)
       this.fechaDeNacimiento = pFechaDeNacimiento;
   }
    public obtenerFechaNacimiento(): Date {
        return this.fechaDeNacimiento;
    }
}