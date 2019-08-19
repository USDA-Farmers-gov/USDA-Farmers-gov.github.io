<template>
  <div>
    <div v-if="data" class="container color-groups">
      <div class="row">
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
        <div class="color-examples">
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
  export default {
    props: {
      data: [ Object, Array ]
    },
    methods: {
      setSwatchClasses(swatch) {
        let baseClass = 'medium-3 colors'
        return swatch.classes.indexOf('grey-') === 0 ? baseClass + ' medium-greyscale' : baseClass
      },
      getDescriptionCount(data) {
        return data.filter(row => row.description).length
      }
    }
  }
</script>