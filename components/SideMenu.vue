<template>
  <div>
    <img class="logo" alt="Farmers.gov" src="/images/farmers-logo.svg"/>
    <nav aria-label="Side">
      <ul class="sidenav">
        <li v-for="item in menu">
          <div :class="setClassesByCategory(item.category)" 
                @click="setActiveCategoryOnEvent($event, item)"
                @keypress="setActiveCategoryOnEvent($event, item)"
                tabindex="0">
                  {{ item.category }}
                  <span v-if="activeCategory === item.category && !item.path" class="arrow arrow-up"></span>
                  <span v-if="activeCategory !== item.category && !item.path" class="arrow arrow-down"></span>
          </div>

          <ul v-if="activeCategory === item.category" class="sidebar-nav-links">
            <li :class="currentPath === link.path ? 'active soft-green' : ''" v-for="link in item.links">
              <a :href="link.path">{{ link.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPath: this.$route.path !== '/' ? this.removeTrailingSlashFromPath(this.$route.path) : this.$route.path, // .replace() removes trailing slashes
        activeCategory: '',
        categoryClasses: 'category',
        menu: [
          // {
          //   category: 'Overview',
          //   path: '/'
          // },
          {
            category: 'Primary Elements',
            links:  [
                      { name: 'Colors', path: '/elements/Colors'},
                      { name: 'Grid', path: '/elements/Grid'},
                      { name: 'Typography', path: '/elements/Typography'},
                    ]
          },
          {
            category: 'UI Components',
            links:  [
                      { name: 'Accordions', path: '/ui/Accordions'},
                      { name: 'Buttons', path: '/ui/Buttons'},
                      { name: 'Cards', path: '/ui/Cards'},
                      { name: 'Checkboxes', path: '/ui/Checkboxes'},
                      { name: 'Dividers', path: '/ui/Dividers'},
                      { name: 'Dropdowns', path: '/ui/Dropdowns'},
                      { name: 'Icons', path: '/ui/Icons'},
                      { name: 'Images', path: '/ui/Images'},
                      { name: 'Links', path: '/ui/Links'},
                      { name: 'Radio Buttons', path: '/ui/RadioButtons'},
                      { name: 'Stepper', path: '/ui/Stepper'},
                      { name: 'Tables', path: '/ui/Tables'},
                    ]
          },
          {
            category: 'Navigation',
            links:  [
                      { name: 'Breadcrumb', path: '/navigation/Breadcrumb'},
                      { name: 'Header', path: '/navigation/Header'},
                      { name: 'Footer', path: '/navigation/Footer'},
                    ]
          }
        ]
      }
    },
    mounted() {
      this.setActiveCategoryOnLoad()
    },
    watch: {
      '$route': function() {
        this.currentPath = this.removeTrailingSlashFromPath(this.$route.path)
      }
    },
    methods: {
      removeTrailingSlashFromPath(path) {
        return path.replace(/\/$/, "")
      },
      setClassesByPath(path) {
        return (path === this.currentPath) ? this.categoryClasses + ' active' : this.categoryClasses
      },
      setClassesByCategory(category) {
        return (this.activeCategory === category) ? this.categoryClasses + ' active' : this.categoryClasses
      },
      setActiveCategoryOnLoad() {
        let data = this.menu.map(row => (row.links) ? row.links.filter(link => link.path === this.currentPath).length : 0)
        let index = data.findIndex(row => row)
        this.activeCategory = (index !== -1) ? this.menu[index].category : ''
      },
      setActiveCategoryOnEvent(e, item) {
        if(e.type === 'keypress') {
          (e.code === 'Enter' && item.path) ? this.$router.push({ path: item.path }) : this.activeCategory = item.category
        } else {
          item.path ? this.$router.push({ path: item.path }) : this.activeCategory = item.category
        }
      }
    }
  }
</script>
