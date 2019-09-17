<template>
  <div>
    <h2>Dividers</h2>
    <p class="intro-text text-margin-bottom">
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
    <p class="text-margin-bottom">
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
            <div class="primary-line-height-dimension dimension dimension-red">1px</div>
            <div class="primary-line-height span-red span-red-horizontal"></div>
            <div class="divider-line"></div>
            <div class="primary-line-box-left dashed-blue dashed-blue-vertical"></div>
            <div class="primary-line-box-right dashed-blue dashed-blue-vertical"></div>
            <div class="primary-line-span right span-blue span-blue-vertical"></div>
            <div class="primary-line-span left span-blue span-blue-vertical"></div>
            <div class="primary-line-width right dimension-blue">12px</div>
            <div class="primary-line-width left dimension-blue">12px</div>
          </div>
        </div>
      </div>
    </p>
    <ExampleRow :data="primary_specs" rowClasses="text-margin-bottom" columns="3" />

    <h3>Secondary Dividers</h3>
    <p>
      Secondary dividers are used to separate related content. The dotted line creates a soft separation between content which allows users to easily scan related information. It is used within a page section.
    </p>
    <div class="divider-dot"></div>

    <h3>Specs</h3>
    <p>
      The width of the divider is flexible. However, it should not stretch across the edges of the page and/or card.
    </p>
    <div class="secondary-specs-grid text-margin-bottom">
      <div class="secondary-specs-height-dimension dimension-red">1px</div>
      <div class="secondary-specs-height span-red span-red-horizontal"></div>
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
  import dividers_data from '@/pages/_components-data/ui/dividers.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Dividers'
      }
    },
    data() {
      return {
        default_specs: dividers_data.defaultSpecs(),
        primary_specs: dividers_data.primarySpecs(),
        secondary_specs: dividers_data.secondarySpecs()
      }
    }
  }
</script>
