<template>
    <div class="demo">
        <Row>
             <Col span="12">
                <div class="content">
                </div>
             </Col>
             <Col span="12">
                <div class="content">
                </div>
             </Col>
        </Row>
        <Row>
            <Col span="12">
                <div class="content">
                </div>
            </Col>
            <Col span="12">
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
    .demo {
        width: 100%;
        height: 600px;
        margin: 70px 0;
        border: 1px solid black;
        .content {
            border: 1px solid sandybrown;
            width: 100%;
            height: 275px;
        }
    }
</style>
