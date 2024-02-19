export class Quote {
  constructor(data) {
    this.author = data.author 
    this.content = data.content 
  }

  get QuoteCardHTMLTemplate() {
    return /*html*/ `
      <p class="text-center mb-0">"${this.content}"</p>
      <p class="text-end me-5 mb-0 hidden">~ <i>${this.author}</i></p>
    `
  }
}


// ANCHOR let Jake know that the "quotes" structure readme is bad. does not match the actual object 
// "quote": {
//   "body": {
//     "maxLength": 500
//   },
//   "author": {
//     "maxLength": 500
//   },
//   "tags": [
//     {
//       "maxLength": 500
//     }
//   ]
// },
// "description": {
//   "type": "String",
//   "required": true
// }
