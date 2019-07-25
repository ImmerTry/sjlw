<template>
    <div class="content">
        <Row>
            <Col>
                <div class="title">我们的服务</div>
                <!-- <div class="context">一条龙建筑服务行业</div> -->
            </Col>
        </Row>
        <Row>
            <Col :xs="24" :md="{span: 6,offset:1}" :lg="{span: 6,offset:1}" :xl="{span: 6,offset:1}">
                <div class="service"></div>
            </Col>
            <Col :xs="24" :md="{span: 6,offset:2}" :lg="{span: 6,offset:2}" :xl="{span: 6,offset:2}">
                <div class="service"></div>
            </Col>
            <Col :xs="24" :md="{span: 6,offset:2}" :lg="{span: 6,offset:2}" :xl="{span: 6,offset:2}">
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
// xs
@media only screen and (max-width: 600px) {
     .content {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        margin: 40px 0;
        .title {
            margin: 40px 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 30px;
            text-align: center;
            color: #1a2b4a;
        }
        .context {
            width: 100%;
            height: 40px;
            line-height: 40px;
            float: left;
        }
        .service {
            width: 100%;
            height: 328px;
            border: 1px solid red;
        }
    }
}
// md
@media only screen and (min-width: 768px) {
     .content {
        width: 100%;
        height: 100%;
        text-align: center;
        background: #f5f5f5;
         margin: 40px 0;
        .title {
            margin: 40px 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            float: left;
            font-size: 32px;
            font-weight: 500;
            color: #1a2b4a;
        }
        .context {
            width: 100%;
            height: 40px;
            line-height: 40px;
            float: left;
        }
        .service {
            width: 100%;
            height: 328px;
            background: #F19483;
            margin-top: 20px;
        }
    }
}
// lg
@media only screen and (min-width: 992px) {
     .content {
        width: 100%;
        height: 100%;
        text-align: center;
        background: #f5f5f5;
         margin: 40px 0;
        .title {
            margin: 40px 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            float: left;
            font-size: 32px;
            font-weight: 500;
            color: #1a2b4a;
        }
        .context {
            width: 100%;
            height: 40px;
            line-height: 40px;
            float: left;
        }
        .service {
            width: 100%;
            height: 328px;
            background: #F19483;
            margin-top: 20px;
        }
    }
}
// xl
@media only screen and (min-width: 1200px) {
     .content {
        width: 100%;
        height: 100%;
        text-align: center;
        background: #f5f5f5;
         margin: 40px 0;
        // display: flex;
        .title {
            margin: 40px 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            float: left;
            font-size: 32px;
            font-weight: 500;
            color: #1a2b4a;
        }
        .context {
            width: 100%;
            height: 40px;
            line-height: 40px;
            float: left;
        }
        .service {
            width: 100%;
            height: 328px;
            background: #F19483;
            margin-top: 20px;
        }
    }
}
</style>
