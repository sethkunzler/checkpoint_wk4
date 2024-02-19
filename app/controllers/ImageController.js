import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawImage() {
  const backgroundImage = AppState.backgroundImage
  document.body.style.backgroundImage = `url(${backgroundImage.largeImgUrl})`
  setHTML('imageInfoObject', backgroundImage.infoCardHTMLTemplate)

}

export class ImageController {
  constructor() {
    // console.log("Image Constructor")
    AppState.on('backgroundImage', _drawImage)
    this.getBackgroundImage()
  }

  async getBackgroundImage() {
    try {
      await imageService.getBackgroundImage()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}