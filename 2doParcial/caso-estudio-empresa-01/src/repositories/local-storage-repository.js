export class LocalStorageRepository {
  //  parametro: Entity = "clientes"/"empleados"
  constructor(entity) {
    this.entity = entity
  }

  setItems(items) {
    localStorage.setItem(this.entity, JSON.stringify(items))
  }

  getItems() {
    return JSON.parse(localStorage.getItem(this.entity)) || []
  }

  removeItems() {
    localStorage.removeItem(this.entity)
  }

}
