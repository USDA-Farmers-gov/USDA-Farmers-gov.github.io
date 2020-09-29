(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{337:function(e,n,t){"use strict";t.r(n);var r=t(25),l={textLinks:function(){return[{header:"Default",markup:l.defaultLinkGrid(),code:{Text:"color: #006546;\n            font-family: Public Sans;\n            font-size: 20px;\n            font-weight: bold;\n            line-height: 26px;\n            text-decoration: underline;",Icon:"color: #212121;\n            size: 20x20;"}},{header:"Hover",markup:l.linkMarkup({classes:"hover"}),code:{Text:"color: #49A564;"}},{header:"Focus",markup:l.linkMarkup({classes:"focus"}),classes:"focus",code:{Text:"color: #49A564;\n            shadow: #1B69D3;"}},{header:"Visited",markup:l.linkMarkup({classes:"visited"}),classes:"visited",code:{Text:"color: #4C2C92;"}}]},externalTextLinks:function(){return[{header:"Default",markup:l.externalLinkGrid(),code:{Text:"color: #006546;\n            font-family: Public Sans;\n            font-size: 20px;\n            font-weight: bold;\n            line-height: 26px;\n            text-decoration: underline;",Icon:"color: #006546;\n            size: 12x12;"}},{header:"Hover",markup:l.linkMarkup({type:"external",classes:"hover"}),code:{Text:"color: #49A564;",Icon:"color: #49A564;"}},{header:"Focus",markup:l.linkMarkup({type:"external",classes:"focus"}),classes:"focus",code:{Text:"color: #49A564;\n            shadow: #1B69D3;",Icon:"color: #49A564;"}},{header:"Visited",markup:l.linkMarkup({type:"external",classes:"visited"}),classes:"visited",code:{Text:"color: #4C2C92;",Icon:"color: #4C2C92;"}}]},inlineTextLinks:function(){return[{header:"Default",markup:'<a href="#" tabindex="-1">Inline Link</a>',code:{Text:"color: #006546;\n            font-family: Public Sans;\n            font-size: 18px;\n            font-weight: regular;\n            line-height: 28px;\n            text-decoration: underline;"}},{header:"Hover",markup:'<a href="#" class="hover" tabindex="-1">Inline Link</a>',code:{Text:"font-weight: bold;"}},{header:"Focus",markup:'<a href="#" class="focus" tabindex="-1">Inline Link</a>',classes:"focus",code:{Text:"font-weight: bold;\n            shadow: #1B69D3;"}},{header:"Visited",markup:'<a href="#" class="visited" tabindex="-1">Inline Link</a>',classes:"visited",code:{Text:"color: #4C2C92;"}}]},anchorLinks:function(){return[{header:"Default",markup:l.anchorLinkGrid(),code:{Text:"color: #006546;\n            font-family: Public Sans;\n            font-size: 18px;\n            font-weight: regular;\n            line-height: 28px;\n            text-decoration: underline;",Icon:"color: #49A564;\n            size: 18x14;"}},{header:"Hover",markup:l.linkMarkup({type:"anchor",classes:"hover"}),code:{Text:"font-weight: bold;"}},{header:"Focus",markup:l.linkMarkup({type:"anchor",classes:"focus"}),classes:"focus",code:{Text:"font-weight: bold;\n            shadow: #1B69D3;"}},{header:"Visited",markup:l.linkMarkup({type:"anchor",classes:"visited"}),classes:"visited",code:{Text:"color: #4C2C92;"}}]},linkMarkup:function(data){var e=data&&data.classes?data.classes:"",n=data&&data.tabindex?"":'tabindex="-1"',t=data&&data.tabindex?'href="#" ':"",l="text-link",o="Text Link";return data&&"external"===data.type&&(l="external-link",o="External Link"),data&&"inline-text"===data.type&&(l="inline-text-link",o="Inline Link"),data&&"anchor"===data.type&&(l="anchor-link",o="<span>Anchor Link</span>"),"<a "+t+'class="'+r.a.setClasses(l,e)+'" '+n+">"+o+"</a>"},defaultLinkGrid:function(){return'<div class="default-link-grid">\n              '+l.linkMarkup()+'\n            <div class="default-link dashed-blue dashed-blue-vertical"></div>\n            <div class="default-link-span span-blue span-blue-vertical"></div>\n            <div class="default-link-dimension dimension-blue dimension-blue-vertical">6px</div>\n          </div>'},externalLinkGrid:function(){return'<div class="external-link-grid">\n              '+l.linkMarkup({type:"external"})+'\n            <div class="external-link-display dashed-blue dashed-blue-vertical"></div>\n            <div class="external-link-span span-blue span-blue-vertical"></div>\n            <div class="external-link-dimension dimension-blue dimension-blue-vertical">4px</div>\n          </div>'},anchorLinkGrid:function(){return'<div class="anchor-link-grid">\n              '+l.linkMarkup({type:"anchor"})+'\n            <div class="anchor-link-display dashed-blue dashed-blue-vertical"></div>\n            <div class="anchor-link-span span-blue span-blue-vertical"></div>\n            <div class="anchor-link-dimension dimension-blue dimension-blue-vertical">10px</div>\n          </div>'}},o=l,d={layout:"farmers",head:function(){return{title:"Links"}},data:function(){return{data:o}}},c=t(2),component=Object(c.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Links")]),e._v(" "),t("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    Links direct users to different pages or sections of the site. Links should not be in uppercase to visually differentiate between a link and a button.\n  ")]),e._v(" "),t("h3",[e._v("Text Link")]),e._v(" "),t("p",[e._v("\n    Text links are used to navigate users from page to page. Text links should be used on its own single line with a right caret icon. \n  ")]),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.data.linkMarkup())}}),e._v(" "),t("ExampleRow",{attrs:{data:e.data.textLinks(),itemClasses:[{index:0,classes:"default-link-grid-container"}],columns:"4"}}),e._v(" "),t("Code",{attrs:{markup:e.data.linkMarkup({tabindex:!0})}}),e._v(" "),t("h3",[e._v("External Text Link")]),e._v(" "),t("p",[e._v("\n    External links are used when directing users to a web page outside of Farmers.gov and USDA. An external link should appear with an external link icon to distinguish between Farmers.gov and USDA to non-Farmers.gov and USDA web pages. They should open in a new browser tab.\n  ")]),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.data.linkMarkup({type:"external"}))}}),e._v(" "),t("ExampleRow",{attrs:{data:e.data.externalTextLinks(),itemClasses:[{index:0,classes:"external-grid-container"}],columns:"4"}}),e._v(" "),t("Code",{attrs:{markup:e.data.linkMarkup({type:"external",tabindex:!0})}}),e._v(" "),t("h3",[e._v("Inline Textual Link")]),e._v(" "),t("p",[e._v("\n    Inline textual links are used within body paragraphs. They are underlined on default so they can be easily distinguished between body text.\n  ")]),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.data.linkMarkup({type:"inline-text"}))}}),e._v(" "),t("br"),e._v(" "),t("ExampleRow",{attrs:{data:e.data.inlineTextLinks(),rowClasses:"inline-text-link-container",columns:"4"}}),e._v(" "),t("Code",{attrs:{markup:e.data.linkMarkup({type:"inline-text",tabindex:!0})}}),e._v(" "),t("h3",[e._v("Anchor Link")]),e._v(" "),t("p",[e._v("\n    Anchor links are used to navigate users to another section within the same page. They can be used with or without a leaf icon.\n  ")]),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.data.linkMarkup({type:"anchor"}))}}),e._v(" "),t("br"),e._v(" "),t("ExampleRow",{attrs:{data:e.data.anchorLinks(),rowClasses:"anchor-link-examples",itemClasses:[{index:0,classes:"anchor-grid-container"}],columns:"4"}}),e._v(" "),t("Code",{attrs:{markup:e.data.linkMarkup({type:"anchor",tabindex:!0})}}),e._v(" "),t("h4",[e._v("Click Target")]),e._v(" "),t("p",[e._v("\n    The click target includes the link text and its associated icon. This applys to all link styles.\n  ")]),e._v(" "),t("div",{staticClass:"highlight-text-link text-margin-bottom"},[t("div",{staticClass:"highlight-overlay"}),e._v(" "),t("div",{staticClass:"highlight-link",domProps:{innerHTML:e._s(e.data.linkMarkup())}}),e._v(" "),t("div",{staticClass:"mouse-pointer"})]),e._v(" "),t("h4",[e._v("Accessibility")]),e._v(" "),t("p",[e._v("\n    Color cannot be used as the only means of conveying information, functionality, or prompting a response. It must be paired with another visual indicator such as underlining, bolding, or other visual cues.\n  ")]),e._v(" "),t("p",[e._v("\n    Hover and focus states must be incorporated to convey to users that these elements are clickable. These visual effects should be device-independent and able to be activated by either a mouse or keyboard.\n  ")]),e._v(" "),t("h4",[e._v("References")]),e._v(" "),t("a",{attrs:{href:"https://www.w3.org/TR/WCAG21/#distinguishable"}},[e._v("https://www.w3.org/TR/WCAG21/#distinguishable")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"https://webaim.org/techniques/hypertext/link_text"}},[e._v("https://webaim.org/techniques/hypertext/link_text")])],1)}),[],!1,null,null,null);n.default=component.exports}}]);