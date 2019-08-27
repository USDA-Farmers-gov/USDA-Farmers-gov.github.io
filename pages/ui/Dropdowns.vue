<template>
  <div>
    <h2>Dropdowns</h2>

    <p class="intro-text">
      Dropdowns allow users to make a single selection from a list of options. They are best used when a user needs to make a choice from a long list of items.
    </p>
    <p>
      If there are less than 7 options, consider using <nuxt-link to="/ui/RadioButtons">radio buttons</nuxt-link>. Each option should not go over one line of text. “Please select” should be used as the default placeholder text in dropdowns unless there is a recommended option a user should choose. If there is a recommended option, such as a selection that is most commonly used, make this the default selection.
    </p>

    <div class="row">
      <div class="medium-4" v-html="dropdown_single"/>
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
      <div class="medium-12" v-html="dropdown_dimensions"/>
    </div>

    <ExampleRow :data="dropdown_specs" columns="4" />
    <ExampleRow :data="dropdown_states" columns="3" />

    <h3>Click Target</h3>
    <p>
      The entire dropdown field box should be clickable.
    </p>

    <div class="row">
      <div class="medium-5" v-html="dropdown_highlight"/>
    </div>

    <h4>Accessibility</h4>
    <p>
      A label should always be present with a dropdown. The label should not be replaced with the dropdown box text.
    </p>
    <p>
    User interface components should meet 3:1 color contrast ratio requirements. This includes the contrast of the border of the dropdown to the background.
    </p>
  </div>
</template>

<script>
  import dropdowns_data from '@/pages/_components-data/ui/dropdowns.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Dropdowns'
      }
    },
    data() {
      return {
        dropdown_single: dropdowns_data.dropdownSingle(),
        dropdown_dimensions: dropdowns_data.dropdownDimensions(),
        dropdown_highlight: dropdowns_data.dropdownHighlight(),
        dropdown_specs: dropdowns_data.dropdownSpecs(),
        dropdown_states: dropdowns_data.dropDownStates()
      }
    }
  }
</script>