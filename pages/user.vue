<template>
      <div id="app">
          <sql/>
          <nuxt/>
      </div>
</template>
<script>
    import sql from "~/components/userlist.vue";
    export default {
      components: {
        sql
      }
    };
</script>