<template>
  <v-app>
    <NavBar />
    <v-main>
      <nuxt />
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar'
export default {
  components: {
    NavBar
  },
  data () {
    return {

    }
  }
}
</script>
