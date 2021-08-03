<template>
  <v-app>
    <RevolvingCircle v-if="loading"  :loading="loading"/>
   <LandingPageView v-if=" !loading" />

  </v-app>
</template>

<script>
import LandingPageView from "@/views/LandingPageView";
import RevolvingCircle from "@/components/LandingPage/RevolvingCircle";

export default {
  name: 'App',

  components: {
    RevolvingCircle,
    LandingPageView
  },

  data: () => ({
    loading:true
  }),
  created() {
    // this.loading = true
      setTimeout(()=>{
        this.loading = false
      },3000);
  }
};
</script>

<style>
* {
  font-family:  Poppins, sans-serif;
  scroll-behavior: smooth !important;
  /*color: #2B1C1C;*/
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
