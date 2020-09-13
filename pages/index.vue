<template>
  <v-container fluid>
    <v-carousel>
      <v-carousel-item>
        <v-sheet height="100%">
          <v-row class="fill-height" justify="center" align="center">
            <v-col cols="12" align-self="center">
              <v-expand-transition>
                <h1 class="text-center">
                  CREATE THE DREAM
                </h1>
              </v-expand-transition>
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
    <v-row>
      <v-col cols="12" lg="6" align-self="center">
        <h1 class="primary-story text-center">DexHub Creations is a brand</h1>
      </v-col>
      <v-col cols="12" lg="6">
        <h2 class="primary-story mb-3">What is Lorem Ipsum?</h2>
        <v-divider />
        <v-subtitle class="story text--secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </v-subtitle>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="12">
        <h1 class="text-center">
          Our Community
        </h1>
        <v-divider />
        <v-row>
          <v-col cols="12" lg="4">
            <v-card color="success">
              <v-card-title>
                AddyFx
              </v-card-title>
              <v-card-subtitle>
                Do the thing
              </v-card-subtitle>
              <v-card-text>
                Anp
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="4">
            <v-card color="info">
              <v-card-title>
                LoDex
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" lg="4">
            <v-card color="error">
              <v-card-title>
                LoDex
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-sheet height="300px">
          <h3>A Div</h3>
        </v-sheet>
      </v-col>
      <v-col col="12" lg="6">
        <h1>
          Some text to type
        </h1>
        <v-subheader>
          Lorem ipsum is some gibberish that we type to occupy space
        </v-subheader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="4">
        <v-sheet height="300px">
          <h3>A Div</h3>
        </v-sheet>
      </v-col>
      <v-col col="12" lg="4">
        <h2>Space X</h2>
      </v-col>
      <v-col col="12" lg="4">
        <h2>Space X</h2>
      </v-col>
    </v-row>
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
    <v-row>
      <v-col cols="12" lg="12">
        <h1 class="text-center">
          From Our Blog
        </h1>
      </v-col>
    </v-row>
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
    title: 'Experience the Innovation',
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
<style scoped>
.story{
  font-family: "Lora", sans-serif;
}
.primary-story {
  font-family: 'Nunito', sans-serif;
}
</style>
