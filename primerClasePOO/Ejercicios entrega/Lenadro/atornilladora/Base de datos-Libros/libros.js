"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(pNombreAutor, pNombreLibro, pCategoria) {
        this.nombreDelAutor = pNombreAutor;
        this.nombreDelLibro = pNombreLibro;
        this.categoria = pCategoria;
    }
    Libro.prototype.nombreAutor = function (nAutor) {
        this.nombreDelAutor = nAutor;
    };
    Libro.prototype.obtenerNombreAutor = function () {
        return this.nombreDelAutor;
    };
    Libro.prototype.nombreLibro = function (nLibro) {
        this.nombreDelLibro = nLibro;
    };
    Libro.prototype.obtenerNombreLibro = function () {
        return this.nombreDelLibro;
    };
    Libro.prototype.nombreCategoria = function (nCategoria) {
        this.categoria = nCategoria;
    };
    Libro.prototype.obtenerNombreCategoria = function () {
        return this.categoria;
    };
    Libro.prototype.toString = function () {
        return 'Titulo: ' + this.obtenerNombreLibro() + ' \n ' + 'Autor: ' + this.obtenerNombreAutor() + ' \n ' + 'Genero: ' + this.obtenerNombreCategoria() + '';
    };
    return Libro;
}());
exports.Libro = Libro;
