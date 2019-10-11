<template>
  <div>
    <h2>Grid</h2>
    <p class="intro-text text-margin-bottom">
    This 12-column grid provides the basic structure for website content and creates flexibility to accommodate different viewport sizes. Grids enable a consistent experience across different pages of the site and create a way to effortlessly organize design elements through uniformity and precise alignment.
    </p>

    <div class="grid-example text-margin-bottom">
      <GridExampleFractions />
    </div>

    <Code>
      <GridExampleFractions />
    </Code>

    <h3 class="grid-example-header">Grid Examples</h3>
    <div class="grid-example-text">
      <GridExampleContent />
    </div>

    <Code>
      <GridExampleContent />
    </Code>
  </div> 
</template>

<script>
  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Grid'
      }
    },
  }
</script>
