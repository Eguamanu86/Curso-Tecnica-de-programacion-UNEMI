
import { ClienteUseCase } from "../../src/use-case/cliente-use-case.js"
import { renderClientes } from "../../src/util/table-render.js"

const clienteUseCase = new ClienteUseCase()

const formCliente = document.querySelector('#id-form-cliente')
const tableClientesTbody = document.querySelector('#id-table-clientes > tbody')

window.addEventListener("DOMContentLoaded", (event) => {
  const template = renderClientes(clienteUseCase.getClientes())
  tableClientesTbody.innerHTML = template
})

formCliente.addEventListener('submit', (event) => {

  event.preventDefault()
  const formdata = new FormData(event.target)
  // // covertimos los datos en objeto key: values (diccionario)
  const data = Object.fromEntries(formdata.entries())

  clienteUseCase.crear(data)

  const template = renderClientes(clienteUseCase.getClientes())
  tableClientesTbody.innerHTML = template
})
