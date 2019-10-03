<template>
  <div>
    <h2>Links</h2>
    <p class="intro-text text-margin-bottom">
      Links direct users to different pages or sections of the site. Links should not be in uppercase to visually differentiate between a link and a button.
    </p>
    
    <h3>Text Link</h3>
    <p>
      Text links are used to navigate users from page to page. Text links should be used on its own single line with a right caret icon. 
    </p>
    <p v-html="links_data.textLinkMarkup()"></p>

    <ExampleRow :data="links_data.textLinks()" rowClasses="text-margin-bottom" :itemClasses="[{ index: 0, classes: 'default-link-grid-container' }]" columns="4" />

    <h3>External Text Link</h3>
    <p>
      External links are used when directing users to a web page outside of Farmers.gov and USDA. An external link should appear with an external link icon to distinguish between Farmers.gov and USDA to non-Farmers.gov and USDA web pages. They should open in a new browser tab.
    </p>

    <p v-html="links_data.externalLinkMarkup()"></p>
    <ExampleRow :data="links_data.externalTextLinks()" rowClasses="text-margin-bottom" :itemClasses="[{ index: 0, classes: 'external-grid-container' }]" columns="4" />

    <h3>Inline Textual Link</h3>
    <p>
      Inline textual links are used within body paragraphs. They are underlined on default so they can be easily distinguished between body text.
    </p>

    <a class="inline-text-link" href="#" tabindex="-1">Inline Link</a>
    <br>
    <ExampleRow :data="links_data.inlineTextLinks()" rowClasses="inline-text-link-container text-margin-bottom" columns="4" />

    <h3>Anchor Link</h3>
    <p>
      Anchor links are used to navigate users to another section within the same page. They can be used with or without a leaf icon.
    </p>

    <p v-html="links_data.anchorLinkMarkup()"></p>
    <br>
    <ExampleRow :data="links_data.anchorLinks()" rowClasses="anchor-link-examples text-margin-bottom" :itemClasses="[{ index: 0, classes: 'anchor-grid-container' }]" columns="4" />

    <h4>Click Target</h4>
    <p>
      The click target includes the link text and its associated icon. This applys to all link styles.
    </p>

    <div class="highlight-text-link text-margin-bottom">
      <div class="highlight-overlay"></div>
      <div class="highlight-link" v-html="links_data.textLinkMarkup()"></div>
      <div class="mouse-pointer"></div>
    </div>

    <h4>Accessibility</h4>
    <p>
      Color cannot be used as the only means of conveying information, functionality, or prompting a response. It must be paired with another visual indicator such as underlining, bolding, or other visual cues.
    </p>
    <p>
      Hover and focus states must be incorporated to convey to users that these elements are clickable. These visual effects should be device-independent and able to be activated by either a mouse or keyboard.
    </p>

    <h4>References</h4>
    <a href="https://www.w3.org/TR/WCAG21/#distinguishable">https://www.w3.org/TR/WCAG21/#distinguishable</a>
    <br>
    <a href="https://webaim.org/techniques/hypertext/link_text">https://webaim.org/techniques/hypertext/link_text</a>
  </div>
</template>

<script>
  import links_data from '@/pages/_components-data/ui/links.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Links'
      }
    },
    data() {
      return {
        links_data: links_data
      }
    }
  }
</script>
