<template>
  <v-container fluid>
    <v-carousel>
      <v-carousel-item>
        <v-sheet height="100%">
          <v-row class="fill-height" justify="center" align="center">
            <v-col cols="12" align-self="center">
              <h1 class="text-center">
                CREATE THE DREAM
              </h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%">
          <v-row class="fill-height" justify="center" align="center">
            <v-col cols="12" align-self="center">
              <h1 class="text-center">
                EXPERIENCE THE DESIGN
              </h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%">
          <v-row class="fill-height" justify="center" align="center">
            <v-col cols="12" align-self="center">
              <h1 class="text-center">
                INNOVATE THE FUTURE
              </h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-divider />
    <v-sheet>
      <v-row>
        <v-col cols="12" lg="8">
          <h2>Space 1</h2>
        </v-col>
        <v-col col="12" lg="4">
          <h2>Space 2</h2>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="6">
          <h2 class="text-center">
            Subscribe To Our News Letter
          </h2>
          <p class="text-center">
            __________
          </p>
        </v-col>
        <v-col cols="12" lg="6" class="pa-6">
          <v-form>
            <v-text-field v-model="email" label="E-mail" />
            <v-btn block type="submit" color="info">
              Subscribe
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>
<script>

export default {
  data () {
    return {
      email: null
    }
  },
  head: {
    title: 'Welcome to something great',
    meta: [
      { hid: 'title', name: 'title', content: 'Homepage' },
      { hid: 'author', name: 'author', content: 'DexHub Creations' },
      { hid: 'description', name: 'description', content: 'Come in and experience DexHub' },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Homepage' },
      { hid: 'og:description', name: 'og:description', content: 'Come in and experience DexHub' }
    ]
  }
}
</script>
