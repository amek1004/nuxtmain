<template>
  <v-card>
     <v-card-title>
      Mysql Server test
    </v-card-title>
        <v-card-text>
      <v-textarea v-model="txt" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="mysql">
        Request
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
    async mysql() {
      const r = await this.$axios.get('/api/mysql')
      this.txt = r.data
    }
  }
}
</script>