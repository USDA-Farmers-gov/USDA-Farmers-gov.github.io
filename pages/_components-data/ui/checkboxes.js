import utils from '@/assets/js/utils.js'

const checkboxes_data = {
  default() {
    return [
          {
            header: 'Unselected',
            markup: checkboxes_data.outputCheckboxMarkup({ label: 'Checkbox Label', showDimensions: true }),
            code: {
              'Background': `color: #FFFFFF;
                        border: 2px #707070;
                        border-radius: 2px;`
            }
          },
          {
            header: 'Selected',
            markup: checkboxes_data.outputCheckboxMarkup({ label: 'Checkbox Label', checked: true }),
            code: {
              'Background': `color: #006546;`,
              'Checkmark': `color: #FFFFFF;`
            }
          },
          {
            header: 'Focused',
            markup: checkboxes_data.outputCheckboxMarkup({ label: 'Checkbox Label', labelClass: 'focus' }),
            code: { 'Background': `shadow: #1B69D3;` }
          },
          {
            header: 'Disabled',
            classes: '',
            markup: checkboxes_data.outputCheckboxMarkup({ label: 'Checkbox Label', disabled: true }),
            code: { 
                    'Background': `color: #F7F7F7;
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
            markup: checkboxes_data.outputCardMarkup({ label: 'Card Checkbox', image: '/images/produce_basket.jpg' }),
            code: {
              'Card': `background: #FFFFFF;
                border: 2px #BBBBBB;
                box-shadow: 0 1px 4px 0 #BBBBBB;
                border-radius: 2px;`,
              'Checkbox': `background: #FFFFFF;
                  border: 2px #49A564;
                  border-radius: 2px;`
            }
          },
          {
            header: 'Selected',
            markup: checkboxes_data.outputCardMarkup({ 
                                        label: 'Card Checkbox', 
                                        image: '/images/produce_basket.jpg', 
                                        checked: true, 
                                        showCardDimensions: true }),
            code: {
              'Card': `background: #FFFFFF;
                  border: 2px #49A564;
                  box-shadow: 0 1px 4px 0 #BBBBBB;
                  border-radius: 2px;`,
              'Checkbox':  `background: #49A564;
                      border-radius: 2px;`
            }
          }
        ]
    },
    specsStates() {
      return [
          {
            header: 'Hover',
            markup: checkboxes_data.outputCardMarkup({ label: 'Card Checkbox', hover: true, image: '/images/produce_basket.jpg' }),
            code: {
              'Card': `border: 2px #49A564;`,
              'Checkbox': `background: #FFFFFF;
                      border: 2px #49A564;`
            }
          },
          {
            header: 'Focus',
            markup: checkboxes_data.outputCardMarkup({ 
                            label: 'Card Checkbox', 
                            labelClasses: 'focus',
                            image: '/images/produce_basket.jpg', 
                            checked: true }),
            code: {
              'Card': `shadow: #1B69D3;`,
              'Checkbox': `background: #49A564;
                      checkmark: #FFFFFF;`
            }
          },
          {
            header: 'Disabled',
            markup: checkboxes_data.outputCardMarkup({ label: 'Card Checkbox', image: '/images/produce_basket.jpg', disabled: true }),
            code: {
              'Card': `border: 2px #BBBBBB;`,
              'Checkbox': `background: #F7F7F7;
                      border: 2px #BBBBBB;`
            }
          }
        ]
    },
    outputCardMarkup(data) {
      const tabindex = (!!data && data.tabindex === false) ? 'tabindex="-1"' : 'tabindex="0"'
      let labelClasses  = 'checkbox-card-label'
      let checked       = ''
      let disabled      = ''
      let id = (!!data && data.id) ? data.id : 'checkbox-card-' + utils.randomNumber()
      
      if(!!data && data.image)          labelClasses = utils.setClasses(labelClasses, ' with-image')
      if(!!data && data.hover)          labelClasses = utils.setClasses(labelClasses, ' checked')
      if(!!data && data.labelClasses)   labelClasses = utils.setClasses(labelClasses, data.labelClasses)

      if(!!data && data.checked) {
        checked       = ' checked'
        labelClasses  = labelClasses + ' checked'
      }
      if(!!data && data.disabled) {
        disabled      = ' disabled'
        labelClasses  = labelClasses + ' disabled '
      }

      let card = `<label for="` + id + `" class="` + labelClasses + `"` + tabindex + `>`
      if(data.image) card = card + `<div class="cb-img-card-top">
                                          <img src="` + data.image + `">
                                        </div>`
      let checkbox = `<input type="checkbox" id="` + id + `" class="checkbox-card-input" title="` + data.label + `"` + tabindex + checked + disabled + `>`
                    + data.label + `
                    <span class="cb-icon"></span>`

      let card_bottom = (data.image) ? `<div class="cb-img-card-bottom">` + checkbox + `</div>` : checkbox

      card = card + card_bottom

      return data.showCardDimensions 
        ? `<div class="checkbox-radio-card-grid">
            <div class="checkbox-radio-card">` + card  + `</div>
            <div class="checkbox-radio-card-top dashed-red dashed-red-horizontal"></div>
            <div class="checkbox-radio-card-bottom dashed-red dashed-red-horizontal"></div>

            <div class="checkbox-radio-card-left dashed-blue dashed-blue-vertical"></div>
            <div class="checkbox-radio-card-right dashed-blue dashed-blue-vertical"></div>

            <div class="height-span top-right span-red span-red-horizontal"></div>
            <div class="height-span bottom-right span-red span-red-horizontal"></div>

            <div class="width-span bottom-left span-blue span-blue-vertical"></div>
            <div class="width-span bottom-right span-blue span-blue-vertical"></div>

            <div class="height-dimension top-right dimension-red">20px</div>
            <div class="height-dimension bottom-right dimension-red">20px</div>

            <div class="width-dimension bottom-left dimension-blue">20px</div>
            <div class="width-dimension bottom-right dimension-blue">20px</div>

            <div class="checkbox-radio-span checkbox-radio-span-top span-blue span-blue-vertical"></div>
            <div class="checkbox-radio-span checkbox-radio-span-left span-red span-red-horizontal"></div>

            <div class="checkbox-radio-dimension-top dimension-blue">32px</div>
            <div class="checkbox-radio-dimension-left dimension-red">32px</div>
          </div>`
        : card
    },
    outputCheckboxMarkup(data) {
      const id = (!!data && data.id) ? data.id : 'checkbox-' + utils.randomNumber()
      const tabindex = (!!data && data.tabindex === false) ? 'tabindex="-1"' : 'tabindex="0"'
      let label       = (!! data && data.label) ? data.label : 'Label'
      let labelClass  = 'checkbox-label'
      let gridClass   = ''
      let checked     = ''
      let disabled    = ''

      if(!!data && data.showLabel === false)    labelClass = utils.setClasses(labelClass, ' visually-hidden')
      if(!!data && data.labelClass)             labelClass = utils.setClasses(labelClass, data.labelClass)
      if(!!data && data.showDimensions)         gridClass = ' checkbox-radio-dimensions'
      if(!!data && data.checked)                checked = ' checked '
      if(!!data && data.disabled)               disabled = ' disabled '

      let checkbox = `<input id="` + id + `" type="checkbox" name="example" value="Option" title="Option"` + checked + disabled + ` class="checkbox-input">
        <label for="` + id + `"` + tabindex + ` class="` + labelClass + `">` + label + `</label>`

      return data.showDimensions ? `<div class="checkbox-radio-grid`+ gridClass + `">
              <div class="dimension-red dimension-red-horizontal">24 px</div>
              <div class="checkbox-radio-height span-red span-red-horizontal"></div>
              <div class="checkbox">
                ` + checkbox + `
              </div>
              <div class="checkbox-radio-width span-blue span-blue-vertical"></div>
              <div class="checkbox-radio-width-dimension dimension-blue dimension-blue-vertical">24 px</div>
            </div>`
            : checkbox
    }
  }

export default checkboxes_data