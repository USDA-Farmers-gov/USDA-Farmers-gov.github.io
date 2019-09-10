
const cards_data = {
  cardSingle() {
    return [
      { 
        img: '/images/tractor.png', 
        title: 'Example Card Headline', 
        link: { text: 'Text Link', href: '#' },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`
      }
    ]
  },
  specs() {
    return [
      {
        markup: cards_data.defaultCardMarkup({ 
          img: '/images/tractor.png', 
          header: 'Example Card Headline',
          link: { text: 'Text Link', link: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`
        }),
        code: {
          'Card Container': `background: #FFFFFF;
            box-shadow: 0 1px 4px 0 #BBBBBB;
            border-radius: 2px;`,
          'Green Accent Line (optional)': `color: #006546;`
        }
      },
      {
        markup: cards_data.defaultCardMarkup({ 
          img: '/images/tractor.png', 
          header: 'Example Card Headline',
          link: { text: 'Text Link', link: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`
        }),
        code: {
          'Card Container': `background: #FFFFFF;
            box-shadow: 0 1px 4px 0 #BBBBBB;
            border-radius: 2px;`,
          'Green Accent Line (options)': `color: #006546;
            border-radius: 2px 2px 0 0;`
        }
      },
    ]
  },
  resourceCardSingle() {
    return cards_data.defaultCardMarkup({ 
          img: '/images/usda-symbol.svg', 
          header: 'Example Card Headline',
          link: { text: 'External Link Headline', href: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        })
  },
  resourceCardSpecs() {
    return [
      {
        code: {
        'Card Container': `background: #FFFFFF;
          box-shadow: 0 1px 4px 0 #BBBBBB;
          border-radius: 2px;`
        }
      },
      {
        code: {
        'Green Accent Line': `color: #006546;
          border-radius: 2px 2px 0 0;`
        }
      },
      {
        code: {
        'Link': `Use appropriate link style from <nuxt-link to="ui/Links">Links</nuxt-link> page`
        }
      },
      {
        code: {
        'Body Text': `font-family: Public Sans
          font-size: 18px;
          color: #212121;
          line-height: 28px;
          font-weight: regular;`
        }  
      }      
    ]
  },
  resourceCardSpecsWithoutLogo() {
    return [
      {
        markup: cards_data.defaultCardMarkup({ 
          link: { text: 'External Link Headline', href: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
          footnote: 'Same specs as resource cards with logo.' }),
      },
      {
        markup: cards_data.defaultCardMarkup({ 
          link: { text: 'External Link Headline', href: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
          footnote: 'Applies to both resource cards with and without logo.' }),
        code: {
          'Card Container': `box-shadow: 0 4px 16px 0 #BBBBBB;`
        }
      }
    ]
  },
  defaultCardMarkup(data) {
    let img           = (!!data && data.img) ? data.img : ''
    let header        = (!!data && data.header) ? data.header : ''
    let linkText      = (!!data && !!data.link && data.link.text) ? data.link.text : ''
    let linkHref      = (!!data && !!data.link && data.link.href) ? data.link.href : ''
    let description   = (!!data && data.description) ? data.description : ''

    let markup = `<div>img: <img src="` + img + `" style="width: 100px;"><br> header: ` + header + `<br>link text: ` + linkText + `<br>link href: ` + linkHref + `<br>description: ` + description + `</div>`

    if(!!data && data.footnote) markup = markup + '<div class="card-footnote">*' + data.footnote + '</div>'
    return markup
  }
}

export default cards_data