import { LocalStorageRepository } from './local-storage-repository.js'
import { Cliente } from '../entity/models.js'

export class ClienteRepository extends LocalStorageRepository {

  constructor() {
    super('clientes')
    this.clientes = this.getItems().map(c => Cliente.storeData(c))
    console.log(this.clientes)
  }

  create(cliente) {
    this.clientes.push(cliente)
    this.setItems(this.clientes)
  }

  read() {
    return this.clientes
  }

}
