(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{219:function(n,o,d){"use strict";d.r(o);d(72),d(29),d(28);var e=d(17),r={defaultAccordionMarkup:function(data){var n=data&&data.tabindex?"":' tabindex="-1"';return'<div class="Card-Accordion card-accordion'+(data&&void 0!==data.classes?" "+data.classes:"")+'"'+n+'>\n            <div class="card-accordion-content">\n              <h4>Headline</h4>\n              <p>We recommend that producers who have not participated in a USDA program contact their local USDA service center to establish farm records. To establish a farm tract number, be sure to bring the following items:</p>\n              <div class="container">\n                <div class="row">\n                  <div class="medium-6">\n                    <img src="/images/images-example1.jpg" alt="girl in a field holding bushel of vegetables" />\n                  </div>\n                  <div class="medium-6">\n                    <img src="/images/images-example1.jpg" alt="girl in a field holding bushel of vegetables" />\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="card-accordion-toggle">\n              <a href="#" class="card-accordion-show-more"'+n+">Show More</a>\n            </div>\n        </div>"},defaultAccordionDimensions:function(){return'<div class="default-accordion-grid">\n              '+r.defaultAccordionMarkup()+'\n              <div class="default-accordion-top dashed-red dashed-red-horizontal"></div>\n              <div class="default-accordion-top-span span-red span-red-horizontal"></div>\n              <div class="default-accordion-top-dimension dimension-red dimension-red-horizontal">32px</div>\n\n              <div class="default-accordion-header dashed-red dashed-red-horizontal"></div>\n              <div class="default-accordion-header-span span-red span-red-horizontal"></div>\n              <div class="default-accordion-header-dimension dimension-red dimension-red-horizontal">8px</div>\n\n              <div class="default-accordion-bottom dashed-red dashed-red-horizontal"></div>\n              <div class="default-accordion-bottom-span span-red span-red-horizontal"></div>\n              <div class="default-accordion-bottom-dimension dimension-red dimension-red-horizontal">24px</div>\n\n              <div class="default-accordion-left dashed-blue dashed-blue-vertical"></div>\n              <div class="default-accordion-left-span span-blue span-blue-vertical"></div>\n              <div class="default-accordion-left-dimension dimension-blue dimension-blue-vertical">32px</div>\n\n              <div class="default-accordion-right dashed-blue dashed-blue-vertical"></div>\n              <div class="default-accordion-right-span span-blue span-blue-vertical"></div>\n              <div class="default-accordion-right-dimension dimension-blue dimension-blue-vertical">32px</div>\n              </div>'},clickTargetAccordionDimensions:function(){return'<div class="click-target-accordion-grid">\n                '+r.defaultAccordionMarkup()+'\n                <div class="click-target-accordion-top dashed-red dashed-red-horizontal"></div>\n                <div class="click-target-accordion-top-span span-red span-red-horizontal"></div>\n                <div class="click-target-accordion-top-dimension dimension-red dimension-red-horizontal">24px</div>\n\n                <div class="click-target-accordion-bottom dashed-red dashed-red-horizontal"></div>\n                <div class="click-target-accordion-bottom-span span-red span-red-horizontal"></div>\n                <div class="click-target-accordion-bottom-dimension dimension-red dimension-red-horizontal">24px</div>\n\n                <div class="click-target-accordion-highlight"></div>\n              </div>'},defaultBoxAccordionMarkup:function(data){data&&data.expanded,data&&data.expanded,data&&data.expanded,data&&data.expanded;var n=r.boxAccordionMarkup(data);return'<div class="box-accordion">'+(data&&data.expanded?'<div class="box-accordion-top-grid">\n                                      '+n.top+'\n                                      <div class="box-top dashed-red dashed-red-dark-bg-horizontal"></div>\n                                      <div class="box-top-span span-red span-red-horizontal"></div>\n                                      <div class="box-top-dimension dimension-red dimension-red-horizontal">24px</div>\n\n                                      <div class="box-middle dashed-red dashed-red-dark-bg-horizontal"></div>\n                                      <div class="box-middle-span span-red span-red-horizontal"></div>\n                                      <div class="box-middle-dimension dimension-red dimension-red-horizontal">16px</div>\n                                      \n                                      <div class="box-bottom dashed-red dashed-red-dark-bg-horizontal"></div>\n                                      <div class="box-bottom-span span-red span-red-horizontal"></div>\n                                      <div class="box-bottom-dimension dimension-red dimension-red-horizontal">24px</div>\n\n                                      <div class="box-left dashed-blue dashed-blue-dark-bg-vertical"></div>\n                                      <div class="box-left-span span-blue span-blue-vertical"></div>\n                                      <div class="box-left-dimension dimension-blue dimension-blue-vertical">24px</div>\n\n                                      <div class="box-right dashed-blue dashed-blue-dark-bg-vertical"></div>\n                                      <div class="box-right-span span-blue span-blue-vertical"></div>\n                                      <div class="box-right-dimension dimension-blue dimension-blue-vertical">24px</div>\n                                    </div>':n.top)+(data&&data.expanded?'<div class="box-accordion-bottom-grid">\n                                      '+n.bottom+'\n                                      <div class="box-arrow-span span-blue span-blue-vertical"></div>\n                                      <div class="box-arrow-dimension dimension-blue dimension-blue-vertical">40px</div>\n\n                                      <div class="box-content-top-span span-red span-red-horizontal"></div>\n                                      <div class="box-content-top-dimension dimension-red dimension-red-horizontal">8px</div>\n\n                                      <div class="box-content-middle dashed-red dashed-red-horizontal"></div>\n                                      <div class="box-content-middle-span span-red span-red-horizontal"></div>\n                                      <div class="box-content-middle-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                                      <div class="box-content-bottom dashed-red dashed-red-horizontal"></div>\n                                      <div class="box-content-bottom-span span-red span-red-horizontal"></div>\n                                      <div class="box-content-bottom-dimension dimension-red dimension-red-horizontal">32px</div>\n\n                                      <div class="box-content-left dashed-blue dashed-blue-vertical"></div>\n                                      <div class="box-content-left-span span-blue span-blue-vertical"></div>\n                                      <div class="box-content-left-dimension dimension-blue dimension-red-vertical">24px</div>\n\n                                      <div class="box-content-right dashed-blue dashed-blue-vertical"></div>\n                                      <div class="box-content-right-span span-blue span-blue-vertical"></div>\n                                      <div class="box-content-right-dimension dimension-blue dimension-red-vertical">24px</div>\n                                      </div>':n.bottom)+"</div>"},boxAccordionMarkup:function(data){var n=data&&void 0!==data.classes?" "+data.classes:"",o=data&&data.tabindex?"":' tabindex="-1"',d=data&&data.expanded?"Expanded Box Accordion Headline 3":"Collapsed Box Accordion Headline 3";data&&data.text&&(d=data.text);var r=data&&data.expanded?"true":"false",t=data&&data.expanded?"":"hidden",c=e.a.randomNumber(),l="accordion-"+c,v="sect-"+c;return{top:'<div id="'+l+'"\n                  class="box-accordion-top Accordion-trigger'+n+'"\n                  '+o+'\n                  aria-expanded="'+r+'"\n                  aria-controls="'+v+'">\n              <h3>\n                  <span class="Accordion-title headline-3">'+d+'\n                    <span class="Accordion-icon"></span>\n                  </span>\n              </h3>\n              <div class="down-arrow"></div>\n            </div>',bottom:'<div id="'+v+'" role="region" aria-labelledby="'+l+'" class="Accordion-panel" '+t+">\n                <p>Farmers.gov provides farmers, ranchers, private foresters, and agricultural producers with online self-service applications, educational materials, engagement opportunities, and business tools to increase efficiency and productivity while preserving and fostering long-held traditional relationships between local USDA offices and producers.</p>\n            </div>"}},boxAccordionCode:function(){return'<div id="accordionGroup" class="row Accordion">'+r.defaultBoxAccordionMarkup({text:"Box 1",tabindex:!0})+r.defaultBoxAccordionMarkup({text:"Box 2",tabindex:!0})+r.defaultBoxAccordionMarkup({text:"Box 3",tabindex:!0})+"</div>"},boxAccordionDimensions:function(){return'<div class="box-accordion-grid">\n              '+r.defaultBoxAccordionMarkup()+'\n              <div class="box-accordion-top dashed-red dashed-red-horizontal"></div>\n              <div class="box-accordion-top-span span-red span-red-horizontal"></div>\n              <div class="box-accordion-top-dimension dimension-red dimenstion-horizontal">24px</div>\n\n              <div class="box-accordion-middle dashed-red dashed-red-horizontal"></div>\n              <div class="box-accordion-middle-span span-red span-red-horizontal"></div>\n              <div class="box-accordion-middle-dimension dimension-red dimenstion-horizontal">16px</div>\n\n              <div class="box-accordion-bottom dashed-red dashed-red-horizontal"></div>\n              <div class="box-accordion-bottom-span span-red span-red-horizontal"></div>\n              <div class="box-accordion-bottom-dimension dimension-red dimenstion-horizontal">24px</div>\n\n              <div class="box-accordion-left dashed-blue dashed-blue-vertical"></div>\n              <div class="box-accordion-left-span span-blue span-blue-vertical"></div>\n              <div class="box-accordion-left-dimension dimension-blue dimenstion-vertical">24px</div>\n\n              <div class="box-accordion-right dashed-blue dashed-blue-vertical"></div>\n              <div class="box-accordion-right-span span-blue span-blue-vertical"></div>\n              <div class="box-accordion-right-dimension dimension-blue dimenstion-vertical">24px</div>\n              </div>'},defaultAccordionSpecs:function(){return[{markup:r.defaultAccordionDimensions(),code:{Background:"color: #FFFFFF;\n                          shadow: 0;1;4;0 #BBBBBB;"}}]},defaultBoxAccordionSpecs:function(){return[{code:{Text:"color: #212121;\n                  font-family: Public Sans;\n                  font-size: 23px;\n                  font-weight: bold;\n                  line-height: 30px;"}},{code:{Background:"color: #FFFFFF;\n                  shadow: 0;1;4;0 #BBBBBB;"}},{code:{Icon:"color: #49A564;\n                  size: 32x32;"}}]},expandedBoxAccordionSpecs:function(){return[{code:{Text:"color: #FFFFFF;\n              font-family: Public Sans;\n              font-size: 23px;\n              font-weight: bold;\n              line-height: 30px;"}},{code:{Background:"color: #49A564;\n                shadow: 0;1;4;0 #BBBBBB;"}},{code:{Icon:"color: #FFFFFF;\n                size: 32x32;"}}]}},t=r,c={layout:"farmers",head:function(){return{title:"Accordions"}},data:function(){return{data:t}},mounted:function(){var n=document.querySelectorAll(".card-accordion-show-more"),o=!0,d=!1,e=void 0;try{for(var r,t=n[Symbol.iterator]();!(o=(r=t.next()).done);o=!0){r.value.addEventListener("click",function(n){n.preventDefault()})}}catch(n){d=!0,e=n}finally{try{o||null==t.return||t.return()}finally{if(d)throw e}}}},l=d(2),component=Object(l.a)(c,function(){var n=this,o=n.$createElement,d=n._self._c||o;return d("div",[d("h2",[n._v("Accordions")]),n._v(" "),d("p",{staticClass:"intro-text text-margin-bottom"},[n._v("\n    An accordion hides or reveals additional information. Accordions are used when large amounts of information need to be organized within a small space.\n  ")]),n._v(" "),d("h3",[n._v("Card Accordions")]),n._v(" "),d("p",[n._v("\n    Card accordions display part of the content to provide context about the information before users expand the accordion to view the full content.  Users are able to see what information is included before making a decision to continue reading. A transparent gradient overlay is used as a visual indicator to show that there is underlying additional content.\n  ")]),n._v(" "),d("div",{staticClass:"text-margin-bottom",domProps:{innerHTML:n._s(n.data.defaultAccordionMarkup())}}),n._v(" "),d("h3",[n._v("Specs")]),n._v(" "),d("p",[n._v("\n    The height and width of the accordion is flexible but it should follow the grid system and the specs outlined below. \n  ")]),n._v(" "),d("ExampleRow",{attrs:{data:n.data.defaultAccordionSpecs(),columns:"1"}}),n._v(" "),d("Code",{attrs:{markup:n.data.defaultAccordionMarkup({tabindex:!0})}}),n._v(" "),d("h4",[n._v("Click Target")]),n._v(" "),d("p",[n._v("\n    Larger targets are easier for users to manipulate. Allow users to expand or collapse content by clicking on large areas of the accordion; for example, the entire bottom portion of card accordions should be clickable and not just the “Show More” button.\n  ")]),n._v(" "),d("div",{domProps:{innerHTML:n._s(n.data.clickTargetAccordionDimensions())}}),n._v(" "),d("div",{staticClass:"click-target mouse-pointer text-margin-bottom"}),n._v(" "),d("h3",[n._v("Box Accordions")]),n._v(" "),d("p",[n._v("\n    Box accordions are sets of headers displayed in a ⅓ grid layout. They are used when groups of information can be categorized into related sections and help conserve space on content-heavy pages. Only one accordion should open at a time.\n  ")]),n._v(" "),d("div",{staticClass:"medium-5 text-margin-bottom",domProps:{innerHTML:n._s(n.data.defaultBoxAccordionMarkup())}}),n._v(" "),d("h3",[n._v("Specs")]),n._v(" "),d("p",[n._v("\n    The width of the accordion should follow the ⅓ grid layout and the specs outlined below. \n  ")]),n._v(" "),d("div",{domProps:{innerHTML:n._s(n.data.boxAccordionDimensions())}}),n._v(" "),d("ExampleRow",{attrs:{data:n.data.defaultBoxAccordionSpecs(),columns:"4"}}),n._v(" "),d("div",{ref:"accordionGroup",staticClass:"Accordion row",attrs:{id:"accordionGroup"}},[d("div",{domProps:{innerHTML:n._s(n.data.defaultBoxAccordionMarkup({expanded:!0}))}})]),n._v(" "),d("ExampleRow",{attrs:{data:n.data.expandedBoxAccordionSpecs(),columns:"4"}}),n._v(" "),d("Code",{attrs:{markup:n.data.boxAccordionCode()}}),n._v(" "),d("h3",[n._v("Click Target")]),n._v(" "),d("p",[n._v("\n    Larger targets are easier for users to manipulate. Allow users to expand or collapse content by clicking on the entire box accordion.\n  ")]),n._v(" "),d("div",{staticClass:"container text-margin-bottom"},[d("div",{staticClass:"row"},[d("div",{staticClass:"medium-5"},[d("div",{staticClass:"higlight-box-accordion",domProps:{innerHTML:n._s(n.data.defaultBoxAccordionMarkup({classes:"highlight-overlay"}))}}),n._v(" "),d("div",{staticClass:"click-target-collapsed mouse-pointer"})])])]),n._v(" "),d("h3",[n._v("Accessibility")]),n._v(" "),d("p",[n._v("\n    Accordion functionality and content must be available through the use of screen readers and keyboards.\n  ")]),n._v(" "),d("h4",[n._v("References")]),n._v(" "),d("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices/#accordion"}},[n._v("https://www.w3.org/TR/wai-aria-practices/#accordion")]),n._v(" "),d("br"),n._v(" "),d("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html"}},[n._v("https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html")])],1)},[],!1,null,null,null);o.default=component.exports}}]);