<template>
  <div class="header">
    <Row>
      <Col span="10">
        <div class="header-left">
          <span>Logo</span>
          <div class="slider">
            <Dropdown trigger="click" style="margin-left: 20px">
              <a href="javascript:void(0)">
                <Icon type="md-menu"/>
              </a>
            <DropdownMenu slot="list">
                <DropdownItem>新闻动态</DropdownItem>
                <DropdownItem>案例展示</DropdownItem>
                <DropdownItem>关于我们</DropdownItem>
                <DropdownItem>联系我们</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          </div>
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
  name: 'Header',
  data () {
    return {
      value: false
    }
  }
}
</script>

<style scoped lang="less">
.ivu-menu-horizontal.ivu-menu-light:after {
  background-color: transparent;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .header {
      // background: red;
      .header-left {
        width: 100%;
        height: 60px;
        span {
          float: left;
          font-size: 26px;
          height: 60px;
          line-height: 60px;
        }
        .slider {
          font-size: 26px;
          height: 60px;
          line-height: 60px;
          float: right;
          a {
          }
        }
      }
      .header-right {
        display: none;
        overflow: hidden;
      }
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .header {
      background: green;
      .header-left {
        width: 100%;
        .slider {
          display: none;
        }
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
        .slider {
          display: none;
        }
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
        .slider {
          display: none;
        }
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
        .slider {
          display: none;
        }
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
