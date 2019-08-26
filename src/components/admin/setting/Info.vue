<template>
  <div>
      <Card shadow>
        <Row>
          <Col :xs="24" :md="24" :lg="24" :xl="{span:12}">
          <Card>
            <p slot="title">
              <Icon type="ios-film-outline"></Icon>
              基本资料
            </p>
            <Form ref="basicDataFrom" :model="basicDataForm" :rules="ruleValidate" :label-width="80">
              <FormItem label="登录名" prop="userName">
                <Input v-model="basicDataForm.userName" disabled style="width: 200px"/>
              </FormItem>
              <FormItem label='角色' prop="access">
                <Select
                  v-model="basicDataForm.access"
                  placeholder="角色类型"
                  disabled
                  style="width:200px">
                  <Option
                    v-for="item in accessList"
                    :key="item.key"
                    :value="item.key">
                    {{item.value}}
                  </Option>
                </Select>
              </FormItem>
              <FormItem label="昵称">
                <Input v-model="basicDataForm.nickName" disabled style="width: 200px"/>
              </FormItem>
              <Row>
                <Col :xs="24" :md="24" :lg="12" :xl="12">
                  <FormItem label="我的头像" prop="avatar">
                    <Input v-model="basicDataForm.avatar" style="width: 350px"/>
                  </FormItem>
                  </Col>
                  <Col :xs="24" :md="24" :lg="{span:8,offset:4}" :xl="{span:8,offset:4}">
                  <upload
                    :defaultList="defaultList"
                    @insideDefaultList="handleDefaultList"
                  />
                </Col>
              </Row>
              <FormItem>
                <Button type="primary" @click="handleSubmit" style="width: 100px;">确认修改</Button>
              </FormItem>
            </Form>
          </Card>
          </Col>
          <Col :xs="24" :md="24" :lg="24" :xl="{span:10,offset:2}">
            <Card>
              <p slot="title">
                <Icon type="ios-key-outline" />
                修改密码
              </p>
              <Form ref="passForm" :model="passForm" :rules="ruleValidateByPassword" :label-width="80">
                <FormItem label="当前密码" prop="curPass">
                  <Input type="password"  v-model="passForm.curPass" style="width: 200px;"/>
                </FormItem>
                <FormItem label="新密码" prop="createPass">
                  <Input type="password" v-model="passForm.createPass" style="width: 200px;"/>
                </FormItem>
                <FormItem label="确认密码" prop="checkPass">
                  <Input type="password" v-model="passForm.checkPass" style="width: 200px;"/>
                </FormItem>
                <FormItem>
                  <Button type="primary" style="width: 100px;" @click="handleSubmitPassword">确认修改</Button>
                </FormItem>
              </Form>
            </Card>
          </Col>
        </Row>
      </Card>
  </div>
</template>

<script>
  import upload from '../upload/Upload'
  import axios from 'axios';

  export default {
    name: 'info',
    components: {
      upload
    },
    data() {
      var validateCurpass = (rule, value, callback) => {
        const msg = this.handleIsPassword(value)
        var result = Promise.resolve(msg)
        result.then(msg => {
          if (msg !== undefined) {
            callback(new Error(msg));
          } else {
            callback()
          }
        })
      };
      var validatePass = (rule, value, callback) => {
        if (value !== this.passForm.createPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleValidate: {},
        accessList: [
          {
            value: '超级管理员',
            key: 1
          },
          {
            value: '普通管理员',
            key: 2
          }
        ],
        basicDataForm: {
          userName: '',
          access: '',
          avatar: '',
          pkId: '',
          nickName:''
        },
        defaultList: {
          status: 'finished',
          url: '',
          showProgress: 'false',
          percentage: '',
        },
        passForm: {
          curPass: '',
          createPass: '',
          checkPass: '',
        },
        ruleValidateByPassword: {
          curPass: [
            {required: true, message: '当前密码不能为空', trigger: 'blur'},
            {min: 6, max: 30, message: '长度在6-30之间', trigger: 'blur'},
            {validator: validateCurpass, trigger: 'blur'}
          ],
          createPass: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {min: 6, max: 30, message: '长度在6-30之间', trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '确认密码不能为空', trigger: 'blur'},
            {min: 6, max: 30, message: '长度在6-30之间', trigger: 'blur'},
            {validator: validatePass, trigger: 'blur'},
          ],
        },
      }
    },
    computed: {},
    methods: {
      handleSubmit() {
        let avatarUrl = this.basicDataForm.avatar;
        // 确认修改
        console.log(this.basicDataForm,"handledSubmit()");
      },
      handleDefaultList(defaultList) {
        console.log(this.basicDataForm.pkId,"pkId");
        this.basicDataForm.avatar = defaultList.url;
        this.defaultList = defaultList;
      },
      // 修改密码
      handleSubmitPassword() {
        const user = this.$store.state.userInfo
        const form =  this.passForm
        this.$refs.passForm.validate(valid => {
          if (valid) {
            axios.post('/user/updatePassword',{
              userName: user.userName,
              password: form.createPass
            }).then(response => {
              if (response.data.code === 200) {
                this.$Message.success(response.data.msg)
                this.$refs['passForm'].resetFields()
              } else {
                this.$Message.error(response.data.msg)
                this.$refs['passForm'].resetFields()
              }
            })
          }
        });
      },
      // 密码是否正确
      handleIsPassword(value) {
        const user = this.$store.state.userInfo
        const msg = axios.post('/user/isPassword',{
          userName: user.userName,
          oldPassword: value
        }).then(response =>{
          if (response.data.code !== 200) {
            return response.data.msg
          }
        }).catch(error => {
        })
        return msg
      }
    },
    mounted() {
      let user = this.$store.state.userInfo;
      this.basicDataForm = {
        userName: user.userName,
        access: user.access,
        avatar: user.avatar,
        pkId: user.pkId,
        nickName: user.nickName
      };
      this.defaultList.url = user.avatar;
    }
  }
</script>

<style scoped>

</style>
