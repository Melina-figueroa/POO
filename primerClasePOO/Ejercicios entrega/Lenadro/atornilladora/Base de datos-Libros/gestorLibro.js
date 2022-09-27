"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var libros_1 = require("./libros");
var GestorLibros = /** @class */ (function () {
    function GestorLibros(arrListadoLibros) {
        this.listadoDeLibros = arrListadoLibros;
    }
    GestorLibros.prototype.buscarLibro = function (pBuscarLibro) {
        var nombreLib = " ";
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (pBuscarLibro.obtenerNombreLibro() == this.listadoDeLibros[i].obtenerNombreLibro()) {
                nombreLib = "Libro encontrado en posición " + [i];
            }
            else {
                nombreLib = "No existe en la base ";
            }
        }
        return nombreLib;
    };
    GestorLibros.prototype.registrarLibro = function (pLibro) {
        this.listadoDeLibros.push(pLibro);
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
var libro1 = new libros_1.Libro("John Katzenbach", "El club de los psicópatas", "Drama");
var libro2 = new libros_1.Libro("John Katzenbach", "La historia del loco", "Drama");
var libro3 = new libros_1.Libro("John Katzenbach", "El psicoanalista", "Drama");
var libro4 = new libros_1.Libro("John Katzenbach", "Juicio final", "Drama");
var libro5 = new libros_1.Libro("John Katzenbach", "Retrato en sangre", "Drama");
var libro6 = new libros_1.Libro("John Katzenbach", "El profesor", "Drama");
var libro7 = new libros_1.Libro("John Katzenbach", "Jaque al psicoanalista", "Drama");
var arrLibros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7];
var listaLibros = new GestorLibros(arrLibros);
var libro8 = new libros_1.Libro("John Katzenbach", "Un final perfecto", "TerrorPsicologíco");
listaLibros.registrarLibro(libro8);
var consultaBusqueda = listaLibros.buscarLibro(libro8);
console.log(consultaBusqueda);
