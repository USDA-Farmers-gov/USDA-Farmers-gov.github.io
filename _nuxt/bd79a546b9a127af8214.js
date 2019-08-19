(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{242:function(e,c,o){var content=o(244);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(54).default)("12fc3ef0",content,!0,{sourceMap:!1})},243:function(e,c,o){"use strict";var t=o(242);o.n(t).a},244:function(e,c,o){(e.exports=o(53)(!1)).push([e.i,"@media only screen and (max-width:600px){.checkbox-mobile-container[data-v-13898fb2]{margin-left:3.5rem}}",""])},249:function(e,c,o){"use strict";o.r(c);var t={layout:"farmers",data:function(){return{checkboxes:[{header:"Unselected",classes:"",markup:this.outputCheckboxMarkup({label:"Checkbox Label",showDimensions:!0}),code:{background:"color: #FFFFFF;\n                      border: 2px #707070;\n                      border-radius: 2px;"}},{header:"Selected",classes:"",markup:this.outputCheckboxMarkup({label:"Checkbox Label",checked:!0}),code:{background:"color: #006546;",checkmark:"color: #FFFFFF;"}},{header:"Focused",classes:"",markup:this.outputCheckboxMarkup({label:"Checkbox Label"}),code:{background:"shadow: #1B69D3;"}},{header:"Disabled",classes:"",markup:this.outputCheckboxMarkup({label:"Checkbox Label"}),code:{background:"color: #F7F7F7;\n                      border: 2px #BBBBBB;"}}],specs:[{header:"Unselected",classes:"",markup:this.outputCardMarkup({label:"Card Checkbox"}),code:{card:"background: #FFFFFF;\n              border: 2px #BBBBBB;\n              box-shadow: 0 1px 4px 0 #BBBBBB;\n              border-radius: 2px;",checkbox:"background: #FFFFFF;\n                border: 2px #49A564;\n                border-radius: 2px;"}},{header:"Selected",classes:"",markup:this.outputCardMarkup({label:"Card Checkbox",checked:!0,showCardDimensions:!0}),code:{card:"background: #FFFFFF;\n                border: 2px #49A564;\n                box-shadow: 0 1px 4px 0 #BBBBBB;\n                border-radius: 2px;",checkbox:"background: #49A564;\n                    border-radius: 2px;"}}],specs_states:[{header:"Hover",classes:"",markup:this.outputCardMarkup({label:"Card Checkbox"}),code:{card:"border: 2px #49A564;",checkbox:"background: #FFFFFF;\n                    border: 2px #49A564;"}},{header:"Focus",classes:"",markup:this.outputCardMarkup({label:"Card Checkbox",checked:!0}),code:{card:"shadow: #1B69D3;",checkbox:"background: #49A564;\n                    checkmark: #FFFFFF;"}},{header:"Disabled",classes:"",markup:this.outputCardMarkup({label:"Card Checkbox"}),code:{card:"border: 2px #BBBBBB;",checkbox:"background: #F7F7F7;\n                    border: 2px #BBBBBB;"}}]}},methods:{outputCardMarkup:function(e){var c,o="checkbox-card card";e&&e.checked&&(c=" checked"),c&&(o+=" checked");var t='<div class="'+o+'" tabindex="-1">'+this.outputCheckboxMarkup(e)+"</div>";return e.showCardDimensions?'<div class="checkbox-card-grid">\n            <div class="top"></div>\n            <div class="bottom"></div>\n            <div class="left"></div>\n            <div class="right"></div>\n            <div class="height-span top-right"></div>\n            <div class="height-span bottom-right"></div>\n            <div class="width-span bottom-left"></div>\n            <div class="width-span bottom-right"></div>\n            <div class="height-dimension top-right">20px</div>\n            <div class="height-dimension bottom-right">20px</div>\n            <div class="width-dimension bottom-left">20px</div>\n            <div class="width-dimension bottom-right">20px</div>\n            <div class="checkbox-span checkbox-span-top"></div>\n            <div class="checkbox-span checkbox-span-left"></div>\n            <div class="checkbox-dimension checkbox-dimension-top">32px</div>\n            <div class="checkbox-dimension checkbox-dimension-left">32px</div>\n            '+t+"</div>":t},outputCheckboxMarkup:function(e){var c,o,label=e&&e.label?e.label:"Label",t="checkbox";e&&!1===e.showLabel&&(t+=" visually-hidden"),e&&e.showDimensions&&(c=" checkbox-dimensions"),e&&e.checked&&(o=" checked");var r='<input type="checkbox" name="example-1" value="Option 1" title="Option 1" tabindex="-1" '+o+'>\n        <label for="example-1" tabindex="-1" class="'+t+'">'+label+"</label>";return e.showDimensions?'<div class="checkbox-grid'+c+'">\n              <div class="checkbox-dimension-height">24 px</div>\n              <div class="checkbox-height"></div>\n              <div class="checkbox">\n                '+r+'\n              </div>\n              <div class="checkbox-width"></div>\n              <div></div>\n              <div></div>\n              <div class="checkbox-dimension-width">24 px</div>\n            </div>':r}}},r=(o(243),o(4)),component=Object(r.a)(t,function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("div",[o("h2",[e._v("Checkboxes")]),e._v(" "),o("p",{staticClass:"intro-text"},[e._v("\n    Checkboxes are used when the user can make one or more selections from a list or group of options.\n  ")]),e._v(" "),o("h3",[e._v("Form Checkboxes")]),e._v(" "),e._m(0),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label"}))}}),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label",checked:!0}))}}),e._v(" "),o("div",{staticClass:"checkbox-mobile-container"},[o("ExampleRow",{attrs:{data:e.checkboxes,columns:"4"}})],1),e._v(" "),o("h3",[e._v("Click Target")]),e._v(" "),o("p",[e._v("\n    A checkbox can be selected and deselected by clicking or tapping on the checkbox as well as the text label.\n  ")]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"medium-3 highlight-overlay",domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label"}))}})]),e._v(" "),o("div",{staticClass:"checkbox-click-target hover-hand"}),e._v(" "),o("h3",[e._v("Card Checkboxes")]),e._v(" "),e._m(1),e._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox"}))}}),e._v(" "),o("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox",checked:!0}))}})])]),e._v(" "),o("h3",[e._v("Specs")]),e._v(" "),o("p",[e._v("\n    Card height and width are flexible based on specific use cases. The cards are most commonly used in a ⅓ or ¼ grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below.\n  ")]),e._v(" "),o("ExampleRow",{attrs:{data:e.specs,columns:"3"}}),e._v(" "),o("ExampleRow",{attrs:{data:e.specs_states,columns:"3"}}),e._v(" "),o("h3",[e._v("Click Target")]),e._v(" "),o("p",[e._v("\n    The entire card in card checkboxes should be clickable.\n  ")]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"medium-4"},[o("div",{staticClass:"highlight-overlay",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox"}))}})])]),e._v(" "),o("div",{staticClass:"checkbox-card-click-target hover-hand"}),e._v(" "),o("h3",[e._v("Accessibility")]),e._v(" "),o("p",[e._v("\n    Checkboxes should show a visible focus state when tabbed to by a user. Using the “Space” key toggles the focused checkbox between selected and unselected states. \n  ")]),e._v(" "),o("p",[e._v("\n    User interface components should meet 3:1 color contrast ratio requirements. This includes the border of the checkbox and the contrast between a selected checkbox background and the checkmark in the checkbox. \n  ")]),e._v(" "),o("h4",[e._v("References")]),e._v(" "),o("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox"}},[e._v("https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox")]),e._v(" "),o("br"),e._v(" "),o("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}},[e._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html")])],1)},[function(){var e=this.$createElement,c=this._self._c||e;return c("p",[this._v("\n    This style of checkboxes is commonly used in forms. Users can select one or more options. If only one option can be selected, use "),c("a",{attrs:{href:"#"}},[this._v("radio buttons")]),this._v(". Checkbox icons and their labels should be left-aligned and vertical for better scannability when appropriate.\n  ")])},function(){var e=this.$createElement,c=this._self._c||e;return c("p",[this._v("\n    Card checkboxes are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can select one or more options. If only one option can be selected, use "),c("a",{attrs:{href:"#"}},[this._v("card radio buttons")]),this._v(".\n  ")])}],!1,null,"13898fb2",null);c.default=component.exports}}]);