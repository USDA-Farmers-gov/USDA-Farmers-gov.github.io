<template>
  <div :class="setFlexClass()">
    <p>
      <strong>{{ header }}</strong>
    </p>
    <div v-html="markup" class="example-container"></div>

    <p v-if="code.background || code.card || code.checkbox || code.text" class="text-medium">
      <span class="label">{{ setContentHeader() }}</span>
      <br/>
      <span class="text-medium" v-html="setCode()"></span>
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
      setContentHeader() {
        let header = ''

        if(this.code.background) header = 'BACKGROUND'
        if(this.code.card) header = 'CARD'
        if(this.code.checkbox) header = 'CHECKBOX'
        if(this.code.text) header = 'TEXT'

        return header
      },
      setCode() {
        let code = ''

        if(this.code.background) code = this.code.background
        if(this.code.card) code = this.code.card
        if(this.code.checkbox) code = this.code.checkbox
        if(this.code.text) code = this.code.text

        return utils.addLineBreaks(code)
      },
      addLineBreaks(text) {
        return utils.addLineBreaks(text)
      }
    }
  }
</script>