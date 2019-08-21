<template>
  <div>
    <Card>
      <Form
        ref="editorData"
        :model="editorData"
        :rules="ruleValidate"
        :label-width="80"
        @update="getLocalStorage">
        <Row class="rowClass">
          <Col :xs="24" :md="24" :lg="8" :xl="{span:8}">
            <FormItem prop="title" label="文章标题" class="formClass">
              <Input type="text" v-model="editorData.title" placeholder="文章标题"/>
            </FormItem>
          </Col>
          <Col :xs="24" :md="24" :lg="8" :xl="{span:4,offset:1}">
          <RadioGroup v-model="editorData.type">
            <Radio label="原创" size="default"></Radio>
            <Radio label="转载"size="default" ></Radio>
          </RadioGroup>
          </Col>
          <Col :xs="24" :md="24" :lg="8" :xl="{span:8,offset:1}">
            <FormItem prop="newsFrom" label="新闻来源">
              <Input type="text" v-model="editorData.newsFrom" placeholder="新闻来源"/>
            </FormItem>
          </Col>
        </Row> 
        <Row>
          <Col :xs="24" :md="24" :lg="8" :xl="{span:7}">
          <FormItem prop="category" label="文章类型">
            <Select
              v-model="editorData.category"
              placeholder="文章分类"
              style="width:200px">
              <Option
                v-for="item in newsTypeList"
                :key="item.key"
                :value="item.key">
                {{item.value}}
              </Option>
            </Select>
          </FormItem>
          </Col>
          <Col :xs="24" :md="24" :lg="8" :xl="{span:4,offset:1}">
            <FormItem prop="author" label="作者">
              <Input type="text" disabled v-model="editorData.author"/>
            </FormItem>
          </Col>
          <Col :xs="24" :md="24" :lg="8" :xl="{span:10,offset:1}">
            <FormItem prop="label" label="标签">
              <Tag
              v-for="item in dynamicTags"
              :key="item"
              :name="item"
              closable
              @on-close="handleClose">
                {{ item }}
              </Tag>
              <Input
              ref="saveTagInput"
              v-if="inputVisible"
              v-model="inputValue"
              @on-enter="handleInputConfirm"
              @on-blur="handleInputConfirm"
              size="small">
              </Input>
              <Button v-else icon="ios-add"  size="small" @click="showInput">添加标签</Button>
            </FormItem>
          </Col>
        </Row>
        <FormItem prop="content" label="文章内容">
          <editor
            :cache="cache"
            :value="editorData.content"
            :editorReset="editorReset"
            :valueType="valueType"
            @on-change="uploadChange"
            @input="uploadData"
          />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('editorData')">提交</Button>
          <Button type="error" style="margin-left: 8px" @click="handleReset">重置</Button>
          <Button style="margin-left: 8px" type="success" @click="handleSaveLocal('editorData')">存入草稿</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
  import Editor from '../editor/Editor'
  import {Message} from 'iview'

  export default {
    name: 'issue',
    data() {
      return {
        editorData: {
          title: '',
          content: '',
          type: '原创',
          newsFrom: '',
          author: 'admin',
          category: '',
          label: []
        },
        ruleValidate: {
          title: [
            {
              required: true,
              message: '文章标题不能为空',
              trigger: 'blur'
            }
          ],
          content: [
            {
              required: true,
              message: '请核实是否添加文章内容',
              trigger: 'blur',
            }
          ],
          category: [
            {
              required: true,
              message: '文章分类不能为空',
              trigger: 'blur',
              type: 'number'
            }
          ],
          newsFrom: [
            {
              required: true,
              message: '文章来源不能为空',
              trigger: 'blur',
            }
          ],
        },
        valueType: 'html',
        cache: true,
        newsTypeList: [
          {
            value: '时政要闻',
            key: 0
          },
          {
            value: '成功案例',
            key: 1
          },
          {
            value: '企业新闻',
            key: 2
          },
        ],
        editorReset: false,
        dynamicTags: [],
        inputValue: '',
        inputVisible: false
      }
    },
    components: {
      Editor
    },
    methods: {
      uploadData(data) {
        this.editorData.content = data;
      },
      uploadChange(html, text) {
        // console.log(text);
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.editorData.label = this.dynamicTags
            console.log(this.$refs.editorData.model);
            Message.success("添加成功")
          } else {
            Message.error("未通过验证")
          }
        })
      },
      deleteLocalStorage() {
        localStorage.removeItem('editorData');
        localStorage.removeItem('editorCache');
        // this.$refs.editorData.resetFields();
        this.editorData.title = '';
        this.editorData.content = '';
        this.editorData.category = '';
        this.editorData.newsFrom = '';
        this.dynamicTags = [];
        this.editorReset = true;
      },
      handleReset() {
        this.$Modal.confirm({
          title: "提示",
          content: `<div class="modal-bd modal-bd2">
                        <p>确定重置该条信息？</p><br>
                        <p>如想恢复需重新手动添加</p>
                    </div>`,
          onOk: () => {
            this.deleteLocalStorage();
          }
        })
      },
      handleSaveLocal(name) {
        const editorData = this.$refs[name].model;
        this.editorData.label = this.dynamicTags
        if (this.cache) {
          localStorage.setItem('editorData', JSON.stringify(editorData));
        }
        Message.success("存入草稿成功");
      },
      getLocalStorage() {
        // 如果本地有存储加载本地存储内容
        let localData = localStorage.getItem("editorData");
        var data = JSON.parse(localData);
        if (data) {
          this.editorData = data;// 设置内容
          this.dynamicTags = data.label;
        }
      },
      showInput() {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm () {
        let flag = true;
        let inputValue = this.inputValue
        this.dynamicTags.forEach(v=>{  
            if (inputValue === v) {
                console.log(inputValue === v,"当前标签已存在")
                return flag = false; 
            }
        })
        if (inputValue && flag) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false
        this.inputValue = ''
      },
      handleClose (event, name) {
        const index = this.dynamicTags.indexOf(name);
        this.dynamicTags.splice(index, 1);
      }
    },
    created() {
      // this.showInput()
    },
    mounted() {
      this.getLocalStorage();
    }
  }
</script>

<style scoped>
.rowClass{
  line-height: 32px;
  font-size: 18px;
}
</style>
