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
    <p>
        [ PRIMARY SPECS IMAGE]
    </p>
    <div class="row">
      <Example v-for="(item, index) in primary_specs" 
        columns="3" 
        :header="item.header"
        :code="item.code" 
        :key="index" />
    </div>

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
    <div class="row">
      <Example v-for="(item, index) in secondary_specs" 
        columns="3" 
        :code="item.code" 
        :key="index" />
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

<style lang="scss" scoped>
  // .primary-specs-grid {
  //   position:relative;
  //   display: grid;
  //   grid-template-columns: 20px 11px auto 2.8rem auto;
  //   grid-template-rows: repeat(4, 0.75rem);
    
  //   .pixel-height {
  //     grid-column: 2;
  //     grid-row: 2;
  //   }

  //   .pixel-height-specs {
  //     grid-column: 1;
  //     grid-row: 1;
  //     font-size: 1rem;
  //     color: #E52207;
  //   }
  //   .divider-line {
  //     margin: 1rem 0 0 0;
  //     grid-column: 3 / span 3;
  //     grid-row: 1 / 4;
  //   }

  //   .pixel-12 {
  //     width: 1.2rem;

  //     &.left {   
  //       border-left: 1px #0D7CD7 dashed;
  //       border-right: 1px #0D7CD7 dashed;
  //       background: #E5F1FA;  
  //       z-index: 100; 
  //       grid-column: 3;
  //       grid-row: 1 / 4;
  //       justify-self: end;
  //       // &:after {
  //       //   top: 2rem;
  //       //   content: "";
  //       //   border-left: #000;
  //       // }
  //     }

  //     &.right {
  //       border-left: 1px #0D7CD7 dashed;
  //       border-right: 1px #0D7CD7 dashed;
  //       background: #E5F1FA;
  //       z-index: 100; 
  //       grid-column: 5;
  //       grid-row: 1 / 4;
  //       justify-self: start;
  //       // left: 22.8rem;
  //     }

  //     &.indicator-left {
  //       position: relative;
  //       margin-top: 0.25rem;
  //       border-left: 1px #0D7CD7 solid;
  //       border-right: 1px #0D7CD7 solid;
  //       grid-column: 3;
  //       grid-row: 4;
  //       justify-self: end;

  //       &:after {
  //         content: "";
  //         position: absolute;
  //         top: 0.25rem;
  //         width: 11px;
  //         border-bottom: 1px #0D7CD7 solid;
  //       }
  //     }

  //     &.indicator-right {
  //       position: relative;
  //       border-left: 1px #0D7CD7 solid;
  //       border-right: 1px #0D7CD7 solid;
  //       grid-column: 5;
  //       grid-row: 4;
  //       justify-self: start;

  //       &:after {
  //         content: "";
  //         position: absolute;
  //         top: 0.25rem;
  //         width: 11px;
  //         border-bottom: 1px #0D7CD7 solid;
  //       }
  //     }
  //   }
  // }

  .secondary-specs-grid {
    position:relative;
    display: grid;
    grid-template-columns: 20px 11px auto;
    grid-template-rows: repeat(3, 0.25rem);
  }

  .pixel-height {
      position: relative;
      grid-column: 2;
      grid-row: 1 / 3;
      border-top: 1px #E52207 solid;
      border-bottom: 1px #E52207 solid;

      &:after {
        content: "";
        border-right: 1px solid #E52207;
        position: absolute;
        height: 100%;
        left: 5px;
      }
    }
    .pixel-height-specs {
      position: relative;
      top: -0.6rem;
      grid-column: 1;
      grid-row: 1;
      font-size: 1rem;
      color: #E52207;
    }
    .divider-dot.example {
      grid-column: 3;
      margin: 0.25rem 0 0 0.5rem;
    }

    // .divider-line.example {
    //   grid-column: 3;
    //   margin: 0.15rem 0 0 0.5rem;
    // }
</style>
