<template>
  <div>
    <ul>
      <li v-for="item in menu">
        <span :class="(activeCategory === item.category) ? 'active' : ''" 
              @click="setActiveCategoryOnClick(item.category)">
                {{ item.category }}
        </span>
        
        <ul v-if="activeCategory === item.category">
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
        activeCategory: '',
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
    mounted() {
      this.setActiveCategoryOnLoad()
    },
    methods: {
      setActiveCategoryOnLoad() {
        let data = this.menu.map(row => (row.links) ? row.links.filter(link => link.path === this.currentPath).length : 0)
        let index = data.findIndex(row => row)
        this.activeCategory = (index !== -1) ? this.menu[index].category : ''
      },
      setActiveCategoryOnClick(name) {
        this.activeCategory = name
      }
    }
  }
</script>
