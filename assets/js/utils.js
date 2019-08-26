const utils = {
  addLineBreaks(text) {
      return text ? text.trim().replace(/(?:\r\n|\r|\n)/g, '<br>') : '';
  },

  randomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
}

export default utils