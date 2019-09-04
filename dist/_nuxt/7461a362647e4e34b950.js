(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5],{248:function(t,e,o){"use strict";o.r(e);var n={primaryButton:function(){return[{header:"Default",markup:n.outputButtonMarkup("",!0),code:{background:"border-radius: 4px;\n                        color: #1A6AD3;\n                        shadow: 0;1;4;0  #BBBBBB;",text:'color: #FFFFFF;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Small",classes:"sm-btn",markup:n.outputButtonMarkup("sm-btn",!0),code:{background:"border-radius: 4px;\n                        color: #1A6AD3;\n                        shadow: 0;1;4;0  #BBBBBB;",text:'color: #FFFFFF;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Large",classes:"lg-btn",markup:n.outputButtonMarkup("lg-btn",!0),code:{background:"border-radius: 4px;\n                        color: #1A6AD3;\n                        shadow: 0;1;4;0  #BBBBBB;",text:'color: #FFFFFF;\n                    font-family: "Public Sans";\n                    font-size: 20px;\n                    font-weight: bold;\n                    line-height: 26px;'}}]},primaryButtonStates:function(){return[{header:"Hover",classes:"hover-color",markup:n.outputButtonMarkup("hover-color"),code:{background:"color: #004785;"}},{header:"Active",classes:"active-color",markup:n.outputButtonMarkup("active-color"),code:{background:"color: #122E51;"}},{header:"Focus",classes:"focus-color",markup:n.outputButtonMarkup("focus-color"),code:{background:"shadow: #1B69D3;"}},{header:"Disabled",classes:"disabled",markup:n.outputButtonMarkup("disabled"),code:{background:"color: #BBBBBB;"}}]},secondaryButton:function(){return[{header:"Default",classes:"outline",markup:n.outputButtonMarkup("outline",!0),code:{background:"border: 1px #1A6AD3;\n                        border-radius: 4px;\n                        color: #FFFFFF;\n                        shadow: 0;1;4;0  #BBBBBB;",text:'color: #1A6AD3;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Small",classes:"sm-btn outline",markup:n.outputButtonMarkup("sm-btn outline",!0),code:{background:"border: 1px #1A6AD3;\n                        border-radius: 4px;\n                        color: #FFFFFF;\n                        shadow: 0;1;4;0  #BBBBBB;",text:'color: #1A6AD3;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Large",classes:"lg-btn outline",markup:n.outputButtonMarkup("lg-btn outline",!0),code:{background:"border: 1px #1A6AD3;\n                        border-radius: 4px;\n                        color: #FFFFFF;\n                        shadow: 0;1;4;0  #BBBBBB;",text:'color: #1A6AD3;\n                    font-family: "Public Sans";\n                    font-size: 20px;\n                    font-weight: bold;\n                    line-height: 26px;'}}]},secondaryButtonStates:function(){return[{header:"Hover",classes:"hover-color outline",markup:n.outputButtonMarkup("hover-color outline"),code:{background:"border: #004785;",text:"color: #004785;"}},{header:"Active",classes:"active-color outline",markup:n.outputButtonMarkup("active-color outline"),code:{background:"border: #122E51;",text:"color: #122E51;"}},{header:"Focus",classes:"focus-color outline",markup:n.outputButtonMarkup("focus-color outline"),code:{background:"shadow: #1B69D3;",text:"color: #122E51;"}},{header:"Disabled",classes:"disabled outline",markup:n.outputButtonMarkup("disabled outline"),code:{background:"border: #BBBBBB;",text:"color: #BBBBBB;"}}]},tertiaryButtonDefault:function(){return[{class:"tertiary",markup:n.outputButtonMarkup("tertiary"),code:{text:'color: #1A6AD3;\n                  font-family: "Public Sans";\n                  font-size: 16px;\n                  font-weight: bold;\n                  line-height: 20px;'}}]},tertiaryButton:function(){return[{header:"Hover",classes:"hover-color tertiary",markup:n.outputButtonMarkup("hover-color tertiary"),code:{text:"color: #004785;"}},{header:"Active",classes:"active-color tertiary",markup:n.outputButtonMarkup("active-color tertiary"),code:{text:"color: #122E51;"}},{header:"Focus",classes:"focus-color tertiary",markup:n.outputButtonMarkup("focus-color tertiary"),code:{text:"shadow: #1B69D3;"}},{header:"Disabled",classes:"disabled tertiary",markup:n.outputButtonMarkup("disabled tertiary"),code:{text:"color: #BBBBBB;"}}]},feedbackButton:function(){return[{header:"Default",classes:"feedback",markup:n.outputButtonMarkup("feedback",!0),code:{background:"border: 2px #1A6AD3;\n                        color: #FFFFFF;\n                        shadow: 0;1;4;0\n                        #BBBBBB;",text:'color: #1A6AD3;\n                    font-family: "Public Sans";\n                    font-size: 16px;\n                    font-weight: bold;\n                    line-height: 20px;'}},{header:"Hover",classes:"hover-color feedback",markup:n.outputButtonMarkup("hover-color feedback"),code:{background:"border: 2px #004785;",text:"color: #004785;"}},{header:"Active",classes:"active-color feedback",markup:n.outputButtonMarkup("active-color feedback"),code:{background:"border: 2px #122E51;",text:"color: #122E51;"}},{header:"Focus",classes:"focus-color feedback",markup:n.outputButtonMarkup("focus-color feedback"),code:{background:"border: 2px #122E51;\n                           shadow: #1B69D3;",text:"color: #122E51;"}}]},outputButtonMarkup:function(t,e,o){var r=n.setButtonClasses(t),c=n.getButtonDimensions(r),l=t&&t.indexOf("feedback")>=0?"Yes":"Button",d=t?"button-grid "+t:"button-grid";return t&&t.indexOf("feedback")>=0&&0===o&&(e=!0),e?'<div class="'+d+'">\n                <div class="button">\n                  <button class="'+r+'" tabindex="-1">'+l+'</button>\n                </div>\n                <div class="button-height span-blue span-blue-horizontal"></div>\n                <div class="button-dimension-height dimension-blue dimension-blue-vertical">'+c.height+'px</div>\n                <div class="button-width span-blue span-blue-vertical"></div>\n                <div class="button-dimension-width dimension-blue dimension-blue-horizontal">'+c.width+"px</div>\n              </div>":'<button class="'+r+'" tabindex="-1">'+l+"</button>"},setButtonClasses:function(t){return t?"btn "+t:"btn"},getButtonDimensions:function(t){var e={width:134,height:42};return t.indexOf("sm-btn")>=0&&(e={width:96,height:32}),t.indexOf("lg-btn")>=0&&(e={width:216,height:52}),t.indexOf("feedback")>=0&&(e={width:64,height:64}),e}};e.default=n},261:function(t,e,o){"use strict";o.r(e);var n=o(248),r={layout:"farmers",head:function(){return{title:"Buttons"}},data:function(){return{primary_button:n.default.primaryButton(),primary_button_states:n.default.primaryButtonStates(),secondary_button:n.default.secondaryButton(),secondary_button_states:n.default.secondaryButtonStates(),tertiary_button_default:n.default.tertiaryButtonDefault(),tertiary_button:n.default.tertiaryButton(),feedback_button:n.default.feedbackButton()}}},c=o(4),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Buttons")]),t._v(" "),o("p",{staticClass:"intro-text"},[t._v("Buttons are used to communicate important actions the users can take, such as download, apply, or start. Depending on the context and desired outcome of the design, there are multiple styles and sizes of buttons available for use.")]),t._v(" "),o("h3",[t._v("Primary Buttons")]),t._v(" "),o("p",[t._v("Primary buttons carry a strong visual prominence to signify that they are the expected action, versus possible secondary or tertiary actions.")]),t._v(" "),o("p",[t._v("Our primary buttons are blue as the color allows for distinct contrast with the rest of the visuals on the site (mostly white and green), and thus support its purpose of highlighting an important action. We recommend using upper case for the labels with those buttons, as well as keeping the actions within the buttons discrete and simple. Avoid wrapping button labels in two rows of text.")]),t._v(" "),o("p",[t._v("We utilize, and have provided, a variety of button sizes to accommodate different space constrictions and intended uses.")]),t._v(" "),t._m(0),t._v(" "),t.primary_button?o("ExampleRow",{attrs:{data:t.primary_button,columns:"3"}}):t._e(),t._v(" "),t.primary_button_states?o("ExampleRow",{attrs:{data:t.primary_button_states,columns:"4"}}):t._e(),t._v(" "),o("h3",[t._v("Secondary Buttons")]),t._v(" "),o("p",[t._v("Secondary buttons carry less visual weight than primary buttons, which helps ensure that when they are used together the primary action will be more noticeable. The difference between their “weight” is immediately noticeable, so that users can make the correct choice. These buttons utilize the same blue as primary buttons but only as an outline.")]),t._v(" "),t._m(1),t._v(" "),t.secondary_button?o("ExampleRow",{attrs:{data:t.secondary_button,columns:"3"}}):t._e(),t._v(" "),t.secondary_button_states?o("ExampleRow",{attrs:{data:t.secondary_button_states,columns:"4"}}):t._e(),t._v(" "),o("h3",[t._v("Tertiary Buttons")]),t._v(" "),o("p",[t._v("The tertiary button should be used for instances of user actions that are of less importance than those reserved for primary and secondary buttons. Those buttons should be used for card design. Tertiary buttons should not be used in place of ‘text links,’ as tertiary buttons are not used for user navigation.")]),t._v(" "),t.tertiary_button_default?o("ExampleRow",{attrs:{data:t.tertiary_button_default,columns:"1"}}):t._e(),t._v(" "),t.tertiary_button?o("ExampleRow",{attrs:{data:t.tertiary_button,columns:"4"}}):t._e(),t._v(" "),o("h3",[t._v("Feedback Button")]),t._v(" "),o("p",[t._v("Feedback buttons provide users with a quick and simple way to indicate if the specific page or feature they visited was useful to them, by simple clicking Yes or No. Feedback buttons are blue and round so they may be easily distinguished from primary and secondary action buttons. They should be placed at the bottom of the page to minimize distraction.")]),t._v(" "),t._m(2),t._v(" "),o("ExampleRow",{attrs:{data:t.feedback_button,rowClasses:"feedback",columns:"4"}}),t._v(" "),o("h3",[t._v("Accessibility")]),t._v(" "),o("p",[t._v("Buttons should show a visible focus state when tabbed to by a user.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("p",[t._v("When using multiple buttons on a page which have the same label, such as “Read More,” include more context for users of assistive technologies such as screen readers. The “aria-labelledby” attribute can be used to provide more details about the button’s action.")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("button",{staticClass:"btn",attrs:{tabindex:"-1"}},[this._v("button")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("button",{staticClass:"btn outline",attrs:{tabindex:"-1"}},[this._v("button")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("button",{staticClass:"btn feedback",attrs:{tabindex:"-1"}},[this._v("Yes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Avoid using "),e("strong",[this._v("<div>")]),this._v(" or "),e("strong",[this._v("<img>")]),this._v(" tags for buttons as screen readers may not know that these are usable buttons.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Inactive or disabled button states are not required to meet color contrast requirements.\n  "),e("br"),this._v("\n  See "),e("a",{attrs:{href:"https://www.w3.org/TR/WCAG21/#non-text-contrast"}},[this._v("https://www.w3.org/TR/WCAG21/#non-text-contrast")])])}],!1,null,null,null);e.default=component.exports}}]);