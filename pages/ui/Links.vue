<template>
  <div>
    <h2>Links</h2>
    <p>
      Links direct users to different pages or sections of the site. Links should not be in uppercase to visually differentiate between a link and a button.
    </p>
    <h3>Text Link</h3>
    <p>
      Text links are used to navigate users from page to page. Text links should be used on its own single line with a right caret icon. 
    </p>
    <p>
      <a href="#">Text Link</a>
    </p>

    <ExampleRow :data="text_links" columns="4" />

    <h3>External Text Link</h3>

    <p>
      External links are used when directing users to a web page outside of Farmers.gov and USDA. An external link should appear with an external link icon to distinguish between Farmers.gov and USDA to non-Farmers.gov and USDA web pages. They should open in a new browser tab.
    </p>

    [ EXTERNAL LINK SINGLE ]
    <br>
    <ExampleRow :data="external_text_links" columns="4" />

    <h3>Inline Textual Link</h3>
    <p>
      Inline textual links are used within body paragraphs. They are underlined on default so they can be easily distinguished between body text.
    </p>

    [ INLINE LINK SINGLE ]
    <br>
    <ExampleRow :data="inline_text_links" columns="4" />

    <h3>Anchor Link</h3>
    <p>
      Anchor links are used to navigate users to another section within the same page. They can be used with or without a leaf icon.
    </p>

    [ ANCHOR LINK SINGLE ]
    <br>
    <ExampleRow :data="anchor_links" columns="4" />

    <h4>Click Target</h4>
    <p>
      The click target includes the link text and its associated icon. This applys to all link styles.
    </p>

    [ LINK HIGHLIGHT ]

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
        text_links: links_data.textLinks(),
        external_text_links: links_data.externalTextLinks(),
        inline_text_links: links_data.inlineTextLinks(),
        anchor_links: links_data.anchorLinks(),
      }
    }
  }
</script>
