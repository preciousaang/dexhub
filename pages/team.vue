<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="4">
        <h2 data-aos="fade-down" data-aos-duration="1500" data-aos-easing="linear" class="text-center mb-5">
          Our Team
        </h2>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" class="text-subtitle-1 text--secondary text-center">
          Some text goes here<br>Some text goes here
        </p>
        <p class="text-center">
          <v-btn data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear" depressed>
            Click Me
          </v-btn>&nbsp;
          <v-btn data-aos="fade-left" data-aos-duration="1500" data-aos-easing="linear" dense depressed>
            Click Me
          </v-btn>
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
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
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
