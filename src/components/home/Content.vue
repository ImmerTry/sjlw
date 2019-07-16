<template>
    <div class="content">
        <Row>
            <Col>
                <div class="title">我们的服务</div>
                <!-- <div class="context">一条龙建筑服务行业</div> -->
            </Col>
        </Row>
        <Row :gutter="30">
            <Col span="8">
                <div class="service"></div>
            </Col>
            <Col span="8">
                <div class="service"></div>
            </Col>
            <Col span="8">
                <div class="service"></div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  name: 'Content'
}
</script>
<style lang="less" scoped>
    .content {
        width: 100%;
        height: 448px;
        line-height: 448px;
        text-align: center;
        background: #f5f5f5;
         margin: 40px 0;
        // display: flex;
        .title {
            margin: 40px 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            // text-align: center;
            float: left;
            font-size: 32px;
            font-weight: 500;
            color: #1a2b4a;
        }
        .context {
            width: 100%;
            height: 40px;
            line-height: 40px;
            // text-align: center;
            float: left;
        }
        .service {
            // margin-top: 50px;
            // margin-left: 35px;
            width: 100%;
            height: 328px;
            background: #F19483;
        }
    }
</style>
