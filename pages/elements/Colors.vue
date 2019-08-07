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

    <div v-for="(color, index) in colors">
      <h3 v-if="color.header">{{ color.header }}</h3>
      <div v-if="color.description" v-html="color.description"></div>

      <div v-if="color.examples" class="container color-groups">
        <div class="row">
          <div v-for="swatch in color.examples" class="medium-3 colors">
            <div :class="'color-swatch ' + swatch.text_class"></div>
            <div class="color-name">{{ swatch.caption }}</div>
          </div>
        </div>
      </div>

      <div v-if="getDescriptionCount(color.examples) > 0">
        <strong>Examples</strong>
        <br/>
        <div class="container">
          <div v-if="example.description" v-for="example in color.examples" class="row">
            <div>
              <div :class="'color-square ' + example.text_class"></div>
            </div>
            <div class="medium-9">
              {{ example.description }}
            </div>
          </div>
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
      colors: [
        {
          header: 'Primary Colors',
          description: "The primary colors of the site, green and blue, signify the land and sky of America's beautiful landscapes. The vibrant chroma of the greens and blue establish a calm and positive energy that correlates with the sites photographic elements. The deep Asphalt adds dimension to the text and icon elements that would otherswise be lifeless if flat black.",
          examples: [        
            { text_class: 'heritage', caption: 'Heritage Green #006546', description: 'Heritage Green: repeating major elements across the site like header and links' },
            { text_class: 'sweet-grass', caption: 'Sweet Grass #49A564', description: 'Sweet Grass: accordions, decorative elements' },
            { text_class: 'big-sky', caption: 'Big Sky #1A6AD3', description: 'Big Sky: buttons' },
            { text_class: 'asphalt', caption: 'Asphalt #212121', description: 'Asphalt: typography and icons' }
            ]
        },

        {
          header: 'Secondary Colors',
          description: "The secondary colors also draw inspiration from hues found in nature such as bright dandelions and iconic red maple leaves. These colors compliment the primary colors by adding pops of accent elements throughout the site.",
          examples: [        
            { text_class: 'usda-blue', caption: 'USDA Blue #004785',  description: '' },
            { text_class: 'maple', caption: 'Maple #AE2924',  description: 'Maple: error messages' },
            { text_class: 'dandelion', caption: 'Dandelion #F7BE00',  description: 'Dandelion: heading styling, decorative elements' }
          ]
        },

        {
          header: 'Low Saturation Colors',
          description: "These colors provide a low saturation of the primary and secondary colors. They can be used as 508 compliant text backgrounds on system status indicators.",
          examples: [        
            { text_class: 'soft-green', caption: 'Soft Green #DBEDE0',  description: 'Soft Green: good status' },
            { text_class: 'soft-yellow', caption: 'Soft Yellow #F8EDC7',  description: 'Soft Yellow: caution status' },
            { text_class: 'soft-red', caption: 'Soft Red #EEDAD9',  description: 'Soft Red: warning status ' }
          ]
        },

        {
          header: 'Grayscale',
          description: "These neutral grays provide a range of tones and shades for utilitarian purposes such as backgrounds and inactive states.",
          examples: [        
            { text_class: 'grey-1', caption: '#F7F7F7',  description: '' },
            { text_class: 'grey-2', caption: '#EDEDED',  description: '' },
            { text_class: 'grey-3', caption: '#BBBBBB',  description: '' },
            { text_class: 'grey-4', caption: '#707070',  description: '' },
            { text_class: 'grey-5', caption: '#494440',  description: '' },
          ]
        },

        {
          header: 'Special States',
          description: "Special states are used to signify information about an interaction or situational identifiers.",
          examples: [        
            { text_class: 'visited-color', caption: 'Visited #4C2C92',  description: '' },
            { text_class: 'focus-color', caption: 'Focus #1B69D3',  description: '' },
            { text_class: 'hover-color', caption: 'Hover #004785',  description: '' },
            { text_class: 'active-color', caption: 'Active #122E51',  description: '' },
          ]
        },
      ],
    }
  },
  methods: {
    getDescriptionCount(examples) {
      return examples.filter(row => row.description).length
    }
  }
}
</script>
