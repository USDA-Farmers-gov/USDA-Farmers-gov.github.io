const dropdowns_data = {
  DropdownSingle() {
    return [
          { text: 'Option 1', value: '01' },
          { text: 'Option 2', value: '02' },
          { text: 'Option 3', value: '03' },
        ]
  },
  DropdownStates() {
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

  getDropdownMarkup(label, options, showDimensions) {
    let dropdown = `
            <label for="scl-select-one">` + label + `</label>
            <select class="simpler-select scl-select" name="` + label + `" aria-label="Select a State">
                <option>- Please select -</option>`
    options.forEach(function(element){
      dropdown = dropdown + `<option value="` + element.value + `">` + element.text + `</option>`
    })
    dropdown = dropdown + `</select>`

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
