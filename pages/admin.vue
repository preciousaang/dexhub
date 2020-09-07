<template>
  <v-container>
    <h3>{{ $auth.user }}</h3>
  </v-container>
</template>
<script>
export default {
  middleware: 'auth'
}
</script>
