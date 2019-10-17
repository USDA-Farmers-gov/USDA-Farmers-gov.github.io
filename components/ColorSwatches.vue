<template>
  <div>
    <div v-if="data" class="color-groups">
      <div :class="setRowClasses()">
        <div v-for="(swatch, index) in data" :class="setSwatchClasses(swatch)">
          <div :class="'color-swatch ' + swatch.classes"></div>
          <div class="code-alert-container">
            <transition name="fade">
                <div v-show="codeCopied && index === elementIndex" class="code-alert link">Copied!</div>
            </transition>
            <transition name="fade">
              <div v-show="showClickToCopy && !codeCopied && hoverIndex === index" class="code-alert click-to-copy">
                Click to Copy
              </div>
            </transition>
          </div>
          <div class="color-name" 
            @click="copyToClipboard(swatch.hexcode, index)" 
            @keypress="copyCodeOnKeyPress($event, swatch.hexcode, index)" 
            @mouseover="setHoverVars(index)"
            @mouseleave="setHoverVars(null)"
            tabindex="0">
              {{ swatch.caption }}
              {{ swatch.hexcode }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="getDescriptionCount(data) > 0">
        <p>
          <strong>Examples</strong>
        </p>
        <div class="color-examples text-margin-bottom">
          <div v-if="example.description" v-for="example in data" class="color-row">
            <div class="container-square">
              <div :class="'color-square ' + example.classes"></div>
            </div>
            <div class="color-description">
              {{ example.description }}
            </div>
          </div>
        </div> 
      </div>
  </div>
</template>

<script>
  import utils from '@/assets/js/utils.js'
  export default {
    props: {
     data: {
        type: [ Object, Array ],
        required: true,
      },
      rowClasses: String
    },
    data() {
      return {
        elementIndex: -1,
        hoverIndex: -1,
        codeCopied: false,
        showClickToCopy: null
      }
    },
    mounted() {
      if(!this.data) console.error('COLOR SWATCH ROW ERROR: No data provided!')
    },
    methods: {
      setHoverVars(index) {
        if(index !== null && index !== this.hoverIndex) this.codeCopied = false
        this.showClickToCopy = (index >= 0) ? true : false
        this.hoverIndex = index
      },
      setRowClasses() {
        let baseClass = 'row'
        return this.rowClasses ? utils.setClasses(baseClass, this.rowClasses) : baseClass
      },
      setSwatchClasses(swatch) {
        let baseClass = 'medium-3 colors'
        return swatch.classes.indexOf('grey-') === 0 ? baseClass + ' medium-greyscale' : baseClass
      },
      getDescriptionCount(data) {
        return data ? data.filter(row => row.description).length : 0
      }
    }
  }
</script>