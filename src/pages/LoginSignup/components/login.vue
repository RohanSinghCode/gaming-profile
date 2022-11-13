<template>
  <v-row>
    <v-col cols="12" lg="12">
      <v-text-field
        v-model="emailUsername"
        label="Username/Email"
        hint="your IGN name :)"
        placeholder="Please enter your username or email"
      />
    </v-col>
    <v-col lg="12">
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        placeholder="Please enter your password"
      />
    </v-col>
  </v-row>
</template>
<script>
import { VTextField } from "vuetify/lib";
export default {
  components: {
    VTextField,
  },
  data() {
    return {
      emailUsername: "",
      password: "",
    };
  },
};
</script>
<style scoped></style>
