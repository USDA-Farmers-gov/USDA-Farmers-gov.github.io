import utils from '@/assets/js/utils.js'

const links_data = {
  textLinks() { 
    return [
      { 
        header: 'Default',
        markup: links_data.defaultLinkGrid(),
        code: {
          'Text': `color: #006546;
            font-family: Public Sans;
            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
            text-decoration: underline;`,
          'Icon': `color: #212121;
            size: 20x20;`
        }
      },
      { 
        header: 'Hover',
        markup: links_data.linkMarkup({ classes: 'hover' }),
        code: {
          'Text': `color: #49A564;`
        }
      },
      { 
        header: 'Focus',
        markup: links_data.linkMarkup({ classes: 'focus' }),
        classes: 'focus',
        code: {
          'Text': `color: #49A564;
            shadow: #1B69D3;`
        }
      },
      { 
        header: 'Visited',
        markup: links_data.linkMarkup({ classes: 'visited' }),
        classes: 'visited',
        code: {
          'Text': `color: #4C2C92;`
        }
      }
    ]
  },
  externalTextLinks() {
    return [
      { 
        header: 'Default',
        markup: links_data.externalLinkGrid(),
        code: {
          'Text': `color: #006546;
            font-family: Public Sans;
            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
            text-decoration: underline;`,
          'Icon': `color: #006546;
            size: 12x12;`
        }
      },
      { 
        header: 'Hover',
        markup: links_data.linkMarkup({ type: 'external', classes: 'hover' }),
        code: {
          'Text': `color: #49A564;`,
          'Icon': `color: #49A564;`
        }
      },
      { 
        header: 'Focus',
        markup: links_data.linkMarkup({ type: 'external', classes: 'focus' }),
        classes: 'focus',
        code: {
          'Text': `color: #49A564;
            shadow: #1B69D3;`,
          'Icon': `color: #49A564;`
        }
      },
      { 
        header: 'Visited',
        markup: links_data.linkMarkup({ type: 'external', classes: 'visited' }),
        classes: 'visited',
        code: {
          'Text': `color: #4C2C92;`,
          'Icon': `color: #4C2C92;`
        }
      }
    ]
  },
  inlineTextLinks() {
    return [
      { 
        header: 'Default',
        markup: '<a href="#" tabindex="-1">Inline Link</a>', 
        code: {
          'Text': `color: #006546;
            font-family: Public Sans;
            font-size: 18px;
            font-weight: regular;
            line-height: 28px;
            text-decoration: underline;`
        }
      },
      { 
        header: 'Hover',
        markup: '<a href="#" class="hover" tabindex="-1">Inline Link</a>',
        code: {
          'Text': `font-weight: bold;`
        }
      },
      { 
        header: 'Focus',
        markup: '<a href="#" class="focus" tabindex="-1">Inline Link</a>',
        classes: 'focus',
        code: {
          'Text': `font-weight: bold;
            shadow: #1B69D3;`
        }
      },
      { 
        header: 'Visited',
        markup: '<a href="#" class="visited" tabindex="-1">Inline Link</a>',
        classes: 'visited',
        code: {
          'Text': `color: #4C2C92;`
        }
      }
    ]
  },
  anchorLinks() {
    return [
      { 
        header: 'Default',
        markup: links_data.anchorLinkGrid(),
        code: {
          'Text': `color: #006546;
            font-family: Public Sans;
            font-size: 18px;
            font-weight: regular;
            line-height: 28px;
            text-decoration: underline;`,
          'Icon': `color: #49A564;
            size: 18x14;`
        }
      },
      { 
        header: 'Hover',
        markup: links_data.anchorLinkMarkup({ classes: 'hover' }),
        code: {
          'Text': `font-weight: bold;`
        }
      },
      { 
        header: 'Focus',
        markup: links_data.anchorLinkMarkup({ classes: 'focus' }),
        classes: 'focus',
        code: {
          'Text': `font-weight: bold;
            shadow: #1B69D3;`
        }
      },
      { 
        header: 'Visited',
        markup: links_data.anchorLinkMarkup({ classes: 'visited' }),
        classes: 'visited',
        code: {
          'Text': `color: #4C2C92;`
        }
      }
    ]
  },

  linkMarkup(data) {
    let classes = (!!data && data.classes) ? data.classes : ''
    let tabindex = (!!data && data.tabindex) ? '' : 'tabindex="-1"'
    let href = (!!data && data.tabindex) ? 'href="#" ' : ''

    let linkClass = 'text-link'
    let linkText = 'Text Link'

    if(!!data && data.type === 'external') {
      linkClass = 'external-link'
      linkText = 'External Link'
    }
    if(!!data && data.type === 'inline-text') {
      linkClass = 'inline-text-link'
      linkText = 'Inline Link'
    }

    return `<a ` + href + `class="` + utils.setClasses(linkClass, classes) + `" ` + tabindex + `>` + linkText + `</a>`
  },


  textLinkMarkup(data) {
    let classes = (!!data && data.classes) ? data.classes : ''
    let tabindex = (!!data && data.tabindex) ? '' : 'tabindex="-1"'
    let href = (!!data && data.tabindex) ? 'href="#" ' : ''
    return `<a ` + href + `class="` + utils.setClasses('text-link', classes) + `" ` + tabindex + `>Text Link</a>`
  },
  externalLinkMarkup(data) {
    let classes = (!!data && data.classes) ? data.classes : ''
    let tabindex = (!!data && data.tabindex) ? '' : 'tabindex="-1"'
    let href = (!!data && data.tabindex) ? 'href="#" ' : ''

    return `<a ` + href + `class="` + utils.setClasses('external-link', classes) + `"` + tabindex + `>External Link</a>`
  },
  inlineTextLinkMarkup(data) {
    let classes = (!!data && data.classes) ? data.classes : ''
    let tabindex = (!!data && data.tabindex) ? '' : 'tabindex="-1"'
    let href = (!!data && data.tabindex) ? 'href="#" ' : ''

    return `<a ` + href + `class="` + utils.setClasses('inline-text-link', classes) + `"` + tabindex + `>Inline Link</a>`
  },
  anchorLinkMarkup(data) {
    let classes = (!!data && data.classes) ? data.classes : ''
    let tabindex = (!!data && data.tabindex) ? '' : 'tabindex="-1"'
    let href = (!!data && data.tabindex) ? 'href="#" ' : ''

    return `<a ` + href + `class="` + utils.setClasses('anchor-link', classes) + `"` + tabindex + `>Anchor Link</a>`
  },
  defaultLinkGrid() {
    return `<div class="default-link-grid">
              ` + links_data.textLinkMarkup() + `
            <div class="default-link dashed-blue dashed-blue-vertical"></div>
            <div class="default-link-span span-blue span-blue-vertical"></div>
            <div class="default-link-dimension dimension-blue dimension-blue-vertical">6px</div>
          </div>`
  },
  externalLinkGrid() {
    return `<div class="external-link-grid">
              ` + links_data.externalLinkMarkup() + `
            <div class="external-link-display dashed-blue dashed-blue-vertical"></div>
            <div class="external-link-span span-blue span-blue-vertical"></div>
            <div class="external-link-dimension dimension-blue dimension-blue-vertical">4px</div>
          </div>`
  },
  anchorLinkGrid() {
    return `<div class="anchor-link-grid">
              ` + links_data.anchorLinkMarkup() + `
            <div class="anchor-link-display dashed-blue dashed-blue-vertical"></div>
            <div class="anchor-link-span span-blue span-blue-vertical"></div>
            <div class="anchor-link-dimension dimension-blue dimension-blue-vertical">10px</div>
          </div>`
  }
}

export default links_data