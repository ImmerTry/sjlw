<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <div class="logo">
                    <span>Logo</span>
                </div>
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>图片</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span>管理</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-settings"></Icon>
                        <span>设置</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <div class="layout-header-left">
                        <div class="layout-header-icon">
                            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                        </div>
                        <div class="layout-header-breadcrumb">
                            <Breadcrumb>
                                <BreadcrumbItem to="/">
                                    <Icon type="ios-home-outline"></Icon> Home
                                </BreadcrumbItem>
                                <BreadcrumbItem to="/components/breadcrumb">
                                    <Icon type="logo-buffer"></Icon> Components
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Icon type="ios-cafe"></Icon> Breadcrumb
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div class="layout-header-right">
                        <div class="layout-header-dropdown">
                            <Dropdown>
                                <a href="javascript:void(0)">
                                    <Icon type="md-arrow-dropdown" />
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>个人中心</DropdownItem>
                                    <DropdownItem>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div class="layout-header-avatar">
                            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                        </div>
                    </div>
                </Header>
                <TagsNav :value="value"></TagsNav>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '100vh'}">
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import TagsNav from './tags/tags-nav'

export default {
  data () {
    return {
      isCollapsed: false,
      visible: false,
      value: 'aa'
    }
  },
  components: {
    TagsNav
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>
<style lang="less" scoped>
    .layout{
        width: 100%;
        height: 100vh;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
    .logo {
        width: 100%;
        height: 64px;
        font-size: 24px;
        color: #ffffff;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .layout-header-bar{
        width: 100%;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-header-left {
        width: 80%;
        height: 64px;
        float: left;
    }
    .layout-header-icon {
        width: 40px;
        height: 40px;
        line-height: 64px;
        float: left;
        display: block;
    }
    .layout-header-breadcrumb {
        width: 75%;
        float: left;
        margin-left: 30px;
    }
    .layout-header-right {
        width: 20%;
        height: 64px;
        float: right;
        padding: 0 20px;
        .layout-header-avatar {
           width: 40px;
           float: right;
           text-align: right;
        }
        .layout-header-dropdown {
            width: 20px;
            height: 64px;
            float: right;
            a {
                color: #000;
            }
        }
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
