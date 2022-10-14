import { CajaDeAhorros } from "./CajaDeAhorros";
import { CuentaCorriente } from "./cuentaCorriente";
import { Persona } from "./persona";

let usuario1:Persona = new Persona("Margarita","Gómez",34483889);
let cuentaCorriente:CuentaCorriente = new CuentaCorriente(usuario1,34567890312);
let cajaDeAhorros:CajaDeAhorros = new CajaDeAhorros(usuario1,78973321398);

cajaDeAhorros.ingresarSaldo(2000000);
let saldo:number = cajaDeAhorros.obtenerSaldo();
cajaDeAhorros.ingresarInteres(0.02);
cajaDeAhorros.actualizarSaldo();
console.log(usuario1.toString()+'Saldo ingresado '+saldo);
console.log(cajaDeAhorros.toString());

let retiro = cajaDeAhorros.retirar(3000);
cajaDeAhorros.obtenerRetiro();
cajaDeAhorros.actualizarSaldo();
let saldoActualizado = cajaDeAhorros.obtenerSaldo();
console.log('Retiro: '+retiro+' \n'+ 'En su cuenta quedan: '+ saldoActualizado );


cuentaCorriente.ingresarSaldo(100000);
let saldoCuentaCorriente:number = cuentaCorriente.obtenerSaldo();
cuentaCorriente.actualizarSaldo();
console.log(usuario1.toString()+'Saldo ingresado: '+saldoCuentaCorriente+' \n '+cuentaCorriente.toString());
