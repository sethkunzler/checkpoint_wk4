export class BackgroundImage {
  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.query = data.query
    this.author = data.author
    this.largeImgUrl = data.largeImgUrl
  }

  get TopDisplayTemplate() {
    return /*html*/ `
    <!-- TODO the Image information(change background image) object -->
    <!-- TODO The Todo List (offcanvas) object -->
    `
  }

  get BottomDisplayTemplate() {
    return /*html*/ `
    <!-- TODO quote with a button to change the quote-->
    <!-- TODO weather displays temp icon and weather condition, changes on click between temp-->
    <!-- TODO time displays in hours and seconds, changes on click to 24hr display and back-->
    <!-- TODO profile display, onclick pulls up the profile view-->
    `
    
  }
}
