"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var Libros_1 = require("./Libros");
var GestorLibros = /** @class */ (function () {
    function GestorLibros(pNombre, arrListadoLibros) {
        this.listadoDeLibros = new Array;
        this.nombre = pNombre;
        if (arrListadoLibros != undefined)
            this.listadoDeLibros = arrListadoLibros;
    }
    GestorLibros.prototype.registrarLibro = function (pLibro) {
        this.listadoDeLibros.push(pLibro);
    };
    GestorLibros.prototype.cantidadLibros = function () {
        return this.listadoDeLibros.length;
    };
    GestorLibros.prototype.buscarLibro = function (pBuscarLibro) {
        var buscarLibro = false;
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (pBuscarLibro.obtenerNombreLibro() == this.listadoDeLibros[i].obtenerNombreLibro()) {
                buscarLibro = true;
            }
            else {
                buscarLibro = false;
            }
        }
        return buscarLibro;
    };
    GestorLibros.prototype.obtenerLibros = function () {
        var arregloLibros = new Array;
        for (var i = 0; i < this.cantidadLibros(); i++) {
            var titulo = this.listadoDeLibros[i].obtenerNombreLibro();
            var autor = this.listadoDeLibros[i].obtenerNombreAutor();
            var genero = this.listadoDeLibros[i].obtenerNombreCategoria();
            var nuevoLibro = new Libros_1.Libro(titulo, autor, genero);
            arregloLibros.push(nuevoLibro);
        }
        return arregloLibros;
    };
    GestorLibros.prototype.toString = function () {
        var respuesta = this.nombre + "\n";
        for (var i = 0; i < this.cantidadLibros(); i++) {
            respuesta += this.listadoDeLibros[i].toString() + '\n\n';
        }
        return respuesta;
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
