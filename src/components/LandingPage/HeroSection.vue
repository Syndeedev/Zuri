<template>
<div class="hero" :style="[!$vuetify.breakpoint.smAndDown?
{height: 'calc(108.4vh - 90px)'} : { height: 'calc(53% - 90px)'}]">
  <div class="d-flex align-center " >
    <v-row>
      <v-col>
        <div :style="[!$vuetify.breakpoint.smAndDown? {marginLeft: '5rem'} : { margin: ' 0 20px'  }]">
          <h1 :style="[!$vuetify.breakpoint.smAndDown?
          {paddingTop: '5rem', fontSize: '4rem',lineHeight: '80px'} :
           { paddingTop: '3rem',fontSize: '2.5rem',lineHeight: '40px' }]" >
            Your Solution Legal Consultancy
          </h1>
          <div :style="[ !$vuetify.breakpoint.smAndDown?
               {margin: '25px 0', fontSize: '1.5rem',lineHeight: '30px'} :
          {margin: '22px 0', fontSize: '1rem',lineHeight: '21px'}]">

            <p >
              We are here to help you take care of your legality with the best service especially for you.</p>
          </div>

          <v-btn dark color="#094B72" class="pa-7 ">Get Started</v-btn>
          <p :style="[!$vuetify.breakpoint.smAndDown? { marginTop: '25px', letterSpacing: '1.5px'}: {marginTop: '22px'}]">
            Trusted by 10+ companies in indonesia</p>
          <div class="logos">
            <v-row>
              <v-col cols="6" class="justify-space-around" sm="6" md="6" v-for="(image, index) in images" :key="index">
                <v-img contain max-width="70" style="cursor: pointer" :src="`${image.img}`" ></v-img>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
      <v-col :style="[!$vuetify.breakpoint.smAndDown? {} : { display: 'none' }]">
        <div class="mt-n5" >
          <v-img max-width="500" max-height="700" contain :src="require('../../assets/lady.png')"></v-img>
        </div>
      </v-col>
    </v-row>



  </div>

</div>
</template>

<script>
//import HeroImage from "@/components/LandingPage/HeroImage";
export default {
  name: "HeroSection",
  components: {},
  data(){
    return{
      images:[
        {
          img: require('../../assets/AirbnbLogo.svg')
        },
        {
          img: require('../../assets/HubspotLogo.svg')
        },
        {
          img: require('../../assets/MicrosoftLogo.svg')
        },
        {
          img: require('../../assets/GoogleLogo.svg')
        }

      ]
    }
  }
}
</script>

<style scoped>
.hero{
  width: 100vw;
  margin-top: 90px;
  padding: 0 ;
  background: #F9F8F9;

}
h1{
  font-family: Playfair Display;
  color: #094B72;
  font-size: 70px;
  line-height: 80px;
}
/*.hero-title{*/
/*  width: 150px;*/
/*}*/
.logos{
  width: 200px;
  height: 200px;
}
</style>