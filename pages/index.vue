<template>
  <div>
    <v-carousel>
      <v-carousel-item src="/dude-1.jpg">
        <v-row class="fill-height" justify="center" align="center">
          <v-col cols="12" align-self="center">
            <h1 class="text-center">
              CREATE THE DREAM
            </h1>
          </v-col>
        </v-row>
      </v-carousel-item>
      <v-carousel-item src="/office-1.jpg">
        <v-row class="fill-height" justify="center" align="center">
          <v-col cols="12" align-self="center">
            <h1 class="text-center">
              EXPERIENCE THE DESIGN
            </h1>
          </v-col>
        </v-row>
      </v-carousel-item>
      <v-carousel-item src="/office-2.jpg">
        <v-row class="fill-height" justify="center" align="center">
          <v-col cols="12" align-self="center">
            <h1 class="text-center">
              INNOVATE THE FUTURE
            </h1>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="6" align-self="center">
          <h1 class="primary-story text-center">
            DexHub Creations is a brand
          </h1>
        </v-col>
        <v-col cols="12" lg="6">
          <h2 class="primary-story mb-3">
            What is Lorem Ipsum?
          </h2>
          <v-divider />
          <p class="story text--secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <v-btn class="mt-3" large color="info" outlined>
            Learn More
          </v-btn>
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
                  AddyFx Placeholder
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
                  AppDex Placeholder
                </v-card-title>
                <v-card-subtitle>
                  Space x
                </v-card-subtitle>
                <v-card-text>
                  Space x
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card color="error">
                <v-card-title>
                  Lodex Placeholder
                </v-card-title>
                <v-card-subtitle>
                  Space x
                </v-card-subtitle>
                <v-card-text>
                  Space x
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="12">
          <h1 class="primary-story text-center">
            Our Partners
          </h1>
          <v-divider />
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
    </v-container>
    <v-row>
      <v-col cols="12" lg="12">
        <h1 class="text-center">
          Get In Touch
        </h1>
        <p style="color: #df5f20; font-weight: bold;" class="text-center">
          ________
        </p>
        <v-sheet class="pa-8" height="424" color="#df5f20" dark>
          <v-row class="fill-height">
            <v-col align-self="center" lg="6" cols="12">
              <h1 class="primary-story text-center">
                Let's Scale Your Brand
              </h1>
              <h2 class="primary-story text-center">
                Feel free to contact us
              </h2>
            </v-col>
            <v-col align-self="center" cols="12" lg="6">
              <v-form>
                <v-text-field label="Name" />
                <v-text-field label="E-mail" />
                <v-textarea label="Message" />
                <v-btn color="success" block>
                  Send Message
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  data () {
    return {
      email: null
    }
  },
  methods: {

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
