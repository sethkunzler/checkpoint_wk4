import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodosService {
  async getTodos() {
    const response = await api.get('api/todos')
    console.log('📡 response data', response)
    const newTodos = response.data.map(todoPOJO => new Todo(todoPOJO))
    AppState.todos = newTodos
  }

}

export const todosService = new TodosService
