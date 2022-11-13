<template>
  <v-card elevation="3" class="ma-lg-15">
    <v-row row wrap justify="center" align="center">
      <v-col class="pa-10">
        <login />
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { VCard } from "vuetify/lib";
import login from "./components/login.vue";
export default {
  components: {
    login,
    VCard,
  },
};
</script>
