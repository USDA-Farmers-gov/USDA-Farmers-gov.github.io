(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{246:function(e,d,n){"use strict";n(247)("link",function(e){return function(d){return e(this,"a","href",d)}})},247:function(e,d,n){var r=n(6),o=n(8),t=n(17),l=/"/g,c=function(e,d,n,r){var o=String(t(e)),c="<"+d;return""!==n&&(c+=" "+n+'="'+String(r).replace(l,"&quot;")+'"'),c+">"+o+"</"+d+">"};e.exports=function(e,d){var n={};n[e]=d(c),r(r.P+r.F*o(function(){var d=""[e]('"');return d!==d.toLowerCase()||d.split('"').length>3}),"String",n)}},255:function(e,d,n){"use strict";n.r(d);n(246);var r=n(37),o={cardSingle:function(){return[{img:"/images/tractor.png",title:"Example Card Headline",link:{text:"Text Link",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."}]},specs:function(){return[{markup:o.defaultCardWithGrid({img:"/images/tractor.png",header:"Example Card Headline",link:{text:"Text Link",link:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."}),code:{"Card Container":"background: #FFFFFF;\n            box-shadow: 0 1px 4px 0 #BBBBBB;\n            border-radius: 2px;","Green Accent Line (optional)":"color: #006546;"}},{markup:o.defaultCardMarkup({img:"/images/tractor.png",header:"Example Card Headline",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",accent_top:!0}),code:{"Card Container":"background: #FFFFFF;\n            box-shadow: 0 1px 4px 0 #BBBBBB;\n            border-radius: 2px;","Green Accent Line (options)":"color: #006546;\n            border-radius: 2px 2px 0 0;"}}]},resourceCardSingle:function(){return o.resourceCardMarkup({img:"/images/usda-symbol.svg",header:"Example Card Headline",link:{text:"External Link Headline",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})},resourceCardSpecs:function(){return[{code:{"Card Container":"background: #FFFFFF;\n          box-shadow: 0 1px 4px 0 #BBBBBB;\n          border-radius: 2px;"}},{code:{"Green Accent Line":"color: #006546;\n          border-radius: 2px 2px 0 0;"}},{code:{Link:'Use appropriate link style from <a href="/ui/Links">Links</a> page'}},{code:{"Body Text":"font-family: Public Sans\n          font-size: 18px;\n          color: #212121;\n          line-height: 28px;\n          font-weight: regular;"}}]},resourceCardSpecsWithoutLogo:function(){return[{header:"Default without Logo",markup:o.resourceCardMarkup({link:{text:"External Link Headline",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",footnote:"Same specs as resource cards with logo."})},{header:"Hover",markup:o.resourceCardMarkup({classes:"hover",link:{text:"External Link Headline",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",footnote:"Applies to both resource cards with and without logo."}),code:{"Card Container":"box-shadow: 0 4px 16px 0 #BBBBBB;"}}]},defaultCardMarkup:function(data){var img=data&&data.img?data.img:"",header=data&&data.header?data.header:"",e=data&&data.link&&data.link.text?data.link.text:"",d=(data&&data.link&&data.link.href&&data.link.href,data&&data.description?data.description:"");return'<div class="content-card'+(data&&data.accent_top?" accent-top":"")+'">'+(img?'<div class="img">\n                        <img src="'+img+'" alt="">\n                      </div>':"")+('<div class="headline">\n                      <h4>'+header+'</h4>\n                    </div>\n                    <div class="content">\n                      <p>'+d+"</p>\n                    </div>")+(e?'<div class="link">\n                            <a class="text-link">'+e+"</a>\n                          </div>":"")+"</div>"},defaultCardWithGrid:function(data){return'<div class="default-card-grid">'+o.defaultCardMarkup(data)+'<div class="default-card-top dashed-red dashed-red-horizontal"></div>\n                  <div class="default-card-top-span span-red span-red-horizontal"></div>\n                  <div class="default-card-top-dimension dimension-red dimension-red-horizontal">20px</div>\n\n                  <div class="default-card-bottom dashed-red dashed-red-horizontal"></div>\n                  <div class="default-card-bottom-span span-red span-red-horizontal"></div>\n                  <div class="default-card-bottom-dimension dimension-red dimension-red-horizontal">20px</div>\n\n                  <div class="default-card-left dashed-blue dashed-blue-vertical"></div>\n                  <div class="default-card-left-span span-blue span-blue-vertical"></div>\n                  <div class="default-card-left-dimension dimension-blue dimension-blue-vertical">20px</div>\n\n                  <div class="default-card-right dashed-blue dashed-blue-vertical"></div>\n                  <div class="default-card-right-span span-blue span-blue-vertical"></div>\n                  <div class="default-card-right-dimension dimension-blue dimension-blue-vertical">20px</div>\n                </div>'},resourceCardMarkup:function(data){var e=data&&data.classes?data.classes:"";return'<div class="'+r.a.setClasses("resource-card",e)+'">'+(data.img?'<div class="logo">\n                              <img src="'+data.img+'" alt="">\n                            </div>':"")+('<div class="link">\n                      <a class="external-link">External Link Headline</a>\n                    </div>\n                    <div class="content">\n                      <p>\n                      '+data.description+"\n                      </p>\n                    </div>")+"</div>"+(data&&data.footnote?'<div class="card-footnote">*'+data.footnote+"</div>":"")},resourceCardGrid:function(){return'<div class="resource-card-grid">'+o.resourceCardMarkup({img:"/images/usda-symbol.svg",header:"Example Card Headline",link:{text:"External Link Headline",href:"#"},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})+'<div class="resource-card-top dashed-red dashed-red-horizontal"></div>\n                  <div class="resource-card-top-span span-red span-red-horizontal"></div>\n                  <div class="resource-card-top-dimension dimension-red dimension-red-horizontal">32px</div>\n\n                  <div class="resource-card-above-link dashed-red dashed-red-horizontal"></div>\n                  <div class="resource-card-above-link-span span-red span-red-horizontal"></div>\n                  <div class="resource-card-above-link-dimension dimension-red dimension-red-horizontal">16px</div>\n\n                  <div class="resource-card-below-link dashed-red dashed-red-horizontal"></div>\n                  <div class="resource-card-below-link-span span-red span-red-horizontal"></div>\n                  <div class="resource-card-below-link-dimension dimension-red dimension-red-horizontal">8px</div>\n\n                  <div class="resource-card-bottom dashed-red dashed-red-horizontal"></div>\n                  <div class="resource-card-bottom-span span-red span-red-horizontal"></div>\n                  <div class="resource-card-bottom-dimension dimension-red dimension-red-horizontal">32px</div>\n\n                  <div class="resource-card-left dashed-blue dashed-blue-vertical"></div>\n                  <div class="resource-card-left-span span-blue span-blue-vertical"></div>\n                  <div class="resource-card-left-dimension dimension-blue dimension-blue-vertical">20px</div>\n\n                  <div class="resource-card-right dashed-blue dashed-blue-vertical"></div>\n                  <div class="resource-card-right-span span-blue span-blue-vertical"></div>\n                  <div class="resource-card-right-dimension dimension-blue dimension-blue-vertical">20px</div>\n\n                </div>'}};d.default=o}}]);