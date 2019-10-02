(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{262:function(n,e,d){"use strict";d.r(e);var o={specs:function(){return[{markup:"",code:{"Stepper Background":"background: #49A564;","Stepper Line":"border: 2px #BBBBBB;"}},{markup:"",code:{"Stepper Number":"font-family: Public Sans\n            font-weight: Bold;\n            font-size: 20px;\n            color: #FFFFFF;\n            line-height: 26px;"}},{markup:"",code:{"Question Text":"font-family: Public Sans\n            font-weight: Bold;\n            font-size: 28px;\n            color: #212121;\n            line-height: 38px;"}},{markup:"",code:{"Supporting Text":"font-family: Public Sans\n            font-weight: Regular;\n            font-size: 18px;\n            color: #212121;\n            line-height: 28px;"}}]},markup:function(n){var e=n?"-"+n:"";return'<div class="row">\n            <div class="stepper-example medium-12">\n            <form id="class-stepper'+e+'"><div role="radiogroup" aria-label="step-1" class="vertical-step ">\n          <div class="vertical-step-left">\n            <span class="step-icon">1</span>\n          </div>\n          <div class="vertical-step-content">\n            <div class="vertical-step-header">\n              <h2>Example question with radio button selections</h2>\n              <p>Example of an optional supporting text for question with radio button selections.</p>\n            </div>\n            <div class="vertical-step-selections">\n            \n              <div class="medium-5">\n                <label tabindex="-1" for="radio-ex-yes'+e+'" class="radio-card-label with-image checked">\n                  <div class="radio-img-card-top">\n                    <h2>Yes</h2>\n                  </div>\n                  <div class="radio-img-card-bottom">\n                    <input type="radio" id="radio-ex-yes'+e+'" class="radio-card-input" name="radio-step-example" title="Card Radio" tabindex="-1">\n                    <span class="radio-icon"></span>\n                  </div>\n                </label>\n              </div>\n            \n              <div class="medium-5">\n                <label tabindex="-1" for="radio-ex-no'+e+'" class="radio-card-label with-image">\n                  <div class="radio-img-card-top">\n                    <h2>No</h2>\n                  </div>\n                  <div class="radio-img-card-bottom">\n                    <input type="radio" id="radio-ex-no'+e+'" class="radio-card-input" name="radio-step-example" title="Card Radio" tabindex="-1" checked>\n                    <span class="radio-icon"></span>\n                  </div>\n                </label>\n              </div>\n            \n            </div>\n          </div>\n        </div><div role="group" aria-label="step-2" class="vertical-step">\n        <div class="vertical-step-left">\n          <span class="step-icon">2</span>\n        </div>\n        <div class="vertical-step-content">\n          <div class="vertical-step-header">\n            <h2>Example question with a dropdown</h2>\n            \n          </div>\n          <div class="vertical-step-selections">\n          \n              <div class="medium-4">\n                <label for="form-select-one'+e+'" style="font-size:1.6rem;line-height:2.4rem;height:2.4rem;">Dropdown Label</label>\n                <select id="form-select-one'+e+'" name="form-select" tabindex="-1">\n                  <option>- Please Select -</option>\n                  <option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option><option value="4">Option 4\n                </option></select>\n              </div>\n            \n          </div>\n        </div>\n      </div><div role="group" aria-label="step-3" class="vertical-step">\n        <div class="vertical-step-left">\n          <span class="step-icon"><img src="/images/stepper_doc_icon.svg" alt=""></span>\n        </div>\n        <div class="vertical-step-content">\n          <div class="vertical-step-header">\n            <h2>Last step with a call-to-action</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\n          </div>\n          <div class="vertical-step-selections">\n          \n              <div class="medium-4">\n                <button class="btn" tabindex="-1">BUTTON</button>\n              </div>\n            \n            </div>\n          </div>\n        </div></form></div>\n      </div>'},grid:function(){return'<div class="stepper-grid">'+o.markup("grid")+'\n              <div class="first-gutter-span span-blue span-blue-vertical"></div>\n              <div class="first-gutter-dimension dimension-blue dimension-blue-vertical">40px</div>\n\n              <div class="second-gutter dashed-blue dashed-blue-vertical"></div>\n              <div class="second-gutter-span span-blue span-blue-vertical"></div>\n              <div class="second-gutter-dimension dimension-blue dimension-blue-vertical">24px</div>\n\n              <div class="step-one-span span-red span-red-horizontal"></div>\n              <div class="step-one-dimension dimension-red dimension-red-horizontal">40px</div>\n\n              <div class="step-two-top dashed-red dashed-red-horizontal"></div>\n              <div class="step-two-top-span span-red span-red-horizontal"></div>\n              <div class="step-two-top-dimension dimension-red dimension-red-horizontal">8px</div>\n\n              <div class="step-two-bottom dashed-red dashed-red-horizontal"></div>\n              <div class="step-two-bottom-span span-red span-red-horizontal"></div>\n              <div class="step-two-bottom-dimension dimension-red dimension-red-horizontal">8px</div>\n\n              <div class="step-one-header dashed-red dashed-red-horizontal"></div>\n              <div class="step-one-header-span span-red span-red-horizontal"></div>\n              <div class="step-one-header-dimension dimension-red dimension-red-horizontal">8px</div>\n\n              <div class="step-one-description dashed-red dashed-red-horizontal"></div>\n              <div class="step-one-description-span span-red span-red-horizontal"></div>\n              <div class="step-one-description-dimension dimension-red dimension-red-horizontal">24px</div>\n\n              <div class="card-bottom dashed-red dashed-red-horizontal"></div>\n              <div class="card-bottom-span span-red span-red-horizontal"></div>\n              <div class="card-bottom-dimension dimension-red dimension-red-horizontal">64px</div>\n\n              <div class="step-two-header dashed-red dashed-red-horizontal"></div>\n              <div class="step-two-header-span span-red span-red-horizontal"></div>\n              <div class="step-two-header-dimension dimension-red dimension-red-horizontal">24px</div>\n\n              <div class="dropdown-bottom dashed-red dashed-red-horizontal"></div>\n              <div class="dropdown-bottom-span span-red span-red-horizontal"></div>\n              <div class="dropdown-bottom-dimension dimension-red dimension-red-horizontal">64px</div>\n           </div>'}};e.default=o}}]);