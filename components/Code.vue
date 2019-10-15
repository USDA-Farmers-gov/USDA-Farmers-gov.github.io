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
      
      <div ref="code" :class="codeBoxClasses">
        <span>{{ code }}</span>
      </div>
      <div ref="slot-wrapper" style="display:none;">
        <slot></slot>
      </div>
      <div v-show="collapsible" class="code-toggle">
        <div class="show-more" v-show="collapsed" @click="toggleCollapsed()">show more <span class="expand">&nbsp;</span></div>
        <div class="show-less" v-show="!collapsed" @click="toggleCollapsed()">show less <span class="collapse"></span></div>
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
        collapsed: true,
        defaultCodeBoxClasses: 'code-box',
        codeBoxClasses: ''
      }
    },
    async mounted() {
      this.codeBoxClasses = this.defaultCodeBoxClasses
      await this.setCode()

      const box = this.$refs.code.getBoundingClientRect()

      if(box.height > 240) {
        this.collapsible = true
        this.updateCodeBoxClasses()
      }
    },
    updated: function() {
      this.$nextTick(function () {
        this.setCode()
      })
    },
    methods: {
      updateCodeBoxClasses() {
        this.codeBoxClasses = this.defaultCodeBoxClasses
        if(this.collapsed) this.codeBoxClasses = this.codeBoxClasses + ' code-collapsed'
      },
      toggleCollapsed() {
        this.collapsed = !this.collapsed
        this.updateCodeBoxClasses()
      },
      setPreviewClasses() {
        let classes = [ 'preview text-margin-bottom' ]
        if(this.designSystemWidth) classes.push('medium-' + this.designSystemWidth)
        return classes.join(' ')
      },
      setCode() {
        const markup = this.markup ? this.markup : this.$refs["slot-wrapper"].innerHTML
        this.code = this.processHTML(markup)
      },
      processHTML(str) {
        const div = document.createElement('div')
        div.innerHTML = utils.removeLineBreaksAndTrim(str)
        let processedHTML = this.formatHTML(div, 0).innerHTML.replace('checked=""', 'checked')
        processedHTML = processedHTML.replace('disabled=""', 'disabled')
        processedHTML = processedHTML.replace('hidden=""', 'hidden')

        return processedHTML
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

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>