<template>
  <div>
    <Modal
      v-model="showModal"
      :title="modal.title"
      :loading="loading"
      :closable="true">
      <Form ref="formData" :model="formData" :label-width="80">
        <FormItem style="margin-top:20px" label="分类名称" prop="categoryId">
          <Input type="text" v-model="formData.categoryId"/>
        </FormItem>
        <FormItem>
          <Button style="float:right" type="primary">确认</Button>
          <Button style="float:right;margin-right:8px" type="default">取消</Button>
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

  export default {
    name: 'tags',
    components: {
      Tables
    },
    data() {
      return {
        tableData: [
          {
            pkId: 1,
            labelId: 'test'
          },
          {
            pkId: 2,
            labelId: 'test'
          },
          {
            pkId: 3,
            labelId: 'test'
          }
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
            key: 'labelId'
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
            key: 'categoryId'
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
          {
            pkId: 1,
            categoryId: 'hello'
          },
          {
            pkId: 2,
            categoryId: 'world'
          },
          {
            pkId: 3,
            categoryId: 'you'
          }
        ],
        showModal: false,
        loading: false,
        modal: {
          title: '',
          option: 'add',
        },
        formData: {}
      }
    },
    methods: {
      handleDelete(params) {
        console.log(params)
      },
      handleEdit(params) {
        console.log(params)
        this.modal = {
          title: "编辑分类信息",
          option: "edifCategory"
        }
        this.formData = {
          pkId: params.row.pkId,
          categoryId: params.row.categoryId
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
      asyncOK() {
        // this.$refs.formData.validate(valid => {
        //   if (valid) {
        //     let news = this.$refs.formData.model;
        //     let option = this.modal.option;
        //     if (option === "add") {
        //       insertTableData(news).then(res => {
        //         // console.log(res.data);
        //         this.asyncNo();
        //         Message.success(res.data.data);
        //         this.initTableData()
        //       })
        //     } else {
        //       updateTableData(news).then(res => {
        //         this.asyncNo();
        //         Message.success(res.data.data);
        //         this.initTableData()
        //       })
        //     }
        //     // console.log(this.modal.opotion);
        //   } else {
        //     console.log(this.$refs.formData);
        //     Message.error("验证未通过");
        //   }
        // });
      },
      asyncNo() {
        this.$refs.formData.resetFields();//refs对应form的ref属性
      
        // this.initTableData()
      },
    }
  }
</script>

<style scoped>

</style>
