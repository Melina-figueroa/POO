import { isNumberObject } from "util/types";

class Atornilladora {
    private encendida: boolean;
    private marca: string;
    private numSerie: number;
    private valorTorque: number;
    constructor(nombre: string, nSerie: number, torque: number) {
        this.encendida = this.encendida;
        this.marca = nombre;
        this.numSerie = nSerie;
        this.valorTorque = torque;

    }
   public setMarca(pMarca:string):void {
        this.marca = pMarca;
    }
    public getMarca():string{
        return this.marca;
    }
    public setNumSerie(pNumSerie:number):void {
        this.numSerie = pNumSerie;
    }
    public getNumSerie():number{
        return this.numSerie;
    }
    public setTorque(pTorque:number):void {
        this.valorTorque = pTorque;
    }
    public getTorque():number{
        return this.valorTorque;
    }
    public setAtornillar(pEncendida:boolean):void {
        this.encendida = pEncendida;
    }
    public getAtornillar(pEstado:boolean):string{
        let textoEncendido: string;
        if (pEstado == false){
            textoEncendido = 'Mantenga presionado el botón pulsador para activarla';     
    }else{
        textoEncendido = 'Encendida';
    }
    return textoEncendido;
}
}
let atornillador = new Atornilladora("Einhell", 212034, 18);

console.log(atornillador.getMarca);
console.log(atornillador.getNumSerie());
console.log(atornillador.getTorque());
console.log(atornillador.getAtornillar(true));
