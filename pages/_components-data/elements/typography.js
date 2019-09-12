const typography_data = {
  fonts() {
    return [
      {
        table_headers: [ 'Hierarchy', 'Font Family', 'Weight', 'Font Size', 'Line Height' ],
        table_rows: [
          { text: [ '<h1>Headline 1</h1>', 'Public Sans', '700', '38px', '48px' ] },
          { text: [ '<h2>Headline 2</h2>', 'Public Sans', '700', '28px', '38px' ] },
          { text: [ '<h3>Headline 3</h3>', 'Public Sans', '700', '23px', '30px' ] },
          { text: [ '<h4>Headline 4</h4>', 'Public Sans', '700', '20px', '26px' ] },
          { text: [ '<h5>Headline 5</h5>', 'Public Sans', '700', '16px', '20px' ] },
          { text: [ '<h6>Headline 6</h6>', 'Public Sans', '400', '12px', '18px' ] },
          { text: [ '<div class="label">Label 1</div>', 'Public Sans', '700', '22px', '34px' ] },
          { text: [ '<div class="lead-p">Lead Paragraph</div>', 'Public Sans', '300', '22px', '34px' ] },
          { text: [ '<div class="body-p">Body Copy</div>', 'Public Sans', '400', '18px', '28px' ] },
          { text: [ '<div class="subheading">Subheading</div>', 'Public Sans', '400', '16px', '24px' ] },
          { text: [ '<div class="caption">Caption</div>', 'Public Sans', '400', '14px', '22px' ] },

          { 
            text: [ `<h2 class="merriweather">Merriweather</h2>
                      <div class="container">
                        <div class="row">
                          <div class="medium-2 text-large typography-letters">A a</div>
                          <div class="medium-7 text-small typography-example">
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                            <br/>
                            abcdefghijklmnopqrstuvwxyz
                            <br/>
                            1234567890
                          </div>
                        </div>
                      </div>` ], classes: 'merriweather merriweather-container', colspan: 5 
          },
          { text: [ '<div class="blog-body-p">Blog Body Copy</div>', 'Merriweather', '400', '18px', '30px' ] },
          { text: [ '<div class="blog-block-quote">Blog Quote</div>', 'Merriweather', '300', '28px', '34px' ] },
        ]
      }
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
