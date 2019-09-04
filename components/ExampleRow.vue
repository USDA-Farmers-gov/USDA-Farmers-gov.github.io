<template>
  <div :class="setRowClasses()">
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
      },
      rowClasses: String
    },
    methods: {
      setClasses(item) {
        let flexClass = 'medium-' + 12/Number(this.columns)
        return (item.classes_cell) ? flexClass + ' ' + item.classes_cell :  flexClass
      },
      setRowClasses() {
        let baseClass = 'row examples'
        return this.rowClasses ? baseClass  + ' ' + this.rowClasses : baseClass
      },
      setContentHeader(key) {
        let newHeader = key
        newHeader = newHeader.replace('/_op_/g', '(')
        newHeader = newHeader.replace('/_cp_/g', ')')
        return newHeader.replace(/_/g, ' ').toUpperCase()
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