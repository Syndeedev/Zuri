<template>
  <div class="main">
    <div  class="d-flex my-6 text-center flex-column align-center justify-center" >
      <h1 class="my-5">Clients Testimonial</h1>
      <div :style="[!$vuetify.breakpoint.smAndDown?
          {} : { flexDirection: 'column',  padding: '20px'}]" class="d-flex mainWrap">

        <div class="testimonialCardWrap" v-for="(testimonial, index) in testimonials" :key="index">
          <div  :style="[!$vuetify.breakpoint.mdAndDown? {width: '350px', height: '230px' } : {width: '300px', height: '230px'}]"
                class="testimonialCard">
            <h3>{{ testimonial.comment }}</h3>
            <p class="pt-2">{{testimonial.description}}</p>

          </div>
          <div class="d-flex align-center justify-center">
            <div>
              <v-avatar  size="50"><img :src="`${testimonial.image}`"></v-avatar>
            </div>

            <div class="mt-2 ml-2" >
              <h3>{{ testimonial.name }}</h3>
              <p class="mt-n2">{{ testimonial.position }}</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
name: "TestimonialSection",
  data(){
  return{
    testimonials:[
      {
        comment: "Incredible Experience",
        description: "We had an incredible experience working with Landify and were impressed they made such a big\n" +
            "              difference in only three weeks. Our team is so grateful for the wonderful improvements they\n" +
            "              made and their ability to get familiar with the concept so quickly.",
        image: require('../../assets/hero-img.jpg'),
        name: "Anya Tailor Joy",
        position: "CEO, SF Industries"
      },
        {
        comment: "Incredible Experience",
        description: "We had an incredible experience working with Landify and were impressed they made such a big\n" +
            "              difference in only three weeks. Our team is so grateful for the wonderful improvements they\n" +
            "              made and their ability to get familiar with the concept so quickly.",
        image: require('../../assets/hero-img.jpg'),
        name: "Anya Tailor Joy",
        position: "CEO, SF Industries"
      },
        {
        comment: "Incredible Experience",
        description: "We had an incredible experience working with Landify and were impressed they made such a big\n" +
            "              difference in only three weeks. Our team is so grateful for the wonderful improvements they\n" +
            "              made and their ability to get familiar with the concept so quickly.",
        image: require('../../assets/hero-img.jpg'),
        name: "Anya Tailor Joy",
        position: "CEO, SF Industries"
      },

    ]
  }
  }
}
</script>

<style scoped>
.main{
  width: 100vw;
  background: #F2FCFF;
}

.testimonialCard{
  clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 55% 95%, 51% 100%, 48% 95%, 0% 95%);
  background: white;
  border-radius: 8px;
  padding: 15px 10px ;
  /*min-height: 200px;*/


}
.testimonialCardWrap{
  /*box-shadow:  2px 5px 10px #eaeaea;*/
  filter: drop-shadow(2px 5px 10px #eaeaea);
  margin: 10px;
}
.mainWrap{
  overflow-x: auto !important;
}
.testimonialCardWrap p{
  font-size: 14px;
}
.testimonialCardWrap h3{
  font-size: 18px;
  padding: 5px 0;
}

</style>