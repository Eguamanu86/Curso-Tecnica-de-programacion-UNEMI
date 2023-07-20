class Empleado {

  constructor(cedula, nombres, apellidos, genero, fechaNacimiento, fechaIngreso, salarioBasico) {
    this.cedula = cedula
    this.nombres = nombres
    this.apellidos = apellidos
    this.genero = genero
    this.fechaNacimiento = new Date(fechaNacimiento)
    this.fechaIngreso = new Date(fechaIngreso)
    this.salarioBasico = Number(salarioBasico)
    this.prestaciones = 0

  }

  getEdad() {
    const hoy = new Date() // fecha actual

    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear()

    const diferenciaMeses = hoy.getMonth() - this.fechaNacimiento.getMonth()
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
      edad--
    }
    return edad
  }

  getAntiguedad() {

    const hoy = new Date() // fecha actual

    let antiguedad = hoy.getFullYear() - this.fechaIngreso.getFullYear()

    const diferenciaMeses = hoy.getMonth() - this.fechaIngreso.getMonth()
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < this.fechaIngreso.getDate())) {
      antiguedad--
    }
    return antiguedad

  }

  getPrestaciones() {
    this.prestaciones = (this.getAntiguedad() * this.salarioBasico) / 12
    return this.prestaciones
  }


}
