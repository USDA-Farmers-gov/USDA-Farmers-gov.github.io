<template>
  <div>
    <ul>
      <li v-for="item in menu">
        <span :class="activeCategory(item.category) ? 'active' : ''">{{ item.category }}</span>
        <ul>
          <li :class="currentPath === link.path ? 'active' : ''" v-for="link in item.links">
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
        currentPath: this.$route.path,
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
            category: 'UI Components',
            links:  [
                      { name: 'Links', path: '/ui/Links'},
                    ]
          },
          {
            category: 'Navigation'
          }
        ]
      }
    },
    methods: {
      activeCategory(name) {
        let data = this.menu.find(row => row.category === name)
        let active = (data.links) ? data.links.filter(row => row.path === this.currentPath) : {}
        return (active.length) ? true : false
      }
    }
  }
</script>
