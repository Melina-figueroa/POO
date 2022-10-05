import { Libro } from "./Libros";
import { GestorLibros } from "./GestorLibro";

let biblioteca = new GestorLibros ("Biblioteca");

let libro1 = new Libro("John Katzenbach", "El club de los psicópatas", "Drama");
let libro2 = new Libro("John Katzenbach", "La historia del loco", "Drama");
let libro3 = new Libro("John Katzenbach", "El psicoanalista", "Drama");
let libro4 = new Libro("John Katzenbach", "Juicio final", "Drama");
let libro5 = new Libro("John Katzenbach", "Retrato en sangre", "Drama");
let libro6 = new Libro("John Katzenbach", "El profesor", "Drama");
let libro7 = new Libro("John Katzenbach", "Jaque al psicoanalista", "Drama");
let libro8 = new Libro("John Katzenbach", "Un final perfecto", "TerrorPsicologíco");

biblioteca.registrarLibro(libro1);
biblioteca.registrarLibro(libro2);
biblioteca.registrarLibro(libro3);
biblioteca.registrarLibro(libro4);
biblioteca.registrarLibro(libro5);
biblioteca.registrarLibro(libro6);
biblioteca.registrarLibro(libro7);

let arreglo:Array<Libro> = biblioteca.obtenerLibros();
arreglo.push(libro8);

let biblioteca2 = new GestorLibros("Biblioteca",arreglo);

console.log(biblioteca.toString());

console.log(biblioteca2.toString());


