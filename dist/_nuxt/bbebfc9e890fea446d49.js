(window.webpackJsonp=window.webpackJsonp||[]).push([[34,15],{215:function(e,t,o){"use strict";o.r(t);o(58);var d=o(22),n={buttonsDefault:function(){return[{markup:n.outputRadioButtonMarkup({label:"Radio Label",name:"default"})},{markup:n.outputRadioButtonMarkup({label:"Radio Label",name:"default",checked:!0})}]},radioButtons:function(){return[{header:"Unselected",markup:n.outputRadioButtonMarkup({label:"Radio Label",showDimensions:!0}),code:{Background:"color: #FFFFFF;\n                              border: 2px #707070;"}},{header:"Selected",markup:n.outputRadioButtonMarkup({label:"Radio Label",checked:!0}),code:{Background:"color: #006546;\n                              border: 2px #006546;"}},{header:"Focused",markup:n.outputRadioButtonMarkup({label:"Radio Label",labelClasses:"focus",checked:!0}),code:{Background:"shadow: #1B69D3;"}},{header:"Disabled",markup:n.outputRadioButtonMarkup({label:"Radio Label",disabled:!0}),code:{Background:"color: #F7F7F7;\n                              border: 2px #BBBBBB;"}}]},specs:function(){return[{header:"Unselected",classes_cell:"dimension-margins",markup:n.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"specs-1"}),code:{Card:"background: #FFFFFF;\n                      border: 2px #BBBBBB;\n                      box-shadow: 0 1px 4px 0 #BBBBBB;\n                      border-radius: 2px;","Radio Button":"background: #FFFFFF;\n                      border: 2px #49A564;"}},{header:"Selected",markup:n.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"specs-1",checked:!0,showCardDimensions:!0}),code:{Card:"background: #FFFFFF;\n                    border: 2px #49A564;\n                    box-shadow: 0 1px 4px 0 #BBBBBB;\n                    border-radius: 2px;","Radio Button":"background: #49A564;\n                    border-radius: 2px;"}}]},specsStates:function(){return[{header:"Hover",markup:n.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"specs-2",hover:!0}),code:{Card:"border: 2px #49A564;","Radio Button":"background: #FFFFFF;\n                        border: 2px #49A564;"}},{header:"Focus",markup:n.outputCardMarkup({label:"Card Radio Button",labelClasses:"focus",image:"/images/MFP2-icon.jpg",name:"specs-2",checked:!0}),code:{Card:"shadow: #1B69D3;","Radio Button":"background: #49A564;\n                        border-radius: 2px;"}},{header:"Disabled",markup:n.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"specs-2",disabled:!0}),code:{Card:"border: 2px #BBBBBB;","Radio Button":"background: #F7F7F7;\n                        border: 2px #BBBBBB;"}}]},outputCardMarkup:function(data){var e="radio-card-label",t="",o=data&&data.tabindex?"":' tabindex="-1"';data&&data.image&&(e=d.a.setClasses(e,"with-image")),data&&data.card_classes&&(e=d.a.setClasses(e,data.card_classes)),data&&data.hover&&(e=d.a.setClasses(e,"checked")),data&&data.labelClasses&&(e=d.a.setClasses(e,data.labelClasses)),data&&data.disabled&&(e=d.a.setClasses(e,"disabled")),data&&data.checked&&(t=" checked",e+=" checked");var n=data&&data.name?data.name:"radio-example-"+d.a.randomNumber(),r=data&&data.id?data.id:"radio-card-"+d.a.randomNumber(),c="<label"+o+' for="'+r+'" class="'+e+'">';data.image&&(c=c+'<div class="radio-img-card-top">\n                                        <img src="'+data.image+'">\n                                      </div>');var l='<input type="radio" id="'+r+'" class="radio-card-input" name="'+n+'" title="'+data.label+'"'+o+t+"> "+data.label+'\n           <span class="radio-icon"></span>';return c+=data.image?'<div class="radio-img-card-bottom">'+l+"</div>":l,data.showCardDimensions?'<div class="checkbox-radio-card-grid">\n          <div class="checkbox-radio-card">'+c+'</div>\n          <div class="checkbox-radio-card-top dashed-red dashed-red-horizontal"></div>\n          <div class="checkbox-radio-card-bottom dashed-red dashed-red-horizontal"></div>\n\n          <div class="checkbox-radio-card-left dashed-blue dashed-blue-vertical"></div>\n          <div class="checkbox-radio-card-right dashed-blue dashed-blue-vertical"></div>\n\n          <div class="height-span top-right span-red span-red-horizontal"></div>\n          <div class="height-span bottom-right span-red span-red-horizontal"></div>\n\n          <div class="width-span bottom-left span-blue span-blue-vertical"></div>\n          <div class="width-span bottom-right span-blue span-blue-vertical"></div>\n\n          <div class="height-dimension top-right dimension-red">20px</div>\n          <div class="height-dimension bottom-right dimension-red">20px</div>\n\n          <div class="width-dimension bottom-left dimension-blue">20px</div>\n          <div class="width-dimension bottom-right dimension-blue">20px</div>\n\n          <div class="checkbox-radio-span checkbox-radio-span-top span-blue span-blue-vertical"></div>\n          <div class="checkbox-radio-span checkbox-radio-span-left span-red span-red-horizontal"></div>\n\n          <div class="checkbox-radio-dimension-top dimension-blue">32px</div>\n          <div class="checkbox-radio-dimension-left dimension-red">32px</div>\n        </div>':c},outputRadioButtonMarkup:function(data){var e="radio-input-"+d.a.randomNumber(),t=data&&data.name?data.name:"radio-button-"+d.a.randomNumber(),o="radio-label",label=data&&data.label?data.label:"Label",n=data&&data.showDimensions?" checkbox-radio-dimensions":"",r=data&&data.checked?" checked":"",c=data&&data.disabled?" disabled":"",l=data&&data.tabindex?"":' tabindex="0"';data&&!1===data.showLabel&&(o=d.a.setClasses(o," visually-hidden")),data&&data.labelClasses&&(o=d.a.setClasses(o,data.labelClasses));var h='<input type="radio" class="radio-input" name="'+t+'" id="'+e+'" value="1"'+r+c+'>\n      <label for="'+e+'" class="'+o+'"'+l+">"+label+"</label>";return data.showDimensions?'<div class="checkbox-radio-grid'+n+'">\n              <div class="dimension-red dimension-red-horizontal">24 px</div>\n              <div class="checkbox-radio-height span-red span-red-horizontal"></div>\n              <div class="checkbox">\n                '+h+'\n              </div>\n              <div class="checkbox-radio-width span-blue span-blue-vertical"></div>\n              <div class="checkbox-radio-width-dimension dimension-blue dimension-blue-vertical">24 px</div>\n            </div>':h}};t.default=n},228:function(e,t,o){"use strict";o.r(t);var d=o(215),n=(o(22),{layout:"farmers",head:function(){return{title:"Radio Buttons"}},data:function(){return{data:d.default}},methods:{outputCardMarkup:function(e){return d.default.outputCardMarkup(e)},outputRadioButtonMarkup:function(e){return d.default.outputRadioButtonMarkup(e)}}}),r=o(2),component=Object(r.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Radio Buttons")]),e._v(" "),o("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    Radio buttons are used when the user can only make one selection from a list or group of options.\n  ")]),e._v(" "),o("h3",[e._v("Form Radio Buttons")]),e._v(" "),o("p",[e._v("\n    This style of radio buttons is commonly used in forms. All available options are visible. Users can only make a single selection. If users can make more than one selection, use checkboxes. Radio button icons and their labels should be left-aligned and vertical for better scannability when appropriate.\n  ")]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.outputRadioButtonMarkup({label:"Radio Label",name:"default"}))}}),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.outputRadioButtonMarkup({label:"Radio Label",name:"default",checked:!0}))}}),e._v(" "),o("div",{staticClass:"checkbox-radio-mobile-container"},[o("ExampleRow",{attrs:{data:e.data.radioButtons(),"item-classes":[{index:0,classes:"checkbox-grid-container"}],columns:"4"}})],1),e._v(" "),o("Code",{attrs:{markup:e.outputRadioButtonMarkup({label:"Radio Label",name:"default",checked:!0,tabindex:!0})}}),e._v(" "),o("h4",[e._v("Click Target")]),e._v(" "),o("p",[e._v("\n    A radio button can be selected and deselected by clicking or tapping on the radio button as well as the text label.\n  ")]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"medium-3 checkbox-radio-click-target highlight-overlay",domProps:{innerHTML:e._s(e.outputRadioButtonMarkup({label:"Radio Label"}))}}),e._v(" "),o("div",{staticClass:"checkbox-radio-click-target mouse-pointer text-margin-bottom"})]),e._v(" "),o("h3",{attrs:{id:"card-radio-buttons"}},[e._v("Card Radio Buttons")]),e._v(" "),o("p",[e._v("\n    Card radio buttons are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can only make a single selection. If users can make more than one selection, use "),o("nuxt-link",{attrs:{to:"/ui/Checkboxes"}},[e._v("checkboxes")]),e._v(".\n  ")],1),e._v(" "),o("div",{staticClass:"row row-click-target"},[o("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Radio Button",name:"click-target"}))}}),e._v(" "),o("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Radio Button",name:"click-target",checked:!0}))}})]),e._v(" "),o("h3",[e._v("Specs")]),e._v(" "),o("p",[e._v("\n    Card height and width are flexible based on specific use cases. The cards are most commonly used in a ⅓ or ¼ grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below. \n  ")]),e._v(" "),o("ExampleRow",{attrs:{data:e.data.specs(),columns:"3"}}),e._v(" "),o("ExampleRow",{attrs:{data:e.data.specsStates(),columns:"3"}}),e._v(" "),o("Code",{attrs:{markup:e.outputCardMarkup({label:"Card Radio Button",image:"/images/MFP2-icon.jpg",name:"click-target",checked:!0,tabindex:!0})}}),e._v(" "),o("h3",[e._v("Click Target")]),e._v(" "),o("p",[e._v("\n    The entire card in card radio buttons should be clickable.\n  ")]),e._v(" "),o("div",{staticClass:"card-highlight text-margin-bottom"},[o("div",{staticClass:"highlight-overlay",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Radio Button"}))}}),e._v(" "),o("div",{staticClass:"checkbox-radio-card-click-target mouse-pointer"})]),e._v(" "),o("h3",[e._v("Accessibility")]),e._v(" "),e._m(0),e._v(" "),o("p",[e._v("\n    User interface components should meet 3:1 color contrast ratio requirements. This includes the border of the radio button and the contrast between a selected radio button background and the filled circle in the radio button. \n  ")]),e._v(" "),o("h4",[e._v("References")]),e._v(" "),e._m(1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n    Radio button functionality must be available through "),t("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton"}},[this._v("keyboard interactions")]),this._v(".\n  ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton"}},[this._v("https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton")]),this._v(" "),t("br"),this._v(" "),t("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}},[this._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html")])])}],!1,null,null,null);t.default=component.exports}}]);