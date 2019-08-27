<template>
  <div>
    <h1>Typography</h1>

    <div class="intro-text">
      The Farmers.gov site uses Public Sans for all of its text except for the blog body copy and pullquotes, which uses Merriweather.
    </div>

    <h2>Public Sans</h2>

    <div class="container typography-container">
      <div class="row">
        <div class="medium-2 text-large typography-letters ps-padding">A a</div>
        <div class="medium-7 text-small typography-example">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          <br/>
          abcdefghijklmnopqrstuvwxyz
          <br/>
          1234567890
        </div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Hierarchy</th>
          <th>Font Family</th>
          <th>Weight</th>
          <th>Font Size</th>
          <th>Line Height</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="font in public_sans">
          <td v-html="font.name_and_markup"></td>
          <td>{{ font.font_family }}</td>
          <td>{{ font.weight }}</td>
          <td>{{ font.font_size }}</td>
          <td>{{ font.line_height }}</td>
        </tr>
        <tr>
          <td colspan="5" class="merriweather merriweather-container">
            <h2 class="merriweather">Merriweather</h2>
            <div class="container">
              <div class="row">
                <div class="medium-2 text-large typography-letters">A a</div>
                <div class="medium-7 text-small typography-example">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br/>
                  abcdefghijklmnopqrstuvwxyz
                  <br/>
                  1234567890
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr v-for="font in merriweather">
          <td v-html="font.name_and_markup"></td>
          <td>{{ font.font_family }}</td>
          <td>{{ font.weight }}</td>
          <td>{{ font.font_size }}</td>
          <td>{{ font.line_height }}</td>
        </tr>
      </tbody>
    </table>

    <h2>Lists</h2>
    <div>
      <p>
        There are two recommended ways of organizing bulleted information. The first is unorganized, where information can be shown in any order. The second list is organized based on priority.
      </p>
      <div class="container">
        <div class="row">
          <div class="medium-4">
            Unordered List
            <ul>
              <li>Unordered list item</li>
              <li>Unordered list item</li>
              <li>Unordered list item</li>
            </ul>
          </div>
          <div class="medium-4">
            Ordered list
            <ol>
              <li>Ordered list item</li>
              <li>Ordered list item</li>
              <li>Ordered list item</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <h2>Text Contrast</h2>
    <p>
      All Text must meet the minimum AA Web Content Accessibliity Guidelines to be 508 compliant. This is so that text is accessible for for all users. The text and background color combinations below are used throughout the farmers.gov site and are an integral part of our visual styles.
    </p>

    <div class="container">
      <div class="row">
        <div class="medium-5">
          <strong>Normal Text</strong>
          <div class="contrast-stats">
            <p>
              &lt;24px size at 400 weight
            </p>
            <p>
              <strong>AA</strong> 4.5:1 minimum contrast ratio
            </p>
            <p>
              <strong>AAA</strong> 7:1 minimum contrast ratio
            </p>
          </div>

          <div v-for="btn in contrast_buttons_normal" class="row contrast">
            <div :class="'mini-square ' + btn.classes">
              AAA
            </div>
            <div>
              {{ btn.description }}
            </div>
          </div>
        </div>

        <div class="medium-5">
          <strong>Large Text</strong>
          <div class="contrast-stats">
            <p>
              &#8805;19px size at 700 weight or &#8805;24px size
            </p>
            <p>
              <strong>AA</strong> 3:1 minimum contrast ratio
            </p>
            <p>
              <strong>AAA</strong> 4.5:1 minimum contrast ratio
            </p>
          </div>

          <div v-for="btn in contrast_buttons_large_text" class="row contrast">
            <div :class="'mini-square ' + btn.classes">
              AA
            </div>
            <div>
              {{ btn.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import typography_data from '../_components-data/elements/typography.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Typography'
      }
    },
    data() {
      return {
        public_sans: typography_data.publicSans(),
        merriweather: typography_data.merriweather(),
        contrast_buttons_normal: typography_data.contrastButtonsNormal(),
        contrast_buttons_large_text: typography_data.contrastButtonsLargeText()
      }
    }
  }
</script>
