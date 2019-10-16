<template>
  <table :class="setClasses()" v-if="data && (data.table_headers || data.table_rows)">
    <caption class="visually-hidden">{{ caption }}</caption>
    <thead v-if="data.table_headers">
        <tr>
          <th v-for="header in data.table_headers"> {{ header }} </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data.table_rows">
          <th v-if="row.span_heading" :colspan="row.colspan" v-html="row.span_heading"></th>
          <td v-else :class="row.classes" :colspan="row.colspan" v-for="text in row.text" v-html="text"></td>
        </tr>
      </tbody>
  </table>
</template>
<script>
  export default {
    props: {
      data: {
        type: [ Object, Array ],
        required: true
      },
      type: String,
      caption: String,
      customClasses: String
    },
    mounted() {
      if(!this.data) console.error('TABLE ERROR: No data provided!')
      if(this.data && !this.data.table_rows) console.error('TABLE ERROR: data not provided for rows!')
    },
    methods: {
      setClasses() {
        let baseClasses = 'table'
        if(this.type === 'bordered') baseClasses = baseClasses + ' table-bordered'
        if(this.type === 'condensed') baseClasses = baseClasses + ' table-condensed'

        return this.customClasses ? baseClasses + ' ' + this.customClasses : baseClasses

      }
    }
  }
</script>
