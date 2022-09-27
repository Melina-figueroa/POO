import {GestorLibros} from './gestorLibro';
export class Libro {
  private nombreDelAutor: string;
  private nombreDelLibro: string ;
  private categoria:string;
  constructor(pNombreAutor:string,pNombreLibro:string,pCategoria:string){
    this.nombreDelAutor = pNombreAutor;
    this.nombreDelLibro = pNombreLibro;
    this.categoria = pCategoria;
  }
  private nombreAutor (nAutor:string):void{
    this.nombreDelAutor = nAutor;
  }
  public obtenerNombreAutor():string{
    return this.nombreDelAutor;
  }
  private nombreLibro(nLibro:string):void{
    this.nombreDelLibro = nLibro;
  }
  public obtenerNombreLibro():string{
    return this.nombreDelLibro;
  }
  public nombreCategoria(nCategoria:string):void{
    this.categoria = nCategoria;
  }
  public obtenerNombreCategoria():string{
    return this.categoria;
  }
}
