const breadcrumb_data = {
  specs() {
    return [
      {
        markup: '[ PARENT PAGE LINK ]',
        code: {
          parent_page_link: `font-family: Public Sans
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
          parent_page_link_hover: `font-family: Public Sans
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
          current_page_text: `font-family: Public Sans
            font-size: 12px;
            color: #212121;
            font-weight: bold;
            line-height: 18px;`
          }
        },
        {
        code: {
          background: `color: #F7F7F7;`
          }
        }
      ]
    }
  }

export default breadcrumb_data