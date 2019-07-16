<!-- Content 主题内容 -->
<template>
    <div class="wrapper">
        <Carousel v-model="value" loop autoplay>
            <CarouselItem>
                <div class="carousel-img">
                    <img src="../../assets/images/banner1.png" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="carousel-img">
                    <img src="../../assets/images/banner2.png" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="carousel-img">
                    <img src="../../assets/images/banner3.png" alt="">
                </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
export default {
  name: 'Content',
  data () {
    return {
      value: 0,
      autoplaySpeed: 5000,
      arrow: 'never'
    }
  }
}
</script>
<style lang="less" scoped>
    .wrapper {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 48%;
        background: #eeeeee;
        .carousel-img {
            width: 100%;
        }
    }
</style>
