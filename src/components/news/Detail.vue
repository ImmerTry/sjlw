<template>
  <div class="detail">
    <Header></Header>
    <div class="banner">
    </div>
    <div class="content">
      <div class="title">{{ news.title }}</div>
      <div class="time">
        <span>发布日期：{{ news.time }}</span>
      </div>
      <div class="desc">
        {{ news.desc }}
      </div>
      <div class="page">下一页</div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../home/Header'
import Footer from '../home/Footer'

export default {
  name: 'Detail',
  components: {
    Header,
    Footer
  },
  data  () {
    return {
      news: {
        title: '你的存在，你的姿态，你存在在我的存在',
        time: '2019-07-06',
        desc: '经涉嫌刑事犯罪，现需要吴老太将卡里的钱转到金融监管部门指定的账号中进行资金监管调查。为了让吴老太相信，对方还加了她微信，同时对方发来两张带有吴老太证件照的逮捕令和资金监管鉴定证明书，上面还有她的个人身份信息和银行卡账号信息。 已经75岁的吴老太听到自己涉嫌刑事犯罪有点懵圈，当看到带有自己个人信息的刑事逮捕令后，就更加紧张，便急匆匆赶往银行。 以为被监听不敢出声交流 对于到银行后又摆手又捂嘴的动作，吴老太表示，对方告诉自己不能对家人讲此事，否则家人也一并受牵连。另外对方也不允许她带着手机去银行，'
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .banner {
    background-image: url('../../assets/images/detail.png');
    background-repeat: no-repeat;
    background-size: 100% auto, auto;
    height: 250px;
    overflow: hidden;
  }
  .content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid red;
    padding-top: 2rem;
    .title {
      width: 980px;
      margin: 0 auto;
      font: bold 36px/1 "Microsoft Yahei";
      color: #404040;
    }
    .time span {
      width: 980px;
      height: 68px;
      color: #999999;
      font-size: 13px;
      margin: 0 auto;
      display: block;
      padding: 25px 0;
      border-bottom:1px dashed #999999;
    }
    .desc {
      text-align: center;
      width: 980px;
      margin: 1rem auto;
      font-size: 16px;
      line-height: 28px;
      color: #22222;
    }
  }
</style>
