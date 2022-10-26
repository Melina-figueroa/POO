"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CursoEspecial = void 0;
var Curso_1 = require("./Curso");
var CursoEspecial = /** @class */ (function (_super) {
    __extends(CursoEspecial, _super);
    function CursoEspecial(nombre, modalidad, nota, notaTrabajo) {
        var _this = _super.call(this, nombre, modalidad, nota) || this;
        _this.notaMinimaTrabajo = notaTrabajo;
        return _this;
    }
    CursoEspecial.prototype.getNotaMinimaTrabajo = function () {
        return this.notaMinimaTrabajo;
    };
    CursoEspecial.prototype.setNotaMinimaTrabajo = function (nota) {
        this.notaMinimaTrabajo = nota;
    };
    return CursoEspecial;
}(Curso_1.Curso));
exports.CursoEspecial = CursoEspecial;
