<template>
    <div class="login">
        <Row>
            <Col :xs="24" :md="24" :lg="12" :xl="12">
                <Row>
                    <Col :xs="24" :md="{span: 12,offset:6}" :lg="0" :xl="0">
                        <div class="content">
                            <div class="form">
                                <div class="logo">
                                    <span class="Icon"></span>
                                </div>
                                <h1 class="tips">后台登录</h1>
                                <Button class="register" type="primary" shape="circle" long @click="showSignup()">注册</Button>
                                <br><br>
                                <Button class="LoginBtn" type="primary" ghost shape="circle" long to='/signin'>登录</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col :lg="24" :xl="24">
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
                </Row>
            </Col>
            <Col :xs="24" :md="24" :lg="{span:11,offset:1}" :xl="{span:9,offset:3}">
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
                </div>
            </Col>
            <!-- 手机、pad -->
            <Col :xs="24" :md="24" :lg="0" :xl="0">
                <Row>
                    <div class="btn-group">
                        <Col :xs="{span:10,offset:1}" :md="{span:6,offset:6}" :lg="12" :xl="12" >
                            <Button type="primary" shape="circle"  @click="showSignup">注册</Button>
                        </Col>
                        <Col :xs="{span:10,offset:2}" :md="{span:6,offset:1}" :lg="12" :xl="12">
                            <Button type="primary" ghost shape="circle" to='/signin'>登录</Button>
                        </Col>
                    </div>
                </Row>
            </Col>
            <Col :xs="0" :md="0" :lg="{span:8,offset:2}" :xl="{span:5,offset:3}">
                <div class="content">
                    <div class="form">
                        <div class="logo">
                            <span class="Icon"></span>
                        </div>
                        <h1 class="tips">后台登录</h1>
                        <Button class="register" type="primary" shape="circle" long  @click="showSignup()">注册</Button>
                        <br><br>
                        <Button class="LoginBtn" type="primary" ghost shape="circle" long to='/signin'>登录</Button>
                    </div>
                </div>
            </Col>
            <Signup :showHandlerFlag="showHandlerFlag" :handlerClosable="flag" @updateModalStatus="updateModalStatus"></Signup>
        </Row>
        <!-- <Row>
            <Col>
                <div class="footer">
                    © 2019 ImmerTry, personal.
                </div>
            </Col>
        </Row> -->
    </div>
</template>
<script>
import axios from 'axios'
import Signup from './Signup'
export default {
  name: 'Login',
  data () {
    return {
      flag: true,
      showHandlerFlag: false,
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
  components: {
    Signup
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        const data = this.$refs[name].model
        if (valid) {
          axios.post('/user/login', {
            userName: data.userName,
            password: data.password
          }).then(response => {
            const data = response.data
            if (data.code === 200) {
              this.$Message.success('登录成功')
            }
          })
        } else {
        }
      })
    },
    showSignup () {
      this.showHandlerFlag = !this.showHandlerFlag
    },
    updateModalStatus (modalStatus) {
      console.log('父组件：' + modalStatus)
      this.showHandlerFlag = modalStatus
    }
  },
  created () {
    //   this.showSignup();
    // console.log('父组件 mounted --' + this.showHandlerFlag)
  }
}
</script>
<style lang="less" scoped>
// xs
@media only screen and (max-width: 600px) {
    .content {
        width: 100%;
        height: 100%;
        padding: 14px;
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
    .left {
        width: 100%;
        height: 100%;
        background: #1da1f2;
        .text {
            width: 220px;
            height: 100%;
            color: #ffff;
            padding: 14px 0;
            margin: 0 auto;
            .item {
                width: 100%;
                display: block;
                text-align: center;
                font-size: 18px;
                padding: 14px 0;
                margin-bottom: 40px;
                .iconfont {
                    font-size: 21px;
                }
            }
        }
    }
    .right {
        width: 100%;
        // height: 789px;
        margin: 0 auto;
        padding-top: 20px;
        .LoginHeader {
            display: none;
        }
    }
    .btn-group {
        width: 100%;
        height: 100
        px;
        padding: 39px 15px 30px 15px;
        text-align: center;
        Button {
            width: 100%;
            // margin-right: 15px;
        }
    }
}
// md
@media only screen and (min-width: 768px) {
    .content {
        width: 100%;
        height: 100%;
        padding: 14px;
        .form {
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
    .left {
        width: 100%;
        height: 100%;
        background: #1da1f2;
        .text {
            width: 220px;
            color: #ffff;
            padding: 14px 0;
            margin: 0 auto;
            .item {
                width: 100%;
                display: block;
                text-align: center;
                font-size: 18px;
                padding: 14px 0;
                margin-bottom: 40px;
                .iconfont {
                    font-size: 21px;
                }
            }
        }
    }
    .right {
        width: 100%;
        margin: 0 auto;
        padding-top: 20px;
        .LoginHeader {
            display: none;
        }
    }
    .btn-group {
        width: 100%;
        height: 100
        px;
        padding: 39px 15px 30px 15px;
        text-align: center;
        Button {
            width: 100%;
            // margin-right: 15px;
        }
    }
}
// lg
@media only screen and (min-width: 992px) {
    .content {
        width: 100%;
        height: 95vh;
        .form {
            position: relative;
            top: 45%; /*偏移*/
            transform: translateY(-50%);
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
    .left {
        width: 100%;
        height: 100vh;
        .text {
            color: #ffff;
            margin: 0 auto;
            position: relative;
            top: 50%; /*偏移*/
            transform: translateY(-50%);
            .item {
                width: 100%;
                display: block;
                text-align: center;
                font-size: 18px;
                padding: 14px 0;
                margin-bottom: 40px;
                .iconfont {
                    font-size: 21px;
                }
            }
        }
    }
    .right {
        width: 100%;
        height: 5vh;
        padding-top: 20px;
        .LoginHeader {
            display: block;
        }
    }
    .btn-group {
        width: 100%;
        height: 100
        px;
        padding: 39px 15px 30px 15px;
        text-align: center;
        Button {
            width: 100%;
        }
    }

}
// xl
@media only screen and (min-width: 1200px) {
    .content {
        width: 100%;
        height: 95vh;
        padding: 14px;
        .form {
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
    .left {
        width: 100%;
        height: 100vh;
        background: #1da1f2;
        .text {
            color: #ffff;
            padding: 14px 0;
            margin: 0 auto;
            position: relative;
            top: 50%; /*偏移*/
            transform: translateY(-50%);
            .item {
                width: 100%;
                display: block;
                text-align: center;
                font-size: 18px;
                padding: 14px 0;
                margin-bottom: 40px;
                .iconfont {
                    font-size: 21px;
                }
            }
        }
    }
    .right {
        width: 100%;
        height: 5vh;
        padding-top: 20px;
        .LoginHeader {
            display: block;
        }
    }
    .btn-group {
        width: 100%;
        height: 100px;
        padding: 39px 15px 30px 15px;
        text-align: center;
        Button {
            width: 100%;
        }
    }
}
</style>
