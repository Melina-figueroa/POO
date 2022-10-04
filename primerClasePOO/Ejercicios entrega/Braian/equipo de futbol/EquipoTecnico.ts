import { Persona } from "./Persona";
export class EquipoTecnico extends Persona{
    protected puestoEnEquipo: string;
    constructor(pNombre:string,pApellido:string,pNumPasaporte:number,pFechaDeNacimienton:Date,pPuestoEnEquipo:string){
        super(pNombre,pApellido,pNumPasaporte,pFechaDeNacimienton);
            this.puestoEnEquipo = pPuestoEnEquipo;
    }
    public ingresarPuesto(pPuestoEnEquipo:string){
        this.puestoEnEquipo = pPuestoEnEquipo;
       } 
       public obtenerPuesto():string{
        return this.puestoEnEquipo;
       }
    
    }
