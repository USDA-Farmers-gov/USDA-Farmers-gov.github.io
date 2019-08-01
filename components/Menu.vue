<template>
  <div>
    <a :href="'/'">Home</a>
    | <a :href="'/elements/Button'">Button</a>
    | <a :href="'/elements/Colors'">Colors</a>
    | <a :href="'/elements/Typography'">Typography</a>
  </div>
</template>

<script>
  export default {
    // data() {
    //   return {
    //     siteFolder: '/farmers-design-system',
    //     domain: ''
    //   }
    // },
    // mounted() {
    //   this.domain = window.location.hostname
    // },
    // methods: {
    //   setLink(path) {
    //     return this.domain === 'localhost' ? path : this.siteFolder + path
    //   }
    // }
  }
</script>
