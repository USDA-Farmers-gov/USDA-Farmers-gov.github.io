const colors_data = {
  primaryColors() {
    return [        
        { classes: 'heritage', caption: 'Heritage Green #006546', description: 'Heritage Green: repeating major elements across the site like header and links' },
        { classes: 'sweet-grass', caption: 'Sweet Grass #49A564', description: 'Sweet Grass: accordions, decorative elements' },
        { classes: 'big-sky', caption: 'Big Sky #1A6AD3', description: 'Big Sky: buttons' },
        { classes: 'asphalt', caption: 'Asphalt #212121', description: 'Asphalt: typography and icons' }
        ]
  },

  secondaryColors() {
    return [        
          { classes: 'usda-blue', caption: 'USDA Blue #004785',  description: '' },
          { classes: 'maple', caption: 'Maple #AE2924',  description: 'Maple: error messages' },
          { classes: 'dandelion', caption: 'Dandelion #F7BE00',  description: 'Dandelion: heading styling, decorative elements' }
        ] 
  },

  lowSaturationColors() {
    return [        
          { classes: 'soft-green', caption: 'Soft Green #DBEDE0',  description: 'Soft Green: good status' },
          { classes: 'soft-yellow', caption: 'Soft Yellow #F8EDC7',  description: 'Soft Yellow: caution status' },
          { classes: 'soft-red', caption: 'Soft Red #EEDAD9',  description: 'Soft Red: warning status ' }
        ]
  },

  greyscaleColors() {
    return [        
          { classes: 'grey-1', caption: '#F7F7F7' },
          { classes: 'grey-2', caption: '#EDEDED' },
          { classes: 'grey-3', caption: '#BBBBBB' },
          { classes: 'grey-4', caption: '#707070' },
          { classes: 'grey-5', caption: '#494440' },
        ]
  },

  specialStates() {
    return [        
          { classes: 'visited-color', caption: 'Visited #4C2C92' },
          { classes: 'focus-color', caption: 'Focus #1B69D3' },
          { classes: 'hover-color', caption: 'Hover #004785' },
          { classes: 'active-color', caption: 'Active #122E51' },
        ]    
  }
}

export default colors_data