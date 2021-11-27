<template>
  <div id="app">
    <v-app>
      <v-container id="bak" fill-height fluid>
        <v-row>
          <v-card id="card" width="500" height="500" class="mx-auto">
            <div style="margin-top:180px">
              <v-card-title primary-title class="justify-center">
                <h1 class="red--text text--accent-2 text-center">Swissport Korea</h1>
              </v-card-title>

              <v-card-text class="text-center">From landing to take off we care!</v-card-text>
            </div>
            <v-row>
              <v-col>
                <v-card-actions class="justify-center">
                  <v-spacer />
                  <v-btn depressed color="primary">LOGIN</v-btn>
                  <v-btn color="warning">REGISTER</v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>import loginVue from "~/layouts/login.vue";

export default {
  layout: 'login'
}
</script>

<style>
#bak {
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
}
#card {
  background-color: #ffffff;
}

#cen {
  display: table;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
}
</style>


