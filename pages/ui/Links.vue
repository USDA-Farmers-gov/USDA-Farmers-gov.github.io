<template>
  <div>
    <Code>
      <div>
        <h1>Header 1</h1> 
        <div>
          <a href="link">Link</a>
        </div>
      </div>
    </Code>
  </div>
</template>

<script>
import Code from '~/components/Code.vue'

export default {
  layout: 'farmers',
  components: {
    Code
  }
}
</script>
