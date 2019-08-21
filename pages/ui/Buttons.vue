<template>
  <div>
    <h2>Buttons</h2>
    <p class="intro-text">Buttons are used to communicate important actions the users can take, such as download, apply, or start. Depending on the context and desired outcome of the design, there are multiple styles and sizes of buttons available for use.</p>

    <h3>Primary Buttons</h3>
    <p>Primary buttons carry a strong visual prominence to signify that they are the expected action, versus possible secondary or tertiary actions.</p>
    <p>Our primary buttons are blue as the color allows for distinct contrast with the rest of the visuals on the site (mostly white and green), and thus support its purpose of highlighting an important action. We recommend using upper case for the labels with those buttons, as well as keeping the actions within the buttons discrete and simple. Avoid wrapping button labels in two rows of text.</p>
    <p>We utilize, and have provided, a variety of button sizes to accommodate different space constrictions and intended uses.</p>

    <p>
      <button class="btn" tabindex="-1">button</button>
    </p>

   <ExampleRow v-if="primary_button" :data="primary_button" columns="3" />
   <ExampleRow v-if="primary_button_states" :data="primary_button_states" columns="4" />

    <h3>Secondary Buttons</h3>

    <p>Secondary buttons carry less visual weight than primary buttons, which helps ensure that when they are used together the primary action will be more noticeable. The difference between their “weight” is immediately noticeable, so that users can make the correct choice. These buttons utilize the same blue as primary buttons but only as an outline.</p>

    <p>
      <button class="btn outline" tabindex="-1">button</button>
    </p>

    <ExampleRow v-if="secondary_button" :data="secondary_button" columns="3" />
    <ExampleRow v-if="secondary_button_states" :data="secondary_button_states" columns="4" />

    <h3>Tertiary Buttons</h3>
    <p>The tertiary button should be used for instances of user actions that are of less importance than those reserved for primary and secondary buttons. Those buttons should be used for card design. Tertiary buttons should not be used in place of ‘text links,’ as tertiary buttons are not used for user navigation.</p>

    <ExampleRow v-if="tertiary_button_default" :data="tertiary_button_default" columns="1" />
    <ExampleRow v-if="tertiary_button" :data="tertiary_button" columns="4" />

    <h3>Feedback Button</h3>

    <p>Feedback buttons provide users with a quick and simple way to indicate if the specific page or feature they visited was useful to them, by simple clicking Yes or No. Feedback buttons are blue and round so they may be easily distinguished from primary and secondary action buttons. They should be placed at the bottom of the page to minimize distraction.</p>

    <p>
      <button class="btn feedback" tabindex="-1">Yes</button>
    </p>
    
    <ExampleRow :data="feedback_button" columns="4"/>

    <h3>Accessibility</h3>
    <p>Buttons should show a visible focus state when tabbed to by a user.</p>
    <p>Avoid using <strong>&lt;div&gt;</strong> or <strong>&lt;img&gt;</strong> tags for buttons as screen readers may not know that these are usable buttons.</p>
    <p>Inactive or disabled button states are not required to meet color contrast requirements.
    <br/>
    See <a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">https://www.w3.org/TR/WCAG21/#non-text-contrast</a></p>
    <p>When using multiple buttons on a page which have the same label, such as “Read More,” include more context for users of assistive technologies such as screen readers. The “aria-labelledby” attribute can be used to provide more details about the button’s action.</p>
  </div>
</template>

<script>
import utils from '~/assets/js/utils'

