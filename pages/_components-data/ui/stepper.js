const stepper_data = {
  specs() {
    return [
      {
        markup: '',
        code: {
          'Stepper Background': `background: #49A564;`,
          'Stepper Line': `border: 2px #BBBBBB;`
        }
      },
      {
        markup: '',
        code: {
          'Stepper Number': `font-family: Public Sans
            font-weight: Bold;
            font-size: 20px;
            color: #FFFFFF;
            line-height: 26px;`
        }
      },
      {
        markup: '',
        code: {
          'Question Text': `font-family: Public Sans
            font-weight: Bold;
            font-size: 28px;
            color: #212121;
            line-height: 38px;`
        }
      },
      {
        markup: '',
        code: {
          'Supporting Text': `font-family: Public Sans
            font-weight: Regular;
            font-size: 18px;
            color: #212121;
            line-height: 28px;`
        }
      },
    ]
  },
  markup() {
    return `<div class="row">
            <div class="stepper-example medium-12">
            <form id="class-stepper">
            <div class="vertical-step ">
          <div class="vertical-step-left">
            <span class="step-icon">1</span>
          </div>
          <div class="vertical-step-content">
            <div class="vertical-step-header">
              <h2>Example question with radio button selections</h2>
              <p>Example of an optional supporting text for question with radio button selections.</p>
            </div>
            <div class="vertical-step-selections">
              <div class="medium-5">
                <label tabindex="-1" for="radio-ex-yes" class="radio-card-label with-image">
                  <div class="radio-img-card-top">
                    <h2>Yes</h2>
                  </div>
                  <div class="radio-img-card-bottom">
                    <input type="radio" id="radio-ex-yes" class="radio-card-input" name="radio-step-example" title="Card Radio" tabindex="-1">
                    <span class="radio-icon"></span>
                  </div>
                </label>
              </div>
            
              <div class="medium-5">
                <label tabindex="-1" for="radio-ex-no" class="radio-card-label with-image">
                  <div class="radio-img-card-top">
                    <h2>No</h2>
                  </div>
                  <div class="radio-img-card-bottom">
                    <input type="radio" id="radio-ex-no" class="radio-card-input" name="radio-step-example" title="Card Radio" tabindex="-1" checked>
                    <span class="radio-icon"></span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div><div class="vertical-step">
        <div class="vertical-step-left">
          <span class="step-icon">2</span>
        </div>
        <div class="vertical-step-content">
          <div class="vertical-step-header">
            <h2>Example question with a dropdown</h2>
            <p></p>
          </div>
          <div class="vertical-step-selections">
              <div class="medium-5">
                <label for="form-select-one" style="font-size:1.6rem;line-height:2.4rem;height:2.4rem;">Dropdown Label</label>
                <select id="form-select-one" name="form-select" tabindex="-1">
                  <option>- Please Select -</option>
                </option></select>
              </div>
          </div>
        </div>
      </div><div class="vertical-step">
        <div class="vertical-step-left">
          <span class="step-icon"><img src="/images/stepper_doc_icon.svg"></span>
        </div>
        <div class="vertical-step-content">
          <div class="vertical-step-header">
            <h2>Last step with a call-to-action</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div class="vertical-step-selections">
              <div class="medium-5">
                <button class="btn">BUTTON</button>
              </div>
          </div>
        </div>
      </div></form></div></div>`
  },
  grid() {
    return `<div class="stepper-grid">`
               + stepper_data.markup() +
           `
              <div class="first-gutter-span span-blue span-blue-vertical"></div>
              <div class="first-gutter-dimension dimension-blue dimension-blue-vertical">40px</div>

              <div class="second-gutter dashed-blue dashed-blue-vertical"></div>
              <div class="second-gutter-span span-blue span-blue-vertical"></div>
              <div class="second-gutter-dimension dimension-blue dimension-blue-vertical">24px</div>

              <div class="step-one-span span-red span-red-horizontal"></div>
              <div class="step-one-dimension dimension-red dimension-red-horizontal">40px</div>

              <div class="step-two-top dashed-red dashed-red-horizontal"></div>
              <div class="step-two-top-span span-red span-red-horizontal"></div>
              <div class="step-two-top-dimension dimension-red dimension-red-horizontal">8px</div>

              <div class="step-two-bottom dashed-red dashed-red-horizontal"></div>
              <div class="step-two-bottom-span span-red span-red-horizontal"></div>
              <div class="step-two-bottom-dimension dimension-red dimension-red-horizontal">8px</div>

              <div class="step-one-header dashed-red dashed-red-horizontal"></div>
              <div class="step-one-header-span span-red span-red-horizontal"></div>
              <div class="step-one-header-dimension dimension-red dimension-red-horizontal">8px</div>

              <div class="step-one-description dashed-red dashed-red-horizontal"></div>
              <div class="step-one-description-span span-red span-red-horizontal"></div>
              <div class="step-one-description-dimension dimension-red dimension-red-horizontal">24px</div>

              <div class="card-bottom dashed-red dashed-red-horizontal"></div>
              <div class="card-bottom-span span-red span-red-horizontal"></div>
              <div class="card-bottom-dimension dimension-red dimension-red-horizontal">64px</div>

              <div class="step-two-header dashed-red dashed-red-horizontal"></div>
              <div class="step-two-header-span span-red span-red-horizontal"></div>
              <div class="step-two-header-dimension dimension-red dimension-red-horizontal">24px</div>

              <div class="dropdown-bottom dashed-red dashed-red-horizontal"></div>
              <div class="dropdown-bottom-span span-red span-red-horizontal"></div>
              <div class="dropdown-bottom-dimension dimension-red dimension-red-horizontal">64px</div>
           </div>`
  }
}

export default stepper_data