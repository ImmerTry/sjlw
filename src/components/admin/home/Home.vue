<template>
    <div class="home">
    <Row>
        <div class="card-wrapper">
            <Col :md="8" :lg="{span: 4,offset:1}" :xl="{span: 4,offset:1}">
                <Card :padding="0">
                    <div class="card">
                        <div class="left" style="background:#2d8cf0;">
                            <Icon type="ios-time-outline" />
                        </div>
                        <div class="right">
                            <p class="count-style">9999</p>
                            <p>累计访问</p>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col :md="8" :lg="{span: 4,offset:2}" :xl="{span: 4,offset:2}">
                <Card :padding="0">
                    <div class="card">
                        <div class="left" style="background:#19be6b;">
                            <Icon type="ios-paper-outline" />
                        </div>
                        <div class="right">
                            <p class="count-style">9999</p>
                            <p>累计评论</p>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col :md="8" :lg="{span: 4,offset:2}" :xl="{span: 4,offset:2}">
                <Card :padding="0">
                    <div class="card">
                        <div class="left" style="background:#ff9900;">
                            <Icon type="ios-cafe-outline" />
                        </div>
                        <div class="right">
                            <p class="count-style">9999</p>
                            <p>用户访问</p>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col :md="8" :lg="{span: 4,offset:1}" :xl="{span: 4,offset:2}">
                <Card :padding="0">
                     <div class="card">
                        <div class="left" style="background:#ed4014;">
                            <Icon type="ios-chatboxes-outline" />
                        </div>
                        <div class="right">
                            <p class="count-style">12</p>
                            <p>用户反馈</p>
                        </div>
                    </div>
                </Card>
            </Col>
        </div>
    </Row>
    <Row>
        <Col :md="{span:8}" :lg="{span:7,offset:1}" :xl="{span:7,offset:1}">
            <Card :padding="0">
                <PieChart></PieChart>
            </Card>
        </Col>
        <Col :md="{span:16}" :lg="{span:13,offset:2}" :xl="{span:13,offset:2}">
            <Card :padding="0">
                <BarChart></BarChart>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col :md="{span:22,offset:1}" :lg="{span:22,offset:1}" :xl="{span:22,offset:1}">
            <Card :padding="0">
                <Stacked></Stacked>
            </Card>
        </Col>
    </Row>
    </div>
</template>
<script>
import PieChart from '../echarts/PieChart'
import Stacked from '../echarts/Stacked'
import BarChart from '../echarts/BarChart'
export default {
  name: 'Home',
  components: {
    PieChart,
    Stacked,
    BarChart
  }
}
</script>
<style lang="less" scoped>
.home {
    background: #f5f7f9;
}
.card {
    width: 100%;
    height: 110px;
    border-radius: 5px;
}
.left {
    width: 36%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 36px;
    color: #fff;
    float: left;
}
.right {
    width: 64%;
    height: 100%;
    float: left;
    text-align: center;
    padding: 10px 0;
    .count-style {
        width: 100%;
        height: 70px;
        line-height: 75px;
        font-size: 30px;
    }
}
.chart{
    padding: 20px;
}
</style>
