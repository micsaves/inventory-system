<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped :mini-variant.sync="mini">
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="primary" dense dark>
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      <v-icon class="mx-4" large>
        mdi-youtube
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Inventory System</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-logout-variant</v-icon>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      drawer: null,
      mini: false,
      items: [
        { icon: "mdi-package-variant", text: "Items" },
        { icon: "mdi-trending-up", text: "Sales" },
        { icon: "mdi-cogs", text: "Settings" },
      ]
    }
  },
  created() {
  },
};
</script>
