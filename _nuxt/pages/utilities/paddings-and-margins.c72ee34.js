(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{350:function(t,n,e){"use strict";e.r(n);e(45);var r={layout:"farmers",head:function(){return{title:"Paddings and Margins"}},data:function(){return{spacingIntegers:[0,1,2,3,4,5,6,8,10,12,14,16,18,20,22,24,32,40,48,56,64,72,80,88,96,100],spacingClasses:[{name:"p-n",description:"padding all"},{name:"m-n",description:"margins all"},{name:"pt-n, mt-n",description:"padding/margin top"},{name:"pb-n, mb-n",description:"padding/margin bottom"},{name:"pl-n, ml-n",description:"padding/margin left"},{name:"pr-n, mr-n",description:"padding/margin right"},{name:"px-n, mx-n",description:"padding/margin left and right"},{name:"py-n, my-n",description:"padding/margin top and bottom"}],step:.25}},methods:{highlightNumberText:function(text){return text.replace(/\-n/g,'-<span class="highlight-text"><em>n</em></span>')}}},l=e(2),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Paddings and Margins")]),t._v(" "),e("h3",[t._v("Available Classes")]),t._v(" "),e("table",{staticClass:"mb-2"},t._l(t.spacingClasses,(function(n,r){return e("tr",{key:r},[e("td",{domProps:{innerHTML:t._s(t.highlightNumberText(n.name))}}),t._v(" "),e("td",[t._v(t._s(n.description))])])})),0),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("table",[t._m(3),t._v(" "),e("tbody",t._l(t.spacingIntegers,(function(n){return e("tr",[e("td",[t._v(t._s(n))]),t._v(" "),e("td",[t._v("\n          "+t._s(n*t.step)),n*t.step!=0?e("span",[t._v("rem")]):t._e()]),t._v(" "),e("td",[t._v(t._s(n*t.step*10)+"px")])])})),0)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("\n    Replace "),n("span",{staticClass:"highlight-text"},[n("em",[this._v("n")])]),this._v(" with a number from\n    the table below to get the indicated spacing.\n  ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("\n    Add "),n("span",{staticClass:"highlight-text"},[this._v("minus-")]),this._v(" to any margin class to use\n    the negative value.\n  ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("\n    For example:"),e("br"),t._v(" "),e("span",{staticClass:"highlight-text"},[t._v("minus-mr-1")]),t._v(" equals\n    "),e("span",{staticClass:"highlight-text"},[t._v("margin-right: -0.25rem")]),t._v(" or -2.5px\n    "),e("br"),t._v(" "),e("span",{staticClass:"highlight-text"},[t._v("minus-ml-4")]),t._v(" equals\n    "),e("span",{staticClass:"highlight-text"},[t._v("margin-left: -1rem")]),t._v(" or -10px\n  ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v("Number")]),this._v(" "),n("th",[this._v("Value")]),this._v(" "),n("th",[this._v("Pixels")])])])}],!1,null,null,null);n.default=component.exports}}]);