<template>
  <div>
    <header>
      <a href="#main-content" class="usa-skipnav" role="navigation" aria-label="Skip to Main Content">
        Skip to main content
      </a>
      <h1 id="site-title">Farmers Design System</h1>
    </header>
    <div class="container page">
        <div class="menu">
          <Menu/>
        </div>
        <main id="main-content">
          <nuxt />
        </main>
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style>
</style>
