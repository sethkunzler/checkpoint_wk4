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
    // console.log('weather controller loaded') 
    AppState.on('weather', _drawWeather)
    this.getWeatherInfo()
    setInterval(_drawTime, 1000)
  }
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
