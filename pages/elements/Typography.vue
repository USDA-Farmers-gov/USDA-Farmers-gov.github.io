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
export default {
  layout: 'farmers',
  head() {
    return {
      title: 'Typography'
    }
  },
  data() {
    return {
      public_sans: [
        { name_and_markup: '<h1>Headline 1</h1>', font_family: 'Public Sans', weight: '700', font_size: '38px', line_height: '48px' },
        { name_and_markup: '<h2>Headline 2</h2>', font_family: 'Public Sans', weight: '700', font_size: '28px', line_height: '38px' },
        { name_and_markup: '<h3>Headline 3</h3>', font_family: 'Public Sans', weight: '700', font_size: '23px', line_height: '30px' },
        { name_and_markup: '<h4>Headline 4</h4>', font_family: 'Public Sans', weight: '700', font_size: '20px', line_height: '26px' },
        { name_and_markup: '<h5>Headline 5</h5>', font_family: 'Public Sans', weight: '700', font_size: '16px', line_height: '20px' },
        { name_and_markup: '<h6>Headline 6</h6>', font_family: 'Public Sans', weight: '400', font_size: '12px', line_height: '18px' },
        { name_and_markup: '<div class="label">Label 1</div>', font_family: 'Public Sans', weight: '700', font_size: '22px', line_height: '34px' },
        { name_and_markup: '<div class="lead-p">Lead Paragraph</div>', font_family: 'Public Sans', weight: '300', font_size: '22px', line_height: '34px' },
        { name_and_markup: '<div class="body-p">Body Copy</div>', font_family: 'Public Sans', weight: '400', font_size: '18px', line_height: '28px' },
        { name_and_markup: '<div class="subheading">Subheading</div>', font_family: 'Public Sans', weight: '400', font_size: '16px', line_height: '24px' },
        { name_and_markup: '<div class="caption">Caption*</div>', font_family: 'Public Sans', weight: '400', font_size: '14px', line_height: '22px' },
      ],
      merriweather: [
        { name_and_markup: '<div class="blog-body-p">Blog Body Copy</div>', font_family: 'Merriweather', weight: '400', font_size: '18px', line_height: '30px' },
        { name_and_markup: '<div class="blog-block-quote">Blog Quote</div>', font_family: 'Merriweather', weight: '300', font_size: '28px', line_height: '34px' },
      ],
      contrast_buttons_normal: [
        { classes: 'heritage heritage-border white-txt', description: 'White on Heritage Green'},
        { classes: 'grey-3-border heritage-txt', description: 'Heritage Green on White'},
        { classes: 'soft-green soft-green-border asphalt-txt', description: 'Asphalt on Soft Green'},
        { classes: 'grey-3-border asphalt-txt', description: 'Asphalt on White'},
        { classes: 'soft-yellow soft-yellow-border asphalt-txt', description: 'Asphalt on Soft Yellow'},
        { classes: 'grey-1 grey-1-border asphalt-txt', description: 'Asphalt on Bone'},
        { classes: 'soft-red soft-red-border asphalt-txt', description: 'Asphalt on Soft Red'},
        { classes: 'grey-2 grey-2-border asphalt-txt', description: 'Asphalt on Light Gray'},
      ],
      contrast_buttons_large_text: [
        { classes: 'sweet-grass sweet-grass-border white-txt', description: 'White on Sweet Grass'},
        { classes: 'sweet-grass-txt grey-3-border', description: 'Sweet Grass on White'},
        { classes: 'big-sky big-sky-border white-txt', description: 'White on Big Sky'},
        { classes: 'big-sky-txt grey-3-border', description: 'Big Sky on White'},
      ]
    }
  }
}
</script>
