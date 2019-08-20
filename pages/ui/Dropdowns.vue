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
      <div class="medium-4" v-html="getDropdownMarkup('Dropdown Label', dropdown_single)"/>
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
      <div class="medium-12" v-html="getDropdownMarkup('Dropdown Label', dropdown_single, true)"/>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'farmers',
  head() {
    return {
      title: 'Dropdowns'
    }
  },
  data() {
    return {
      dropdown_single: [
        { text: 'Option 1', value: '01' },
        { text: 'Option 2', value: '02' },
        { text: 'Option 3', value: '03' },
      ]
    }
  },
  methods: {
    getDropdownMarkup(label, options, showDimensions) {
      let dropdown = `
              <label for="scl-select-one">` + label + `</label>
              <select class="simpler-select scl-select" name="` + label + `" aria-label="Select a State">
                  <option>- Please select -</option>`
      options.forEach(function(element){
        dropdown = dropdown + `<option value="` + element.value + `">` + element.text + `</option>`
      })
      dropdown = dropdown + `</select>`

      return showDimensions ? `<div class="dropdown-grid">
                                <div class="dropdown-label-dashed"></div>
                                <div class="dropdown-label-dimension">4px</div>
                                <div class="dropdown-label-span"></div>

                                <div class="dropdown-select-left-span"></div>
                                <div class="dropdown-select-left-dimension">52px</div>
                                ` + dropdown + `
                                </div>` 
                            : dropdown
    }
  }
}
</script>