<template>
    <div class="demo">
        <Row>
             <Col :xs="24" :md="12" :lg="12" :xl="12">
                <div class="content">
                </div>
             </Col>
             <Col :xs="24" :md="12" :lg="12" :xl="12">
                <div class="content">
                </div>
             </Col>
        </Row>
        <Row>
            <Col :xs="24" :md="12" :lg="12" :xl="12">
                <div class="content">
                </div>
            </Col>
            <Col :xs="24" :md="12" :lg="12" :xl="12">
                <div class="content">
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  name: 'Demo'
}
</script>
<style lang="less" scoped>
// xs
@media only screen and (max-width: 600px) {
  .demo {
        width: 100%;
        height: 100%;
        margin: 70px 0;
        // border: 1px solid black;
        .content {
            border: 1px solid sandybrown;
            width: 100%;
            height: 275px;
        }
    }
}
// md
@media only screen and (min-width: 768px) {
    .demo {
        width: 100%;
        height: 100%;
        margin: 70px 0;
        border: 1px solid black;
    .content {
        // border: 1px solid sandybrown;
        width: 100%;
        height: 275px;
    }
}
}
// lg
@media only screen and (min-width: 992px) {
    .demo {
        width: 100%;
        height: 100%;
        margin: 70px 0;
        border: 1px solid black;
        .content {
            // border: 1px solid sandybrown;
            width: 100%;
            height: 275px;
        }
    }
}
// xl
@media only screen and (min-width: 1200px) {
      .demo {
        width: 100%;
        height: 100%;
        margin: 70px 0;
        border: 1px solid black;
        .content {
            // border: 1px solid sandybrown;
            width: 100%;
            height: 275px;
        }
    }
}
</style>
