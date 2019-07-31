<template>
    <div class="content">
        <Row>
            <Col>
                <div class="login">
                    <div class="icon">
                        <h1>登录</h1>
                    </div>
                    <Form ref="formInline" class="form" :model="formInline" :rules="ruleInline">
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="用户名">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="密码">
                                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" shape="circle" @click="handleSubmit('formInline')">登录</Button>
                        </FormItem>
                    </Form>
                    <div class="footer">
                        <router-link to=''>忘记密码? </router-link>
                        <router-link to='/signup?flag=true'>还没有账号?注册</router-link>
                    </div><!-- :to="{path:'/signup',query: {flag: true}}" -->
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  name: 'Signin',
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
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
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  },
  created () {
    //   console.log('route :', this.$route)
  }
}
</script>
<style lang="less" scoped>
// xs
@media only screen and (max-width: 600px) {
  .content {
        width: 100%;
        height: 100vh;
        .login {
            width: 50%;
            margin: 0 auto;
            margin-top: 80px;
            .icon {
                width: 100%;
                text-align: center;
                margin: 10px 0;
            }
            .form {
                Button {
                    width: 100%;
                }
            }
            .footer {
                margin-top: 20px;
                font-size: 15px;
                text-align: center;
            }
        }
    }
}
// md
@media only screen and (min-width: 768px) {
  .content {
        width: 100%;
        height: 100vh;
        .login {
            width: 50%;
            margin: 0 auto;
            margin-top: 80px;
            .icon {
                width: 100%;
                text-align: center;
                margin: 10px 0;
            }
            .form {
                Button {
                    width: 100%;
                }
            }
            .footer {
                margin-top: 20px;
                font-size: 15px;
                text-align: center;
            }
        }
    }
}
// lg
@media only screen and (min-width: 992px) {
  .content {
        width: 100%;
        height: 100vh;
        .login {
            width: 50%;
            margin: 0 auto;
            margin-top: 80px;
            .icon {
                width: 100%;
                text-align: center;
                margin: 10px 0;
            }
            .form {
                Button {
                    width: 100%;
                }
            }
            .footer {
                margin-top: 20px;
                font-size: 15px;
                text-align: center;
            }
        }
    }
}
// xl
@media only screen and (min-width: 1200px) {
    .content {
        width: 100%;
        height: 100vh;
        .login {
            width: 600px;
            margin: 0 auto;
            margin-top: 80px;
            .icon {
                width: 100%;
                text-align: center;
                margin: 10px 0;
            }
            .form {
                Button {
                    width: 100%;
                }
            }
            .footer {
                margin-top: 20px;
                font-size: 15px;
                text-align: center;
            }
        }
    }
}
</style>
