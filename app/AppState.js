import { BackgroundImage } from "./models/BackgroundImage.js"
import { Todo } from "./models/Todo.js"
import { Weather } from "./models/Weather.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {BackgroundImage | null} */
  backgroundImage = null
  
  /**@type {Todo[]} */
  todos = []
  
  /**@type {Weather | null} */
  weather = null

}

export const AppState = createObservableProxy(new ObservableAppState())