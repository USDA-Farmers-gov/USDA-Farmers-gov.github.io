<template>
  <div>
    <h2>Header</h2>
    <p class="intro-text">
      The farmers.gov header combines the primary navigation of the website, the utility navigation, the search bar, and a lockup in one reoccurring component on the site. The header primarily serves a navigational function.
    </p>

    <h3>Guidelines</h3>
    <p>
      Use clear, concise, and intuitive link navigation labels. An underline should be used as a visual cue to indiciate the current page. If there are lower level pages nested within the main navigation items, use dropdown menus to present those options.
    </p>

    <p>
      The header contains:
    </p>

    <ul>
      <li>Agency lockup</li>
      <li>Main navigation links</li>
      <li>Official government website banner</li>
      <li>Search bar: allow users to search key terms on the site</li>
      <li>Utility navigation links <i>(optional)</i></li>
      <li>Callout button <i>(optional)</i>: can be used for actions like sign in, or sign up. There should only be one action associated with the callout button.</li>
    </ul>

    [ HEADER EXAMPLE 1 ]
    <br>
    [ HEADER EXAMPLE 2 ]
    
    <h3>Specs</h3>

    [ DEFAULT EXAMPLE ]

    <ExampleRow :data="specs" columns="4" />
  </div>
</template>
<script>
  import header_data from '@/pages/_components-data/navigation/header.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Header'
      }
    },
    data() {
      return {
        specs: header_data.specs()
      }
    }
  }
</script>
  