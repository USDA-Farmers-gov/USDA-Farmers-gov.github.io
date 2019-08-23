(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{250:function(e,n,o){"use strict";o.r(n);var t={layout:"farmers",head:function(){return{title:"Dropdowns"}},data:function(){return{dropdown_single:[{text:"Option 1",value:"01"},{text:"Option 2",value:"02"},{text:"Option 3",value:"03"}],dropdown_states:[{code:{dropdown_label:"font-family: Public Sans;\n                            font-size: 16px;\n                            line-height: 26px;\n                            color: #212121;\n                            font-weight: regular;"}},{code:{dropdown_box:"background: #FFFFFF;\n                          border: 1px #707070;\n                          border-radius: 2px;"}},{code:{dropdown_box_text:"font-family: Public Sans\n                              font-size: 16px;\n                              line-height: 20px;\n                              color: #212121;\n                              font-weight: bold;"}}]}},methods:{getDropdownMarkup:function(label,e,n){var o='\n              <label for="scl-select-one">'+label+'</label>\n              <select class="simpler-select scl-select" name="'+label+'" aria-label="Select a State">\n                  <option>- Please select -</option>';return e.forEach(function(element){o=o+'<option value="'+element.value+'">'+element.text+"</option>"}),o+="</select>",n?'<div class="dropdown-grid">\n                                <div class="label-dashed dashed-red dashed-red-horizontal"></div>\n                                <div class="label-span span-red span-red-horizontal"></div>\n                                <div class="label-dimension dimension-red dimension-red-horizontal">4px</div>\n\n                                <div class="select-top-dashed dashed-red dashed-red-horizontal"></div>\n                                <div class="select-top-span span-red span-red-horizontal"></div>\n                                <div class="select-top-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                                <div class="select-bottom dashed dashed-red dashed-red-horizontal"></div>\n                                <div class="select-bottom span span-red span-red-horizontal"></div>\n                                <div class="select-bottom dimension dimension-red dimension-red-horizontal">16px</div>\n\n                                <div class="bottom-left-dashed dashed-blue dashed-blue-vertical"></div>\n                                <div class="bottom-left-span span-blue span-blue-vertical"></div>\n                                <div class="bottom-left-dimension dimension-blue dimension-blue-vertical">16px</div>\n\n                                <div class="bottom-right-dashed dashed-blue dashed-blue-vertical"></div>\n                                <div class="bottom-right-span span-blue span-blue-vertical"></div>\n                                <div class="bottom-right-dimension dimension-blue dimension-blue-vertical">16px</div>\n                                \n                                <div class="select-left-span span-red span-red-horizontal"></div>\n                                <div class="select-left-dimension dimension-red dimension-red-horizontal">52px</div>\n                                '+o+"\n                                </div>":o}}},d=o(4),component=Object(d.a)(t,function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("h2",[e._v("Dropdowns")]),e._v(" "),o("p",{staticClass:"intro-text"},[e._v("\n    Dropdowns allow users to make a single selection from a list of options. They are best used when a user needs to make a choice from a long list of items.\n  ")]),e._v(" "),o("p",[e._v("\n    If there are less than 7 options, consider using "),o("nuxt-link",{attrs:{to:"/ui/RadioButtons"}},[e._v("radio buttons")]),e._v(". Each option should not go over one line of text. “Please select” should be used as the default placeholder text in dropdowns unless there is a recommended option a user should choose. If there is a recommended option, such as a selection that is most commonly used, make this the default selection.\n  ")],1),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"medium-4",domProps:{innerHTML:e._s(e.getDropdownMarkup("Dropdown Label",e.dropdown_single))}})]),e._v(" "),o("h3",[e._v("Specs")]),e._v(" "),o("p",[e._v("\n    The width of the dropdown box can vary based on layout. However, it should follow the grid system and the specs outlined below. The height of the dropdown may be flexible depending on use cases.\n  ")]),e._v(" "),o("p",[e._v("\n    Dropdown menu list design should use the native style of the users’ system. Customization can be done depending on use cases.\n  ")]),e._v(" "),o("h3",[e._v("Default")]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"medium-12",domProps:{innerHTML:e._s(e.getDropdownMarkup("Dropdown Label",e.dropdown_single,!0))}})]),e._v(" "),o("ExampleRow",{attrs:{data:e.dropdown_states,columns:"4"}})],1)},[],!1,null,null,null);n.default=component.exports}}]);