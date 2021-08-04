<template>
  <v-app>
    <RevolvingCircle v-if="loading"  :loading="loading"/>
   <LandingPageView v-if=" !loading" />

  </v-app>
</template>

<script>
import LandingPageView from "@/views/LandingPageView";
import RevolvingCircle from "@/components/LandingPage/RevolvingCircle";

// const options = {
//   root: null, /* uses the page as root */
//   threshold: 0
// };


// const  faders = Array.from(document.querySelectorAll('.fade-in'))
// document.addEventListener('scroll' , handleScroll);

// let observer;
export default {
  name: 'App',

  components: {
    RevolvingCircle,
    LandingPageView
  },

  data: () => ({
    loading:true,
    users: [],
    observer: null

  }),
  created() {
    // this.loading = true
      setTimeout(()=>{
        this.loading = false
      },2000);
  },
  // mounted:{
  //   this.observer = new IntersectionObserver(this.callback, options),
  //  handleScroll(){
  //
  //  }
  // },
  // destroyed() {
  //   document.removeEventListener('scroll', handleScroll)
  // }
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
.fade-in{
 opacity: 0;
  transition: opacity 250ms ease-in;
}
.fade-in.appear{
  opacity: 1;
}
</style>
