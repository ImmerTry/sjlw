<template>
  <div class="header">
    <Row>
      <Col span="10">
        <div class="header-left">
          This is Logo
        </div>
      </Col>
      <Col span="14">
        <div class="header-right">
          <Menu mode="horizontal">
            <MenuItem name="1" to="/">
              首页
            </MenuItem>
            <MenuItem name="2" to="/news">
              新闻动态
            </MenuItem>
            <MenuItem name="3" to="/demo">
              案例展示
            </MenuItem>
            <MenuItem name="4" to="/about">
              关于我们
            </MenuItem>
            <MenuItem name="5" to="/contact">
              联系我们
            </MenuItem>
          </Menu>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="less">
.ivu-menu-horizontal.ivu-menu-light:after {
  background-color: transparent;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .header {
      background: red;
      .header-left {
        width: 100%;
        height: 60px;
        text-align: center;
      }
      .header-right {
        display: none;
      }
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .header {
      background: green;
      .header-left {
        width: 100%;
      }
      .header-right {
        width: 100%;
        height: 60px;
        ul {
          li {
            margin: 0 10px;
            font-size: 14px;
          }
        }
      }
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .header {
      background: yellowgreen;
      .header-left {
        width: 100%;
        height: 60px;
        padding: 10px 10px;
      }
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .header {
      background: orange;
      .header-left {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
      .header-right {
        width: 100%;
        height: 60px;
        ul {
          li {
            padding: 0 35px;
          }
        }
      }
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .header {
      background: pink;
      .header-left {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
      .header-right {
        width: 100%;
        height: 60px;
        ul {
          padding: 0  0 0 100;
          li {
            padding: 0 40px;
          }
        }
      }
    }
}
</style>
