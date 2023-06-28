class OperacionMatematica {

  constructor(numero1, numero2) {
    this.numero1 = numero1
    this.numero2 = numero2
    this.resultado = 0
  }

  sumar() {
    this.resultado = this.numero1 + this.numero2
    return this.resultado
  }

  restar() {
    this.resultado = this.numero1 - this.numero2
    return this.resultado
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2
    return this.resultado
  }

  dividir() {
    if (this.numero2 == 0) {
      return -1
    }
    this.resultado = this.numero1 / this.numero2
    return this.resultado
  }

}
export { OperacionMatematica }
