// importamos las clases Casos de Uso.
import { UsersUseCase } from "../../src/use-case/users-use-case.js"
const usersUseCase = new UsersUseCase()
const user = usersUseCase.getSession()

if (!user) { // si no existe el objeto user
  window.location = 'login.html'
}

const btnSalir = document.getElementById('id-btn-salir')
btnSalir.addEventListener('click', event => {
  event.preventDefault()
  usersUseCase.setRemoveSession()
  window.location = 'login.html'
})
