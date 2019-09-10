const breadcrumb_data = {
  specs() {
    return [
      {
        markup: '[ PARENT PAGE LINK ]',
        code: {
          'Parent Page Link': `font-family: Public Sans
            font-size: 12px;
            color: #006546;
            font-weight: regular;
            line-height: 18px;
            text-decoration: underline;`
        }
      },
      {
        markup: '[ PARENT PAGE LINK HOVER ]',
        code: {
          'Parent Page Link Hover': `font-family: Public Sans
            font-size: 12px;
            color: #006546;
            font-weight: bold;
            line-height: 18px;
            text-decoration: underline;`
        }
      },
      {
        markup: '[ CURRENT PAGE TITLE ]',
        code: {
          'Current Page Text': `font-family: Public Sans
            font-size: 12px;
            color: #212121;
            font-weight: bold;
            line-height: 18px;`
          }
        },
        {
        code: {
          'Background': `color: #F7F7F7;`
          }
        }
      ]
    }
  }

export default breadcrumb_data