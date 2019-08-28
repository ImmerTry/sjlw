<template>
  <div>
    <Modal
      v-model="showCategoryModal"
      :title="modal.title"
      :loading="loading"
      :closable="true">
      <Form ref="categoryFormData" :model="categoryFormData" :rules="ruleValidate" :label-width="80">
        <FormItem style="margin-top:20px" label="分类名称" prop="categoryName">
          <Input type="text" v-model="categoryFormData.categoryName"/>
        </FormItem>
        <FormItem>
          <Button style="float:right" type="primary" @click="handleAddCategory">确认</Button>
          <Button style="float:right;margin-right:8px" type="default" @click="handleCancel">取消</Button>
        </FormItem>
      </Form>
    </Modal>
    <Modal
      v-model="showLabelModal"
      :title="modal.title"
      :loading="loading"
      :closable="true">
      </Form>
        <Form ref="labelFormData" :model="labelFormData" :rules="labelRuleValidate" :label-width="80">
        <FormItem style="margin-top:20px" label="标签名称" prop="labelName">
          <Input type="text" v-model="labelFormData.labelName"/>
        </FormItem>
        <FormItem>
          <Button style="float:right" type="primary" @click="handleAddLabel">确认</Button>
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
                v-model="labelData"
                :tableDatas="labelData"
                :columns="labelColumns"
                :pageTotal="labelPageTotal"
                :pageIndex="labelPageIndex"
                :pageSize="labelPageSize"
                @showMask="showLabelMask">
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
        border: true,
        showCategoryModal: false,
        showLabelModal: false,
        loading: false,
        pageSize: 10,
        pageTotal: 0,
        pageIndex: 1,
        labelPageSize: 10,
        labelPageIndex: 1,
        labelPageTotal: 0,
        modal: {
          title: '',
          option: 'add',
        },
        categoryData: [  
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
                          this.handleDeleteCategory(params);
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
        labelData: [],
        labelColumns: [
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
                        this.handleEditLabel(params);
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
                          this.handleDeleteLabel(params);
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
        categoryFormData: {
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
        },
        labelFormData: {
          pkId: '',
          labelName:''
        },
        labelRuleValidate: {
          labelName: [
            {
              required: true,
              message: '标签名称不能为空',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      // 删除分类信息
      handleDeleteCategory(params) {
        const pkId = params.row.pkId
        axios.post('/user/deleteCategory',{
          pkId
        }).then(res =>{
          if (res.data.code === 200) {
            this.$Message.success(res.data.msg)
            this.initCategoryTableData()
          } else {
            this.$Message.success(res.data.msg)
          }
        }).catch(error =>{})
      },
      // 删除标签信息
      handleDeleteLabel(params) {
        const pkId = params.row.pkId
        axios.post('/user/deleteLabel',{
          pkId
        }).then(res =>{
          if (res.data.code === 200) {
            this.$Message.success(res.data.msg)
            this.initLabelTabelData()
          } else {
            this.$Message.success(res.data.msg)
          }
        }).catch(error =>{})
      },
      // 编辑分类信息
      handleEdit(params) {
        this.modal = {
          title: "编辑分类信息",
          option: "edifCategory"
        }
        this.categoryFormData = {
          pkId: params.row.pkId,
          categoryName: params.row.categoryName
        }
        this.showCategoryModal = true
      },
      // 编辑标签信息
      handleEditLabel(params) {
        this.modal = {
          title: '编辑分类信息',
          option: 'editLabel'
        }
        this.labelFormData = {
          pkId: params.row.pkId,
          labelName: params.row.labelName
        }
        this.showLabelModal = true
      },
      // 是否展示 "分类管理表中添加" 按钮弹出的模态框
      showMask(mask) {
        this.showCategoryModal = mask
        this.modal = {
          title: "添加分类信息",
          option: "addCategory"
        }
      },
      // 添加分类信息
      handleAddCategory() {
        this.$refs.categoryFormData.validate(valid => {
          if (valid) {
            const obj = this.$refs.categoryFormData.model
            const option = this.modal.option
            if (option === "addCategory") {
              axios.post('/user/addCategory',{
                categoryName: obj.categoryName
              }).then(res =>{
                this.showCategoryModal = false
                if (res.data.code === 200) {
                  this.$Message.success(res.data.msg)
                  this.initCategoryTableData()
                } else {
                  this.$Message.error(res.data.msg)
                }
              }).catch(error =>{})
            } else {
              const categoryName = this.$refs.categoryFormData.model.categoryName
              const pkId = this.$refs.categoryFormData.model.pkId
              axios.post('/user/updateCategory',{
                pkId,
                categoryName
              }).then(res =>{
                this.showCategoryModal = false
                if (res.data.code === 200) {
                  this.$Message.success(res.data.msg)
                  this.initCategoryTableData()
                } else {
                  this.$Message.error(res.data.msg)
                }
              }).catch(error =>{})
            }
          } else {
            this.$Message.error("验证未通过")
          }
        });
      },
      // 添加标签信息
      handleAddLabel() {
        this.$refs.labelFormData.validate(valid => {
          if (valid) {
            const obj = this.$refs.labelFormData.model
            const option = this.modal.option
            if (option === "addLabel") {
              axios.post('/user/addLabel',{
                labelName: obj.labelName
              }).then(res =>{
                this.showLabelModal = false
                if (res.data.code === 200) {
                  this.$Message.success(res.data.msg)
                  this.initLabelTabelData()
                } else {
                  this.$Message.error(res.data.msg)
                }
              }).catch(error => {})
            } else {
              const labelName = this.$refs.labelFormData.model.labelName
              const pkId = this.$refs.labelFormData.model.pkId
              axios.post('/user/editLabel',{
                pkId,
                labelName
              }).then(res => {
                this.showLabelModal = false
                if (res.data.code === 200) {
                  this.$Message.success(res.data.msg)
                  this.initLabelTabelData()
                } else {
                  this.$Message.error(res.data.msg)
                }
              }).catch(error => {})
            }
          } else {
            this.$Message.error("验证未通过")
          }
        })
      },
      // 取消
      handleCancel() {
        this.$refs.categoryFormData.resetFields()//refs对应form的ref属性
        this.showCategoryModal =false
        this.$refs.labelFormData.resetFields();
        this.showLabelModal = false
      },
      // 是否展示 "标签管理表中添加" 按钮弹出的模态框
      showLabelMask(mask) {
        this.showLabelModal = mask
        this.modal = {
          title: '添加标签信息',
          option: 'addLabel'
        }
      },
      // 初始化分类管理表格
      initCategoryTableData(){
        axios.post('/user/getTableData',{
          pageSize: this.pageSize,
          pageIndex: this.pageIndex
        }).then(res =>{
          if (res.data.code === 200) {
            const map = res.data.data
            this.categoryData = map.categoryList
            this.pageSize = map.pageSize;
            this.pageTotal = map.categoryList.length;
            this.pageIndex = map.pageIndex
          } else {
            this.$Message.error(res.data.msg)
          }
        }).catch(error =>{})
      },
      // 初始化标签管理表格
      initLabelTabelData() {
        axios.post('/user/getLabelData',{
          pageSize: this.labelPageSize,
          pageIndex: this.labelPageIndex
        }).then(res => {
          if (res.data.code === 200) {
            const map = res.data.data
            this.labelData = map.labelList
            this.labelPageSize = map.pageSize;
            this.labelPageTotal = map.labelList.length;
            this.labelPageIndex = map.pageIndex
          } else {
            this.$Message.error(res.data.msg)
          }
        }).catch(error =>{})
      }
    },
    mounted() {
      this.initCategoryTableData()
      this.initLabelTabelData()
    }
  }
</script>

<style scoped>

</style>
