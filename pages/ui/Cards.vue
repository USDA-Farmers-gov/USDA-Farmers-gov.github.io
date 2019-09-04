<template>
  <div>
    <h2>Cards</h2>
    <p class="intro-text">
      A card is a container for displaying content and/or actions. Cards can contain different kind of elements such as text, links, buttons, icons, and images. 
    </p>

    <h3>Content Cards</h3>
    <p>
      Content cards provide detailed information about a single subject. The primary focus of the card is the content, however icons may be added to visually communicate to users what information is included. A green accent line can be added to emphasize the headline which will also give the card more visual prominence on the page.
    </p>

    <div class="row">
      <div v-html="default_card" class="medium-6" />
    </div>

    <h3>Specs</h3>
    <p>
      Card height and width are flexible based on different use cases. Content cards are most commonly used in a &frac12; or &frac13; grid layout. Icons, links, and green accent lines are optional. They can be used with different typography hierarchy inside the card. All elements should stay within the specified padding requirements below. 
    </p>

    <h3>Examples</h3>
   
    <ExampleRow :data="specs" columns="3" />

    <h3>Resource Cards</h3>
    <p>
      Resource cards are used to display a link to another website or web page that provide additional information about a single subject. They contain a brief overview of the resource, link to the website or web page, and a logo of the organization, if available.
    </p>

    <div v-html="resource_card_single" />

    <h3>Specs</h3>
    <p>
      Card height and width are flexible based on different use cases. Resource cards are most commonly used in a &frac13; grid layout. They can be used with or without a logo. All elements should stay within the specified padding requirements below. 
    </p>

    <h4>Default with Logo</h4>

    <div v-html="resource_card_single" />
    <ExanpleRow :data="resource_card_specs" columns="4" />

    <h4>Default without Logo</h4>

    <ExampleRow :data="card_specs_no_logo" columns="2" />

    <h4>Accessibility</h4>

    <p>
      All elements within cards must be available through the use of screen readers and keyboards.
    </p>

  </div>
</template>

<script>
  import cards_data from '@/pages/_components-data/ui/cards.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Cards'
      }
    },
    data() {
      return {
        default_card: cards_data.defaultCardMarkup({ 
              img: 'zzz.png', 
              header: 'Example Card Headline', 
              link: { text: 'Text Link', href: '#' },
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`
        }),
        resource_card_single: cards_data.resourceCardSingle(),
        specs: cards_data.specs(),
        card_specs_no_logo: cards_data.resourceCardSpecsWithoutLogo(),
        resource_card_specs: cards_data.resourceCardSpecs()
      }
    }
  }
</script>
