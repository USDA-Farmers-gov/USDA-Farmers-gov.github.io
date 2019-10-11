import utils from '@/assets/js/utils.js'

const accordions_data = {
  defaultAccordionMarkup(data) {
    const tabindex = (data && data.tabindex) ? '0' : '-1'
    return `<div class="card-accordion" tabindex="` + tabindex + `">
            <div class="card-accordion-content">
              <h4>Headline</h4>
              <p>We recommend that producers who have not participated in a USDA program contact their local USDA service center to establish farm records. To establish a farm tract number, be sure to bring the following items:</p>
              <div class="container">
                <div class="row">
                  <div class="medium-6">
                    <img src="/images/images-example1.jpg" alt="girl in a field holding bushel of vegetables" style="max-width: 100%" />
                  </div>
                  <div class="medium-6">
                    <img src="/images/images-example1.jpg" alt="girl in a field holding bushel of vegetables" style="max-width: 100%" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-accordion-toggle">
              <a href="#" class="card-accordion-show-more" tabindex="` + tabindex + `">Show More</a>
            </div>
        </div>`
  },
  defaultAccordionDimensions() {
      return `<div class="default-accordion-grid">
              ` + accordions_data.defaultAccordionMarkup() + `
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
                ` + accordions_data.defaultAccordionMarkup() + `
                <div class="click-target-accordion-top dashed-red dashed-red-horizontal"></div>
                <div class="click-target-accordion-top-span span-red span-red-horizontal"></div>
                <div class="click-target-accordion-top-dimension dimension-red dimension-red-horizontal">24px</div>

                <div class="click-target-accordion-bottom dashed-red dashed-red-horizontal"></div>
                <div class="click-target-accordion-bottom-span span-red span-red-horizontal"></div>
                <div class="click-target-accordion-bottom-dimension dimension-red dimension-red-horizontal">24px</div>

                <div class="click-target-accordion-highlight"></div>
              </div>`
    },
    defaultBoxAccordionMarkup(data) {
      let labelText     = (!!data && data.expanded) ? 'Expanded Box Accordion Headline 3' : 'Collapsed Box Accordion Headline 3'
      let ariaExpanded  = (!!data && data.expanded) ? 'true' : 'false'
      let hidden        = (!!data && data.expanded) ? '' : 'hidden'
      let boxGridClass  = (!!data && data.expanded) ? ' box-accordion-top-grid' : ''
      let markup        = accordions_data.boxAccordionMarkup(data)
      let markupTop     = (!!data && data.expanded) ? `<div class="box-accordion-top-grid">
                                      ` + markup.top + `
                                      <div class="box-top dashed-red dashed-red-dark-bg-horizontal"></div>
                                      <div class="box-top-span span-red span-red-horizontal"></div>
                                      <div class="box-top-dimension dimension-red dimension-red-horizontal">24px</div>

                                      <div class="box-middle dashed-red dashed-red-dark-bg-horizontal"></div>
                                      <div class="box-middle-span span-red span-red-horizontal"></div>
                                      <div class="box-middle-dimension dimension-red dimension-red-horizontal">16px</div>
                                      
                                      <div class="box-bottom dashed-red dashed-red-dark-bg-horizontal"></div>
                                      <div class="box-bottom-span span-red span-red-horizontal"></div>
                                      <div class="box-bottom-dimension dimension-red dimension-red-horizontal">24px</div>

                                      <div class="box-left dashed-blue dashed-blue-dark-bg-vertical"></div>
                                      <div class="box-left-span span-blue span-blue-vertical"></div>
                                      <div class="box-left-dimension dimension-blue dimension-blue-vertical">24px</div>

                                      <div class="box-right dashed-blue dashed-blue-dark-bg-vertical"></div>
                                      <div class="box-right-span span-blue span-blue-vertical"></div>
                                      <div class="box-right-dimension dimension-blue dimension-blue-vertical">24px</div>
                                    </div>`
                                  : markup.top
      let markupBottom = (!!data && data.expanded) ? `<div class="box-accordion-bottom-grid">
                                      ` + markup.bottom + `
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
                                      </div>`
                                  : markup.bottom

      return  `<div class="box-accordion">` + markupTop + markupBottom + `</div>`
    },

    boxAccordionMarkup(data) {
      const tabindex = (data && data.tabindex) ? '0' : '-1'
      const labelText     = (!!data && data.expanded) ? 'Expanded Box Accordion Headline 3' : 'Collapsed Box Accordion Headline 3'
      const ariaExpanded  = (!!data && data.expanded) ? 'true' : 'false'
      const hidden        = (!!data && data.expanded) ? '' : 'hidden'
      const randomString  = utils.randomNumber()
      const accordionId   = 'accordion-' + randomString
      const sectId        = 'sect-' + randomString

      return { 
            top: `<div class="box-accordion-top Accordion-trigger"
                  tabindex="` + tabindex + `"
                  aria-expanded="` + ariaExpanded + `"
                  aria-controls="` + sectId + `"
                  id="` + accordionId + `">
              <h3>
                  <span class="Accordion-title headline-3">` + labelText + `
                    <span class="Accordion-icon"></span>
                  </span>
              </h3>
              <div class="down-arrow"></div>
            </div>`,
            bottom: 
            `<div id="` + sectId + `" role="region" aria-labelledby="` + accordionId + `" class="Accordion-panel" ` + hidden + `>
                <p>Farmers.gov provides farmers, ranchers, private foresters, and agricultural producers with online self-service applications, educational materials, engagement opportunities, and business tools to increase efficiency and productivity while preserving and fostering long-held traditional relationships between local USDA offices and producers.</p>
            </div>` }
    },

    boxAccordionDimensions() {
      return `<div class="box-accordion-grid">
              ` + accordions_data.defaultBoxAccordionMarkup() + `
              <div class="box-accordion-top dashed-red dashed-red-horizontal"></div>
              <div class="box-accordion-top-span span-red span-red-horizontal"></div>
              <div class="box-accordion-top-dimension dimension-red dimenstion-horizontal">24px</div>

              <div class="box-accordion-middle dashed-red dashed-red-horizontal"></div>
              <div class="box-accordion-middle-span span-red span-red-horizontal"></div>
              <div class="box-accordion-middle-dimension dimension-red dimenstion-horizontal">16px</div>

              <div class="box-accordion-bottom dashed-red dashed-red-horizontal"></div>
              <div class="box-accordion-bottom-span span-red span-red-horizontal"></div>
              <div class="box-accordion-bottom-dimension dimension-red dimenstion-horizontal">24px</div>

              <div class="box-accordion-left dashed-blue dashed-blue-vertical"></div>
              <div class="box-accordion-left-span span-blue span-blue-vertical"></div>
              <div class="box-accordion-left-dimension dimension-blue dimenstion-vertical">24px</div>

              <div class="box-accordion-right dashed-blue dashed-blue-vertical"></div>
              <div class="box-accordion-right-span span-blue span-blue-vertical"></div>
              <div class="box-accordion-right-dimension dimension-blue dimenstion-vertical">24px</div>
              </div>`
    },
    defaultAccordionSpecs() {
      return [
        {
          markup: accordions_data.defaultAccordionDimensions(),
            code: { 'Background': `color: #FFFFFF;
                          shadow: 0;1;4;0 #BBBBBB;` }
        }
      ]
    },
    defaultBoxAccordionSpecs() {
      return [
        {
          code: { 
            'Text': `color: #212121;
                  font-family: Public Sans;
                  font-size: 23px;
                  font-weight: bold;
                  line-height: 30px;`, 
          }
        },
        {
          code: { 
            'Background': `color: #FFFFFF;
                  shadow: 0;1;4;0 #BBBBBB;`, 
          }
        },
                {
          code: { 
            'Icon': `color: #49A564;
                  size: 32x32;`
          }
        }
      ]
    },

    expandedBoxAccordionSpecs() {
      return [
        {
          code: { 
            'Text': `color: #FFFFFF;
              font-family: Public Sans;
              font-size: 23px;
              font-weight: bold;
              line-height: 30px;`, 
          }
        },
        {
          code: { 
            'Background': `color: #49A564;
                shadow: 0;1;4;0 #BBBBBB;`, 
          }
        },
                {
          code: { 
            'Icon': `color: #FFFFFF;
                size: 32x32;`
          }
        }
      ]
    }
}

export default accordions_data