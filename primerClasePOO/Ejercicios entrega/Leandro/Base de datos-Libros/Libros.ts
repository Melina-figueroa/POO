export class Libro {
  private nombreDelAutor: string;
  private nombreDelLibro: string;
  private categoria: string;
  constructor(pNombreAutor: string, pNombreLibro: string, pCategoria: string) {
    this.nombreDelAutor = pNombreAutor;
    this.nombreDelLibro = pNombreLibro;
    this.categoria = pCategoria;
  }
  public nombreAutor(nAutor: string): void {
    this.nombreDelAutor = nAutor;
  }
  public obtenerNombreAutor(): string {
    return this.nombreDelAutor;
  }
  public nombreLibro(nLibro: string): void {
    this.nombreDelLibro = nLibro;
  }
  public obtenerNombreLibro(): string {
    return this.nombreDelLibro;
  }
  public nombreCategoria(nCategoria: string): void {
    this.categoria = nCategoria;
  }
  public obtenerNombreCategoria(): string {
    return this.categoria;
  }
  toString():string{
    return 'Titulo: ' + this.obtenerNombreLibro() +' \n '+ 'Autor: '+this.obtenerNombreAutor() +' \n '+ 'Genero: '+this.obtenerNombreCategoria() + '';
}
}

