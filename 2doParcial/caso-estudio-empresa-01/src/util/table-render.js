function renderClientes(clientes) {
  return clientes.map((c) => {
    return `<tr>
            <td>${c.cedula}</td>
            <td>${c.nombres} ${c.apellidos}</td>
            <td>${c.genero.nombre}</td>
            <td>${c.getEdad()}</td>
            <td>${c.telefono}</td>
            <td>${c.fechaIngreso.toLocaleDateString("en-US")}</td>
            <td>${c.montoVenta}</td>
            <td>${c.tipoPago.codigo}</td>
            <td><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </button>
                <ul class="dropdown-menu sm" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-depositar" data-id="${c.cedula}">Editar</a>
                    <a class="dropdown-item" href="#" rel="accion-debitar" data-id="${c.cedula}">Eliminar</a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>`
  }).join('')
}
export { renderClientes }
