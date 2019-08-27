const dividers_data = {
  defaultSpecs() {
    return [
          {
            markup: `<div class="double-line-grid">
                    <div class="double-line-height-dimension dimension-red">6px</div>
                    <div class="double-line-height span-red span-red-horizontal"></div>
                    <div class="highlight dashed-red dashed-red-horizontal"></div>
                    <div class="double-line"></div>
                  </div>`,
            code: { line: `border: 2px solid #BBBBBB;` }
          }
        ]
  },
  primarySpecs() {
    return [
        {
          header: 'Used with Icon',
          code: 
            {
              line: `border: 1px solid #DBEDE0;`,
              icon: `color: #49A564;
                size: 25x20`
            }
        },
        {
          header: 'Used without Icon',
          code: { line: `border: 1px solid #BBBBBB;` }
        },
      ]
  },
  secondarySpecs() {
    return [
          {
            code: { line: `border: 1px dotted #BBBBBB;` }
          }
        ]
  }
}

export default dividers_data