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
        markup: links_data.textLinkMarkup({ classes: 'hover' }),
        code: {
          'Text': `color: #49A564;`
        }
      },
      { 
        header: 'Focus',
        markup: links_data.textLinkMarkup({ classes: 'focus' }),
        classes: 'focus',
        code: {
          'Text': `color: #49A564;
            shadow: #1B69D3;`
        }
      },
      { 
        header: 'Visited',
        markup: links_data.textLinkMarkup({ classes: 'visited' }),
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
        markup: links_data.externalLinkMarkup({ classes: 'hover' }),
        code: {
          'Text': `color: #49A564;`,
          'Icon': `color: #49A564;`
        }
      },
      { 
        header: 'Focus',
        markup: links_data.externalLinkMarkup({ classes: 'focus' }),
        classes: 'focus',
        code: {
          'Text': `color: #49A564;
            shadow: #1B69D3;`,
          'Icon': `color: #49A564;`
        }
      },
      { 
        header: 'Visited',
        markup: links_data.externalLinkMarkup({ classes: 'visited' }),
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
  textLinkMarkup(data) {
    let classes = (!!data && data.classes) ? data.classes : ''
    return `<a class="` + utils.setClasses('text-link', classes) + `" tabindex="-1">Text Link</a>`
  },
  externalLinkMarkup(data) {
    let classes = (!!data && data.classes) ? data.classes : ''
    return `<a class="` + utils.setClasses('external-link', classes) + `" tabindex="-1">External Link</a>`
  },
  anchorLinkMarkup(data) {
    let classes = (!!data && data.classes) ? data.classes : ''
    return `<a class="` + utils.setClasses('anchor-link', classes) + `" tabindex="-1">Anchor Link</a>`
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