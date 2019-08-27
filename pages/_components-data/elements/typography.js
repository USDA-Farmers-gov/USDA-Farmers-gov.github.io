const typography_data = {
  publicSans() {
    return [
          { name_and_markup: '<h1>Headline 1</h1>', font_family: 'Public Sans', weight: '700', font_size: '38px', line_height: '48px' },
          { name_and_markup: '<h2>Headline 2</h2>', font_family: 'Public Sans', weight: '700', font_size: '28px', line_height: '38px' },
          { name_and_markup: '<h3>Headline 3</h3>', font_family: 'Public Sans', weight: '700', font_size: '23px', line_height: '30px' },
          { name_and_markup: '<h4>Headline 4</h4>', font_family: 'Public Sans', weight: '700', font_size: '20px', line_height: '26px' },
          { name_and_markup: '<h5>Headline 5</h5>', font_family: 'Public Sans', weight: '700', font_size: '16px', line_height: '20px' },
          { name_and_markup: '<h6>Headline 6</h6>', font_family: 'Public Sans', weight: '400', font_size: '12px', line_height: '18px' },
          { name_and_markup: '<div class="label">Label 1</div>', font_family: 'Public Sans', weight: '700', font_size: '22px', line_height: '34px' },
          { name_and_markup: '<div class="lead-p">Lead Paragraph</div>', font_family: 'Public Sans', weight: '300', font_size: '22px', line_height: '34px' },
          { name_and_markup: '<div class="body-p">Body Copy</div>', font_family: 'Public Sans', weight: '400', font_size: '18px', line_height: '28px' },
          { name_and_markup: '<div class="subheading">Subheading</div>', font_family: 'Public Sans', weight: '400', font_size: '16px', line_height: '24px' },
          { name_and_markup: '<div class="caption">Caption*</div>', font_family: 'Public Sans', weight: '400', font_size: '14px', line_height: '22px' },
        ]
  },
  merriweather() {
    return [
          { name_and_markup: '<div class="blog-body-p">Blog Body Copy</div>', font_family: 'Merriweather', weight: '400', font_size: '18px', line_height: '30px' },
          { name_and_markup: '<div class="blog-block-quote">Blog Quote</div>', font_family: 'Merriweather', weight: '300', font_size: '28px', line_height: '34px' },
        ]
  },

  contrastButtonsNormal() {
    return [
          { classes: 'heritage heritage-border white-txt', description: 'White on Heritage Green'},
          { classes: 'grey-3-border heritage-txt', description: 'Heritage Green on White'},
          { classes: 'soft-green soft-green-border asphalt-txt', description: 'Asphalt on Soft Green'},
          { classes: 'grey-3-border asphalt-txt', description: 'Asphalt on White'},
          { classes: 'soft-yellow soft-yellow-border asphalt-txt', description: 'Asphalt on Soft Yellow'},
          { classes: 'grey-1 grey-1-border asphalt-txt', description: 'Asphalt on Bone'},
          { classes: 'soft-red soft-red-border asphalt-txt', description: 'Asphalt on Soft Red'},
          { classes: 'grey-2 grey-2-border asphalt-txt', description: 'Asphalt on Light Gray'},
        ]
  },

  contrastButtonsLargeText() {
    return [
          { classes: 'sweet-grass sweet-grass-border white-txt', description: 'White on Sweet Grass'},
          { classes: 'sweet-grass-txt grey-3-border', description: 'Sweet Grass on White'},
          { classes: 'big-sky big-sky-border white-txt', description: 'White on Big Sky'},
          { classes: 'big-sky-txt grey-3-border', description: 'Big Sky on White'},
        ]
  }

}

export default typography_data
