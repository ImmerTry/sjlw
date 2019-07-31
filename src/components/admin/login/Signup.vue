<template>
    <div class="content">
      <Modal
        v-model="handlerModal"
        :closable="handlerClosable"
        :mask-closable="false"
        class-name="vertical-center-modal"
        @on-cancel="cancel"
       >
        <div class="header-modal">
          <h1>创建你的账号</h1>
        </div>
        <div class="context">
            <Form ref="formInline" :model="formInline" :rules="ruleInline" class="form">
              <FormItem prop="nickName">
                  <Input type="text" v-model="formInline.nickName" placeholder="昵称">
                   <Icon type="ios-person-outline" slot="prepend"/>
                  </Input>
              </FormItem>
              <FormItem prop="userName">
                  <Input type="text" v-model="formInline.userName" placeholder="登录名">
                    <Icon type="ios-contact-outline" slot="prepend"/>
                  </Input>
              </FormItem>
              <FormItem prop="password">
                  <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"/>
                  </Input>
              </FormItem>
          </Form>
        </div>
        <div class="footer">
          <Button shape="circle" type="primary">下一步</Button>
        </div>
        <div slot="footer"></div>
      </Modal>
      <div v-show="flag" class="context">
        <div class="header">
          <h1>创建你的账号</h1>
        </div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="nickName">
              <Input type="text" v-model="formInline.nickName" placeholder="昵称">
                  <Icon type="ios-person-outline" slot="prepend"/>
              </Input>
          </FormItem>
          <FormItem prop="userName">
              <Input type="text" v-model="formInline.userName" placeholder="登录名">
                <Icon type="ios-contact-outline" slot="prepend"/>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"/>
              </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" shape="circle" long @click="handleSubmit('formInline')">注册</Button>
          </FormItem>
      </Form>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Signup',
  props: ['showHandlerFlag', 'handlerClosable'],
  data () {
    return {
      flag: this.$route.query.flag,
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
      // console.log('子组件监听： handlerModal ---' + val)
    },
    showHandlerFlag (val) {
      this.handlerModal = val
    }
  },
  created () {
    // console.log('router-link传过来值 --' + this.$route.query.flag)
  }
}
</script>
<style lang="less" scoped>
// xs
@media only screen and (max-width: 600px) {
  .content {
    width: 100%;
    height: 100vh;
    .context {
      width: 50%;
      margin: 0 auto;
      margin-top: 80px;
      .header {
        margin: 10px 0;
      }
    }
  }
}
// md
@media only screen and (min-width: 768px) {
  .content {
    width: 100%;
    height: 100vh;
    .context {
      width: 50%;
      margin: 0 auto;
      margin-top: 80px;
      .header {
        margin: 10px 0;
      }
    }
  }
}
.header-modal {
  width: 50%;
  display: block;
  margin: 0 auto;
  padding: 10px 0;
}
.footer {
  text-align: right;
}
.form {
  width: 50%;
  margin: 0 auto;
  // border:1px solid red;
}
</style>
