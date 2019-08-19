<template>
  <div>
    <h2>Checkboxes</h2>
    <p class="intro-text">
      Checkboxes are used when the user can make one or more selections from a list or group of options.
    </p>

    <h3>Form Checkboxes</h3>

    <p>
      This style of checkboxes is commonly used in forms. Users can select one or more options. If only one option can be selected, use <nuxt-link to="/ui/RadioButtons">radio buttons</nuxt-link>. Checkbox icons and their labels should be left-aligned and vertical for better scannability when appropriate.
    </p>
    <p v-html="outputCheckboxMarkup({ label: 'Checkbox Label' })"></p>  
    <p v-html="outputCheckboxMarkup({ label: 'Checkbox Label', checked: true })"></p>  

    <div class="checkbox-mobile-container">
      <ExampleRow :data="checkboxes" columns="4" />
    </div>

    <h3>Click Target</h3>
    <p>
      A checkbox can be selected and deselected by clicking or tapping on the checkbox as well as the text label.
    </p>
    
    <div class="row">
      <div class="medium-3 highlight-overlay" v-html="outputCheckboxMarkup({ label: 'Checkbox Label' })"></div> 
    </div>
    <div class="checkbox-click-target hover-hand"></div>
    
    <h3>Card Checkboxes</h3>

    <p>
      Card checkboxes are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can select one or more options. If only one option can be selected, use <nuxt-link to="/ui/RadioButtons#card-radio-buttons">card radio buttons</nuxt-link>.
    </p>

    <!-- TODO: add images to cards when they become available. -->
    <div class="container">
      <div class="row">
        <div v-html="outputCardMarkup({ label: 'Card Checkbox' })" class="medium-4"></div>
        <div v-html="outputCardMarkup({ label: 'Card Checkbox', checked: true })" class="medium-4"></div>
      </div>
    </div>

    <h3>Specs</h3>

    <p>
      Card height and width are flexible based on specific use cases. The cards are most commonly used in a &frac13; or &frac14; grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below.
    </p>

    <ExampleRow :data="specs" columns="3" />
    <ExampleRow :data="specs_states" columns="3" />

    <h3>Click Target</h3>
    <p>
      The entire card in card checkboxes should be clickable.
    </p>
    
    <div class="row">
      <div class="medium-4">
        <div class="highlight-overlay" v-html="outputCardMarkup({ label: 'Card Checkbox' })"></div>  
      </div>
    </div>
    <div class="checkbox-card-click-target hover-hand"></div>

    <h3>Accessibility</h3>
    <p>
      Checkboxes should show a visible focus state when tabbed to by a user. Using the “Space” key toggles the focused checkbox between selected and unselected states. 
    </p>
    <p>
      User interface components should meet 3:1 color contrast ratio requirements. This includes the border of the checkbox and the contrast between a selected checkbox background and the checkmark in the checkbox. 
    </p>

    <h4>References</h4>
    <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox">https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox</a>
    <br/>
    <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html</a>
  </div>
</template>

