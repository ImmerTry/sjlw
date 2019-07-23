<template>
  <div class="header">
    <Row>
      <Col :xs="24" :md="9" :lg="12" :xl="16">
        <div class="header-left">
          <router-link to="/">
            <span>Logo</span>
          </router-link>
          <div class="slider">
            <Dropdown trigger="click" placement="left-start" @on-click="changeUrl">
              <a href="javascript:void(0)">
                <Icon type="md-menu"/>
              </a>
            <DropdownMenu slot="list">
              <router-link to="/news">
                <DropdownItem name="news" :selected="selected">新闻动态</DropdownItem>
              </router-link>
              <router-link to="/demo">
                <DropdownItem name="demo" :selected="selected">案例展示</DropdownItem>
              </router-link>
              <router-link to="/about">
                <DropdownItem name="about" :selected="selected">关于我们</DropdownItem>
              </router-link>
              <router-link to="/contact">
                <DropdownItem name="contact" :selected="selected">联系我们</DropdownItem>
              </router-link>
            </DropdownMenu>
          </Dropdown>
          </div>
        </div>
      </Col>
      <Col :xs="0" :md="15" :lg="12" :xl="8">
        <div class="header-right">
          <Menu mode="horizontal">
            <MenuItem name="index" to="/">
              首页
            </MenuItem>
            <MenuItem name="news" to="/news">
              新闻动态
            </MenuItem>
            <MenuItem name="demo" to="/demo">
              案例展示
            </MenuItem>
            <MenuItem name="about" to="/about">
              关于我们
            </MenuItem>
            <MenuItem name="contact" to="/contact">
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
      selected: false
    }
  },
  methods: {
    changeUrl (name) {
      if (name === 'news') {
        this.selected = true
      }
    }
  },
  mounted () {
    this.changeUrl()
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
          display: block;
        }
        .slider {
          font-size: 26px;
          width: 60px;
          height: 60px;
          line-height: 60px;
          float: right;
          a {
            color: black;
          }
        }
      }
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .header {
      background: red;
      .header-left {
        width: 100%;
        height: 60px;
        span {
          line-height: 60px;
          font-size: 26px;
          width: 100%;
          text-align: center;
          display: block;
        }
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
