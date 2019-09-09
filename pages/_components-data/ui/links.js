const links_data = {
  textLinks() { 
    return [
      { 
        header: 'Default',
        markup: '', 
        code: {
          text: `color: #006546;
            font-family: Public Sans;
            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
            text-decoration: underline;`,
          icon: `color: #212121;
            size: 20x20;`
        }
      },
      { 
        header: 'Hover',
        markup: '', 
        code: {
          text: `color: #49A564;`
        }
      },
      { 
        header: 'Focus',
        markup: '', 
        classes: 'focus',
        code: {
          text: `color: #49A564;
            shadow: #1B69D3;`
        }
      },
      { 
        header: 'Visited',
        markup: '', 
        classes: 'visited',
        code: {
          text: `color: #4C2C92;`
        }
      }
    ]
  },
  externalTextLinks() {
    return [
      { 
        header: 'Default',
        markup: '', 
        code: {
          text: `color: #006546;
            font-family: Public Sans;
            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
            text-decoration: underline;`,
          icon: `color: #006546;
            size: 12x12;`
        }
      },
      { 
        header: 'Hover',
        markup: '', 
        code: {
          text: `color: #49A564;`,
          icon: `color: #49A564;`
        }
      },
      { 
        header: 'Focus',
        markup: '', 
        classes: 'focus',
        code: {
          text: `color: #49A564;
            shadow: #1B69D3;`,
          icon: `color: #49A564;`
        }
      },
      { 
        header: 'Visited',
        markup: '', 
        classes: 'visited',
        code: {
          text: `color: #4C2C92;`,
          icon: `color: #4C2C92;`
        }
      }
    ]
  },
  inlineTextLinks() {
    return [
      { 
        header: 'Default',
        markup: '', 
        code: {
          text: `color: #006546;
            font-family: Public Sans;
            font-size: 18px;
            font-weight: regular;
            line-height: 28px;
            text-decoration: underline;`
        }
      },
      { 
        header: 'Hover',
        markup: '', 
        code: {
          text: `font-weight: bold;`
        }
      },
      { 
        header: 'Focus',
        markup: '', 
        classes: 'focus',
        code: {
          text: `font-weight: bold;
            shadow: #1B69D3;`
        }
      },
      { 
        header: 'Visited',
        markup: '', 
        classes: 'visited',
        code: {
          text: `color: #4C2C92;`
        }
      }
    ]
  },
  anchorLinks() {
    return [
      { 
        header: 'Default',
        markup: '', 
        code: {
          text: `color: #006546;
            font-family: Public Sans;
            font-size: 18px;
            font-weight: regular;
            line-height: 28px;
            text-decoration: underline;`,
          icon: `color: #49A564;
            size: 18x14;`
        }
      },
      { 
        header: 'Hover',
        markup: '', 
        code: {
          text: `font-weight: bold;`
        }
      },
      { 
        header: 'Focus',
        markup: '', 
        classes: 'focus',
        code: {
          text: `font-weight: bold;
            shadow: #1B69D3;`
        }
      },
      { 
        header: 'Visited',
        markup: '', 
        classes: 'visited',
        code: {
          text: `color: #4C2C92;`
        }
      }
    ]
  },
}

export default links_data