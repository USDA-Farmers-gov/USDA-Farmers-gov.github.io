<template>
  <div>
    <h2>Images</h2>
    <p class="intro-text">
      Images are used to communicate brand style, support content on pages, and build trust with our audience. They should be relatable to our audience and convey that farmers.gov is a site &quot;For Farmers by Farmers.&quot;
    </p>

    <h3>Guidelines</h3>
    <p>
      All images should be sourced from a Flickr account associated with USDA, such as their <a href="https://www.flickr.com/people/usdagov/">main account</a> or a <a href="https://www.flickr.com/people/nrcs_south_dakota/">state-run NRCS account</a>.
    </p>
    <p>
      For all images, they should follow these stylistic guidelines:
    </p>

     <ul>
      <li>No collaged, stretched, overly edited, or unrealistic images</li>
      <li>Must be authentic and be cohesive with farmers.gov brand</li>
      <li>Stock photography should never be used</li>
      <li>Have a clear focal point</li>
      <li>No illustrations</li>
    </ul>

    <h4>Hero Images</h4>
    <p>
      Hero images communicate context about the page content. They should be aesthetically pleasing to grab the audiences’ attention.
      
    </p>
    <ul>
      <li>Utilize images of animals, crops, or scenic images with visual appeal</li>
      <li>Avoid using images of people and visually distracting images that take focus away from the rest of the page</li>
      <li>Use images that crop well horizontally and work with a responsive screen</li>
    </ul>
    <p>
      <strong>Example</strong>
      <br>
      [ COW IMAGE ]
    </p>

    <h4>Other Images</h4>
    <p>
      Images can be used to break up text-heavy pages. They should be used sparingly to support the brand without overpowering the content on the page.
    </p>

    <ul>
      <li>Use contextually relevant images</li>
      <li>Utilize positive imagery of people</li>
    </ul>

    <strong>Example</strong>
    <br>
    [ 2 IMAGES ]

    <h3>Image Compression</h3>
    <p>
      Images should be optimized to speed up the page load time. Use online image compression tools, such as <a href="https://squoosh.app/">Squoosh</a>, or photo editing softwares to compress images. Explore different compression settings to find the right balance between file size and acceptable image quality.
    </p>

    <h3>Naming Conventions</h3>
    <p>
      Images should follow a naming convention to better organize files and easily browse through different image files. They should be descriptive and consistent in naming.
    </p>

    <ul>
      <li>No spaces</li>
      <li>No special characters or periods</li>
      <li>Hyphens between words</li>
      <li>No articles (a, the, and, etc.)</li>
      <li>Concise but descriptive and meaningful</li>
      <li>All lowercase</li>
      <li>Date</li>
    </ul>

    <strong>Example</strong>
    <p>
      fund-beginningfarmers-070119.jpg
      <br>
      farmloansfinder-microloanspdf-070119.jpg
    </p>

    <h3>Accessibility</h3>

    <p>
      Informative images that represent information need descriptive alternative text.

      If the image is used for decorative purposes or if there already is descriptive text about the image, their alternative text should be empty (alt=&quot;&quot;) so that they can be skipped over when users utilize assistive technology such as screen readers.
    </p>

    <h4>References</h4>
    <a href="https://accessibility.digital.gov/front-end/images/">https://accessibility.digital.gov/front-end/images/</a>
    <br>
    <a href="https://www.w3.org/WAI/tutorials/images/">https://www.w3.org/WAI/tutorials/images/</a>
  </div>
</template>
<script>
  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Images'
      }
    },
    data() {
      return {
      
      }
    }
  }
</script>
  