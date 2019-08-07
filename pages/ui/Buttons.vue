<template>
  <div>
    <h2>Buttons</h2>
    <div>
      Buttons are used to communicate important actions the users can take, such as download, apply, or start. Depending on the context and desired outcome of the design, there are multiple styles and sizes of buttons available for use.
    </div>
    <h3>Primary Buttons</h3>
    <div>
      Primary buttons carry a strong visual prominence to signify that they are the expected action, versus possible secondary or tertiary actions.
    </div>
    <div>
      Our primary buttons are blue as the color allows for distinct contrast with the rest of the
      visuals on the site (mostly white and green), and thus support its purpose of highlighting an important action. We recommend using upper case for the labels with those buttons, as
      well as keeping the actions within the buttons discrete and simple. Avoid wrapping button
      labels in two rows of text.
    </div>
    <div>
      We utilize, and have provided, a variety of button sizes to accommodate different space constrictions and intended uses.
    </div>
    <div>
      <button class="btn">Button</button>
    </div>

    <div class="container">
      <div class="row">
        <div class="medium-3">
          <strong>Default</strong>
          <br/>
          <button class="btn">Button</button>
        </div>
        <div class="medium-3">
          <strong>Small</strong>
          <br/>
          <button class="btn sm-btn">Button</button>
        </div>
        <div class="medium-3">
          <strong>Large</strong>
          <br/>
          <button class="btn lg-btn">Button</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'farmers'
}
</script>
