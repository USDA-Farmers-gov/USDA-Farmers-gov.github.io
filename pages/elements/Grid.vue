<template>
  <div>
    <h2>Grid</h2>
    <p>
      This 12-column grid provides the basic structure for website content and creates flexibility to accommodate different viewport sizes. Grids enable a consistent experience across different pages of the site and create a way to effortlessly organize design elements through uniformity and precise alignment.
    </p>

    <div class="container grid-example">
      <div class="row">
        <div class="medium-12">
          <div class="col-content-example">1/1</div>
        </div>
      </div>
      <div class="row"> 
        <div class="medium-6">
          <div class="col-content-example">1/2</div>
        </div>
        <div class="medium-6">
          <div class="col-content-example">1/2</div>
        </div>
      </div>
      <div class="row"> 
        <div class="medium-4">
          <div class="col-content-example">1/3</div>    
        </div>
        <div class="medium-4">
          <div class="col-content-example">1/3</div>    
        </div>
        <div class="medium-4">
          <div class="col-content-example">1/3</div>    
        </div>
      </div>
      <div class="row">    
        <div class="medium-3">
          <div class="col-content-example">1/4</div>      
        </div>  
        <div class="medium-3">
          <div class="col-content-example">1/4</div>      
        </div> 
        <div class="medium-3">
          <div class="col-content-example">1/4</div>      
        </div> 
        <div class="medium-3">
          <div class="col-content-example">1/4</div>      
        </div> 
      </div>
      <div class="row">     
        <div class="medium-2">
          <div class="col-content-example">1/6</div>      
        </div>
        <div class="medium-2">
          <div class="col-content-example">1/6</div>      
        </div>  
        <div class="medium-2">
          <div class="col-content-example">1/6</div>      
        </div>
        <div class="medium-2">
          <div class="col-content-example">1/6</div>      
        </div>  
        <div class="medium-2">
          <div class="col-content-example">1/6</div>      
        </div>
        <div class="medium-2">
          <div class="col-content-example">1/6</div>      
        </div>
      </div>
      <div class="row">     
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
        <div class="medium-1">
          <div class="col-content-example">1/12</div>       
        </div>
    </div>
  </div>

  <div class="container grid-example-text">
    <h3>Grid Examples</h3>
    <div class="row"> 
      <div class="medium-6">
        <div class="col-content-example">
          <h3>One Half</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae.</p>
        </div>
      </div>
      <div class="medium-6">
        <div class="col-content-example">
          <h3>One Half</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae.</p>
        </div>
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
