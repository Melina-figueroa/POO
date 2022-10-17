import { CajaDeAhorros } from "./CajaDeAhorros";
import { CuentaCorriente } from "./cuentaCorriente";
import { Persona } from "./persona";

let usuario1:Persona = new Persona("Margarita","Gómez",34483889);
let cajaDeAhorros:CajaDeAhorros = new CajaDeAhorros(usuario1,78973321398);
console.log('\n')
//Consulto usuario//
console.log(usuario1.toString()+'Saldo: $ '+cajaDeAhorros.obtenerSaldo()+'\n');
//Ingreso//
cajaDeAhorros.ingresarSaldo(2000000);
//ingreso los intereses//
cajaDeAhorros.ingresarInteres(1.02);
//declaro variable para obtener el ingreso//
let ingresoSaldo:number = cajaDeAhorros.obtenerSaldo();
//actualizo el saldo//
cajaDeAhorros.actualizarSaldo();
//muestro por consola los datos//
console.log(usuario1.toString()+cajaDeAhorros.toString()+'Ingreso $'+ingresoSaldo+'\n'+'Total en cuenta $'+cajaDeAhorros.obtenerSaldo()+' ');
//ingreso monto a retirar//
cajaDeAhorros.retirar(200000);
//muestro en saldo restante en la cuenta//
console.log('Saldo en cuenta $'+cajaDeAhorros.obtenerSaldo());
//retiro mas de lo que hay en la cuenta, entra en el else y me devuelve un texto//
cajaDeAhorros.retirar(4000000);

console.log('\n');

//usuario de cuenta corriente//
let usuario2:Persona = new Persona('Genaro','Figueroa',11191099);
//creo una nueva cuenta para usuario 2//
let cuentaCorriente:CuentaCorriente = new CuentaCorriente(usuario2,34567890312);
//consulto usuario de cuenta corriente//
console.log(usuario2.toString()+'Saldo: $ '+cuentaCorriente.obtenerSaldo()+'\n');
//Ingreso//
cuentaCorriente.ingresarSaldo(200000);
//declaro variable para obtener el ingreso//
let ingresoSaldoCuentaCorriente:number = cuentaCorriente.obtenerSaldo();
//actualizo el saldo//
cuentaCorriente.actualizarSaldo();
//muestro por consola los datos//
console.log(usuario2.toString()+cuentaCorriente.toString()+'\n'+'Ingreso $'+ingresoSaldoCuentaCorriente+'\n'+'Total en cuenta $'+cuentaCorriente.obtenerSaldo()+' ');
//ingreso monto a retirar//
cuentaCorriente.retirar(100000);
//muestro en saldo restante en la cuenta//
console.log('Saldo en cuenta $'+cuentaCorriente.obtenerSaldo());
//retiro mas de lo que hay en la cuenta, entra en el else y me devuelve un texto//
cuentaCorriente.retirar(150000);
//muestro en saldo restante en la cuenta//
