<template>
  <div>
    <header>
      <h1>Farmers Design System</h1>
    </header>
    <div class="container page">
        <div class="menu">
          <Menu/>
        </div>
        <main>
          <nuxt />
        </main>
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
