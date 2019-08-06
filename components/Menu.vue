<template>
  <div>
    <ul>
      <li v-for="item in menu">
        <span :class="setCategoryClass(item.category)" 
              @click="setActiveCategoryOnClick(item.category)">
                {{ item.category }}
                <i v-if="activeCategory === item.category" class="arrow up"></i>
                <i v-if="activeCategory !== item.category" class="arrow down"></i>
        </span>
        
        <ul v-if="activeCategory === item.category" class="menu-links">
          <li :class="currentPath === link.path ? 'active soft-green' : ''" v-for="link in item.links">
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
        currentPath: this.$route.path.replace(/\/$/, ""), // remove trailing slashes
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
            category: 'Navigation',
            links:  [
                      { name: 'Breadcrumbs', path: '/navigation/Breadcrumbs'},
                    ]
          }
        ]
      }
    },
    mounted() {
      this.setActiveCategoryOnLoad()
    },
    methods: {
      setCategoryClass(category) {
        let baseClasses = 'category'
        return (this.activeCategory === category) ? baseClasses + ' active' : baseClasses
      },
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
