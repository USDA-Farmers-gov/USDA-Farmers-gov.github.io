<template>
  <div>
    <h2>Footer</h2>
    <p class="intro-text text-margin-bottom">
      A footer is a navigational element placed at the bottom of every page that provides users with consistent and easy access to important information such as the main navigation and additional resources.
    </p>

    <h3>Guidelines</h3>
    <p>
      We recommend repeating main navigation items at the bottom of every page to help users navigate to different sections without having to rely solely on the header. The content in the footer should stay consistent throughout all pages.
    </p>
    <p>
      The footer contains:
    </p>
    <ul>
      <li>Agency lockup</li>
      <li>Main navigation links</li>
      <li>Secondary links <em>(optional)</em>: includes links to other resources, disclaimers, or legal content</li>
      <li>Secondary logo (optional)</li>
      <li>Social media links (optional)</li>
    </ul>

    [ FOOTER EXAMPLE ]

    <h4>Specs</h4>
    <p>
      Main navigation links should follow the grid system and the specified padding requirements outlined below. Secondary links should follow the grid system. All links should display an underline on hover. 
    </p>

    [ FOOTER EXAMPLE WITH GRID ]
    <ExampleRow :data="specs" columns="4" />

    <h4>Accessibility</h4>
    <p>
       Footer links should show a visible focus state when tabbed to by a user.
    </p>
  </div>
</template>
<script>
  import footer_data from '@/pages/_components-data/navigation/footer.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Footer'
      }
    },
    data() {
      return {
        specs: footer_data.specs()
      }
    }
  }
</script>
  