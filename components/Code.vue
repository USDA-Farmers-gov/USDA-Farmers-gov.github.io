<template>
  <div class="code-container">
    <strong>Preview:</strong>
    <div class="row">
      <div v-html="markup" class="medium-6 preview text-margin-bottom"></div>
    </div>
    <strong>Code:</strong>
    <div class="code-box soft-yellow">
      <pre>{{ code }}</pre>
    </div>
    
    <div class="text-margin-bottom">
      <button class="button" @click="copyToClipboard(code)" transition="fade">Copy Code</button>
      <transition name="fade">
          <div v-if="code_copied" class="copied">Copied to Clipboard!</div>
      </transition>
    </div>
  </div>
</template>

<script>
  import utils from '@/assets/js/utils.js'

  export default {
    props: [ 'markup' ],
    data() {
      return {
        code: '',
        code_copied: false
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
      },
      copyToClipboard(str) {
        const el = document.createElement('textarea')
        el.value = str
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
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .copied {
    background:#ccc;
    color:#000;
    padding:10px;
    position:absolute;
    border:1px solid #000;
    margin-top: 1rem;
  }
  .code-box {
    padding: 2rem;
    margin-top: 4rem;
    max-width: 80rem;
    overflow: scroll;
  }
  pre {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>