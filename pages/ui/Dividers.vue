<template>
  <div>
    <h2>Dividers</h2>
    <p class="intro-text">
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
    
    <ExampleRow :data="default_specs" columns="1" />

    <h3>Primary Divider</h3>
    <p>
      Primary dividers are used to create a visual separation between different content blocks in a page. A leaf icon can be used as a decorative element to help strategically represent the farmers.gov brand across the site.

      <div class="divider-line"></div>
    </p>

    <h3>Specs</h3>
    <p>
      Primary dividers can be used with or without a leaf icon. Leaf dividers are mostly used on landing pages to correspond to the anchor links.

      The width of the divider is flexible. However, the leaf icon should be center-aligned and the dividers on the left and right should be equal in width. 
    </p>
    <p>
      <div class="row">
        <div class="medium-7">
          <div class="primary-line-grid">
            <div class="pixel-height-specs">1px</div>
            <div class="pixel-height"></div>
            <div class="divider-line"></div>
            <div class="pixel-box pixel-box-left"></div>
            <div class="pixel-box pixel-box-right"></div>
            <div class="pixel-span pixel-span-right">&nbsp;</div>
            <div class="pixel-span pixel-span-left">&nbsp;</div>
            <div class="pixel-width pixel-width-right">12px</div>
            <div class="pixel-width pixel-width-left">12px</div>
          </div>
        </div>
      </div>
    </p>
    <ExampleRow :data="primary_specs" columns="3" />

    <h3>Secondary Dividers</h3>
    <p>
      Secondary dividers are used to separate related content. The dotted line creates a soft separation between content which allows users to easily scan related information. It is used within a page section.
    </p>
    <div class="divider-dot"></div>

    <h3>Specs</h3>
    <p>
      The width of the divider is flexible. However, it should not stretch across the edges of the page and/or card.
    </p>
    <div class="secondary-specs-grid">
      <div class="pixel-height-specs">1px</div>
      <div class="pixel-height"></div>
      <div class="divider-dot example"></div>
    </div>


    <h3>Accessibility</h3>
    <p>
      Dividers should be marked as decorative elements and should be skipped over when using assistive technology.
    </p>

    <h4>References</h4>
    <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html#non-text-contentdef">https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html#non-text-contentdef</a>
  </div>
</template>

<script>
  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Dividers'
      }
    },
    data() {
      return {
        default_specs: [
          {
            markup: `<div class="double-line-grid">
                    <div class="pixel-height-specs">6px</div>
                    <div class="pixel-height"></div>
                    <div class="highlight"></div>
                    <div class="double-line"></div>
                  </div>`,
            code: { line: `border: 2px solid #BBBBBB;` }
          }
        ],
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
        ],
        secondary_specs: [
          {
            code: 
              {
                line: `border: 1px dotted #BBBBBB;`,
              }
          }
        ]
      }
    }
  }
</script>
