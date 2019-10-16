import utils from '@/assets/js/utils.js'

const radio_buttons_data = {
  buttonsDefault() {
    return [
      { markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', name: 'default' }) },
      { markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', name: 'default', checked: true }) },
    ]
  },
  radioButtons() {
    return [
            {
              header: 'Unselected',
              markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', showDimensions: true }),
              code: {
                'Background': `color: #FFFFFF;
                              border: 2px #707070;`
              }
            },
            {
              header: 'Selected',
              markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', checked: true }),
              code: {
                'Background': `color: #006546;
                              border: 2px #006546;`,
              }
            },
            {
              header: 'Focused',
              markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', labelClasses: 'focus', checked: true }),
              code: { 'Background': `shadow: #1B69D3;` }
            },
            {
              header: 'Disabled',
              markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', disabled: true }),
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
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg', name: 'specs-1' }),
              code: {
                'Card': `background: #FFFFFF;
                      border: 2px #BBBBBB;
                      box-shadow: 0 1px 4px 0 #BBBBBB;
                      border-radius: 2px;`,
                'Radio Button': `background: #FFFFFF;
                      border: 2px #49A564;`
              }
            },
            {
              header: 'Selected',
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg', name: 'specs-1', checked: true, showCardDimensions: true }),
              code: {
                'Card': `background: #FFFFFF;
                    border: 2px #49A564;
                    box-shadow: 0 1px 4px 0 #BBBBBB;
                    border-radius: 2px;`,
                'Radio Button':  `background: #49A564;
                    border-radius: 2px;`
              }
            }
          ]
  },
  specsStates() {
    return [
            {
              header: 'Hover',
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg', name: 'specs-2', hover: true }),
              code: {
                'Card': `border: 2px #49A564;`,
                'Radio Button': `background: #FFFFFF;
                        border: 2px #49A564;`
              }
            },
            {
              header: 'Focus',
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', labelClasses: 'focus', image: '/images/MFP2-icon.jpg', name: 'specs-2', checked: true }),
              code: {
                'Card': `shadow: #1B69D3;`,
                'Radio Button': `background: #49A564;
                        border-radius: 2px;`
              }
            },
            {
              header: 'Disabled',
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg', name: 'specs-2', disabled: true }),
              code: {
                'Card': `border: 2px #BBBBBB;`,
                'Radio Button': `background: #F7F7F7;
                        border: 2px #BBBBBB;`
              }
            }
          ]
  },
  outputCardMarkup(data) {
    let labelClasses  = 'radio-card-label'
    let checked       = ''
    let tabindex = (!!data && data.tabindex) ? '' : ' tabindex="-1"'

    if(!!data && data.image)          labelClasses = utils.setClasses(labelClasses, 'with-image')
    if(!!data && data.card_classes)   labelClasses = utils.setClasses(labelClasses, data.card_classes)
    if(!!data && data.hover)          labelClasses = utils.setClasses(labelClasses, 'checked')
    if(!!data && data.labelClasses)   labelClasses = utils.setClasses(labelClasses, data.labelClasses)
    if(!!data && data.disabled)       labelClasses = utils.setClasses(labelClasses, 'disabled')

    if(!!data && data.checked) {
      checked       = ' checked'
      labelClasses  = labelClasses + ' checked'
    }

    let name  = (!!data && data.name) ? data.name : 'radio-example-' + utils.randomNumber()
    let id    = (!!data && data.id) ? data.id : 'radio-card-' + utils.randomNumber()
    let card  = `<label` + tabindex + ` for="` + id + `" class="` + labelClasses + `">`

    if(data.image) card = card + `<div class="radio-img-card-top">
                                        <img src="` + data.image + `">
                                      </div>`
    let radio_button = `<input type="radio" id="` + id + `" class="radio-card-input" name="` + name + `" title="` + data.label + `"` + tabindex + checked + `> ` + data.label + `
           <span class="radio-icon"></span>`

    let card_bottom = (data.image) ? `<div class="radio-img-card-bottom">` + radio_button + `</div>` : radio_button

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
    outputRadioButtonMarkup(data) {
      let id          = 'radio-input-' + utils.randomNumber()
      let name        = (!!data && data.name) ? data.name : 'radio-button-' + utils.randomNumber()
      let labelClass  = 'radio-label'
      let label       = (!!data && data.label) ? data.label : 'Label'
      let gridClass   = (!!data && data.showDimensions) ? ' checkbox-radio-dimensions' : ''
      let checked     = (!!data && data.checked) ? ' checked' : ''
      let disabled    = (!!data && data.disabled) ? ' disabled' : ''
      let tabindex    = (!!data && data.tabindex) ? '' : ' tabindex="0"'

      if(!!data && data.showLabel === false)  labelClass = utils.setClasses(labelClass, ' visually-hidden')
      if(!!data && data.labelClasses)         labelClass = utils.setClasses(labelClass, data.labelClasses)

      let radioButton = `<input type="radio" class="radio-input" name="` + name + `" id="` + id + `" value="1"` + checked + disabled + `>
      <label for="` + id + `" class="` + labelClass + `"` + tabindex + `>` + label + `</label>`

      return data.showDimensions ? `<div class="checkbox-radio-grid`+ gridClass + `">
              <div class="dimension-red dimension-red-horizontal">24 px</div>
              <div class="checkbox-radio-height span-red span-red-horizontal"></div>
              <div class="checkbox">
                ` + radioButton + `
              </div>
              <div class="checkbox-radio-width span-blue span-blue-vertical"></div>
              <div class="checkbox-radio-width-dimension dimension-blue dimension-blue-vertical">24 px</div>
            </div>`
            : radioButton
    }
}

export default radio_buttons_data