class Auto{
private marca: string;
private modelo: string;
private patente: string;

constructor(pMarca:string,pModelo:string,pPatente:string){
    this.marca = pMarca;
    this.modelo = pModelo;
    this.patente = pPatente;
}

public setMarca(marcaAuto:string):void{
    this.marca = marcaAuto;
}
public getMarca():string{
    return this.marca;
}
public setModelo(modeloAuto:string):void{
    this.modelo = modeloAuto;
}
public getModelo():string{
    return this.modelo;
}
public setPatente(patenteAuto:string):void{
    this.patente = patenteAuto;
}
public getPatente():string{
    return this.patente;
}
}