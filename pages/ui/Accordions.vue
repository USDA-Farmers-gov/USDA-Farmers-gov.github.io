<template>
  <div>
    <h2>Accordions</h2>

    <p class="intro-text">
      An accordion hides or reveals additional information. Accordions are used when large amounts of information need to be organized within a small space.
    </p>

    <h3>Card Accordions</h3>
    <p>
      Card accordions display part of the content to provide context about the information before users expand the accordion to view the full content.  Users are able to see what information is included before making a decision to continue reading. A transparent gradient overlay is used as a visual indicator to show that there is underlying additional content.
    </p>

    <div v-html="defaultAccordionMarkup()"></div>

    <h3>Specs</h3>
    <p>
      The height and width of the accordion is flexible but it should follow the grid system and the specs outlined below. 
    </p>

    <div v-html="dimensionsAccordionMarkup()"></div>
  
    <h3>Click Target</h3>
    <p>
      Larger targets are easier for users to manipulate. Allow users to expand or collapse content by clicking on large areas of the accordion; for example, the entire bottom portion of card accordions should be clickable and not just the “Show More” button.
    </p>

    <h3>Box Accordions</h3>
    <p>
      Box accordions are sets of headers displayed in a &frac13; grid layout. They are used when groups of information can be categorized into related sections and help conserve space on content-heavy pages. Only one accordion should open at a time.
    </p>

    [ BOX ACCORDION ]
    <h3>Specs</h3>
    <p>
      The width of the accordion should follow the &frac13; grid layout and the specs outlined below. 
    </p>
    
    [ BOX ACCORDION AND SPECS ]
    <br/>
    [ EXPANDED BOX ACCORDION AND SPECS ]

    <h3>Click Target</h3>
    <p>
      Larger targets are easier for users to manipulate. Allow users to expand or collapse content by clicking on the entire box accordion.
    </p>

    [ COLLAPSED BOX ACCORDION ]

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
// if (process.browser) {
//   require('@/farmers/dist/js/farmers.min.js')
// }

export default {
  layout: 'farmers',
  head() {
    return {
      title: 'Accordions'
    }
  },
  methods: {
    defaultAccordionMarkup() {
      return `<div class="row">
          <div class="card-accordion" tabindex="-1">
            <div class="card-accordion-content">
              <h4>Headline</h4>
              <p>
                We recommend that producers who have not participated in a USDA program contact their local USDA service center to establish farm records. To establish a farm tract number, be sure to bring the following items:
              </p>
              <div class="row">
                <div class="medium-6">
                  <img src="/_nuxt/assets/images/images-example1.jpg" />
                </div>
                <div class="medium-6">
                  <img src="/_nuxt/assets/images/images-example1.jpg" />
                </div>
              </div>
            </div>
            <div class="card-accordion-toggle">
              <a href="#" class="card-accordion-show-more" tabindex="-1">Show More</a>
            </div>
          </div>
        </div>`
    },
    dimensionsAccordionMarkup() {
      return `<div class="accordion-grid">` + this.defaultAccordionMarkup() + `</div>`
    }
  }
}
</script>