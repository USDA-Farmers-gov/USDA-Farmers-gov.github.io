<template>
  <div :class="setFlexClass()">
    <p>
      <strong>{{ header }}</strong>
    </p>
    <div class="button-container">
      <span v-html="markup"/>
    </div>

    <p v-if="code.background" class="text-medium">
      <span v-if="code.background" class="label">BACKGROUND</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(code.background)"></span>
    </p>
    
    <p v-if="code.text" class="text-medium">
      <span class="label">TEXT</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(code.text)"></span>
    </p>
  </div>
</template>

<script>
  import utils from '~/assets/js/utils'

  export default {
    props: {
      columns: {
        type: Number,
        required: true
      },
      header: String,
      markup: String,
      code: [ Object, Array ]
    },
    methods: {
      setFlexClass() {
        return 'medium-' + 12/Number(this.columns)
      },
      addLineBreaks(text) {
        return utils.addLineBreaks(text)
      }
    }
  }
</script>