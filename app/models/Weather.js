export class Weather {
  constructor(data) {
    this.name = data.name
  // TODO do your calculations here to save farenheit/celsius
  this.kelvin = Math.round(data.main.temp)
  this.celsius = Math.round(data.main.temp - 273.15)
  this.fahrenheit = Math.round((data.main.temp - 273.15)* 9/5 + 32)
  this.displayK = data.displayK || false
  this.displayC = data.displayC || true
  this.displayF = data.displayF || false
    this.weather = data.weather
    // TODO create a boolean property on your class that will keep track of wether you want to display farenheit/celsius, give it a default boolean value
  }
  
  get WeatherInfoHTMLTemplate() {
    // TODO have a button here that will toggle boolean status between false and true, write a getter to display farenheit temp or celsius temp based on the boolean stored on this class
    return /*html*/ `
      <div class="p-3">
        <p class="mb-0">${this.weather[0].description}</p>
        <p class="text-center">${this.TemperatureDisplay}</p>
      </div>
      <span class="mdi mdi-white-balance-sunny display-4"></span>
    `
  }
  get TimeInfoHTMLTemplate() {
    return /*html*/ `
      <h1 class="p-1">${this.CurrentTime.toLocaleTimeString()}</h1>
      <p>${this.name}</p>
    `
  }
  get CurrentTime() {
    return new Date()
  }

  get TemperatureDisplay() {
    if(this.displayF == true) {
      return `
      ${this.fahrenheit}° F
      `
    } 
    if(this.displayC == true) {
      return `
      ${this.celsius}° C
      `
    } 
    if(this.displayK == true) {
      return `
      ${this.kelvin}° K
      `
    } 
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