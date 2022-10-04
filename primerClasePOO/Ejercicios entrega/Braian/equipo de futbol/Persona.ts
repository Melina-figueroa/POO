
export class Persona{
    protected nombre:string;
    protected apellido:string;
    protected numeroDePasaporte: number;
    protected fechaDeNacimiento: Date;

    constructor(pNombre:string,pApellido:string,pNumPasaporte:number,pFechaNacimiento:Date){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.numeroDePasaporte = pNumPasaporte;
        this.fechaDeNacimiento =pFechaNacimiento;
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

    obtenerFechaNacimiento():string{
        return this.fechaDeNacimiento.toString();
    }

    ingresarFechaNacimiento(pFechaDeNacimiento:Date,pFecha:number){
        if(pFecha == 123)
            this.fechaDeNacimiento = pFechaDeNacimiento;
    }
    toString():string{
        let respuesta:string ="Nombre "+ " " + this.obtenerNombre() + "Apellido "+ " " +this.obtenerApellido()+ " Fecha de nacimiento: " + this.obtenerFechaNacimiento();
        return respuesta;
    }
}