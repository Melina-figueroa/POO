class Rectangulo{
private base: number;
private altura: number;

constructor(pBase:number,pAltura:number){
    this.base = pBase;
    this.altura = pAltura;
}
public setBase (pBaseObj:number):void{
    this.base = pBaseObj;
}
public getBase ():number{
    return this.base;
}
public setAltura(pAlturaObj:number):void{
    this.altura = pAlturaObj;
}
public getAltura ():number{
    return this.altura;
}
public getArea():number{
    let area: number = this.base * this.altura;
    return area;
}
public getComparaciones(): string{
    let texto: string = '';
    if (this.getBase() == this.getAltura()){
       texto = 'Es un cuadrado';
        return texto;
        }else if (this.base > this.altura){
            texto = 'Acostado';
            return texto;
        }else{
            texto = 'Parado';
            return texto;
        }
}
public getComparaRect(): number{
    let resultado: number = 0;
    if (area1.getArea() == area2.getArea()){
       resultado = 1;
        }else if (area1.getArea() > area2.getArea()){
            resultado = -1;
        }else if (area1.getArea() < area2.getArea()){
            resultado = 0;
        }
        return resultado;
}

}

let area1 = new Rectangulo (25,25);
let area2 = new Rectangulo (15,5);
console.log('Area '+ area1.getArea());
console.log('Orientación '+ area1.getComparaciones());
console.log('Area '+ area2.getArea());
console.log('Orientación '+ area2.getComparaciones());
console.log('Resultado  '+ area1.getComparaRect());
