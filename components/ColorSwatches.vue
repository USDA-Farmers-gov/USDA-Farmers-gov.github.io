<template>
  <div>
    <div v-if="data" class="color-groups">
      <div :class="setRowClasses()">
        <div v-for="swatch in data" :class="setSwatchClasses(swatch)">
          <div :class="'color-swatch ' + swatch.classes"></div>
          <div class="color-name">{{ swatch.caption }}</div>
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
        required: true
      },
      rowClasses: String
    },
    mounted() {
      if(!this.data) console.error('COLOR SWATCH ROW ERROR: No data provided!')
    },
    methods: {
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