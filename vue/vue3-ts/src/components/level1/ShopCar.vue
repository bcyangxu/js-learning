<template>
    <div>
        <input type="text" placeholder="请输入名称" v-model="KeyWord">
        <table style="margin-top: 10px;" width="500" cellspacing="0" cellpadding="0" border>
            <thead>
                <tr>
                    <td>物品</td>
                    <td>单价</td>
                    <td>数量</td>
                    <td>总价</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in searchData">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <button @click="item.num > 1 ? item.num-- : null">-</button>
                        <input type="number" v-model="item.num">
                        <button @click="item.num < 99 ? item.num++ : null">+</button>
                    </td>
                    <td>{{ item.price * item.num }}</td>
                    <td>
                        <button @click="del(index)">delete</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" align="right">
                        <span>总价: {{ total }}</span>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';

let KeyWord = ref<string>('')

interface Data {
    name:string,
    price:number,
    num:number
}

const data = reactive<Data[]>([
    {
        name:'iphone',
        price:100,
        num:2
    },
    {
        name:'xiaomi',
        price:10,
        num:20
    },
    {
        name:'oppo',
        price:30,
        num:10
    } 
])

let searchData = computed( () => {
    return data.filter(item => item.name.includes(KeyWord.value))
})

let total = computed(() => {
    return data.reduce((prev: number, next: Data) => {
        return prev + next.num * next.price
    },0)
})

const del = (index: number) => {
    data.splice(index,1)
}
</script>
<style scoped>
    
</style>