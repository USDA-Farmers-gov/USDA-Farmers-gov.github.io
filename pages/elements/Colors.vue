<template>
  <div>
    <h2>Colors</h2>
    <p class="intro-text">
      Colors play a vital role in establishing the look and feel of any digital property. Our palette draws inspiration from the USDA branding combined with color recommendations from the U.S. Web Design System to create a unique style for Farmers.gov.
    </p>
    <p class="intro-text text-margin-bottom">
      We’ve added brighter, vibrant colors to symbolize the field greens and
      sky blues farmers often experience in their everyday lives. The intent of
      these colors is to establish a trusted and familiar foundation to the
      Farmer.gov experience.
    </p>

    <h3>Primary Colors</h3>
    <p>
      The primary colors of the site, green and blue, signify the land and sky of America's beautiful landscapes. The vibrant chroma of the greens and blue establish a calm and positive energy that correlates with the sites photographic elements. The deep Asphalt adds dimension to the text and icon elements that would otherswise be lifeless if flat black.
    </p>
    
    <ColorSwatches :data="colors_data.primaryColors()" />

    <h3>Secondary Colors</h3>
    <p>
      The secondary colors also draw inspiration from hues found in nature such as bright dandelions and iconic red maple leaves. These colors compliment the primary colors by adding pops of accent elements throughout the site.
    </p>

    <ColorSwatches :data="colors_data.secondaryColors()" />

    <h3>Low Saturation Colors</h3>
    <p>
      These colors provide a low saturation of the primary and secondary colors. They can be used as 508 compliant text backgrounds on system status indicators.
    </p>

    <ColorSwatches :data="colors_data.lowSaturationColors()" />

    <h3>Grayscale</h3>
    <p>
      These neutral grays provide a range of tones and shades for utilitarian purposes such as backgrounds and inactive states.
    </p>

    <ColorSwatches :data="colors_data.greyscaleColors()" rowClasses="text-margin-bottom" />

    <h3>Special States</h3>
    <p>
      Special states are used to signify information about an interaction or situational identifiers.
    </p>
    
    <ColorSwatches :data="colors_data.specialStates()" />
  </div>
</template>

<script>
  import colors_data from '@/pages/_components-data/elements/colors.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Colors'
      }
    },
    data() {
      return {
        colors_data: colors_data
      }
    }
  }
</script>
