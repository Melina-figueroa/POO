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
exports.Araña = void 0;
var Animal_1 = require("./Animal");
var Araña = /** @class */ (function (_super) {
    __extends(Araña, _super);
    function Araña(pPatas) {
        return _super.call(this, pPatas) || this;
    }
    Araña.prototype.comer = function () {
        console.log('Esta comiendo');
    };
    Araña.prototype.caminar = function (cantidadPatas) {
        console.log('Esta caminando en' + ' ' + cantidadPatas);
    };
    return Araña;
}(Animal_1.Animal));
exports.Araña = Araña;