export default {
  layout: 'farmers',
  head() {
    return {
      title: 'Buttons'
    }
  },
  data() {
    return {
      primary_button: [
        { 
          header: 'Default', 
          classes: '', 
          markup: this.outputButtonMarkup('', true),
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
          markup: this.outputButtonMarkup('sm-btn', true),
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
          markup: this.outputButtonMarkup('lg-btn', true),
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
      ],
      primary_button_states: [
        { 
          header: 'Hover', 
          classes: 'hover-color', 
          markup: this.outputButtonMarkup('hover-color'), 
          code: { background: 'color: #004785;' } 
        },
        { 
          header: 'Active', 
          classes: 'active-color', 
          markup: this.outputButtonMarkup('active-color'), 
          code: { background: 'color: #122E51;' } 
        },
        { 
          header: 'Focus', 
          classes: 'focus-color', 
          markup: this.outputButtonMarkup('focus-color'), 
          code: { background: 'shadow: #1B69D3;' } 
        },
        { 
          header: 'Disabled', 
          classes: 'disabled', 
          markup: this.outputButtonMarkup('disabled'), 
          code: { background: 'color: #BBBBBB;' } 
        }
      ],
      secondary_button: [
        { 
          header: 'Default', 
          classes: 'outline', 
          markup: this.outputButtonMarkup('outline', true),
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
          markup: this.outputButtonMarkup('sm-btn outline', true),
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
          markup: this.outputButtonMarkup('lg-btn outline', true),
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
      ],
      secondary_button_states: [
        {  
          header: 'Hover', 
          classes: 'hover-color outline',
          markup: this.outputButtonMarkup('hover-color outline'), 
          code: {
            background: 'border: #004785;', 
            text: 'color: #004785;' 
          }
        },
        { 
          header: 'Active', 
          classes: 'active-color outline', 
          markup: this.outputButtonMarkup('active-color outline'), 
          code: {
            background: 'border: #122E51;', 
            text: 'color: #122E51;' 
          }
        },
        { 
          header: 'Focus', 
          classes: 'focus-color outline',
          markup: this.outputButtonMarkup('focus-color outline'), 
          code: {
            background: 'shadow: #1B69D3;', 
            text: 'color: #122E51;' 
          }
        },
        { 
          header: 'Disabled', 
          classes: 'disabled outline',
          markup: this.outputButtonMarkup('disabled outline'), 
          code: {
            background: 'border: #BBBBBB;', 
            text: 'color: #BBBBBB;' 
          }
        }
      ],
      tertiary_button_default: [
        {
          class: 'tertiary',
          markup: this.outputButtonMarkup('tertiary'), 
          code: { text: `color: #1A6AD3;
                  font-family: "Public Sans";
                  font-size: 16px;
                  font-weight: bold;
                  line-height: 20px;`
          }
        }
      ],
     tertiary_button: [
        { 
          header: 'Hover', 
          classes: 'hover-color tertiary', 
          markup: this.outputButtonMarkup('hover-color tertiary'),
          code: { text: 'color: #004785;' } 
        },
        { 
          header: 'Active', 
          classes: 'active-color tertiary',
          markup: this.outputButtonMarkup('active-color tertiary'),
          code: { text: 'color: #122E51;' } 
        },
        { 
          header: 'Focus', 
          classes: 'focus-color tertiary', 
          markup: this.outputButtonMarkup('focus-color tertiary'),
          code: { text: 'shadow: #1B69D3;' } 
        },
        { 
          header: 'Disabled', 
          classes: 'disabled tertiary', 
          markup: this.outputButtonMarkup('disabled tertiary'),
          code: { text: 'color: #BBBBBB;' } 
        }
      ],
      feedback_button: [
        { 
          header: 'Default', 
          classes: 'feedback', 
          markup: this.outputButtonMarkup('feedback', true),
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
          markup: this.outputButtonMarkup('hover-color feedback'),
          code: {
            background: 'border: 2px #004785;', 
            text: 'color: #004785;'
          }
        },
        { 
          header: 'Active', 
          classes: 'active-color feedback', 
          markup: this.outputButtonMarkup('active-color feedback'),
          code: {
            background: 'border: 2px #122E51;', 
            text: 'color: #122E51;' 
          }
        },
        { 
          header: 'Focus', 
          classes: 'focus-color feedback', 
          markup: this.outputButtonMarkup('focus-color feedback'),
          code: {
            background: `border: 2px #122E51;
                           shadow: #1B69D3;`, 
            text: 'color: #122E51;' 
          }
        }
      ]
    }
  },
  methods: {
    outputButtonMarkup(classes, showDimensions, index) {
      let btnClasses = this.setButtonClasses(classes)
      let dimensions = this.getButtonDimensions(btnClasses)
      let buttonText = (classes.indexOf('feedback') >= 0) ? 'Yes' : 'Button'
      let gridClasses = classes ? 'button-grid ' + classes : 'button-grid' 
      if(classes.indexOf('feedback') >= 0 && index === 0) showDimensions = true

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

      if(btnClasses.indexOf('sm-btn') >= 0) dimensions = { width: 96, height: 32 }
      if(btnClasses.indexOf('lg-btn') >= 0) dimensions = { width: 216, height: 52 }
      if(btnClasses.indexOf('feedback') >= 0) dimensions = { width: 64, height: 64 }

      return dimensions
    },
    addLineBreaks(text) {
      return utils.addLineBreaks(text)
    }
  }
}
</script>
