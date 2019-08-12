<template>
  <div :class="setFlexClass()">
    <p>
      <strong>{{ header }}</strong>
    </p>
    <div class="button-container">
      <span v-html="markup"/>
    </div>

    <p v-if="code.background" class="text-medium">
      <span class="label">BACKGROUND</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(code.background)"></span>
    </p>
    
    <p v-if="code.text" class="text-medium">
      <span class="label">TEXT</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(code.text)"></span>
    </p>

    <p v-if="code.card" class="text-medium">
      <span class="label">CARD</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(code.card)"></span>
    </p>

    <p v-if="code.checkbox" class="text-medium">
      <span class="label">CHECKBOX</span>
      <br/>
      <span class="text-medium" v-html="addLineBreaks(code.checkbox)"></span>
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