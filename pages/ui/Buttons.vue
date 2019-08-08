<template>
  <div>
    <h2>Buttons</h2>
    <p>
      Buttons are used to communicate important actions the users can take, such as download, apply, or start. Depending on the context and desired outcome of the design, there are multiple styles and sizes of buttons available for use.
    </p>
    <div v-for="button in data">
      <h3>{{ button.header }}</h3>
      <div v-html="button.description"></div>
      
      <p v-html="outputButtonMarkup(button.classes)"/>
      
      <div v-if="button.buttons_3" class="container">
        <div class="row">
          <div v-for="btn in button.buttons_3" class="medium-4">
            <p>
              <strong>{{ btn.header }}</strong>
            </p>
            <div class="button-container">
              <span v-html="outputButtonMarkup(button.classes)"/>
            </div>
            <p class="text-medium">
              <span v-if="btn.background" class="label">BACKGROUND</span>
              <br/>
              <span class="text-medium" v-html="addLineBreaks(btn.background)"></span>
            </p>
            <p v-if="btn.text" class="text-medium">
              <span class="label">TEXT</span>
              <br/>
              <span class="text-medium" v-html="addLineBreaks(btn.text)"></span>
            </p>
          </div>
        </div>
      </div>

      <div v-if="button.buttons_4" class="container">
        <div class="row">
          <div v-for="btn in button.buttons_4" class="medium-3">
            <p>
              <strong>{{ btn.header }}</strong>
            </p>
            <div class="button-container">
              <span v-html="outputButtonMarkup(button.classes)"/>
            </div>
            <p class="text-medium">
              <span v-if="btn.background" class="label">BACKGROUND</span>
              <br/>
              <span class="text-medium" v-html="btn.background"></span>
            </p>
            <p v-if="btn.text" class="text-medium">
              <span class="label">TEXT</span>
              <br/>
              <span class="text-medium" v-html="btn.text"></span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <h3>Accessibility</h3>
    <p>
      Buttons should show a visible focus state when tabbed to by a user.
    </p>
    <p>
      Avoid using <strong>&lt;div&gt;</strong> or <strong>&lt;img&gt;</strong> tags for buttons as screen readers may not know that these are usable buttons.
    </p>
    <p>
      Inactive or disabled button states are not required to meet color contrast requirements.
      <br/>
      See <a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">https://www.w3.org/TR/WCAG21/#non-text-contrast</a>
    </p>
    <p>
      When using multiple buttons on a page which have the same label, such as “Read More,” include more context for users of assistive technologies such as screen readers. The “aria-labelledby” attribute can be used to provide more details about the button’s action.
    </p>
  </div>
</template>

