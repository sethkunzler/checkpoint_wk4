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
  async createNewTodo(formData) {
    const response = await api.post('api/todos', formData)
    const newTodo = new Todo(response.data)
    console.log('new todo', newTodo);
    AppState.todos.push(newTodo)
  }
  async removeTask(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
    if (todoIndex == -1) {
      throw new Error("Index was -1, could not find 'todoIndex' on the todos array")
    }
    AppState.todos.splice(todoIndex, 1)

  }
}

export const todosService = new TodosService
