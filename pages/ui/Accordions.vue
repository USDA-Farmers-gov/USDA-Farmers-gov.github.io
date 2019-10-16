<template>
  <div>
    <h2>Accordions</h2>
    <p class="intro-text text-margin-bottom">
      An accordion hides or reveals additional information. Accordions are used when large amounts of information need to be organized within a small space.
    </p>

    <h3>Card Accordions</h3>
    <p>
      Card accordions display part of the content to provide context about the information before users expand the accordion to view the full content.  Users are able to see what information is included before making a decision to continue reading. A transparent gradient overlay is used as a visual indicator to show that there is underlying additional content.
    </p>

    <div v-html="data.defaultAccordionMarkup()" class="text-margin-bottom" />

    <h3>Specs</h3>
    <p>
      The height and width of the accordion is flexible but it should follow the grid system and the specs outlined below. 
    </p>

    <ExampleRow :data="data.defaultAccordionSpecs()" columns="1" />
  
    <Code :markup="data.defaultAccordionMarkup({ tabindex: true })" />

    <h4>Click Target</h4>
    <p>
      Larger targets are easier for users to manipulate. Allow users to expand or collapse content by clicking on large areas of the accordion; for example, the entire bottom portion of card accordions should be clickable and not just the “Show More” button.
    </p>

    <div v-html="data.clickTargetAccordionDimensions()" />
    <div class="click-target mouse-pointer text-margin-bottom"></div>

    <h3>Box Accordions</h3>
    <p>
      Box accordions are sets of headers displayed in a &frac13; grid layout. They are used when groups of information can be categorized into related sections and help conserve space on content-heavy pages. Only one accordion should open at a time.
    </p>

    <div v-html="data.defaultBoxAccordionMarkup()" class="text-margin-bottom" />
    <h3>Specs</h3>
    <p>
      The width of the accordion should follow the &frac13; grid layout and the specs outlined below. 
    </p>
    
    <div v-html="data.boxAccordionDimensions()" />
    <ExampleRow :data="data.defaultBoxAccordionSpecs()" columns="4" />

    <div id="accordionGroup" ref="accordionGroup" class="Accordion row">
      <div v-html="data.defaultBoxAccordionMarkup({ expanded: true })" />
    </div>
    <ExampleRow :data="data.expandedBoxAccordionSpecs()" columns="4" />

    <Code :markup="data.boxAccordionCode({ tabindex: true })" />

    <h3>Click Target</h3>
    <p>
      Larger targets are easier for users to manipulate. Allow users to expand or collapse content by clicking on the entire box accordion.
    </p>
  
    <div class="container text-margin-bottom">
      <div class="row">
        <div class="medium-5">
          <div class="higlight-box-accordion highlight-overlay" v-html="data.defaultBoxAccordionMarkup()" />
          <div class="click-target-collapsed mouse-pointer"></div>
        </div>
      </div>
    </div>

    <h3>Accessibility</h3>
    <p>
      Accordion functionality and content must be available through the use of screen readers and keyboards.
    </p>

    <h4>References</h4>
    <a href="https://www.w3.org/TR/wai-aria-practices/#accordion">https://www.w3.org/TR/wai-aria-practices/#accordion</a>
    <br/>
    <a href="https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html">https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html</a>
  </div>
</template>

<script>
import data from '@/pages/_components-data/ui/accordions.js'
// Uncomment this only if accordions need to be functional
// if (process.browser) {
//   require('@/assets/farmers/dist/js/farmers.min.js')
// }

export default {
  layout: 'farmers',
  head() {
    return {
      title: 'Accordions'
    }
  },
  data() {
    return {
      data: data
    }
  },
  mounted() {
    let showMoreLinks = document.querySelectorAll(".card-accordion-show-more")

    for(const link of showMoreLinks) {
      link.addEventListener("click", function(event){
        event.preventDefault()
      })
    }
  }
}
</script>