import { Animal } from "./Animal";
import { Gato } from "./Gato";
import { Pez } from "./Pez";
import { Araña } from "./Araña";
import { ListaDeAnimales } from "./ListaDeAnimales";

let animal1:Gato = new Gato('Susi',4);
let animal2:Pez = new Pez('Doris',2,0);
let animal3:Araña = new Araña(8);

let arregloDeAnimales: Animal [] = [animal1,animal2];
let listaDeAnimales: ListaDeAnimales = new ListaDeAnimales(arregloDeAnimales);

console.log(listaDeAnimales.buscarAnimal(animal3));
listaDeAnimales.agregarAnimal(animal3);
console.log(animal3);
listaDeAnimales.removerAnimal(animal1);
console.log(listaDeAnimales.buscarAnimal(animal1));



