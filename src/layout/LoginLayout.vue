<template>
  <v-container fluid>
    <router-view />
  </v-container>
</template>
<script>
import { VContainer } from "vuetify/lib";
export default {
  components: {
    VContainer,
  },
};
</script>
