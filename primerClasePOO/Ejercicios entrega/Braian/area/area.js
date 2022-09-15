var Rectangulo = /** @class */ (function () {
    function Rectangulo(pBase, pAltura) {
        this.base = pBase;
        this.altura = pAltura;
    }
    Rectangulo.prototype.setBase = function (pBaseObj) {
        this.base = pBaseObj;
    };
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.setAltura = function (pAlturaObj) {
        this.altura = pAlturaObj;
    };
    Rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Rectangulo.prototype.getArea = function () {
        var area = this.base * this.altura;
        return area;
    };
    Rectangulo.prototype.getComparaciones = function () {
        var texto = '';
        if (this.getBase() == this.getAltura()) {
            texto = 'Es un cuadrado';
            return texto;
        }
        else if (this.base > this.altura) {
            texto = 'Acostado';
            return texto;
        }
        else {
            texto = 'Parado';
            return texto;
        }
    };
    Rectangulo.prototype.getComparaRect = function () {
        var resultado = 0;
        if (area1.getArea() == area2.getArea()) {
            resultado = 1;
        }
        else if (area1.getArea() > area2.getArea()) {
            resultado = -1;
        }
        else if (area1.getArea() < area2.getArea()) {
            resultado = 0;
        }
        return resultado;
    };
    return Rectangulo;
}());
var area1 = new Rectangulo(25, 25);
var area2 = new Rectangulo(15, 5);
console.log('Area ' + area1.getArea());
console.log('Orientación ' + area1.getComparaciones());
console.log('Area ' + area2.getArea());
console.log('Orientación ' + area2.getComparaciones());
console.log('Resultado ' + area1.getComparaRect());
