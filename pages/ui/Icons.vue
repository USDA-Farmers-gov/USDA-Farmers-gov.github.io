<template>
  <div>
    <h2>Icons</h2>
    <p class="intro-text text-margin-bottom">
      Icons show a behavior, support an action, and illustrate content. 
    </p>

    <h3>Interactive Icons</h3>
    <p>
      Interactive icons are functional icons that convey element behavior. Most interactive icons are modeled after USWDS's icon styles. They should be exported as a .svg file for higher resolution with a smaller file size.
    </p>

    <table>
      <thead>
        <tr>
          <th>Icon</th>
          <th>Icon Name</th>
          <th>Icon Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="icon in interactive_icons">
          <td>{{ icon.image }}</td>
          <td>{{ icon.name }}</td>
          <td>{{ icon.usage }}</td>
        </tr>
      </tbody>
    </table>

    <h3>Click Target</h3>
    <p>
      Interactive icons should have a minimum click/touch target of 44x44px. When used with a label, the icon and label should be one target. 
    </p>

    [ 'X' WITH GRID OVERLAY ]

    <h3>Accessibility</h3>

    <p>
      Interactive icons need descriptive alternative text. They should meet 3:1 color contrast ratio requirements.
    </p>

    <h4>References</h4>
    <p class="text-margin-bottom">
      <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast">https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast</a>
    </p>

    <h3>Supporting Icons</h3>
    <p>
      Supporting icons are non-interactive icons that are used as a visual cue for an action or an important message. They are used in context with text. 
    </p>

    <h4>Specs</h4>
    <p>
      Supporting icons are solid filled icons. They are simple geometric shapes that are easily recognizable. They should be exported as a .svg file for higher resolution with a smaller file size.
    </p>

    <strong>Examples</strong>
    <br>
    <div class="row">
      <div v-for="icon in supporting_icons" class="medium-1">{{ icon }}</div>
    </div>

    <h3>Accessibility</h3>
    <p>
      Supporting icons are used as decorative elements that don’t provide additional information.  Therefore, their alternative text should be empty (alt=“”) so that they can be skipped over when users utilize assistive technology such as screen readers.
    </p>

    <h4>References</h4>
    <p>
      <a href="https://www.w3.org/WAI/tutorials/images/decorative/">https://www.w3.org/WAI/tutorials/images/decorative/</a>
    </p>

    <h3>Illustrative Icons</h3>
    <p>
      Illustrative icons are decorative icons that are used to visually represent the content. They add visual interest to the page and give a preview of the content when used on text heavy pages. Illustrative icons should not have any actions associated with them as they are used purely for decorative purposes.
    </p>

    <h3>Specs</h3>

    <p>
      Illustrative icons have an outlined icon style. Outlined icons have a lighter line weight compared to solid icons, so they don’t overwhelm the associating content. They should use a consistent stroke weight. They should be exported as a .svg file for higher resolution with a smaller file size.
    </p>

    <strong>Examples</strong>
    <br>
    <div class="row">
      <div v-for="icon in illustrative_icons" class="medium-1">{{ icon }}</div>
    </div>

    <h3>Accessibility</h3>
    <p>
      Illustrative icons are used as a decorative elements that don’t provide informative content.  Therefore, their alternative text should be empty (alt=“”) so that they can be skipped over when users utilize assistive technology such as screen readers.
    </p>

    <h4>References</h4>
    <a href="https://www.w3.org/WAI/tutorials/images/decorative/">https://www.w3.org/WAI/tutorials/images/decorative/</a>
  </div>
</template>

<script>
  import icons_data from '@/pages/_components-data/ui/icons.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Icons'
      }
    },
    data() {
      return {
        interactive_icons: icons_data.interactiveIcons(),
        supporting_icons: icons_data.supportingIcons(),
        illustrative_icons: icons_data.illustrativeIcons(),
      }
    }
  }
</script>
