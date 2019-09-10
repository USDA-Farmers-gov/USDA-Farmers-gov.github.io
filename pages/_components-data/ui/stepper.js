const stepper_data = {
  specs() {
    return [
      {
        markup: '',
        code: {
          stepper_background: `background: #49A564;`,
          stepper_line: `border: 2px #BBBBBB;`
        }
      },
      {
        markup: '',
        code: {
          stepper_number: `font-family: Public Sans
            font-weight: Bold;
            font-size: 20px;
            color: #FFFFFF;
            line-height: 26px;`
        }
      },
      {
        markup: '',
        code: {
          question_text: `font-family: Public Sans
            font-weight: Bold;
            font-size: 28px;
            color: #212121;
            line-height: 38px;`
        }
      },
      {
        markup: '',
        code: {
          supporting_text: `font-family: Public Sans
            font-weight: Regular;
            font-size: 18px;
            color: #212121;
            line-height: 28px;`
        }
      },
    ]
  }
}

export default stepper_data