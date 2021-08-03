<template>
<div class="main">
  <div
      :style="[!$vuetify.breakpoint.smAndDown?
          { width: '95.5%', float: 'right'} :
           { flexDirection: 'column',  padding: '20px'}]" class="d-flex align-center">
    <div>
      <h1 :style="[!$vuetify.breakpoint.smAndDown? {fontSize: '45px'} : {fontSize: '32px'}]">Complex Questions</h1>
      <p :style="[!$vuetify.breakpoint.smAndDown? {fontSize: '24px', marginRight: '40px'} : {fontSize: '16px'}]">Request for a personalized budget for your legal problem.
        We will send you a coupe options in 24 hours. You can have free consult , if a our first customer</p>
      <v-btn depressed  color="#0F6E8C" class="text-capitalize font-weight-bold pa-7 rounded-lg mb-4 white--text">
        <v-icon light class="pr-1">mdi-phone</v-icon>Call Now
      </v-btn>
    </div>
    <div>
      <img class="align-center d-flex" :src="require('../../assets/complex.png')" :style="[!$vuetify.breakpoint.mdAndDown?
          {} :
           {width: '70%',margin: '0 auto'}]">

    </div>
  </div>

</div>
</template>

<script>
export default {
name: "ComplexQuestions"
}
</script>

<style scoped>
.main{
  width: 100vw;
}
h1{
  font-family: Playfair Display;
}
</style>