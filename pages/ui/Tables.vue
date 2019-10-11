<template>
  <div>
    <h2>Tables</h2>
    <p class="intro-text text-margin-bottom">
      Tables are used to display data or information in columns and rows.
    </p>

    <h3>Static Table</h3>
    <p>
      A static table is a non-interactive table that contains text and/or links. Static tables should have short but descriptive column headings.
    </p>

    <h4>Simple Table</h4>
    <p>
      Simple tables are used when there is only one level of column headings. Table rows alternate in background colors for better readability and scannability of data across table rows. 
    </p>

    <Table :data="data.simpleTable()[0]" type="bordered" />
    <Code>
      <Table :data="data.simpleTable()[0]" type="bordered" />
    </Code>

    <h4>Complex Table</h4>
    <p>
      A complex table is used when there are multiple levels of column headings. 
    </p>

    <Table :data="data.complexTable()[0]" type="bordered" />
    <Code>
      <Table :data="data.complexTable()[0]" type="bordered" />
    </Code>
    
    <h3>Specs</h3>
    <p>
      Tables should follow the specified padding and size requirements below. 
    </p>

    <div class="table-grid">
      <Table :data="data.simpleTable()[0]" type="bordered" />

      <div class="table-specs-first-cell dashed-blue dashed-blue-vertical"></div>
      <div class="table-specs-first-cell-span span-blue span-blue-vertical"></div>
      <div class="table-specs-first-cell-dimension dimension-blue dimension-blue-vertical">24px</div>

      <div class="table-specs-second-cell dashed-blue dashed-blue-vertical"></div>
      <div class="table-specs-second-cell-span span-blue span-blue-vertical"></div>
      <div class="table-specs-second-cell-dimension dimension-blue dimension-blue-vertical">24px</div>

      <!-- <div class="table-specs-heading-span span-red span-red-horizontal"></div>
      <div class="table-specs-heading-dimension dimension-red dimension-red-horizontal">56px</div>

      <div class="table-specs-first-row-span span-red span-red-horizontal"></div>
      <div class="table-specs-first-row-dimension dimension-red dimension-red-horizontal">56px</div>

      <div class="table-specs-second-row-span span-red span-red-horizontal"></div>
      <div class="table-specs-second-row-dimension dimension-red dimension-red-horizontal">84px</div> -->
    </div>

    <ExampleRow :data="data.specs()" columns="4" />

    <h4 style="margin-bottom: 2rem;">Condensed Table</h4>
<!--     <p>
      A condensed table is used when there are multiple levels of column headings. 
    </p> -->
    <Table :data="data.simpleTable()[0]" type="condensed" />
    <Code>
      <Table :data="data.simpleTable()[0]" type="condensed" />
    </Code>

    <h3>Accessibility</h3>
    <p>
      A title describing the table content is recommended. When providing a title, place a &lt;caption&gt; tag within the &lt;table&gt; element.

      To designate which cells contain headings, place all column headings in a table heading &lt;th&gt; tag. All other cells should use the table data &lt;td&gt; tag.
    </p>

    <h4>References</h4>
    <a href="https://www.w3.org/TR/wai-aria-practices/#table">https://www.w3.org/TR/wai-aria-practices/#table</a>
  </div>
</template>

<script>
  import data from '@/pages/_components-data/ui/tables.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Tables'
      }
    },
    data() {
      return {
        data: data
      }
    }
  }
</script>
  