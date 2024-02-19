export class Todo {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.completed = data.completed
    this.creatorId = data.creatorId
  }

  get TodoItemHTMLTemplate() {
    return /*html*/ `
    <div class="mb-2">
      <div onclick="app.TodosController.completeTask('${this.id}')" class="d-flex">
        ${this.CompletedCheckbox}
        <p class="${this.CompletedStyle}">${this.description}</p>
      </div>
      <p onclick="app.TodosController.removeTask('${this.id}')" class="d-flex mdi mdi-trash">X</p>
    </div>
    `
  }
  get CompletedCheckbox() {
    return /*html*/ `
    <input onchange="app.TodosController.completeTask('${this.id}')" ${this.completed ? 'checked' : ''} type="checkbox">
    `
  }

  get CompletedStyle() {
    return  `${this.completed ? 'completed' : ''}`
  }

}

  //the server will create these properties for you
  // id: {type: String, required: true, unique: true }
  // completed: { type: Boolean, required: true, default: false},
  // creatorId: { type: String, required: true },
  //You will need to provide a description
  // description: { type: String, required: true},

// GET	/api/todos	gets all the todos created by the user sending the request
// GET	/api/todos/:id	gets a single todo by its id
// POST	/api/todos	creates a new todo from the request body
// PUT	/api/todos/:id	targets a single todo by its id and updates it according to the request body
// DELETE	/api/todos/:id	removes a single todo by its id