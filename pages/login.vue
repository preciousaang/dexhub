<template>
  <v-container fluid>
    <v-snackbar v-model="snackbar" color="green">
      Thank you for signing in.
    </v-snackbar>
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12" lg="4" md="7" sm="7">
        <v-card>
          <v-container>
            <h2 class="text-center">
              Login
            </h2>
            <v-divider class="mx-10" />
            <br>
            <v-alert v-if="error" type="error" class="mx-10">
              {{ error }}
            </v-alert>
            <v-form class="mx-10" @submit.prevent="login">
              <v-text-field v-model="username" solo label="Username" />
              <v-text-field v-model="password" solo label="Password" type="password" />
              <v-btn :disabled="disabled" class="mb-10" block type="submit" color="info">
                Login
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  layout: false,
  data () {
    return {
      username: null,
      password: null,
      error: null,
      disabled: false,
      snackbar: false
    }
  },
  methods: {
    async login () {
      this.disabled = true
      this.error = null
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        this.snackbar = true
      } catch (err) {
        this.disabled = false
        this.password = null
        this.error = err.response.data
        setTimeout(() => {
          this.error = null
        }, 3000)
      }
    }
  },
  head () {
    return {
      title: 'Login',
      meta: [
        { hid: 'title', name: 'title', content: 'Login' },
        { hid: 'description', name: 'description', content: 'Login to access the admin dashboard' }
      ]
    }
  }
}
</script>
<style scoped>
</style>
