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
              <Form :label-width="80">
                <FormItem label="当前密码">
                  <Input type="password" style="width: 150px"/>
                </FormItem>
                <FormItem label="新密码">
                  <Input type="password" style="width: 150px"/>
                </FormItem>
                <FormItem label="确认新密码">
                  <Input type="password" style="width: 150px"/>
                </FormItem>
                <FormItem>
                  <Button type="primary">确认修改</Button>
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
  import Message from 'iview'

  export default {
    name: 'info',
    components: {
      upload
    },
    data() {
      return {
        ruleValidate: {},
        accessList: [
          {
            value: '超级管理员',
            key: 'super_admin'
          },
          {
            value: '普通管理员',
            key: 'admin'
          }
        ],
        basicDataForm: {
          userName: '',
          access: '',
          avatar: '',
          userId: ''
        },
        defaultList: {
          status: 'finished',
          url: '',
          showProgress: 'false',
          percentage: '',
        }
      }
    },
    computed: {},
    methods: {
      handleSubmit() {
        // let avatarUrl = this.basicDataForm.avatar;
        console.log(this.basicDataForm);
      },
      handleDefaultList(defaultList) {
        console.log(this.basicDataForm.userId);
        this.basicDataForm.avatar = defaultList.url;
        this.defaultList = defaultList;
      },
    },
    mounted() {
      // let user = this.$store.state.user;
      // this.basicDataForm = {
      //   userName: user.userName,
      //   access: user.access,
      //   avatar: user.avatar,
      //   userId: user.userId
      // };
      // this.defaultList.url = user.avatar;
    }
  }
</script>

<style scoped>

</style>
