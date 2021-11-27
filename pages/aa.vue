<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/me.jpeg"
        alt="Vuetify.js"
        class="mb-5"
        height="20%"
      >
      <blockquote class="blockquote,text-center">
        &#8220;다시 시작할수 있는 시간이 왔다. 끝까지 하는자가 살아 남는다.&#8221;
        <footer>
          <small>
            <em>&mdash;Choi Zak.&mdash;</em>
          </small>
        </footer>
      </blockquote>
      <v-btn rounded block elevation="2" 
       ><nuxt-link to="login">이거 버튼 누르면 로그인 페이지로 갑니다.</nuxt-link></v-btn><br>

      <v-btn rounded block elevation="2" ><nuxt-link to="/inspire">이거 버튼 누르면 인스파이어!!</nuxt-link></v-btn>
    </v-col>
  </v-row>
</template>