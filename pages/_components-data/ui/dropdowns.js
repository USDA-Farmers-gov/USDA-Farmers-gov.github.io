import utils from '@/assets/js/utils.js'

const selectOptions = [ 
  { text: 'Option 1', value: '01' },
  { text: 'Option 2', value: '02' },
  { text: 'Option 3', value: '03' },
  { text: 'Option 4', value: '04' },
  { text: 'Option 5', value: '05' },
  { text: 'Option 6', value: '06' },
  { text: 'Option 7', value: '07' },
  { text: 'Option 8', value: '08' },
]
const dropdowns_data = {
  dropdownSingle() {
    return dropdowns_data.getDropdownMarkup('Dropdown Label', selectOptions)
  },
  dropdownDimensions() {
    return dropdowns_data.getDropdownMarkup('Dropdown Label', selectOptions, { showDimensions: true })
  },
  dropdownHighlight() {
    return dropdowns_data.getDropdownMarkup('Dropdown Label', selectOptions, { highlight: true })
  },
  dropdownSpecs() {
    return [
          { 
            code: { 
                      dropdown_label: `font-family: Public Sans;
                              font-size: 16px;
                              line-height: 26px;
                              color: #212121;
                              font-weight: regular;` 
                  }
          },
          { 
            code: { 
                      dropdown_box: `background: #FFFFFF;
                            border: 1px #707070;
                            border-radius: 2px;`
                  }
          },
          { 
            code: {
                      dropdown_box_text: `font-family: Public Sans
                                font-size: 16px;
                                line-height: 20px;
                                color: #212121;
                                font-weight: bold;`
                  }
          },
        ]
  },
  dropDownStates() {
    return [
      { 
        header: 'Hover', 
        markup: dropdowns_data.getDropdownMarkup('Dropdown Label', selectOptions, { selectClasses: 'hover' }),
        code: {
          dropdown_box: `background: #DBEDE0;
                        border: 1px #212121;`, 
        }
      },
      { 
        header: 'Focus', 
        markup: dropdowns_data.getDropdownMarkup('Dropdown Label', selectOptions, { selectClasses: 'focus' }),
        code: {
          dropdown_box: `shadow: #1B69D3;`, 
        }
      },
      { 
        header: 'Disabled', 
        markup: dropdowns_data.getDropdownMarkup('Dropdown Label', selectOptions, { selectClasses: 'disabled' }),
        code: {
          dropdown_box: `background: #F7F7F7;
                          border: 1px #BBBBBB;`, 
          dropdown_box_text: `color: #BBBBBB;`
        }
      }
    ]
  },
  getDropdownMarkup(label, selectOptions, options, highlight) {
    let selectBaseClasses = 'simpler-select'

    let labelClasses = (!!options && options.labelClasses) ? options.labelClasses : ''
    let selectClasses = (!!options && options.selectClasses) ? selectBaseClasses + ' ' + options.selectClasses : selectBaseClasses
    let name = utils.lowerCaseAndHyphenate(label) + '-' + utils.randomString()

    let ddLabel = `<label for="` + name + `" class="` + labelClasses + `">` + label + `</label>`
    let ddSelect = `<select class="` + selectClasses + `" name="` + name + `" tabindex="-1">
                <option>- Please select -</option>`

    selectOptions.forEach(function(element){
      ddSelect = ddSelect + `<option value="` + element.value + `">` + element.text + `</option>`
    })

    ddSelect = ddSelect + `</select>`

    let ddSelectFull = (!!options && options.highlight) ? `<div class="click-target-highlight highlight-overlay">`
                                    + ddSelect + 
                                    `<div class="highlight-pointer mouse-pointer"></div>
                                  </div>`
                                  : ddSelect
    let dropdown = ddLabel + ddSelectFull

    return (!!options && options.showDimensions) ? `<div class="dropdown-grid">
                              ` + dropdown + `
                              <div class="label-dashed dashed-red dashed-red-horizontal"></div>
                              <div class="label-span span-red span-red-horizontal"></div>
                              <div class="label-dimension dimension-red dimension-red-horizontal">4px</div>

                              <div class="select-top-dashed dashed-red dashed-red-horizontal"></div>
                              <div class="select-top-span span-red span-red-horizontal"></div>
                              <div class="select-top-dimension dimension-red dimension-red-horizontal">16px</div>

                              <div class="select-bottom dashed dashed-red dashed-red-horizontal"></div>
                              <div class="select-bottom span span-red span-red-horizontal"></div>
                              <div class="select-bottom dimension dimension-red dimension-red-horizontal">16px</div>

                              <div class="bottom-left-dashed dashed-blue dashed-blue-vertical"></div>
                              <div class="bottom-left-span span-blue span-blue-vertical"></div>
                              <div class="bottom-left-dimension dimension-blue dimension-blue-vertical">16px</div>

                              <div class="bottom-right-dashed dashed-blue dashed-blue-vertical"></div>
                              <div class="bottom-right-span span-blue span-blue-vertical"></div>
                              <div class="bottom-right-dimension dimension-blue dimension-blue-vertical">16px</div>
                              
                              <div class="select-left-span span-red span-red-horizontal"></div>
                              <div class="select-left-dimension dimension-red dimension-red-horizontal">52px</div>
                            </div>` 
                          : dropdown
    }
}

export default dropdowns_data
