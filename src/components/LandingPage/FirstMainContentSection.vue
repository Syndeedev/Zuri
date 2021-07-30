<template>
<div class="main">
  <v-row>
    <v-col md="6" sm="12" class="align-center justify-center d-flex flex-column" >
      <v-card flat color="transparent"  width="500">
        <h1 class="" :style="[!$vuetify.breakpoint.smAndDown?
          { fontSize: '2.5rem'} :
           {fontSize: '1.8rem'}]"
        >Why do we help with legalization?</h1>
        <p>We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</p>
      </v-card>

    </v-col>
    <v-col md="6" cols="6" sm="12">
        <div class="d-flex align-center justify-center" style="height: 600px">

              <v-card height="500" width="600"  flat class="feature" >
                <v-row >
                  <v-col  cols="6" v-for="(each, index) in whyLegalize" :key="index">
                    <v-card color="#C3E8F1" height="100" width="100">{{ each.title }}</v-card>
                  </v-col>
                </v-row>
              </v-card>


        </div>




    </v-col>
  </v-row>


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
  height: 600px;
  background: #C3E8F1;

}
h1{
  font-family: Playfair Display;
  font-size: 70px;
}
.feature{
  background: #FCFCFC;

}
</style>