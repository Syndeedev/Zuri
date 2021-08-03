<template>
<div>
  <NavBar/>
  <HeroSection/>
  <FirstMainContentSection/>
<!--  <Header/>-->
<!--  <Hero/>-->
<!--  <ExploreEventOverview/>-->
  <TestimonialSection/>
  <ComplexQuestions/>
  <Footer/>
</div>
</template>

<script>
// import Header from "@/components/OldLandingPage/Header";
// import Hero from "@/components/OldLandingPage/Hero";
// import ExploreEventOverview from "@/components/OldLandingPage/ExploreEventOverview";
import NavBar from "@/components/LandingPage/NavBar";
import HeroSection from "@/components/LandingPage/HeroSection";
import FirstMainContentSection from "@/components/LandingPage/FirstMainContentSection";
import ComplexQuestions from "@/components/LandingPage/ComplexQuestions";
import Footer from "@/components/LandingPage/Footer";
import TestimonialSection from "@/components/LandingPage/TestimonialSection";
export default {
  name: "LandingPageView",
  components: {
    TestimonialSection,
    Footer,
    ComplexQuestions,
    FirstMainContentSection,
    HeroSection, NavBar,
    // ExploreEventOverview,
    // Hero, Header
  }
}
</script>

<style scoped>

</style>