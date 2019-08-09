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

    <h3>Specs</h3>
    <p>
      Card height and width are flexible based on specific use cases. The cards are most commonly used in a &frac13; or &frac14; grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below. 
    </p>

    <div class="container">
      <div class="row">
        <div class="medium-4">
          <strong>Unselected</strong>
          <br/>
          <div class="checkbox-card card" tabindex="0">
            <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
            <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
          </div>
        </div>
        <div class="medium-4">
          <strong>Selected</strong>
          <br/>
          <div class="checkbox-card card" tabindex="0">
            <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
            <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="row">
        <div class="medium-4">
          <strong>Hover</strong>
          <br/>
          <div class="checkbox-card card" tabindex="0">
            <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
            <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
          </div>
        </div>
        <div class="medium-4">
          <strong>Focus</strong>
          <br/>
          <div class="checkbox-card card" tabindex="0">
            <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
            <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
          </div>
        </div>
        <div class="medium-4">
          <strong>Disabled</strong>
          <br/>
          <div class="checkbox-card card" tabindex="0">
            <input type="checkbox" name="checkbox-card" value="Card Checkbox" title="Card Checkbox" tabindex="-1">
            <label for="checkbox-card" tabindex="-1">Card Checkbox</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'farmers',
    data() {
      return {
        
      }
    }
  }
</script>