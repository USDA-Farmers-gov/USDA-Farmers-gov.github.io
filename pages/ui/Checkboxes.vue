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
    <div class="mouse-pointer"></div>
    
    <h3>Card Checkboxes</h3>

    <p>
      Card checkboxes are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can select one or more options. If only one option can be selected, use <nuxt-link to="/ui/RadioButtons#card-radio-buttons">card radio buttons</nuxt-link>.
    </p>

    <!-- TODO: add images to cards when they become available. -->
    <div class="container examples">
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
    
    <div class="card-highlight">
        <div class="highlight-overlay" v-html="outputCardMarkup({ label: 'Card Checkbox' })"></div>
    </div>
    <div class="mouse-pointer"></div>
    
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
  import checkboxes_data from '../_components-data/checkboxes.js'
  
  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Checkboxes'
      }
    },
    data() {
      return {
        checkboxes: checkboxes_data.Default(),
        specs: checkboxes_data.Specs(),
        specs_states: checkboxes_data.SpecsStates()
      }
    },
    methods: {
      outputCardMarkup(options) {
        checkboxes_data.outputCardMarkup(options)
      },
      outputCheckboxMarkup(options) {
        checkboxes_data.outputCheckboxMarkup(options)
      }
    }
  }
</script>