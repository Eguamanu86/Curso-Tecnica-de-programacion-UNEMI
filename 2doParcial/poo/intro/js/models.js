class Genero {
  constructor(codigo) {
    this.codigo = codigo
    this.nombre = codigo == 'M' ? 'Masculino' : 'Femenino'
  }
}

class Persona {

  constructor(cedula, nombres, apellidos, generoCodigo, fechaNacimiento, direccion, telefono, email) {
    this.cedula = cedula
    this.nombres = nombres
    this.apellidos = apellidos
    this.genero = new Genero(generoCodigo)
    this.fechaNacimiento = fechaNacimiento
    this.direccion = direccion
    this.telefono = telefono
    this.email = email
  }

  toString() {
    return `cedula: ${this.cedula}, nombres: ${this.nombres} ${this.apellidos}`
  }

}


class Empleado extends Persona {
  constructor(cedula, nombres, apellidos, generoCodigo, fechaNacimiento, direccion, telefono, email,
    sueldoBase,
    horasTrabajadas,
    fechaIngreso
  ) {
    super(cedula, nombres, apellidos, generoCodigo, fechaNacimiento, direccion, telefono, email)
  }
}

class Cliente extends Persona {
  constructor(cedula, nombres, apellidos, generoCodigo, fechaNacimiento, direccion, telefono, email,
    fechaIngreso,
    totalVentas
  ) {
    super(cedula, nombres, apellidos, generoCodigo, fechaNacimiento, direccion, telefono, email)

  }

}

export { Empleado, Cliente }
