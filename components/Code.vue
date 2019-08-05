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
  var beautify = require('js-beautify').html

  export default {
    props: ['html'],
    data() {
      return {
        code: ''
      }
    },
    mounted() {
      this.code = beautify(this.$el.getElementsByClassName("preview")[0].innerHTML)
    }
  }
</script>