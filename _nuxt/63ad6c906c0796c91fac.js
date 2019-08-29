(window.webpackJsonp=window.webpackJsonp||[]).push([[19,8],{250:function(e,o,n){"use strict";n.r(o);var t=[{text:"Option 1",value:"01"},{text:"Option 2",value:"02"},{text:"Option 3",value:"03"},{text:"Option 4",value:"04"},{text:"Option 5",value:"05"},{text:"Option 6",value:"06"},{text:"Option 7",value:"07"},{text:"Option 8",value:"08"}],d={dropdownSingle:function(){return d.getDropdownMarkup("Dropdown Label",t)},dropdownDimensions:function(){return d.getDropdownMarkup("Dropdown Label",t,{showDimensions:!0})},dropdownHighlight:function(){return d.getDropdownMarkup("Dropdown Label",t,{highlight:!0})},dropdownSpecs:function(){return[{code:{dropdown_label:"font-family: Public Sans;\n                              font-size: 16px;\n                              line-height: 26px;\n                              color: #212121;\n                              font-weight: regular;"}},{code:{dropdown_box:"background: #FFFFFF;\n                            border: 1px #707070;\n                            border-radius: 2px;"}},{code:{dropdown_box_text:"font-family: Public Sans\n                                font-size: 16px;\n                                line-height: 20px;\n                                color: #212121;\n                                font-weight: bold;"}}]},dropDownStates:function(){return[{header:"Hover",markup:d.getDropdownMarkup("Dropdown Label",t,{selectClasses:"hover"}),code:{dropdown_box:"background: #DBEDE0;\n                        border: 1px #212121;"}},{header:"Focus",markup:d.getDropdownMarkup("Dropdown Label",t,{selectClasses:"focus"}),code:{dropdown_box:"shadow: #1B69D3;"}},{header:"Disabled",markup:d.getDropdownMarkup("Dropdown Label",t,{selectClasses:"disabled"}),code:{dropdown_box:"background: #F7F7F7;\n                          border: 1px #BBBBBB;",dropdown_box_text:"color: #BBBBBB;"}}]},getDropdownMarkup:function(label,e,o,n){var t='<label for="scl-select-one" class="'+(o&&o.labelClasses?o.labelClasses:"")+'">'+label+"</label>",d='<select class="'+(o&&o.selectClasses?"simpler-select scl-select "+o.selectClasses:"simpler-select scl-select")+'" name="'+label+'" tabindex="-1">\n                <option>- Please select -</option>';e.forEach(function(element){d=d+'<option value="'+element.value+'">'+element.text+"</option>"}),d+="</select>";var l=t+(o&&o.highlight?'<div class="highlight-overlay">'+d+'<div class="highlight-pointer mouse-pointer"></div>\n                                  </div>':d);return o&&o.showDimensions?'<div class="dropdown-grid">\n                              <div class="label-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="label-span span-red span-red-horizontal"></div>\n                              <div class="label-dimension dimension-red dimension-red-horizontal">4px</div>\n\n                              <div class="select-top-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="select-top-span span-red span-red-horizontal"></div>\n                              <div class="select-top-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                              <div class="select-bottom dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="select-bottom span span-red span-red-horizontal"></div>\n                              <div class="select-bottom dimension dimension-red dimension-red-horizontal">16px</div>\n\n                              <div class="bottom-left-dashed dashed-blue dashed-blue-vertical"></div>\n                              <div class="bottom-left-span span-blue span-blue-vertical"></div>\n                              <div class="bottom-left-dimension dimension-blue dimension-blue-vertical">16px</div>\n\n                              <div class="bottom-right-dashed dashed-blue dashed-blue-vertical"></div>\n                              <div class="bottom-right-span span-blue span-blue-vertical"></div>\n                              <div class="bottom-right-dimension dimension-blue dimension-blue-vertical">16px</div>\n                              \n                              <div class="select-left-span span-red span-red-horizontal"></div>\n                              <div class="select-left-dimension dimension-red dimension-red-horizontal">52px</div>\n                              '+l+"\n                              </div>":l}};o.default=d},262:function(e,o,n){"use strict";n.r(o);var t=n(250),d={layout:"farmers",head:function(){return{title:"Dropdowns"}},data:function(){return{dropdown_single:t.default.dropdownSingle(),dropdown_dimensions:t.default.dropdownDimensions(),dropdown_highlight:t.default.dropdownHighlight(),dropdown_specs:t.default.dropdownSpecs(),dropdown_states:t.default.dropDownStates()}}},l=n(4),component=Object(l.a)(d,function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("h2",[e._v("Dropdowns")]),e._v(" "),n("p",{staticClass:"intro-text"},[e._v("\n    Dropdowns allow users to make a single selection from a list of options. They are best used when a user needs to make a choice from a long list of items.\n  ")]),e._v(" "),n("p",[e._v("\n    If there are less than 7 options, consider using "),n("nuxt-link",{attrs:{to:"/ui/RadioButtons"}},[e._v("radio buttons")]),e._v(". Each option should not go over one line of text. “Please select” should be used as the default placeholder text in dropdowns unless there is a recommended option a user should choose. If there is a recommended option, such as a selection that is most commonly used, make this the default selection.\n  ")],1),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.dropdown_single)}})]),e._v(" "),n("h3",[e._v("Specs")]),e._v(" "),n("p",[e._v("\n    The width of the dropdown box can vary based on layout. However, it should follow the grid system and the specs outlined below. The height of the dropdown may be flexible depending on use cases.\n  ")]),e._v(" "),n("p",[e._v("\n    Dropdown menu list design should use the native style of the users’ system. Customization can be done depending on use cases.\n  ")]),e._v(" "),n("h3",[e._v("Default")]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"medium-12",domProps:{innerHTML:e._s(e.dropdown_dimensions)}})]),e._v(" "),n("ExampleRow",{attrs:{data:e.dropdown_specs,columns:"4"}}),e._v(" "),n("ExampleRow",{attrs:{data:e.dropdown_states,columns:"3"}}),e._v(" "),n("h3",[e._v("Click Target")]),e._v(" "),n("p",[e._v("\n    The entire dropdown field box should be clickable.\n  ")]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"medium-5",domProps:{innerHTML:e._s(e.dropdown_highlight)}})]),e._v(" "),n("h4",[e._v("Accessibility")]),e._v(" "),n("p",[e._v("\n    A label should always be present with a dropdown. The label should not be replaced with the dropdown box text.\n  ")]),e._v(" "),n("p",[e._v("\n  User interface components should meet 3:1 color contrast ratio requirements. This includes the contrast of the border of the dropdown to the background.\n  ")]),e._v(" "),e._m(0)],1)},[function(){var e=this.$createElement,o=this._self._c||e;return o("p",[o("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}},[this._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html")]),this._v(" "),o("br"),this._v(" "),o("a",{attrs:{href:"https://designsystem.digital.gov/components/form-controls/#dropdown"}},[this._v("https://designsystem.digital.gov/components/form-controls/#dropdown")])])}],!1,null,null,null);o.default=component.exports}}]);