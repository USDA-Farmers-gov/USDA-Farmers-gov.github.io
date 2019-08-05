<template>
  <div>
    <h1>Typography</h1>

    <p>
      The Farmers.gov site uses Public Sans for all of its text except for the blog body copy and pullquotes, which uses Merriweather.
    </p>

    <h2>Public Sans</h2>
    <hr>
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
          <td>
            <div v-html="font.name"></div>
          </td>
          <td>{{ font.font_family }}</td>
          <td>{{ font.weight }}</td>
          <td>{{ font.font_size }}</td>
          <td>{{ font.line_height }}</td>
        </tr>
        <tr>
          <td colspan="5">
            <h2>Merriweather*</h2>
            <hr>
            <div class="container">
              <div class="row">A a</div>
            </div>
          </td>
        </tr>
        <tr v-for="font in merriweather">
          <td>
            <div v-html="font.name"></div>
          </td>
          <td>{{ font.font_family }}</td>
          <td>{{ font.weight }}</td>
          <td>{{ font.font_size }}</td>
          <td>{{ font.line_height }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'farmers',
  data() {
    return {
      public_sans: [
        { name: '<h1>Header 1</h1>', font_family: 'Public Sans', weight: '700', font_size: '38px', line_height: '48px' },
        { name: '<h2>Header 2</h2>', font_family: 'Public Sans', weight: '700', font_size: '28px', line_height: '38px' },
        { name: '<h3>Header 3</h3>', font_family: 'Public Sans', weight: '700', font_size: '23px', line_height: '30px' },
        { name: '<h4>Header 4</h4>', font_family: 'Public Sans', weight: '700', font_size: '20px', line_height: '26px' },
        { name: '<h5>Header 5</h5>', font_family: 'Public Sans', weight: '700', font_size: '16px', line_height: '20px' },
        { name: '<h6>Header 6</h6>', font_family: 'Public Sans', weight: '400', font_size: '12px', line_height: '18px' },
        { name: 'Label 1', font_family: 'Public Sans', weight: '700', font_size: '22px', line_height: '34px' },
        { name: 'Lead Paragraph', font_family: 'Public Sans', weight: '300', font_size: '22px', line_height: '34px' },
        { name: 'Body Copy', font_family: 'Public Sans', weight: '400', font_size: '18px', line_height: '28px' },
        { name: 'Subheading', font_family: 'Public Sans', weight: '400', font_size: '16px', line_height: '24px' },
        { name: 'Caption*', font_family: 'Public Sans', weight: '400', font_size: '14px', line_height: '22px' },
      ],
      merriweather: [
        { name: 'Blog Body Copy*', font_family: 'Merriweather', weight: '400', font_size: '18px', line_height: '30px' },
        { name: 'Blog Quote*', font_family: 'Merriweather', weight: '300', font_size: '28px', line_height: '34px' },
      ]
    }
  }
}
</script>
