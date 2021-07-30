<template>
<div class="hero"  :style="[
              !$vuetify.breakpoint.smAndDown
                ? {padding: '100px 80px 0', minHeight: '650px' }
                : { padding: '40px 20px 0', alignItems:'center', justifyContent:'content' }
            ]">
  <v-row>
    <v-col cols="12" md="6" sm="6">
      <v-card color="transparent" flat>
        <div class="mr-6">
          <h1
              :style="[!$vuetify.breakpoint.smAndDown? {fontSize: '3.75vw', lineHeight: '1.15em' }: { fontSize: '24px', lineHeight: '1.15em' }]" >
            We help people help others create products customers love</h1>
<!--          <div>-->
<!--            <h2 class="font-weight-medium "-->
<!--                :style="[!$vuetify.breakpoint.smAndDown? {fontSize: '24px' }: { fontSize: '19px' }]">-->
<!--              News and thoughts about Agile Strategy, Lean Product,-->
<!--              Design Thinking plus a look at some of our Videos and former Events.</h2>-->
<!--          </div>-->
          <h4>Zuri Online</h4>
          <p>October 20, 2034 - December 34, 2040</p>
          <v-btn depressed color="blue" class="pa-5">Apply</v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" sm="6" :style="[!$vuetify.breakpoint.smAndDown? {display: 'flex'} : { display: 'none' }]">
      <div >
        <v-card flat class="image"
                :style="[!$vuetify.breakpoint.smAndDown? {height: '450px' , marginTop: '5rem'} : { display: 'none' }]" >

        </v-card>
      </div>

    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
name: "Hero"
}
</script>

<style scoped>
.hero{
  width: 100vw;
  margin-top: 54px;
  background: #FFF0F0;
}
.image{
  max-width: 100%;
  background-image: url("../../assets/hero-img.jpg");
  background-size: cover;
}

</style>