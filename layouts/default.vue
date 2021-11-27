<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>-->

      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/aa'
        },
        {
          icon: 'mdi-account',
          title: 'Status',
          to: '/inspire'
        },
        {
          icon: 'mdi-account',
          title: 'SERVER TEST',
          to: '/test'
        },
        {
          icon: 'mdi-account',
          title: 'SERVER TEST2',
          to: '/test2'
        },
        {
          icon: 'mdi-account',
          title: 'MYSQL',
          to: '/mysql'
        },
        {
          icon: 'mdi-account',
          title: 'USER LIST',
          to: '/user'
        },
        {
          icon: 'mdi-grid',
          title: 'Grid',
          to: '/grid'
        },
        {
          icon: 'mdi-calendar-month',
          title: 'Calendar',
          to: '/cal'
        },


      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Swissport MAN'
    }
  }
}
</script>
