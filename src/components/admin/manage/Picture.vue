<template>
  <div>
  </div>
</template>

<script>
  import Tables from '../tables/Table'

  export default {
    name: 'picture',
    components: {
      Tables
    },
    data() {
      return {
        tableData: [
          {
            pkId: 1,
            categoryId: 'test'
          },
          {
            pkId: 2,
            categoryId: 'test'
          },
          {
            pkId: 3,
            categoryId: 'test'
          },
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
        ]
      }
    },
    methods: {
      handleDelete(data) {
        console.log(data)
      },
      handleEdit(data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>
