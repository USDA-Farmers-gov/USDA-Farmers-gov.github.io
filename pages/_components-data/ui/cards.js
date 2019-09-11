
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
        markup: cards_data.defaultCardWithGrid({ 
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
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
          accent_top: true
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
    return cards_data.resourceCardMarkup({ 
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
        'Link': `Use appropriate link style from <a href="/ui/Links">Links</a> page`
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
        header: 'Default without Logo',
        markup: cards_data.resourceCardMarkup({ 
          link: { text: 'External Link Headline', href: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
          footnote: 'Same specs as resource cards with logo.' }),
      },
      {
        header: 'Hover',
        markup: cards_data.resourceCardMarkup({ 
          classes: 'hover',
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
    let accentTop     = (!!data && data.accent_top) ? ' accent-top' : ''

    let icon = img ? `<div class="img">
                        <img src="` + img + `" alt="">
                      </div>`
                    : ``
    let content = `<div class="headline">
                      <h4>` + header + `</h4>
                    </div>
                    <div class="content">
                      <p>` + description + `</p>
                    </div>`
    let link = linkText ? `<div class="link">
                            <a class="text-link">` + linkText + `</a>
                          </div>`
                        : ``
    return `<div class="content-card` + accentTop + `">` + icon + content + link + `</div>`
  },
  defaultCardWithGrid(data) {
    let grid = `<div class="default-card-grid">` 
                  + cards_data.defaultCardMarkup(data) +
                  `<div class="default-card-top dashed-red dashed-red-horizontal"></div>
                  <div class="default-card-top-span span-red span-red-horizontal"></div>
                  <div class="default-card-top-dimension dimension-red dimension-red-horizontal">20px</div>

                  <div class="default-card-bottom dashed-red dashed-red-horizontal"></div>
                  <div class="default-card-bottom-span span-red span-red-horizontal"></div>
                  <div class="default-card-bottom-dimension dimension-red dimension-red-horizontal">20px</div>

                  <div class="default-card-left dashed-blue dashed-blue-vertical"></div>
                  <div class="default-card-left-span span-blue span-blue-vertical"></div>
                  <div class="default-card-left-dimension dimension-blue dimension-blue-vertical">20px</div>

                  <div class="default-card-right dashed-blue dashed-blue-vertical"></div>
                  <div class="default-card-right-span span-blue span-blue-vertical"></div>
                  <div class="default-card-right-dimension dimension-blue dimension-blue-vertical">20px</div>
                </div>`
    return grid
  },
  resourceCardMarkup(data) {
    let classes = (!!data && data.classes) ? ' ' + data.classes : ''
    let img = (data.img) ? `<div class="logo">
                              <img src="` + data.img + `" alt="">
                            </div>`
                          : ``

    let content = `<div class="link">
                      <a class="external-link">External Link Headline</a>
                    </div>
                    <div class="content">
                      <p>
                      ` + data.description + `
                      </p>
                    </div>`
    let footnote = (!!data && data.footnote) ? `<div class="card-footnote">*` + data.footnote + `</div>` : ``

    return `<div class="resource-card` + classes + `">` + img + content + `</div>` + footnote
  },
  resourceCardGrid() {
    let data = { 
          img: '/images/usda-symbol.svg', 
          header: 'Example Card Headline',
          link: { text: 'External Link Headline', href: '#' },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    let grid = `<div class="resource-card-grid">` 
                  + cards_data.resourceCardMarkup(data) +
                  `<div class="resource-card-top dashed-red dashed-red-horizontal"></div>
                  <div class="resource-card-top-span span-red span-red-horizontal"></div>
                  <div class="resource-card-top-dimension dimension-red dimension-red-horizontal">32px</div>

                  <div class="resource-card-above-link dashed-red dashed-red-horizontal"></div>
                  <div class="resource-card-above-link-span span-red span-red-horizontal"></div>
                  <div class="resource-card-above-link-dimension dimension-red dimension-red-horizontal">16px</div>

                  <div class="resource-card-below-link dashed-red dashed-red-horizontal"></div>
                  <div class="resource-card-below-link-span span-red span-red-horizontal"></div>
                  <div class="resource-card-below-link-dimension dimension-red dimension-red-horizontal">8px</div>

                  <div class="resource-card-bottom dashed-red dashed-red-horizontal"></div>
                  <div class="resource-card-bottom-span span-red span-red-horizontal"></div>
                  <div class="resource-card-bottom-dimension dimension-red dimension-red-horizontal">32px</div>

                  <div class="resource-card-left dashed-blue dashed-blue-vertical"></div>
                  <div class="resource-card-left-span span-blue span-blue-vertical"></div>
                  <div class="resource-card-left-dimension dimension-blue dimension-blue-vertical">20px</div>

                  <div class="resource-card-right dashed-blue dashed-blue-vertical"></div>
                  <div class="resource-card-right-span span-blue span-blue-vertical"></div>
                  <div class="resource-card-right-dimension dimension-blue dimension-blue-vertical">20px</div>

                </div>`
    return grid
  }
}

export default cards_data