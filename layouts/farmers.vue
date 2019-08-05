<template>
  <div class="main">
    <div class="menu">
      <Menu/>
    </div>
    <div class="content">
      <nuxt />
    </div>
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
