<template>
  <div class="code">
    Preview:
    <div class="preview">
      <slot></slot>
    </div>
    <div class="soft-yellow">
      <pre>{{ code }}</pre>
    </div>
  </div>
</template>

<script>
  var beautifyHTML = require('js-beautify').html

  export default {
    props: ['html'],
    data() {
      return {
        code: ''
      }
    },
    mounted() {
      this.code = beautifyHTML(this.$el.getElementsByClassName("preview")[0].innerHTML, { preserve_newlines: true })
    }
  }
</script>