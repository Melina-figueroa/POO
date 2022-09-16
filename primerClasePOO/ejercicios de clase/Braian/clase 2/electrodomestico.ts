import { get } from "http";

class Electrodomestico {
    private nombre: string;
    private precioBase: number;
    private color: string;
    private consumoEnergetico: number;
    private peso: number;

    constructor(pNombre:string,pPrecio:number,pColor:string,pConsumo:number,pPeso:number){
        this.nombre = pNombre;
        this.precioBase = pPrecio;
        this.color = pColor;
        this.consumoEnergetico = pConsumo;
        this.peso = pPeso;
    }
//setear parametro
public  setNombre(nombreElec:string):void{
    this.nombre = nombreElec;
}

//mostrar parametro
public getNombre():string{
 return this.nombre;
}

//setear parametro
public  setPrecio(precioElec:number):void{
    this.precioBase = precioElec;
}

//mostrar parametro
public getPrecio():number{
 return this.precioBase;
}

//setear parametro
public  setColor(colorElec:string):void{
    this.color = colorElec;
}

//mostrar parametro
public getColor():string{
 return this.color;
}
 public setConsumoEner(consumoElec:number):void{
    this.consumoEnergetico = consumoElec;
 }
 public getConsumoElec():number{
    return this.consumoEnergetico;
 }
 public getBalance():number{
let balance: number = this.precioBase/this.peso;
return balance;
 }
public getGamaElec():string{
    let gamaProduc: string = " ";
    if (this.getBalance() < 3000){
        gamaProduc = 'Gama baja';
    }else{
        gamaProduc = 'Gama alta'
    }
    return gamaProduc;

}
    }
  
  
    let cafetera_samsung = new Electrodomestico ('Samsung',6000,'Rojo',900,2);
console.log('Nombre del producto '+ cafetera_samsung.getNombre());
console.log('Balance del producto '+ cafetera_samsung.getBalance());
console.log('Gama del producto '+ cafetera_samsung.getGamaElec());


let cafetera_LG = new Electrodomestico ('LG',1000,'Negro',300,6)
console.log('Nombre del producto '+ cafetera_LG.getNombre());
console.log('Balance del producto '+ cafetera_LG.getBalance());
console.log('Gama del producto '+ cafetera_LG.getGamaElec());