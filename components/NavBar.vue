<template>
  <div>
    <v-app-bar dense flat app>
      <v-img src="/logo.png" contain height="100%" />
      <v-spacer />
      <v-toolbar-items class="d-sm-none d-md-flex d-md-none d-none">
        <template v-for="(item, i) in items">
          <v-btn
            :key="i"
            nuxt-link
            small
            text
            exact
            :to="item.link"
          >
            {{ item.text }}
          </v-btn>
        </template>
        <v-btn text small @click="logout">
          Logout
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon class="d-none d-sm-flex d-md-none d-flex d-sm-none" @click="toggleSlider" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="px-4" app absolute temporary>
      <v-list>
        <v-list-item-content>
          <v-list-item-title class="title">
            DexHub Creations
          </v-list-item-title>
          <v-list-item-content>
            Create
          </v-list-item-content>
        </v-list-item-content>
      </v-list>
      <v-divider />
      <v-list dense nav>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.link" exact link>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { text: 'Home', link: '/' },
        { text: 'About Us', link: '/about-us' },
        { text: 'Services', link: '/services' },
        { text: 'Blog', link: '/blog' },
        { text: 'Contact Us', link: '/contact-us' }
      ],
      drawer: null
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
      this.$router.push('/login')
    },
    toggleSlider () {
      this.drawer = !this.drawer
    }
  }

}
</script>
