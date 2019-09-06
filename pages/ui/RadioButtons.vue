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

    <p v-html="outputRadioButtonMarkup({ label: 'Radio Label', name: 'default' })"></p>  
    <p v-html="outputRadioButtonMarkup({ label: 'Radio Label', name: 'default', checked: true })"></p>  
    <!-- TODO: find out how to style disabled button (not there right now) -->
    <div class="checkbox-radio-mobile-container">
      <ExampleRow :data="radio_buttons" columns="4" />
    </div>

    <h3>Click Target</h3>
    <p>
      A radio button can be selected and deselected by clicking or tapping on the radio button as well as the text label.
    </p>

    <div class="row">
      <div class="medium-3 checkbox-radio-click-target highlight-overlay" v-html="outputRadioButtonMarkup({ label: 'Radio Label' })"></div> 
    </div>
    <div class="checkbox-radio-click-target mouse-pointer"></div>
    
    <h3 id="card-radio-buttons">Card Radio Buttons</h3>

    <p>
      Card radio buttons are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can only make a single selection. If users can make more than one selection, use <nuxt-link to="/ui/Checkboxes">checkboxes</nuxt-link>.
    </p>

    <div class="row row-click-target">
      <div v-html="outputCardMarkup({ label: 'Card Radio Button', name: 'click-target' })" class="medium-4"></div>
      <div v-html="outputCardMarkup({ label: 'Card Radio Button', name: 'click-target', checked: true })" class="medium-4"></div>
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

    <div class="card-highlight">
        <div class="highlight-overlay" v-html="outputCardMarkup({ label: 'Card Radio Button' })"></div>
    </div>
    <div class="checkbox-radio-card-click-target mouse-pointer"></div>

    <h3>Accessibility</h3>

    <p>
      Radio button functionality must be available through <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton">keyboard interactions</a>.
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
  import radio_buttons_data from '@/pages/_components-data/ui/radio-buttons.js'
  import utils from '@/assets/js/utils.js'
  
  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Radio Buttons'
      }
    },
    data() {
      return {
        buttons_default: radio_buttons_data.buttonsDefault(),
        radio_buttons: radio_buttons_data.radioButtons(),
        specs: radio_buttons_data.specs(),
        specs_states: radio_buttons_data.specsStates()
      }
    },
    methods: {
      outputCardMarkup(options) {
        return radio_buttons_data.outputCardMarkup(options)
      },
      outputRadioButtonMarkup(options) {
        return radio_buttons_data.outputRadioButtonMarkup(options)
      }
    }
  }
</script>