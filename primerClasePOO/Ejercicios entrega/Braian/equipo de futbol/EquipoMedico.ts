import { Persona } from "./Persona";
export class EquipoMedico extends Persona{
    protected numeroDeMatricula: number;
    protected especialidad: string;

    constructor(pNombre:string,pApellido:string,pNumPasaporte:number,pFechaDeNacimienton:Date,pNumeroDeMatricula:number,pEspecialidad:string){
        super(pNombre,pApellido,pNumPasaporte,pFechaDeNacimienton);
            this.numeroDeMatricula = pNumeroDeMatricula;
    }
    public ingresarMatricula(pNumeroDeMatricula:number){
        this.numeroDeMatricula = pNumeroDeMatricula;
       } 
       public obtenerMatricula():number{
        return this.numeroDeMatricula;
       }
       public ingresarEspecialidad(pEspecialidad:string){
        this.especialidad = pEspecialidad;
       } 
       public obteneEspecialidad():string{
        return this.especialidad;
       }

}