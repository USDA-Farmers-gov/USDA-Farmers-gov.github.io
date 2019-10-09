<template>
  <div class="code-container">
    <strong>Preview:</strong>
    
    <div class="row">
      <div v-html="markup" :class="setPreviewClasses()"></div>
    </div>

    <strong>Code:</strong>
    <div ref="code" :class="collapsible && collapsed ? 'collapsed' : '' " class="code-box soft-yellow">{{ code }}</div>
    <div v-if="collapsible && collapsed" @click="toggleCodeWindow()">+ Open</div>
    <div v-if="collapsible && !collapsed" @click="toggleCodeWindow()">- Close</div>
    
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
    props: {
      markup: String, 
      designSystemWidth: [ Number, String ]
    },
    data() {
      return {
        code: '',
        code_copied: false,
        collapsible: false,
        collapsed: true
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
      toggleCodeWindow() {
        this.collapsed = ! this.collapsed
      },
      setPreviewClasses() {
        let classes = 'preview text-margin-bottom'
        if(this.designSystemWidth) classes = 'medium-' + this.designSystemWidth + ' ' + classes
        return classes
      },
      setCode() {
        this.code = this.processHTML(this.markup)
        if(this.$refs.code.clientHeight > 120) this.collapsible = true
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
      copyToClipboard(code) {
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
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .collapsed {
    max-height: 100px;
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
    font-family: monospace;
    white-space: pre;    
    padding-bottom: 2rem;
    padding-left: 1rem;
    max-width: 80rem;
    overflow: scroll;
  }
</style>