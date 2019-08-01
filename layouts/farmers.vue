<template>
  <div class="container">
    <Menu/>
    <nuxt />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  layout: 'farmers',
  components: {
    Menu
  }
}
</script>

<style>
.container {
  width: 600px;
  margin: auto;
}
</style>
