(window.webpackJsonp=window.webpackJsonp||[]).push([[23,10],{254:function(e,t,o){"use strict";o.r(t);o(57);var d=o(38),n={buttonsDefault:function(){return[{markup:n.outputRadioButtonMarkup({label:"Radio Label",name:"default"})},{markup:n.outputRadioButtonMarkup({label:"Radio Label",name:"default",checked:!0})}]},radioButtons:function(){return[{header:"Unselected",markup:n.outputRadioButtonMarkup({label:"Radio Label",showDimensions:!0}),code:{background:"color: #FFFFFF;\n                              border: 2px #707070;"}},{header:"Selected",markup:n.outputRadioButtonMarkup({label:"Radio Label",checked:!0}),code:{background:"color: #006546;\n                              border: 2px #006546;"}},{header:"Focused",markup:n.outputRadioButtonMarkup({label:"Radio Label",labelClasses:"focus",checked:!0}),code:{background:"shadow: #1B69D3;"}},{header:"Disabled",markup:n.outputRadioButtonMarkup({label:"Radio Label",disabled:!0}),code:{background:"color: #F7F7F7;\n                              border: 2px #BBBBBB;"}}]},specs:function(){return[{header:"Unselected",classes_cell:"dimension-margins",markup:n.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"specs-1"}),code:{card:"background: #FFFFFF;\n                      border: 2px #BBBBBB;\n                      box-shadow: 0 1px 4px 0 #BBBBBB;\n                      border-radius: 2px;",radio_button:"background: #FFFFFF;\n                      border: 2px #49A564;"}},{header:"Selected",markup:n.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"specs-1",checked:!0,showCardDimensions:!0}),code:{card:"background: #FFFFFF;\n                    border: 2px #49A564;\n                    box-shadow: 0 1px 4px 0 #BBBBBB;\n                    border-radius: 2px;",radio_button:"background: #49A564;\n                    border-radius: 2px;"}}]},specsStates:function(){return[{header:"Hover",markup:n.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"specs-2",hover:!0}),code:{card:"border: 2px #49A564;",radio_button:"background: #FFFFFF;\n                        border: 2px #49A564;"}},{header:"Focus",markup:n.outputCardMarkup({label:"Card Radio Button",labelClasses:"focus",image:"/images/MFP2-icon.jpg",name:"specs-2",checked:!0}),code:{card:"shadow: #1B69D3;",radio_button:"background: #49A564;\n                        border-radius: 2px;"}},{header:"Disabled",markup:n.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"specs-2",disabled:!0}),code:{card:"border: 2px #BBBBBB;",radio_button:"background: #F7F7F7;\n                        border: 2px #BBBBBB;"}}]},outputCardMarkup:function(e){var t="radio-card-label",o="";e&&e.image&&(t+=" with-image"),e&&e.card_classes&&(t=t+" "+e.card_classes),e&&e.checked&&(o=" checked",t+=" checked"),e&&e.hover&&(t+=" checked"),e&&e.labelClasses&&(t=t+" "+e.labelClasses),e&&e.disabled&&(t+=" disabled ");var n=e&&e.name?e.name:"radio-example-"+d.a.randomNumber(),r='<label tabindex="0" for="radio-card-3" class="'+t+'">';e.image&&(r=r+'<div class="radio-img-card-top">\n                                        <img src="'+e.image+'">\n                                      </div>');var c='<input type="radio" id="radio-card-2" class="radio-card-input" name="'+n+'" title="'+e.label+'" tabindex="0"'+o+">\n           "+e.label+'\n           <span class="radio-icon"></span>';return r+=e.image?'<div class="radio-img-card-bottom">'+c+"</div>":c,e.showCardDimensions?'<div class="checkbox-radio-card-grid">\n          <div class="checkbox-radio-card-top dashed-red dashed-red-horizontal"></div>\n          <div class="checkbox-radio-card-bottom dashed-red dashed-red-horizontal"></div>\n\n          <div class="checkbox-radio-card-left dashed-blue dashed-blue-vertical"></div>\n          <div class="checkbox-radio-card-right dashed-blue dashed-blue-vertical"></div>\n\n          <div class="height-span top-right span-red span-red-horizontal"></div>\n          <div class="height-span bottom-right span-red span-red-horizontal"></div>\n\n          <div class="width-span bottom-left span-blue span-blue-vertical"></div>\n          <div class="width-span bottom-right span-blue span-blue-vertical"></div>\n\n          <div class="height-dimension top-right dimension-red">20px</div>\n          <div class="height-dimension bottom-right dimension-red">20px</div>\n\n          <div class="width-dimension bottom-left dimension-blue">20px</div>\n          <div class="width-dimension bottom-right dimension-blue">20px</div>\n\n          <div class="checkbox-radio-span checkbox-radio-span-top span-blue span-blue-vertical"></div>\n          <div class="checkbox-radio-span checkbox-radio-span-left span-red span-red-horizontal"></div>\n\n          <div class="checkbox-radio-dimension-top dimension-blue">32px</div>\n          <div class="checkbox-radio-dimension-left dimension-red">32px</div>\n          <div class="checkbox-radio-card">'+r+"</div>\n          </div>":r},outputRadioButtonMarkup:function(e){var label=e&&e.label?e.label:"Label",t="radio-label",o=e&&e.showDimensions?" checkbox-radio-dimensions":"",n="radio-input-"+d.a.randomNumber(),r=e&&e.checked?" checked":"",c=e&&e.disabled?" disabled":"",l=e&&e.name?e.name:"radio-button-"+d.a.randomNumber();e&&!1===e.showLabel&&(t+=" visually-hidden"),e&&e.labelClasses&&(t=t+" "+e.labelClasses);var h='<input type="radio" class="radio-input" name="'+l+'" id="'+n+'" value="1"'+r+c+'>\n      <label for="'+n+'" class="'+t+'" tabindex="0">'+label+"</label>";return e.showDimensions?'<div class="checkbox-radio-grid'+o+'">\n              <div class="dimension-red dimension-red-horizontal">24 px</div>\n              <div class="checkbox-radio-height span-red span-red-horizontal"></div>\n              <div class="checkbox">\n                '+h+'\n              </div>\n              <div class="checkbox-radio-width span-blue span-blue-vertical"></div>\n              <div class="checkbox-radio-width-dimension dimension-blue dimension-blue-vertical">24 px</div>\n            </div>':h}};t.default=n},257:function(e,t,o){"use strict";o.r(t);var d=o(254),n=(o(38),{layout:"farmers",head:function(){return{title:"Radio Buttons"}},data:function(){return{buttons_default:d.default.buttonsDefault(),radio_buttons:d.default.radioButtons(),specs:d.default.specs(),specs_states:d.default.specsStates()}},methods:{outputCardMarkup:function(e){return d.default.outputCardMarkup(e)},outputRadioButtonMarkup:function(e){return d.default.outputRadioButtonMarkup(e)}}}),r=o(4),component=Object(r.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Radio Buttons")]),e._v(" "),o("p",{staticClass:"intro-text"},[e._v("\n    Radio buttons are used when the user can only make one selection from a list or group of options.\n  ")]),e._v(" "),o("h3",[e._v("Form Radio Buttons")]),e._v(" "),o("p",[e._v("\n    This style of radio buttons is commonly used in forms. All available options are visible. Users can only make a single selection. If users can make more than one selection, use checkboxes. Radio button icons and their labels should be left-aligned and vertical for better scannability when appropriate.\n  ")]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.outputRadioButtonMarkup({label:"Radio Label",name:"default"}))}}),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.outputRadioButtonMarkup({label:"Radio Label",name:"default",checked:!0}))}}),e._v(" "),o("div",{staticClass:"checkbox-radio-mobile-container"},[o("ExampleRow",{attrs:{data:e.radio_buttons,itemClasses:[{index:0,classes:"checkbox-grid-container"}],columns:"4"}})],1),e._v(" "),o("h3",[e._v("Click Target")]),e._v(" "),o("p",[e._v("\n    A radio button can be selected and deselected by clicking or tapping on the radio button as well as the text label.\n  ")]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"medium-3 checkbox-radio-click-target highlight-overlay",domProps:{innerHTML:e._s(e.outputRadioButtonMarkup({label:"Radio Label"}))}})]),e._v(" "),o("div",{staticClass:"checkbox-radio-click-target mouse-pointer"}),e._v(" "),o("h3",{attrs:{id:"card-radio-buttons"}},[e._v("Card Radio Buttons")]),e._v(" "),o("p",[e._v("\n    Card radio buttons are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can only make a single selection. If users can make more than one selection, use "),o("nuxt-link",{attrs:{to:"/ui/Checkboxes"}},[e._v("checkboxes")]),e._v(".\n  ")],1),e._v(" "),o("div",{staticClass:"row row-click-target"},[o("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Radio Button",name:"click-target"}))}}),e._v(" "),o("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Radio Button",name:"click-target",checked:!0}))}})]),e._v(" "),o("h3",[e._v("Specs")]),e._v(" "),o("p",[e._v("\n    Card height and width are flexible based on specific use cases. The cards are most commonly used in a ⅓ or ¼ grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below. \n  ")]),e._v(" "),o("ExampleRow",{attrs:{data:e.specs,columns:"3"}}),e._v(" "),o("ExampleRow",{attrs:{data:e.specs_states,columns:"3"}}),e._v(" "),o("h3",[e._v("Click Target")]),e._v(" "),o("p",[e._v("\n    The entire card in card radio buttons should be clickable.\n  ")]),e._v(" "),o("div",{staticClass:"card-highlight"},[o("div",{staticClass:"highlight-overlay",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Radio Button"}))}})]),e._v(" "),o("div",{staticClass:"checkbox-radio-card-click-target mouse-pointer"}),e._v(" "),o("h3",[e._v("Accessibility")]),e._v(" "),e._m(0),e._v(" "),o("p",[e._v("\n    User interface components should meet 3:1 color contrast ratio requirements. This includes the border of the radio button and the contrast between a selected radio button background and the filled circle in the radio button. \n  ")]),e._v(" "),o("h4",[e._v("References")]),e._v(" "),e._m(1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n    Radio button functionality must be available through "),t("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton"}},[this._v("keyboard interactions")]),this._v(".\n  ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton"}},[this._v("https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton")]),this._v(" "),t("br"),this._v(" "),t("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}},[this._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html")])])}],!1,null,null,null);t.default=component.exports}}]);