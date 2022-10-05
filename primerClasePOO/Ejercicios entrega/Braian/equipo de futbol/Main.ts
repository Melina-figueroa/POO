import { Futbolista } from "./Futbolista";
import { EquipoTecnico } from "./EquipoTecnico";
import { EquipoMedico } from "./EquipoMedico";
import { SeleccionDeFutbol } from "./SelecionDeFutbol";

let fechaDeNacimiento_jugador1:Date = new Date ("06-024-1987");
let fechaDeNacimiento_jugador2:Date = new Date ("06-12-1992");
let fechaDeNacimiento_jugador3:Date = new Date ("03-15-2000");
let fechaDeNacimiento_tecnico1:Date = new Date ("09-30-1980");
let fechaDeNacimiento_tecnico2:Date = new Date ("02-14-1975");
let fechaDeNacimiento_medico1:Date = new Date ("10-12-1979");
let fechaDeNacimiento_medico2:Date = new Date ("01-25-1990");

let jugador1: Futbolista = new Futbolista("Liones","Messi",23456798,fechaDeNacimiento_jugador1,10,"Delantero");
let jugador2: Futbolista = new Futbolista("Lautaro","Martinez",23456798,fechaDeNacimiento_jugador2,9,"Delantero");
let jugador3: Futbolista = new Futbolista("Angel","Di María",23456798,fechaDeNacimiento_jugador3,11,"Delantero");

let listadoFutbolista: Futbolista[] = [jugador1,jugador2,jugador3];

let cuerpoTecnico1: EquipoTecnico = new EquipoTecnico ("Lionel","Scaloni",34567898,fechaDeNacimiento_tecnico1,"Técnico");
let cuerpoTecnico2: EquipoTecnico = new EquipoTecnico ("Pablo","Aymar",34567898,fechaDeNacimiento_tecnico2,"Ayudante de campo");

let listadoEquipoTecnico: EquipoTecnico [] = [cuerpoTecnico1,cuerpoTecnico2];

let medico1: EquipoMedico = new EquipoMedico ("Luis","García",23456798,fechaDeNacimiento_medico1,90856712,"Fisioterapeuta");
let medico2: EquipoMedico = new EquipoMedico ("Rodrigo","Barrios",29854679,fechaDeNacimiento_medico2,34567843,"Preparador Físico");

let listadoEquipoMedico: EquipoMedico [] = [medico1,medico2];

let seleccionArg: SeleccionDeFutbol = new SeleccionDeFutbol("Selección Argentina",listadoFutbolista,listadoEquipoTecnico,listadoEquipoMedico);

console.log(seleccionArg);