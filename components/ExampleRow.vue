<template>
  <div class="row examples">
    <div v-for="item in data" :class="setClasses(item)">
      <p v-if="item.header">
        <strong>{{ item.header }}</strong>
      </p>
      <div v-if="item.markup" v-html="item.markup" class="example-container"></div>

      <p v-if="Object.keys(item.code).length" v-for="(row, key) in item.code" class="text-medium">
        <span class="label" v-if="key">{{ setContentHeader(key) }}</span>
        <br/>
        <span class="text-medium" v-html="addLineBreaks(row)"></span>
      </p>
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
      setClasses(item) {
        let flexClass = 'medium-' + 12/Number(this.columns)
        return (item.classes_cell) ? flexClass + ' ' + item.classes_cell :  flexClass
      },
      setContentHeader(key) {
        return key.replace('_', ' ').toUpperCase()
      },
      addLineBreaks(text) {
        return utils.addLineBreaks(text)
      }
      // for intercepting click events
      // setMarkup(markup) {
      //   return '<div class="cover"></div>' + markup
      // }
    }
  }
</script>