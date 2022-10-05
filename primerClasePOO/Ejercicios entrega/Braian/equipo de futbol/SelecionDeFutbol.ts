import { Futbolista } from "./Futbolista";
import { EquipoTecnico } from "./EquipoTecnico";
import { EquipoMedico } from "./EquipoMedico";

export class SeleccionDeFutbol {
    protected listadoFutbolista = new Array <Futbolista>;
    protected listadoEquipoTecnico = new Array <EquipoTecnico>;
    protected listadoEquipoMedico = new Array <EquipoMedico>;
    protected nombreSeleccion:string;
    constructor (pNombreSeleccion:string,pArrFutbolistas: Array<Futbolista>,pArrEquipoTecnico: Array <EquipoTecnico>,pArrEquipoMedico: Array <EquipoMedico>){
        this.nombreSeleccion = pNombreSeleccion;
        this.listadoFutbolista = pArrFutbolistas;
        this.listadoEquipoTecnico = pArrEquipoTecnico;
        this.listadoEquipoMedico = pArrEquipoMedico;
    }

    public ingresarSeleccion(pNombreSeleccion:string):void{
        this.nombreSeleccion = pNombreSeleccion;
    }
    public obtenerSeleccion():string{
        return this.nombreSeleccion;
    }

    public agregarFutbolista(nuevoFutbolista:Futbolista):void{
        this.listadoFutbolista.push(nuevoFutbolista);
    }
    public agregarTecnico(nuevoTecnico:EquipoTecnico):void{
        this.listadoEquipoTecnico.push(nuevoTecnico);
    }
    public agregarMedico(nuevoMedico:EquipoMedico){
        this.listadoEquipoMedico.push(nuevoMedico);
    }
}