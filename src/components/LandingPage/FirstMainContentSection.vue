<template>
<div class="main">
    <div class="d-flex justify-space-between align-center"
       :style="[!$vuetify.breakpoint.mdAndDown?
          { width: '91%', margin: '0 auto', padding: ' 0'} :
           {fontSize: '100%', flexDirection: 'column',  padding: '20px 0'}]"
       >
      <div >
        <h1 class="mb-2" :style="[!$vuetify.breakpoint.smAndDown?
          { fontSize: '2.5rem', lineHeight: '50px'} :
           {fontSize: '1.8rem', textAlign: 'center', lineHeight: '35px'}]"
        >Why do we help with legalization?</h1>
        <p
           :style="[!$vuetify.breakpoint.smAndDown? {} : {fontSize: '14px', textAlign: 'center'}]"
        >We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</p>
      </div>

        <div class="d-flex align-center justify-center" >

        <div class="d-flex align-center flex-wrap justify-center" :style="[$vuetify.breakpoint.mdAndDown?{} : {margin: '60px'}]">
          <div v-for="(each, index) in whyLegalize" :key="index">
            <div :style="[!$vuetify.breakpoint.mdAndDown?{margin: '10px',width: '250px', height: '250px'}
                  : {margin: '10px', width: '300px', height: '206px'}]"
                 class="small-card pa-5">
              <img :src="`${each.image}`" alt="none">
              <h3 class="py-5">{{each.title}}</h3>
              <p>{{each.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>



   <div style="padding: 20px;"  class="numbers d-flex text-center flex-column align-center justify-center">
      <div >
        <h1 :style="[!$vuetify.breakpoint.smAndDown? {fontSize: '45px'} : {fontSize: '32px'}]">Some count that matters</h1>
        <p>Our achievement in the journey depicted in numbers</p>
      </div>

      <div class="d-flex " >
        <div>
          <h1 :style="[!$vuetify.breakpoint.smAndDown? {fontSize: '45px'} : {fontSize: '32px'}]">30</h1>
          <p class="px-3">Clients</p>
        </div>
        <div :style="[!$vuetify.breakpoint.smAndDown? {padding: '0 45px'} : {}]" >
          <h1 :style="[!$vuetify.breakpoint.smAndDown? {fontSize: '45px'} : {fontSize: '32px'}]">300+</h1>
          <p class="px-2">Token Business Legalities</p>
        </div>
        <div>
          <h1 :style="[!$vuetify.breakpoint.smAndDown? {fontSize: '45px'} : {fontSize: '32px'}]">8</h1>
          <p class="px-2">Years of Journey</p>
        </div>
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
      {
        title:"Environmental Law",
        description: "Environmental legal issues might occur since the planned business activities are designed",
        image: require('../../assets/CircleLayer.png')
      },
      {
        title:"Corporate and Commercial",
        description: "We provide a complete range of services for the continuity of your business activities.",
        image: require('../../assets/Bag.png')
      },
      {
        title:"Information and Technology",
        description: "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.",
        image: require('../../assets/Rocket.png')
      },
      {
        title:"Other Services",
        description: "In dealing with disruptive economic and legal challenge, our firm also provide various legal services.",
        image: require('../../assets/UserArrows.png')
      },

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
  /*font-size: 70px;*/
}

.small-card{
  background: #FCFCFC;
  box-shadow: 2px 5px 10px #eaeaea;
  border-radius: 8px;
  padding: 10px;
  font-size: 13px;
  transition: 0.5s ease all;
}
.small-card:hover{
  transform: rotateZ(-1deg) scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.numbers{
  background-image: url("../../assets/BG.png");
  background-size: cover;
  color: #ffffff !important;
}

/*.allNumbers{*/
/*  margin: 90px 0;*/
/*}*/
</style>