<template>
  <div>
    <v-app-bar dense flat app>
      <v-toolbar-title>DexHub Creations</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <template v-for="(item, i) in items">
          <v-btn
            :key="i"
            nuxt-link
            small
            text
            exact
            :to="item.link"
            v-text="item.text"
          />
        </template>
        <v-btn text small @click="logout">
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
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
      ]
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }

}
</script>
