<template>
  <div :class="setRowClasses()">
    <div v-for="(item, index) in data" :class="setClasses(item, index)">
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
      rowClasses: String,
      itemClasses: [ Object, Array ]
    },
    methods: {
      setClasses(item, index) {
        let classes = 'medium-' + 12/Number(this.columns)

        if(!!this.itemClasses && this.itemClasses.length) {
          let itemClass = this.itemClasses.filter(row => row.index === index)[0]
          classes = (itemClass) ? classes + ' ' + itemClass.classes : classes
        }
        
        return (item.classes_cell) ? classes + ' ' + item.classes_cell :  classes
      },
      setRowClasses() {
        let baseClass = 'row examples'
        return this.rowClasses ? baseClass  + ' ' + this.rowClasses : baseClass
      },
      setContentHeader(key) {
        return key.replace(/_/g, ' ').toUpperCase()
      },
      addLineBreaks(text) {
        return utils.addLineBreaks(text)
      }
    }
  }
</script>