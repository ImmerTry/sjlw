<template>
    <div class="login">
        <Row>
            <Col span="12">
                <div class="left">
                    <div class="text">
                        <div class="item">
                            <span class="iconfont">&#xe649;</span>
                            Say Something
                        </div>
                        <div class="item">
                            <span class="iconfont">&#xe615;</span>
                            Say Something
                        </div>
                        <div class="item">
                            <span class="iconfont">&#xe61c;</span>
                            Say Something
                        </div>
                    </div>
                </div>
            </Col>
            <Col span="12">
                <div class="right">
                    <div class="LoginHeader">
                        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                            <FormItem prop="userName">
                                <Input type="text" v-model="formInline.userName" placeholder="用户名">
                                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                            <FormItem prop="password">
                                <Input type="password" v-model="formInline.password" placeholder="密码">
                                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" ghost shape="circle" @click="handleSubmit('formInline')">登录</Button>
                            </FormItem>
                        </Form>
                    </div>
                    <div class="content">
                        <div class="logo">
                            <span class="Icon"></span>
                        </div>
                        <h1 class="tips">后台登录</h1>
                        <Button class="register" type="primary" shape="circle" long>注册</Button>
                        <br><br>
                        <Button class="LoginBtn" type="primary" ghost shape="circle" long>登录</Button>
                </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      formInline: {
        userName: '',
        password: ''
      },
      ruleInline: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码至少六位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        const data = this.$refs[name].model
        if (valid) {
          console.log(data)
        } else {
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
    .login {
        width: 100%;
        height: 100%;
    }
    .left {
        width: 100%;
        height: 100%;
        background: #1da1f2;
        .text {
            width: 231px;
            height: 100%;
            margin: 0 auto;
            color: #ffff;
            .item {
                display: block;
                font-weight: bold;
                line-height: 24px;
                padding: 20px 0;
            }
        }
    }
    .right {
        width: 100%;
        // height: 789px;
        margin: 0 auto;
        padding-top: 20px;
        .LoginHeader {
            width: 472px;
            margin: 0 auto;
            padding: 0 20px;
        }
        .content {
            max-width: 350px;
            width: 243px;
            height: 100%;
            // margin: 0 auto;
            position: relative;
            // border: 1px solid red;
            left: 25%;
            top: 50%;
            .tips {
                width: 100%;
                margin: 48px 0  16px 0;
            }
            .register {
                padding: 6px 16px;
            }
            .LoginBtn {
                padding: 6px 16px;
            }
        }
    }
</style>
