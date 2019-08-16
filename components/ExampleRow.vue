<template>
  <div class="container">
    <div class="row">
      <div v-for="item in data" :class="setFlexClass()">
        <p v-if="item.header">
          <strong>{{ item.header }}</strong>
        </p>
        <div v-if="item.markup" v-html="item.markup" class="example-container"></div>

        <p v-if="Object.keys(item.code).length" v-for="(row, key) in item.code" class="text-medium">
          <span class="label">{{ setContentHeader(key) }}</span>
          <br/>
          <span class="text-medium" v-html="setCode(row)"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '~/assets/js/utils'

  export default {
    props: {
      data: [ Object, Array ],
      columns: {
        type: [ String, Number ],
        required: true
      }
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