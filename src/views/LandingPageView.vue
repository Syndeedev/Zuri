<template>
<div>
  <NavBar/>
  <HeroSection/>
  <FirstMainContentSection/>
<!--  <Header/>-->
<!--  <Hero/>-->
<!--  <ExploreEventOverview/>-->
</div>
</template>

<script>
// import Header from "@/components/OldLandingPage/Header";
// import Hero from "@/components/OldLandingPage/Hero";
// import ExploreEventOverview from "@/components/OldLandingPage/ExploreEventOverview";
import NavBar from "@/components/LandingPage/NavBar";
import HeroSection from "@/components/LandingPage/HeroSection";
import FirstMainContentSection from "@/components/LandingPage/FirstMainContentSection";
export default {
  name: "LandingPageView",
  components: {
    FirstMainContentSection,
    HeroSection, NavBar,
    // ExploreEventOverview,
    // Hero, Header
  }
}
</script>

<style scoped>

</style>