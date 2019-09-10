const header_data = {
  specs() {
    return [
      {
        code: {
          official_gov_banner: `background: #F7F7F7;`,
          main_header: `background: #FFFFFF;`,
          main_navigation_bar: `background: #006546;`,
        }
      },
      {
        code: {
          default_nav_item_text: `font-family: Public Sans
            font-weight: Regular;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;`,
          "current/hover_nav_item": `font-weight: Bold;`,
          "current/hover_indicator": `background: #FFFFFF;`
        }
      },
      {
        code: {
          utility_nav_link: `font-family: Public Sans
            font-weight: Regular;
            font-size: 14px;
            line-height: 22px;
            color: #212121;`,
          utility_nav_link_hover: `text-decoration: underline;`
        }
      }
    ]
  }
}

export default header_data