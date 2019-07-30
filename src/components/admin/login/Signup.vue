<template>
    <div class="content">
      <Modal
        v-model="showHandlerFlag"
        :closable="handlerClosable"
        :mask-closable="false"
        class-name="vertical-center-modal"
        @on-cancel="cancel"
       >
        <div class="header">
          <h1>创建你的账号</h1>
        </div>
        <div class="context">
            <Form ref="formInline" :model="formInline" :rules="ruleInline" class="form">
              <FormItem prop="nickName" label="昵称" class="label">
                  <Input type="text" v-model="formInline.nickName" placeholder="昵称">
                  </Input>
              </FormItem>
              <FormItem prop="userName" label="登录名">
                  <Input type="text" v-model="formInline.userName" placeholder="登录名">
                  </Input>
              </FormItem>
              <FormItem prop="password" label="密码">
                  <Input type="password" v-model="formInline.password" placeholder="密码">
                  </Input>
              </FormItem>
          </Form>
        </div>
        <div class="footer">
          <Button shape="circle" type="primary">下一步</Button>
        </div>
        <div slot="footer"></div>
      </Modal>
    </div>
</template>
<script>
export default {
  name: 'Signup',
  props: ['showHandlerFlag', 'handlerClosable'],
  data () {
    return {
      handlerModal: this.showHandlerFlag,
      formInline: {
        nickName: '',
        userName: '',
        password: ''
      },
      ruleInline: {
        nickName: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '请输入登录名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度至少六位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    cancel () {
      this.$emit('updateModalStatus', false)
    }
  },
  watch: {
    'handlerModal': function (val) {
      console.log('子组件监听： handlerModal ---' + val)
    }
  },
  mounted () {
    console.log('子组件 mounted --' + this.handlerModal)
  }
}
</script>
<style lang="less" scoped>
// xs
@media only screen and (max-width: 600px) {
  .form {
    width: 100%;
    background:orange;
  }
}
.header {
  width: 100%;
  height: 32px;
}
.context {
  padding: 15px 0;
}
.footer {
  text-align: right;
}
.vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal{
        top: 0;
    }
}
</style>
