<template>
  <div>
    <h2>Breadcrumb</h2>
    <p class="intro-text text-margin-bottom">
      A breadcrumb is a secondary navigation that displays the user’s current location on the site in relation to the site’s hierarchical structure.
    </p>

    <h3>Guidelines</h3>
    <p>
      Breadcrumbs allow the user to locate where they are currently on the website and help them navigate to parent level pages. They should be used when there are more than two levels in the website hierarchy. Breadcrumbs should never be used in place of the main navigation. 
    </p>

    [ DEFAULT BREADCRUMBS ]

    <h3>Truncated Breadcrumb</h3>
    <p>
      When a parent page title exceeds 25 characters, truncate the page title. The full page title should show on hover. 
    </p>

    [ TRUNCATED BREADCRUMBS ]

    <h4>Specs</h4>
    <p>
      The breadcrumb should always display the homepage first, which is the highest level of the site hierarchy, and end with the current page. Breadcrumbs are placed below the hero image.
    </p>

    [ BREADCRUMB WITH GRID ]
    <ExampleRow :data="data.specs()" columns="4" />

    <h3>Accessibility</h3>
    <p>
      In the &lt;nav&gt; element, mark breadcrumbs with aria-label="breadcrumb" to describe the type of navigation.  
    </p>
    <p>
      The separator arrows between breadcrumb links should be added in using CSS so that they can be skipped over when users utilize assistive technology such as screen readers.
    </p>

    <h4>References</h4>
    <a href="https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html">https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html</a>
  </div>
</template>

<script>
  import data from '@/pages/_components-data/navigation/breadcrumb.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Breadcrumb'
      }
    },
    data() {
      return {
        data: data
      }
    }
  }
</script>
