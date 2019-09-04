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
        code: {
          card_container: `background: #FFFFFF;
            box-shadow: 0 1px 4px 0 #BBBBBB;
            border-radius: 2px;`,
          green_accent_line_op_options_cp: `color: #006546;`
        }
      },
      {
        code: {
          card_container: `background: #FFFFFF;
            box-shadow: 0 1px 4px 0 #BBBBBB;
            border-radius: 2px;`,
          green_accent_line_op_options_cp: `color: #006546;
            border-radius: 2px 2px 0 0;`
        }
      },
    ]
  },
  resourceCardSingle() {
    return [
      { 
        icon: 'xxx.png', 
        link: { text: 'External Link Headline', href: '#' },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      }
    ]
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
        footnote: 'Same specs as resource cards with logo.',
      },
      {
        footnote: 'Applies to both resource cards with and without logo.',
        code: {
          card_container: `box-shadow: 0 4px 16px 0 #BBBBBB;`
        }
      }
    ]
  }
}

export default cards_data