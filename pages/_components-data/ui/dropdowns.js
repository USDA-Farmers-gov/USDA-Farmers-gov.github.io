const options = [ 
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
    return dropdowns_data.getDropdownMarkup('Dropdown Label', options)
  },
  dropdownDimensions() {
    return dropdowns_data.getDropdownMarkup('Dropdown Label', options, true)
  },
  dropdownHighlight() {
    return dropdowns_data.getDropdownMarkup('Dropdown Label', options, false, true)
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
        markup: dropdowns_data.getDropdownMarkup('Dropdown Label', options),
        code: {
          dropdown_box: `background: #DBEDE0;
                        border: 1px #212121;`, 
        }
      },
      { 
        header: 'Focus', 
        markup: dropdowns_data.getDropdownMarkup('Dropdown Label', options),
        code: {
          dropdown_box: `shadow: #1B69D3;`, 
        }
      },
      { 
        header: 'Disabled', 
        markup: dropdowns_data.getDropdownMarkup('Dropdown Label', options),
        code: {
          dropdown_box: `background: #F7F7F7;
                          border: 1px #BBBBBB;`, 
          dropdown_box_text: `color: #BBBBBB;`
        }
      }
    ]
  },
  getDropdownMarkup(label, options, showDimensions, highlight) {
    let ddLabel = `<label for="scl-select-one">` + label + `</label>`
    let ddSelect = `<select class="simpler-select scl-select" name="` + ddLabel + `" aria-label="Select a State">
                <option>- Please select -</option>`

    options.forEach(function(element){
      ddSelect = ddSelect + `<option value="` + element.value + `">` + element.text + `</option>`
    })
    
    ddSelect = ddSelect + `</select>`

    let dropdown = (highlight) ? `<div class="highlight-overlay">`
                                    + ddSelect + 
                                    `<div class="highlight-pointer mouse-pointer"></div>
                                  </div>`
                                  : ddSelect

    return showDimensions ? `<div class="dropdown-grid">
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
                              ` + dropdown + `
                              </div>` 
                          : dropdown
    }
}

export default dropdowns_data
