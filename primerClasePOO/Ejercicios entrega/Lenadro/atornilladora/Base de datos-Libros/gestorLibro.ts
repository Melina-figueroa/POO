import {Libro} from './libros'
export class GestorLibros {
    private listadoDeLibros:Libro[];

    constructor(arrListadoLibros:Libro[]){
        this.listadoDeLibros = arrListadoLibros;
    }
    public buscarLibro(pBuscarLibro:Libro):string{
        let nombreLib: string = " ";
        for (let i:number = 0; i < this.listadoDeLibros.length; i++){
            if (pBuscarLibro.obtenerNombreLibro() == this.listadoDeLibros[i].obtenerNombreLibro()){
                nombreLib = "Libro encontrado en posición "+[i];
                        }else{
                            nombreLib = "No existe en la base ";
                        }
        }
        return nombreLib;
    }
    public registrarLibro(pLibro:Libro):void{
        this.listadoDeLibros.push(pLibro);
    }
    
}
let libro1 = new Libro("John Katzenbach","El club de los psicópatas","Drama");
let libro2 = new Libro("John Katzenbach","La historia del loco","Drama");
let libro3 = new Libro("John Katzenbach","El psicoanalista","Drama");
let libro4 = new Libro("John Katzenbach","Juicio final","Drama");
let libro5 = new Libro("John Katzenbach","Retrato en sangre","Drama");
let libro6 = new Libro("John Katzenbach","El profesor","Drama");
let libro7 = new Libro("John Katzenbach","Jaque al psicoanalista","Drama");

let arrLibros:Libro[] = [libro1,libro2,libro3,libro4,libro5,libro6,libro7];
let listaLibros: GestorLibros = new GestorLibros (arrLibros);
let libro8 = new Libro ("John Katzenbach","Un final perfecto","TerrorPsicologíco");
listaLibros.registrarLibro(libro8);

let consultaBusqueda:string=listaLibros.buscarLibro(libro8);
console.log(consultaBusqueda);


