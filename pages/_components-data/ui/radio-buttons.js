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
                background: `color: #FFFFFF;
                              border: 2px #707070;`
              }
            },
            {
              header: 'Selected',
              markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', checked: true }),
              code: {
                background: `color: #006546;
                              border: 2px #006546;`,
              }
            },
            {
              header: 'Focused',
              markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', labelClasses: 'focus', checked: true }),
              code: { background: `shadow: #1B69D3;` }
            },
            {
              header: 'Disabled',
              markup: radio_buttons_data.outputRadioButtonMarkup({ label: 'Radio Label', disabled: true }),
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
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg' }),
              code: {
                card: `background: #FFFFFF;
                      border: 2px #BBBBBB;
                      box-shadow: 0 1px 4px 0 #BBBBBB;
                      border-radius: 2px;`,
                radio_button: `background: #FFFFFF;
                      border: 2px #49A564;`
              }
            },
            {
              header: 'Selected',
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg', checked: true, showCardDimensions: true }),
              code: {
                card: `background: #FFFFFF;
                    border: 2px #49A564;
                    box-shadow: 0 1px 4px 0 #BBBBBB;
                    border-radius: 2px;`,
                radio_button:  `background: #49A564;
                    border-radius: 2px;`
              }
            }
          ]
  },
  specsStates() {
    return [
            {
              header: 'Hover',
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg', hover: true }),
              code: {
                card: `border: 2px #49A564;`,
                radio_button: `background: #FFFFFF;
                        border: 2px #49A564;`
              }
            },
            {
              header: 'Focus',
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', labelClasses: 'focus', image: '/images/MFP2-icon.jpg', checked: true }),
              code: {
                card: `shadow: #1B69D3;`,
                radio_button: `background: #49A564;
                        border-radius: 2px;`
              }
            },
            {
              header: 'Disabled',
              markup: radio_buttons_data.outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg', disabled: true }),
              code: {
                card: `border: 2px #BBBBBB;`,
                radio_button: `background: #F7F7F7;
                        border: 2px #BBBBBB;`
              }
            }
          ]
  },
  outputCardMarkup(options) {
    let labelClasses = 'radio-card-label'
    let checked = ''

    if(!!options && options.image) labelClasses = labelClasses + ' with-image'
    if(!!options && options.card_classes) labelClasses = labelClasses + ' ' + options.card_classes
    if(!!options && options.checked) {
      checked = ' checked'
      labelClasses = labelClasses + ' checked'
    }
    if(!!options && options.hover) labelClasses = labelClasses + ' checked'
    if(!!options && options.labelClasses) labelClasses = labelClasses + ' ' + options.labelClasses
    if(!!options && options.disabled) labelClasses = labelClasses + ' disabled '

    let card = `<label tabindex="-1" for="radio-card-3" class="` + labelClasses + `">`
    if(options.image) card = card + `<div class="radio-img-card-top">
                                        <img src="` + options.image + `">
                                      </div>`
    let radio_button = `<input type="radio" id="radio-card-2" class="radio-card-input" name="radio-example-` + utils.randomString() + `" title="` + options.label + `" tabindex="-1"` + checked + `>
           ` + options.label + `
           <span class="radio-icon"></span>`

    let card_bottom = (options.image) ? `<div class="radio-img-card-bottom">` + radio_button + `</div>` : radio_button

    card = card + card_bottom

    return options.showCardDimensions 
      ? `<div class="checkbox-radio-card-grid">
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
          <div class="checkbox-radio-card">` + card  + `</div>
          </div>`
      : card
    },
    outputRadioButtonMarkup(options) {
      let label = (!!options && options.label) ? options.label : 'Label'
      let labelClass = 'radio-label'
      let gridClass = (!!options && options.showDimensions) ? ' checkbox-radio-dimensions' : ''
      let id = 'radio-input-' + utils.randomNumber()
      let checked = (!!options && options.checked) ? ' checked' : ''
      let disabled = (!!options && options.disabled) ? ' disabled' : ''
      let name = (!!options && options.name) ? options.name : 'radio-button' + '-' + utils.randomNumber()

      if(!!options && options.showLabel === false) labelClass = labelClass + ' visually-hidden'
      if(!!options && options.labelClasses) labelClass = labelClass + ' ' + options.labelClasses

      let radioButton = `<input type="radio" class="radio-input" name="` + name + `" id="` + id + `" value="1" tabindex="-1"` + checked + disabled + `>
      <label for="` + id + `" class="` + labelClass + `">` + label + `</label>`

      return options.showDimensions ? `<div class="checkbox-radio-grid`+ gridClass + `">
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