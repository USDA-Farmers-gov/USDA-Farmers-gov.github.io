(window.webpackJsonp=window.webpackJsonp||[]).push([[36,17],{207:function(e,t,l){"use strict";l.r(t);t.default={simpleTable:function(){return[{table_headers:["Column Heading","Column Heading","Column Heading"],table_rows:[{text:["Table row placeholder","Row placeholder second column","Third column row"]},{text:["Table row placeholder","Row placeholder second column","Third column row"]},{text:["Table row placeholder","Row placeholder second column","Third column row"]},{text:["Table row placeholder","Row placeholder second column going over two lines","Third column row"]},{text:["Table row placeholder","Row placeholder second column","Third column row"]}]}]},complexTable:function(){return[{table_headers:["Column Heading","Column Heading"],table_rows:[{span_heading:"Subheading",colspan:2},{text:["Subheading row placeholder text","Example of a subheading row that extends to the second line"]},{span_heading:"Subheading",colspan:2},{text:["Subheading row placeholder text","Subheading row placeholder text"]},{text:["Subheading row placeholder text","Subheading row placeholder text"]}]}]},specs:function(){return[{code:{"Heading Text":"font-family: Public Sans\n          font-weight: Bold;\n          font-size: 18px;\n          color: #212121;\n          line-height: 28px;"}},{code:{"Cell Text":"font-family: Public Sans\n          font-weight: Regular;\n          font-size: 18px;\n          color: #212121;\n          line-height: 28px;"}},{code:{"Header Cell Background":"background: #EDEDED;\n            border: 1px #BBBBBB;","Cell Background Colors":"background: #FFFFFF;\n            background: #F7F7F7;"}},{code:{"Table Container":"border: 1px #BBBBBB;\n            border-radius: 2px;"}}]}}},209:function(e,t,l){"use strict";l.r(t);var n=l(207),o={layout:"farmers",head:function(){return{title:"Tables"}},data:function(){return{data:n.default}}},d=l(3),component=Object(d.a)(o,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h2",[e._v("Tables")]),e._v(" "),l("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    Tables are used to display data or information in columns and rows.\n  ")]),e._v(" "),l("h3",[e._v("Static Table")]),e._v(" "),l("p",[e._v("\n    A static table is a non-interactive table that contains text and/or links. Static tables should have short but descriptive column headings.\n  ")]),e._v(" "),l("h4",[e._v("Simple Table")]),e._v(" "),l("p",[e._v("\n    Simple tables are used when there is only one level of column headings. Table rows alternate in background colors for better readability and scannability of data across table rows. \n  ")]),e._v(" "),l("Table",{attrs:{data:e.data.simpleTable()[0],type:"bordered"}}),e._v(" "),l("h4",[e._v("Complex Table")]),e._v(" "),l("p",[e._v("\n    A complex table is used when there are multiple levels of column headings. \n  ")]),e._v(" "),l("Table",{attrs:{data:e.data.complexTable()[0],type:"bordered"}}),e._v(" "),l("h3",[e._v("Specs")]),e._v(" "),l("p",[e._v("\n    Tables should follow the specified padding and size requirements below. \n  ")]),e._v(" "),l("div",{staticClass:"table-grid"},[l("Table",{attrs:{data:e.data.simpleTable()[0],type:"bordered"}}),e._v(" "),l("div",{staticClass:"table-specs-first-cell dashed-blue dashed-blue-vertical"}),e._v(" "),l("div",{staticClass:"table-specs-first-cell-span span-blue span-blue-vertical"}),e._v(" "),l("div",{staticClass:"table-specs-first-cell-dimension dimension-blue dimension-blue-vertical"},[e._v("24px")]),e._v(" "),l("div",{staticClass:"table-specs-second-cell dashed-blue dashed-blue-vertical"}),e._v(" "),l("div",{staticClass:"table-specs-second-cell-span span-blue span-blue-vertical"}),e._v(" "),l("div",{staticClass:"table-specs-second-cell-dimension dimension-blue dimension-blue-vertical"},[e._v("24px")]),e._v(" "),l("div",{staticClass:"table-specs-heading-span span-red span-red-horizontal"}),e._v(" "),l("div",{staticClass:"table-specs-heading-dimension dimension-red dimension-red-horizontal"},[e._v("56px")]),e._v(" "),l("div",{staticClass:"table-specs-first-row-span span-red span-red-horizontal"}),e._v(" "),l("div",{staticClass:"table-specs-first-row-dimension dimension-red dimension-red-horizontal"},[e._v("56px")]),e._v(" "),l("div",{staticClass:"table-specs-second-row-span span-red span-red-horizontal"}),e._v(" "),l("div",{staticClass:"table-specs-second-row-dimension dimension-red dimension-red-horizontal"},[e._v("84px")])],1),e._v(" "),l("ExampleRow",{attrs:{data:e.data.specs(),columns:"4"}}),e._v(" "),l("h3",[e._v("Accessibility")]),e._v(" "),l("p",[e._v("\n    A title describing the table content is recommended. When providing a title, place a <caption> tag within the <table> element.\n\n    To designate which cells contain headings, place all column headings in a table heading <th> tag. All other cells should use the table data <td> tag.\n  ")]),e._v(" "),l("h4",[e._v("References")]),e._v(" "),l("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices/#table"}},[e._v("https://www.w3.org/TR/wai-aria-practices/#table")])],1)},[],!1,null,null,null);t.default=component.exports}}]);