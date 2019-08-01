<template>
  <div>
    <ul>
      <li v-for="item in menu">
        {{ item.category }}
        <ul>
          <li v-for="link in item.links">
            <a :href="link.path">{{ link.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            category: 'Primary Elements',
            links:  [
                      { name: 'Button', path: '/elements/Button'},
                      { name: 'Colors', path: '/elements/Colors'},
                      { name: 'Typography', path: '/elements/Typography'},
                    ]
          },
          {
            category: 'UI Components'
          },
          {
            category: 'Navigation'
          }
        ]
      }
    }
  }
</script>
