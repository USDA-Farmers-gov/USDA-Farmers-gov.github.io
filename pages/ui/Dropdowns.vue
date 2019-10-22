<template>
  <div>
    <h2>Dropdowns</h2>
    <p class="intro-text text-margin-bottom">
      Dropdowns allow users to make a single selection from a list of options. They are best used when a user needs to make a choice from a long list of items.
    </p>
    <p>
      If there are less than 7 options, consider using <nuxt-link to="/ui/RadioButtons">radio buttons</nuxt-link>. Each option should not go over one line of text. “Please select” should be used as the default placeholder text in dropdowns unless there is a recommended option a user should choose. If there is a recommended option, such as a selection that is most commonly used, make this the default selection.
    </p>

    <div class="row text-margin-bottom">
      <div class="medium-4" v-html="data.dropdownSingle()"/>
    </div>

    <h3>Specs</h3>
    <p>
      The width of the dropdown box can vary based on layout. However, it should follow the grid system and the specs outlined below. The height of the dropdown may be flexible depending on use cases.
    </p>
    <p>
      Dropdown menu list design should use the native style of the users’ system. Customization can be done depending on use cases.
    </p>

    <h3>Default</h3>
    <div class="row">
      <div class="medium-12" v-html="data.dropdownDimensions()"/>
    </div>

    <ExampleRow :data="data.dropdownSpecs()" columns="4" />
    <ExampleRow :data="data.dropDownStates()" columns="3" />
    <Code :markup="data.dropdownSingle()" />

    <h4>Click Target</h4>
    <p>
      The entire dropdown field box should be clickable.
    </p>

    <div class="row text-margin-bottom">
      <div class="medium-5" v-html="data.dropdownHighlight()"/>
    </div>

    <h4>Accessibility</h4>
    <p>
      A label should always be present with a dropdown. The label should not be replaced with the dropdown box text.
    </p>
    <p>
    User interface components should meet 3:1 color contrast ratio requirements. This includes the contrast of the border of the dropdown to the background.
    </p>
    <p>
      <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html</a>
      <br/>
      <a href="https://designsystem.digital.gov/components/form-controls/#dropdown">https://designsystem.digital.gov/components/form-controls/#dropdown</a>
    </p>
  </div>
</template>

<script>
  import data from '@/components/data/ui/dropdowns.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Dropdowns'
      }
    },
    data() {
      return {
        data: data
      }
    }
  }
</script>