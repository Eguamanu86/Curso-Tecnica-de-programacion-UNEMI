import { OperacionMatematica } from './calculadora.js'

const numero1 = 5
const numero2 = 0
// instancia            =  Clase plantilla         Constructor()
let operacionMatematica = new OperacionMatematica(numero1, numero2)
// llamamos los metodos o acciones
console.log(operacionMatematica.sumar())
console.log(operacionMatematica.restar())
console.log(operacionMatematica.multiplicar())
console.log(operacionMatematica.dividir())
