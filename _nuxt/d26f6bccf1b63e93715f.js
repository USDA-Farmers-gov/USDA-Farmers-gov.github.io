(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{218:function(t,e,o){"use strict";o.r(e);var n=o(17),r={primaryButton:function(){return[{header:"Default",markup:r.outputButtonMarkup("",!0),code:{Background:"border-radius: 4px;\n                        color: #1A6AD3;\n                        shadow: 0;1;4;0  #BBBBBB;",Text:'color: #FFFFFF;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Small",classes:"sm-btn",markup:r.outputButtonMarkup("sm-btn",!0),code:{Background:"border-radius: 4px;\n                        color: #1A6AD3;\n                        shadow: 0;1;4;0  #BBBBBB;",Text:'color: #FFFFFF;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Large",classes:"lg-btn",markup:r.outputButtonMarkup("lg-btn",!0),code:{Background:"border-radius: 4px;\n                        color: #1A6AD3;\n                        shadow: 0;1;4;0  #BBBBBB;",Text:'color: #FFFFFF;\n                    font-family: "Public Sans";\n                    font-size: 20px;\n                    font-weight: bold;\n                    line-height: 26px;'}}]},primaryButtonStates:function(){return[{header:"Hover",classes:"hover-color",markup:r.outputButtonMarkup("hover-color"),code:{Background:"color: #004785;"}},{header:"Active",classes:"active-color",markup:r.outputButtonMarkup("active-color"),code:{Background:"color: #122E51;"}},{header:"Focus",classes:"focus-color",markup:r.outputButtonMarkup("focus-color"),code:{Background:"shadow: #1B69D3;"}},{header:"Disabled",classes:"disabled",markup:r.outputButtonMarkup("disabled"),code:{Background:"color: #BBBBBB;"}}]},secondaryButton:function(){return[{header:"Default",classes:"outline",markup:r.outputButtonMarkup("outline",!0),code:{Background:"border: 1px #1A6AD3;\n                        border-radius: 4px;\n                        color: #FFFFFF;\n                        shadow: 0;1;4;0  #BBBBBB;",Text:'color: #1A6AD3;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Small",classes:"sm-btn outline",markup:r.outputButtonMarkup("sm-btn outline",!0),code:{Background:"border: 1px #1A6AD3;\n                        border-radius: 4px;\n                        color: #FFFFFF;\n                        shadow: 0;1;4;0  #BBBBBB;",Text:'color: #1A6AD3;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Large",classes:"lg-btn outline",markup:r.outputButtonMarkup("lg-btn outline",!0),code:{Background:"border: 1px #1A6AD3;\n                        border-radius: 4px;\n                        color: #FFFFFF;\n                        shadow: 0;1;4;0  #BBBBBB;",Text:'color: #1A6AD3;\n                    font-family: "Public Sans";\n                    font-size: 20px;\n                    font-weight: bold;\n                    line-height: 26px;'}}]},secondaryButtonStates:function(){return[{header:"Hover",classes:"hover-color outline",markup:r.outputButtonMarkup("hover-color outline"),code:{Background:"border: #004785;",Text:"color: #004785;"}},{header:"Active",classes:"active-color outline",markup:r.outputButtonMarkup("active-color outline"),code:{Background:"border: #122E51;",Text:"color: #122E51;"}},{header:"Focus",classes:"focus-color outline",markup:r.outputButtonMarkup("focus-color outline"),code:{Background:"shadow: #1B69D3;",Text:"color: #122E51;"}},{header:"Disabled",classes:"disabled outline",markup:r.outputButtonMarkup("disabled outline"),code:{Background:"border: #BBBBBB;",Text:"color: #BBBBBB;"}}]},tertiaryButtonDefault:function(){return[{class:"tertiary",markup:r.outputButtonMarkup("tertiary"),code:{Text:'color: #1A6AD3;\n                  font-family: "Public Sans";\n                  font-size: 16px;\n                  font-weight: bold;\n                  line-height: 20px;'}}]},tertiaryButton:function(){return[{header:"Hover",classes:"hover-color tertiary",markup:r.outputButtonMarkup("hover-color tertiary"),code:{Text:"color: #004785;"}},{header:"Active",classes:"active-color tertiary",markup:r.outputButtonMarkup("active-color tertiary"),code:{Text:"color: #122E51;"}},{header:"Focus",classes:"focus-color tertiary",markup:r.outputButtonMarkup("focus-color tertiary"),code:{Text:"shadow: #1B69D3;"}},{header:"Disabled",classes:"disabled tertiary",markup:r.outputButtonMarkup("disabled tertiary"),code:{Text:"color: #BBBBBB;"}}]},feedbackButton:function(){return[{header:"Default",classes:"feedback",markup:r.outputButtonMarkup("feedback",!0),code:{Background:"border: 2px #1A6AD3;\n                        color: #FFFFFF;\n                        shadow: 0;1;4;0\n                        #BBBBBB;",Text:'color: #1A6AD3;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Hover",classes:"hover-color feedback",markup:r.outputButtonMarkup("hover-color feedback"),code:{Background:"border: 2px #004785;",Text:"color: #004785;"}},{header:"Active",classes:"active-color feedback",markup:r.outputButtonMarkup("active-color feedback"),code:{Background:"border: 2px #122E51;",Text:"color: #122E51;"}},{header:"Focus",classes:"focus-color feedback",markup:r.outputButtonMarkup("focus-color feedback"),code:{Background:"border: 2px #122E51;\n                           shadow: #1B69D3;",Text:"color: #122E51;"}}]},outputButtonMarkup:function(t,e,o){var c=r.setButtonClasses(t),l=r.getButtonDimensions(c),d=t&&t.indexOf("feedback")>=0?"Yes":"Button",h=n.a.setClasses("button-grid ",t);return t&&t.indexOf("feedback")>=0&&0===o&&(e=!0),e?'<div class="'+h+'">\n                <div class="button">\n                  <button class="'+c+'" tabindex="-1">'+d+'</button>\n                </div>\n                <div class="button-height span-blue span-blue-horizontal"></div>\n                <div class="button-dimension-height dimension-blue dimension-blue-vertical">'+l.height+'px</div>\n                <div class="button-width span-blue span-blue-vertical"></div>\n                <div class="button-dimension-width dimension-blue dimension-blue-horizontal">'+l.width+"px</div>\n              </div>":'<button class="'+c+'" tabindex="-1">'+d+"</button>"},setButtonClasses:function(t){return n.a.setClasses("btn",t)},getButtonDimensions:function(t){var e={width:134,height:42};return t.indexOf("sm-btn")>=0&&(e={width:96,height:32}),t.indexOf("lg-btn")>=0&&(e={width:216,height:52}),t.indexOf("feedback")>=0&&(e={width:64,height:64}),e}},c=r,l={layout:"farmers",head:function(){return{title:"Buttons"}},data:function(){return{data:c}}},d=o(2),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Buttons")]),t._v(" "),o("p",{staticClass:"intro-text text-margin-bottom"},[t._v("\n    Buttons are used to communicate important actions the users can take, such as download, apply, or start. Depending on the context and desired outcome of the design, there are multiple styles and sizes of buttons available for use.\n  ")]),t._v(" "),o("h3",[t._v("Primary Buttons")]),t._v(" "),o("p",[t._v("\n    Primary buttons carry a strong visual prominence to signify that they are the expected action, versus possible secondary or tertiary actions.\n  ")]),t._v(" "),o("p",[t._v("\n    Our primary buttons are blue as the color allows for distinct contrast with the rest of the visuals on the site (mostly white and green), and thus support its purpose of highlighting an important action. We recommend using upper case for the labels with those buttons, as well as keeping the actions within the buttons discrete and simple. Avoid wrapping button labels in two rows of text.\n  ")]),t._v(" "),o("p",{staticClass:"text-margin-bottom"},[t._v("\n    We utilize, and have provided, a variety of button sizes to accommodate different space constrictions and intended uses.\n  ")]),t._v(" "),o("button",{staticClass:"btn",attrs:{tabindex:"-1"}},[t._v("button")]),t._v(" "),o("ExampleRow",{attrs:{data:t.data.primaryButton(),columns:"3"}}),t._v(" "),o("ExampleRow",{attrs:{data:t.data.primaryButtonStates(),columns:"4"}}),t._v(" "),o("Code",{attrs:{markup:'<button class="btn">button</button>'}}),t._v(" "),o("h3",[t._v("Secondary Buttons")]),t._v(" "),o("p",{staticClass:"text-margin-bottom"},[t._v("\n    Secondary buttons carry less visual weight than primary buttons, which helps ensure that when they are used together the primary action will be more noticeable. The difference between their “weight” is immediately noticeable, so that users can make the correct choice. These buttons utilize the same blue as primary buttons but only as an outline.\n  ")]),t._v(" "),o("button",{staticClass:"btn outline",attrs:{tabindex:"-1"}},[t._v("button")]),t._v(" "),o("ExampleRow",{attrs:{data:t.data.secondaryButton(),columns:"3"}}),t._v(" "),o("ExampleRow",{attrs:{data:t.data.secondaryButtonStates(),columns:"4"}}),t._v(" "),o("Code",{attrs:{markup:'<button class="btn outline">button</button>'}}),t._v(" "),o("h3",[t._v("Tertiary Buttons")]),t._v(" "),o("p",{staticClass:"text-margin-bottom"},[t._v("\n    The tertiary button should be used for instances of user actions that are of less importance than those reserved for primary and secondary buttons. Those buttons should be used for card design. Tertiary buttons should not be used in place of ‘text links,’ as tertiary buttons are not used for user navigation.\n  ")]),t._v(" "),o("ExampleRow",{attrs:{data:t.data.tertiaryButtonDefault(),columns:"1"}}),t._v(" "),o("ExampleRow",{attrs:{data:t.data.tertiaryButton(),columns:"4"}}),t._v(" "),o("Code",{attrs:{markup:'<button class="btn tertiary">button</button>'}}),t._v(" "),o("h3",[t._v("Feedback Button")]),t._v(" "),o("p",{staticClass:"text-margin-bottom"},[t._v("\n    Feedback buttons provide users with a quick and simple way to indicate if the specific page or feature they visited was useful to them, by simple clicking Yes or No. Feedback buttons are blue and round so they may be easily distinguished from primary and secondary action buttons. They should be placed at the bottom of the page to minimize distraction.\n  ")]),t._v(" "),o("button",{staticClass:"btn feedback",attrs:{tabindex:"-1"}},[t._v("Yes")]),t._v(" "),o("ExampleRow",{attrs:{data:t.data.feedbackButton(),rowClasses:"feedback",columns:"4"}}),t._v(" "),o("Code",{attrs:{markup:'<button class="btn feedback">button</button>'}}),t._v(" "),o("h3",[t._v("Accessibility")]),t._v(" "),o("p",[t._v("\n    Buttons should show a visible focus state when tabbed to by a user.\n  ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("p",[t._v("\n    When using multiple buttons on a page which have the same label, such as “Read More,” include more context for users of assistive technologies such as screen readers. The “aria-labelledby” attribute can be used to provide more details about the button’s action.\n  ")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n    Avoid using "),e("strong",[this._v("<div>")]),this._v(" or "),e("strong",[this._v("<img>")]),this._v(" tags for buttons as screen readers may not know that these are usable buttons.\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n    Inactive or disabled button states are not required to meet color contrast requirements.\n    "),e("br"),this._v("\n    See "),e("a",{attrs:{href:"https://www.w3.org/TR/WCAG21/#non-text-contrast"}},[this._v("https://www.w3.org/TR/WCAG21/#non-text-contrast")])])}],!1,null,null,null);e.default=component.exports}}]);