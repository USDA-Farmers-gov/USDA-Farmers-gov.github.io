const utils = {
  addLineBreaks(text) {
      return text ? text.trim().replace(/(?:\r\n|\r|\n)/g, '<br>') : '';
    }
}

export default utils