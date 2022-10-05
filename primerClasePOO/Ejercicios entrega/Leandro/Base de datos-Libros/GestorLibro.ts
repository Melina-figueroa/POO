import { Libro } from './Libros'
export class GestorLibros {
    private listadoDeLibros = new Array <Libro>;
    private nombre:string;
    constructor(pNombre:string,arrListadoLibros?: Array<Libro>) {
        this.nombre = pNombre;
        if(arrListadoLibros != undefined)
        this.listadoDeLibros = arrListadoLibros;
    }

    public registrarLibro(pLibro: Libro): void {
        this.listadoDeLibros.push(pLibro);
    }

    public cantidadLibros():number{
        return this.listadoDeLibros.length;
    }

    public buscarLibro(pBuscarLibro: Libro): boolean {
        let buscarLibro: boolean = false;
         for (let i: number = 0; i < this.listadoDeLibros.length; i++) {
             if (pBuscarLibro.obtenerNombreLibro() == this.listadoDeLibros[i].obtenerNombreLibro()) {
                 buscarLibro = true;
             } else {
                 buscarLibro = false;
             }
         }
         return buscarLibro;
     }
 
   public  obtenerLibros():Array<Libro>{
        let arregloLibros = new Array<Libro>;
        for (let i:number = 0; i < this.cantidadLibros(); i++) {
            let titulo = this.listadoDeLibros[i].obtenerNombreLibro();
            let autor = this.listadoDeLibros[i].obtenerNombreAutor();
            let genero = this.listadoDeLibros[i].obtenerNombreCategoria();
            let nuevoLibro = new Libro(titulo,autor,genero);
            arregloLibros.push(nuevoLibro);       
          }
        
        return arregloLibros;
    }
    public toString():string{
        let respuesta:string = this.nombre + "\n";
        for (let i: number = 0;i < this.cantidadLibros();i++){
        respuesta += this.listadoDeLibros[i].toString()+ '\n\n';
    }
    return respuesta;
    }

}



