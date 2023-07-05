import { ClienteRepository } from '../repositories/cliente-repository.js'
import { Cliente } from '../entity/models.js'

export class ClienteUseCase {
  constructor() {
    this.clienteRepository = new ClienteRepository()
  }

  crear(data) {
    const cliente = Cliente.storeData(data)
    this.clienteRepository.create(cliente)
  }

  getClientes() {
    return this.clienteRepository.read()
  }

}
