export class Weather {
  constructor(data) {
    this.name = data.name
  // TODO do your calculations here to save farenheit/celsius
    this.main = data.main
    this.weather = data.weather
    this.time = new Date()
    // TODO create a boolean property on your class that will keep track of wether you want to display farenheit/celsius, give it a default boolean value
  }

  get WeatherInfoHTMLTemplate() {
    // TODO have a button here that will toggle boolean status between false and true, write a getter to display farenheit temp or celsius temp based on the boolean stored on this class
    return /*html*/ `
      <div class="p-3">
        <p class="mb-0">${this.weather[0].description}</p>
        <p class="text-center">${this.main.temp} Degrees Kelvin</p>
      </div>
      <span class="mdi mdi-white-balance-sunny display-4"></span>
    `
  }
  get TimeInfoHTMLTemplate() {
    return /*html*/ `
      <h1 class="p-1">${this.time.toLocaleTimeString()}</h1>
      <p>${this.name}</p>
    `
  }
}

// "name": {
//   "type": "String"
// },
// "main": {
//   "temp": {
//     "type": "Number"
//   }
// },
// "weather": [
//   {
//     "description": {
//       "type": "String"
//     }
//   }
// ]