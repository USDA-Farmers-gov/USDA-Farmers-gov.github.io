(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{250:function(e,n,o){"use strict";o.r(n);var d=[{text:"Option 1",value:"01"},{text:"Option 2",value:"02"},{text:"Option 3",value:"03"},{text:"Option 4",value:"04"},{text:"Option 5",value:"05"},{text:"Option 6",value:"06"},{text:"Option 7",value:"07"},{text:"Option 8",value:"08"}],t={dropdownSingle:function(){return t.getDropdownMarkup("Dropdown Label",d)},dropdownDimensions:function(){return t.getDropdownMarkup("Dropdown Label",d,{showDimensions:!0})},dropdownHighlight:function(){return t.getDropdownMarkup("Dropdown Label",d,{highlight:!0})},dropdownSpecs:function(){return[{code:{dropdown_label:"font-family: Public Sans;\n                              font-size: 16px;\n                              line-height: 26px;\n                              color: #212121;\n                              font-weight: regular;"}},{code:{dropdown_box:"background: #FFFFFF;\n                            border: 1px #707070;\n                            border-radius: 2px;"}},{code:{dropdown_box_text:"font-family: Public Sans\n                                font-size: 16px;\n                                line-height: 20px;\n                                color: #212121;\n                                font-weight: bold;"}}]},dropDownStates:function(){return[{header:"Hover",markup:t.getDropdownMarkup("Dropdown Label",d,{selectClasses:"hover"}),code:{dropdown_box:"background: #DBEDE0;\n                        border: 1px #212121;"}},{header:"Focus",markup:t.getDropdownMarkup("Dropdown Label",d,{selectClasses:"focus"}),code:{dropdown_box:"shadow: #1B69D3;"}},{header:"Disabled",markup:t.getDropdownMarkup("Dropdown Label",d,{selectClasses:"disabled"}),code:{dropdown_box:"background: #F7F7F7;\n                          border: 1px #BBBBBB;",dropdown_box_text:"color: #BBBBBB;"}}]},getDropdownMarkup:function(label,e,n,o){var d='<label for="scl-select-one" class="'+(n&&n.labelClasses?n.labelClasses:"")+'">'+label+"</label>",t='<select class="'+(n&&n.selectClasses?"simpler-select scl-select "+n.selectClasses:"simpler-select scl-select")+'" name="'+label+'" tabindex="-1">\n                <option>- Please select -</option>';e.forEach(function(element){t=t+'<option value="'+element.value+'">'+element.text+"</option>"}),t+="</select>";var l=d+(n&&n.highlight?'<div class="highlight-overlay">'+t+'<div class="highlight-pointer mouse-pointer"></div>\n                                  </div>':t);return n&&n.showDimensions?'<div class="dropdown-grid">\n                              <div class="label-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="label-span span-red span-red-horizontal"></div>\n                              <div class="label-dimension dimension-red dimension-red-horizontal">4px</div>\n\n                              <div class="select-top-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="select-top-span span-red span-red-horizontal"></div>\n                              <div class="select-top-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                              <div class="select-bottom dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="select-bottom span span-red span-red-horizontal"></div>\n                              <div class="select-bottom dimension dimension-red dimension-red-horizontal">16px</div>\n\n                              <div class="bottom-left-dashed dashed-blue dashed-blue-vertical"></div>\n                              <div class="bottom-left-span span-blue span-blue-vertical"></div>\n                              <div class="bottom-left-dimension dimension-blue dimension-blue-vertical">16px</div>\n\n                              <div class="bottom-right-dashed dashed-blue dashed-blue-vertical"></div>\n                              <div class="bottom-right-span span-blue span-blue-vertical"></div>\n                              <div class="bottom-right-dimension dimension-blue dimension-blue-vertical">16px</div>\n                              \n                              <div class="select-left-span span-red span-red-horizontal"></div>\n                              <div class="select-left-dimension dimension-red dimension-red-horizontal">52px</div>\n                              '+l+"\n                              </div>":l}};n.default=t}}]);