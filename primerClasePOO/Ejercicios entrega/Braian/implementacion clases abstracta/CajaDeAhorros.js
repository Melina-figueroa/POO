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
exports.CajaDeAhorros = void 0;
var Cuenta_1 = require("./Cuenta");
var CajaDeAhorros = /** @class */ (function (_super) {
    __extends(CajaDeAhorros, _super);
    function CajaDeAhorros(pCliente, pCuenta) {
        var _this = _super.call(this, pCliente, pCuenta) || this;
        _this.saldoMinimo = 100000;
        return _this;
    }
    CajaDeAhorros.prototype.ingresarSaldoMinimo = function (pSaldoMin) {
        this.saldoMinimo = pSaldoMin;
    };
    CajaDeAhorros.prototype.obtenerSaldoMinimo = function () {
        return this.saldoMinimo;
    };
    CajaDeAhorros.prototype.ingresarInteres = function (pInteres) {
        this.interes = pInteres;
    };
    CajaDeAhorros.prototype.obtenerInteres = function () {
        return this.interes;
    };
    CajaDeAhorros.prototype.retirar = function (pRetiro) {
        var restaSaldo = this.saldo - this.saldoMinimo;
        if (restaSaldo > pRetiro) {
            this.saldo = this.saldo - pRetiro;
            console.log('Retiro $' + pRetiro);
        }
        else {
            console.log('Saldo insuficiente su minímo es $' + this.saldoMinimo);
        }
    };
    CajaDeAhorros.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interes;
    };
    CajaDeAhorros.prototype.toString = function () {
        return 'Número de cuenta: ' + this.numeroDeCuenta + '\n' + 'Interés aplicado: ' + this.obtenerInteres() + '%' + '\n';
    };
    return CajaDeAhorros;
}(Cuenta_1.Cuenta));
exports.CajaDeAhorros = CajaDeAhorros;
