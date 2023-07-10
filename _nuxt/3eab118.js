(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{379:function(t,e,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("6cefe89f",content,!0,{sourceMap:!1})},383:function(t,e,r){"use strict";r(379)},384:function(t,e,r){var n=r(74)(!1);n.push([t.i,".table-condensed td{vertical-align:middle}.no-padding{padding:0}.title{padding-bottom:1rem}.merriweather{font-family:Merriweather,serif}.table{width:100%;display:table}",""]),t.exports=n},395:function(t,e,r){"use strict";r.r(e);var n={fonts:function(){return[{table_headers:["Hierarchy","Font Family","Weight","Font Size","Line Height"],table_rows:[{text:[n.markup.header_1,"Public Sans","700","38px","48px"]},{text:[n.markup.header_2,"Public Sans","700","28px","38px"]},{text:[n.markup.header_3,"Public Sans","700","23px","30px"]},{text:[n.markup.header_4,"Public Sans","700","20px","26px"]},{text:[n.markup.header_5,"Public Sans","700","16px","20px"]},{text:[n.markup.header_6,"Public Sans","400","12px","18px"]},{text:[n.markup.label,"Public Sans","700","22px","34px"]},{text:[n.markup.lead_p,"Public Sans","300","22px","34px"]},{text:[n.markup.body_p,"Public Sans","400","18px","28px"]},{text:[n.markup.subheading,"Public Sans","400","16px","24px"]},{text:[n.markup.caption,"Public Sans","400","14px","22px"]}]},{table_headers:["Hierarchy","Font Family","Weight","Font Size","Line Height"],table_rows:[{text:[n.markup.header_1,"Public Sans","700","32px","40px"]},{text:[n.markup.header_2,"Public Sans","700","26px","35px"]}]},{table_headers:["Hierarchy","Font Family","Weight","Font Size","Line Height"],table_rows:[{text:[n.markup.blog_body_p,"Merriweather","400","32px","40px"]},{text:[n.markup.blog_block_quote,"Merriweather","700","300","35px"]}]}]},contrastButtonsNormal:function(){return[{classes:"heritage heritage-border white-txt",description:"White on Heritage Green"},{classes:"grey-3-border heritage-txt",description:"Heritage Green on White"},{classes:"soft-green soft-green-border asphalt-txt",description:"Asphalt on Soft Green"},{classes:"grey-3-border asphalt-txt",description:"Asphalt on White"},{classes:"soft-yellow soft-yellow-border asphalt-txt",description:"Asphalt on Soft Yellow"},{classes:"grey-1 grey-1-border asphalt-txt",description:"Asphalt on Bone"},{classes:"soft-red soft-red-border asphalt-txt",description:"Asphalt on Soft Red"},{classes:"grey-2 grey-2-border asphalt-txt",description:"Asphalt on Light Gray"}]},contrastButtonsLargeText:function(){return[{classes:"sweet-grass sweet-grass-border white-txt",description:"White on Sweet Grass"},{classes:"sweet-grass-txt grey-3-border",description:"Sweet Grass on White"},{classes:"big-sky big-sky-border white-txt",description:"White on Big Sky"},{classes:"big-sky-txt grey-3-border",description:"Big Sky on White"}]},markup:{header_1:"<h1>Headline 1</h1>",header_2:"<h2>Headline 2</h2>",header_3:"<h3>Headline 3</h3>",header_4:"<h4>Headline 4</h4>",header_5:"<h5>Headline 5</h5>",header_6:"<h6>Headline 6</h6>",label:'<div class="label">Label 1</div>',lead_p:'<div class="lead-p">Lead Paragraph</div>',body_p:'<div class="body-p">Body Copy</div>',subheading:'<div class="subheading">Subheading</div>',caption:'<div class="caption">Caption</div>',blog_body_p:'<div class="blog-body-p">Blog Body Copy*</div>',blog_block_quote:'<div class="blog-block-quote">Blog Quote*</div>'},typographyCode:function(){var t,code="";for(t in n.markup){var text=n.markup[t]?n.markup[t]:"";text&&(code+=text)}return code}},o=n,l={layout:"farmers",head:function(){return{title:"Typography"}},data:function(){return{data:o}}},d=(r(383),r(8)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Typography")]),t._v(" "),r("div",{staticClass:"intro-text text-margin-bottom"},[t._v("\n    The Farmers.gov site uses Public Sans for all of its text except for the\n    blog body copy and pullquotes, which uses Merriweather.\n  ")]),t._v(" "),r("h3",{staticClass:"title"},[t._v("Public Sans")]),t._v(" "),r("div",{staticClass:"container no-padding text-margin-bottom"},[t._m(0),t._v(" "),r("h3",{staticClass:"title"},[t._v("Desktop")]),t._v(" "),r("Table",{attrs:{data:t.data.fonts()[0],type:"condensed",customClasses:"table-fonts striping"}}),t._v(" "),r("h3",{staticClass:"title"},[t._v("Mobile")]),t._v(" "),r("Table",{attrs:{data:t.data.fonts()[1],type:"condensed",customClasses:"table-fonts striping"}})],1),t._v(" "),r("h3",{staticClass:"title merriweather"},[t._v("Merriweather*")]),t._v(" "),t._m(1),t._v(" "),r("Table",{attrs:{data:t.data.fonts()[2],type:"condensed",customClasses:"table-fonts striping"}}),t._v(" "),r("div",{staticClass:"text-margin-bottom caption"},[t._v("*Currently used on blog only")]),t._v(" "),r("Code",{attrs:{markup:t.data.typographyCode()}}),t._v(" "),r("h3",[t._v("Lists")]),t._v(" "),t._m(2),t._v(" "),r("h3",[t._v("Text Contrast")]),t._v(" "),r("p",[t._v("\n    All Text must meet the minimum AA Web Content Accessibliity Guidelines to\n    be 508 compliant. This is so that text is accessible for for all users.\n    The text and background color combinations below are used throughout the\n    farmers.gov site and are an integral part of our visual styles.\n  ")]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"medium-5"},[r("strong",[t._v("Normal Text")]),t._v(" "),t._m(3),t._v(" "),t._l(t.data.contrastButtonsNormal(),(function(e){return r("div",{staticClass:"row contrast"},[r("div",{class:"mini-square "+e.classes},[t._v("\n            AAA\n          ")]),t._v(" "),r("div",[t._v("\n            "+t._s(e.description)+"\n          ")])])}))],2),t._v(" "),r("div",{staticClass:"medium-5"},[r("strong",[t._v("Large Text")]),t._v(" "),t._m(4),t._v(" "),t._l(t.data.contrastButtonsLargeText(),(function(e){return r("div",{staticClass:"row contrast"},[r("div",{class:"mini-square "+e.classes},[t._v("\n            AA\n          ")]),t._v(" "),r("div",[t._v("\n            "+t._s(e.description)+"\n          ")])])}))],2)])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"medium-2 text-large typography-letters ps-padding"},[t._v("A a")]),t._v(" "),r("div",{staticClass:"medium-7 text-small typography-example"},[t._v("\n        ABCDEFGHIJKLMNOPQRSTUVWXYZ\n        "),r("br"),t._v("\n        abcdefghijklmnopqrstuvwxyz\n        "),r("br"),t._v("\n        1234567890\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container no-padding merriweather"},[r("div",{staticClass:"row"},[r("div",{staticClass:"medium-2 text-large typography-letters ps-padding"},[t._v("A a")]),t._v(" "),r("div",{staticClass:"medium-7 text-small typography-example"},[t._v("\n        ABCDEFGHIJKLMNOPQRSTUVWXYZ\n        "),r("br"),t._v("\n        abcdefghijklmnopqrstuvwxyz\n        "),r("br"),t._v("\n        1234567890\n      ")])]),t._v(" "),r("h3",{staticClass:"title"},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("\n      There are two recommended ways of organizing bulleted information. The\n      first is unorganized, where information can be shown in any order. The\n      second list is organized based on priority.\n    ")]),t._v(" "),r("div",{staticClass:"container text-margin-bottom"},[r("div",{staticClass:"row"},[r("div",{staticClass:"medium-4"},[t._v("\n          Unordered List\n          "),r("ul",[r("li",[t._v("Unordered list item")]),t._v(" "),r("li",[t._v("Unordered list item")]),t._v(" "),r("li",[t._v("Unordered list item")])])]),t._v(" "),r("div",{staticClass:"medium-4"},[t._v("\n          Ordered list\n          "),r("ol",[r("li",[t._v("Ordered list item")]),t._v(" "),r("li",[t._v("Ordered list item")]),t._v(" "),r("li",[t._v("Ordered list item")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contrast-stats"},[r("p",[t._v("\n            <24px size at 400 weight\n          ")]),t._v(" "),r("p",[r("strong",[t._v("AA")]),t._v(" 4.5:1 minimum contrast ratio")]),t._v(" "),r("p",[r("strong",[t._v("AAA")]),t._v(" 7:1 minimum contrast ratio")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contrast-stats"},[r("p",[t._v("\n            ≥19px size at 700 weight or ≥24px size\n          ")]),t._v(" "),r("p",[r("strong",[t._v("AA")]),t._v(" 3:1 minimum contrast ratio")]),t._v(" "),r("p",[r("strong",[t._v("AAA")]),t._v(" 4.5:1 minimum contrast ratio")])])}],!1,null,null,null);e.default=component.exports}}]);