<template>
<div>
  <v-card
      style="background: #ffffff;border-radius: 0; height: auto ;max-height: 760px; overflow-x: hidden"
  >
  <v-app-bar

      flat
      fixed
      class="app"
      color="#FFFFFF"
      height="90"
      elevate-on-scroll
  >

    <v-app-bar-nav-icon class="hidden-md-and-up" ></v-app-bar-nav-icon>

<!--    <v-navigation-drawer-->
<!--        v-model="drawer"-->
<!--        app-->
<!--        disable-resize-watcher-->
<!--        hide-overlay-->
<!--        color="white"-->
<!--        width="75%"-->
<!--    ></v-navigation-drawer>-->

    <div
        :style="[!$vuetify.breakpoint.xs? {padding: '0 5rem'} : { padding: '0 20px'}]"   class="d-flex  justify-space-between"
        style="width: 100%;">
      <div>
        <h1 style="font-family:  Playfair Display; color: #094B72">Zuri</h1>
      </div>
      <div class="justify-space-around align-center" :style="[!$vuetify.breakpoint.smAndDown? {display: 'flex'} : { display: 'none' }]">
        <div >
          <v-btn small text>Contact</v-btn>
          <v-btn small text>Testimonials</v-btn>
          <v-btn small text>About</v-btn>
          <v-btn small text>Terms</v-btn>
        </div>
        <div style="padding-left: 5rem">
          <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
        </div>

      </div>
    </div>
  </v-app-bar>
  </v-card>
</div>
</template>

<script>
export default {
name: "NavBar",
  data: () => ({
    drawer: false,
    group: null,

  })
}
</script>

<style scoped>
.app {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
}

</style>