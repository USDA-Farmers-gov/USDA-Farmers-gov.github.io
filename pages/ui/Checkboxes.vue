<template>
  <div>
    <h2>Checkboxes</h2>
    <p>
      Checkboxes are used when the user can make one or more selections from a list or group of options.
    </p>

    <h3>Form Checkboxes</h3>

    <p>
      This style of checkboxes is commonly used in forms. Users can select one or more options. If only one option can be selected, use <a href="#">radio buttons</a>. Checkbox icons and their labels should be left-aligned and vertical for better scannability when appropriate.
    </p>
    <p v-html="outputCheckboxMarkup({ label: 'Checkbox Label' })"></p>  
    <p v-html="outputCheckboxMarkup({ label: 'Checkbox Label', checked: true })"></p>  

    <div v-if="checkboxes.length" class="container">
      <div class="row">
        <Example v-for="(item, index) in checkboxes" 
          columns="4" 
          :header="item.type" 
          :markup="outputCheckboxMarkup({ label: '&nbsp;', checked: item.checked })" 
          :code="{ background: item.background, checkmark: item.checkmark }" 
          :key="index"/>
      </div>
    </div>

    <h3>Click Target</h3>
    <p>
      A checkbox can be selected and deselected by clicking or tapping on the checkbox as well as the text label.
    </p>
    <p>
      [CHECKBOX LABEL]
    </p>

    <h3>Card Checkboxes</h3>

    <p>
      Card checkboxes are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can select one or more options. If only one option can be selected, use <a href="#">card radio buttons</a>.
    </p>

    <div class="container">
      <div class="row">
        <div v-html="outputCardMarkup({ label: 'Card Checkbox' })" class="medium-4"></div>
        <div v-html="outputCardMarkup({ label: 'Card Checkbox', checked: true })" class="medium-4"></div>
      </div>
    </div>

    <div v-for="checkbox in specs">
      <h3 v-if="checkbox.header">{{ checkbox.header }}</h3>
      <p v-if="checkbox.description" v-html="checkbox.description"/>
      <div v-if="checkbox.examples_1.length" class="container">
        <div class="row">
          <Example v-for="(item, index) in checkbox.examples_1" 
            columns="3" 
            :header="item.type" 
            :markup="outputCardMarkup({ label: 'Card Checkbox', checked: item.checked })" 
            :code="{ card: item.card, checkbox: item.checkbox }" 
            :key="index"/>
        </div>
        <div class="row">
          <Example v-for="(item, index) in checkbox.examples_2" 
            columns="3" :header="item.type" 
            :markup="outputCardMarkup({ label: 'Card Checkbox', checked: item.checked })" 
            :code="{ card: item.card, checkbox: item.checkbox }" 
            :key="index"/>
        </div>
      </div>
    </div>

    <h3>Click Target</h3>
    <p>
      The entire card in card checkboxes should be clickable.
    </p>
    <p>
      [ CHECKBOX HOVER ]
    </p>

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
    data() {
      return {
        checkboxes: [
          {
            type: 'Unselected',
            classes: '',
            background: `color: #FFFFFF;
                        border: 2px #707070;
                        border-radius: 2px;`
          },
          {
            type: 'Selected',
            classes: '',
            checked: true,
            background: `color: #006546;`,
            checkmark: `color: #FFFFFF;`
          },
          {
            type: 'Focused',
            classes: '',
            background: `shadow: #1B69D3;`
          },
          {
            type: 'Disabled',
            classes: '',
            background: `color: #F7F7F7;
                        border: 2px #BBBBBB;`
          },
        ],
        specs: [
          { 
            header: 'Specs',
            description: `Card height and width are flexible based on specific use cases. The cards are most commonly used in a &frac13; or &frac14; grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below.`,
            examples_1: [
              {
                type: 'Unselected',
                classes: '',
                checked: false,
                card: `background: #FFFFFF;
                    border: 2px #BBBBBB;
                    box-shadow: 0 1px 4px 0 #BBBBBB;
                    border-radius: 2px;`,
                checkbox: `background: #FFFFFF;
                      border: 2px #49A564;
                      border-radius: 2px;`
              },
              {
                type: 'Selected',
                classes: '',
                checked: true,
                card: `background: #FFFFFF;
                      border: 2px #49A564;
                      box-shadow: 0 1px 4px 0 #BBBBBB;
                      border-radius: 2px;`,
                checkbox:  `background: #49A564;
                          border-radius: 2px;`
              }
            ],
            examples_2: [
              {
                type: 'Hover',
                classes: '',
                card: `border: 2px #49A564;`,
                checkbox: `background: #FFFFFF;
                          border: 2px #49A564;`
              },
              {
                type: 'Focus',
                classes: '',
                checked: true,
                card: `shadow: #1B69D3;`,
                checkbox: `background: #49A564;
                          checkmark: #FFFFFF;`
              },
              {
                type: 'Disabled',
                classes: '',
                card: `border: 2px #BBBBBB;`,
                checkbox: `background: #F7F7F7;
                          border: 2px #BBBBBB;`
              }
            ]
          }
        ]
      }
    },
    methods: {
      outputCardMarkup(options) {
        return `<div class="checkbox-card card" tabindex="0">` + this.outputCheckboxMarkup(options) + `</div>`
      },
      outputCheckboxMarkup(options) {
        let label = (!! options && options.label) ? options.label : 'Label'
        let labelClass = 'checkbox'
        let checked = ''

        if(!!options && options.showLabel === false) labelClass = labelClass + ' visually-hidden'
        if(!!options && options.checked) checked = ' checked'

        return `<input type="checkbox" name="example-1" value="Option 1" title="Option 1" tabindex="-1" ` + checked + `>
          <label for="example-1" tabindex="-1" class="` + labelClass + `">` + label + `</label>`
      }
    }
  }
</script>