(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{213:function(e,o,d){"use strict";d.r(o);var t=d(17),r={default:function(){return[{header:"Unselected",markup:r.outputCheckboxMarkup({label:"Checkbox Label",showDimensions:!0}),code:{Background:"color: #FFFFFF;\n                        border: 2px #707070;\n                        border-radius: 2px;"}},{header:"Selected",markup:r.outputCheckboxMarkup({label:"Checkbox Label",checked:!0}),code:{Background:"color: #006546;",Checkmark:"color: #FFFFFF;"}},{header:"Focused",markup:r.outputCheckboxMarkup({label:"Checkbox Label",labelClass:"focus"}),code:{Background:"shadow: #1B69D3;"}},{header:"Disabled",classes:"",markup:r.outputCheckboxMarkup({label:"Checkbox Label",disabled:!0}),code:{Background:"color: #F7F7F7;\n                        border: 2px #BBBBBB;"}}]},specs:function(){return[{header:"Unselected",classes_cell:"dimension-margins",markup:r.outputCardMarkup({label:"Card Checkbox",image:"/images/produce_basket.jpg"}),code:{Card:"background: #FFFFFF;\n                border: 2px #BBBBBB;\n                box-shadow: 0 1px 4px 0 #BBBBBB;\n                border-radius: 2px;",Checkbox:"background: #FFFFFF;\n                  border: 2px #49A564;\n                  border-radius: 2px;"}},{header:"Selected",markup:r.outputCardMarkup({label:"Card Checkbox",image:"/images/produce_basket.jpg",checked:!0,showCardDimensions:!0}),code:{Card:"background: #FFFFFF;\n                  border: 2px #49A564;\n                  box-shadow: 0 1px 4px 0 #BBBBBB;\n                  border-radius: 2px;",Checkbox:"background: #49A564;\n                      border-radius: 2px;"}}]},specsStates:function(){return[{header:"Hover",markup:r.outputCardMarkup({label:"Card Checkbox",hover:!0,image:"/images/produce_basket.jpg"}),code:{Card:"border: 2px #49A564;",Checkbox:"background: #FFFFFF;\n                      border: 2px #49A564;"}},{header:"Focus",markup:r.outputCardMarkup({label:"Card Checkbox",labelClasses:"focus",image:"/images/produce_basket.jpg",checked:!0}),code:{Card:"shadow: #1B69D3;",Checkbox:"background: #49A564;\n                      checkmark: #FFFFFF;"}},{header:"Disabled",markup:r.outputCardMarkup({label:"Card Checkbox",image:"/images/produce_basket.jpg",disabled:!0}),code:{Card:"border: 2px #BBBBBB;",Checkbox:"background: #F7F7F7;\n                      border: 2px #BBBBBB;"}}]},outputCardMarkup:function(data){var e=data&&!1===data.tabindex?'tabindex="-1"':'tabindex="0"',o="checkbox-card-label",d="",r="",c=data&&data.id?data.id:"checkbox-card-"+t.a.randomNumber();data&&data.image&&(o=t.a.setClasses(o," with-image")),data&&data.hover&&(o=t.a.setClasses(o," checked")),data&&data.labelClasses&&(o=t.a.setClasses(o,data.labelClasses)),data&&data.checked&&(d=" checked",o+=" checked"),data&&data.disabled&&(r=" disabled",o+=" disabled ");var n='<label for="'+c+'" class="'+o+'"'+e+">";data.image&&(n=n+'<div class="cb-img-card-top">\n                                          <img src="'+data.image+'">\n                                        </div>');var l='<input type="checkbox" id="'+c+'" class="checkbox-card-input" title="'+data.label+'"'+e+d+r+">"+data.label+'\n                    <span class="cb-icon"></span>';return n+=data.image?'<div class="cb-img-card-bottom">'+l+"</div>":l,data.showCardDimensions?'<div class="checkbox-radio-card-grid">\n            <div class="checkbox-radio-card">'+n+'</div>\n            <div class="checkbox-radio-card-top dashed-red dashed-red-horizontal"></div>\n            <div class="checkbox-radio-card-bottom dashed-red dashed-red-horizontal"></div>\n\n            <div class="checkbox-radio-card-left dashed-blue dashed-blue-vertical"></div>\n            <div class="checkbox-radio-card-right dashed-blue dashed-blue-vertical"></div>\n\n            <div class="height-span top-right span-red span-red-horizontal"></div>\n            <div class="height-span bottom-right span-red span-red-horizontal"></div>\n\n            <div class="width-span bottom-left span-blue span-blue-vertical"></div>\n            <div class="width-span bottom-right span-blue span-blue-vertical"></div>\n\n            <div class="height-dimension top-right dimension-red">20px</div>\n            <div class="height-dimension bottom-right dimension-red">20px</div>\n\n            <div class="width-dimension bottom-left dimension-blue">20px</div>\n            <div class="width-dimension bottom-right dimension-blue">20px</div>\n\n            <div class="checkbox-radio-span checkbox-radio-span-top span-blue span-blue-vertical"></div>\n            <div class="checkbox-radio-span checkbox-radio-span-left span-red span-red-horizontal"></div>\n\n            <div class="checkbox-radio-dimension-top dimension-blue">32px</div>\n            <div class="checkbox-radio-dimension-left dimension-red">32px</div>\n          </div>':n},outputCheckboxMarkup:function(data){var e=data&&data.id?data.id:"checkbox-"+t.a.randomNumber(),o=data&&!1===data.tabindex?'tabindex="-1"':'tabindex="0"',label=data&&data.label?data.label:"Label",d="checkbox-label",r="",c="",n="";data&&!1===data.showLabel&&(d=t.a.setClasses(d," visually-hidden")),data&&data.labelClass&&(d=t.a.setClasses(d,data.labelClass)),data&&data.showDimensions&&(r=" checkbox-radio-dimensions"),data&&data.checked&&(c=" checked "),data&&data.disabled&&(n=" disabled ");var l='<input id="'+e+'" type="checkbox" name="example" value="Option" title="Option"'+c+n+' class="checkbox-input">\n        <label for="'+e+'"'+o+' class="'+d+'">'+label+"</label>";return data.showDimensions?'<div class="checkbox-radio-grid'+r+'">\n              <div class="dimension-red dimension-red-horizontal">24 px</div>\n              <div class="checkbox-radio-height span-red span-red-horizontal"></div>\n              <div class="checkbox">\n                '+l+'\n              </div>\n              <div class="checkbox-radio-width span-blue span-blue-vertical"></div>\n              <div class="checkbox-radio-width-dimension dimension-blue dimension-blue-vertical">24 px</div>\n            </div>':l}},c=r,n={layout:"farmers",head:function(){return{title:"Checkboxes"}},data:function(){return{data:c}},methods:{outputCardMarkup:function(e){return c.outputCardMarkup(e)},outputCheckboxMarkup:function(e){return c.outputCheckboxMarkup(e)}}},l=d(2),component=Object(l.a)(n,function(){var e=this,o=e.$createElement,d=e._self._c||o;return d("div",[d("h2",[e._v("Checkboxes")]),e._v(" "),d("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    Checkboxes are used when the user can make one or more selections from a list or group of options.\n  ")]),e._v(" "),d("h3",[e._v("Form Checkboxes")]),e._v(" "),d("p",[e._v("\n    This style of checkboxes is commonly used in forms. Users can select one or more options. If only one option can be selected, use "),d("nuxt-link",{attrs:{to:"/ui/RadioButtons"}},[e._v("radio buttons")]),e._v(". Checkbox icons and their labels should be left-aligned and vertical for better scannability when appropriate.\n  ")],1),e._v(" "),d("p",{domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label"}))}}),e._v(" "),d("p",{domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label",checked:!0}))}}),e._v(" "),d("div",{staticClass:"checkbox-radio-mobile-container"},[d("ExampleRow",{attrs:{data:e.data.default(),"item-classes":[{index:0,classes:"checkbox-grid-container"}],columns:"4"}})],1),e._v(" "),d("Code",{attrs:{markup:e.outputCheckboxMarkup({label:"Checkbox Label"})}}),e._v(" "),d("h4",[e._v("Click Target")]),e._v(" "),d("p",[e._v("\n    A checkbox can be selected and deselected by clicking or tapping on the checkbox as well as the text label.\n  ")]),e._v(" "),d("div",{staticClass:"row"},[d("div",{staticClass:"medium-3 checkbox-radio-click-target highlight-overlay",domProps:{innerHTML:e._s(e.outputCheckboxMarkup({label:"Checkbox Label"}))}}),e._v(" "),d("div",{staticClass:"checkbox-radio-click-target mouse-pointer"})]),e._v(" "),d("h3",[e._v("Card Checkboxes")]),e._v(" "),d("p",[e._v("\n    Card checkboxes are used in interactive tools. The element allows space for icons when appropriate, as well as typographical hierarchy. The entire card is a large touch/click target which minimizes user input error and allows for an easier interaction on a mobile device. Users can select one or more options. If only one option can be selected, use "),d("nuxt-link",{attrs:{to:"/ui/RadioButtons#card-radio-buttons"}},[e._v("card radio buttons")]),e._v(".\n  ")],1),e._v(" "),d("div",{staticClass:"container examples text-margin-bottom"},[d("div",{staticClass:"row"},[d("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox"}))}}),e._v(" "),d("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox",checked:!0}))}})])]),e._v(" "),d("h3",[e._v("Specs")]),e._v(" "),d("p",[e._v("\n    Card height and width are flexible based on specific use cases. The cards are most commonly used in a ⅓ or ¼ grid layout. Icons can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below.\n  ")]),e._v(" "),d("ExampleRow",{attrs:{data:e.data.specs(),columns:"3"}}),e._v(" "),d("ExampleRow",{attrs:{data:e.data.specsStates(),columns:"3"}}),e._v(" "),d("Code",{attrs:{markup:e.data.outputCardMarkup({label:"Card Checkbox",hover:!0,image:"/images/produce_basket.jpg"})}}),e._v(" "),d("h3",[e._v("Click Target")]),e._v(" "),d("p",[e._v("\n    The entire card in card checkboxes should be clickable.\n  ")]),e._v(" "),d("div",{staticClass:"card-highlight text-margin-bottom"},[d("div",{staticClass:"highlight-overlay",domProps:{innerHTML:e._s(e.outputCardMarkup({label:"Card Checkbox"}))}}),e._v(" "),d("div",{staticClass:"checkbox-radio-card-click-target mouse-pointer"})]),e._v(" "),d("h3",[e._v("Accessibility")]),e._v(" "),d("p",[e._v("\n    Checkboxes should show a visible focus state when tabbed to by a user. Using the “Space” key toggles the focused checkbox between selected and unselected states. \n  ")]),e._v(" "),d("p",[e._v("\n    User interface components should meet 3:1 color contrast ratio requirements. This includes the border of the checkbox and the contrast between a selected checkbox background and the checkmark in the checkbox. \n  ")]),e._v(" "),d("h4",[e._v("References")]),e._v(" "),d("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox"}},[e._v("https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox")]),e._v(" "),d("br"),e._v(" "),d("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}},[e._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html")])],1)},[],!1,null,null,null);o.default=component.exports}}]);