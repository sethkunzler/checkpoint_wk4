import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {
  
  async getQuote() {
    const response = await api.get('api/quotes')
    console.log('📡 Quote Data', response.data)
    const newQuote = new Quote(response.data)
    AppState.quote = newQuote
    console.log('quote changed to', AppState.quote)
  }
}

export const quoteService = new QuoteService
