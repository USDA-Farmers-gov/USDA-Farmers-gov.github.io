<template>
  <table :class="classes" v-if="data && (data.table_headers || data.table_rows)">
    <thead v-if="data.table_headers">
        <tr>
          <th v-for="header in data.table_headers"> {{ header }} </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data.table_rows">
          <td :class="row.classes" :colspan="row.colspan" v-for="text in row.text" v-html="text"></td>
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
      classes: String
    },
    mounted() {
      if(!this.data) console.error('TABLE ERROR: No data provided!')
      if(this.data && !this.data.table_rows) console.error('TABLE ERROR: data not provided for rows!')
    }
  }
</script>
