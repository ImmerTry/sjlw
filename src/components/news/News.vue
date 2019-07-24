<template>
    <div class="news">
      <Header></Header>
      <div class="banner">
      </div>
      <div class="content">
        <div class="list">
          <ul>
            <router-link tag="li" :to="'/detail/' + item.id"  class="item border-bottom" v-for="item of recommendList" :key="item.id">
              <div class="img">
                <img class="item-img" :src="item.imgUrl">
              </div>
              <div class="item-info">
                <p class="item-title">
                  {{ item.title }}
                </p>
                <p class="item-desc">
                  {{ item.desc }}
                </p>
                <p class="item-time">
                  {{ item.time }}
                </p>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from '../home/Header'
import Footer from '../home/Footer'
import img from '../../assets/images/newsImg.png'

export default {
  name: 'News',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: img,
        title: '心之所向，即是远方',
        desc: '在Web页面初期制作中，我们都是使用“px”来设置我们的文本，因为他比较精确和固定。只要页面某元素设置了px字体大小，大小，大小，因为他比较精确和固定。只要页面某元素设置了px字体大小，大小，大小',
        time: '2019-07-06'
      }, {
        id: '0002',
        imgUrl: img,
        title: '只有想见的人，就不再是孤单一人',
        desc: '在Web页面初期制作中，我们都是使用“px”来设置我们的文本，因为他比较精确和固定。只要页面某元素设置了px字体大小，大小，大小，因为他比较精确和固定。只要页面某元素设置了px字体大小，大小，大小',
        time: '2019-07-06'
      }, {
        id: '0003',
        imgUrl: img,
        title: '其名为鲲，鲲之大',
        desc: '在Web页面初期制作中，我们都是使用“px”来设置我们的文本，因为他比较精确和固定。只要页面某元素设置了px字体大小，大小，大小，因为他比较精确和固定。只要页面某元素设置了px字体大小，大小，大小',
        time: '2019-07-06'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
// xs
@media only screen and (max-width: 600px) {
  .banner {
    background-image: url('../../assets/images/newstop.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 60px;
  }
  .content {
    width: 100%;
    height: 100%;
    padding-top: 2rem;
    // background: yellowgreen;
    .list {
      margin: 0 auto;
      width: 62.5rem;
      // height: 3rem;
      .item {
        display: flex;
        height: 10.625rem;
        overflow: hidden;
        transition: all .2s ease;
        // box-sizing: border-box;
        .img {
          width: 300px;
          height: 10.625rem;
          padding: .625rem 0 .625rem 0.625rem;
          .item-img {
            width: 100%;
            height: 100%;
            border-radius: .5rem;
          }
        }
        .item-info {
          flex: 1;
          padding: 1.1rem 0 0 1.5rem;
          min-width: 0;
          .item-title {
            line-height: 1.25rem;
            font-size: 1.25rem;
            color: #333333;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis; //显示省略符号来代表被修剪的文本。
          }
          .item-desc {
            margin-top: 1rem;
            line-height: 1.125rem;
            font-size: 1rem;
            color: #666666;
            overflow: hidden;
            // white-space: nowrap;
            text-overflow: ellipsis; //显示省略符号来代表被修剪的文本。
          }
          .item-time {
            margin-top: 1rem;
            line-height: 1rem;
            font-size: .875rem;
            padding: .2rem 0 0 36rem;
            color: #c2c2c2;
          }
        }
      }
      .item:hover {
        // box-shadow: 0 -1px 10px rgba(0,0,0,.5);
        box-shadow:rgba(0,0,0,.12) 0 -1px 10px;
        border-radius: 4px;
        // transform: scale(1);
        background: #ffffff;
        cursor:pointer;
        .item-title {
          color:#fe7600;
        }
      }
    }
  }
}
// md
@media only screen and (min-width: 768px) {
}
// lg
@media only screen and (min-width: 992px) {
}
// xl
@media only screen and (min-width: 1200px) {
}
// .content {
//     width: 100%;
//     height: 100%;
//     padding-top: 2rem;
//     // background: yellowgreen;
//     .list {
//       margin: 0 auto;
//       width: 62.5rem;
//       // height: 3rem;
//       .item {
//         display: flex;
//         height: 10.625rem;
//         overflow: hidden;
//         transition: all .2s ease;
//         // box-sizing: border-box;
//         .img {
//           width: 300px;
//           height: 10.625rem;
//           padding: .625rem 0 .625rem 0.625rem;
//           .item-img {
//             width: 100%;
//             height: 100%;
//             border-radius: .5rem;
//           }
//         }
//         .item-info {
//           flex: 1;
//           padding: 1.1rem 0 0 1.5rem;
//           min-width: 0;
//           .item-title {
//             line-height: 1.25rem;
//             font-size: 1.25rem;
//             color: #333333;
//             overflow: hidden;
//             white-space: nowrap;
//             text-overflow: ellipsis; //显示省略符号来代表被修剪的文本。
//           }
//           .item-desc {
//             margin-top: 1rem;
//             line-height: 1.125rem;
//             font-size: 1rem;
//             color: #666666;
//             overflow: hidden;
//             // white-space: nowrap;
//             text-overflow: ellipsis; //显示省略符号来代表被修剪的文本。
//           }
//           .item-time {
//             margin-top: 1rem;
//             line-height: 1rem;
//             font-size: .875rem;
//             padding: .2rem 0 0 36rem;
//             color: #c2c2c2;
//           }
//         }
//       }
//       .item:hover {
//         // box-shadow: 0 -1px 10px rgba(0,0,0,.5);
//         box-shadow:rgba(0,0,0,.12) 0 -1px 10px;
//         border-radius: 4px;
//         // transform: scale(1);
//         background: #ffffff;
//         cursor:pointer;
//         .item-title {
//           color:#fe7600;
//         }
//       }
//     }
//   }
</style>
