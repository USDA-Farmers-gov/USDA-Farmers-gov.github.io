<template>
  <div>
    <h2>Colors</h2>
    <p class="intro-text">
      Colors play a vital role in establishing the look and feel of any digital property. Our palette draws inspiration from the USDA branding combined with color recommendations from the U.S. Web Design System to create a unique style for Farmers.gov.
    </p>
    <p>
      We’ve added brighter, vibrant colors to symbolize the field greens and
      sky blues farmers often experience in their everyday lives. The intent of
      these colors is to establish a trusted and familiar foundation to the
      Farmer.gov experience.
    </p>

    <h3>Primary Colors</h3>
    <p>
      The primary colors of the site, green and blue, signify the land and sky of America's beautiful landscapes. The vibrant chroma of the greens and blue establish a calm and positive energy that correlates with the sites photographic elements. The deep Asphalt adds dimension to the text and icon elements that would otherswise be lifeless if flat black.
    </p>
    
    <ColorSwatches :data="primary_colors" />

    <h3>Secondary Colors</h3>
    <p>
      The secondary colors also draw inspiration from hues found in nature such as bright dandelions and iconic red maple leaves. These colors compliment the primary colors by adding pops of accent elements throughout the site.
    </p>

    <ColorSwatches :data="secondary_colors" />

    <h3>Low Saturation Colors</h3>

    <p>
      These colors provide a low saturation of the primary and secondary colors. They can be used as 508 compliant text backgrounds on system status indicators.
    </p>

    <ColorSwatches :data="low_saturation_colors" />

    <h3>Grayscale</h3>

    <p>
      These neutral grays provide a range of tones and shades for utilitarian purposes such as backgrounds and inactive states.
    </p>

    <ColorSwatches :data="greyscale_colors" />

    <h3>Special States</h3>

    <p>
      Special states are used to signify information about an interaction or situational identifiers.
    </p>
    
    <ColorSwatches :data="special_states" />
  </div>
</template>

<script>
export default {
  layout: 'farmers',
  data() {
    return {
      primary_colors: [        
      { classes: 'heritage', caption: 'Heritage Green #006546', description: 'Heritage Green: repeating major elements across the site like header and links' },
      { classes: 'sweet-grass', caption: 'Sweet Grass #49A564', description: 'Sweet Grass: accordions, decorative elements' },
      { classes: 'big-sky', caption: 'Big Sky #1A6AD3', description: 'Big Sky: buttons' },
      { classes: 'asphalt', caption: 'Asphalt #212121', description: 'Asphalt: typography and icons' }
      ],
      secondary_colors: [        
        { classes: 'usda-blue', caption: 'USDA Blue #004785',  description: '' },
        { classes: 'maple', caption: 'Maple #AE2924',  description: 'Maple: error messages' },
        { classes: 'dandelion', caption: 'Dandelion #F7BE00',  description: 'Dandelion: heading styling, decorative elements' }
      ],
      low_saturation_colors: [        
        { classes: 'soft-green', caption: 'Soft Green #DBEDE0',  description: 'Soft Green: good status' },
        { classes: 'soft-yellow', caption: 'Soft Yellow #F8EDC7',  description: 'Soft Yellow: caution status' },
        { classes: 'soft-red', caption: 'Soft Red #EEDAD9',  description: 'Soft Red: warning status ' }
      ],
      greyscale_colors: [        
        { classes: 'grey-1', caption: '#F7F7F7',  description: '' },
        { classes: 'grey-2', caption: '#EDEDED',  description: '' },
        { classes: 'grey-3', caption: '#BBBBBB',  description: '' },
        { classes: 'grey-4', caption: '#707070',  description: '' },
        { classes: 'grey-5', caption: '#494440',  description: '' },
      ],
      special_states: [        
        { classes: 'visited-color', caption: 'Visited #4C2C92',  description: '' },
        { classes: 'focus-color', caption: 'Focus #1B69D3',  description: '' },
        { classes: 'hover-color', caption: 'Hover #004785',  description: '' },
        { classes: 'active-color', caption: 'Active #122E51',  description: '' },
      ]    
    }
  }
}
</script>
