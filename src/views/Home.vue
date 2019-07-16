<template>
  <div class="home">
    <Header></Header>
    <Carousel></Carousel>
    <Content></Content>
    <Demo></Demo>
    <Data></Data>
  </div>
</template>

<script>
import Header from '../components/home/Header'
import Carousel from '../components/home/Carousel'
import Content from '../components/home/Content'
import Demo from '../components/home/Demo'
import Data from '../components/home/Data'

export default {
  name: 'home',
  components: {
    Header,
    Carousel,
    Content,
    Demo,
    Data
  }
}
</script>
