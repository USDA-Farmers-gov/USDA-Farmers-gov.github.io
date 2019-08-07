<template>
  <div class="main container">
    <div class="row">
      <div class="menu medium-3">
        <Menu/>
      </div>
      <div class="content medium-8">
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
