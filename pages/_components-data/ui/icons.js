const icons_data = {
  interactiveIcons() {
    return [
      {
        table_headers: [ 'Icon', 'Icon Name', 'Icon Usage' ],
        table_rows: [
          { text: [ icons_data.imageMarkup({ image: '/images/icons/caret-right.svg' }), 'caret-right', 'navigate to pages within farmer.gov and USDA' ] },
          { text: [ icons_data.imageMarkup({ image: '/images/icons/search.svg' }), 'search', 'search button in search box' ] },
          { text: [ icons_data.imageMarkup({ image: '/images/icons/caret-down.svg' }), 'chevron-down', 'expand dropdown' ] },
          { text: [ icons_data.imageMarkup({ image: '/images/icons/caret-up.svg' }), 'chevron-up', 'collapse dropdown' ] },
          { text: [ icons_data.imageMarkup({ image: '/images/icons/external-link.svg' }), 'external-link', 'navigate to pages outside of farmers.gov and USDA' ] },
          { text: [ icons_data.imageMarkup({ image: '/images/icons/close.svg' }), 'close', 'close modals' ] },
          { text: [ icons_data.imageMarkup({ image: '/images/icons/plus.svg' }), 'accordion-expand', 'expand accordion' ] },
          { text: [ icons_data.imageMarkup({ image: '/images/icons/minus.svg' }), 'accordion-collapse', 'collapse accordion' ] },
          { text: [ icons_data.imageMarkup({ image: '/images/icons/question.svg' }), 'popover', 'show popover' ] }
        ]
      }
    ]
  },
  supportingIcons() {
    return [ 
      icons_data.imageMarkup({ image: '/images/info.svg' }), 
      icons_data.imageMarkup({ image: '/images/mail.svg' }), 
      icons_data.imageMarkup({ image: '/images/print.svg' }), 
      icons_data.imageMarkup({ image: '/images/location.svg' }), 
      icons_data.imageMarkup({ image: '/images/phone.svg' }), 
    ]
  },
  illustrativeIcons() {
    return [ 
      icons_data.imageMarkup({ image: '/images/barn.svg' }), 
      icons_data.imageMarkup({ image: '/images/farmer.svg' }), 
      icons_data.imageMarkup({ image: '/images/land.svg' }), 
      icons_data.imageMarkup({ image: '/images/mfp.svg' }), 
    ]
  },
  imageMarkup(data) {
    const altText = data.alt ? data.alt : ''
    const classes = data.classes ? ' class="' + data.classes + '"' : ''
    return `<img src="` + data.image + `"` + classes + ` alt="` + altText + `">`
  }
}

export default icons_data