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

    <p>
      <input type="checkbox" name="example-1" value="Option 1" title="Option 1" tabindex="-1">
      <label for="example-1" tabindex="-1" class="checkbox">Checkbox Label</label>
    </p>  
    <p>
      <input type="checkbox" checked="" name="option-2" value="Option 2" title="Option 2" tabindex="-1">
      <label for="option-2" tabindex="-1" class="checkbox" checked="">Checkbox Label</label>
    </p>

    <div class="container">
      <div class="row">
        <div class="medium-3">
          <strong>Unselected</strong>
          <br/>
          <input type="checkbox" name="example-1" value="Option 1" title="Option 1" tabindex="-1">
          <label for="example-1" tabindex="-1" class="checkbox"></label>
          <div class="text-medium">
            <div class="label">BACKGROUND</div>
            color: #FFFFFF;
            <br/>
            border: 2px #707070;
            <br/>
            border-radius: 2px;
          </div>
        </div>
        <div class="medium-3">
          <strong>Selected</strong>
          <br/>
          <input type="checkbox" checked="" name="option-2" value="Option 2" title="Option 2" tabindex="-1">
          <label for="option-2" tabindex="-1" class="checkbox" checked=""></label>
          <div class="text-medium">
            <div class="label">BACKGROUND</div>
            <div>color: #006546;</div>
            <div class="label">CHECKMARK</div>
            <div>color: #FFFFFF;</div>
          </div>
        </div>
        <div class="medium-3">
          <strong>Focused</strong>
          <br/>
          <input type="checkbox" checked="" name="option-2" value="Option 2" title="Option 2" tabindex="-1">
          <label for="option-2" tabindex="-1" class="checkbox" checked=""></label>
          <div class="text-medium">
            <div class="label">BACKGROUND</div>
            <div>shadow: #1B69D3;</div>
          </div>
        </div>
        <div class="medium-3">
          <strong>Disabled</strong>
          <br/>
          <input type="checkbox" disabled="" name="option-4" value="Option 4" title="Option 4" tabindex="-1">
          <label for="option-4" tabindex="-1" class="checkbox"></label>
          <div class="text-medium">
            <div class="label">BACKGROUND</div>
            <div>
              color: #F7F7F7;
              <br/>
              border: 2px #BBBBBB;
            </div>
          </div>
        </div>
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
        <div class="medium-4">
          <div class="checkbox-card card" tabindex="0">
            <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
            <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
          </div>
        </div>
        <div class="medium-4">
          <div class="checkbox-card card" tabindex="0">
            <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
            <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
          </div>
        </div>
      </div>
    </div>

    <div v-for="checkbox in specs">
      <h3 v-if="checkbox.header">{{ checkbox.header }}</h3>
      <p v-if="checkbox.description" v-html="checkbox.description"/>
      <div v-if="checkbox.examples_1.length" class="container">
        <div class="row">
          <div v-for="item in checkbox.examples_1" class="medium-4">
            <strong>{{ item.type }}</strong>
            <br/>
            <div class="checkbox-card card" tabindex="0">
              <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
              <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
            </div>

            <p v-if="item.card" class="text-medium">
              <span class="label">CARD</span>
              <br/>
              <span class="text-medium" v-html="addLineBreaks(item.card)"></span>
            </p>
            <p v-if="item.checkbox.length" class="text-medium">
              <span class="label">CHECKBOX</span>
              <br/>
              <span class="text-medium" v-html="addLineBreaks(item.checkbox)"></span>
            </p>
          </div>
        </div>
        <div class="row">
          <div v-for="item in checkbox.examples_2" class="medium-4">
            <strong>{{ item.type }}</strong>
            <br/>
            <div class="checkbox-card card" tabindex="0">
              <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
              <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
            </div>

            <p v-if="item.card" class="text-medium">
              <span class="label">CARD</span>
              <br/>
              <span class="text-medium" v-html="addLineBreaks(item.card)"></span>
            </p>
            <p v-if="item.checkbox.length" class="text-medium">
              <span class="label">CHECKBOX</span>
              <br/>
              <span class="text-medium" v-html="addLineBreaks(item.checkbox)"></span>
            </p>
          </div>
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
  import utils from '~/assets/js/utils'

  export default {
    layout: 'farmers',
    data() {
      return {
        specs: [
          { 
            header: 'Specs',
            description: `Card height and width are flexible based on specific use cases. The cards are most commonly used in a &frac13; or &frac14; grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below.`,
            examples_1: [
              {
                type: 'Unselected',
                classes: '',
                selected: false,
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
                selected: true,
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
                selected: false,
                card: `border: 2px #49A564;`,
                checkbox: `background: #FFFFFF;
                          border: 2px #49A564;`
              },
              {
                type: 'Focus',
                classes: '',
                selected: true,
                card: `shadow: #1B69D3;`,
                checkbox: `background: #49A564;
                          checkmark: #FFFFFF;`
              },
              {
                type: 'Disabled',
                classes: '',
                selected: true,
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
      addLineBreaks(text) {
        return utils.addLineBreaks(text)
      },
    }
  }
</script>