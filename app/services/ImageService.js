import { AppState } from "../AppState.js"
import { BackgroundImage } from "../models/BackgroundImage.js"
import { api } from "./AxiosService.js"
class ImageService {
  
  async getBackgroundImage() {
    const response = await api.get('api/images')
    const newImage = new BackgroundImage(response.data)
    AppState.backgroundImage = newImage
  }

}

export const imageService = new ImageService