<script>
export default {
  layout: 'farmers',
  data() {
    return {
      data: [
        {
          header: 'Primary Buttons',
          classes: '',
          description: `<p>
              Primary buttons carry a strong visual prominence to signify that they are the expected action, versus possible secondary or tertiary actions.
            </p>
            <p>
              Our primary buttons are blue as the color allows for distinct contrast with the rest of the
              visuals on the site (mostly white and green), and thus support its purpose of highlighting an important action. We recommend using upper case for the labels with those buttons, as
              well as keeping the actions within the buttons discrete and simple. Avoid wrapping button
              labels in two rows of text.
            </p>
            <p>
              We utilize, and have provided, a variety of button sizes to accommodate different space constrictions and intended uses.
            </p>`,
          buttons_3: [
            { 
              header: 'Default', 
              classes: '', 
              background: `border-radius: 4px;
                            color: #1A6AD3;
                            shadow: 0;1;4;0  #BBBBBB;`, 
              text: `color: #FFFFFF;
                      font-family: "Public Sans";
                      font-size: 16px;
                      font-weight: bold;
                      line-height: 20px;` 
            },
            { 
              header: 'Small', 
              classes: 'sm-btn', 
              background: `border-radius: 4px;
                            color: #1A6AD3;
                            shadow: 0;1;4;0  #BBBBBB;`, 
              text: `color: #FFFFFF;
                      font-family: "Public Sans";
                      font-size: 16px;
                      font-weight: bold;
                      line-height: 20px;`
            },
            { 
              header: 'Large', 
              classes: 'lg-btn', 
              background: `border-radius: 4px;
                            color: #1A6AD3;
                            shadow: 0;1;4;0  #BBBBBB;`, 
              text: `color: #FFFFFF;
                      font-family: "Public Sans";
                      font-size: 20px;
                      font-weight: bold;
                      line-height: 26px;` 
              }
          ],

          buttons_4: [
            { header: 'Hover', classes: 'hover-color', background: 'color: #004785;', text: '' },
            { header: 'Active', classes: 'active-color', background: 'color: #122E51;', text: '' },
            { header: 'Focus', classes: 'focus-color', background: 'shadow: #1B69D3;', text: '' },
            { header: 'Disabled', classes: 'disabled', background: 'color: #BBBBBB;', text: '' }
          ],
        },
        {
          header: 'Secondary Buttons',
          classes: 'outline',
          description: `<p>
              Secondary buttons carry less visual weight than primary buttons, which helps ensure that when they are used together the primary action will be more noticeable. The difference between their “weight” is immediately noticeable, so that users can make the correct choice. These buttons utilize the same blue as primary buttons but only as an outline.
            </p>`,
          buttons_3: [
            { 
              header: 'Default', 
              classes: 'outline', 
              background: `border: 1px #1A6AD3;
                            border-radius: 4px;
                            color: #FFFFFF;
                            shadow: 0;1;4;0  #BBBBBB;`, 
              text: `color: #1A6AD3;
                      font-family: "Public Sans";
                      font-size: 16px;
                      font-weight: bold;
                      line-height: 20px;` 
            },
            { 
              header: 'Small', 
              classes: 'sm-btn outline', 
              background: `border: 1px #1A6AD3;
                            border-radius: 4px;
                            color: #FFFFFF;
                            shadow: 0;1;4;0  #BBBBBB;`, 
              text: `color: #1A6AD3;
                      font-family: "Public Sans";
                      font-size: 16px;
                      font-weight: bold;
                      line-height: 20px;`
            },
            { 
              header: 'Large', 
              classes: 'lg-btn outline', 
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
          ],

          buttons_4: [
            { header: 'Hover', classes: 'hover-color outline', background: 'border: #004785;', text: 'color: #004785;' },
            { header: 'Active', classes: 'active-color outline', background: 'border: #122E51;', text: 'color: #122E51;' },
            { header: 'Focus', classes: 'focus-color outline', background: 'shadow: #1B69D3;', text: 'color: #122E51;' },
            { header: 'Disabled', classes: 'disabled outline', background: 'border: #BBBBBB;', text: 'color: #BBBBBB;' }
          ],
        },
        {
          header: 'Tertiary Buttons',
          classes: 'tertiary',
          description: `<p>
              The tertiary button should be used for instances of user actions that are of less importance than those reserved for primary and secondary buttons. Those buttons should be used for card design. Tertiary buttons should not be used in place of ‘text links,’ as tertiary buttons are not used for user navigation.
            </p>`,

          buttons_4: [
            { header: 'Hover', classes: 'hover-color tertiary', background: '', text: 'color: #004785;' },
            { header: 'Active', classes: 'active-color tertiary', background: '', text: 'color: #122E51;' },
            { header: 'Focus', classes: 'focus-color tertiary', background: '', text: 'shadow: #1B69D3;' },
            { header: 'Disabled', classes: 'disabled tertiary', background: '', text: 'color: #BBBBBB;' }
          ],
        },
        {
          header: 'Feedback Buttons',
          classes: 'feedback',
          description: `<p>
              The tertiary button should be used for instances of user actions that are of less importance than those reserved for primary and secondary buttons. Those buttons should be used for card design. Tertiary buttons should not be used in place of ‘text links,’ as tertiary buttons are not used for user navigation.
            </p>`,

          buttons_4: [
            { 
              header: 'Hover', 
              classes: 'hover-color feedback', 
              background: `border: 2px #1A6AD3;
                            color: #FFFFFF;
                            shadow: 0;1;4;0
                            #BBBBBB;`, 
              text: `color: #1A6AD3;
                      font-family: "Public Sans";
                      font-size: 16px;
                      font-weight: bold;
                      line-height: 20px;` 
            },
            { header: 'Active', classes: 'active-color feedback', background: 'border: 2px #004785;', text: 'color: #004785;' },
            { header: 'Focus', classes: 'focus-color feedback', background: 'border: 2px #122E51;', text: 'color: #122E51;' },
            { header: 'Disabled', classes: 'disabled feedback', background: 'border: 2px #122E51; <br> shadow: #1B69D3;', text: 'color: #122E51;' }
          ],
        },
      ]
    }
  },
  methods: {
    setButtonClasses(classes) {
      let baseClasses = 'btn'
      return classes ? baseClasses + ' ' + classes : baseClasses 
    },
    addLineBreaks(text) {
      return text.trim().replace(/(?:\r\n|\r|\n)/g, '<br>');
    },
    outputButtonMarkup(classes) {
      let btnClasses = this.setButtonClasses(classes)
      let buttonText = (classes === 'feedback') ? 'Yes' : 'Button'
      return '<button class="' + btnClasses + '">' + buttonText + '</button>'
    }
  }
}
</script>

<style>
  .button-container {
    display:flex;
     align-items: flex-start;
     height: 70px;
  }
</style>
