const tables_data = {
  simpleTable() {
    return [
      {
        table_headers: [ 'Column Heading', 'Column Heading', 'Column Heading' ],
        table_rows: [
          [ 'Table row placeholder', 'Row placeholder second column', 'Third column row' ],
          [ 'Table row placeholder', 'Row placeholder second column', 'Third column row' ],
          [ 'Table row placeholder', 'Row placeholder second column', 'Third column row' ],
          [ 'Table row placeholder', 'Row placeholder second column going over two lines', 'Third column row' ],
          [ 'Table row placeholder', 'Row placeholder second column', 'Third column row' ],
        ]
      }
    ]
  },
  complexTable() {
    return [
      {
        table_headers: [ 'Column Heading', 'Column Heading' ],
        subheading_1: 'Subheading',
        table_rows_1: [
          [ 'Subheading row placeholder text', 'Example of a subheading row that extends to the second line' ]
        ],
        subheading_2: 'Subheading',
        table_rows_2: [
          [ 'Subheading row placeholder text', 'Subheading row placeholder text' ],
          [ 'Subheading row placeholder text', 'Subheading row placeholder text' ]
        ]
      }
    ]
  },
  specs() {
    return [
      {
        code: {
        heading_text: `font-family: Public Sans
          font-weight: Bold;
          font-size: 18px;
          color: #212121;
          line-height: 28px;`
        }
      },
      {
        code: {
          cell_text: `font-family: Public Sans
          font-weight: Regular;
          font-size: 18px;
          color: #212121;
          line-height: 28px;`
        }
      },
      {
        code: {
          header_cell_background: `background: #EDEDED;
            border: 1px #BBBBBB;`,
          cell_background_colors: `background: #FFFFFF;
            background: #F7F7F7;`
        }
      },
      {
        code: {
          table_container: `border: 1px #BBBBBB;
            border-radius: 2px;`,
        }
      },
    ]
  }
}

export default tables_data