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

    <div v-html="defaultAccordionMarkup()" />

    <h3>Specs</h3>
    <p>
      The height and width of the accordion is flexible but it should follow the grid system and the specs outlined below. 
    </p>

    <ExampleRow :data="specs_default_accordion" columns="1" />
  
    <h3>Click Target</h3>
    <p>
      Larger targets are easier for users to manipulate. Allow users to expand or collapse content by clicking on large areas of the accordion; for example, the entire bottom portion of card accordions should be clickable and not just the “Show More” button.
    </p>

    <div v-html="clickTargetAccordionDimensions()" />
    <img class="click-target hover-hand" src="/images/hover-hand.png"/>

    <h3>Box Accordions</h3>
    <p>
      Box accordions are sets of headers displayed in a &frac13; grid layout. They are used when groups of information can be categorized into related sections and help conserve space on content-heavy pages. Only one accordion should open at a time.
    </p>

    <div v-html="boxMarkup" />
    <h3>Specs</h3>
    <p>
      The width of the accordion should follow the &frac13; grid layout and the specs outlined below. 
    </p>
    
    <div v-html="boxAccordionDimensions()" />
    <ExampleRow :data="specs_box_accordion" columns="4" />
    
    <div id="accordionGroup" ref="accordionGroup" class="Accordion row">
      <div v-html="boxMarkupExpanded" />
    </div>

    <h3>Click Target</h3>
    <p>
      Larger targets are easier for users to manipulate. Allow users to expand or collapse content by clicking on the entire box accordion.
    </p>
  
      <div class="highlight-overlay higlight-box-accordion" v-html="boxMarkup" />
      <img class="click-target-collapsed hover-hand" src="/images/hover-hand.png"/>
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
// Uncomment this only if accordions needs to be funcational
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
  data() {
    return {
      boxAccordionWidth: 0,
      boxMarkup: '',
      boxMarkupExpanded: '',
      specs_default_accordion: [
        {
          markup: this.defaultAccordionDimensions(),
            code: { background: `color: #FFFFFF;
                          shadow: 0;1;4;0 #BBBBBB;` }
        }
      ],
      specs_box_accordion: [
        {
          code: { 
            text: `color: #212121;
                  font-family: Public Sans;
                  font-size: 23px;
                  font-weight: bold;
                  line-height: 30px;`, 
          }
        },
        {
          code: { 
            background: `color: #FFFFFF;
                  shadow: 0;1;4;0 #BBBBBB;`, 
          }
        },
                {
          code: { 
            icon: `color: #49A564;
                  size: 32x32;`
          }
        }
      ]
    }
  },
  mounted() {
    this.boxAccordionWidth = this.$refs.accordionGroup.clientWidth
    this.boxMarkup = this.defaultBoxAccordionMarkup()
    this.boxMarkupExpanded = this.defaultBoxAccordionMarkup(true)
  },
  methods: {
    defaultAccordionMarkup() {
      return `<div class="card-accordion" tabindex="-1">
            <div class="card-accordion-content">
              <h4>Headline</h4>
              <p>
                We recommend that producers who have not participated in a USDA program contact their local USDA service center to establish farm records. To establish a farm tract number, be sure to bring the following items:
              </p>
              <div class="row">
                <div class="medium-6">
                  <img src="/images/images-example1.jpg" style="max-width: 100%" />
                </div>
                <div class="medium-6">
                  <img src="/images/images-example1.jpg" style="max-width: 100%" />
                </div>
              </div>
            </div>
            <div class="card-accordion-toggle">
              <a href="#" class="card-accordion-show-more" tabindex="-1">Show More</a>
            </div>
        </div>`
    },
    defaultAccordionDimensions() {
      return `<div class="default-accordion-grid">
              ` + this.defaultAccordionMarkup() + `
              <div class="default-accordion-top dashed-red dashed-red-horizontal"></div>
              <div class="default-accordion-top-span span-red span-red-horizontal"></div>
              <div class="default-accordion-top-dimension dimension-red dimension-red-horizontal">32px</div>

              <div class="default-accordion-header dashed-red dashed-red-horizontal"></div>
              <div class="default-accordion-header-span span-red span-red-horizontal"></div>
              <div class="default-accordion-header-dimension dimension-red dimension-red-horizontal">8px</div>

              <div class="default-accordion-bottom dashed-red dashed-red-horizontal"></div>
              <div class="default-accordion-bottom-span span-red span-red-horizontal"></div>
              <div class="default-accordion-bottom-dimension dimension-red dimension-red-horizontal">24px</div>

              <div class="default-accordion-left dashed-blue dashed-blue-vertical"></div>
              <div class="default-accordion-left-span span-blue span-blue-vertical"></div>
              <div class="default-accordion-left-dimension dimension-blue dimension-blue-vertical">32px</div>

              <div class="default-accordion-right dashed-blue dashed-blue-vertical"></div>
              <div class="default-accordion-right-span span-blue span-blue-vertical"></div>
              <div class="default-accordion-right-dimension dimension-blue dimension-blue-vertical">32px</div>
              </div>`
    },
    clickTargetAccordionDimensions() {
      return `<div class="click-target-accordion-grid">
                ` + this.defaultAccordionMarkup() + `
                <div class="click-target-accordion-top dashed-red dashed-red-horizontal"></div>
                <div class="click-target-accordion-top-span span-red span-red-horizontal"></div>
                <div class="click-target-accordion-top-dimension dimension-red dimension-red-horizontal">24px</div>

                <div class="click-target-accordion-bottom dashed-red dashed-red-horizontal"></div>
                <div class="click-target-accordion-bottom-span span-red span-red-horizontal"></div>
                <div class="click-target-accordion-bottom-dimension dimension-red dimension-red-horizontal">24px</div>

                <div class="click-target-accordion-highlight"></div>
              </div>`
    },
    defaultBoxAccordionMarkup(expanded) {
      let labelText = expanded ? 'Expanded Box Accordion Headline 3' : 'Collapsed Box Accordion Headline 3'
      let ariaExpanded = expanded ? 'true' : 'false'
      let hidden = expanded ? '' : 'hidden'
      let boxGridClass = expanded ? ' box-accordion-top-grid' : ''
      let markup = this.boxAccordionMarkup(expanded)
      let markupTop = expanded ? `<div class="box-accordion-top-grid">
                                      ` + markup.top + `
                                      <div class="box-top dashed-red dashed-red-horizontal"></div>
                                      <div class="box-top-span span-red span-red-horizontal"></div>
                                      <div class="box-top-dimension dimension-red dimension-red-horizontal">24px</div>

                                      <div class="box-middle dashed-red dashed-red-horizontal"></div>
                                      <div class="box-middle-span span-red span-red-horizontal"></div>
                                      <div class="box-middle-dimension dimension-red dimension-red-horizontal">16px</div>
                                      
                                      <div class="box-bottom dashed-red dashed-red-horizontal"></div>
                                      <div class="box-bottom-span span-red span-red-horizontal"></div>
                                      <div class="box-bottom-dimension dimension-red dimension-red-horizontal">24px</div>

                                      <div class="box-left dashed-blue dashed-blue-vertical"></div>
                                      <div class="box-left-span span-blue span-blue-vertical"></div>
                                      <div class="box-left-dimension dimension-blue dimension-blue-vertical">24px</div>

                                      <div class="box-right dashed-blue dashed-blue-vertical"></div>
                                      <div class="box-right-span span-blue span-blue-vertical"></div>
                                      <div class="box-right-dimension dimension-blue dimension-blue-vertical">24px</div>
                                    </div>`
                                  : markup.top
      let markupBottom = expanded ? `<div class="box-accordion-bottom-grid">
                                      
                                      <div class="box-arrow-span span-blue span-blue-vertical"></div>
                                      <div class="box-arrow-dimension dimension-blue dimension-blue-vertical">40px</div>

                                      <div class="box-content-top-span span-red span-red-horizontal"></div>
                                      <div class="box-content-top-dimension dimension-red dimension-red-horizontal">8px</div>

                                      <div class="box-content-middle dashed-red dashed-red-horizontal"></div>
                                      <div class="box-content-middle-span span-red span-red-horizontal"></div>
                                      <div class="box-content-middle-dimension dimension-red dimension-red-horizontal">16px</div>

                                      <div class="box-content-bottom dashed-red dashed-red-horizontal"></div>
                                      <div class="box-content-bottom-span span-red span-red-horizontal"></div>
                                      <div class="box-content-bottom-dimension dimension-red dimension-red-horizontal">32px</div>

                                      <div class="box-content-left dashed-blue dashed-blue-vertical"></div>
                                      <div class="box-content-left-span span-blue span-blue-vertical"></div>
                                      <div class="box-content-left-dimension dimension-blue dimension-red-vertical">24px</div>

                                      <div class="box-content-right dashed-blue dashed-blue-vertical"></div>
                                      <div class="box-content-right-span span-blue span-blue-vertical"></div>
                                      <div class="box-content-right-dimension dimension-blue dimension-red-vertical">24px</div>

                                      ` + markup.bottom + 
                                      `</div>`
                                  : markup.bottom

      return  `<div class="box-accordion">` + markupTop + markupBottom + `</div>`
    },

    boxAccordionMarkup(expanded) {
      let labelText = expanded ? 'Expanded Box Accordion Headline 3' : 'Collapsed Box Accordion Headline 3'
      let ariaExpanded = expanded ? 'true' : 'false'
      let hidden = expanded ? '' : 'hidden'

      return { 
            top: `<div class="box-accordion-top Accordion-trigger"
                  tabindex="-1"
                  aria-expanded="` + ariaExpanded + `"
                  aria-controls="sect1"
                  id="accordion1id">
              <h3>
                  <span class="Accordion-title headline-3">
                    ` + labelText + `
                    <span class="Accordion-icon"></span>
                  </span>
              </h3>
              <div class="down-arrow"></div>
            </div>`,
            bottom: 
            `<div id="sect1" role="region" aria-labelledby="accordion1id" class="Accordion-panel" ` + hidden + `>
                <p>
                  Farmers.gov provides farmers, ranchers, private foresters, and agricultural producers with online self-service applications, educational materials, engagement opportunities, and business tools to increase efficiency and productivity while preserving and fostering long-held traditional relationships between local USDA offices and producers.
                </p>
            </div>` }

    },
    boxAccordionDimensions() {
      return `<div class="box-accordion-grid">
              ` + this.defaultBoxAccordionMarkup() + `
              <div class="box-accordion-top dashed-red dashed-red-horizontal"></div>
              <div class="box-accordion-top-span span-red span-red-horizontal"></div>
              <div class="box-accordion-top-dimension dimension-red dimenstion-horizontal">24px</div>

              <div class="box-accordion-middle dashed-red dashed-red-horizontal"></div>
              <div class="box-accordion-middle-span span-red span-red-horizontal"></div>
              <div class="box-accordion-middle-dimension dimension-red dimenstion-horizontal">16px</div>

              <div class="box-accordion-bottom dashed-red dashed-red-horizontal"></div>
              <div class="box-accordion-bottom-span span-red span-red-horizontal"></div>
              <div class="box-accordion-bottom-dimension dimension-red dimenstion-horizontal">16px</div>

              <div class="box-accordion-left dashed-blue dashed-blue-vertical"></div>
              <div class="box-accordion-left-span span-blue span-blue-vertical"></div>
              <div class="box-accordion-left-dimension dimension-blue dimenstion-vertical">24px</div>

              <div class="box-accordion-right dashed-blue dashed-blue-vertical"></div>
              <div class="box-accordion-right-span span-blue span-blue-vertical"></div>
              <div class="box-accordion-right-dimension dimension-blue dimenstion-vertical">24px</div>
              </div>`
    },
  }
}
</script>