import { AppState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.completed = data.completed
    this.creatorId = data.creatorId
  }
  get TodoItemHTMLTemplate() {
    return /*html*/ `
      <div class="row my-2 align-items-center">
        <div class="col-2">
          ${this.CompletedCheckbox}
        </div>
        <div class="col-8">   
          <p onclick="app.TodosController.completeTask('${this.id}')"  class="${this.CompletedStyle} selectable rounded p-2 text-align-end mb-0">
            ${this.description}
          </p>
        </div>
        <div class="col-2">
          <span onclick="app.TodosController.removeTask('${this.id}')" class="btn btn-danger mdi mdi-delete"></span>
        </div>
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