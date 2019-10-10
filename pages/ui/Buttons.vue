<template>
  <div>
    <h2>Buttons</h2>
    <p class="intro-text text-margin-bottom">
      Buttons are used to communicate important actions the users can take, such as download, apply, or start. Depending on the context and desired outcome of the design, there are multiple styles and sizes of buttons available for use.
    </p>

    <h3>Primary Buttons</h3>
    <p>
      Primary buttons carry a strong visual prominence to signify that they are the expected action, versus possible secondary or tertiary actions.
    </p>
    <p>
      Our primary buttons are blue as the color allows for distinct contrast with the rest of the visuals on the site (mostly white and green), and thus support its purpose of highlighting an important action. We recommend using upper case for the labels with those buttons, as well as keeping the actions within the buttons discrete and simple. Avoid wrapping button labels in two rows of text.
    </p>
    <p class="text-margin-bottom">
      We utilize, and have provided, a variety of button sizes to accommodate different space constrictions and intended uses.
    </p>

    <button class="btn" tabindex="-1">button</button>

   <ExampleRow :data="data.primaryButton()" columns="3" />
   <ExampleRow :data="data.primaryButtonStates()" columns="4" />

    <Code :markup="'<button class=&quot;btn&quot;>button</button>'" />

    <h3>Secondary Buttons</h3>
    <p class="text-margin-bottom">
      Secondary buttons carry less visual weight than primary buttons, which helps ensure that when they are used together the primary action will be more noticeable. The difference between their “weight” is immediately noticeable, so that users can make the correct choice. These buttons utilize the same blue as primary buttons but only as an outline.
    </p>

    <button class="btn outline" tabindex="-1">button</button>

    <ExampleRow :data="data.secondaryButton()" columns="3" />
    <ExampleRow :data="data.secondaryButtonStates()" columns="4" />

    <Code :markup="'<button class=&quot;btn outline&quot;>button</button>'" />

    <h3>Tertiary Buttons</h3>
    <p class="text-margin-bottom">
      The tertiary button should be used for instances of user actions that are of less importance than those reserved for primary and secondary buttons. Those buttons should be used for card design. Tertiary buttons should not be used in place of ‘text links,’ as tertiary buttons are not used for user navigation.
    </p>

    <ExampleRow :data="data.tertiaryButtonDefault()" columns="1" />
    <ExampleRow :data="data.tertiaryButton()" columns="4" />

    <Code :markup="'<button class=&quot;btn tertiary&quot;>button</button>'" />

    <h3>Feedback Button</h3>
    <p class="text-margin-bottom">
      Feedback buttons provide users with a quick and simple way to indicate if the specific page or feature they visited was useful to them, by simple clicking Yes or No. Feedback buttons are blue and round so they may be easily distinguished from primary and secondary action buttons. They should be placed at the bottom of the page to minimize distraction.
    </p>

    <button class="btn feedback" tabindex="-1">Yes</button>
    <ExampleRow :data="data.feedbackButton()" rowClasses="feedback" columns="4"/>

    <Code :markup="'<button class=&quot;btn feedback&quot;>button</button>'" />

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
import data from '@/pages/_components-data/ui/buttons.js'

export default {
  layout: 'farmers',
  head() {
    return {
      title: 'Buttons'
    }
  },
  data() {
    return {
      data: data
    }
  }
}
</script>
