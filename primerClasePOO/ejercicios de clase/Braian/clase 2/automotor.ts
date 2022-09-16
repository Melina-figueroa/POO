class Auto {
    private marca: string;
    private modelo: string;
    private patente: string;

    constructor(pMarca: string, pModelo: string, pPatente: string) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.patente = pPatente;
    }

    public setMarca(marcaAuto: string): void {
        this.marca = marcaAuto;
    }
    public getMarca(): string {
        return this.marca;
    }
    public setModelo(modeloAuto: string): void {
        this.modelo = modeloAuto;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public setPatente(patenteAuto: string): void {
        this.patente = patenteAuto;
    }
    public getPatente(): string {
        return this.patente;
    }
}

class RegistroAutomotor{

    private listadoDeAutos: Auto[];

    constructor(arrDeAutos:Auto[]){
        this.listadoDeAutos = arrDeAutos;
    }
    public buscarAuto(pAuto:Auto){
        for (let i:number = 0; i < this.listadoDeAutos.length; i++){
            if (pAuto.getPatente() == this.listadoDeAutos[i].getPatente()){
                
            }
        }
    }
}
let auto1 = new Auto ('Ford','Fiesta','JZM 820');
let auto2 = new Auto ('Volkswagen','Gol','ZJM 208');
let auto3 = new Auto ('Audi','A1','PZM 802');
let auto4 = new Auto ('Chevrolet','Onix','UZM 823');
let auto5 = new Auto ('Toyota','Corolla','JYM 850');
let auto6 = new Auto ('Jac','S3','JTM 720');

let arrAutosParaRegistrar: Auto[] = [auto1,auto2,auto3,auto4,auto5,auto6];

let registro = new RegistroAutomotor(arrAutosParaRegistrar);