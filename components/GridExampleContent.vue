<template>
  <div class="container">
    <div class="row"> 
      <div v-for="index in 2" class="medium-6">
        <div class="col-content-example">
          <h3>One Half</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae.</p>
        </div>
      </div>

      <div v-for="index in 3" class="medium-4">
        <div class="col-content-example">
          <h3>One Third</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae.</p>
        </div>
      </div>

      <div v-for="index in 4" class="medium-3">
        <div class="col-content-example">
          <h3>One Fourth</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae.</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>