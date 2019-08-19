<template>
    <div>
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
                <Menu 
                :active-name="activeName"
                :theme="theme"
                width="auto"
                @on-select="handleSelect"
                :class="menuitemClasses">
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
    </div>
</template>
<script>
export default {
    name: 'menu',
    data () {
        return {
            isCollapsed: false,
            theme: 'dark',
            activeName: ''
        }
    },
    computed: {
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    methods: {
        handleSelect(name) {
        // this.$emit('on-select', name)
        console.log(name, "handlSelect()")
        // this.activeName = name
        }
    },
    watch: {
        activeName(name) {
            console.log(name)
        }
    }
}
</script>
<style lang="less" scoped>
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
</style>