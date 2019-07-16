<template>
  <div class="amap-page-container">
     <el-amap
      vid="map"
      class="amap-box"
      :zoom="zoom"
      :center="center"
    >
      <el-amap-marker vid="marker" :position="center"></el-amap-marker>
    </el-amap>
  </div>
</template>
<style lang="less" scoped>
  .amap-page-container {
    width: 100%;
    height: 100%;
  }
</style>

<script>
export default {
  components: {},
  data () {
    return {
      zoom: 16,
      lng: 0,
      lat: 0,
      loaded: false,
      center: [118.811892, 31.95001]
    }
  }
}
</script>
