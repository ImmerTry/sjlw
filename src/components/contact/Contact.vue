<template>
  <div class="contact">
    <Header></Header>
    <div class="banner">
    </div>
    <div class="content">
      <Row>
        <Col span="12">
          <div class="context">
            <h1>联系我们</h1>
            <p>优质建筑的精品，创新求实的精神，热情服务的承诺，良好诚实的信誉。安全管理制度化，安全制度标准化，作业行为规范化，环境影响小化。以人为本；不断创新。</p>
          </div>
          <div class="form">
            <h1>留下您的联系方式</h1>
            <Form ref="formValidate" class="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="姓氏" prop="name">
                  <Input v-model="formValidate.name" placeholder="姓氏"></Input>
              </FormItem>
              <FormItem label="邮箱" prop="mail">
                  <Input v-model="formValidate.mail" placeholder="邮箱"></Input>
              </FormItem>
              <FormItem label="称谓" prop="gender">
                  <RadioGroup v-model="formValidate.gender">
                      <Radio label="male">先生</Radio>
                      <Radio label="female">女士</Radio>
                  </RadioGroup>
              </FormItem>
              <FormItem label="内容" prop="desc">
                  <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="留下您的疑问，我们在收到后，将第一时间回复您"></Input>
              </FormItem>
              <FormItem>
                  <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                  <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
              </FormItem>
            </Form>
          </div>
        </Col>
        <Col span="12">
          <div class="wrapper">
            <Map></Map>
          </div>
          <div class="info">
            <Row>
              <Col span="8">
                <div class="icon">
                  <span class="iconfont">&#xe6a6;</span>
                  <div class="text">联系手机</div>
                  <div class="text">150xxxx0527</div>
                </div>
              </Col>
              <Col span="8">
                <div class="icon">
                  <span class="iconfont">&#xe7a4;</span>
                  <div class="text">公司地址</div>
                  <div class="text">江苏省南京市江宁区天琪科技大厦2栋201室</div>
                </div>
              </Col>
              <Col span="8">
                <div class="icon">
                  <span class="iconfont">&#xe64d;</span>
                  <div class="text">联系邮箱</div>
                  <div class="text">immertry@163.com</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import Header from '../home/Header'
import Map from './Map'

export default {
  name: 'Contact',
  components: {
    Header,
    Map
  },
  data () {
    return {
      formValidate: {
        name: '',
        mail: '',
        gender: '',
        desc: ''
      },
      // 表单验证
      ruleValidate: {
        name: [
          { required: true, message: '姓氏不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择称谓', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '描述内容不能为空', trigger: 'blur' },
          { type: 'string', min: 20, message: '内容最少为20个字符', trigger: 'blur' }
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
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
  .banner {
    background-repeat: no-repeat;
    background-size: 100% auto, auto;
    height: 0;
    padding-bottom: 31%;
    overflow: hidden;
    background-image: url('https://assets.aiyaopai.com/3.0/home/head.png');
  }
  .content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    // border: 1px solid red;
    .context h1 {
      width: 500px;
      padding-left: 80px;
      margin-top: 40px;
      font-size: 22px;
      color: #1A2B4A;
    }
    .context p {
      width: 600px;
      padding-left: 80px;
      margin-top: 30px;
      font-size: 14px;
      color: #666666;
      text-align: center
    }
    .form {
      width: 500px;
      h1 {
        padding-left: 80px;
        margin-top: 40px;
        font-size: 22px;
        color: #1A2B4A;
      }
      .formValidate {
        margin-top: 30px;
        padding-left: 45px;
      }
    }
    .wrapper {
      margin-top: 60px;
      width: 90%;
      height: 300px;
    }
    .info {
      width: 90%;
      margin-top: 40px;
      // border:1px solid red;
      .icon {
        // border: 1px solid yellowgreen;
        // width: 200px;
        margin: 0 auto;
        span {
          display: block;
          font-size: 30px;
          text-align: center
        }
        .text {
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }

</style>
