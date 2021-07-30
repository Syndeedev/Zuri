<template>
<div class="main">
  <div class="d-flex justify-space-between align-center"
       :style="[!$vuetify.breakpoint.mdAndDown?
          { width: '91%', margin: '0 auto',} :
           {fontSize: '100%', flexDirection: 'column'}]"
       >
    <div class="mr-16">
        <h1 class="" :style="[!$vuetify.breakpoint.smAndDown?
          { fontSize: '2.5rem'} :
           {fontSize: '1.8rem'}]"
        >Why do we help with legalization?</h1>
        <p>We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</p>
    </div>

        <div class="d-flex align-center justify-center" >

                <div class="d-flex align-center flex-wrap justify-center" :style="[$vuetify.breakpoint.mdAndDown?{} : {margin: '60px'}]">
                  <div v-for="(each, index) in whyLegalize" :key="index">
                    <div :style="[$vuetify.breakpoint.mdAndDown?{margin: '10px'} : {marginRight: '10px'}]" class="small-card">
                      <p>each.title</p>
                    </div>
                  </div>
                </div>
        </div>
    </div>



   <div class="numbers d-flex text-center flex-column align-center justify-center">
      <div >
        <h1 style="font-size: 48px">Some count that matters</h1>
        <p>Our achievement in the journey depicted in numbers</p>
      </div>

      <div class="d-flex allNumbers "  :style="[!$vuetify.breakpoint.mdAndDown? {} : {flexDirection: 'column'}]">
        <div>
          <h1>30</h1>
          <p>Clients</p>
        </div>
        <div class="px-10">
          <h1>300+</h1>
          <p>Token Business Legalities</p>
        </div>
        <div>
          <h1>8</h1>
          <p>Years of Journey</p>
        </div>
      </div>
   </div>


    <div>
      <h1 class="my-10">Clients Testimonial</h1>
      <div class="testimonialCard">

      </div>

    </div>
</div>
</template>

<script>
export default {
name: "FirstMainContentSection",
  data(){
  return{
    whyLegalize:[
      {title:"environment"},
      {title:"environment"},
      {title:"environment"},
      {title:"environment"}
    ]
  }
  }
}
</script>

<style scoped>
.main{
  width: 100vw;
  /*height: 600px;*/
  background: #F2FCFF;

}
h1{
  font-family: Playfair Display;
  font-size: 70px;
}
.feature{
  background: #FCFCFC;

}
.small-card{

  background: #FCFCFC;
  box-shadow: 0px 18px 58px 16px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 206px;
  min-height: 203px;
  margin-bottom: 10px;
}
.numbers{
  background-image: url("../../assets/BG.png");
  background-size: cover;
  color: #ffffff !important;
}
.allNumbers h1{
  font-size: 64px;
}
.allNumbers{
  margin: 20px 0;
}
</style>