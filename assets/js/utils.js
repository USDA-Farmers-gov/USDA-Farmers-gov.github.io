const utils = {
  addLineBreaks(text) {
      return text ? text.trim().replace(/(?:\r\n|\r|\n)/g, '<br>') : '';
  },

  randomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  },
  randomNumber(min, max) {
    var min = min ? min : 1; 
    var max = max ? max : 1000;  
    return Math.floor(Math.random() * (+max - +min)) + +min; 
  }
}

export default utils