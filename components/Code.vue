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
      this.setCode()
    },
    updated: function() {
      this.$nextTick(function () {
        this.setCode()
      })
    },
    methods: {
      setCode() {
        this.code = beautifyHTML(document.querySelector('.preview').innerHTML)
      }
    }
  }
</script>