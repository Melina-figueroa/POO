"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(pCliente, pNumCuenta) {
        this.numeroDeCuenta = pNumCuenta;
        this.cliente = pCliente;
        this.saldo = 0;
    }
    Cuenta.prototype.ingresarNumCuenta = function (pNumCuenta) {
        this.numeroDeCuenta = pNumCuenta;
    };
    Cuenta.prototype.obtenerNumCuenta = function () {
        return this.numeroDeCuenta;
    };
    Cuenta.prototype.ingresarSaldo = function (pSaldo) {
        this.saldo = pSaldo;
    };
    Cuenta.prototype.obtenerSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.ingresarCliente = function (pCliente) {
        this.cliente = pCliente;
    };
    Cuenta.prototype.obtenerCliente = function () {
        return this.cliente;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
