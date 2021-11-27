<template>
  <div class="mt-16 mr-10 ml-10">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="nm" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

      <v-text-field v-model="pw" :rules="emailRules" label="Password" required></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Part is required']"
        label="PART"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <!-- <v-row align="center" justify="space-around" class="mt-6"> -->
      <v-row dense>
        <v-col cols="auto" xs="12">
          <v-btn small :disabled="!valid" color="success" @click="validate">SUBMIT</v-btn>
        </v-col>
        <v-col cols="auto" xs="12">
          <v-btn small color="error" @click="reset">Reset Form</v-btn>
        </v-col>
        <v-col cols="auto" xs="12" md="4" class="ml-md-6 ml-sm-6">
          <v-btn small color="primary" nuxt-link to="/">RETURN TO LOGIN</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-text>
      <div class="mt-10"></div>
    </v-text>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    nm: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    pw: "",
    emailRules: [
      (v) => !!v || "Password is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["BSA", "RAMP"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  layout: "login",
};
</script>

<style></style>
