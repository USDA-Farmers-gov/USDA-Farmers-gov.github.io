(window.webpackJsonp=window.webpackJsonp||[]).push([[27,9],{195:function(e,n,d){"use strict";d(196)("link",function(e){return function(n){return e(this,"a","href",n)}})},196:function(e,n,d){var r=d(6),t=d(9),o=d(17),l=/"/g,c=function(e,n,d,r){var t=String(o(e)),c="<"+n;return""!==d&&(c+=" "+d+'="'+String(r).replace(l,"&quot;")+'"'),c+">"+t+"</"+n+">"};e.exports=function(e,n){var d={};d[e]=n(c),r(r.P+r.F*t(function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",d)}},204:function(e,n,d){"use strict";d.r(n);d(195);var r=d(22),t={cardSingle:function(){return[{img:"/images/tractor.png",title:"Example Card Headline",link:{text:"Text Link",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."}]},specs:function(){return[{markup:t.defaultCardWithGrid({img:"/images/tractor.png",header:"Example Card Headline",link:{text:"Text Link",link:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."}),code:{"Card Container":"background: #FFFFFF;\n            box-shadow: 0 1px 4px 0 #BBBBBB;\n            border-radius: 2px;","Green Accent Line (optional)":"color: #006546;"}},{markup:t.defaultCardMarkup({img:"/images/tractor.png",header:"Example Card Headline",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",accent_top:!0}),code:{"Card Container":"background: #FFFFFF;\n            box-shadow: 0 1px 4px 0 #BBBBBB;\n            border-radius: 2px;","Green Accent Line (options)":"color: #006546;\n            border-radius: 2px 2px 0 0;"}}]},resourceCardSingle:function(){return t.resourceCardMarkup({img:"/images/usda-symbol.svg",header:"Example Card Headline",link:{text:"External Link Headline",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})},resourceCardSpecs:function(){return[{code:{"Card Container":"background: #FFFFFF;\n          box-shadow: 0 1px 4px 0 #BBBBBB;\n          border-radius: 2px;"}},{code:{"Green Accent Line":"color: #006546;\n          border-radius: 2px 2px 0 0;"}},{code:{Link:'Use appropriate link style from <a href="/ui/Links">Links</a> page'}},{code:{"Body Text":"font-family: Public Sans\n          font-size: 18px;\n          color: #212121;\n          line-height: 28px;\n          font-weight: regular;"}}]},resourceCardSpecsWithoutLogo:function(){return[{header:"Default without Logo",markup:t.resourceCardMarkup({link:{text:"External Link Headline",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",footnote:"Same specs as resource cards with logo."})},{header:"Hover",markup:t.resourceCardMarkup({classes:"hover",link:{text:"External Link Headline",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",footnote:"Applies to both resource cards with and without logo."}),code:{"Card Container":"box-shadow: 0 4px 16px 0 #BBBBBB;"}}]},defaultCardMarkup:function(data){var img=data&&data.img?data.img:"",header=data&&data.header?data.header:"",e=data&&data.link&&data.link.text?data.link.text:"",n=(data&&data.link&&data.link.href&&data.link.href,data&&data.description?data.description:"");return'<div class="content-card'+(data&&data.accent_top?" accent-top":"")+'">'+(img?'<div class="img">\n                        <img src="'+img+'" alt="">\n                      </div>':"")+('<div class="headline">\n                      <h4>'+header+'</h4>\n                    </div>\n                    <div class="content">\n                      <p>'+n+"</p>\n                    </div>")+(e?'<div class="link">\n                            <a class="text-link">'+e+"</a>\n                          </div>":"")+"</div>"},defaultCardWithGrid:function(data){return'<div class="default-card-grid">'+t.defaultCardMarkup(data)+'<div class="default-card-top dashed-red dashed-red-horizontal"></div>\n                  <div class="default-card-top-span span-red span-red-horizontal"></div>\n                  <div class="default-card-top-dimension dimension-red dimension-red-horizontal">20px</div>\n\n                  <div class="default-card-bottom dashed-red dashed-red-horizontal"></div>\n                  <div class="default-card-bottom-span span-red span-red-horizontal"></div>\n                  <div class="default-card-bottom-dimension dimension-red dimension-red-horizontal">20px</div>\n\n                  <div class="default-card-left dashed-blue dashed-blue-vertical"></div>\n                  <div class="default-card-left-span span-blue span-blue-vertical"></div>\n                  <div class="default-card-left-dimension dimension-blue dimension-blue-vertical">20px</div>\n\n                  <div class="default-card-right dashed-blue dashed-blue-vertical"></div>\n                  <div class="default-card-right-span span-blue span-blue-vertical"></div>\n                  <div class="default-card-right-dimension dimension-blue dimension-blue-vertical">20px</div>\n                </div>'},resourceCardMarkup:function(data){var e=data&&data.classes?data.classes:"";return'<div class="'+r.a.setClasses("resource-card",e)+'">'+(data.img?'<div class="logo">\n                              <img src="'+data.img+'" alt="">\n                            </div>':"")+('<div class="link">\n                      <a class="external-link">External Link Headline</a>\n                    </div>\n                    <div class="content">\n                      <p>'+data.description+"</p>\n                    </div>")+"</div>"+(data&&data.footnote?'<div class="card-footnote">*'+data.footnote+"</div>":"")},resourceCardGrid:function(){return'<div class="resource-card-grid">'+t.resourceCardMarkup({img:"/images/usda-symbol.svg",header:"Example Card Headline",link:{text:"External Link Headline",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})+'<div class="resource-card-top dashed-red dashed-red-horizontal"></div>\n                  <div class="resource-card-top-span span-red span-red-horizontal"></div>\n                  <div class="resource-card-top-dimension dimension-red dimension-red-horizontal">32px</div>\n\n                  <div class="resource-card-above-link dashed-red dashed-red-horizontal"></div>\n                  <div class="resource-card-above-link-span span-red span-red-horizontal"></div>\n                  <div class="resource-card-above-link-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                  <div class="resource-card-below-link dashed-red dashed-red-horizontal"></div>\n                  <div class="resource-card-below-link-span span-red span-red-horizontal"></div>\n                  <div class="resource-card-below-link-dimension dimension-red dimension-red-horizontal">8px</div>\n\n                  <div class="resource-card-bottom dashed-red dashed-red-horizontal"></div>\n                  <div class="resource-card-bottom-span span-red span-red-horizontal"></div>\n                  <div class="resource-card-bottom-dimension dimension-red dimension-red-horizontal">32px</div>\n\n                  <div class="resource-card-left dashed-blue dashed-blue-vertical"></div>\n                  <div class="resource-card-left-span span-blue span-blue-vertical"></div>\n                  <div class="resource-card-left-dimension dimension-blue dimension-blue-vertical">20px</div>\n\n                  <div class="resource-card-right dashed-blue dashed-blue-vertical"></div>\n                  <div class="resource-card-right-span span-blue span-blue-vertical"></div>\n                  <div class="resource-card-right-dimension dimension-blue dimension-blue-vertical">20px</div>\n\n                </div>'}};n.default=t},230:function(e,n,d){"use strict";d.r(n);var r=d(204),t={layout:"farmers",head:function(){return{title:"Cards"}},data:function(){return{data:r.default,default_card:r.default.defaultCardMarkup({img:"/images/tractor.png",header:"Example Card Headline",link:{text:"Text Link",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."})}}},o=d(2),component=Object(o.a)(t,function(){var e=this,n=e.$createElement,d=e._self._c||n;return d("div",[d("h2",[e._v("Cards")]),e._v(" "),d("p",{staticClass:"intro-text text-margin-bottom"},[e._v("\n    A card is a container for displaying content and/or actions. Cards can contain different kind of elements such as text, links, buttons, icons, and images. \n  ")]),e._v(" "),d("h3",[e._v("Content Cards")]),e._v(" "),d("p",[e._v("\n    Content cards provide detailed information about a single subject. The primary focus of the card is the content, however icons may be added to visually communicate to users what information is included. A green accent line can be added to emphasize the headline which will also give the card more visual prominence on the page.\n  ")]),e._v(" "),d("div",{staticClass:"row text-margin-bottom"},[d("div",{staticClass:"medium-6",domProps:{innerHTML:e._s(e.default_card)}})]),e._v(" "),d("h3",[e._v("Specs")]),e._v(" "),d("p",[e._v("\n    Card height and width are flexible based on different use cases. Content cards are most commonly used in a ½ or ⅓ grid layout. Icons, links, and green accent lines are optional. They can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below. \n  ")]),e._v(" "),e._m(0),e._v(" "),d("ExampleRow",{attrs:{data:e.data.specs(),rowClasses:"default-grid-row","item-classes":[{index:0,classes:"default-card-grid-container"}],columns:"2"}}),e._v(" "),d("Code",{attrs:{markup:e.data.defaultCardMarkup({img:"/images/tractor.png",header:"Example Card Headline",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",accent_top:!0})}}),e._v(" "),d("h3",[e._v("Resource Cards")]),e._v(" "),d("p",[e._v("\n    Resource cards are used to display a link to another website or web page that provide additional information about a single subject. They contain a brief overview of the resource, link to the website or web page, and a logo of the organization, if available.\n  ")]),e._v(" "),d("div",{staticClass:"row text-margin-bottom"},[d("div",{staticClass:"medium-5",domProps:{innerHTML:e._s(e.data.resourceCardSingle())}})]),e._v(" "),d("h3",[e._v("Specs")]),e._v(" "),d("p",[e._v("\n    Card height and width are flexible based on different use cases. Resource cards are most commonly used in a ⅓ grid layout. They can be used with or without a logo. All elements should stay within the specified padding requirements below. \n  ")]),e._v(" "),d("h4",[e._v("Default with Logo")]),e._v(" "),d("div",{staticClass:"row"},[d("div",{staticClass:"medium-6",domProps:{innerHTML:e._s(e.data.resourceCardGrid())}})]),e._v(" "),d("ExampleRow",{attrs:{data:e.data.resourceCardSpecs(),columns:"4"}}),e._v(" "),d("ExampleRow",{attrs:{data:e.data.resourceCardSpecsWithoutLogo(),rowClasses:"resource-cards-no-logo",columns:"2"}}),e._v(" "),d("Code",{attrs:{markup:e.data.resourceCardSingle()}}),e._v(" "),d("h4",[e._v("Accessibility")]),e._v(" "),d("p",[e._v("\n    All elements within cards must be available through the use of screen readers and keyboards.\n  ")])],1)},[function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("strong",[this._v("Examples")])])}],!1,null,null,null);n.default=component.exports}}]);