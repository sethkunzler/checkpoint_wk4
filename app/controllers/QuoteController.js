import { AppState } from "../AppState.js"
import { quoteService } from "../services/QuoteService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuote() {
  console.log('drawing quote', AppState.quote)
  setHTML('quoteCard', AppState.quote.QuoteCardHTMLTemplate)
}
export class QuoteController {
  constructor() {
    console.log('Quotes Controller Loaded') 
    AppState.on('quote', _drawQuote)
    this.getQuote()
  }
  async getQuote() {
    try {
      await quoteService.getQuote()
      console.log('got quote')
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}