(window.webpackJsonp=window.webpackJsonp||[]).push([[21,7],{251:function(e,o,c){"use strict";c.r(o);var d=c(38),r={default:function(){return[{header:"Unselected",markup:r.outputCheckboxMarkup({label:"Checkbox Label",showDimensions:!0}),code:{background:"color: #FFFFFF;\n                        border: 2px #707070;\n                        border-radius: 2px;"}},{header:"Selected",markup:r.outputCheckboxMarkup({label:"Checkbox Label",checked:!0}),code:{background:"color: #006546;",checkmark:"color: #FFFFFF;"}},{header:"Focused",markup:r.outputCheckboxMarkup({label:"Checkbox Label",labelClass:"focus"}),code:{background:"shadow: #1B69D3;"}},{header:"Disabled",classes:"",markup:r.outputCheckboxMarkup({label:"Checkbox Label",disabled:!0}),code:{background:"color: #F7F7F7;\n                        border: 2px #BBBBBB;"}}]},specs:function(){return[{header:"Unselected",classes_cell:"dimension-margins",markup:r.outputCardMarkup({label:"Card Checkbox",image:"/images/MFP2-icon.jpg"}),code:{card:"background: #FFFFFF;\n                border: 2px #BBBBBB;\n                box-shadow: 0 1px 4px 0 #BBBBBB;\n                border-radius: 2px;",checkbox:"background: #FFFFFF;\n                  border: 2px #49A564;\n                  border-radius: 2px;"}},{header:"Selected",markup:r.outputCardMarkup({label:"Card Checkbox",image:"/images/MFP2-icon.jpg",checked:!0,showCardDimensions:!0}),code:{card:"background: #FFFFFF;\n                  border: 2px #49A564;\n                  box-shadow: 0 1px 4px 0 #BBBBBB;\n                  border-radius: 2px;",checkbox:"background: #49A564;\n                      border-radius: 2px;"}}]},specsStates:function(){return[{header:"Hover",markup:r.outputCardMarkup({label:"Card Checkbox",hover:!0,image:"/images/MFP2-icon.jpg"}),code:{card:"border: 2px #49A564;",checkbox:"background: #FFFFFF;\n                      border: 2px #49A564;"}},{header:"Focus",markup:r.outputCardMarkup({label:"Card Checkbox",labelClasses:"focus",image:"/images/MFP2-icon.jpg",checked:!0}),code:{card:"shadow: #1B69D3;",checkbox:"background: #49A564;\n                      checkmark: #FFFFFF;"}},{header:"Disabled",markup:r.outputCardMarkup({label:"Card Checkbox",image:"/images/MFP2-icon.jpg",disabled:!0}),code:{card:"border: 2px #BBBBBB;",checkbox:"background: #F7F7F7;\n                      border: 2px #BBBBBB;"}}]},outputCardMarkup:function(e){var o="checkbox-card-label",c="",r="",t=e&&e.id?e.id:"checkbox-card-"+d.a.randomNumber();e&&e.image&&(o+=" with-image"),e&&e.hover&&(o+=" checked"),e&&e.labelClasses&&(o=o+" "+e.labelClasses),e&&e.checked&&(c=" checked",o+=" checked"),e&&e.disabled&&(r=" disabled",o+=" disabled ");var n='<label for="'+t+'" class="'+o+'" tabindex="0">';e.image&&(n=n+'<div class="cb-img-card-top">\n                                          <img src="'+e.image+'">\n                                        </div>');var l='<input type="checkbox" id="'+t+'" class="checkbox-card-input" title="'+e.label+'" tabindex="0" '+c+r+">"+e.label+'\n                    <span class="cb-icon"></span>';return n+=e.image?'<div class="cb-img-card-bottom">'+l+"</div>":l,e.showCardDimensions?'<div class="checkbox-radio-card-grid">\n            <div class="checkbox-radio-card">'+n+'</div>\n            <div class="checkbox-radio-card-top dashed-red dashed-red-horizontal"></div>\n            <div class="checkbox-radio-card-bottom dashed-red dashed-red-horizontal"></div>\n\n            <div class="checkbox-radio-card-left dashed-blue dashed-blue-vertical"></div>\n            <div class="checkbox-radio-card-right dashed-blue dashed-blue-vertical"></div>\n\n            <div class="height-span top-right span-red span-red-horizontal"></div>\n            <div class="height-span bottom-right span-red span-red-horizontal"></div>\n\n            <div class="width-span bottom-left span-blue span-blue-vertical"></div>\n            <div class="width-span bottom-right span-blue span-blue-vertical"></div>\n\n            <div class="height-dimension top-right dimension-red">20px</div>\n            <div class="height-dimension bottom-right dimension-red">20px</div>\n\n            <div class="width-dimension bottom-left dimension-blue">20px</div>\n            <div class="width-dimension bottom-right dimension-blue">20px</div>\n\n            <div class="checkbox-radio-span checkbox-radio-span-top span-blue span-blue-vertical"></div>\n            <div class="checkbox-radio-span checkbox-radio-span-left span-red span-red-horizontal"></div>\n\n            <div class="checkbox-radio-dimension-top dimension-blue">32px</div>\n            <div class="checkbox-radio-dimension-left dimension-red">32px</div>\n          </div>':n},outputCheckboxMarkup:function(e){var label=e&&e.label?e.label:"Label",o="checkbox-label",c="",r="",t="";e&&!1===e.showLabel&&(o+=" visually-hidden"),e&&e.labelClass&&(o=o+" "+e.labelClass),e&&e.showDimensions&&(c=" checkbox-radio-dimensions"),e&&e.checked&&(r=" checked "),e&&e.disabled&&(t=" disabled ");var n=e&&e.id?e.id:"checkbox-card-"+d.a.randomNumber(),l='<input id="'+n+'" type="checkbox" name="example" value="Option" title="Option"'+r+t+' class="checkbox-input">\n        <label for="'+n+'" tabindex="0" class="'+o+'">'+label+"</label>";return e.showDimensions?'<div class="checkbox-radio-grid'+c+'">\n              <div class="dimension-red dimension-red-horizontal">24 px</div>\n              <div class="checkbox-radio-height span-red span-red-horizontal"></div>\n              <div class="checkbox">\n                '+l+'\n              </div>\n              <div class="checkbox-radio-width span-blue span-blue-vertical"></div>\n              <div class="checkbox-radio-width-dimension dimension-blue dimension-blue-vertical">24 px</div>\n            </div>':l}};o.default=r},257:function(e,o,c){"use strict";c.r(o);var d=c(251),r={layout:"farmers",head:function(){return{title:"Checkboxes"}},data:function(){return{checkboxes:d.default.default(),specs:d.default.specs(),specs_states:d.default.specsStates()}},mounted:function(){var e=document.createElement("script");e.setAttribute("src","/farmers/js/Components/checkbox.js"),document.head.appendChild(e)},methods:{outputCardMarkup:function(e){return d.default.outputCardMarkup(e)},outputCheckboxMarkup:function(e){return d.default.outputCheckboxMarkup(e)}}},t=c(4),component=Object(t.a)(r,function(){var e=this,o=e.$createElement,c=e._self._c||o;return c("div",[c("h2",[e._v("Checkboxes")]),e._v(" "),c("p",{staticClass:"intro-text"},[e._v("\n    Checkboxes are used when the user can make one or more selections from a list or group of options.\n  ")]),e._v(" "),c("h3",[e._v("Form Checkboxes")]),e._v(" "),c("p",[e._v("\n    This style of checkboxes is commonly used in forms. Users can select one or more options. If only one option can be selected, use "),c("nuxt-link",{attrs:{to:"/ui/RadioButtons"}},[e._v("radio buttons")]),e._v(". Checkbox icons and their labels should be left-aligned and vertical for better scannability when appropriate.\n  ")],1),e._v(" "),c("p",{domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label"}))}}),e._v(" "),c("p",{domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label",checked:!0}))}}),e._v(" "),c("div",{staticClass:"checkbox-radio-mobile-container"},[c("ExampleRow",{attrs:{data:e.checkboxes,itemClasses:[{index:0,classes:"checkbox-grid-container"}],columns:"4"}})],1),e._v(" "),c("h4",[e._v("Click Target")]),e._v(" "),c("p",[e._v("\n    A checkbox can be selected and deselected by clicking or tapping on the checkbox as well as the text label.\n  ")]),e._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"medium-3 checkbox-radio-click-target highlight-overlay",domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label"}))}})]),e._v(" "),c("div",{staticClass:"checkbox-radio-click-target mouse-pointer"}),e._v(" "),c("h3",[e._v("Card Checkboxes")]),e._v(" "),c("p",[e._v("\n    Card checkboxes are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can select one or more options. If only one option can be selected, use "),c("nuxt-link",{attrs:{to:"/ui/RadioButtons#card-radio-buttons"}},[e._v("card radio buttons")]),e._v(".\n  ")],1),e._v(" "),c("div",{staticClass:"container examples"},[c("div",{staticClass:"row"},[c("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox"}))}}),e._v(" "),c("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox",checked:!0}))}})])]),e._v(" "),c("h3",[e._v("Specs")]),e._v(" "),c("p",[e._v("\n    Card height and width are flexible based on specific use cases. The cards are most commonly used in a ⅓ or ¼ grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below.\n  ")]),e._v(" "),c("ExampleRow",{attrs:{data:e.specs,columns:"3"}}),e._v(" "),c("ExampleRow",{attrs:{data:e.specs_states,columns:"3"}}),e._v(" "),c("h3",[e._v("Click Target")]),e._v(" "),c("p",[e._v("\n    The entire card in card checkboxes should be clickable.\n  ")]),e._v(" "),c("div",{staticClass:"card-highlight"},[c("div",{staticClass:"highlight-overlay",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox"}))}})]),e._v(" "),c("div",{staticClass:"checkbox-radio-card-click-target mouse-pointer"}),e._v(" "),c("h3",[e._v("Accessibility")]),e._v(" "),c("p",[e._v("\n    Checkboxes should show a visible focus state when tabbed to by a user. Using the “Space” key toggles the focused checkbox between selected and unselected states. \n  ")]),e._v(" "),c("p",[e._v("\n    User interface components should meet 3:1 color contrast ratio requirements. This includes the border of the checkbox and the contrast between a selected checkbox background and the checkmark in the checkbox. \n  ")]),e._v(" "),c("h4",[e._v("References")]),e._v(" "),c("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox"}},[e._v("https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox")]),e._v(" "),c("br"),e._v(" "),c("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}},[e._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html")])],1)},[],!1,null,null,null);o.default=component.exports}}]);