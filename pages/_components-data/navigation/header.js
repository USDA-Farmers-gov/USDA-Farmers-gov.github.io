const header_data = {
  specs() {
    return [
      {
        code: {
          'Official Gov Banner': `background: #F7F7F7;`,
          'Main Header': `background: #FFFFFF;`,
          'Main Navigation Bar': `background: #006546;`,
        }
      },
      {
        code: {
          'Default Nav Item Text': `font-family: Public Sans
            font-weight: Regular;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;`,
          'Current/Hover Nav Item': `font-weight: Bold;`,
          'Current/Hover Indicator': `background: #FFFFFF;`
        }
      },
      {
        code: {
          'Utility Nav Link': `font-family: Public Sans
            font-weight: Regular;
            font-size: 14px;
            line-height: 22px;
            color: #212121;`,
          'Utility Nav Link Hover': `text-decoration: underline;`
        }
      }
    ]
  },
  dropdownGridSpecs() {
    return [
      {
        code: {
          'Dropdown Background': `background: #FFFFFF;
            box-shadow: 0 2px 8px 0 #BBBBBB;`
        }
      },
      {
        code: {
          'Nav Item Title': `font-family: Public Sans;
            font-weight: Bold;
            font-size: 16px;
            color: #006546;
            line-height: 24px;`
        }
      },
      {
        code: {
          'Dropdown Divider': `border: 1px #BBBBBB;`
        }
      },
    ]
  },
  dropdownItemSpecs() {
    return [
      {
        markup: '',
        code: {
          'Default': `font-family: Public Sans;
            font-weight: Regular;
            font-size: 16px;
            color: #212121;
            line-height: 24px;`,
        }
      },
      {
        markup: '',
        code: {
          'Selected Background': `background: #DBEDE0;`,
          'Selected Bar': `background: #006546;`,
        }
      },
      {
        markup: '',
        code: {
          'Hovered': `text-decoration: underline;`,
        }
      },
      {
        markup: '',
        code: {
          'Focused': `text-decoration: underline;
              shadow: #1B69D3`,
        }
      }
    ]
  },
  calloutButtonSpecs() {
    return [
      {
        code: {
          'Text': `font-family: Public Sans
            font-weight: Bold;
            font-size: 16px;
            color: #212121;
            line-height: 20px;`
        }
      },
      {
        code: {
          'Background': `background: #FFFFFF;
              box-shadow: 0 2px 8px 0 #BBBBBB;
              border-radius: 0 0 2px 2px;`
        }
      }
    ]
  },
  searchBarSpecs() {
    return [
      {
        code: {
          'Placeholder Text': `font-family: Public San
            font-weight: Regular;
            font-size: 14px;
            line-height: 22px;
            color: #707070;`
        }
      },
      {
        code: {
          'Active Text': `font-family: Public San
            font-weight: Regular;
            font-size: 14px;
            line-height: 22px;
            color: #212121;`
        }
      },
      {
        code: {
          'Default Search Button': `background: #F7F7F7;
              border-radius: 0 4px 4px 0;`
        }
      },
      {
        code: {
          'Default Search Icon': `background: #212121;`
        }
      },
    ]
  }
}

export default header_data