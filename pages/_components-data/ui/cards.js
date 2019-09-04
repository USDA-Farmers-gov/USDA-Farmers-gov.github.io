
const cards_data = {
  cardSingle() {
    return [
      { 
        icon: 'xxx.png', 
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
          img: 'tractor.svg', 
          header: 'Example Card Headline',
          link: { text: 'Text Link', link: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`
        }),
        code: {
          card_container: `background: #FFFFFF;
            box-shadow: 0 1px 4px 0 #BBBBBB;
            border-radius: 2px;`,
          green_accent_line_op_optional_cp_: `color: #006546;`
        }
      },
      {
        markup: cards_data.defaultCardMarkup({ 
          img: 'tractor.svg', 
          header: 'Example Card Headline',
          link: { text: 'Text Link', link: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`
        }),
        code: {
          card_container: `background: #FFFFFF;
            box-shadow: 0 1px 4px 0 #BBBBBB;
            border-radius: 2px;`,
          green_accent_line_op_options_cp_: `color: #006546;
            border-radius: 2px 2px 0 0;`
        }
      },
    ]
  },
  resourceCardSingle() {
    return cards_data.defaultCardMarkup({ 
          img: 'usda.svg', 
          header: 'Example Card Headline',
          link: { text: 'External Link Headline', href: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        })
  },
  resourceCardSpecs() {
    return [
      {
        code: {
          card_container: `background: #FFFFFF;
            box-shadow: 0 1px 4px 0 #BBBBBB;
            border-radius: 2px;`,
          green_accent_line: `color: #006546;
            border-radius: 2px 2px 0 0;`,
          link: `Use appropriate link style from <nuxt-link to="ui/Links">Links</nuxt-link> page`,
          body_text: `font-family: Public Sans
            font-size: 18px;
            color: #212121;
            line-height: 28px;
            font-weight: regular;`,
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
          card_container: `box-shadow: 0 4px 16px 0 #BBBBBB;`
        }
      }
    ]
  },
  defaultCardMarkup(data) {
    let img = (!!data && data.img) ? data.img : ''
    let header = (!!data && data.header) ? data.header : ''
    let linkText = (!!data && !!data.link && data.link.text) ? data.link.text : ''
    let linkHref = (!!data && !!data.link && data.link.href) ? data.link.href : ''
    let description = (!!data && data.description) ? data.description : ''

    let markup = `<div>img: ` + img + `<br> header: ` + header + `<br>link text: ` + linkText + `<br>link href: ` + linkHref + `<br>description: ` + description + `</div>`

    if(!!data && data.footnote) markup = markup + '<div class="card-footnote">*' + data.footnote + '</div>'
    return markup
  }
}

export default cards_data