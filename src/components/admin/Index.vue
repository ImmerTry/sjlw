<template>
    <div class="layout">
       <Layout>
        <Sider
            class="layout-sider"
            ref="side"
            hide-trigger
            collapsible
            :collapsed-width="78"
            v-model="isCollapsed">
                <div class="logo">
                    <span>Logo</span>
                </div>
                <Menu :active-name="activeName" :theme="theme" width="auto" :class="menuitemClasses">
                    <MenuItem name="home" to='/index'>
                        <Icon type="ios-home-outline"/>
                        <span>首页</span>
                    </MenuItem>
                    <MenuItem name="issue" to='/article'>
                        <Icon type="ios-create-outline"/>
                        <span>发布文章</span>
                    </MenuItem>
                    <MenuItem name="articleManage" to='/articleManage'>
                        <Icon type="ios-list-box-outline"/>
                        <span>文章管理</span>
                    </MenuItem>
                    <MenuItem name="commentManage" to='/comment'>
                        <Icon type="ios-paper-outline"/>
                        <span>评论管理</span>
                    </MenuItem>
                    <MenuItem name="messageManage" to='/message'>
                        <Icon type="ios-chatboxes-outline"/>
                        <span>留言管理</span>
                    </MenuItem>
                    <MenuItem name="label" to='/label'>
                        <Icon type="ios-pricetag-outline"/>
                        <span>分类/标签</span>
                    </MenuItem>
                    <MenuItem name="info" to='info'>
                        <Icon type="ios-person-outline"/>
                        <span>个人信息</span>
                    </MenuItem>
                    <MenuItem name="setup" to='/setup'>
                        <Icon type="ios-settings-outline"/>
                        <span>系统设置</span>
                    </MenuItem>
                </Menu>
            </Sider>
        <Layout>
            <Header class="layout-header-bar">
                <div class="layout-header-left">
                    <div class="layout-header-icon">
                        <Icon @click.native="collapsedSider" :class="rotateIcon"  type="md-menu"></Icon>
                    </div>
                    <div class="layout-header-breadcrumb">
                        <Breadcrumb>
                            <BreadcrumbItem to="/">
                                <Icon type="ios-home-outline"></Icon> Home
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
            <Content class="main-content-con">
                <Layout class="main-layout-con">
                    <div class="tag-nav-wrapper">
                        <TagsNav :value="value"></TagsNav>
                    </div>
                    <Content class="content-wrapper">
                        <router-view/>
                    </Content>
                </Layout>
            </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import TagsNav from './tags/tags-nav'
import Home from './home/Home'
import Side from './side/Menu'

export default {
  data () {
    return {
      isCollapsed: false,
      visible: false,
      theme: 'dark',
      activeName: ''
    }
  },
  components: {
    TagsNav,
    Home
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
      this.$refs.side.toggleCollapse()
    }
  }
}
</script>
<style lang="less" scoped>
    .layout{
        width: 100%;
        height: 100%;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
    .layout-sider {
        height: 100vh;
        overflow: auto;
        left:0;
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
        height: 64px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        padding:0 20px;
        z-index: 10;
    }
    .layout-header-left {
        position: absolute;
    }
    .layout-header-icon {
        width: 24px;
        height: 64px;
        line-height: 64px;
        float: left;
        display: block;
        font-size: 24px;
    }
    .layout-header-breadcrumb {
        margin-left: 30px;
        float: left;
    }
    .layout-header-right {
        position: absolute;
        right: 0;
        top: 0;
        height: 64px;
        padding: 0 20px;
        position: absolute;
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
    .tag-nav-wrapper {
        width: 100%;
        height: 40px;
        z-index: 9;
    }
    .main-content-con{
        height: calc(~"100vh - 64px");
        overflow: hidden;
    }
    .tag-nav-wrapper{
        padding: 0;
        height:40px;
        background:#F0F0F0;
    }
    .content-wrapper{
        padding: 18px;
        height: calc(~"100vh -  104px");
        overflow: auto;
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
