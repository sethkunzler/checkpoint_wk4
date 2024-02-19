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
}

export const weatherService = new WeatherService