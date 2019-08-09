<template>
  <div :class="setFlexClass()">
    <p>
      <strong>{{ header }}</strong>
    </p>
    <div class="button-container">
      <span v-html="markup"/>
    </div>

    <p v-if="examples.background" class="text-medium">
      <span v-if="examples.background" class="label">BACKGROUND</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(examples.background)"></span>
    </p>
    
    <p v-if="examples.text" class="text-medium">
      <span class="label">TEXT</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(examples.text)"></span>
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
      examples: [ Object, Array ]
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