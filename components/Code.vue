<template>
  <div class="code-container text-margin-bottom">
    <div v-if="showPreview" class="row">
      <div v-html="markup" :class="setPreviewClasses()"></div>
    </div>
    
    <div :class="collapsible ? '' : 'no-collapse'" class="code-grid">
      <transition name="fade">
        <div v-show="code_copied" class="code-alert">Copied!</div>
      </transition>
      <div class="copy-code">
        <span class="copy-code-text" @click="copyToClipboard(code)">copy code</span>
      </div>
      <div ref="code" :class="setCodeBoxClasses()">
        <span>{{ code }}</span>
      </div>
      <div v-show="collapsible" class="code-toggle">
        <div class="show-more" v-if="collapsed" @click="toggleCollapsed()">show more <span class="arrow arrow-bigsky arrow-down"></span></div>
        <div class="show-less" v-if="!collapsed" @click="toggleCollapsed()">show less <span class="arrow arrow-bigsky arrow-up"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '@/assets/js/utils.js'

  export default {
    props: {
      markup: String, 
      designSystemWidth: [ Number, String ],
      showPreview: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        code: '',
        code_copied: false,
        collapsible: false,
        collapsed: true
      }
    },
    async mounted() {
      if(!this.markup) console.error('CODE EXAMPLE ERROR: No markup provided!')
      await this.setCode()
      if(this.$refs.code.clientHeight > 240) this.collapsible = true
    },
    updated: function() {
      this.$nextTick(function () {
        this.setCode()
      })
    },
    methods: {
      setCodeBoxClasses() {
        let baseClasses = 'code-box'
        if(this.collapsible && this.collapsed) baseClasses = baseClasses + ' code-collapsed'

        return baseClasses
      },
      toggleCollapsed() {
        this.collapsed = ! this.collapsed
      },
      setPreviewClasses() {
        let classes = 'preview text-margin-bottom'
        if(this.designSystemWidth) classes = 'medium-' + this.designSystemWidth + ' ' + classes
        return classes
      },
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
</style>