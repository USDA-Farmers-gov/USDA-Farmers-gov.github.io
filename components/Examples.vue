<template>
  <div v-if="data" class="container">
    <div class="row">
      <div v-for="item in data" class="medium-4">
        <p v-if="item.header">
          <strong>{{ item.header }}</strong>
        </p>
        <div class="button-container">
            <div v-html="outputButtonMarkup(item.classes, true)" style="display:inline-block"/>
        </div>
        <p v-if="item.background.length" class="text-medium">
          <span v-if="item.background" class="label">BACKGROUND</span>
          <br/>
          <span class="text-medium" v-html="addLineBreaks(item.background)"></span>
        </p>
        <p v-if="item.text.length" class="text-medium">
          <span class="label">TEXT</span>
          <br/>
          <span class="text-medium" v-html="addLineBreaks(item.text)"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      data: [ Object, Array ],
      type: String,
      columns: Number
    ]
  }
</script>