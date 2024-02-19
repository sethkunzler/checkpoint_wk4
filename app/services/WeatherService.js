import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
  async getWeatherInfo() {
    const response = await api.get('api/weather')
    console.log('📡 weather data', response.data)
    const newWeather = new Weather(response.data)
    AppState.weather = newWeather
  }

  adjustTempDisplay() {
    let weather = AppState.weather
    if (weather.displayF == true) {
      weather.displayF = false
      weather.displayC = true
    } else if (weather.displayC == true) {
      weather.displayC = false
      weather.displayK = true
    } else if (weather.displayK == true) {
      weather.displayK = false
      weather.displayF = true
    }
  }
} 

export const weatherService = new WeatherService