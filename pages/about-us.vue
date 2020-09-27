<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
          cols="12"
          lg="5"
          align-self="center"
        >
          <h3>
            About Us
          </h3>
          <v-divider class="divs" />
          <p class="subtitle-1 mt-sm-10 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </v-col>
        <v-col
          data-aos-duration="1500"
          data-aos-easing="linear"
          data-aos="fade-down"
          align-self="center"
          cols="12"
          lg="7"
        >
          <v-img class="rounded" src="/hand-1.jpg" />
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="12" lg="3" offset-lg="4">
        <h2 class="text-right">
          Say Something
        </h2>
      </v-col>
      <v-col data-aos="fade-left" data-aos-duration="1500" data-aos-easing="linear" cols="12" lg="5">
        <v-img src="/dex-favicon.png" />
      </v-col>
    </v-row>
    <v-container class="mb-10">
      <v-row justify="center" align="center">
        <v-col cols="12" lg="4" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear">
          <h3 class="text-center mb-5">
            Design is collaboration
          </h3>
          <p class="text-subtitle-2 lupu text-center text--secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </v-col>
        <v-col cols="12" lg="4" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="linear">
          <h3 class="text-center mb-5">
            Design is Intentional
          </h3>
          <p class="text-subtitle-2 lupu text-center text--secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </v-col>
        <v-col cols="12" lg="4" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear">
          <h3 class="text-center mb-5">
            Design is communication
          </h3>
          <p class="text-subtitle-2 lupu text-center text--secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="12" lg="1">
        <v-img src="/dex-favicon.png" />
      </v-col>
      <v-col cols="12" lg="3">
        <h3 class="text-left mb-5 mt-n2">
          Design is communication
        </h3>
        <p class="text-subtitle-2 lupu text-left text--secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </v-col>
      <v-col align-self="star" cols="12" lg="4">
        <v-img class="mx-auto mt-n10" width="60%" src="/orange_circle.png" />
      </v-col>
      <v-col cols="12" lg="3">
        <h3 class="text-right mb-5 mt-n2">
          Design is communication
        </h3>
        <p class="text-subtitle-2 lupu text-right text--secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </v-col>
      <v-col cols="12" lg="1">
        <v-img src="/dex-favicon.png" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.divs {
  border:1px solid #456ca0;
  width: 40%;
  margin-top: 15px;
}
p.lupu{
  line-height: 30px;
}
</style>
