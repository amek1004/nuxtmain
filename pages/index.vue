<template>
  <div style="margin-top: 80px;">
    <v-row justify="center">
      <v-card-title class="red--text font-weight-medium display-1">Swissport Korea</v-card-title>

      <v-card-text class="text-center mt-n3">From landing to take off we care!</v-card-text>
    </v-row>
    <v-form>
      <v-row class="mt-5">
        <v-spacer />
        <v-col>
          <v-text-field label="ID"></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row class="mt-n4">
        <v-spacer />
        <v-col>
          <v-text-field label="Password"></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>

      <v-row>
        <v-col>
          <v-card-actions>
            <v-spacer />
            <v-btn small color="primary">LOGIN</v-btn>
            <v-btn small color="warning" nuxt-link to="register">REGISTER</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>

export default {
  layout: 'login'
}
</script>

<style>
</style>


