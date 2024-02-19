import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWeather() {
  console.log(AppState.weather)
  setHTML('weatherObject', AppState.weather.WeatherInfoHTMLTemplate)
}
function _drawTime() {
  setHTML('timeObject', AppState.weather.TimeInfoHTMLTemplate)
}
export class WeatherController {
  constructor() {
    console.log('weather controller loaded') 
    AppState.on('weather', _drawWeather)
    AppState.on('weather', _drawTime)
    this.getWeatherInfo()

  }

  // FIXME start this interval on page load, and your callback function should grab the current date/time, and either update your model and trigger a draw (emit), or set the HTML directly to the current date/time
  // FIXME do not call to the api every second!
  // setInterval(this.getWeatherInfo, 1000)
  async getWeatherInfo() {
    try {
      await weatherService.getWeatherInfo()
      console.log("got weather")
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}
