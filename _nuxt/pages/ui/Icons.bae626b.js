(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{261:function(e,t,n){"use strict";n.r(t);var o={interactiveIcons:function(){return[{table_headers:["Icon","Icon Name","Icon Usage"],table_rows:[{text:[o.iconMarkup({classes:"icon caret-right"}),"caret-right","navigate to pages within farmers.gov and USDA"]},{text:[o.iconMarkup({classes:"icon search"}),"search","search button in search box"]},{text:[o.iconMarkup({classes:"icon chevron-up"}),"chevron-down","expand dropdown"]},{text:[o.iconMarkup({classes:"icon chevron-down"}),"chevron-up","collapse dropdown"]},{text:[o.iconMarkup({classes:"icon external-link"}),"external-link","navigate to pages outside of farmers.gov and USDA"]},{text:[o.iconMarkup({classes:"icon close"}),"close","close modals"]},{text:[o.iconMarkup({classes:"icon accordion-expand"}),"accordion-expand","expand accordion"]},{text:[o.iconMarkup({classes:"icon accordion-collapse"}),"accordion-collapse","collapse accordion"]},{text:[o.iconMarkup({classes:"icon popover"}),"popover","show popover"]}]}]},supportingIcons:function(){return[o.iconMarkup({classes:"icon info"}),o.iconMarkup({classes:"icon mail"}),o.iconMarkup({classes:"icon print"}),o.iconMarkup({classes:"icon location"}),o.iconMarkup({classes:"icon phone"})]},illustrativeIcons:function(){return[o.iconMarkup({classes:"outline-icon barn"}),o.iconMarkup({classes:"outline-icon farmer"}),o.iconMarkup({classes:"outline-icon land"}),o.iconMarkup({classes:"outline-icon mfp"})]},iconMarkup:function(data){return'<span class="'+(data.classes?data.classes:"")+'">'},imageMarkup:function(data){var e=data.alt?data.alt:"",t=data.classes?' class="'+data.classes+'"':"";return'<img src="'+data.image+'"'+t+' alt="'+e+'">'}},r=o,c={layout:"farmers",head:function(){return{title:"Icons"}},data:function(){return{data:r}}},l=n(2),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Icons")]),e._v(" "),n("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    Icons show a behavior, support an action, and illustrate content. \n  ")]),e._v(" "),n("h3",[e._v("Interactive Icons")]),e._v(" "),n("p",[e._v("\n    Interactive icons are functional icons that convey element behavior. Most interactive icons are modeled after USWDS's icon styles. They should be exported as a .svg file for higher resolution with a smaller file size.\n  ")]),e._v(" "),n("Table",{attrs:{data:e.data.interactiveIcons()[0],type:"condensed",customClasses:"striping",caption:"Column one contains the icon image as it is diplayed on the page, column two contains icon name, and column three contains a description of its usage."}}),e._v(" "),n("Code",{attrs:{markup:'<span class="icon [ ICON-NAME ]"></span>'}}),e._v(" "),n("h3",[e._v("Click Target")]),e._v(" "),n("p",[e._v("\n    Interactive icons should have a minimum click/touch target of 44x44px. When used with a label, the icon and label should be one target. \n  ")]),e._v(" "),e._m(0),e._v(" "),n("h3",[e._v("Accessibility")]),e._v(" "),n("p",[e._v("\n    Interactive icons need descriptive alternative text. They should meet 3:1 color contrast ratio requirements.\n  ")]),e._v(" "),n("h4",[e._v("References")]),e._v(" "),e._m(1),e._v(" "),n("h3",[e._v("Supporting Icons")]),e._v(" "),n("p",{staticClass:"text-margin-bottom"},[e._v("\n    Supporting icons are non-interactive icons that are used as a visual cue for an action or an important message. They are used in context with text. \n  ")]),e._v(" "),n("h4",[e._v("Specs")]),e._v(" "),n("p",[e._v("\n    Supporting icons are solid filled icons. They are simple geometric shapes that are easily recognizable. They should be exported as a .svg file for higher resolution with a smaller file size.\n  ")]),e._v(" "),e._m(2),e._v(" "),n("div",{staticClass:"row text-margin-bottom"},e._l(e.data.supportingIcons(),(function(t){return n("div",{staticClass:"medium-1",domProps:{innerHTML:e._s(t)}})})),0),e._v(" "),n("h3",[e._v("Accessibility")]),e._v(" "),n("p",[e._v('\n    Supporting icons are used as decorative elements that don’t provide additional information.  Therefore, their alternative text should be empty (alt="") so that they can be skipped over when users utilize assistive technology such as screen readers.\n  ')]),e._v(" "),n("h4",[e._v("References")]),e._v(" "),e._m(3),e._v(" "),n("h3",[e._v("Illustrative Icons")]),e._v(" "),n("p",{staticClass:"text-margin-bottom"},[e._v("\n    Illustrative icons are decorative icons that are used to visually represent the content. They add visual interest to the page and give a preview of the content when used on text heavy pages. Illustrative icons should not have any actions associated with them as they are used purely for decorative purposes.\n  ")]),e._v(" "),n("h3",[e._v("Specs")]),e._v(" "),n("p",[e._v("\n    Illustrative icons have an outlined icon style. Outlined icons have a lighter line weight compared to solid icons, so they don’t overwhelm the associating content. They should use a consistent stroke weight. They should be exported as a .svg file for higher resolution with a smaller file size.\n  ")]),e._v(" "),e._m(4),e._v(" "),n("div",{staticClass:"row text-margin-bottom"},e._l(e.data.illustrativeIcons(),(function(t){return n("div",{staticClass:"medium-2 flex-align-bottom",domProps:{innerHTML:e._s(t)}})})),0),e._v(" "),n("h3",[e._v("Accessibility")]),e._v(" "),n("p",[e._v('\n    Illustrative icons are used as a decorative elements that don’t provide informative content.  Therefore, their alternative text should be empty (alt="") so that they can be skipped over when users utilize assistive technology such as screen readers.\n  ')]),e._v(" "),n("h4",[e._v("References")]),e._v(" "),n("a",{attrs:{href:"https://www.w3.org/WAI/tutorials/images/decorative/"}},[e._v("https://www.w3.org/WAI/tutorials/images/decorative/")])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icons-click-target-grid text-margin-bottom"},[t("img",{staticClass:"highlight-overlay",attrs:{src:"/images/icons/close.svg",alt:""}}),this._v(" "),t("div",{staticClass:"click-target-top-span span-blue span-blue-vertical"}),this._v(" "),t("div",{staticClass:"click-target-top-dimension dimension-blue dimension-blue-vertical"},[this._v("44px")]),this._v(" "),t("div",{staticClass:"click-target-right-span span-red span-red-horizontal"}),this._v(" "),t("div",{staticClass:"click-target-right-dimension dimension-red dimension-red-horizontal"},[this._v("44px")]),this._v(" "),t("div",{staticClass:"icons-click-target mouse-pointer"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"text-margin-bottom"},[t("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"}},[this._v("https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Examples")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"text-margin-bottom"},[t("a",{attrs:{href:"https://www.w3.org/WAI/tutorials/images/decorative/"}},[this._v("https://www.w3.org/WAI/tutorials/images/decorative/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Examples")])])}],!1,null,null,null);t.default=component.exports}}]);