export class BackgroundImage {
  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.query = data.query
    this.author = data.author
    this.largeImgUrl = data.largeImgUrl
  } 
  // TODO Make the image info card
  get infoCardHTMLTemplate() {
    return /*html*/ `
      <p class="text-center misty hidden-card">
        <span id="Image Author" role="button" class="selectable rounded fs-5" title="Photographer">${this.author}</span> 
        <br><span onclick="app.ImageController.getBackgroundImage()" roll="button" class="selectable rounded small hidden" title="click to change background">>> New Background Image</span>
      </p>
    `
  }
}