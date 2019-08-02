<template>
  <div class="tags-nav">
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
    <ul :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">
      <!-- <li>首页</li>
      <li>图片管理</li> -->
    </ul>
    <div class="btn-con left-btn">
      <Button type="text" @click="handleScroll(240)">
        <Icon :size="18" type="ios-arrow-back" />
      </Button>
    </div>
    <div class="btn-con right-btn">
      <Button type="text" @click="handleScroll(-240)">
        <Icon :size="18" type="ios-arrow-forward" />
      </Button>
    </div>
    <div class="scroll-outer">
      <div class="scroll-body">
        <Tag type="dot">首页</Tag>
         <Tag color="primary" type="dot" closable>图片管理</Tag>
      </div>
    </div>
    <!-- <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="首页" v-if="tab0">
        </TabPane>
        <TabPane label="图片管理" v-if="tab1">
        </TabPane>
        <TabPane label="系统设置" v-if="tab2">
        </TabPane>
    </Tabs> -->
  </div>
</template>
<script>
export default {
  name: 'TagsNav',
  data () {
    return {
      contextMenuLeft: 0,
      contextMenuTop: 0,
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
    },
    handlescroll (e) {
      var type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta)
    },
    handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.tags-nav{
  position: relative;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  height: 100%;
  .close-con{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 32px;
    background: #fff;
    text-align: center;
    z-index: 10;
  }
  .btn-con{
    position: absolute;
    top: 0px;
    height: 100%;
    background: #fff;
    padding-top: 3px;
    z-index: 10;
    button{
      padding: 6px 4px;
      line-height: 14px;
      text-align: center;
      // border:1px solid red;
    }
    &.left-btn{
      left: 0px;
    }
    &.right-btn{
      right: 32px;
      border-right: 1px solid #F0F0F0;
    }
  }
  .scroll-outer{
    position: absolute;
    left: 28px;
    right: 61px;
    top: 0;
    bottom: 0;
    box-shadow: 0px 0 3px 2px rgba(100,100,100,.1) inset;
    .scroll-body{
      height: ~"calc(100% - 1px)";
      display: inline-block;
      padding: 1px 4px 0;
      position: absolute;
      overflow: visible;
      white-space: nowrap;
      transition: left .3s ease;
      .ivu-tag-dot-inner{
        transition: background .2s ease;
      }
    }
  }
  .contextmenu {
    position: absolute;
    margin: 0;
    padding: 5px 0;
    background: #fff;
    z-index: 100;
    list-style-type: none;
    border-radius: 4px;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 5px 15px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
