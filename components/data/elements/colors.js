const colors_data = {
  primaryColors() {
    return [        
        { classes: 'heritage', caption: 'Heritage Green', hexcode: '#006546', description: 'Heritage Green: repeating major elements across the site like header and links' },
        { classes: 'sweet-grass', caption: 'Sweet Grass', hexcode: '#49A564', description: 'Sweet Grass: accordions, decorative elements' },
        { classes: 'big-sky', caption: 'Big Sky', hexcode: '#1A6AD3', description: 'Big Sky: buttons' },
        { classes: 'asphalt', caption: 'Asphalt', hexcode: '#212121', description: 'Asphalt: typography and icons' }
        ]
  },
  secondaryColors() {
    return [        
          { classes: 'usda-blue', caption: 'USDA Blue',  hexcode: '#004785', description: '' },
          { classes: 'maple', caption: 'Maple',  hexcode: '#AE2924', description: 'Maple: error messages' },
          { classes: 'dandelion', caption: 'Dandelion',  hexcode: '#F7BE00', description: 'Dandelion: heading styling, decorative elements' }
        ] 
  },
  lowSaturationColors() {
    return [        
          { classes: 'soft-green', caption: 'Soft Green',  hexcode: '#DBEDE0', description: 'Soft Green: good status' },
          { classes: 'soft-yellow', caption: 'Soft Yellow',  hexcode: '#F8EDC7', description: 'Soft Yellow: caution status' },
          { classes: 'soft-red', caption: 'Soft Red',  hexcode: '#EEDAD9', description: 'Soft Red: warning status ' }
        ]
  },
  greyscaleColors() {
    return [        
          { classes: 'grey-1', hexcode: '#F7F7F7' },
          { classes: 'grey-2', hexcode: '#EDEDED' },
          { classes: 'grey-3', hexcode: '#BBBBBB' },
          { classes: 'grey-4', hexcode: '#707070' },
          { classes: 'grey-5', hexcode: '#494440' },
        ]
  },
  specialStates() {
    return [        
          { classes: 'visited-color', caption: 'Visited',  hexcode: '#4C2C92' },
          { classes: 'focus-color', caption: 'Focus',  hexcode: '#1B69D3' },
          { classes: 'hover-color', caption: 'Hover',  hexcode: '#004785' },
          { classes: 'active-color', caption: 'Active',  hexcode: '#122E51' },
        ]    
  }
}

export default colors_data