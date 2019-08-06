<template>
  <div class="container">
    <div class="row">
      <div class="medium-3 menu">
        <Menu/>
      </div>
      <div class="medium-6">
        <nuxt />
      </div>
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
</style>
