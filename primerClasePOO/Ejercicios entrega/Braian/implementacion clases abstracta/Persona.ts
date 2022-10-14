export class Persona{
    protected nombre:string;
    protected apellido:string;
    protected numeroDeDni: number;

    constructor(pNombre:string,pApellido:string,pNumDni:number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.numeroDeDni = pNumDni;
    }
    obtenerNombre():string{
        return this.nombre;
    }

    ingresarNombre(nombre:string){
        this.nombre = nombre;
    }

    obtenerApellido():string{
        return this.apellido;
    }

    ingresarApellido(apellido:string){
        this.apellido = apellido;
    }
    obtenerDni():number{
        return this.numeroDeDni;
    }

    ingresarDni(pDni:number){
        this.numeroDeDni = pDni;
    }
    toString():string{
        return ' Cliente: ' + this.nombre+' '+this.apellido +' \n '+ 'Número de DNI: '+this.numeroDeDni +' \n '+ '';
    }


}