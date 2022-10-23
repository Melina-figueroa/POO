"use strict";
exports.__esModule = true;
var Gato_1 = require("./Gato");
var Pez_1 = require("./Pez");
var Ara_a_1 = require("./Ara\u00F1a");
var ListaDeAnimales_1 = require("./ListaDeAnimales");
var animal1 = new Gato_1.Gato('Susi', 4);
var animal2 = new Pez_1.Pez('Doris', 2, 0);
var animal3 = new Ara_a_1.Araña(8);
var arregloDeAnimales = [animal1, animal2];
var listaDeAnimales = new ListaDeAnimales_1.ListaDeAnimales(arregloDeAnimales);
console.log(listaDeAnimales.buscarAnimal(animal3));
listaDeAnimales.agregarAnimal(animal3);
console.log(animal3);
listaDeAnimales.removerAnimal(animal1);
console.log(listaDeAnimales.buscarAnimal(animal1));
