<template>
  <div class="home">
    <Header></Header>
    <Carousel></Carousel>
    <Content></Content>
    <Data></Data>
    <Demo></Demo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/home/Header'
import Carousel from '@/components/home/Carousel'
import Content from '@/components/home/Content'
import Demo from '@/components/home/Demo'
import Data from '@/components/home/Data'
import Footer from '@/components/home/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Carousel,
    Content,
    Demo,
    Data,
    Footer
  }
}
</script>
