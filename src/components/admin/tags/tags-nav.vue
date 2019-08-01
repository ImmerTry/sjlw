<template>
  <div class="content">
    <div class="close-con">
      <Dropdown transfer @on-click="handleTagsOption" style="margin-top:7px;">
        <Button size="small" type="text">
          <Icon :size="18" type="ios-close-circle-outline" />
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem name="close-all">关闭所有</DropdownItem>
          <DropdownItem name="close-others">关闭其他</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="首页" v-if="tab0">
        </TabPane>
        <TabPane label="图片管理" v-if="tab1">
        </TabPane>
        <TabPane label="系统设置" v-if="tab2">
        </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
  name: 'TagsNav',
  data () {
    return {
      tab0: true,
      tab1: true,
      tab2: true
    }
  },
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false
    },
    handleTagsOption () {
    }
  }
}
</script>
<style lang="less" scoped>

</style>
