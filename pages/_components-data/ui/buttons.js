const buttons_data = {
  primaryButton() {
    return [
        { 
          header: 'Default', 
          markup: buttons_data.outputButtonMarkup('', true),
          code: {
            background: `border-radius: 4px;
                        color: #1A6AD3;
                        shadow: 0;1;4;0  #BBBBBB;`, 
            text: `color: #FFFFFF;
                    font-family: "Public Sans";
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 20px;` 
          }
        },
        { 
          header: 'Small', 
          classes: 'sm-btn', 
          markup: buttons_data.outputButtonMarkup('sm-btn', true),
          code: {
            background: `border-radius: 4px;
                        color: #1A6AD3;
                        shadow: 0;1;4;0  #BBBBBB;`, 
            text: `color: #FFFFFF;
                    font-family: "Public Sans";
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 20px;`
          }
        },
        { 
          header: 'Large', 
          classes: 'lg-btn', 
          markup: buttons_data.outputButtonMarkup('lg-btn', true),
          code: {
            background: `border-radius: 4px;
                        color: #1A6AD3;
                        shadow: 0;1;4;0  #BBBBBB;`, 
            text: `color: #FFFFFF;
                    font-family: "Public Sans";
                    font-size: 20px;
                    font-weight: bold;
                    line-height: 26px;` 
          }
        }
      ]
  },
  primaryButtonStates() {
    return [
        { 
          header: 'Hover', 
          classes: 'hover-color', 
          markup: buttons_data.outputButtonMarkup('hover-color'), 
          code: { background: 'color: #004785;' } 
        },
        { 
          header: 'Active', 
          classes: 'active-color', 
          markup: buttons_data.outputButtonMarkup('active-color'), 
          code: { background: 'color: #122E51;' } 
        },
        { 
          header: 'Focus', 
          classes: 'focus-color', 
          markup: buttons_data.outputButtonMarkup('focus-color'), 
          code: { background: 'shadow: #1B69D3;' } 
        },
        { 
          header: 'Disabled', 
          classes: 'disabled', 
          markup: buttons_data.outputButtonMarkup('disabled'), 
          code: { background: 'color: #BBBBBB;' } 
        }
      ]
  },
  secondaryButton() {
    return [
        { 
          header: 'Default', 
          classes: 'outline', 
          markup: buttons_data.outputButtonMarkup('outline', true),
          code: {
            background: `border: 1px #1A6AD3;
                        border-radius: 4px;
                        color: #FFFFFF;
                        shadow: 0;1;4;0  #BBBBBB;`, 
            text: `color: #1A6AD3;
                    font-family: "Public Sans";
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 20px;` 
          }
        },
        { 
          header: 'Small', 
          classes: 'sm-btn outline', 
          markup: buttons_data.outputButtonMarkup('sm-btn outline', true),
          code: {
            background: `border: 1px #1A6AD3;
                        border-radius: 4px;
                        color: #FFFFFF;
                        shadow: 0;1;4;0  #BBBBBB;`, 
            text: `color: #1A6AD3;
                    font-family: "Public Sans";
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 20px;`
          }
        },
        { 
          header: 'Large', 
          classes: 'lg-btn outline', 
          markup: buttons_data.outputButtonMarkup('lg-btn outline', true),
          code: {
            background: `border: 1px #1A6AD3;
                        border-radius: 4px;
                        color: #FFFFFF;
                        shadow: 0;1;4;0  #BBBBBB;`, 
            text: `color: #1A6AD3;
                    font-family: "Public Sans";
                    font-size: 20px;
                    font-weight: bold;
                    line-height: 26px;` 
          }
        }
      ]
  },
  secondaryButtonStates() {
    return [
        {  
          header: 'Hover', 
          classes: 'hover-color outline',
          markup: buttons_data.outputButtonMarkup('hover-color outline'), 
          code: {
            background: 'border: #004785;', 
            text: 'color: #004785;' 
          }
        },
        { 
          header: 'Active', 
          classes: 'active-color outline', 
          markup: buttons_data.outputButtonMarkup('active-color outline'), 
          code: {
            background: 'border: #122E51;', 
            text: 'color: #122E51;' 
          }
        },
        { 
          header: 'Focus', 
          classes: 'focus-color outline',
          markup: buttons_data.outputButtonMarkup('focus-color outline'), 
          code: {
            background: 'shadow: #1B69D3;', 
            text: 'color: #122E51;' 
          }
        },
        { 
          header: 'Disabled', 
          classes: 'disabled outline',
          markup: buttons_data.outputButtonMarkup('disabled outline'), 
          code: {
            background: 'border: #BBBBBB;', 
            text: 'color: #BBBBBB;' 
          }
        }
      ]
  },
  tertiaryButtonDefault() {
    return [
        {
          class: 'tertiary',
          markup: buttons_data.outputButtonMarkup('tertiary'), 
          code: { text: `color: #1A6AD3;
                  font-family: "Public Sans";
                  font-size: 16px;
                  font-weight: bold;
                  line-height: 20px;`
          }
        }
      ]
  },
  tertiaryButton() {
    return [
        { 
          header: 'Hover', 
          classes: 'hover-color tertiary', 
          markup: buttons_data.outputButtonMarkup('hover-color tertiary'),
          code: { text: 'color: #004785;' } 
        },
        { 
          header: 'Active', 
          classes: 'active-color tertiary',
          markup: buttons_data.outputButtonMarkup('active-color tertiary'),
          code: { text: 'color: #122E51;' } 
        },
        { 
          header: 'Focus', 
          classes: 'focus-color tertiary', 
          markup: buttons_data.outputButtonMarkup('focus-color tertiary'),
          code: { text: 'shadow: #1B69D3;' } 
        },
        { 
          header: 'Disabled', 
          classes: 'disabled tertiary', 
          markup: buttons_data.outputButtonMarkup('disabled tertiary'),
          code: { text: 'color: #BBBBBB;' } 
        }
      ]
  },
  feedbackButton() {
    return [
        { 
          header: 'Default', 
          classes: 'feedback', 
          markup: buttons_data.outputButtonMarkup('feedback', true),
          code: {
            background: `border: 2px #1A6AD3;
                        color: #FFFFFF;
                        shadow: 0;1;4;0
                        #BBBBBB;`, 
            text: `color: #1A6AD3;
                    font-family: "Public Sans";
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 20px;` 
          }
        },
        { 
          header: 'Hover', 
          classes: 'hover-color feedback', 
          markup: buttons_data.outputButtonMarkup('hover-color feedback'),
          code: {
            background: 'border: 2px #004785;', 
            text: 'color: #004785;'
          }
        },
        { 
          header: 'Active', 
          classes: 'active-color feedback', 
          markup: buttons_data.outputButtonMarkup('active-color feedback'),
          code: {
            background: 'border: 2px #122E51;', 
            text: 'color: #122E51;' 
          }
        },
        { 
          header: 'Focus', 
          classes: 'focus-color feedback', 
          markup: buttons_data.outputButtonMarkup('focus-color feedback'),
          code: {
            background: `border: 2px #122E51;
                           shadow: #1B69D3;`, 
            text: 'color: #122E51;' 
          }
        }
      ]
  },
  outputButtonMarkup(classes, showDimensions, index) {
      let btnClasses    = buttons_data.setButtonClasses(classes)
      let dimensions    = buttons_data.getButtonDimensions(btnClasses)
      let buttonText    = (!!classes && classes.indexOf('feedback') >= 0) ? 'Yes' : 'Button'
      let gridClasses   = classes ? 'button-grid ' + classes : 'button-grid' 
      if(!!classes && classes.indexOf('feedback') >= 0 && index === 0) showDimensions = true

      return showDimensions ? `<div class="` + gridClasses + `">
                <div class="button">
                  <button class="` + btnClasses + `" tabindex="-1">` + buttonText + `</button>
                </div>
                <div class="button-height span-blue span-blue-horizontal"></div>
                <div class="button-dimension-height dimension-blue dimension-blue-vertical">` + dimensions.height + `px</div>
                <div class="button-width span-blue span-blue-vertical"></div>
                <div class="button-dimension-width dimension-blue dimension-blue-horizontal">` + dimensions.width + `px</div>
              </div>`
              : `<button class="` + btnClasses + `" tabindex="-1">` + buttonText + `</button>`
    },
    setButtonClasses(classes) {
      let baseClasses = 'btn'
      return classes ? baseClasses + ' ' + classes : baseClasses 
    },
    getButtonDimensions(btnClasses) {
      let dimensions = { width: 134, height: 42 }

      if(btnClasses.indexOf('sm-btn') >= 0) dimensions    = { width: 96, height: 32 }
      if(btnClasses.indexOf('lg-btn') >= 0) dimensions    = { width: 216, height: 52 }
      if(btnClasses.indexOf('feedback') >= 0) dimensions  = { width: 64, height: 64 }

      return dimensions
    }
}
export default buttons_data