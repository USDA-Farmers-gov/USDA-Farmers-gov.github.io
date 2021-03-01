(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{338:function(e,o,n){"use strict";n.r(o);var t=n(25),d=[{text:"Option 1",value:"01"},{text:"Option 2",value:"02"},{text:"Option 3",value:"03"},{text:"Option 4",value:"04"},{text:"Option 5",value:"05"},{text:"Option 6",value:"06"},{text:"Option 7",value:"07"},{text:"Option 8",value:"08"}],r={dropdownSingle:function(){return r.getDropdownMarkup("Dropdown Label",d)},dropdownDimensions:function(){return r.getDropdownMarkup("Dropdown Label",d,{showDimensions:!0})},dropdownHighlight:function(){return r.getDropdownMarkup("Dropdown Label",d,{highlight:!0})},dropdownSpecs:function(){return[{code:{"Dropdown Label":"font-family: Public Sans;\n                              font-size: 16px;\n                              line-height: 26px;\n                              color: #212121;\n                              font-weight: regular;"}},{code:{"Dropdown Box":"background: #FFFFFF;\n                            border: 1px #707070;\n                            border-radius: 2px;"}},{code:{"Dropdown Box Text":"font-family: Public Sans\n                                font-size: 16px;\n                                line-height: 20px;\n                                color: #212121;\n                                font-weight: bold;"}}]},dropDownStates:function(){return[{header:"Hover",markup:r.getDropdownMarkup("Dropdown Label",d,{selectClasses:"hover"}),code:{"Dropdown Box":"background: #DBEDE0;\n                        border: 1px #212121;"}},{header:"Focus",markup:r.getDropdownMarkup("Dropdown Label",d,{selectClasses:"focus"}),code:{"Dropdown Box":"shadow: #1B69D3;"}},{header:"Disabled",markup:r.getDropdownMarkup("Dropdown Label",d,{selectClasses:"disabled",disabled:!0}),code:{"Dropdown Box":"background: #F7F7F7;\n                          border: 1px #BBBBBB;","Dropdown Box Text":"color: #BBBBBB;"}}]},getDropdownMarkup:function(label,e,data,o){var n=data&&data.labelClasses?data.labelClasses:"",d=data&&data.selectClasses?t.a.setClasses("simpler-select",data.selectClasses):"",r=data&&data.disabled?" disabled":"",l=t.a.lowerCaseAndHyphenate(label)+"-"+t.a.randomNumber(),h='<label for="'+l+'" class="'+n+'">'+label+"</label>",c='<select class="'+d+'" id="'+l+'" name="'+l+'" '+(r||data&&data.tabindex?'tabindex="-1"':"")+r+">\n                <option>- Please select -</option>";e.forEach((function(element){c=c+'<option value="'+element.value+'">'+element.text+"</option>"})),c+="</select>";var v=h+(data&&data.highlight?'<div class="click-target-highlight highlight-overlay">'+c+'<div class="highlight-pointer mouse-pointer"></div>\n                                  </div>':c);return data&&data.showDimensions?'<div class="dropdown-grid">\n                              '+v+'\n                              <div class="label-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="label-span span-red span-red-horizontal"></div>\n                              <div class="label-dimension dimension-red dimension-red-horizontal">4px</div>\n\n                              <div class="select-top-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="select-top-span span-red span-red-horizontal"></div>\n                              <div class="select-top-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                              <div class="select-bottom-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="select-bottom-span span-red span-red-horizontal"></div>\n                              <div class="select-bottom-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                              <div class="bottom-left-dashed dashed-blue dashed-blue-vertical"></div>\n                              <div class="bottom-left-span span-blue span-blue-vertical"></div>\n                              <div class="bottom-left-dimension dimension-blue dimension-blue-vertical">16px</div>\n\n                              <div class="bottom-right-dashed dashed-blue dashed-blue-vertical"></div>\n                              <div class="bottom-right-span span-blue span-blue-vertical"></div>\n                              <div class="bottom-right-dimension dimension-blue dimension-blue-vertical">16px</div>\n                              \n                              <div class="select-left-span span-red span-red-horizontal"></div>\n                              <div class="select-left-dimension dimension-red dimension-red-horizontal">52px</div>\n                            </div>':v}},l=r,h={layout:"farmers",head:function(){return{title:"Dropdowns"}},data:function(){return{data:l}}},c=n(2),component=Object(c.a)(h,(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("h2",[e._v("Dropdowns")]),e._v(" "),n("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    Dropdowns allow users to make a single selection from a list of options.\n    They are best used when a user needs to make a choice from a long list of\n    items.\n  ")]),e._v(" "),n("p",[e._v("\n    If there are less than 7 options, consider using\n    "),n("nuxt-link",{attrs:{to:"/ui/RadioButtons"}},[e._v("radio buttons")]),e._v(". Each option\n    should not go over one line of text. “Please select” should be used as the\n    default placeholder text in dropdowns unless there is a recommended option\n    a user should choose. If there is a recommended option, such as a\n    selection that is most commonly used, make this the default selection.\n  ")],1),e._v(" "),n("div",{staticClass:"row text-margin-bottom"},[n("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.data.dropdownSingle())}})]),e._v(" "),n("h3",[e._v("Specs")]),e._v(" "),n("p",[e._v("\n    Dropdowns have a minimum width of 96px and a maximum width of 530px.\n    Within the minimum and maximum sizes, the width of the dropdown box can\n    vary based on layout. However, dropdown sizes that are wider than the\n    minimum width should follow the grid system and the specs outlined below.\n    The height of the dropdown may be flexible depending on use cases.\n  ")]),e._v(" "),n("p",[e._v("\n    Dropdown menu list design should use the native style of the users’\n    system. Customization can be done depending on use cases.\n  ")]),e._v(" "),n("h3",[e._v("Default")]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"medium-12",domProps:{innerHTML:e._s(e.data.dropdownDimensions())}})]),e._v(" "),n("ExampleRow",{attrs:{data:e.data.dropdownSpecs(),columns:"4"}}),e._v(" "),n("ExampleRow",{attrs:{data:e.data.dropDownStates(),columns:"3"}}),e._v(" "),n("Code",{attrs:{markup:e.data.dropdownSingle()}}),e._v(" "),n("h4",[e._v("Click Target")]),e._v(" "),n("p",[e._v("\n    The entire dropdown field box should be clickable.\n  ")]),e._v(" "),n("div",{staticClass:"row text-margin-bottom"},[n("div",{staticClass:"medium-5",domProps:{innerHTML:e._s(e.data.dropdownHighlight())}})]),e._v(" "),n("h4",[e._v("Accessibility")]),e._v(" "),n("p",[e._v("\n    A label should always be present with a dropdown. The label should not be\n    replaced with the dropdown box text.\n  ")]),e._v(" "),n("p",[e._v("\n    User interface components should meet 3:1 color contrast ratio\n    requirements. This includes the contrast of the border of the dropdown to\n    the background.\n  ")]),e._v(" "),e._m(0)],1)}),[function(){var e=this.$createElement,o=this._self._c||e;return o("p",[o("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}},[this._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html")]),this._v(" "),o("br"),this._v(" "),o("a",{attrs:{href:"https://designsystem.digital.gov/components/form-controls/#dropdown"}},[this._v("https://designsystem.digital.gov/components/form-controls/#dropdown")])])}],!1,null,null,null);o.default=component.exports}}]);