<template>
  <div class="main">
    <div
        :style="[!$vuetify.breakpoint.xs?
          { width: '91%', margin: '20px auto'  } :
           { flexDirection: 'column',  padding: '20px'}]"   class="d-flex  justify-space-between">
      <div  :style="[!$vuetify.breakpoint.xs? {} : {alignItems: 'center', justifyContent: 'center'}]" class="d-flex">
        <v-avatar size="30" color="white" ><h3 style="color: #0F6E8C">Z</h3></v-avatar>
        <h3 class="ml-2">Zuri</h3>
      </div>
      <div :style="[!$vuetify.breakpoint.xs? {} : {alignItems: 'center', justifyContent: 'center'}]" class="footerLinks d-flex">
        <div :style="[!$vuetify.breakpoint.smAndDown? {margin: '10px 70px'} : {margin: '10px 15px'}]" class=" footerLink d-flex flex-column">
          <v-btn text>Product</v-btn>
          <a href="#">Overview</a>
          <a href="#">Features</a>
          <a href="#">Tutorials</a>
          <a href="#">Pricing</a>
          <a href="#">Releases</a>
        </div>
        <div :style="[!$vuetify.breakpoint.smAndDown? {margin: '10px 70px'} : {margin: '10px  15px'}]" class="footerLink d-flex flex-column">
          <v-btn text>Company</v-btn>
          <a href="#">Overview</a>
          <a href="#">Features</a>
          <a href="#">Tutorials</a>
          <a href="#">Pricing</a>
          <a href="#">Releases</a>
        </div>
        <div :style="[!$vuetify.breakpoint.smAndDown? {margin: '10px 70px'} : {margin: '10px 15px'}]" class="footerLink d-flex flex-column">
          <v-btn text>Support</v-btn>
          <a href="#">Overview</a>
          <a href="#">Features</a>
          <a href="#">Tutorials</a>
          <a href="#">Pricing</a>
          <a href="#">Releases</a>
        </div>

       </div>


    </div>
    <div class="bottomFooter">

    <div
        :style="[!$vuetify.breakpoint.mdAndDown?
          { width: '91%', margin: '0 auto'  } :
           { padding: '20px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}]"   class="d-flex  py-5  justify-space-between"
       >
      <p>© 2021 Lawliet. All rights reserved</p>
      <div class="d-flex">
        <div class="mx-3"  v-for="(each, index) in socials" :key="index">
          <img :src="`${each.image}`" alt="none">
        </div>
      </div>


    </div>

    </div>

  </div>
</template>

<script>
export default {
name: "Footer",
  data(){
  return{
    socials: [
      {
        image: require('../../assets/Instagram.png'),
      },
        {
        image: require('../../assets/Ball.png'),
      },
        {
        image: require('../../assets/Twitter.png'),
      },
        {
        image: require('../../assets/Youtube.png'),
      },

    ]
  }
  }
}
</script>

<style scoped>
.main{
  width: 100vw;
  background: #0F6E8C;
  bottom: 0;
  color: #FFFFFF;
}
.bottomFooter{
  background: #05546D;
}
.footerLinks a{
  text-decoration: none;
  color: #FFFFFF;
  padding-top: 8px;
  font-size: 12px;
  letter-spacing: 1px;
}
.footerLinks .v-btn{
  padding: 0;
  margin: 0;
  font-weight: 600;
  text-transform: capitalize;
  color: #FFFFFF;
  font-size: 16px;
}
.footerLink{

}
</style>