<script>
  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Checkboxes'
      }
    },
    data() {
      return {
        checkboxes: [
          {
            header: 'Unselected',
            classes: '',
            markup: this.outputCheckboxMarkup({ label: 'Checkbox Label', showDimensions: true }),
            code: {
              background: `color: #FFFFFF;
                        border: 2px #707070;
                        border-radius: 2px;`
            }
          },
          {
            header: 'Selected',
            classes: '',
            markup: this.outputCheckboxMarkup({ label: 'Checkbox Label', checked: true }),
            code: {
              background: `color: #006546;`,
              checkmark: `color: #FFFFFF;`
            }
          },
          {
            header: 'Focused',
            classes: '',
            markup: this.outputCheckboxMarkup({ label: 'Checkbox Label' }),
            code: { background: `shadow: #1B69D3;` }
          },
          {
            header: 'Disabled',
            classes: '',
            markup: this.outputCheckboxMarkup({ label: 'Checkbox Label' }),
            code: { 
                    background: `color: #F7F7F7;
                        border: 2px #BBBBBB;`
                  }
          },
        ],

        specs: [
          {
            header: 'Unselected',
            classes: '',
            markup: this.outputCardMarkup({ label: 'Card Checkbox' }),
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
            classes: '',
            markup: this.outputCardMarkup({ label: 'Card Checkbox', checked: true, showCardDimensions: true }),
            code: {
              card: `background: #FFFFFF;
                  border: 2px #49A564;
                  box-shadow: 0 1px 4px 0 #BBBBBB;
                  border-radius: 2px;`,
              checkbox:  `background: #49A564;
                      border-radius: 2px;`
            }
          }
        ],
        specs_states: [
          {
            header: 'Hover',
            classes: '',
            markup: this.outputCardMarkup({ label: 'Card Checkbox' }),
            code: {
              card: `border: 2px #49A564;`,
              checkbox: `background: #FFFFFF;
                      border: 2px #49A564;`
            }
          },
          {
            header: 'Focus',
            classes: '',
            markup: this.outputCardMarkup({ label: 'Card Checkbox', checked: true }),
            code: {
              card: `shadow: #1B69D3;`,
              checkbox: `background: #49A564;
                      checkmark: #FFFFFF;`
            }
          },
          {
            header: 'Disabled',
            classes: '',
            markup: this.outputCardMarkup({ label: 'Card Checkbox' }),
            code: {
              card: `border: 2px #BBBBBB;`,
              checkbox: `background: #F7F7F7;
                      border: 2px #BBBBBB;`
            }
          }
        ]

      }
    },
    methods: {
      outputCardMarkup(options) {
        let cardClasses = 'checkbox-card card'
        let checked
        if(!!options && options.checked) checked = ' checked'
        if(checked) cardClasses = cardClasses + ' checked'
        let card = `<div class="` + cardClasses + `" tabindex="-1">` + this.outputCheckboxMarkup(options) + `</div>`

        return options.showCardDimensions 
          ? `<div class="checkbox-card-grid">
              <div class="top"></div>
              <div class="bottom"></div>
              <div class="left"></div>
              <div class="right"></div>
              <div class="height-span top-right"></div>
              <div class="height-span bottom-right"></div>
              <div class="width-span bottom-left"></div>
              <div class="width-span bottom-right"></div>
              <div class="height-dimension top-right">20px</div>
              <div class="height-dimension bottom-right">20px</div>
              <div class="width-dimension bottom-left">20px</div>
              <div class="width-dimension bottom-right">20px</div>
              <div class="checkbox-span checkbox-span-top"></div>
              <div class="checkbox-span checkbox-span-left"></div>
              <div class="checkbox-dimension checkbox-dimension-top">32px</div>
              <div class="checkbox-dimension checkbox-dimension-left">32px</div>
              ` + card  + `</div>`
          : card
      },
      outputCheckboxMarkup(options) {
        let label = (!! options && options.label) ? options.label : 'Label'
        let labelClass = 'checkbox'
        let gridClass
        let checked

        if(!!options && options.showLabel === false) labelClass = labelClass + ' visually-hidden'
        if(!!options && options.showDimensions) gridClass = ' checkbox-dimensions'
        if(!!options && options.checked) checked = ' checked'

        let checkbox = `<input type="checkbox" name="example-1" value="Option 1" title="Option 1" tabindex="-1" ` + checked + `>
          <label for="example-1" tabindex="-1" class="` + labelClass + `">` + label + `</label>`

        return options.showDimensions ? `<div class="checkbox-grid`+ gridClass + `">
                <div class="checkbox-dimension-height">24 px</div>
                <div class="checkbox-height"></div>
                <div class="checkbox">
                  ` + checkbox + `
                </div>
                <div class="checkbox-width"></div>
                <div></div>
                <div></div>
                <div class="checkbox-dimension-width">24 px</div>
              </div>`
              : checkbox
      }
    }
  }
</script>