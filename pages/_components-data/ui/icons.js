const icons_data = {
  interactiveIcons() {
    return [
      {
        table_headers: [ 'Icon', 'Icon Name', 'Icon Usage' ],
        table_rows: [
          { text: [ '<img src="/images/icons/caret-right.svg">', 'caret-right', 'navigate to pages within farmer.gov and USDA' ] },
          { text: [ '<img src="/images/icons/search.svg">', 'search', 'search button in search box' ] },
          { text: [ '<img src="/images/icons/caret-down.svg">', 'chevron-down', 'expand dropdown' ] },
          { text: [ '<img src="/images/icons/caret-up.svg">', 'chevron-up', 'collapse dropdown' ] },
          { text: [ '<img src="/images/icons/external-link.svg">', 'external-link', 'navigate to pages outside of farmers.gov and USDA' ] },
          { text: [ '<img src="/images/icons/close.svg">', 'close', 'close modals' ] },
          { text: [ '<img src="/images/icons/plus.svg">', 'accordion-expand', 'expand accordion' ] },
          { text: [ '<img src="/images/icons/minus.svg">', 'accordion-collapse', 'collapse accordion' ] },
          { text: [ '<img src="/images/icons/question.svg">', 'popover', 'show popover' ] }
        ]
      }
    ]
  },
  supportingIcons() {
    return [ '[x]', '[x]', '[x]', '[x]' ]
  },
  illustrativeIcons() {
    return [ '[x]', '[x]', '[x]', '[x]' ]
  }
}

export default icons_data