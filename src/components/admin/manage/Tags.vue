<template>
  <div>
    <Modal
      v-model="showModal"
      :title="modal.title"
      :loading="loading"
      :closable="true">
      <Form ref="formData" :model="formData" :rules="ruleValidate" :label-width="80">
        <FormItem style="margin-top:20px" label="分类名称" prop="categoryName">
          <Input type="text" v-model="formData.categoryName"/>
        </FormItem>
        <FormItem>
          <Button style="float:right" type="primary" @click="handleAddCategory">确认</Button>
          <Button style="float:right;margin-right:8px" type="default" @click="handleCancel">取消</Button>
        </FormItem>
      </Form>
    </Modal>
    <Card shadow>
      <Row>
        <Col :xs="24" :md="24" :lg="24" :xl="{span:10,offset:1}">
          <Card style="width:100%;margin-bottom:40px">
            <p slot="title">
              <Icon type="ios-pricetags-outline" />
              标签管理
            </p>
                <Tables
                ref="tables"
                searchable
                searchPlace="top"
                :border="border"
                v-model="tableData"
                :tableDatas="tableData"
                :columns="columns"
                :pageTotal="pageTotal"
                :pageIndex="pageIndex"
                :pageSize="pageSize">
                </Tables>
          </Card>
        </Col>
        <Col :xs="24" :md="24" :lg="24" :xl="{span:10,offset:2}">
          <Card style="width:100%">
            <p slot="title">
              <Icon type="ios-paper-outline" />
              分类管理
            </p>
            <Tables
            ref="tables"
            searchable
            searchPlace="top"
            :border="border"
            v-model="categoryData"
            :tableDatas="categoryData"
            :columns="categoryColumns"
            :pageTotal="pageTotal"
            :pageIndex="pageIndex"
            :pageSize="pageSize"
            @showMask="showMask">
            </Tables>
          </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
  import Tables from '../tables/Table'
  import axios from 'axios'

  export default {
    name: 'tags',
    components: {
      Tables
    },
    data() {
      return {
        tableData: [
          
        ],
        border: true,
        pageSize: 10,
        pageTotal: 0,
        pageIndex: 1,
        columns: [
          {
            title: '编号',
            key: 'pkId'
          },
          {
            title: '标签名称',
            key: 'labelName'
          },
          {
            title: '操作',
            key: 'handle',
            width: 150,
            align: 'center',
            button: [
              (h, params, vm) => {
                // console.log(tableData)
                return h('p', [
                  h('Button', {
                    props: {
                      type: 'success',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      marginLeft: '5px'
                    },
                    on: {
                      click: () => {
                        this.handleEdit(params);
                      }
                    }
                  }, [h('Icon', {
                    props: {
                      type: 'edit',
                      size: 18
                    }
                  }), '编辑']),

                  h('Poptip', {
                      props: {
                        confirm: true,
                        title: '你确定要删除吗?',
                        transfer: true
                      },
                      on: {
                        'on-ok': () => {
                          this.handleDelete(params);
                        }
                      }
                    },
                    [
                      h('Button', {
                        props: {
                          type: 'error',
                          size: 'small'
                        },
                        style: {
                          marginRight: '5px',
                          marginLeft: '5px'
                        }

                      }, [h('Icon', {
                        props: {
                          type: 'trash-b',
                          size: 18
                        }
                      }), '删除'])
                    ])
                ])
              }
            ]
          }
        ],
        categoryColumns: [
          {
            title: '编号',
            key: 'pkId'
          },
          {
            title: '分类名称',
            key: 'categoryName'
          },
          {
            title: '操作',
            key: 'handle',
            width: 150,
            align: 'center',
            button: [
              (h, params, vm) => {
                // console.log(tableData)
                return h('p', [
                  h('Button', {
                    props: {
                      type: 'success',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      marginLeft: '5px'
                    },
                    on: {
                      click: () => {
                        this.handleEdit(params);
                      }
                    }
                  }, [h('Icon', {
                    props: {
                      type: 'edit',
                      size: 18
                    }
                  }), '编辑']),

                  h('Poptip', {
                      props: {
                        confirm: true,
                        title: '你确定要删除吗?',
                        transfer: true
                      },
                      on: {
                        'on-ok': () => {
                          this.handleDelete(params);
                        }
                      }
                    },
                    [
                      h('Button', {
                        props: {
                          type: 'error',
                          size: 'small'
                        },
                        style: {
                          marginRight: '5px',
                          marginLeft: '5px'
                        }

                      }, [h('Icon', {
                        props: {
                          type: 'trash-b',
                          size: 18
                        }
                      }), '删除'])
                    ])
                ])
              }
            ]
          }
        ],
        categoryData: [
          
        ],
        showModal: false,
        loading: false,
        modal: {
          title: '',
          option: 'add',
        },
        formData: {
          pkId:'',
          categoryName:''
        },
        ruleValidate: {
          categoryName: [
            {
              required: true,
              message: '分类名称不能为空',
              trigger: 'blur'
            }
          
          ]
        }
      }
    },
    methods: {
      handleDelete(params) {
        const pkId = params.row.pkId
        axios.post('/user/deleteCategory',{
          pkId
        }).then(response =>{
          if (response.data.code === 200) {
            this.$Message.success(response.data.msg)
            this.initTableData()
          } else {
            this.$Message.success(response.data.msg)
          }
        }).catch(error =>{})
      },
      handleEdit(params) {
        this.modal = {
          title: "编辑分类信息",
          option: "edifCategory"
        }
        this.formData = {
          pkId: params.row.pkId,
          categoryName: params.row.categoryName
        }
        this.showModal = true
      },
      handleAdd() {
        this.modal = {
          title: "添加分类信息",
          option: "addCategory"
        }
      },
      showMask(mask) {
        this.showModal = mask
        this.handleAdd()
      },
      handleAddCategory() {
        this.$refs.formData.validate(valid => {
          if (valid) {
            let obj = this.$refs.formData.model
            let option = this.modal.option;
            console.log(option,"opation")
            if (option === "addCategory") {
              axios.post('/user/addCategory',{
                categoryName: obj.categoryName
              }).then(response =>{
                this.showModal = false
                if (response.data.code === 200) {
                  this.$Message.success(response.data.msg)
                  this.initTableData()
                } else {
                  this.$Message.error(response.data.msg)
                }
              }).catch(error =>{})
            } else {
              const categoryName = this.$refs.formData.model.categoryName
              const pkId = this.$refs.formData.model.pkId
              axios.post('/user/updateCategory',{
                pkId,
                categoryName
              }).then(response =>{
                this.showModal = false
                if (response.data.code === 200) {
                  this.$Message.success(response.data.msg)
                  this.initTableData()
                } else {
                  this.$Message.error(response.data.msg)
                }
              }).catch(error =>{})
            }
          } else {
            this.$Message.error("验证未通过")
          }
        });
      },
      handleCancel() {
        this.$refs.formData.resetFields();//refs对应form的ref属性
        this.showModal =false
      },
      initTableData(){
        axios.post('/user/getTableData',{
          pageSize: this.pageSize,
          pageIndex: this.pageIndex
        }).then(response =>{
          if (response.data.code === 200) {
            const map = response.data.data
            this.categoryData = map.categoryList
            this.pageSize = map.pageSize;
            this.pageTotal = map.categoryList.length;
            this.pageIndex = map.pageIndex
          } else {
            this.$Message.error(response.data.msg)
          }
        }).catch(error =>{

        })
      }
    },
    mounted() {
      this.initTableData()
    }
  }
</script>

<style scoped>

</style>
