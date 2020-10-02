<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="9" sm="9" md="9" xs="9">
        <h2 data-aos="fade-down" data-aos-duration="1500" data-aos-easing="linear" class="text-center mb-5">
          Our Team
        </h2>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" class="text-subtitle-1 text--secondary text-center">
          Some text goes here<br>Some text goes here
        </p>
        <p class="text-center">
          <v-btn :class="{'orange-active': !showBrands}" deppressed dense @click="changeView('teams')">
            Managers
          </v-btn>&nbsp;
          <v-btn
            dense
            deppressed
            :class="{'orange-active': showBrands}"
            @click="changeView('brands')"
          >
            Brands
          </v-btn>
        </p>
      </v-col>
    </v-row>
    <v-row v-if="showBrands" align="center" justify="center">
      <v-col cols="12" lg="9" xs="9" sm="9" md="9">
        <v-card data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500" class="lskewed">
          <v-container fluid>
            <v-row>
              <v-col align-self="center" cols="12" lg="3">
                <v-img class="mx-auto" width="60%" src="/orange_circle.png" />
              </v-col>
              <v-col align-self="center" cols="12" lg="7">
                <v-card-text>
                  For a brand to be established and identity must be made.<br>
                  <br>
                  Lodex gives brands the opportunity to bring out their brand ideas into the physical. By helping  them develop their brand identities with our services
                </v-card-text>
              </v-col>
              <v-col align-self="center" cols="12" lg="2">
                <v-btn color="#2d779f" dark class="rounded-xl" x-small dense>
                  View Portfolio
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" lg="9" xs="9" sm="9" md="9">
        <v-card data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500" elevation="4" class="rskewed">
          <v-container fluid>
            <v-row>
              <v-col align-self="center" cols="12" lg="3">
                <v-img class="mx-auto" width="60%" src="/orange_circle.png" />
              </v-col>
              <v-col align-self="center" cols="12" lg="7">
                <v-card-text>
                  For a brand to be established and identity must be made.<br>
                  <br>
                  Lodex gives brands the opportunity to bring out their brand ideas into the physical. By helping  them develop their brand identities with our services
                </v-card-text>
              </v-col>
              <v-col align-self="center" cols="12" lg="2">
                <v-btn dark color="#2d779f" class="rounded-xl" x-small dense>
                  View Portfolio
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" lg="9" sm="9" md="9" xs="9">
        <v-card data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500" elevation="4" class="lskewed d-flex">
          <v-container fluid>
            <v-row justify="center" align="center">
              <v-col
                align-self="center"
                cols="12"
                lg="3"
              >
                <v-img class="mx-auto" width="60%" src="/orange_circle.png" />
              </v-col>
              <v-col
                align-self="center"
                cols="12"
                lg="7"
              >
                <v-card-text>
                  For a brand to be established and identity must be made.<br>
                  <br>
                  Lodex gives brands the opportunity to bring out their brand ideas into the physical. By helping  them develop their brand identities with our services
                </v-card-text>
              </v-col>
              <v-col
                align-self="center"
                cols="12"
                lg="2"
              >
                <v-btn
                  dark
                  color="#2d779f"
                  class="rounded-xl"
                  x-small
                  dense
                >
                  View Portfolio
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="!showBrands" align="center" justify="center">
      <v-col cols="12" lg="8">
        <v-row justify="center" align="center">
          <v-col v-for="(member, index) of members" :key="index" cols="9" lg="4">
            <v-card class="pa-5" elevation="5">
              <v-img class="mx-auto rounded-circle" width="150" height="150" :src="member.photo" />
              <v-card-title class="justify-center">
                {{ member.name }}
              </v-card-title>
              <v-card-subtitle class="text-center">
                {{ member.title }}
              </v-card-subtitle>
              <v-card-text class="text-center">
                <v-btn
                  class="text-center"
                  icon
                  color="#e1622f"
                >
                  <v-icon>
                    mdi-twitter
                  </v-icon>
                </v-btn>
                <v-btn
                  nuxt
                  link
                  :href="member.fb"
                  target="_blank"
                  class="text-center"
                  icon
                  color="#e1622f"
                >
                  <v-icon>
                    mdi-facebook
                  </v-icon>
                </v-btn>
                <v-btn class="text-center" icon color="#e1622f">
                  <v-icon>
                    mdi-instagram
                  </v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      members: [
        { name: 'Osas C++', photo: '/earth-1.jpg', title: 'DexHub Manager', fb: 'http://fb.me/osas' },
        { name: 'Precious Ibeagi', photo: '/grey.jpg', title: 'AppDex Manager', fb: 'http://fb.me/ibeagi.agz' },
        { name: 'Imade', photo: '/logo.png', title: 'LoDex Manager', fb: 'http://fb.me/imade' },
        { name: 'Tobi Tamarakuro', photo: '/office-2.jpg', title: 'AdDex Manager', fb: 'http://fb.me/tobi' },
        { name: 'Seun Reactor', photo: '/office-1.jpg', title: 'DexHub Manager', fb: 'http://fb.me/seun' }
      ],
      showBrands: false
    }
  },
  methods: {
    changeView (view = 'brands') {
      if (view === 'brands') {
        this.showBrands = true
      } else {
        this.showBrands = false
      }
    }
  }
}
</script>

<style lang="css" scoped>
  button.orange-active {
    color: #df5f20;
  }
  .lskewed {
    transform: skewX(10deg)
  }
  .rskewed {
    transform: skewX(-10deg);
  }
</style>
