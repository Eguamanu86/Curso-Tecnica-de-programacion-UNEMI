import { Empleado, Cliente } from "./models.js";

let empleados = []

const empleado1 = new Empleado(
  '0926400615',
  'Ernesto',
  'Guaman',
  'M',
  '1986-02-03',
  '9 de Octubre y Garcia Moreno',
  '0956556655',
  'ernesto@gmail.com'
)
const empleado2 = new Empleado(
  '09264006789',
  'Juan',
  'Piguave',
  'M',
  '1985-04-08',
  '9 de Octubre y Garcia Moreno',
  '0956889665',
  'JuanP@gmail.com'
)

const empleado3 = new Empleado(
  '09865599899',
  'Maria',
  'Perez',
  'F',
  '1988-08-08',
  '9 de Octubre y Garcia Moreno',
  '0455665887',
  'Mperez@gmail.com'
)

empleados.push(empleado1)
empleados.push(empleado2)
empleados.push(empleado3)

console.log(empleados.filter((e) => e.cedula == '0926400615').shift())
