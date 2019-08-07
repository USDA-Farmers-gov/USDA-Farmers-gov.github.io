<template>
  <div>
    <h2>Colors</h2>
    <div>
      Colors play a vital role in establishing the look and feel of any digital property. Our palette draws inspiration from the USDA branding combined with color recommendations from the U.S. Web Design System to create a unique style for Farmers.gov.
    </div>
    <div>
      We’ve added brighter, vibrant colors to symbolize the field greens and
      sky blues farmers often experience in their everyday lives. The intent of
      these colors is to establish a trusted and familiar foundation to the
      Farmer.gov experience.
    </div>

    <h2>Primary Colors</h2>
    <div>
      The primary colors of the site, green and blue, signify the land and sky of America's beautiful landscapes. The vibrant chroma of the greens and blue establish a calm and positive energy that correlates with the sites photographic elements. The deep Asphalt adds dimension to the text and icon elements that would otherswise be lifeless if flat black.
    </div>

    <div class="container color-groups">
      <div class="row">
        <div class="medium-3 colors">
          <div class="color-swatch heritage"></div>
          <div class="color-name">Heritage Green #006546</div>
        </div>
      </div>
    </div>  

    <strong>Examples</strong>
    <br/>
    <div class="container">
      <div v-for="example in primary_color_examples" class="row">
        <div>
          <div :class="'color-square ' + example.text_class"></div>
        </div>
        <div class="medium-9">
          {{ example.description }}
        </div>
      </div>
    </div>  

    <h2>Secondary Colors</h2>
    <div>
      The secondary colors also draw inspiration from hues found in nature such as bright dandelions and iconic red maple leaves. These colors compliment the primary colors by adding pops of accent elements throughout the site.
    </div>

    <div class="container">
      <div v-for="example in seconday_color_examples" class="row">
        <div>
          <div :class="'color-square ' + example.text_class"></div>
        </div>
        <div class="medium-9">
          {{ example.description }}
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  layout: 'farmers',
  data() {
    return {
      primary_color_examples: [
        { text_class: 'heritage', description: 'Heritage Green: repeating major elements across the site like header and links' },
        { text_class: 'sweet-grass', description: 'Sweet Grass: accordions, decorative elements' },
        { text_class: 'big-sky', description: 'Big Sky: buttons' },
        { text_class: 'asphalt', description: 'Asphalt: typography and icons' },
      ],
      seconday_color_examples: [
        { text_class: 'maple', description: 'error messages' },
        { text_class: 'dandelion', description: 'heading styling, decorative elements' }
      ]
    }
  }
}
</script>
