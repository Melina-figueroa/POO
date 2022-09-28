export class Telefono {
    protected estaPrendido:boolean;
    protected bateriaActual:number;

    constructor(pEstaPrendido:boolean,pBateriaActual:number){
        this.estaPrendido = pEstaPrendido;
        this.bateriaActual = pBateriaActual;
    }
    public mandarMensajes (pMensaje:string):string{
        let mensaje:string = ' ';
        mensaje = pMensaje;
        return mensaje;
    }
    public hacerLlamada(pLlamar:number):number{
        let llamada:number=0;
        llamada = pLlamar;
        return llamada;
    }
    public prenderApagar(pPrendido:boolean):void{
        this.estaPrendido = pPrendido;
    }
    public obtenerPrenderApagar():boolean{
        let estadoTelefo:boolean = false;
        if(this.estaPrendido === true){
            estadoTelefo = true;
        }else{
            estadoTelefo = false;
        }
        return estadoTelefo;
    }
}