<template>

    <v-app-bar
        color=#FFF0F0
        fixed
        elevate-on-scroll

    >
<!--      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>-->

      <v-toolbar-title class="" style="font-family: Verdana"><h3>Zuri</h3></v-toolbar-title>
    </v-app-bar>

</template>

<script>
export default {
name: "Header",
  data: () => ({
    drawer: false,
    group: null,

  }),
}
</script>

<style scoped>
.isActive{
  background: white;
}
/*.v-toolbar__content {*/
/*  transition: background-color 0.5s cubic-bezier(1, 0, 0, 1);*/
/*}*/

</style>