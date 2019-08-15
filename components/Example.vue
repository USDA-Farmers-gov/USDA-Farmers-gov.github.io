<template>
  <div :class="setFlexClass()">
    <p>
      <strong>{{ header }}</strong>
    </p>
    <div v-if="markup" v-html="markup" class="example-container"></div>

    <p v-if="Object.keys(code).length" v-for="(row, key) in code" class="text-medium">
      <span class="label">{{ setContentHeader(key) }}</span>
      <br/>
      <span class="text-medium" v-html="setCode(row)"></span>
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
    mounted() {
      console.log(this.code)
    },
    methods: {
      setFlexClass() {
        return 'medium-' + 12/Number(this.columns)
      },
      setContentHeader(key) {
        return key.replace('_', ' ').toUpperCase()
      },
      setCode(row) {
        return utils.addLineBreaks(row)
      },
      addLineBreaks(text) {
        return utils.addLineBreaks(text)
      },
      // for intercepting click events
      // setMarkup(markup) {
      //   return '<div class="cover"></div>' + markup
      // }
    }
  }
</script>