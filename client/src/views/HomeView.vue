<template>
  <div class="homebox">
    <div class="navbox">
      <NavBar />
    </div>
    <div class="mainbox">
      <LeftSideBar />
      <Carousel />
      <RightSideBar />
    </div>
    <div class="footerbox"></div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Carousel from '@/components/Carousel.vue'
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    Carousel,
    LeftSideBar,
    RightSideBar,
    Footer,
  }
}
</script>

<style>
.homebox {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
}

.mainbox {
  display: flex;
  justify-content: space-between;
}

</style>
