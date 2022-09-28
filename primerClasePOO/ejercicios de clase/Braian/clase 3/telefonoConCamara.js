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
exports.TelefonoConCamara = void 0;
var telefono_1 = require("./telefono");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(pPrendido, pBateria, pSacarFotos) {
        var _this = _super.call(this, pPrendido, pBateria) || this;
        _this.camaraDeFotos = pSacarFotos;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFotos = function (pActiva) {
        var texto = ' ';
        if (this.camaraDeFotos === pActiva) {
            texto = 'Camara lista para sacar fotos';
        }
        else {
            texto = 'La camara no esta lista';
        }
        return texto;
    };
    return TelefonoConCamara;
}(telefono_1.Telefono));
exports.TelefonoConCamara = TelefonoConCamara;
