<template>
  <table v-if="data.table_headers && data.table_rows">
    <thead>
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
      data: [ Object, Array ]
    }
  }
</script>
