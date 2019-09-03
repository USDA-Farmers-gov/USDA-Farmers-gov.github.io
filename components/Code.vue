<template>
  <div class="code">
    Preview:
    <div class="preview">
      <slot></slot>
    </div>
    Code:
    <div class="pre-format soft-yellow">
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
        this.code = this.processHTML(document.querySelector('.preview').innerHTML).trim()
      },
      processHTML(str) {
          var div = document.createElement('div')
          div.innerHTML = str.trim()
          
          return this.formatHTML(div, 0).innerHTML
      },
      formatHTML(node, level) {
          var indentBefore = new Array(level++ + 1).join('  '),
              indentAfter  = new Array(level - 1).join('  '),
              textNode
          
          for (var i = 0; i < node.children.length; i++) {
              
              textNode = document.createTextNode('\n' + indentBefore)
              node.insertBefore(textNode, node.children[i])
              
              this.formatHTML(node.children[i], level)
              
              if (node.lastElementChild == node.children[i]) {
                  textNode = document.createTextNode('\n' + indentAfter)
                  node.appendChild(textNode)
              }
          }
          
          return node
      }
    }
  }
</script>

<style>
  .pre-format {
    padding: 2rem;
    margin-top: 4rem;
    max-width: 80rem;
    overflow: scroll;
  }
</style>