import { InterfazPersona } from "./InterfazPersona";
export class Persona implements InterfazPersona{
protected nombre:string;
protected apellido:string;

constructor(pNombre:string,pApellido:string){
    this.nombre = pNombre;
    this.apellido = pApellido;
}

public ingresarNombre(pNombre: string): void {
    this.nombre = pNombre;
}
public ingresarApellido(pApellido: string): void {
    this.apellido = pApellido;
}
public obtenerNombre(): string {
    return this.nombre;
}
public obtenerApellido(): string {
    return this.apellido;
}
}