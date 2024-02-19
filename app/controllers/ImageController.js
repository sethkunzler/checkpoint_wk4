import { AppState } from "../AppState.js";
import { BackgroundImage } from "../models/BackgroundImage.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawImage() {
  const backgroundImage = AppState.backgroundImage
  document.body.style.backgroundImage = `url(${backgroundImage.largeImgUrl})`
  // TODO redraw the button everytime you switch the image
  // setHTML('imageInfo', BackgroundImage.infoCardHTMLTemplate)

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