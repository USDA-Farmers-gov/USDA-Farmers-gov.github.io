(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{269:function(n,e,t){"use strict";t.r(e);t(32),t(47),t(33),t(49),t(48),t(31),t(25),t(26),t(13);var r={specs:function(){return[{code:{"Official Gov Banner":"background: #F7F7F7;","Main Header":"background: #FFFFFF;","Main Navigation Bar":"background: #006546;"}},{code:{"Default Nav Item Text":"font-family: Public Sans\n            font-weight: Regular;\n            font-size: 16px;\n            line-height: 24px;\n            color: #FFFFFF;","Current/Hover Nav Item":"font-weight: Bold;","Current/Hover Indicator":"background: #FFFFFF;"}},{code:{"Utility Nav Link":"font-family: Public Sans\n            font-weight: Regular;\n            font-size: 14px;\n            line-height: 22px;\n            color: #212121;","Utility Nav Link Hover":"text-decoration: underline;"}}]},dropdownGridSpecs:function(){return[{code:{"Dropdown Background":"background: #FFFFFF;\n            box-shadow: 0 2px 8px 0 #BBBBBB;"}},{code:{"Nav Item Title":"font-family: Public Sans;\n            font-weight: Bold;\n            font-size: 16px;\n            color: #006546;\n            line-height: 24px;"}},{code:{"Dropdown Divider":"border: 1px #BBBBBB;"}}]},dropdownItemSpecs:function(){return[{markup:"",code:{Default:"font-family: Public Sans;\n            font-weight: Regular;\n            font-size: 16px;\n            color: #212121;\n            line-height: 24px;"}},{markup:"",code:{"Selected Background":"background: #DBEDE0;","Selected Bar":"background: #006546;"}},{markup:"",code:{Hovered:"text-decoration: underline;"}},{markup:"",code:{Focused:"text-decoration: underline;\n              shadow: #1B69D3"}}]},calloutButtonSpecs:function(){return[{code:{Text:"font-family: Public Sans\n            font-weight: Bold;\n            font-size: 16px;\n            color: #212121;\n            line-height: 20px;"}},{code:{Background:"background: #FFFFFF;\n              box-shadow: 0 2px 8px 0 #BBBBBB;\n              border-radius: 0 0 2px 2px;"}}]},searchBarSpecs:function(){return[{code:{"Placeholder Text":"font-family: Public San\n            font-weight: Regular;\n            font-size: 14px;\n            line-height: 22px;\n            color: #707070;"}},{code:{"Active Text":"font-family: Public San\n            font-weight: Regular;\n            font-size: 14px;\n            line-height: 22px;\n            color: #212121;"}},{code:{"Default Search Button":"background: #F7F7F7;\n              border-radius: 0 4px 4px 0;"}},{code:{"Default Search Icon":"background: #212121;"}}]},utilityNavLinks:function(){return[{name:"Utility Nav Link"},{name:"Utility Nav Link"},{name:"Utility Nav Link"}]},mainNavMarkup:function(){var n="";return r.mainNavLinks().forEach((function(e){var t=e.submenu?r.makeSubMenu(e.submenu):"",o=e.hover?" hover":"";n=n+'<li>\n                          <a href="#" class="nav-link'+o+'">\n                            <span>'+e.name+"</span>\n                          </a>\n                          "+t+"\n                        </li>"})),'<ul class="primary-nav" role="navigation" aria-label="Primary">'+n+"</ul>"},utilityNavMarkup:function(){var n="";return r.utilityNavLinks().forEach((function(e){n=n+'<li>\n                  <a href="#">'+e.name+"</a>\n                </li>"})),'<div class="utility-nav">\n              <ul class="usa-unstyled-list utility-nav-links usa-nav-secondary-links">\n                '+n+"\n              </ul>\n            </div>"},calloutButtonGridMarkup:function(){return'<div class="callout-button-grid">'+r.calloutButtonMarkup()+'\n            <div class="callout-button-middle dashed-blue dashed-blue-vertical"></div>\n            <div class="callout-button-middle-span span-blue span-blue-vertical"></div>\n            <div class="callout-button-middle-dimension dimension-blue dimension-blue-vertical">8px</div>\n  \n            <div class="callout-button-right-span span-red span-red-horizontal"></div>\n            <div class="callout-button-right-dimension dimension-red dimension-red-horizontal">48px</div>\n            \n            <div class="callout-button-bottom-span span-blue span-blue-vertical"></div>\n            <div class="callout-button-bottom-dimension dimension-blue dimension-blue-vertical">216px</div>\n            </div>'},calloutButtonMarkup:function(){return'<div class="header-button">\n                <a href="/sign-in" title="Button Placeholder">\n                  Button Placeholder\n                  <span class="arrow" alt="arrow" tabindex="-1"></span>\n                </a>\n              </div>'},searchButtonGridMarkup:function(){return'<div class="search-button-grid">'+r.searchFieldMarkup()+'\n              <div class="search-button-top-dimension dimension-blue dimension-blue-vertical">45px</div>\n              <div class="search-button-top-span span-blue span-blue-vertical"></div>\n              \n              <div class="search-button-right-span span-red span-red-horizontal"></div>\n              <div class="search-button-right-dimension dimension-red dimension-red-horizontal">34px</div>\n\n              <div class="search-button-bottom-span span-blue span-blue-vertical"></div>\n              <div class="search-button-bottom-dimension dimension-blue dimension-blue-vertical">216px</div>\n            </div>'},searchFieldMarkup:function(){return'<div id="search-field">\n                <form class="search" action="[SEARCH-URL]">\n                  <div role="search">\n                    <label class="usa-sr-only" for="header-search">Search this site</label>\n                    <input id="header-search" autocomplete="off" accesskey="i" name="query" type="search" placeholder="Search this site" tabindex="0">\n                    <button type="submit" tabindex="0">\n                      <span class="usa-sr-only">Search</span>\n                    </button>\n                    <input name="commit" type="hidden" value="Search">\n                  </div>\n                </form>\n              </div>'},headerSpecs:function(){return'<div class="header-grid-container">\n              <div class="header-grid">\n                '+r.headerMarkup()+'\n                <div class="header-nav-item-1a dashed-blue dashed-blue-dark-bg-vertical"></div>\n                <div class="header-nav-item-1a-span span-blue span-blue-vertical"></div>\n                <div class="header-nav-item-1a-dimension dimension-blue dimension-blue-vertical">24px</div>\n\n                <div class="header-nav-item-1b dashed-blue dashed-blue-dark-bg-vertical"></div>\n                <div class="header-nav-item-1b-span span-blue span-blue-vertical"></div>\n                <div class="header-nav-item-1b-dimension dimension-blue dimension-blue-vertical">24px</div>\n\n                <div class="header-nav-item-2a dashed-blue dashed-blue-dark-bg-vertical"></div>\n                <div class="header-nav-item-2a-span span-blue span-blue-vertical"></div>\n                <div class="header-nav-item-2a-dimension dimension-blue dimension-blue-vertical">24px</div>\n\n                <div class="header-nav-item-2b dashed-blue dashed-blue-dark-bg-vertical"></div>\n                <div class="header-nav-item-2b-span span-blue span-blue-vertical"></div>\n                <div class="header-nav-item-2b-dimension dimension-blue dimension-blue-vertical">24px</div>\n\n                <div class="header-nav-link-bottom dashed-red dashed-red-dark-bg-horizontal"></div>\n                <div class="header-nav-link-bottom-span span-red span-red-horizontal"></div>\n                <div class="header-nav-link-bottom-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                <div class="header-right-top-span span-red span-red-horizontal"></div>\n                <div class="header-right-top-dimension dimension-red dimension-red-horizontal">80px</div>\n\n                <div class="header-right-bottom-span span-red span-red-horizontal"></div>\n                <div class="header-right-bottom-dimension dimension-red dimension-red-horizontal">64px</div>\n\n                <div class="header-nav-link-first dashed-blue dashed-blue-vertical"></div>\n                <div class="header-nav-link-first-span span-blue span-blue-vertical"></div>\n                <div class="header-nav-link-first-dimension dimension-blue dimension-blue-vertical">20px</div>\n\n                <div class="header-nav-link-second dashed-blue dashed-blue-vertical"></div>\n                <div class="header-nav-link-second-span span-blue span-blue-vertical"></div>\n                <div class="header-nav-link-second-dimension dimension-blue dimension-blue-vertical">20px</div>\n                </div>\n              </div>'},headerMarkup:function(data){var n="has-submenu",e=data&&data.expandMenus?" submenu-item-active":"",t=data&&data.expandMenus?"true":"false",o=data&&data.expandMenus?"false":"true";return data&&data.expandMenus&&(" submenu-item-active",n+=" submenu-item-active"),'<header class="main-header" role="banner" aria-label="Page Header">\n              <a href="#main-content" class="skip-nav" role="navigation" aria-label="Skip to Main Content">Skip to main content</a>\n              \x3c!--Skip to Main Content--\x3e\n              <div class="usa-banner" id="usa-gov-web-banner">\n                <div class="usa-accordion">\n                  <header class="usa-banner-header" aria-label="Official United States Government Website Disclaimer">\n                    <div class="usa-banner-inner container">\n                      <img src="/images/flag-favicon-57.png" alt="U.S. flag">\n                      <div class="usa-banner-text">\n                        <p>An official website of the United States government\n                          <button class="usa-accordion-button usa-banner-button" aria-expanded="false" aria-controls="gov-banner">\n                            <span class="usa-banner-button-text">Here\'s how you know</span>\n                          </button>\n                        </p>\n                      </div>\n                    </div>\n                  </header>\n                  <div class="container">\n                    <div class="usa-banner-content row usa-accordion-content" id="gov-banner" aria-hidden="true">\n                      <div class="usa-banner-guidance-gov medium-6">\n                        <img class="usa-banner-icon usa-media_block-img" src="/images/icon-dot-gov.svg" alt="Dot gov">\n                        <div class="usa-media_block-body">\n                          <strong>The .gov means it\'s official.</strong>\n                          <br>\n                          <div>Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you\'re on a .gov or .mil site by inspecting your browser\'s address (or "location") bar.</div>\n                        </div>\n                      </div>\n                      <div class="usa-banner-guidance-ssl medium-6">\n                        <img class="usa-banner-icon usa-media_block-img" src="/images/icon-https.svg" alt="SSL">\n                        <div class="usa-media_block-body">\n                          <div>This site is also protected by an SSL (Secure Sockets Layer) certificate that\'s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted &nbsp;— in other words, any information or browsing history that you provide is transmitted securely.</div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="header-inner-wrap">\n                <div>\n                  '+r.calloutButtonMarkup()+'\n                  <div class="agency-banner">\n                    <div class="agency-logo">\n                      <a class="agency-logo-text" href="#" title="Home" aria-label="Home Page" rel="home">\n                        <span title="Home" rel="home" class="agency-logo">\n                          <img src="/images/usda-symbol.svg" alt="USDA Logo" class="usda-logo-img">\n                        </span>\n                        <div class="agency-identity">\n                          <div class="agency-name">Name of Agency</div>\n                          <div class="tagline">Agency Name Second Line</div>\n                        </div>\n                      </a>\n                    </div>\n                    <button type="button" name="button" class="mobile-menu-button">MENU</button>\n                  </div>\n                   '+r.utilityNavMarkup()+'\n                </div>\n              </div>\n              <nav class="primary-nav-wrap" aria-label="Navigation">\n                <div class="container">\n                  <ul class="primary-nav usa-accordion" role="navigation" aria-label="Primary">\n                    <li>\n                      <a href="#" class="nav-link">\n                        <span>Nav Link</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="#" class="nav-link">\n                        <span>Nav Link</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a class="accordion-button nav-link'+e+'" aria-expanded="'+t+'" aria-controls="megamenu-1" tabindex="0">\n                        <span>\n                          Nav Link\n                          <span class="nav-arrow"></span>\n                        </span>\n                      </a>\n                      <ul id="megamenu-1" class="nav-submenu" aria-hidden="'+o+'">\n                        <li>\n                          <a href="#">\n                            <span>Nav Item Title</span>\n                          </a>\n                        </li>\n                        <li>\n                          <a href="#">\n                            <span>Subsection Title</span>\n                          </a>\n                        </li>\n                        <li class="'+n+'">\n                          <a href="#">\n                            <span>Selected subsection menu with a long page title</span>\n                          </a>\n                          <ul class="nav-submenu-submenu">\n                            <li>\n                              <a href="/media/blog">\n                                <span>Level 4 Subsection Title</span>\n                              </a>\n                            </li>\n                            <li>\n                              <a href="/media/blog">\n                                <span>Subsection Title Hovered</span>\n                              </a>\n                            </li>\n                            <li>\n                              <a href="/media/blog">\n                                <span>Level 4 Subsection Title</span>\n                              </a>\n                            </li>\n                          </ul>\n                          </li>\n                          <li>\n                            <a href="#">\n                              <span>Subsection Title Longer</span>\n                            </a>\n                          </li>\n                          <li>\n                            <a href="#">\n                              <span>Subsection Title</span>\n                            </a>\n                          </li>\n                          <li class="has-submenu">\n                            <a href="#">\n                              <span>Subsection with lower level</span>\n                            </a>\n                            <ul class="nav-submenu-submenu">\n                            <li>\n                              <a href="/media/blog">\n                                <span>Subsection Title</span>\n                              </a>\n                            </li>\n                            <li>\n                              <a href="/media/blog">\n                                <span>Subsection Title</span>\n                              </a>\n                            </li>\n                          </ul>\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                  '+r.searchFieldMarkup()+'\n                </div>\n              </nav>\n            </header>\n            <div class="mobile-primary-nav">\n              <div class="nav-container">\n              </div>\n            </div>'}},header=r;function o(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,d=!0,c=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return d=n.done,n},e:function(n){c=!0,o=n},f:function(){try{d||null==t.return||t.return()}finally{if(c)throw o}}}}function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var i=0,t=new Array(e);i<e;i++)t[i]=n[i];return t}var d={layout:"farmers",head:function(){return{title:"Header"}},data:function(){return{data:header}},mounted:function(){var n=document.querySelectorAll(".primary-nav a"),e=document.querySelectorAll(".utility-nav a"),t=document.querySelectorAll(".header-button"),r=document.getElementById("header-search"),o=document.querySelectorAll("#search-field button"),l=document.querySelectorAll(".agency-logo-text");this.preventLinkClicks(n),this.preventLinkClicks(e),this.preventLinkClicks(t),this.preventLinkClicks(o),this.preventLinkClicks(l),r.addEventListener("keydown",(function(n){13===n.which&&n.preventDefault()}))},methods:{preventLinkClicks:function(n){var e,t=o(n);try{for(t.s();!(e=t.n()).done;){e.value.addEventListener("click",(function(n){n.preventDefault()}))}}catch(n){t.e(n)}finally{t.f()}}}},c=t(2),component=Object(c.a)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",[n._v("Header")]),n._v(" "),t("p",{staticClass:"intro-text text-margin-bottom"},[n._v("\n    The farmers.gov header combines the primary navigation of the website, the utility navigation, the search bar, and a lockup in one reoccurring component on the site. The header primarily serves a navigational function.\n  ")]),n._v(" "),t("h3",[n._v("Guidelines")]),n._v(" "),t("p",[n._v("\n    Use clear, concise, and intuitive link navigation labels. An underline should be used as a visual cue to indiciate the current page. If there are lower level pages nested within the main navigation items, use dropdown menus to present those options.\n  ")]),n._v(" "),t("p",[n._v("\n    The header contains:\n  ")]),n._v(" "),n._m(0),n._v(" "),t("h3",[n._v("Specs")]),n._v(" "),t("h4",[n._v("Default")]),n._v(" "),t("div",{staticClass:"default-header-menu",domProps:{innerHTML:n._s(n.data.headerMarkup())}}),n._v(" "),t("ExampleRow",{attrs:{data:n.data.specs(),columns:"4"}}),n._v(" "),t("Code",{attrs:{markup:n.data.headerMarkup()}}),n._v(" "),t("h4",[n._v("Dropdown Menu")]),n._v(" "),t("p",[n._v("\n    The dropdown menu should expand on click and remain visible on the screen until the user clicks a menu link or anywhere outside the dropdown menu.\n  ")]),n._v(" "),t("img",{attrs:{src:"/images/header-menu-dropdown-example.png"}}),n._v(" "),t("ExampleRow",{attrs:{data:n.data.dropdownGridSpecs(),columns:"4"}}),n._v(" "),t("ExampleRow",{attrs:{data:n.data.dropdownItemSpecs(),columns:"4"}}),n._v(" "),t("h5",[n._v("Callout Button")]),n._v(" "),t("p",{staticClass:"callout-button-grid",domProps:{innerHTML:n._s(n.data.calloutButtonGridMarkup())}}),n._v(" "),t("ExampleRow",{attrs:{data:n.data.calloutButtonSpecs(),columns:"4"}}),n._v(" "),t("h5",[n._v("Search Bar")]),n._v(" "),t("div",{domProps:{innerHTML:n._s(n.data.searchButtonGridMarkup())}}),n._v(" "),t("ExampleRow",{attrs:{data:n.data.searchBarSpecs(),columns:"4"}}),n._v(" "),t("h3",[n._v("Accessibility")]),n._v(" "),t("p",[n._v("\n    There should be an invisible link at the top of the page that allows users to skip the navigation and go straight to the main content. It must be the first item that the screen reader reads and the keyboard tabs to. \n  ")]),n._v(" "),t("p",[n._v("\n    Navigation links should show a visible focus state when tabbed to by a user.\n  ")]),n._v(" "),t("h4",[n._v("References")]),n._v(" "),t("a",{attrs:{href:"https://webaim.org/techniques/skipnav/"}},[n._v("https://webaim.org/techniques/skipnav/")])],1)}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ul",[t("li",[n._v("Agency lockup")]),n._v(" "),t("li",[n._v("Main navigation links")]),n._v(" "),t("li",[n._v("Official government website banner")]),n._v(" "),t("li",[n._v("Search bar: allow users to search key terms on the site")]),n._v(" "),t("li",[n._v("Utility navigation links "),t("em",[n._v("(optional)")])]),n._v(" "),t("li",[n._v("Callout button "),t("em",[n._v("(optional)")]),n._v(": can be used for actions like sign in, or sign up. There should only be one action associated with the callout button.")])])}],!1,null,null,null);e.default=component.exports}}]);