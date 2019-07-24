<template>
  <div class="demo">
    <Header></Header>
    <div class="banner">
    </div>
    <div class="content">
      <span>以下项目为客户真实案例，仅供参考</span>
    </div>
    <div class="item">
      <Row>
        <div class="item-demo" v-for="item of itemList" :key="item.id">
          <Col :xs="{span: 20, offset: 2}" :md="{span: 16, offset: 4}" :lg="{span: 20, offset: 2}" :xl="{span:22,offset:1}">
            <div class="picture">
                <div class="img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="mask">
                  <router-link :to="'/detail/' + item.id" class="mask-link">
                    <div class="mask-circle"></div>
                    <span class="iconfont">&#xe615;</span>
                  </router-link>
                </div>
              </div>
              <div class="item-content">
                <h3 class="item-text">{{ item.demoName }}</h3>
                <p class="item-desc">{{ item.demoDesc }}</p>
              </div>
          </Col>
        </div>
      </Row>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../home/Header'
import imgUrl from '../../assets/images/demoPic.png'
import Footer from '../home/Footer'

export default {
  name: 'Demo',
  data () {
    return {
      itemList: [
        {
          id: '1001',
          imgUrl: imgUrl,
          demoName: '与之一战',
          demoDesc: '项目工程：市政府园林'
        },
        {
          id: '1002',
          imgUrl: imgUrl,
          demoName: '与之一战',
          demoDesc: '项目工程：市政府园林'
        },
        {
          id: '1003',
          imgUrl: imgUrl,
          demoName: '与之一战',
          demoDesc: '项目工程：市政府园林'
        },
        {
          id: '1004',
          imgUrl: imgUrl,
          demoName: '与之一战',
          demoDesc: '项目工程：市政府园林'
        }
      ]
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less" scoped>
// xs
@media only screen and (max-width: 600px) {
  .banner {
    width: 100%;
    background: url('../../assets/images/demo.png') no-repeat;
    background-size: 100% 100%;
    height: 100px;
  }
  // 标题
  .content {
    height: 60px;
    padding: 20px 30px 0 50px;
    span {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      position: absolute;
      right: 30px;
    }
  }
  // 案例展示
  .item {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 0 0;
    .item-demo {
      width:100%;
      height: 441px;
      float: left;
      .picture {
        width: 100%;
        height: 314px;
        margin: 0 auto;
        box-shadow:rgba(0,0,0,.12) 0 -1px 10px;
        overflow: hidden;
        .img {
          width: 100%;
          height: 314px;
          overflow: hidden;
        }
        .mask{
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 314px;
          top: 0;
          background: #000;
          transition: transform .3s;
          transform: translateZ(0);
          opacity: 0;
          .mask-link {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            margin: 100px auto;
            cursor: pointer;
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -32px;
            margin-top: -32px;
            .mask-circle {
              position: absolute;
              left: 0;
              top: 0;
              width: 64px;
              height: 64px;
              z-index: 0;
              background: #fff;
              opacity: .4;
            }
            .iconfont {
              display: block;
              position: absolute;
              left: 50%;
              top: 50%;
              z-index: 1;
              height: 28px;
              width: 28px;
              line-height: 28px;
              margin-left: -14px;
              margin-top: -12px;
              font-size: 28px;
              color: #fff;
            }
          }
        }
      }
      .mask:hover {
        transform: scale(1.02,1.02) translateZ(0);
        opacity: .6;
      }
      .item-content {
        width: 100%;
        .item-text {
          width: 100%;
          font-size: 16px;
          text-align: center;
          padding-top: 40px;
          line-height: 1;
        }
        .item-desc {
          width: 100%;
          padding-top: 18px;
          font-size: 13px;
          margin: 0;
          padding-bottom: 20px;
          text-align: center;
          color: #b1b1b1;
          line-height: 1;
        }
      }
    }
  }
}
// md ==> pad
@media only screen and (min-width: 768px) {
  .banner {
    background: url('../../assets/images/demo.png') no-repeat;
    background-size: 100% auto;
    height: 150px;
  }
  .content {
    height: 66px;
    padding: 34px 55px 0 55px;
    span {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      display: block;
      position: absolute;
      right: 55px;
    }
  }
  .item {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 0 0;
    .item-demo {
      width:100%;
      height: 441px;
      float: left;
      .picture {
        width: 100%;
        height: 314px;
        margin: 0 auto;
        box-shadow:rgba(0,0,0,.12) 0 -1px 10px;
        overflow: hidden;
        .img {
          width: 100%;
          height: 314px;
          overflow: hidden;
        }
        .mask{
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 314px;
          top: 0;
          background: #000;
          transition: transform .3s;
          transform: translateZ(0);
          opacity: 0;
          .mask-link {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            margin: 100px auto;
            cursor: pointer;
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -32px;
            margin-top: -32px;
            .mask-circle {
              position: absolute;
              left: 0;
              top: 0;
              width: 64px;
              height: 64px;
              z-index: 0;
              background: #fff;
              opacity: .4;
            }
            .iconfont {
              display: block;
              position: absolute;
              left: 50%;
              top: 50%;
              z-index: 1;
              height: 28px;
              width: 28px;
              line-height: 28px;
              margin-left: -14px;
              margin-top: -12px;
              font-size: 28px;
              color: #fff;
            }
          }
        }
      }
      .mask:hover {
        transform: scale(1.02,1.02) translateZ(0);
        opacity: .6;
      }
      .item-content {
        width: 100%;
        .item-text {
          width: 100%;
          font-size: 16px;
          text-align: center;
          padding-top: 40px;
          line-height: 1;
        }
        .item-desc {
          width: 100%;
          padding-top: 18px;
          font-size: 13px;
          margin: 0;
          padding-bottom: 20px;
          text-align: center;
          color: #b1b1b1;
          line-height: 1;
        }
      }
    }
  }
}
// lg ==> pad pro
@media only screen and (min-width: 992px) {
  .banner {
    background: url('../../assets/images/demo.png') no-repeat;
    background-size: 100% auto;
    height: 200px;
  }
  .content {
    height: 66px;
    padding: 34px 55px 0 55px;
    span {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      display: block;
      position: absolute;
      right: 55px;
    }
  }
  .item {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 0 0;
    .item-demo {
      width: 50%;
      height: 441px;
      .picture {
        width: 100%;
        height: 314px;
        margin: 0 auto;
        box-shadow:rgba(0,0,0,.12) 0 -1px 10px;
        overflow: hidden;
        .img {
          width: 100%;
          height: 314px;
          overflow: hidden;
        }
      }
      .item-content {
        width: 100%;
        .item-text {
          width: 100%;
          font-size: 16px;
          text-align: center;
          padding-top: 40px;
          line-height: 1;
        }
        .item-desc {
          width: 100%;
          padding-top: 18px;
          font-size: 13px;
          margin: 0;
          padding-bottom: 20px;
          text-align: center;
          color: #b1b1b1;
          line-height: 1;
        }
      }
    }
  }
}
// xl
@media only screen and (min-width: 1200px) {
  .banner {
    background: url('../../assets/images/demo.png') no-repeat;
    background-size: 100% auto;
    height: 280px;
  }
  .content {
    height: 66px;
    padding: 34px 55px 0 55px;
    span {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      display: block;
      position: absolute;
      right: 55px;
    }
  }
  .item {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 0 0;
    .item-demo {
      width: 50%;
      height: 441px;
      .picture {
        width: 518px;
        height: 314px;
        // margin: 0 auto;
        box-shadow:rgba(0,0,0,.12) 0 -1px 10px;
        // overflow: hidden;
        .img {
          width: 100%;
          height: 314px;
          overflow: hidden;
        }
        .mask{
          position: absolute;
          z-index: 1;
          width: 518px;
          height: 314px;
          top: 0;
          background: #000;
          transition: transform .3s;
          transform: translateZ(0);
          opacity: 0;
          .mask-link {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            margin: 100px auto;
            cursor: pointer;
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -32px;
            margin-top: -32px;
            .mask-circle {
              position: absolute;
              left: 0;
              top: 0;
              width: 64px;
              height: 64px;
              z-index: 0;
              background: #fff;
              opacity: .4;
            }
            .iconfont {
              display: block;
              position: absolute;
              left: 50%;
              top: 50%;
              z-index: 1;
              height: 28px;
              width: 28px;
              line-height: 28px;
              margin-left: -14px;
              margin-top: -12px;
              font-size: 28px;
              color: #fff;
            }
          }
        }
      }
       .mask:hover {
        transform: scale(1.02,1.02) translateZ(0);
        opacity: .6;
      }
      .item-content {
        width: 100%;
        .item-text {
          width: 100%;
          font-size: 16px;
          text-align: center;
          padding-top: 40px;
          line-height: 1;
        }
        .item-desc {
          width: 100%;
          padding-top: 18px;
          font-size: 13px;
          margin: 0;
          padding-bottom: 20px;
          text-align: center;
          color: #b1b1b1;
          line-height: 1;
        }
      }
    }
  }
}
</style>
