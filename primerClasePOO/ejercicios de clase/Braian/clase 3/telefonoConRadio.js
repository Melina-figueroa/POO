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
exports.TelefonoConRadio = void 0;
var telefono_1 = require("./telefono");
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(pPrendido, pBateria, pFrecuencia) {
        var _this = _super.call(this, pPrendido, pBateria) || this;
        _this.frecuenciaActual = pFrecuencia;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function (pFrecuencia) {
        var frecuencia = 0;
        frecuencia = pFrecuencia;
        return pFrecuencia;
    };
    return TelefonoConRadio;
}(telefono_1.Telefono));
exports.TelefonoConRadio = TelefonoConRadio;
