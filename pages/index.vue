<template>
  <div>
    <v-carousel hide-delimiter-background delimiter-icon="mdi-minus">
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
        <v-col data-aos="fade-left" data-aos-duration="3000" cols="12" lg="6" align-self="center">
          <h1 class="primary-story text-center">
            DexHub Creations is a brand
          </h1>
        </v-col>
        <v-col data-aos="flip-down-left" data-aos-duration="3000" cols="12" lg="6">
          <h2 class="primary-story mb-3">
            Our Community
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
      <div data-aos="fade-up" data-aos-duration="3000">
        <v-row>
          <v-col class="pa-15" cols="12" lg="6">
            <h2 class="primary-story mb-3">
              Explore the projects we love
            </h2>
            <v-divider />
            <p class="story text--secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <v-btn class="mt-3" large color="info" outlined>
              Learn More
            </v-btn>
          </v-col>
          <v-col cols="12" lg="6" align-self="center">
            <v-row data-aos="flip-left" data-aos-easing="linear" data-aos-duration="7000" align="center" justify="center">
              <v-col
                cols="12"
                lg="3"
                sm="3"
                md="3"
                xs="3"
              >
                <v-img class="ma-5" src="/orange_circle.png" />
                <h4 class="text-center text--secondary">
                  Art
                </h4>
              </v-col>
              <v-col cols="12" lg="3" md="3" sm="3" xs="3">
                <v-img class="ma-5" src="/orange_circle.png" />
                <h4 class="text-center text--secondary">
                  Art
                </h4>
              </v-col>
              <v-col cols="12" lg="3" sm="3" xs="3" md="3">
                <v-img class="ma-5" src="/orange_circle.png" />
                <h4 class="text-center text--secondary">
                  Art
                </h4>
              </v-col>
              <v-col cols="12" lg="3" sm="3" xs="3" md="3">
                <v-img class="ma-5" src="/orange_circle.png" />
                <h4 class="text-center text--secondary">
                  Art
                </h4>
              </v-col>
              <v-col cols="12" lg="3" sm="3" xs="3" md="3">
                <v-img class="ma-5" src="/orange_circle.png" />
                <h4 class="text-center text--secondary">
                  Art
                </h4>
              </v-col>
              <v-col cols="12" lg="3" sm="3" xs="3" md="3">
                <v-img class="ma-5" src="/orange_circle.png" />
                <h4 class="text-center text--secondary">
                  Art
                </h4>
              </v-col>
              <v-col cols="12" lg="3" sm="3" xs="3" md="3">
                <v-img class="ma-5" src="/orange_circle.png" />
                <h4 class="text-center text--secondary">
                  Art
                </h4>
              </v-col>
              <v-col cols="12" lg="3" sm="3" xs="3" md="3">
                <v-img class="ma-5" src="/orange_circle.png" />
                <h4 class="text-center text--secondary">
                  Art
                </h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-container>
        <v-row justify="center" align="center">
          <v-col align-self="center" cols="12" lg="3" data-aos="zoom-in-right" data-aos-duration="3000">
            <h3 class="primary-story">
              Upcoming Projects
            </h3>
            <v-divider />
            <p class="story text--secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </v-col>
          <v-col cols="12" lg="9" data-aos="zoom-in-left" data-aos-duration="10000">
            <v-slide-group center-active show-arrows>
              <v-slide-item>
                <v-card width="300" class="ma-4" elevation="4" height="100%">
                  <v-img class="ma-5" height="50%" src="/grey.jpg" />
                  <v-card-title>
                    Demo Title
                  </v-card-title>
                  <v-card-text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </v-card-text>
                </v-card>
              </v-slide-item>
              <v-slide-item>
                <v-card width="300" elevation="4" class="ma-4" height="100%">
                  <v-img class="ma-5" height="50%" src="/grey.jpg" />
                  <v-card-title>
                    Demo Title
                  </v-card-title>
                  <v-card-text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </v-card-text>
                </v-card>
              </v-slide-item>
              <v-slide-item>
                <v-card width="300" elevation="4" class="ma-4" height="100%">
                  <v-img class="ma-5" height="50%" src="/grey.jpg" />
                  <v-card-title>
                    Demo Title
                  </v-card-title>
                  <v-card-text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </v-card-text>
                </v-card>
              </v-slide-item>
              <v-slide-item>
                <v-card width="300" elevation="4" class="ma-4" height="100%">
                  <v-img class="ma-5" height="50%" src="/grey.jpg" />
                  <v-card-title>
                    Demo Title
                  </v-card-title>
                  <v-card-text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </v-card-text>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
      </v-container>
      <v-divider />
      <h1 class="text-center primary-story mt-5">
        What Our Cients Say
      </h1>
      <p style="color: #df5f20; font-weight: bold;" class="text-center">
        ________
      </p>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="10">
          <v-carousel hide-delimiter-background delimiter-icon="mdi-minus">
            <v-carousel-item>
              <v-sheet height="100%">
                <v-row justify="center" align="center" height="center" class="fill-height">
                  <div>
                    <v-img src="/earth-1.jpg" width="150" class="mx-auto rounded-circle mb-5" height="150" />
                    <p class="subtitle-1 px-10 text-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <h1 class="text-center">
                      Alan Shore
                    </h1>
                    <p class="text-center subtitle-1">
                      Fictional Character
                    </p>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet height="100%">
                <v-row justify="center" align="center" height="center" class="fill-height">
                  <div>
                    <v-img src="/earth-1.jpg" width="150" class="mx-auto rounded-circle mb-5" height="150" />
                    <p class="subtitle-1 px-10 text-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <h1 class="text-center">
                      Alan Shore
                    </h1>
                    <p class="text-center subtitle-1">
                      Fictional Character
                    </p>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col align-self="center" cols="12" lg="12">
        <h1 class="text-center">
          Get In Touch
        </h1>
        <p style="color: #df5f20; font-weight: bold;" class="text-center">
          ________
        </p>
        <v-sheet class="pa-8" height="100%" color="#df5f20" dark>
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
