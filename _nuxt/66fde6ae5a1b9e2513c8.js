(window.webpackJsonp=window.webpackJsonp||[]).push([[24,6],{252:function(e,n,t){"use strict";t.r(n);n.default={specs:function(){return[{code:{"Official Gov Banner":"background: #F7F7F7;","Main Header":"background: #FFFFFF;","Main Navigation Bar":"background: #006546;"}},{code:{"Default Nav Item Text":"font-family: Public Sans\n            font-weight: Regular;\n            font-size: 16px;\n            line-height: 24px;\n            color: #FFFFFF;","Current/Hover Nav Item":"font-weight: Bold;","Current/Hover Indicator":"background: #FFFFFF;"}},{code:{"Utility Nav Link":"font-family: Public Sans\n            font-weight: Regular;\n            font-size: 14px;\n            line-height: 22px;\n            color: #212121;","Utility Nav Link Hover":"text-decoration: underline;"}}]},dropdownGridSpecs:function(){return[{code:{"Dropdown Background":"background: #FFFFFF;\n            box-shadow: 0 2px 8px 0 #BBBBBB;"}},{code:{"Nav Item Title":"font-family: Public Sans;\n            font-weight: Bold;\n            font-size: 16px;\n            color: #006546;\n            line-height: 24px;"}},{code:{"Dropdown Divider":"border: 1px #BBBBBB;"}}]},dropdownItemSpecs:function(){return[{markup:"",code:{Default:"font-family: Public Sans;\n            font-weight: Regular;\n            font-size: 16px;\n            color: #212121;\n            line-height: 24px;"}},{markup:"",code:{"Selected Background":"background: #DBEDE0;","Selected Bar":"background: #006546;"}},{markup:"",code:{Hovered:"text-decoration: underline;"}},{markup:"",code:{Focused:"text-decoration: underline;\n              shadow: #1B69D3"}}]},calloutButtonSpecs:function(){return[{code:{Text:"font-family: Public Sans\n            font-weight: Bold;\n            font-size: 16px;\n            color: #212121;\n            line-height: 20px;"}},{code:{Background:"background: #FFFFFF;\n              box-shadow: 0 2px 8px 0 #BBBBBB;\n              border-radius: 0 0 2px 2px;"}}]},searchBarSpecs:function(){return[{code:{"Placeholder Text":"font-family: Public San\n            font-weight: Regular;\n            font-size: 14px;\n            line-height: 22px;\n            color: #707070;"}},{code:{"Active Text":"font-family: Public San\n            font-weight: Regular;\n            font-size: 14px;\n            line-height: 22px;\n            color: #212121;"}},{code:{"Default Search Button":"background: #F7F7F7;\n              border-radius: 0 4px 4px 0;"}},{code:{"Default Search Icon":"background: #212121;"}}]}}},281:function(e,n,t){"use strict";t.r(n);var header=t(252),o={layout:"farmers",head:function(){return{title:"Header"}},data:function(){return{header_data:header.default}}},r=t(3),component=Object(r.a)(o,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Header")]),e._v(" "),t("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    The farmers.gov header combines the primary navigation of the website, the utility navigation, the search bar, and a lockup in one reoccurring component on the site. The header primarily serves a navigational function.\n  ")]),e._v(" "),t("h3",[e._v("Guidelines")]),e._v(" "),t("p",[e._v("\n    Use clear, concise, and intuitive link navigation labels. An underline should be used as a visual cue to indiciate the current page. If there are lower level pages nested within the main navigation items, use dropdown menus to present those options.\n  ")]),e._v(" "),t("p",[e._v("\n    The header contains:\n  ")]),e._v(" "),e._m(0),e._v("\n\n  [ HEADER EXAMPLE 1 ]\n  "),t("br"),e._v("\n  [ HEADER EXAMPLE 2 ]\n  \n  "),t("h3",[e._v("Specs")]),e._v("\n\n  [ DEFAULT EXAMPLE ]\n\n  "),t("ExampleRow",{attrs:{data:e.header_data.specs(),columns:"4"}}),e._v(" "),t("h4",[e._v("Dropdown Menu")]),e._v(" "),t("p",[e._v("\n    The dropdown menu should expand on click and remain visible on the screen until the user clicks a menu link or anywhere outside the dropdown menu.\n  ")]),e._v("\n\n  [ DROPDOWN EXAMPLE WITH GRID ]\n\n  "),t("ExampleRow",{attrs:{data:e.header_data.dropdownGridSpecs(),columns:"4"}}),e._v(" "),t("ExampleRow",{attrs:{data:e.header_data.dropdownItemSpecs(),columns:"4"}}),e._v(" "),t("h5",[e._v("Callout Button")]),e._v(" "),t("ExampleRow",{attrs:{data:e.header_data.calloutButtonSpecs(),columns:"4"}}),e._v(" "),t("h5",[e._v("Search Bar")]),e._v(" "),t("ExampleRow",{attrs:{data:e.header_data.searchBarSpecs(),columns:"4"}}),e._v(" "),t("h3",[e._v("Accessibility")]),e._v(" "),t("p",[e._v("\n    There should be an invisible link at the top of the page that allows users to skip the navigation and go straight to the main content. It must be the first item that the screen reader reads and the keyboard tabs to. \n  ")]),e._v(" "),t("p",[e._v("\n    Navigation links should show a visible focus state when tabbed to by a user.\n  ")]),e._v(" "),t("h4",[e._v("References")]),e._v(" "),t("a",{attrs:{href:"https://webaim.org/techniques/skipnav/"}},[e._v("https://webaim.org/techniques/skipnav/")])],1)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[e._v("Agency lockup")]),e._v(" "),t("li",[e._v("Main navigation links")]),e._v(" "),t("li",[e._v("Official government website banner")]),e._v(" "),t("li",[e._v("Search bar: allow users to search key terms on the site")]),e._v(" "),t("li",[e._v("Utility navigation links "),t("em",[e._v("(optional)")])]),e._v(" "),t("li",[e._v("Callout button "),t("em",[e._v("(optional)")]),e._v(": can be used for actions like sign in, or sign up. There should only be one action associated with the callout button.")])])}],!1,null,null,null);n.default=component.exports}}]);