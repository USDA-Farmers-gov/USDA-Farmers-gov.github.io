<template>
  <div>
    <h2>Dividers</h2>
    <p>
      Dividers separate content and different sections of the page. 
    </p>
    <h3>Tool Dividers</h3>
    <p>
      Tool dividers are used to callout interactive tool pages. Double solid lines are used to create a hard separation between sections to allow the content inside to stand out.
    </p>
    <div class="double-line"></div>
    <h3>Specs</h3>
    <p>
      The divider should be full-width. It should stay within the max width of the page. Tool dividers should not be used by themselves; they must be used above and below the tool callout content.
    </p>
    <div class="row">
      <Example columns="1" :markup="default_specs.markup" :code="default_specs.code" />
    </div>

    <h3>Primary Divider</h3>
    <p>
      Primary dividers are used to create a visual separation between different content blocks in a page. A leaf icon can be used as a decorative element to help strategically represent the farmers.gov brand across the site.

      <div class="divider-line"></div>
      <div class="divider-line no-leaves"></div>
    </p>

    <h3>Specs</h3>
    <p>
      Primary dividers can be used with or without a leaf icon. Leaf dividers are mostly used on landing pages to correspond to the anchor links.

      The width of the divider is flexible. However, the leaf icon should be center-aligned and the dividers on the left and right should be equal in width. 
    </p>

    <div class="row">
      <Example v-for="(item, index) in primary_specs" 
        columns="3" 
        :header="item.header" 
        :code="item.code" 
        :key="index" />
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'farmers',
    data() {
      return {
        default_specs: {
          markup: `<p>[ DIVIDER PICTURE ] </p>`,
          code: { line: `border: 2px solid #BBBBBB;` }
        },
        primary_specs: [
          {
            header: 'Used with Icon',
            code: 
              {
                line: `border: 1px solid #DBEDE0;`,
                icon: `color: #49A564;
                  size: 25x20`
              }
          },
          {
            header: 'Used without Icon',
            code: { line: `border: 1px solid #BBBBBB;` }
          },
        ]
      }
    }
  }
</script>