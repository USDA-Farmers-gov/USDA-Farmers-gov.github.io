const checkboxes_data = {
  default() {
    return [
          {
            header: 'Unselected',
            markup: checkboxes_data.outputCheckboxMarkup({ label: 'Checkbox Label', showDimensions: true }),
            code: {
              background: `color: #FFFFFF;
                        border: 2px #707070;
                        border-radius: 2px;`
            }
          },
          {
            header: 'Selected',
            markup: checkboxes_data.outputCheckboxMarkup({ label: 'Checkbox Label', checked: true }),
            code: {
              background: `color: #006546;`,
              checkmark: `color: #FFFFFF;`
            }
          },
          {
            header: 'Focused',
            markup: checkboxes_data.outputCheckboxMarkup({ label: 'Checkbox Label' }),
            code: { background: `shadow: #1B69D3;` }
          },
          {
            header: 'Disabled',
            classes: '',
            markup: checkboxes_data.outputCheckboxMarkup({ label: 'Checkbox Label', disabled: true }),
            code: { 
                    background: `color: #F7F7F7;
                        border: 2px #BBBBBB;`
                  }
          },
        ]
    },
    specs() {
      return [
          {
            header: 'Unselected',
            classes_cell: 'dimension-margins',
            markup: checkboxes_data.outputCardMarkup({ label: 'Card Checkbox', image: '/images/MFP2-icon.jpg' }),
            code: {
              card: `background: #FFFFFF;
                border: 2px #BBBBBB;
                box-shadow: 0 1px 4px 0 #BBBBBB;
                border-radius: 2px;`,
              checkbox: `background: #FFFFFF;
                  border: 2px #49A564;
                  border-radius: 2px;`
            }
          },
          {
            header: 'Selected',
            markup: checkboxes_data.outputCardMarkup({ 
                                        label: 'Card Checkbox', 
                                        image: '/images/MFP2-icon.jpg', 
                                        card_classes: 'focus', 
                                        checked: true, 
                                        showCardDimensions: true }),
            code: {
              card: `background: #FFFFFF;
                  border: 2px #49A564;
                  box-shadow: 0 1px 4px 0 #BBBBBB;
                  border-radius: 2px;`,
              checkbox:  `background: #49A564;
                      border-radius: 2px;`
            }
          }
        ]
    },
    specsStates() {
      return [
          {
            header: 'Hover',
            markup: checkboxes_data.outputCardMarkup({ label: 'Card Checkbox', card_classes: 'focus', image: '/images/MFP2-icon.jpg' }),
            code: {
              card: `border: 2px #49A564;`,
              checkbox: `background: #FFFFFF;
                      border: 2px #49A564;`
            }
          },
          {
            header: 'Focus',
            markup: checkboxes_data.outputCardMarkup({ 
                            label: 'Card Checkbox', 
                            card_classes: 'focus', 
                            image: '/images/MFP2-icon.jpg', 
                            checked: true }),
            code: {
              card: `shadow: #1B69D3;`,
              checkbox: `background: #49A564;
                      checkmark: #FFFFFF;`
            }
          },
          {
            header: 'Disabled',
            markup: checkboxes_data.outputCardMarkup({ label: 'Card Checkbox', image: '/images/MFP2-icon.jpg', disabled: true }),
            code: {
              card: `border: 2px #BBBBBB;`,
              checkbox: `background: #F7F7F7;
                      border: 2px #BBBBBB;`
            }
          }
        ]
    },
    outputCardMarkup(options) {
      let labelClasses = 'checkbox-card-label'
      let checked = ''

      if(!!options && options.image) labelClasses = labelClasses + ' with-image'
      if(!!options && options.card_classes) labelClasses = labelClasses + ' ' + options.card_classes
      if(!!options && options.checked) checked = ' checked'
      if(!!options && options.disabled) labelClasses = labelClasses + ' disabled '

      let card = `<label tabindex="-1" for="checkbox-card-3" class="` + labelClasses + `">`
      if(options.image) card = card + `<div class="cb-img-card-top">
                                          <img src="` + options.image + `">
                                        </div>`
      let checkbox = `<input type="checkbox" id="checkbox-card-3" class="checkbox-card-input" title="` + options.label + `" tabindex="-1" ` + checked + `>`
                    + options.label + `
                    <span class="cb-icon"></span>`

      let card_bottom = (options.image) ? `<div class="cb-img-card-bottom">` + checkbox + `</div>` : checkbox

      card = card + card_bottom

      return options.showCardDimensions 
        ? `<div class="checkbox-card-grid">
            <div class="checkbox-card-top dashed-red dashed-red-horizontal"></div>
            <div class="checkbox-card-bottom dashed-red dashed-red-horizontal"></div>

            <div class="checkbox-card-left dashed-blue dashed-blue-vertical"></div>
            <div class="checkbox-card-right dashed-blue dashed-blue-vertical"></div>

            <div class="height-span top-right span-red span-red-horizontal"></div>
            <div class="height-span bottom-right span-red span-red-horizontal"></div>

            <div class="width-span bottom-left span-blue span-blue-vertical"></div>
            <div class="width-span bottom-right span-blue span-blue-vertical"></div>

            <div class="height-dimension top-right dimension-red">20px</div>
            <div class="height-dimension bottom-right dimension-red">20px</div>

            <div class="width-dimension bottom-left dimension-blue">20px</div>
            <div class="width-dimension bottom-right dimension-blue">20px</div>

            <div class="checkbox-span checkbox-span-top span-blue span-blue-vertical"></div>
            <div class="checkbox-span checkbox-span-left span-red span-red-horizontal"></div>

            <div class="checkbox-dimension-top dimension-blue">32px</div>
            <div class="checkbox-dimension-left dimension-red">32px</div>
            
            <div class="checkbox-card">` + card  + `</div>
            </div>`
        : card
    },
    outputCheckboxMarkup(options) {
      let label = (!! options && options.label) ? options.label : 'Label'
      let labelClass = 'checkbox-label'
      let gridClass
      let checked = ''
      let disabled = ''

      if(!!options && options.showLabel === false) labelClass = labelClass + ' visually-hidden'
      if(!!options && options.showDimensions) gridClass = ' checkbox-dimensions'
      if(!!options && options.checked) checked = ' checked '
      if(!!options && options.disabled) disabled = ' disabled '

      let checkbox = `<input type="checkbox" name="example" value="Option" title="Option" tabindex="-1"` + checked + disabled + ` class="checkbox-input">
        <label for="example" tabindex="-1" class="` + labelClass + `">` + label + `</label>`

      return options.showDimensions ? `<div class="checkbox-grid`+ gridClass + `">
              <div class="dimension-red dimension-red-horizontal">24 px</div>
              <div class="checkbox-height span-red span-red-horizontal"></div>
              <div class="checkbox">
                ` + checkbox + `
              </div>
              <div class="checkbox-width span-blue span-blue-vertical"></div>
              <div class="checkbox-width-dimension dimension-blue dimension-blue-vertical">24 px</div>
            </div>`
            : checkbox
    }
  }

export default checkboxes_data