<template>
  <div>
    <h2>Radio Buttons</h2>
    <p class="intro-text text-margin-bottom">
      Radio buttons are used when the user can only make one selection from a list or group of options.
    </p>

    <h3>Form Radio Buttons</h3>
    <p>
      This style of radio buttons is commonly used in forms. All available options are visible. Users can only make a single selection. If users can make more than one selection, use checkboxes. Radio button icons and their labels should be left-aligned and vertical for better scannability when appropriate.
    </p>

    <p v-html="outputRadioButtonMarkup({ label: 'Radio Label', name: 'default' })"></p>  
    <p v-html="outputRadioButtonMarkup({ label: 'Radio Label', name: 'default', checked: true })"></p>  
    <div class="checkbox-radio-mobile-container">
      <ExampleRow :data="data.radioButtons()" :item-classes="[{ index: 0, classes: 'checkbox-grid-container' }]" columns="4" />
    </div>
    <Code :markup="outputRadioButtonMarkup({ label: 'Radio Label', name: 'default', checked: true, tabindex: true })" />

    <h4>Click Target</h4>
    <p>
      A radio button can be selected and deselected by clicking or tapping on the radio button as well as the text label.
    </p>

    <div class="row">
      <div class="medium-3 checkbox-radio-click-target highlight-overlay" v-html="outputRadioButtonMarkup({ label: 'Radio Label' })"></div> 
      <div class="checkbox-radio-click-target mouse-pointer text-margin-bottom"></div>
    </div>
    
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

    <ExampleRow :data="data.specs()" columns="3" />
    <ExampleRow :data="data.specsStates()" columns="3" />
    <Code :markup="outputCardMarkup({ label: 'Card Radio Button', image: '/images/MFP2-icon.jpg', name: 'click-target', checked: true, tabindex: true })" />

    <h3>Click Target</h3>
    <p>
      The entire card in card radio buttons should be clickable.
    </p>

    <div class="card-highlight text-margin-bottom">
      <div class="highlight-overlay" v-html="outputCardMarkup({ label: 'Card Radio Button' })"></div>
      <div class="checkbox-radio-card-click-target mouse-pointer"></div>
    </div>

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
  import data from '@/pages/_components-data/ui/radio-buttons.js'
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
        data: data
      }
    },
    methods: {
      outputCardMarkup(options) {
        return data.outputCardMarkup(options)
      },
      outputRadioButtonMarkup(options) {
        return data.outputRadioButtonMarkup(options)
      }
    }
  }
</script>