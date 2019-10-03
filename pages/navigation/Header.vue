<template>
  <div>
    <h2>Header</h2>
    <p class="intro-text text-margin-bottom">
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
      <li>Utility navigation links <em>(optional)</em></li>
      <li>Callout button <em>(optional)</em>: can be used for actions like sign in, or sign up. There should only be one action associated with the callout button.</li>
    </ul>

    [ HEADER EXAMPLE 1 ]
    <br>
    [ HEADER EXAMPLE 2 ]
    
    <h3>Specs</h3>

    [ DEFAULT EXAMPLE ]

    <ExampleRow :data="header_data.specs()" columns="4" />

    <h4>Dropdown Menu</h4>
    <p>
      The dropdown menu should expand on click and remain visible on the screen until the user clicks a menu link or anywhere outside the dropdown menu.
    </p>

    [ DROPDOWN EXAMPLE WITH GRID ]

    <ExampleRow :data="header_data.dropdownGridSpecs()" columns="4" />
    <ExampleRow :data="header_data.dropdownItemSpecs()" columns="4" />

    <h5>Callout Button</h5>
    <ExampleRow :data="header_data.calloutButtonSpecs()" columns="4" />

    <h5>Search Bar</h5>
    <ExampleRow :data="header_data.searchBarSpecs()" columns="4" />

    <h3>Accessibility</h3>
    <p>
      There should be an invisible link at the top of the page that allows users to skip the navigation and go straight to the main content. It must be the first item that the screen reader reads and the keyboard tabs to. 
    </p>
    <p>
      Navigation links should show a visible focus state when tabbed to by a user.
    </p>

    <h4>References</h4>
    <a href="https://webaim.org/techniques/skipnav/">https://webaim.org/techniques/skipnav/</a>
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
        header_data: header_data
      }
    }
  }
</script>
  