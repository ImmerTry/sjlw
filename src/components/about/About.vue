<template>
  <div class="about">
    <Header></Header>
    <div class="banner">
    </div>
    <div class="artical">
      <img src="../../assets/images/about.png" alt="">
    </div>
    <div class="content">
      <span>公司简介</span>
      <p>我们是一家致力于发展科技与其他的一家新兴的互联网公司，从一开始的5位创始人团队，到现在已经发展为50名员工的一家公司、
        感恩有你们我们是一家致力于发展科技与其他的一家新兴的互联网公司，从一开始的5位创始人团队，到现在已经发展为50名员工的一家公司、
        感恩有你们我们是一家致力于发展科技与其他的一家新兴的互联网公司，从一开始的5位创始人团队，到现在已经发展为50名员工的一家公司、
        感恩有你们
      </p>
      <span>企业文化</span>
      <p>科技创新，智造未来</p>
    </div>
  </div>
</template>
<script>
import Header from '../home/Header'

export default {
  name: 'About',
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>
// xs
@media only screen and (max-width: 600px) {
 .banner {
    background-image: url('https://assets.aiyaopai.com/3.0/home/headbg.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 65px;
    overflow: hidden;
  }
  .artical {
    width: 100%;
    height: auto;
    margin: 40px auto 0;
    img {
      padding:0 20px;
      width: 100%;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1024px;
    padding: 0 20px;
    span {
      font-size: 24px;
      font-weight: 300;
      color:  #5B6272;
      // line-height: 26px;
      margin-bottom: 10px;
      display: block;
    }
    p {
      font-size: 16px;
      text-indent: 2em;
      line-height: 32px;
      margin: 0;
      margin-bottom: 15px;
    }
  }
}
// md
@media only screen and (min-width: 768px) {
  .banner {
    background-image: url('https://assets.aiyaopai.com/3.0/home/headbg.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 135px;
    overflow: hidden;
  }
  .artical {
    width: 100%;
    height: auto;
    margin: 40px auto 0;
    img {
      padding:0 80px;
      width: 100%;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1024px;
      padding:0 60px;
    span {
      font-size: 24px;
      font-weight: 400;
      color:  #5B6272;
      margin-bottom: 10px;
      display: block;
    }
    p {
      font-size: 16px;
      text-indent: 2em;
      line-height: 32px;
      margin: 0;
      margin-bottom: 15px;
    }
  }
}
// lg
@media only screen and (min-width: 992px) {
  .banner {
    background-image: url('https://assets.aiyaopai.com/3.0/home/headbg.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 180px;
    overflow: hidden;
  }
  .artical {
    width: 100%;
    height: auto;
    margin: 40px auto 0;
    text-align: center;
    img {
      width: 744px;
    // height: 496px;
    // // width: 100%;
    // height: 100%;
    }
  }
}
// xl
@media only screen and (min-width: 1200px) {
  .banner {
    background-image: url('https://assets.aiyaopai.com/3.0/home/headbg.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 280px;
    overflow: hidden;
  }
  .artical {
    width: 100%;
    height: auto;
    margin: 40px auto 0;
    text-align: center;
    img {
      width: 744px;
    // height: 496px;
    // // width: 100%;
    // height: 100%;
    }
  }
}
</style>
