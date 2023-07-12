import { EmpleadoRepository } from '../repositories/empleado-repository.js'
import { Empleado } from '../entity/models.js'

export class EmpleadoUseCase {
  constructor() {
    this.empleadoRepository = new EmpleadoRepository()
  }

  crear(data) {
    const empleado = Empleado.storeData(data)
    this.empleadoRepository.create(empleado)
  }

  getEmpleados() {
    return this.empleadoRepository.read()
  }

  getMayorSueldoFinMes() {
    const empleados = this.empleadoRepository.read()
    const sueldos = empleados.map(e => e.getSueldoPagarFinMes())
    console.log(sueldos)
    const maximoSueldo = Math.max(...sueldos)
    console.log(maximoSueldo)
    return maximoSueldo
  }

  getEmpleadoMayorSueldoFinMes() {
    const empleados = this.empleadoRepository.read()
    let mayorSueldo = 0
    let empleado = null

    for (const e of empleados) {
      const sueldo = e.getSueldoPagarFinMes()
      if (sueldo > mayorSueldo) {
        mayorSueldo = sueldo
        empleado = e
      }
    }
    return empleado
  }



}
