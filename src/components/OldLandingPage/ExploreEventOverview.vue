<template>
<div>
  <div class="hero"
       :style="[!$vuetify.breakpoint.smAndDown? {marginTop: '-5rem' }: { marginTop: '0' }]">
      <h1 class=" explore text-center ">Explore Upcoming Events</h1>
<!--      <div class="intro-text">-->
<!--        News and thoughts about Agile Strategy, Lean Product, Design Thinking plus a look at some of our Videos and former Events.-->
<!--      </div>-->
   <div class="exploreCards">
     <v-card>

     </v-card>

   </div>

  </div>
</div>
</template>

<script>
export default {
name: "ExploreEventOverview"
}
</script>

<style scoped>
.hero{
  width: 100%;
  background: #fff;
  height: 700px;
}
.intro-text{
  font-size: 2em;
  line-height: 1.25em;
}
.explore{
  padding-top: 10rem;
}
/*.exploreField{*/
/*  padding-bottom: 10rem;*/
/*}*/


</style>