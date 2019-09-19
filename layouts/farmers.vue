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
          <SideMenu/>
        </div>
        <main id="main-content">
          <nuxt />
        </main>
    </div>
  </div>
</template>

<script>
import SideMenu from '~/components/SideMenu.vue'

export default {
  components: {
    SideMenu
  }
}
</script>

<style>
</style>
