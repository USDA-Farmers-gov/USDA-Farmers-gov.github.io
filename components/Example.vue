<template>
  <div :class="setFlexClass()">
    <p>
      <strong>{{ header }}</strong>
    </p>
    <div v-html="markup" class="example-container"></div>

    <p v-if="code.background || code.card || code.checkbox || code.text" class="text-medium">
      <span v-if="code.background" class="label">BACKGROUND</span>
      <span v-if="code.card" class="label">CARD</span>
      <span v-if="code.checkbox" class="label">CHECKBOX</span>
      <span v-if="code.text" class="label">TEXT</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(code.background)"></span>
    </p>
  </div>
</template>

<script>
  import utils from '~/assets/js/utils'

  export default {
    props: {
      columns: {
        type: [ String, Number ],
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