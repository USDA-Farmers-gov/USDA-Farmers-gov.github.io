(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{258:function(e,n,o){"use strict";o.r(n);var d=o(37),t=[{text:"Option 1",value:"01"},{text:"Option 2",value:"02"},{text:"Option 3",value:"03"},{text:"Option 4",value:"04"},{text:"Option 5",value:"05"},{text:"Option 6",value:"06"},{text:"Option 7",value:"07"},{text:"Option 8",value:"08"}],l={dropdownSingle:function(){return l.getDropdownMarkup("Dropdown Label",t)},dropdownDimensions:function(){return l.getDropdownMarkup("Dropdown Label",t,{showDimensions:!0})},dropdownHighlight:function(){return l.getDropdownMarkup("Dropdown Label",t,{highlight:!0})},dropdownSpecs:function(){return[{code:{"Dropdown Label":"font-family: Public Sans;\n                              font-size: 16px;\n                              line-height: 26px;\n                              color: #212121;\n                              font-weight: regular;"}},{code:{"Dropdown Box":"background: #FFFFFF;\n                            border: 1px #707070;\n                            border-radius: 2px;"}},{code:{"Dropdown Box Text":"font-family: Public Sans\n                                font-size: 16px;\n                                line-height: 20px;\n                                color: #212121;\n                                font-weight: bold;"}}]},dropDownStates:function(){return[{header:"Hover",markup:l.getDropdownMarkup("Dropdown Label",t,{selectClasses:"hover"}),code:{"Dropdown Box":"background: #DBEDE0;\n                        border: 1px #212121;"}},{header:"Focus",markup:l.getDropdownMarkup("Dropdown Label",t,{selectClasses:"focus"}),code:{"Dropdown Box":"shadow: #1B69D3;"}},{header:"Disabled",markup:l.getDropdownMarkup("Dropdown Label",t,{selectClasses:"disabled",disabled:!0}),code:{"Dropdown Box":"background: #F7F7F7;\n                          border: 1px #BBBBBB;","Dropdown Box Text":"color: #BBBBBB;"}}]},getDropdownMarkup:function(label,e,n,o){var t=n&&n.labelClasses?n.labelClasses:"",l=n&&n.selectClasses?d.a.setClasses("simpler-select",n.selectClasses):"",r=n&&n.disabled?" disabled":"",c=d.a.lowerCaseAndHyphenate(label)+"-"+d.a.randomString(),h='<label for="'+c+'" class="'+t+'">'+label+"</label>",v='<select class="'+l+'" id="'+c+'" name="'+c+'" tabindex="'+(r?"-1":"0")+'"'+r+">\n                <option>- Please select -</option>";e.forEach(function(element){v=v+'<option value="'+element.value+'">'+element.text+"</option>"}),v+="</select>";var m=h+(n&&n.highlight?'<div class="click-target-highlight highlight-overlay">'+v+'<div class="highlight-pointer mouse-pointer"></div>\n                                  </div>':v);return n&&n.showDimensions?'<div class="dropdown-grid">\n                              '+m+'\n                              <div class="label-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="label-span span-red span-red-horizontal"></div>\n                              <div class="label-dimension dimension-red dimension-red-horizontal">4px</div>\n\n                              <div class="select-top-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="select-top-span span-red span-red-horizontal"></div>\n                              <div class="select-top-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                              <div class="select-bottom-dashed dashed-red dashed-red-horizontal"></div>\n                              <div class="select-bottom-span span-red span-red-horizontal"></div>\n                              <div class="select-bottom-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                              <div class="bottom-left-dashed dashed-blue dashed-blue-vertical"></div>\n                              <div class="bottom-left-span span-blue span-blue-vertical"></div>\n                              <div class="bottom-left-dimension dimension-blue dimension-blue-vertical">16px</div>\n\n                              <div class="bottom-right-dashed dashed-blue dashed-blue-vertical"></div>\n                              <div class="bottom-right-span span-blue span-blue-vertical"></div>\n                              <div class="bottom-right-dimension dimension-blue dimension-blue-vertical">16px</div>\n                              \n                              <div class="select-left-span span-red span-red-horizontal"></div>\n                              <div class="select-left-dimension dimension-red dimension-red-horizontal">52px</div>\n                            </div>':m}};n.default=l}}]);