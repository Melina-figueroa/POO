import { Persona } from "./Persona";
export class Futbolista extends Persona{
    protected camiseta:number;
    protected posicion:number;

    constructor(pNombre:string,pApellido:string,pNumPasaporte:number,pFechaDeNacimienton:Date,pCamiseta:number,PPosicion:number){
    super(pNombre,pApellido,pNumPasaporte,pFechaDeNacimienton);
        this.camiseta = pCamiseta;
        this.posicion = PPosicion;
}
   public ingresarCamiseta(pCamiseta:number){
    this.camiseta = pCamiseta;
   } 
   public obtenerCamiseta():number{
    return this.camiseta;
   }
   public ingresarPosicion(pPosicion:number){
    this.posicion = pPosicion;
   } 
   public obtenerPosicion():number{
    return this.posicion;
   }

}