import Vue from 'vue'

Vue.mixin({
  methods: {
    copyToClipboard (code, index) {
      const el = document.createElement('textarea')
        el.value = code
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        this.elementIndex = index
        this.codeCopied = true

        clearTimeout(this.copied)

        this.copied = setTimeout(function() {
          this.codeCopied = false
        }.bind(this), 2000)
    },
    copyCodeOnKeyPress(e, code, index) {
      if(e.code === 'Enter') this.copyToClipboard(code)
    }
  }
})