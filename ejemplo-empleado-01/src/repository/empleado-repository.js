export class EmpleadoRepository {
  constructor() {
    this.empleados = []
  }

  // CRUD
  create(empleado) {
    this.empleados.push(empleado)
  }

  read() {
    return this.empleados
  }

  update(empleado) {
    for (let e of this.empleados) {
      if (e.cedula == empleado.cedula) {
        e.nombre = empleado.nombre
        e.apellido = empleado.apellido
        return true
      }
    }
    return false
  }

  delete(cedula) {
    const index = this.empleados.findIndex(e => e.cedula == cedula)
    this.empleados = this.empleados.splice(index, 1)
  }

  deleteAll() {
    this.empleados = [] // opcion 1
    this.empleados.length = 0 // opcion 2
  }


}
