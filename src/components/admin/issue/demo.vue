<template>
    <div>
        <Input v-model="value" placeholder="请输入..." style="width: 300px" @on-enter="handleAdd"></Input>
        <Button icon="ios-plus-empty" type="dashed" size="big" @click="handleAdd" shape="circal">添加标签</Button>
            <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">{{ item }}</Tag>
        <Button size="big" @click="change" shape="circal">数组转化字符串</Button>
        <Button size="big" @click="change1" shape="circal">字符串转化数组</Button>
    </div>
</template>
<script>
export default {
    name: 'demo',
    data() {
        return {
            count: [0,1,2],
            value: ''
        }
    },
     methods: {
        handleAdd () { 
        if (this.value!=="") {
            this.count.push(this.value);
            this.value=""
        } else {
            this.$Message.info('不能为空');
        }
    },
        handleClose2 (event, name) {
            const index = this.count.indexOf(name);
            this.count.splice(index, 1);
        },
        change(){
            console.log(this.count.join(","));
            
        },
        change1(){
            let string=this.count.join(",")
            console.log(string)
            console.log(typeof(string))
            let arry=string.split(",")
            console.log(typeof(arry))
            console.log(arry)
            console.log(typeof(this.count))
        }
    }
}
</script>
<style lang="less" scoped>

</style>