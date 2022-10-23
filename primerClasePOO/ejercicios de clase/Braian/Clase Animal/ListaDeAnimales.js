"use strict";
exports.__esModule = true;
exports.ListaDeAnimales = void 0;
var ListaDeAnimales = /** @class */ (function () {
    function ListaDeAnimales(pListaDeAnimales) {
        this.listaDeAnimales = new Array;
        this.listaDeAnimales = pListaDeAnimales;
    }
    ListaDeAnimales.prototype.buscarAnimal = function (pAnimal) {
        var respuesta = ' ';
        for (var i = 0; i < this.listaDeAnimales.length; +i++) {
            var posicion = -1;
            if (this.listaDeAnimales[i] === pAnimal) {
                respuesta = 'Animal encontrado en ' + posicion;
            }
            respuesta = 'Animal no encontrado ' + posicion;
        }
        return respuesta;
    };
    ListaDeAnimales.prototype.agregarAnimal = function (pAgregarAnimal) {
        this.listaDeAnimales.push(pAgregarAnimal);
    };
    ListaDeAnimales.prototype.removerAnimal = function (pElimarAnimal) {
        for (var i = 0; i < this.listaDeAnimales.length; i++) {
            if (this.listaDeAnimales[i] === pElimarAnimal) {
                this.listaDeAnimales.splice(i, 1);
            }
        }
    };
    return ListaDeAnimales;
}());
exports.ListaDeAnimales = ListaDeAnimales;
