(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{402:function(e,o,c){"use strict";c.r(o);c(73);var t=c(38),n={default:function(){return[{header:"Unselected",markup:n.outputCheckboxMarkup({label:"Checkbox Label",showDimensions:!0}),code:{Background:"color: #FFFFFF;\n                        border: 2px #707070;\n                        border-radius: 2px;"}},{header:"Selected",markup:n.outputCheckboxMarkup({label:"Checkbox Label",checked:!0}),code:{Background:"color: #006546;",Checkmark:"color: #FFFFFF;"}},{header:"Focused",markup:n.outputCheckboxMarkup({label:"Checkbox Label",labelClass:"focus"}),code:{Background:"shadow: #1B69D3;"}},{header:"Disabled",classes:"",markup:n.outputCheckboxMarkup({label:"Checkbox Label",disabled:!0}),code:{Background:"color: #F7F7F7;\n                        border: 2px #BBBBBB;"}}]},specs:function(){return[{header:"Unselected",classes_cell:"dimension-margins",markup:n.outputCardMarkup({label:"Card Checkbox",image:"/images/produce_basket.svg"}),code:{Card:"background: #FFFFFF;\n                border: 2px #BBBBBB;\n                box-shadow: 0 1px 4px 0 #BBBBBB;\n                border-radius: 2px;",Checkbox:"background: #FFFFFF;\n                  border: 2px #49A564;\n                  border-radius: 2px;"}},{header:"Selected",markup:n.outputCardMarkup({label:"Card Checkbox",image:"/images/produce_basket.svg",checked:!0,showCardDimensions:!0}),code:{Card:"background: #FFFFFF;\n                  border: 2px #49A564;\n                  box-shadow: 0 1px 4px 0 #BBBBBB;\n                  border-radius: 2px;",Checkbox:"background: #49A564;\n                      border-radius: 2px;"}}]},specsStates:function(){return[{header:"Hover",markup:n.outputCardMarkup({label:"Card Checkbox",hover:!0,image:"/images/produce_basket.svg"}),code:{Card:"border: 2px #49A564;",Checkbox:"background: #FFFFFF;\n                      border: 2px #49A564;"}},{header:"Focus",markup:n.outputCardMarkup({label:"Card Checkbox",labelClasses:"focus",image:"/images/produce_basket.svg",checked:!0}),code:{Card:"shadow: #1B69D3;",Checkbox:"background: #49A564;\n                      checkmark: #FFFFFF;"}},{header:"Disabled",markup:n.outputCardMarkup({label:"Card Checkbox",image:"/images/produce_basket.svg",disabled:!0}),code:{Card:"border: 2px #BBBBBB;",Checkbox:"background: #F7F7F7;\n                      border: 2px #BBBBBB;"}}]},outputCardMarkup:function(data){var e="cb-card",o="",c="";data&&data.image&&(e=t.a.setClasses(e," image")),data&&data.hover&&(e=t.a.setClasses(e," hover")),data&&data.labelClasses&&(e=t.a.setClasses(e,data.labelClasses)),data&&data.checked&&(o=" checked",e+=" checked"),data&&data.disabled&&(c=" disabled",e="".concat(e).concat(c));var n='<label class="'.concat(e,'">');data.image&&(n+='<div class="input-card-image">\n            <img src="'.concat(data.image,'" alt="">\n          </div>'));var r="".concat(data.label,'<input type="checkbox" class="cb-input"\n        ').concat(o,"\n      ").concat(c,">");return n+=data.image?'<div class="cb-card-bottom">'.concat(r,"</div>"):r,data.showCardDimensions?'<div class="checkbox-radio-card-grid">\n            <div class="checkbox-radio-card">'.concat(n,'</div>\n            <div class="checkbox-radio-card-top dashed-red dashed-red-horizontal"></div>\n            <div class="checkbox-radio-card-bottom dashed-red dashed-red-horizontal"></div>\n\n            <div class="checkbox-radio-card-left dashed-blue dashed-blue-vertical"></div>\n            <div class="checkbox-radio-card-right dashed-blue dashed-blue-vertical"></div>\n\n            <div class="height-span top-right span-red span-red-horizontal"></div>\n            <div class="height-span bottom-right span-red span-red-horizontal"></div>\n\n            <div class="width-span bottom-left span-blue span-blue-vertical"></div>\n            <div class="width-span bottom-right span-blue span-blue-vertical"></div>\n\n            <div class="height-dimension top-right dimension-red">20px</div>\n            <div class="height-dimension bottom-right dimension-red">20px</div>\n\n            <div class="width-dimension bottom-left dimension-blue">20px</div>\n            <div class="width-dimension bottom-right dimension-blue">20px</div>\n\n            <div class="checkbox-radio-span checkbox-radio-span-top span-blue span-blue-vertical"></div>\n            <div class="checkbox-radio-span checkbox-radio-span-left span-red span-red-horizontal"></div>\n\n            <div class="checkbox-radio-dimension-top dimension-blue">32px</div>\n            <div class="checkbox-radio-dimension-left dimension-red">32px</div>\n          </div>'):n},outputCheckboxMarkup:function(data){var label=data&&data.label?data.label:"Label",e="cb-label flex",o="",c="",n="";data&&data.labelClass&&(e=t.a.setClasses(e,data.labelClass)),data&&data.showDimensions&&(o=" checkbox-radio-dimensions"),data&&data.checked&&(c=" checked "),data&&data.disabled&&(n=" disabled ",e="".concat(e," ").concat(n));var r='\n        <label class="'.concat(e,'">\n          <input type="checkbox" name="example" value="Option"').concat(c," ").concat(n,' class="cb-input">\n          <span>').concat(label,"</span>\n        </label>");return data.showDimensions?'<div class="checkbox-radio-grid'.concat(o,'">\n              <div class="dimension-red dimension-red-horizontal">24 px</div>\n              <div class="checkbox-radio-height span-red span-red-horizontal"></div>\n              <div class="checkbox">\n                ').concat(r,'\n              </div>\n              <div class="checkbox-radio-width span-blue span-blue-vertical"></div>\n              <div class="checkbox-radio-width-dimension dimension-blue dimension-blue-vertical">24 px</div>\n            </div>'):r}},r=n,d={layout:"farmers",head:function(){return{title:"Checkboxes"}},data:function(){return{data:r}},methods:{outputCardMarkup:function(e){return r.outputCardMarkup(e)},outputCheckboxMarkup:function(e){return r.outputCheckboxMarkup(e)}}},l=c(8),component=Object(l.a)(d,(function(){var e=this,o=e.$createElement,c=e._self._c||o;return c("div",[c("h2",[e._v("Checkboxes")]),e._v(" "),c("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    Checkboxes are used when the user can make one or more selections from a\n    list or group of options.\n  ")]),e._v(" "),c("h3",[e._v("Form Checkboxes")]),e._v(" "),c("p",[e._v("\n    This style of checkboxes is commonly used in forms. Users can select one\n    or more options. If only one option can be selected, use\n    "),c("nuxt-link",{attrs:{to:"/ui/RadioButtons"}},[e._v("radio buttons")]),e._v(". Checkbox icons\n    and their labels should be left-aligned and vertical for better\n    scannability when appropriate.\n  ")],1),e._v(" "),c("p",{domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label"}))}}),e._v(" "),c("p",{domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label",checked:!0}))}}),e._v(" "),c("div",{staticClass:"checkbox-radio-mobile-container"},[c("ExampleRow",{attrs:{data:e.data.default(),"item-classes":[{index:0,classes:"checkbox-grid-container"}],columns:"4"}})],1),e._v(" "),c("Code",{attrs:{markup:e.outputCheckboxMarkup({label:"Checkbox Label"})}}),e._v(" "),c("h4",[e._v("Click Target")]),e._v(" "),c("p",[e._v("\n    A checkbox can be selected and deselected by clicking or tapping on the\n    checkbox as well as the text label.\n  ")]),e._v(" "),c("h4",[e._v("Mobile")]),e._v(" "),c("p",[e._v("\n    Form checkboxes should be left-aligned and listed vertically when\n    displayed on mobile.\n  ")]),e._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"medium-3 checkbox-radio-click-target highlight-overlay",domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label"}))}}),e._v(" "),c("div",{staticClass:"checkbox-radio-click-target mouse-pointer"})]),e._v(" "),c("h3",[e._v("Card Checkboxes")]),e._v(" "),c("p",[e._v("\n    Card checkboxes are used in interactive tools. The element allows space\n    for icons when appropriate, as well as typographical hierarchy. The entire\n    card is a large touch/click target which minimizes user input error and\n    allows for an easier interaction on a mobile device. Users can select one\n    or more options. If only one option can be selected, use\n    "),c("nuxt-link",{attrs:{to:"/ui/RadioButtons#card-radio-buttons"}},[e._v("card radio buttons")]),e._v(".\n  ")],1),e._v(" "),c("div",{staticClass:"container examples text-margin-bottom"},[c("div",{staticClass:"row"},[c("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox"}))}}),e._v(" "),c("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox",checked:!0}))}})])]),e._v(" "),c("h3",[e._v("Specs")]),e._v(" "),c("p",[e._v("\n    Card height and width are flexible based on specific use cases. The cards\n    are most commonly used in a ⅓ or ¼ grid layout. Icons can be\n    used with different typography hierarchy inside the card. All elements\n    should stay within the specified padding requirements below.\n  ")]),e._v(" "),c("ExampleRow",{attrs:{data:e.data.specs(),columns:"3"}}),e._v(" "),c("ExampleRow",{attrs:{data:e.data.specsStates(),columns:"3"}}),e._v(" "),c("Code",{attrs:{markup:e.data.outputCardMarkup({label:"Card Checkbox",hover:!0,image:"/images/produce_basket.svg"})}}),e._v(" "),c("h3",[e._v("Click Target")]),e._v(" "),c("p",[e._v("The entire card in card checkboxes should be clickable.")]),e._v(" "),c("div",{staticClass:"card-highlight text-margin-bottom"},[c("div",{staticClass:"highlight-overlay",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox"}))}}),e._v(" "),c("div",{staticClass:"checkbox-radio-card-click-target mouse-pointer"})]),e._v(" "),c("h3",[e._v("Accessibility")]),e._v(" "),c("p",[e._v("\n    Checkboxes should show a visible focus state when tabbed to by a user.\n    Using the “Space” key toggles the focused checkbox between selected and\n    unselected states.\n  ")]),e._v(" "),c("p",[e._v("\n    User interface components should meet 3:1 color contrast ratio\n    requirements. This includes the border of the checkbox and the contrast\n    between a selected checkbox background and the checkmark in the checkbox.\n  ")]),e._v(" "),c("h4",[e._v("References")]),e._v(" "),c("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox"}},[e._v("https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox")]),e._v(" "),c("br"),e._v(" "),c("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}},[e._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html")])],1)}),[],!1,null,null,null);o.default=component.exports}}]);