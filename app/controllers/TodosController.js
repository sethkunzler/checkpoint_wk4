import { AppState } from "../AppState.js"
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawTodoList() {
  console.log('drawing todos')
  const todos = AppState.todos
  let htmlString = ''
  todos.forEach(todo => htmlString += todo.TodoItemHTMLTemplate)
  setHTML('offcanvasList', htmlString)
  // FIXME count the uncompleted todos instead  (!)
  const completedTodos = todos.filter(todo => todo.completed)
  setText('myTodos', `${completedTodos.length} / ${todos.length}`)
}

export class TodosController {

  constructor() {
    console.log('Todos Controller Loaded')

    AppState.on('account', this.getTodos)
    AppState.on('todos', _drawTodoList)

  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async createNewTodo() {
    try {
      event.preventDefault()
      Pop.success("Creating Todo")
      const form = event.target
      const TodoFormData = getFormData(form)
      await todosService.createNewTodo(TodoFormData)
      Pop.success("Todo Created")
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
  async removeTask(todoId) {
    try {
      const wantsToRemove = await Pop.confirm("Are you sure you want to remove this task? action cannot be undone")
      if (!wantsToRemove) {
        return
      }
      await todosService.removeTask(todoId)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
  async completeTask(todoId) {
    try {
      await todosService.completeTask(todoId)
    } catch (error) {      
      Pop.error(error)
      console.error(error);
    }

  }
}



// GET	/api/todos	gets all the todos created by the user sending the request
// GET	/api/todos/:id	gets a single todo by its id
// POST	/api/todos	creates a new todo from the request body
// PUT	/api/todos/:id	targets a single todo by its id and updates it according to the request body
// DELETE	/api/todos/:id	removes a single todo by its id