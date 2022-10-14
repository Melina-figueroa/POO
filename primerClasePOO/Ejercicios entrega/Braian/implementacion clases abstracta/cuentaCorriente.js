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
exports.CuentaCorriente = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente(pCliente, pCuenta) {
        var _this = _super.call(this, pCliente, pCuenta) || this;
        _this.interesFijo = 0.015;
        return _this;
    }
    CuentaCorriente.prototype.retirar = function (pRetiro) {
        if (this.saldo > pRetiro) {
            this.saldo = this.saldo - pRetiro;
        }
    };
    CuentaCorriente.prototype.actualizarSaldo = function () {
        var total = 0;
        this.saldo = this.saldo * this.interesFijo;
        total = this.saldo + this.interesFijo;
        return total;
    };
    CuentaCorriente.prototype.toString = function () {
        return 'Cuenta corriente ' + this.numeroDeCuenta + ' \n ' + 'Intereses generados: ' + this.saldo + ' ';
    };
    return CuentaCorriente;
}(Cuenta_1.Cuenta));
exports.CuentaCorriente = CuentaCorriente;
