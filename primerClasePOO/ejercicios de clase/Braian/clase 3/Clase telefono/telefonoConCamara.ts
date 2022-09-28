import {Telefono} from './telefono'
export class TelefonoConCamara extends Telefono{
    protected camaraDeFotos:boolean;
constructor(pPrendido:boolean,pBateria:number, pSacarFotos:boolean){
    super(pPrendido,pBateria);
    this.camaraDeFotos = pSacarFotos;
}
public sacarFotos(pActiva: boolean):string{
    let texto:string=' ';
    if(this.camaraDeFotos === pActiva){
        texto = 'Camara lista para sacar fotos';
    }else{
        texto = 'La camara no esta lista';
    }
    return texto;
}
}