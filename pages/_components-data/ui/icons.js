const icons_data = {
  interactiveIcons() {
    return [
      {
        table_headers: [ 'Icon', 'Icon Name', 'Icon Usage' ],
        table_rows: [
          { text: [ icons_data.iconMarkup({ classes: 'icon caret-right' }), 'caret-right', 'navigate to pages within farmers.gov and USDA' ] },
          { text: [ icons_data.iconMarkup({ classes: 'icon search' }), 'search', 'search button in search box' ] },
          { text: [ icons_data.iconMarkup({ classes: 'icon chevron-up' }), 'chevron-down', 'expand dropdown' ] },
          { text: [ icons_data.iconMarkup({ classes: 'icon chevron-down' }), 'chevron-up', 'collapse dropdown' ] },
          { text: [ icons_data.iconMarkup({ classes: 'icon external-link' }), 'external-link', 'navigate to pages outside of farmers.gov and USDA' ] },
          { text: [ icons_data.iconMarkup({ classes: 'icon close' }), 'close', 'close modals' ] },
          { text: [ icons_data.iconMarkup({ classes: 'icon accordion-expand' }), 'accordion-expand', 'expand accordion' ] },
          { text: [ icons_data.iconMarkup({ classes: 'icon accordion-collapse' }), 'accordion-collapse', 'collapse accordion' ] },
          { text: [ icons_data.iconMarkup({ classes: 'icon popover' }), 'popover', 'show popover' ] }
        ]
      }
    ]
  },
  supportingIcons() {
    return [ 
      icons_data.iconMarkup({ classes: 'icon info' }), 
      icons_data.iconMarkup({ classes: 'icon mail' }), 
      icons_data.iconMarkup({ classes: 'icon print' }), 
      icons_data.iconMarkup({ classes: 'icon location' }), 
      icons_data.iconMarkup({ classes: 'icon phone' }),

      //       icons_data.imageMarkup({ image: '/images/info.svg' }), 
      // icons_data.imageMarkup({ image: '/images/mail.svg' }), 
      // icons_data.imageMarkup({ image: '/images/print.svg' }), 
      // icons_data.imageMarkup({ image: '/images/location.svg' }), 
      // icons_data.imageMarkup({ image: '/images/phone.svg' }), 
    ]
  },
  illustrativeIcons() {
    return [ 
      icons_data.iconMarkup({ classes: 'outline-icon barn' }), 
      icons_data.iconMarkup({ classes: 'outline-icon farmer' }), 
      icons_data.iconMarkup({ classes: 'outline-icon land' }), 
      icons_data.iconMarkup({ classes: 'outline-icon mfp' })

      // icons_data.imageMarkup({ image: '/images/barn.svg' }), 
      // icons_data.imageMarkup({ image: '/images/farmer.svg' }), 
      // icons_data.imageMarkup({ image: '/images/land.svg' }), 
      // icons_data.imageMarkup({ image: '/images/mfp.svg' }), 
    ]
  },
  iconMarkup(data) {
    const classes = data.classes ? data.classes : ''
    return `<span class="` + classes + `">`
  },
  imageMarkup(data) {
    const altText = data.alt ? data.alt : ''
    const classes = data.classes ? ' class="' + data.classes + '"' : ''
    return `<img src="` + data.image + `"` + classes + ` alt="` + altText + `">`
  }
}

export default icons_data