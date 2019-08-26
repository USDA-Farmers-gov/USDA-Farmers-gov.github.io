<template>
  <div>
    <h2>Radio Buttons</h2>
    <p class="intro-text">
      Radio buttons are used when the user can only make one selection from a list or group of options.
    </p>

    <h3>Form Radio Buttons</h3>

    <p>
      This style of radio buttons is commonly used in forms. All available options are visible. Users can only make a single selection. If users can make more than one selection, use checkboxes. Radio button icons and their labels should be left-aligned and vertical for better scannability when appropriate.
    </p>

    <div class="row">
      <div class="medium-2">
        <input type="radio" name="group1" id="r1" value="1" tabindex="-1">
        <label for="r1">Choice 1</label>
      </div>
      <div class="medium-2">
        <input type="radio" name="group1" id="r2" value="2" tabindex="-1">
        <label for="r2">Choice 2</label>      
      </div>
    </div>

    <div class="checkbox-mobile-container">
      <ExampleRow :data="radio_buttons" columns="4" />
    </div>

    <h3>Click Target</h3>
    <p>
      A radio button can be selected and deselected by clicking or tapping on the radio button as well as the text label.
    </p>

    <div class="row">
      <div class="medium-3 highlight-overlay" v-html="outputRadioButtonMarkup({ label: 'Radio Label' })"></div> 
    </div>
    <div class="mouse-pointer"></div>
    
    <h3 id="card-radio-buttons">Card Radio Buttons</h3>

    <p>
      Card radio buttons are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can only make a single selection. If users can make more than one selection, use <nuxt-link to="/ui/Checkboxes">checkboxes</nuxt-link>.
    </p>

    <!-- TODO: add images to cards when they become available. -->
    <div class="row">
      <div v-html="outputCardMarkup({ label: 'Card Radio Button' })" class="medium-4"></div>
      <div v-html="outputCardMarkup({ label: 'Card Radio Button', checked: true })" class="medium-4"></div>
    </div>

    <h3>Specs</h3>

    <p>
      Card height and width are flexible based on specific use cases. The cards are most commonly used in a &frac13; or &frac14; grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below. 
    </p>

    <ExampleRow :data="specs" columns="3" />
    <ExampleRow :data="specs_states" columns="3" />

    <h3>Click Target</h3>

    <p>
      The entire card in card radio buttons should be clickable.
    </p>

    <div class="row card-highlight">
      <div class="medium-4">
        <div class="highlight-overlay" v-html="outputCardMarkup({ label: 'Card Radio Button' })"></div>
      </div>
    </div>
    <div class="mouse-pointer"></div>

    <h3>Accessibility</h3>

    <p>
      Radio button functionality must be available through <nuxt-link to="#">keyboard interactions</nuxt-link>.
    </p>
    <p>
      User interface components should meet 3:1 color contrast ratio requirements. This includes the border of the radio button and the contrast between a selected radio button background and the filled circle in the radio button. 
    </p>

    <h4>References</h4>
    <p>
      <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton">https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton</a>
      <br/>
      <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html</a>
    </p>
  </div>
</template>

<script>
  import utils from '../../assets/js/utils.js'
  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Radio Buttons'
      }
    },
    data() {
      return {
        radio_buttons: [
            {
              header: 'Unselected',
              markup: this.outputRadioButtonMarkup({ label: 'Radio Label', showDimensions: true }),
              code: {
                background: `color: #FFFFFF;
                              border: 2px #707070;`
              }
            },
            {
              header: 'Selected',
              markup: this.outputRadioButtonMarkup({ label: 'Radio Label', checked: true }),
              code: {
                background: `color: #006546;
                              border: 2px #006546;`,
              }
            },
            {
              header: 'Focused',
              markup: this.outputRadioButtonMarkup({ label: 'Radio Label' }),
              code: { background: `shadow: #1B69D3;` }
            },
            {
              header: 'Disabled',
              markup: this.outputRadioButtonMarkup({ label: 'Radio Label' }),
              code: { 
                      background: `color: #F7F7F7;
                              border: 2px #BBBBBB;`
                    }
            },
          ],

          specs: [
            {
              header: 'Unselected',
              classes_cell: 'dimension-margins',
              markup: this.outputCardMarkup({ label: 'Card Radio Button' }),
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
              markup: this.outputCardMarkup({ label: 'Card Radio Button', checked: true, showCardDimensions: true }),
              code: {
                card: `background: #FFFFFF;
                    border: 2px #49A564;
                    box-shadow: 0 1px 4px 0 #BBBBBB;
                    border-radius: 2px;`,
                radio_button:  `background: #49A564;
                    border-radius: 2px;`
              }
            }
          ],
          specs_states: [
            {
              header: 'Hover',
              markup: this.outputCardMarkup({ label: 'Card Radio Button' }),
              code: {
                card: `border: 2px #49A564;`,
                radio_button: `background: #FFFFFF;
                        border: 2px #49A564;`
              }
            },
            {
              header: 'Focus',
              markup: this.outputCardMarkup({ label: 'Card Radio Button', checked: true }),
              code: {
                card: `shadow: #1B69D3;`,
                radio_button: `background: #49A564;
                        border-radius: 2px;`
              }
            },
            {
              header: 'Disabled',
              markup: this.outputCardMarkup({ label: 'Card Radio Button' }),
              code: {
                card: `border: 2px #BBBBBB;`,
                radio_button: `background: #F7F7F7;
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
          let card = `<div class="` + cardClasses + `" tabindex="-1">` + this.outputRadioButtonMarkup(options) + `</div>`

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
                ` + card  + `</div>`
            : card
        },
        outputRadioButtonMarkup(options) {
          let label = (!! options && options.label) ? options.label : 'Label'
          let labelClass = 'checkbox'
          let gridClass
          let checked
          let id = utils.randomString()

          if(!!options && options.showLabel === false) labelClass = labelClass + ' visually-hidden'
          if(!!options && options.showDimensions) gridClass = ' checkbox-dimensions'
          if(!!options && options.checked) checked = ' checked'

          let radioButton = `<input type="radio" name="group1" id="` + id + `" value="2" tabindex="-1">
          <label for="` + id + `">` + label + `</label>`

          return options.showDimensions ? `<div class="checkbox-grid`+ gridClass + `">
                  <div class="dimension-red dimension-red-horizontal">24 px</div>
                  <div class="checkbox-height span-red span-red-horizontal"></div>
                  <div class="checkbox">
                    ` + radioButton + `
                  </div>
                  <div class="checkbox-width span-blue span-blue-vertical"></div>
                  <div class="checkbox-width-dimension dimension-blue dimension-blue-vertical">24 px</div>
                </div>`
                : radioButton
        }
    }
  }
</script>