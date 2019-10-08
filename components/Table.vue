<template>
  <table role="table" :class="setClasses()" v-if="data && (data.table_headers || data.table_rows)">
    <caption class="visually-hidden" v-if="caption"> {{ caption }} </caption>
    <thead v-if="data.table_headers">
        <tr>
          <td role="cell" v-for="header in data.table_headers"> {{ header }} </td>
        </tr>
      </thead>
      <tbody>
        <tr role="row" v-for="row in data.table_rows">
          <th v-if="row.span_heading" :colspan="row.colspan" v-html="row.span_heading"></th>
          <td v-else role="cell" :class="row.classes" :colspan="row.colspan" v-for="text in row.text" v-html="text"></td>
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
      caption: String,
      classes: String
    },
    mounted() {
      if(!this.data) console.error('TABLE ERROR: No data provided!')
      if(this.data && !this.data.table_rows) console.error('TABLE ERROR: data not provided for rows!')
    },
    methods: {
      setClasses() {
        let baseClasses = 'table'
        return this.classes ? baseClasses + ' ' + this.classes : baseClasses

      }
    }
  }
</script>
