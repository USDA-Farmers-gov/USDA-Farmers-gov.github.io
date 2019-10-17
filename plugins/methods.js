import Vue from 'vue'

Vue.mixin({
  methods: {
    copyToClipboard (code) {
      const el = document.createElement('textarea')
        el.value = code
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        this.code_copied = true

        setTimeout(function() {
          this.code_copied = false
        }.bind(this), 2000)
    }
  }
})