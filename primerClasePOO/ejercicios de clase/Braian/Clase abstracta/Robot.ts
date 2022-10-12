export abstract class  Robot{
    protected marca:string;
    protected voltaje:number;

    constructor (pMarca:string,pVoltaje:number){
        this.marca = pMarca;
        this.voltaje = pVoltaje;
    }

    abstract limpiar();
    abstract cargar();

    public saludar():void{
        console.log("Buenos días");
    }
} 
    
        
    
