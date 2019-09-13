<template>
  <div class="code-container">
    Preview:
    <div v-html="markup" class="preview"></div>
    Code:
    <div class="pre-format soft-yellow">
      <pre>{{ code }}</pre>
    </div>
  </div>
</template>

<script>
  import utils from '@/assets/js/utils.js'

  export default {
    props: [ 'markup' ],
    data() {
      return {
        code: ''
      }
    },
    mounted() {
      if(!this.markup) console.error('CODE EXAMPLE ERROR: No markup provided!')
      this.setCode()
    },
    updated: function() {
      this.$nextTick(function () {
        this.setCode()
      })
    },
    methods: {
      setCode() {
        this.code = this.processHTML(this.markup)
      },
      processHTML(str) {
        var div = document.createElement('div')
        div.innerHTML = utils.removeLineBreaksAndTrim(str)

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

              if (node.lastElementChild === node.children[i]) {
                  textNode = document.createTextNode('\n' + indentAfter)
                  node.appendChild(textNode)
              }
          }

          return node
      }
    }
  }
</script>

<style scoped>
  .pre-format {
    padding: 2rem;
    margin-top: 4rem;
    max-width: 80rem;
    overflow: scroll;
  }
</style>