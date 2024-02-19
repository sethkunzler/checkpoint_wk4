
function _drawTodoList() {
  console.log('drawing todos')
}

export class TodosController {

  constructor() {
    console.log('Todos Controller Loaded')
  }

  completeTask() {}
  removeTask() {}
}



// GET	/api/todos	gets all the todos created by the user sending the request
// GET	/api/todos/:id	gets a single todo by its id
// POST	/api/todos	creates a new todo from the request body
// PUT	/api/todos/:id	targets a single todo by its id and updates it according to the request body
// DELETE	/api/todos/:id	removes a single todo by its id