<template>
<v-card>
  <v-card-title>여기는 MOVIES 페이지</v-card-title>
  <v-textarea v-model="txt" />
  <v-card-actions>
      <v-btn @click="test">
        test
      </v-btn>
    </v-card-actions>
</v-card>

</template>
<script>
export default {
  data() {
    return {
      txt: ''
    }
  },
  methods: {
    async test() {
      const r = await this.$axios.get('/api/movie')
      this.txt = r.data
    }
  }
}
</script>


