import { isNumberObject } from "util/types";

class atornilladora{
    encendida : boolean;
    marca: string;
    numSerie: number;
    valorTorque: number;
    constructor(nombre:string,nSerie:number,torque:number){
        this.encendida = true;
        this.marca =  nombre;
        this.numSerie = nSerie;
        this.valorTorque = torque;

    }
    obtenerDetalles(){
        console.log('Marca ',this.marca, 'Número de serie ',this.numSerie);
     }
     elegirTorque(){
        console.log('valor de torque ','',this.valorTorque);
    }
    atornillar(){
        if (this.encendida == false) {
            console.log('Para activar presione el botón');
         this.encendida = true;
            console.log('Atornilladora lista para usarse');
        }
    }
atornillando(){
    console.log('Activa');
}
}
let atornillador = new atornilladora("Einhell",212034, 18);
atornillador.elegirTorque();
atornillador.atornillar();
atornillador.atornillando();
atornillador.obtenerDetalles();
